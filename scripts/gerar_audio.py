#!/usr/bin/env python3
"""
Gera a narração em voz neural (edge-tts) para cada página das histórias.

Para cada página cria:
  audio/<id>-<i>.mp3    -> o áudio narrado
  audio/<id>-<i>.json   -> { "dur": <segundos>, "marks": [{"t": seg, "c": charIndex}] }

As "marks" guardam o instante (t) em que cada palavra começa a ser falada e a
posição dela no texto (c), para o app destacar a palavra em sincronia com o áudio.

Uso:
  python3 scripts/gerar_audio.py            # gera tudo que falta
  python3 scripts/gerar_audio.py --force    # regenera tudo
  VOICE=pt-BR-AntonioNeural python3 scripts/gerar_audio.py

Requisitos: pip install edge-tts
"""
import asyncio
import json
import os
import sys

import edge_tts

VOICE = os.environ.get("VOICE", "pt-BR-FranciscaNeural")
RATE = os.environ.get("RATE", "-8%")  # ritmo levemente mais calmo, para crianças
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO_DIR = os.path.join(ROOT, "audio")
PAGES_JSON = os.environ.get("PAGES_JSON", "/tmp/pages.json")
FORCE = "--force" in sys.argv
CONCURRENCY = 4


def char_index_of_word(text, word, cursor):
    """Encontra a posição da palavra no texto a partir de um cursor que avança."""
    idx = text.find(word, cursor[0])
    if idx < 0:
        # tenta sem depender do cursor (fallback)
        idx = text.find(word)
        if idx < 0:
            return cursor[0]
    cursor[0] = idx + len(word)
    return idx


async def gen_one(sem, page):
    key = page["key"]
    text = page["text"]
    mp3_path = os.path.join(AUDIO_DIR, key + ".mp3")
    json_path = os.path.join(AUDIO_DIR, key + ".json")
    if not FORCE and os.path.exists(mp3_path) and os.path.exists(json_path):
        return f"pulado {key}"

    async with sem:
        communicate = edge_tts.Communicate(text, VOICE, rate=RATE, boundary="WordBoundary")
        marks = []
        cursor = [0]
        last_end = 0.0
        with open(mp3_path, "wb") as f:
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    f.write(chunk["data"])
                elif chunk["type"] == "WordBoundary":
                    t = chunk["offset"] / 1e7  # 100ns -> segundos
                    dur = chunk.get("duration", 0) / 1e7
                    last_end = t + dur
                    word = chunk.get("text", "")
                    c = char_index_of_word(text, word, cursor)
                    marks.append({"t": round(t, 3), "c": c})
        with open(json_path, "w", encoding="utf-8") as jf:
            json.dump({"dur": round(last_end, 3), "marks": marks}, jf, ensure_ascii=False)
    return f"ok {key} ({len(marks)} palavras)"


async def main():
    os.makedirs(AUDIO_DIR, exist_ok=True)
    with open(PAGES_JSON, encoding="utf-8") as f:
        pages = json.load(f)
    print(f"Voz: {VOICE} | rate: {RATE} | páginas: {len(pages)}")
    sem = asyncio.Semaphore(CONCURRENCY)
    results = await asyncio.gather(*(gen_one(sem, p) for p in pages))
    ok = sum(1 for r in results if r.startswith("ok"))
    skip = sum(1 for r in results if r.startswith("pulado"))
    print(f"Gerados: {ok} | Pulados (já existiam): {skip}")


if __name__ == "__main__":
    asyncio.run(main())

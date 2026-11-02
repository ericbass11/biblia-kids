#!/usr/bin/env python3
"""
Gera as ilustrações das cenas usando a API gratuita da Pollinations.ai
(modelo Flux), sem chave de API. Estilo: 3D fofo (tipo Pixar).

Cada cena vira um arquivo em img/<id>-<cena>.jpg (a oração vira img/prayer.jpg).

Uso:
  python3 scripts/gerar_imagens.py            # gera o que faltar
  python3 scripts/gerar_imagens.py --force    # regenera tudo
  STYLE="..." python3 scripts/gerar_imagens.py  # trocar o estilo

Requisitos: só a biblioteca padrão do Python.
"""
import concurrent.futures
import json
import os
import ssl
import time
import sys
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "img")
PROMPTS = os.path.join(ROOT, "scripts", "image_prompts.json")
FORCE = "--force" in sys.argv
WIDTH, HEIGHT = 800, 600
MODEL = os.environ.get("MODEL", "sana")  # sana gera anatomia bem mais correta

STYLE = os.environ.get(
    "STYLE",
    "cute wholesome 3D animated movie still, Pixar and Disney style, soft rounded "
    "characters with clean correct anatomy, well-formed hands, symmetrical pleasant "
    "faces, big friendly eyes, warm colorful palette, soft cinematic lighting, "
    "children Bible storybook, high quality detailed 3D render, "
    "no text, no words, no letters, no deformed hands, no extra fingers, "
    "no extra limbs, no distorted faces, no mutated features",
)

# Semente fixa por história -> ajuda a manter uma paleta/estilo coerente
SEEDS = {
    "criacao": 11, "noe": 22, "davi": 42, "daniel": 33, "natal": 47,
    "tempestade": 55, "samaritano": 66, "ovelha": 77, "jonas": 88,
    "criancas": 99, "prayer": 100,
    "pascoa": 120, "moises": 131, "paes": 142, "prodigo": 153, "cana": 164,
    "jose": 175, "zaqueu": 186, "abraao": 197, "sansao": 208, "ester": 219,
    "pentecostes": 230,
}

# Contexto de personagem por história (reforça consistência entre páginas)
ANCHOR = {
    "noe": "Noah is a kind old man with a long white beard and brown robe. ",
    "davi": "David is a cute small shepherd boy with short brown hair and a tan tunic. ",
    "daniel": "Daniel is a young man with dark hair and beard in a purple robe with gold sash. ",
    "natal": "Mary wears a blue robe, Joseph a brown robe with beard. ",
    "tempestade": "Jesus has long brown hair and beard, a red tunic and blue cloak. ",
    "ovelha": "The shepherd wears a blue robe and carries a wooden staff. ",
    "jonas": "Jonah is a man with a short brown beard, green tunic and orange belt. ",
    "criancas": "Jesus has long brown hair and beard and wears a white robe with a gentle smile. ",
    "pascoa": "Jesus has long brown hair and beard and wears a white robe. ",
    "moises": "Moses is a man with a long white beard, a brown robe and a wooden staff. ",
    "paes": "Jesus has long brown hair and beard and wears a white robe. ",
    "prodigo": "The father is a kind older man in a warm red robe; the younger son is a young man in simple clothes. ",
    "cana": "Jesus has long brown hair and beard; Mary wears a blue robe. ",
    "jose": "Joseph is a young man with short dark hair wearing a colorful striped coat. ",
    "zaqueu": "Zacchaeus is a very short small man in rich yellow clothes; Jesus has long brown hair, beard and a white robe. ",
    "abraao": "Abraham is an old man with a long white beard and brown robe; Sarah is an older woman in a soft cream robe. ",
    "sansao": "Samson is a strong young man with very long dark hair and a simple tunic. ",
    "ester": "Esther is a young woman with long dark hair in a royal purple and gold dress. ",
    "pentecostes": "The apostles are men in simple robes; Mary wears a blue robe. ",
}

CTX = ssl.create_default_context()
_ca = os.environ.get("SSL_CERT_FILE") or os.environ.get("REQUESTS_CA_BUNDLE")
if _ca and os.path.exists(_ca):
    CTX.load_verify_locations(_ca)


def filename_for(key):
    return (key.replace(":", "-") if ":" in key else key) + ".jpg"


def build_prompt(key, scene_prompt):
    story = key.split(":")[0] if ":" in key else key
    return ANCHOR.get(story, "") + scene_prompt + ", " + STYLE


def gen(key, scene_prompt):
    story = key.split(":")[0] if ":" in key else key
    seed = SEEDS.get(story, 7)
    path = os.path.join(IMG_DIR, filename_for(key))
    if not FORCE and os.path.exists(path) and os.path.getsize(path) > 2000:
        return f"pulado {key}"
    prompt = build_prompt(key, scene_prompt)
    enc = urllib.parse.quote(prompt)
    url = (
        f"https://image.pollinations.ai/prompt/{enc}"
        f"?width={WIDTH}&height={HEIGHT}&nologo=true&seed={seed}&model={MODEL}"
    )
    last_err = None
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "biblia-kids/1.0"})
            with urllib.request.urlopen(req, context=CTX, timeout=180) as r:
                data = r.read()
            if len(data) < 2000:
                last_err = f"resposta muito pequena ({len(data)} bytes)"
                continue
            with open(path, "wb") as f:
                f.write(data)
            return f"ok {key} ({len(data)} bytes)"
        except Exception as e:  # noqa: BLE001
            last_err = str(e)
            # 402/429 = limite de taxa do serviço: espera progressiva
            if "402" in last_err or "429" in last_err:
                time.sleep(20 * (attempt + 1))
            else:
                time.sleep(2)
    return f"ERRO {key}: {last_err}"


def main():
    os.makedirs(IMG_DIR, exist_ok=True)
    with open(PROMPTS, encoding="utf-8") as f:
        prompts = json.load(f)
    print(f"Cenas: {len(prompts)} | estilo: {STYLE[:40]}...")
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as ex:
        futs = {ex.submit(gen, k, v): k for k, v in prompts.items()}
        for fut in concurrent.futures.as_completed(futs):
            res = fut.result()
            results.append(res)
            if res.startswith("ERRO"):
                print(" ", res)
    ok = sum(1 for r in results if r.startswith("ok"))
    skip = sum(1 for r in results if r.startswith("pulado"))
    err = sum(1 for r in results if r.startswith("ERRO"))
    print(f"Gerados: {ok} | Pulados: {skip} | Erros: {err}")
    sys.exit(1 if err else 0)


if __name__ == "__main__":
    main()

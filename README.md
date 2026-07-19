# 📖 Bíblia Kids

Um **livro digital interativo** de histórias bíblicas católicas para crianças,
com **narração em voz alta** (a voz conta a história) e **ilustrações** de cada
cena.

Feito para ser simples, acolhedor e seguro para os pequeninos. 💛

## ✨ O que tem no app

- **10 histórias da Bíblia** contadas com linguagem carinhosa para crianças:
  - A Criação do Mundo
  - Noé e a Arca
  - Davi e Golias
  - Daniel na Cova dos Leões
  - O Nascimento de Jesus
  - Jesus Acalma a Tempestade
  - O Bom Samaritano
  - A Ovelha Perdida
  - Jonas e o Grande Peixe
  - Jesus e as Crianças
- **Narração por voz neural** em português (voz *Francisca*, calorosa) — a
  criança pode só ouvir a história. Os áudios são pré-gravados e servidos como
  arquivos estáticos; se algum não puder tocar, o app usa a voz do próprio
  navegador como reserva.
- As palavras ficam **destacadas** enquanto são lidas — ajuda na alfabetização.
- **Ilustração em 3D (estilo desenho animado) em cada página**, para a criança
  ver a cena acontecer. Se alguma imagem faltar, o app usa uma ilustração
  vetorial (SVG) embutida como reserva.
- **Vira a página sozinho** ao terminar de ler (opcional).
- Uma **oração** carinhosa ao final de cada história.
- Funciona no **celular, tablet e computador**; pode ser instalado como app
  (PWA) na tela inicial.

## ▶️ Como usar

Abra o `index.html` no navegador (Chrome ou Safari recentes são os melhores
para a voz em português). Ou sirva a pasta com um servidor simples:

```bash
# Python
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

1. Escolha uma história na **biblioteca**.
2. Toque em **▶ Ouvir** para a voz contar a página.
3. Use as **setas** (ou deslize o dedo) para virar as páginas.
4. No **⚙️ Configurações** dá para mudar a velocidade da voz, escolher a voz e
   ligar/desligar o "virar página sozinho".

> A narração usa a **Web Speech API** do próprio navegador — não precisa de
> internet nem de nenhuma chave de API. As vozes disponíveis dependem do
> aparelho/navegador.

## 🗂️ Estrutura

```
index.html               # Estrutura do app
styles.css               # Visual (livro infantil, responsivo)
app.js                   # Lógica: navegação, voz, destaque de palavras
stories.js               # Texto das histórias (páginas + oração)
img/                     # Ilustrações 3D de cada cena (<id>-<cena>.jpg)
scenes/                  # Ilustrações SVG (reserva, caso falte a imagem)
  base.js                #   cena de oração + fallback
  <historia>.js          #   ilustrações de cada história
audio/                   # Narração neural pré-gravada
  <id>-<n>.mp3           #   áudio de cada página
  <id>-<n>.json          #   marcação de tempo das palavras (destaque)
scripts/gerar_audio.py   # Gera/atualiza os áudios (edge-tts)
manifest.webmanifest     # Instalação como app (PWA)
```

### 🎙️ Regenerar a narração

Os áudios já vêm prontos no repositório. Para regerar (por exemplo, ao mudar o
texto em `stories.js` ou trocar a voz):

```bash
pip install edge-tts
node scripts/dump_paginas.js             # extrai os textos para /tmp/pages.json
python3 scripts/gerar_audio.py           # voz padrão: pt-BR-FranciscaNeural
# trocar a voz:
VOICE=pt-BR-AntonioNeural python3 scripts/gerar_audio.py --force
```

### 🎨 Regerar as ilustrações

As imagens 3D já vêm prontas. Para regerar (ex.: mudar o estilo):

```bash
python3 scripts/gerar_imagens.py            # modelo padrão: sana (via Pollinations)
python3 scripts/gerar_imagens.py --force    # regenera todas
STYLE="cute watercolor storybook, no text" python3 scripts/gerar_imagens.py --force
```

> As ilustrações são geradas com a [Pollinations.ai](https://pollinations.ai)
> (gratuito, sem chave de API). Os prompts de cada cena ficam em
> `scripts/image_prompts.json`. Como as cenas são fixas, as imagens são geradas
> uma vez e servidas estaticamente.

> A narração neural é gerada com [`edge-tts`](https://github.com/rany2/edge-tts)
> (vozes neurais da Microsoft), gratuito e sem chave de API. Como o texto das
> histórias é fixo, os áudios são gerados uma vez e servidos estaticamente —
> não há custo nem chamada de API em tempo de execução.

Todas as ilustrações são **SVG embutido** — sem imagens externas, funciona
offline.

## 🙏 Sobre o conteúdo

As histórias seguem passagens bíblicas (referências indicadas em cada card) e
foram adaptadas com linguagem simples e valores cristãos, adequados para
crianças.

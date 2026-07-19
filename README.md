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
- **Narração por voz** em português (a criança pode só ouvir a história).
- As palavras ficam **destacadas** enquanto são lidas — ajuda na alfabetização.
- **Ilustração em cada página**, para a criança ver a cena acontecer.
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
scenes/                  # Ilustrações SVG de cada cena
  base.js                #   cena de oração + fallback
  <historia>.js          #   ilustrações de cada história
manifest.webmanifest     # Instalação como app (PWA)
```

Todas as ilustrações são **SVG embutido** — sem imagens externas, funciona
offline.

## 🙏 Sobre o conteúdo

As histórias seguem passagens bíblicas (referências indicadas em cada card) e
foram adaptadas com linguagem simples e valores cristãos, adequados para
crianças.

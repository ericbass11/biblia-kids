/* Ilustrações da história "O Nascimento de Jesus" (id: natal).
   Estilo: livro infantil moderno, vetorial flat, azul noturno + dourado.
   Indexado por "natal:<scene>" em window.SCENES. */
window.SCENES = window.SCENES || {};

Object.assign(window.SCENES, {

  /* 1. A anunciação: o anjo Gabriel visita Maria */
  "natal:annunciation": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O anjo Gabriel dourado visita Maria com manto azul dentro de casa">
  <defs>
    <linearGradient id="an-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#20306b"/>
      <stop offset="1" stop-color="#41508f"/>
    </linearGradient>
    <linearGradient id="an-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5a4a8f"/>
      <stop offset="1" stop-color="#6d5aa0"/>
    </linearGradient>
    <radialGradient id="an-glow" cx="0.62" cy="0.4" r="0.55">
      <stop offset="0" stop-color="#fff4cf" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff4cf" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#an-wall)"/>
  <!-- janela com o ceu noturno -->
  <rect x="60" y="70" width="240" height="300" rx="120" fill="url(#an-sky)"/>
  <rect x="60" y="70" width="240" height="300" rx="120" fill="none" stroke="#c9a24a" stroke-width="12"/>
  <g fill="#ffe08a">
    <circle cx="110" cy="150" r="4"/>
    <circle cx="250" cy="130" r="3"/>
    <circle cx="180" cy="110" r="3.5"/>
    <circle cx="130" cy="250" r="3"/>
    <circle cx="240" cy="230" r="3.5"/>
  </g>
  <!-- estrela grande de Belem pela janela -->
  <g transform="translate(190 200)" fill="#ffd45c">
    <path d="M0 -42 L11 -12 42 -12 16 8 26 40 0 20 -26 40 -16 8 -42 -12 -11 -12 Z"/>
    <circle cx="0" cy="0" r="9" fill="#fff6da"/>
  </g>
  <!-- chao -->
  <path d="M0 470 L800 470 L800 600 L0 600 Z" fill="#4a3c78"/>
  <rect x="0" y="466" width="800" height="10" fill="#c9a24a"/>
  <!-- brilho divino em torno do anjo -->
  <ellipse cx="560" cy="300" rx="320" ry="320" fill="url(#an-glow)"/>
  <!-- Anjo Gabriel (dourado) -->
  <g transform="translate(590 300)">
    <!-- asas -->
    <path d="M0 -20 Q-120 -80 -150 30 Q-90 -10 -30 40 Z" fill="#ffe9a8"/>
    <path d="M0 -20 Q120 -80 150 30 Q90 -10 30 40 Z" fill="#ffe9a8"/>
    <path d="M0 -20 Q-110 -60 -138 30 Q-84 0 -30 40 Z" fill="#f7d986"/>
    <path d="M0 -20 Q110 -60 138 30 Q84 0 30 40 Z" fill="#f7d986"/>
    <!-- corpo tunica dourada -->
    <path d="M-58 150 Q-58 -10 0 -10 Q58 -10 58 150 Z" fill="#f4c44e"/>
    <path d="M-58 150 Q-58 40 0 40 Q58 40 58 150 Z" fill="#e8b23c"/>
    <!-- bracos abertos -->
    <path d="M-30 20 Q-70 30 -78 70" stroke="#f7d99a" stroke-width="20" fill="none" stroke-linecap="round"/>
    <path d="M30 20 Q70 30 78 70" stroke="#f7d99a" stroke-width="20" fill="none" stroke-linecap="round"/>
    <!-- cabeca -->
    <circle cx="0" cy="-55" r="34" fill="#ffe0bd"/>
    <path d="M-34 -66 Q0 -104 34 -66 Q22 -86 0 -86 Q-22 -86 -34 -66" fill="#7a5326"/>
    <circle cx="-12" cy="-56" r="3.6" fill="#3a2b1a"/>
    <circle cx="12" cy="-56" r="3.6" fill="#3a2b1a"/>
    <path d="M-10 -44 Q0 -37 10 -44" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="-48" r="6" fill="#ffb3a0" opacity="0.5"/>
    <circle cx="20" cy="-48" r="6" fill="#ffb3a0" opacity="0.5"/>
    <!-- halo -->
    <ellipse cx="0" cy="-90" rx="34" ry="10" fill="none" stroke="#fff3c0" stroke-width="6"/>
  </g>
  <!-- Maria ajoelhada (manto azul) -->
  <g transform="translate(250 340)">
    <ellipse cx="0" cy="140" rx="90" ry="20" fill="#000" opacity="0.15"/>
    <!-- manto -->
    <path d="M-70 150 Q-80 -30 0 -30 Q80 -30 70 150 Z" fill="#2f5fc0"/>
    <path d="M-46 150 Q-52 10 0 10 Q52 10 46 150 Z" fill="#e9d9b8"/>
    <!-- maos em oracao -->
    <path d="M-4 30 L4 -6" stroke="#f2c9a0" stroke-width="16" fill="none" stroke-linecap="round"/>
    <path d="M0 -18 l9 15 -18 0 z" fill="#f2c9a0"/>
    <!-- veu e cabeca -->
    <path d="M-40 -34 Q-40 -96 0 -96 Q40 -96 40 -34 Q40 -70 0 -70 Q-40 -70 -40 -34" fill="#2f5fc0"/>
    <circle cx="0" cy="-58" r="30" fill="#f5cfa6"/>
    <path d="M-30 -66 Q-34 -92 0 -92 Q34 -92 30 -66 Q30 -80 0 -80 Q-30 -80 -30 -66" fill="#6b4a2b"/>
    <circle cx="-10" cy="-58" r="3.4" fill="#3a2b1a"/>
    <circle cx="10" cy="-58" r="3.4" fill="#3a2b1a"/>
    <path d="M-8 -47 Q0 -41 8 -47" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="-17" cy="-50" r="5.5" fill="#ffb3a0" opacity="0.55"/>
    <circle cx="17" cy="-50" r="5.5" fill="#ffb3a0" opacity="0.55"/>
  </g>
  <!-- particulas de luz -->
  <g fill="#fff3c0">
    <circle cx="440" cy="240" r="4"/>
    <circle cx="410" cy="320" r="3"/>
    <circle cx="470" cy="400" r="3.5"/>
    <circle cx="380" cy="270" r="2.5"/>
  </g>
</svg>`,

  /* 2. A viagem para Belem */
  "natal:journey": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maria sobre um burrinho e José caminham pela estrada do deserto rumo a Belém sob a estrela">
  <defs>
    <linearGradient id="jo-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1f2c63"/>
      <stop offset="0.6" stop-color="#3a4a92"/>
      <stop offset="1" stop-color="#8a6db0"/>
    </linearGradient>
    <linearGradient id="jo-sand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e6b567"/>
      <stop offset="1" stop-color="#cf9a4c"/>
    </linearGradient>
    <radialGradient id="jo-star" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff6da"/>
      <stop offset="1" stop-color="#ffd45c"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jo-sky)"/>
  <!-- estrelas -->
  <g fill="#ffe08a">
    <circle cx="90" cy="90" r="3"/>
    <circle cx="200" cy="60" r="2.5"/>
    <circle cx="320" cy="110" r="3"/>
    <circle cx="700" cy="80" r="3"/>
    <circle cx="620" cy="150" r="2.5"/>
    <circle cx="140" cy="200" r="2.5"/>
  </g>
  <!-- estrela grande de Belem guiando -->
  <g transform="translate(600 130)">
    <path d="M0 -140 L0 140 M-140 0 L140 0" stroke="#ffe89a" stroke-width="6" opacity="0.55"/>
    <path d="M0 -55 L15 -15 55 -15 22 10 34 52 0 26 -34 52 -22 10 -55 -15 -15 -15 Z" fill="url(#jo-star)"/>
    <circle cx="0" cy="0" r="12" fill="#fff8e6"/>
  </g>
  <!-- colinas ao fundo -->
  <path d="M0 430 Q200 360 400 420 Q600 470 800 400 L800 600 L0 600 Z" fill="#b07f52" opacity="0.6"/>
  <!-- chao de areia -->
  <path d="M0 470 Q400 430 800 470 L800 600 L0 600 Z" fill="url(#jo-sand)"/>
  <path d="M0 520 Q400 490 800 520 L800 600 L0 600 Z" fill="#c08f42" opacity="0.5"/>
  <!-- estrada -->
  <path d="M330 600 Q400 500 460 470 L520 470 Q470 520 470 600 Z" fill="#b98a44" opacity="0.7"/>
  <!-- Jose caminhando (tunica marrom) com cajado -->
  <g transform="translate(250 380)">
    <ellipse cx="0" cy="130" rx="55" ry="16" fill="#000" opacity="0.15"/>
    <!-- cajado -->
    <path d="M46 -60 Q60 -70 58 -50 L54 140" stroke="#8a5a2b" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- tunica -->
    <path d="M-42 140 Q-46 -20 0 -20 Q46 -20 42 140 Z" fill="#8a5a2b"/>
    <path d="M-30 140 Q-34 30 0 30 Q34 30 30 140 Z" fill="#a06a34"/>
    <!-- braco no cajado -->
    <path d="M20 0 Q42 -20 48 -50" stroke="#e8b98a" stroke-width="14" fill="none" stroke-linecap="round"/>
    <!-- cabeca com turbante -->
    <circle cx="0" cy="-52" r="28" fill="#e8b98a"/>
    <path d="M-28 -58 Q-30 -86 0 -86 Q30 -86 28 -58 Q10 -74 0 -74 Q-10 -74 -28 -58" fill="#6d4423"/>
    <path d="M-28 -56 Q0 -80 28 -56 L28 -48 Q0 -66 -28 -48 Z" fill="#c7772f"/>
    <circle cx="8" cy="-52" r="3.2" fill="#3a2b1a"/>
    <path d="M2 -40 Q10 -35 16 -40" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M-2 -60 Q0 -30 -6 -18" stroke="#5a3a1c" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Burrinho com Maria -->
  <g transform="translate(500 380)">
    <ellipse cx="0" cy="150" rx="110" ry="18" fill="#000" opacity="0.15"/>
    <!-- corpo do burro -->
    <ellipse cx="0" cy="80" rx="95" ry="52" fill="#9aa0ad"/>
    <!-- pernas -->
    <rect x="-70" y="115" width="16" height="55" rx="7" fill="#8a909d"/>
    <rect x="-40" y="120" width="16" height="52" rx="7" fill="#7f8592"/>
    <rect x="40" y="115" width="16" height="55" rx="7" fill="#8a909d"/>
    <rect x="66" y="120" width="16" height="52" rx="7" fill="#7f8592"/>
    <!-- cabeca do burro -->
    <g transform="translate(-92 35)">
      <ellipse cx="0" cy="0" rx="26" ry="40" fill="#9aa0ad"/>
      <ellipse cx="0" cy="30" rx="18" ry="20" fill="#c3c8d2"/>
      <path d="M-18 -34 Q-30 -66 -14 -60 Q-8 -46 -6 -34 Z" fill="#8a909d"/>
      <path d="M14 -34 Q26 -66 10 -60 Q6 -46 4 -34 Z" fill="#8a909d"/>
      <circle cx="-8" cy="-2" r="3.4" fill="#2b2b2b"/>
      <circle cx="-4" cy="34" r="3" fill="#5a5a5a"/>
    </g>
    <path d="M75 40 Q100 60 90 95" stroke="#7f8592" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- Maria montada (manto azul) -->
    <g transform="translate(6 -6)">
      <path d="M-40 60 Q-44 -30 0 -30 Q44 -30 40 60 Z" fill="#2f5fc0"/>
      <path d="M-26 60 Q-30 6 0 6 Q30 6 26 60 Z" fill="#e9d9b8"/>
      <path d="M-34 -34 Q-34 -92 0 -92 Q34 -92 34 -34 Q34 -66 0 -66 Q-34 -66 -34 -34" fill="#2f5fc0"/>
      <circle cx="0" cy="-56" r="27" fill="#f5cfa6"/>
      <path d="M-27 -62 Q-30 -86 0 -86 Q30 -86 27 -62 Q27 -74 0 -74 Q-27 -74 -27 -62" fill="#6b4a2b"/>
      <circle cx="-9" cy="-56" r="3.2" fill="#3a2b1a"/>
      <circle cx="9" cy="-56" r="3.2" fill="#3a2b1a"/>
      <path d="M-7 -46 Q0 -40 7 -46" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <circle cx="-15" cy="-49" r="5" fill="#ffb3a0" opacity="0.55"/>
      <circle cx="15" cy="-49" r="5" fill="#ffb3a0" opacity="0.55"/>
    </g>
  </g>
</svg>`,

  /* 3. A manjedoura: o nascimento no estabulo */
  "natal:manger": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bebê Jesus na manjedoura de palha dentro do estábulo com Maria, José e a estrela">
  <defs>
    <linearGradient id="ma-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#20306b"/>
      <stop offset="1" stop-color="#40508c"/>
    </linearGradient>
    <linearGradient id="ma-wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8a5a2b"/>
      <stop offset="1" stop-color="#6d4423"/>
    </linearGradient>
    <radialGradient id="ma-glow" cx="0.5" cy="0.62" r="0.42">
      <stop offset="0" stop-color="#fff2c4" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff2c4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#ma-sky)"/>
  <!-- estrelas -->
  <g fill="#ffe08a">
    <circle cx="120" cy="80" r="3"/>
    <circle cx="680" cy="90" r="3"/>
    <circle cx="740" cy="180" r="2.5"/>
    <circle cx="70" cy="170" r="2.5"/>
  </g>
  <!-- estrela grande de Belem sobre o estabulo -->
  <g transform="translate(400 90)">
    <path d="M0 -70 L18 -18 70 -18 26 12 42 66 0 32 -42 66 -26 12 -70 -18 -18 -18 Z" fill="#ffd45c"/>
    <path d="M0 250 L-30 -10 30 -10 Z" fill="#fff2c4" opacity="0.3"/>
    <circle cx="0" cy="0" r="14" fill="#fff8e6"/>
  </g>
  <!-- estrutura do estabulo -->
  <path d="M110 250 L400 140 L690 250 L690 270 L400 165 L110 270 Z" fill="url(#ma-wood)"/>
  <rect x="130" y="255" width="26" height="245" fill="#6d4423"/>
  <rect x="644" y="255" width="26" height="245" fill="#6d4423"/>
  <!-- feno na parede -->
  <path d="M156 260 Q400 210 644 260 L644 300 Q400 250 156 300 Z" fill="#c99a3a" opacity="0.5"/>
  <!-- chao do estabulo -->
  <rect x="0" y="470" width="800" height="130" fill="#5a4326"/>
  <path d="M0 470 Q400 450 800 470 L800 490 Q400 470 0 490 Z" fill="#c99a3a" opacity="0.5"/>
  <!-- brilho sobre a manjedoura -->
  <ellipse cx="400" cy="430" rx="300" ry="180" fill="url(#ma-glow)"/>
  <!-- Jose (esquerda, tunica marrom) -->
  <g transform="translate(215 330)">
    <ellipse cx="0" cy="160" rx="60" ry="16" fill="#000" opacity="0.15"/>
    <path d="M-48 165 Q-52 -10 0 -10 Q52 -10 48 165 Z" fill="#8a5a2b"/>
    <path d="M-34 165 Q-38 40 0 40 Q38 40 34 165 Z" fill="#a06a34"/>
    <path d="M28 20 Q54 40 60 90" stroke="#e8b98a" stroke-width="15" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-48" r="30" fill="#e8b98a"/>
    <path d="M-30 -54 Q-32 -84 0 -84 Q32 -84 30 -54 Q10 -70 0 -70 Q-10 -70 -30 -54" fill="#6d4423"/>
    <path d="M-30 -52 Q0 -78 30 -52 L30 -44 Q0 -62 -30 -44 Z" fill="#c7772f"/>
    <circle cx="-9" cy="-48" r="3.2" fill="#3a2b1a"/>
    <circle cx="9" cy="-48" r="3.2" fill="#3a2b1a"/>
    <path d="M-7 -37 Q0 -31 7 -37" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M-9 -32 Q0 -10 -3 8" stroke="#5a3a1c" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Maria (direita, manto azul) ajoelhada -->
  <g transform="translate(585 350)">
    <ellipse cx="0" cy="145" rx="70" ry="16" fill="#000" opacity="0.15"/>
    <path d="M-58 150 Q-64 0 0 0 Q64 0 58 150 Z" fill="#2f5fc0"/>
    <path d="M-40 150 Q-44 40 0 40 Q44 40 40 150 Z" fill="#e9d9b8"/>
    <path d="M-30 30 Q-52 10 -60 -20" stroke="#f2c9a0" stroke-width="15" fill="none" stroke-linecap="round"/>
    <path d="M-38 -46 Q-38 -100 0 -100 Q38 -100 38 -46 Q38 -76 0 -76 Q-38 -76 -38 -46" fill="#2f5fc0"/>
    <circle cx="0" cy="-64" r="29" fill="#f5cfa6"/>
    <path d="M-29 -70 Q-32 -94 0 -94 Q32 -94 29 -70 Q29 -82 0 -82 Q-29 -82 -29 -70" fill="#6b4a2b"/>
    <circle cx="-9" cy="-64" r="3.2" fill="#3a2b1a"/>
    <circle cx="9" cy="-64" r="3.2" fill="#3a2b1a"/>
    <path d="M-7 -53 Q0 -47 7 -53" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <circle cx="-16" cy="-56" r="5" fill="#ffb3a0" opacity="0.55"/>
    <circle cx="16" cy="-56" r="5" fill="#ffb3a0" opacity="0.55"/>
  </g>
  <!-- Manjedoura com bebe Jesus -->
  <g transform="translate(400 450)">
    <!-- feno na manjedoura -->
    <path d="M-110 20 Q0 -30 110 20 Q120 45 90 55 L-90 55 Q-120 45 -110 20 Z" fill="#e6be55"/>
    <path d="M-110 20 Q0 -18 110 20" fill="none" stroke="#c99a3a" stroke-width="4"/>
    <!-- pes de madeira em X -->
    <path d="M-95 55 L-60 110 M-60 55 L-95 110" stroke="#6d4423" stroke-width="10" stroke-linecap="round"/>
    <path d="M95 55 L60 110 M60 55 L95 110" stroke="#6d4423" stroke-width="10" stroke-linecap="round"/>
    <!-- bebe enrolado -->
    <g transform="translate(0 -6)">
      <ellipse cx="0" cy="8" rx="58" ry="26" fill="#fff4df"/>
      <ellipse cx="0" cy="8" rx="58" ry="26" fill="none" stroke="#f0dab0" stroke-width="3"/>
      <circle cx="34" cy="0" r="20" fill="#ffe0bd"/>
      <path d="M14 -6 Q34 -30 54 -6 Q46 -20 34 -20 Q22 -20 14 -6" fill="#c98a3a"/>
      <circle cx="30" cy="0" r="2.6" fill="#3a2b1a"/>
      <circle cx="40" cy="0" r="2.6" fill="#3a2b1a"/>
      <path d="M31 8 Q35 12 39 8" stroke="#c77" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- halo do bebe -->
      <ellipse cx="34" cy="-24" rx="22" ry="7" fill="none" stroke="#fff3c0" stroke-width="4"/>
    </g>
  </g>
  <!-- raios de luz -->
  <g stroke="#fff2c4" stroke-width="4" opacity="0.4" stroke-linecap="round">
    <path d="M400 250 L340 400"/>
    <path d="M400 250 L460 400"/>
    <path d="M400 250 L400 400"/>
  </g>
</svg>`,

  /* 4. Os pastores e o anuncio dos anjos */
  "natal:shepherds": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anjos cantam no céu noturno para pastores com ovelhas no campo, sob a estrela de Belém">
  <defs>
    <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1c2a60"/>
      <stop offset="1" stop-color="#42528f"/>
    </linearGradient>
    <linearGradient id="sh-hill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#4f7a3f"/>
      <stop offset="1" stop-color="#3c5f30"/>
    </linearGradient>
    <radialGradient id="sh-glow" cx="0.35" cy="0.28" r="0.45">
      <stop offset="0" stop-color="#fff3c8" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff3c8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sh-sky)"/>
  <!-- estrelas -->
  <g fill="#ffe08a">
    <circle cx="120" cy="70" r="3"/>
    <circle cx="560" cy="60" r="2.5"/>
    <circle cx="700" cy="120" r="3"/>
    <circle cx="640" cy="220" r="2.5"/>
    <circle cx="70" cy="240" r="2.5"/>
  </g>
  <!-- estrela grande de Belem -->
  <g transform="translate(660 110)">
    <path d="M0 -50 L13 -14 50 -14 20 8 30 46 0 22 -30 46 -20 8 -50 -14 -13 -14 Z" fill="#ffd45c"/>
    <circle cx="0" cy="0" r="10" fill="#fff8e6"/>
  </g>
  <!-- brilho celestial -->
  <ellipse cx="280" cy="170" rx="320" ry="210" fill="url(#sh-glow)"/>
  <!-- anjos no ceu -->
  <g transform="translate(210 150)">
    <path d="M0 -6 Q-70 -46 -92 24 Q-52 -2 -18 30 Z" fill="#ffe9a8"/>
    <path d="M0 -6 Q70 -46 92 24 Q52 -2 18 30 Z" fill="#ffe9a8"/>
    <path d="M-36 100 Q-38 -6 0 -6 Q38 -6 36 100 Z" fill="#fff2d6"/>
    <path d="M-36 100 Q-38 40 0 40 Q38 40 36 100 Z" fill="#f4c44e"/>
    <path d="M-20 16 Q-46 26 -50 56" stroke="#ffe0bd" stroke-width="13" fill="none" stroke-linecap="round"/>
    <path d="M20 16 Q46 26 50 56" stroke="#ffe0bd" stroke-width="13" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-36" r="24" fill="#ffe0bd"/>
    <path d="M-24 -44 Q0 -74 24 -44 Q14 -60 0 -60 Q-14 -60 -24 -44" fill="#7a5326"/>
    <circle cx="-8" cy="-37" r="2.8" fill="#3a2b1a"/>
    <circle cx="8" cy="-37" r="2.8" fill="#3a2b1a"/>
    <path d="M-6 -27 Q0 -22 6 -27" stroke="#3a2b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="0" cy="-62" rx="24" ry="7" fill="none" stroke="#fff3c0" stroke-width="5"/>
  </g>
  <g transform="translate(400 110) scale(0.7)">
    <path d="M0 -6 Q-70 -46 -92 24 Q-52 -2 -18 30 Z" fill="#ffe9a8"/>
    <path d="M0 -6 Q70 -46 92 24 Q52 -2 18 30 Z" fill="#ffe9a8"/>
    <path d="M-36 100 Q-38 -6 0 -6 Q38 -6 36 100 Z" fill="#fff2d6"/>
    <path d="M-36 100 Q-38 40 0 40 Q38 40 36 100 Z" fill="#f4c44e"/>
    <circle cx="0" cy="-36" r="24" fill="#ffe0bd"/>
    <path d="M-24 -44 Q0 -74 24 -44 Q14 -60 0 -60 Q-14 -60 -24 -44" fill="#5a3a1c"/>
    <circle cx="-8" cy="-37" r="2.8" fill="#3a2b1a"/>
    <circle cx="8" cy="-37" r="2.8" fill="#3a2b1a"/>
    <path d="M-6 -27 Q0 -22 6 -27" stroke="#3a2b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="0" cy="-62" rx="24" ry="7" fill="none" stroke="#fff3c0" stroke-width="5"/>
  </g>
  <!-- notas musicais / luz -->
  <g fill="#fff3c0">
    <circle cx="330" cy="230" r="4"/>
    <circle cx="160" cy="290" r="3.5"/>
    <circle cx="470" cy="250" r="3"/>
  </g>
  <!-- colinas -->
  <path d="M0 420 Q250 350 500 410 Q650 440 800 400 L800 600 L0 600 Z" fill="url(#sh-hill)"/>
  <path d="M0 470 Q400 430 800 470 L800 600 L0 600 Z" fill="#4a7038"/>
  <!-- pastor olhando para o alto (tunica marrom) -->
  <g transform="translate(300 400)">
    <ellipse cx="0" cy="150" rx="55" ry="15" fill="#000" opacity="0.15"/>
    <path d="M40 -70 Q54 -80 52 -60 L48 150" stroke="#8a5a2b" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M-44 150 Q-48 -10 0 -10 Q48 -10 44 150 Z" fill="#8a5a2b"/>
    <path d="M-30 150 Q-34 40 0 40 Q34 40 30 150 Z" fill="#a06a34"/>
    <path d="M22 10 Q42 -10 46 -50" stroke="#e8b98a" stroke-width="13" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-52" r="27" fill="#e8b98a"/>
    <path d="M-27 -58 Q-30 -84 0 -84 Q30 -84 27 -58 Q10 -72 0 -72 Q-10 -72 -27 -58" fill="#6d4423"/>
    <path d="M-27 -56 Q0 -80 27 -56 L27 -48 Q0 -66 -27 -48 Z" fill="#c7772f"/>
    <circle cx="-8" cy="-56" r="3" fill="#3a2b1a"/>
    <circle cx="8" cy="-56" r="3" fill="#3a2b1a"/>
    <path d="M-6 -45 Q0 -40 6 -45" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M-8 -40 Q0 -20 -3 -4" stroke="#5a3a1c" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- pastor menino -->
  <g transform="translate(430 445) scale(0.8)">
    <ellipse cx="0" cy="150" rx="50" ry="14" fill="#000" opacity="0.15"/>
    <path d="M-40 150 Q-44 0 0 0 Q44 0 40 150 Z" fill="#7a4d24"/>
    <path d="M-28 150 Q-32 45 0 45 Q32 45 28 150 Z" fill="#946230"/>
    <circle cx="0" cy="-40" r="26" fill="#e8b98a"/>
    <path d="M-26 -46 Q-28 -72 0 -72 Q28 -72 26 -46 Q10 -60 0 -60 Q-10 -60 -26 -46" fill="#3a2b1a"/>
    <circle cx="-8" cy="-42" r="3" fill="#3a2b1a"/>
    <circle cx="8" cy="-42" r="3" fill="#3a2b1a"/>
    <path d="M-6 -31 Q0 -25 6 -31" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <circle cx="-14" cy="-34" r="5" fill="#ffb3a0" opacity="0.55"/>
    <circle cx="14" cy="-34" r="5" fill="#ffb3a0" opacity="0.55"/>
  </g>
  <!-- ovelhas -->
  <g transform="translate(150 500)">
    <ellipse cx="0" cy="30" rx="45" ry="12" fill="#000" opacity="0.12"/>
    <ellipse cx="0" cy="0" rx="42" ry="30" fill="#f3efe6"/>
    <circle cx="-30" cy="14" r="6" fill="#5a4633"/>
    <circle cx="-10" cy="16" r="6" fill="#5a4633"/>
    <circle cx="12" cy="16" r="6" fill="#5a4633"/>
    <circle cx="30" cy="12" r="6" fill="#5a4633"/>
    <ellipse cx="-42" cy="-8" rx="18" ry="15" fill="#4a3a2b"/>
    <circle cx="-48" cy="-10" r="2.6" fill="#fff"/>
    <path d="M-56 -18 Q-64 -24 -58 -12" fill="#3a2b1a"/>
  </g>
  <g transform="translate(560 505) scale(0.8)">
    <ellipse cx="0" cy="30" rx="45" ry="12" fill="#000" opacity="0.12"/>
    <ellipse cx="0" cy="0" rx="42" ry="30" fill="#f3efe6"/>
    <circle cx="-20" cy="16" r="6" fill="#5a4633"/>
    <circle cx="2" cy="16" r="6" fill="#5a4633"/>
    <circle cx="24" cy="14" r="6" fill="#5a4633"/>
    <ellipse cx="40" cy="-8" rx="18" ry="15" fill="#4a3a2b"/>
    <circle cx="46" cy="-10" r="2.6" fill="#fff"/>
    <path d="M54 -18 Q62 -24 56 -12" fill="#3a2b1a"/>
  </g>
</svg>`,

  /* 5. Os reis magos seguem a estrela */
  "natal:wisemen": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Três reis magos com presentes seguem a grande estrela de Belém pelo deserto com camelo">
  <defs>
    <linearGradient id="wi-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1e2c64"/>
      <stop offset="0.65" stop-color="#3f4f92"/>
      <stop offset="1" stop-color="#9a6fae"/>
    </linearGradient>
    <linearGradient id="wi-sand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e3b463"/>
      <stop offset="1" stop-color="#c8933f"/>
    </linearGradient>
    <radialGradient id="wi-star" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff8e6"/>
      <stop offset="1" stop-color="#ffd45c"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#wi-sky)"/>
  <!-- estrelas -->
  <g fill="#ffe08a">
    <circle cx="90" cy="120" r="3"/>
    <circle cx="220" cy="70" r="2.5"/>
    <circle cx="520" cy="90" r="2.5"/>
    <circle cx="140" cy="230" r="2.5"/>
    <circle cx="700" cy="220" r="2.5"/>
  </g>
  <!-- estrela grande guia -->
  <g transform="translate(420 110)">
    <path d="M0 -160 L0 170 M-160 0 L160 0" stroke="#ffe89a" stroke-width="5" opacity="0.5"/>
    <path d="M0 -58 L16 -16 58 -16 24 10 36 54 0 28 -36 54 -24 10 -58 -16 -16 -16 Z" fill="#ffd45c"/>
    <circle cx="0" cy="0" r="13" fill="#fff8e6"/>
  </g>
  <!-- dunas -->
  <path d="M0 440 Q200 380 420 430 Q620 470 800 410 L800 600 L0 600 Z" fill="#b0803f" opacity="0.6"/>
  <path d="M0 480 Q400 440 800 480 L800 600 L0 600 Z" fill="url(#wi-sand)"/>
  <path d="M0 530 Q400 500 800 530 L800 600 L0 600 Z" fill="#bb8a3c" opacity="0.5"/>
  <!-- camelo ao fundo -->
  <g transform="translate(120 430)" opacity="0.9">
    <ellipse cx="0" cy="100" rx="70" ry="12" fill="#000" opacity="0.12"/>
    <ellipse cx="0" cy="40" rx="60" ry="34" fill="#c79a5a"/>
    <path d="M-40 30 Q-25 -6 -10 30 M10 30 Q25 -6 40 30" fill="#c79a5a"/>
    <rect x="-46" y="66" width="12" height="42" rx="6" fill="#b1854a"/>
    <rect x="34" y="66" width="12" height="42" rx="6" fill="#b1854a"/>
    <path d="M50 30 Q78 10 70 -30 Q84 -34 78 -6 Q70 34 56 46 Z" fill="#c79a5a"/>
    <circle cx="76" cy="-14" r="3" fill="#3a2b1a"/>
  </g>
  <!-- Rei mago 1 (ouro, tunica roxa) -->
  <g transform="translate(360 400)">
    <ellipse cx="0" cy="150" rx="55" ry="15" fill="#000" opacity="0.15"/>
    <path d="M-46 155 Q-50 -10 0 -10 Q50 -10 46 155 Z" fill="#7a3f9a"/>
    <path d="M-32 155 Q-36 50 0 50 Q36 50 32 155 Z" fill="#9a55c0"/>
    <!-- presente ouro -->
    <g transform="translate(-42 20)">
      <rect x="-22" y="-16" width="44" height="34" rx="4" fill="#f4c44e"/>
      <rect x="-22" y="-16" width="44" height="10" rx="3" fill="#e0a92e"/>
      <path d="M-4 -16 L-4 18 M4 -16 L4 18" stroke="#e0a92e" stroke-width="3"/>
    </g>
    <path d="M-20 20 Q-40 12 -44 2" stroke="#e8b98a" stroke-width="13" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-52" r="28" fill="#e8b98a"/>
    <path d="M-28 -60 Q-30 -84 0 -84 Q30 -84 28 -60 Q10 -74 0 -74 Q-10 -74 -28 -60" fill="#4a3a2b"/>
    <!-- coroa -->
    <path d="M-26 -74 L-26 -92 L-13 -82 L0 -96 L13 -82 L26 -92 L26 -74 Z" fill="#ffd45c"/>
    <circle cx="0" cy="-88" r="3" fill="#e05a5a"/>
    <circle cx="-9" cy="-56" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-56" r="3" fill="#3a2b1a"/>
    <path d="M-7 -45 Q0 -40 7 -45" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M-8 -40 Q0 -18 -3 0" stroke="#5a3a1c" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Rei mago 2 (incenso, tunica verde) -->
  <g transform="translate(480 415) scale(0.94)">
    <ellipse cx="0" cy="150" rx="55" ry="15" fill="#000" opacity="0.15"/>
    <path d="M-46 155 Q-50 -10 0 -10 Q50 -10 46 155 Z" fill="#2f7a5a"/>
    <path d="M-32 155 Q-36 50 0 50 Q36 50 32 155 Z" fill="#3d9a72"/>
    <!-- presente incenso (frasco) -->
    <g transform="translate(-40 26)">
      <path d="M-14 18 Q-18 -10 0 -14 Q18 -10 14 18 Z" fill="#d9e0ea"/>
      <rect x="-8" y="-24" width="16" height="12" rx="3" fill="#c9a24a"/>
      <path d="M-4 -30 Q0 -40 4 -30" stroke="#cfd6e0" stroke-width="2.5" fill="none" opacity="0.7"/>
    </g>
    <path d="M-18 24 Q-38 16 -42 6" stroke="#c98a5a" stroke-width="13" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-52" r="28" fill="#c98a5a"/>
    <path d="M-28 -60 Q-30 -84 0 -84 Q30 -84 28 -60 Q10 -74 0 -74 Q-10 -74 -28 -60" fill="#2b2b2b"/>
    <path d="M-26 -74 L-26 -92 L-13 -82 L0 -96 L13 -82 L26 -92 L26 -74 Z" fill="#ffd45c"/>
    <circle cx="0" cy="-88" r="3" fill="#4a7fd6"/>
    <circle cx="-9" cy="-56" r="3" fill="#2b1f14"/>
    <circle cx="9" cy="-56" r="3" fill="#2b1f14"/>
    <path d="M-7 -45 Q0 -40 7 -45" stroke="#2b1f14" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Rei mago 3 (mirra, tunica vermelha) -->
  <g transform="translate(590 405) scale(0.9)">
    <ellipse cx="0" cy="150" rx="55" ry="15" fill="#000" opacity="0.15"/>
    <path d="M-46 155 Q-50 -10 0 -10 Q50 -10 46 155 Z" fill="#a63a3a"/>
    <path d="M-32 155 Q-36 50 0 50 Q36 50 32 155 Z" fill="#c85454"/>
    <!-- presente mirra (pote) -->
    <g transform="translate(-40 26)">
      <path d="M-16 16 Q-20 -8 0 -12 Q20 -8 16 16 Z" fill="#9a6a3a"/>
      <ellipse cx="0" cy="-12" rx="16" ry="5" fill="#b1854a"/>
      <rect x="-6" y="-22" width="12" height="10" rx="3" fill="#7a5226"/>
    </g>
    <path d="M-18 24 Q-38 16 -42 6" stroke="#e8b98a" stroke-width="13" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-52" r="28" fill="#e8b98a"/>
    <path d="M-28 -60 Q-30 -84 0 -84 Q30 -84 28 -60 Q10 -74 0 -74 Q-10 -74 -28 -60" fill="#6d4423"/>
    <path d="M-26 -74 L-26 -92 L-13 -82 L0 -96 L13 -82 L26 -92 L26 -74 Z" fill="#ffd45c"/>
    <circle cx="0" cy="-88" r="3" fill="#3d9a72"/>
    <circle cx="-9" cy="-56" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-56" r="3" fill="#3a2b1a"/>
    <path d="M-7 -45 Q0 -40 7 -45" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M-8 -40 Q0 -18 -3 0" stroke="#5a3a1c" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  /* 6. A Sagrada Familia reunida com amor */
  "natal:holy-family": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maria, José e o menino Jesus reunidos com amor sob a estrela de Belém e um coração de luz">
  <defs>
    <linearGradient id="hf-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#22326e"/>
      <stop offset="1" stop-color="#4a5a98"/>
    </linearGradient>
    <radialGradient id="hf-glow" cx="0.5" cy="0.55" r="0.5">
      <stop offset="0" stop-color="#fff2c4" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff2c4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#hf-sky)"/>
  <!-- estrelas -->
  <g fill="#ffe08a">
    <circle cx="110" cy="90" r="3"/>
    <circle cx="250" cy="60" r="2.5"/>
    <circle cx="700" cy="90" r="3"/>
    <circle cx="620" cy="180" r="2.5"/>
    <circle cx="80" cy="210" r="2.5"/>
    <circle cx="740" cy="260" r="2.5"/>
  </g>
  <!-- estrela grande de Belem -->
  <g transform="translate(400 95)">
    <path d="M0 -62 L16 -16 62 -16 24 10 38 58 0 30 -38 58 -24 10 -62 -16 -16 -16 Z" fill="#ffd45c"/>
    <circle cx="0" cy="0" r="12" fill="#fff8e6"/>
  </g>
  <!-- coracao de luz -->
  <g transform="translate(400 210)" opacity="0.35">
    <path d="M0 40 C-40 0 -70 -18 -40 -46 C-18 -66 0 -40 0 -30 C0 -40 18 -66 40 -46 C70 -18 40 0 0 40 Z" fill="#ffd45c"/>
  </g>
  <!-- brilho envolvendo a familia -->
  <ellipse cx="400" cy="400" rx="330" ry="230" fill="url(#hf-glow)"/>
  <!-- chao -->
  <path d="M0 500 Q400 470 800 500 L800 600 L0 600 Z" fill="#5a4326"/>
  <path d="M0 500 Q400 480 800 500 L800 515 Q400 495 0 515 Z" fill="#c99a3a" opacity="0.5"/>
  <!-- Jose (esquerda, tunica marrom) abracando -->
  <g transform="translate(300 350)">
    <ellipse cx="20" cy="185" rx="80" ry="18" fill="#000" opacity="0.15"/>
    <path d="M-52 190 Q-58 10 0 10 Q58 10 52 190 Z" fill="#8a5a2b"/>
    <path d="M-36 190 Q-40 60 0 60 Q40 60 36 190 Z" fill="#a06a34"/>
    <!-- braco abracando (para a direita) -->
    <path d="M40 40 Q95 30 130 55" stroke="#8a5a2b" stroke-width="26" fill="none" stroke-linecap="round"/>
    <circle cx="0" cy="-40" r="34" fill="#e8b98a"/>
    <path d="M-34 -48 Q-36 -78 0 -78 Q36 -78 34 -48 Q12 -66 0 -66 Q-12 -66 -34 -48" fill="#6d4423"/>
    <path d="M-34 -46 Q0 -74 34 -46 L34 -36 Q0 -56 -34 -36 Z" fill="#c7772f"/>
    <circle cx="-11" cy="-42" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-42" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -30 Q0 -23 9 -30" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="-19" cy="-34" r="6" fill="#ffb3a0" opacity="0.5"/>
    <circle cx="19" cy="-34" r="6" fill="#ffb3a0" opacity="0.5"/>
    <path d="M-11 -26 Q0 0 -4 22" stroke="#5a3a1c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Maria (direita, manto azul) segurando o bebe -->
  <g transform="translate(500 355)">
    <ellipse cx="-10" cy="180" rx="85" ry="18" fill="#000" opacity="0.15"/>
    <path d="M-56 185 Q-64 0 0 0 Q64 0 56 185 Z" fill="#2f5fc0"/>
    <path d="M-40 185 Q-46 55 0 55 Q46 55 40 185 Z" fill="#e9d9b8"/>
    <path d="M-40 -40 Q-40 -100 0 -100 Q40 -100 40 -40 Q40 -74 0 -74 Q-40 -74 -40 -40" fill="#2f5fc0"/>
    <circle cx="0" cy="-58" r="32" fill="#f5cfa6"/>
    <path d="M-32 -66 Q-36 -92 0 -92 Q36 -92 32 -66 Q32 -80 0 -80 Q-32 -80 -32 -66" fill="#6b4a2b"/>
    <circle cx="-11" cy="-58" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-58" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -46 Q0 -39 9 -46" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="-19" cy="-50" r="6" fill="#ffb3a0" opacity="0.55"/>
    <circle cx="19" cy="-50" r="6" fill="#ffb3a0" opacity="0.55"/>
    <!-- bebe Jesus nos bracos -->
    <g transform="translate(-42 40)">
      <path d="M-40 20 Q-48 -14 -14 -20 Q28 -12 24 30 Q0 44 -40 20 Z" fill="#fff4df"/>
      <circle cx="-24" cy="-14" r="19" fill="#ffe0bd"/>
      <path d="M-42 -20 Q-24 -42 -6 -20 Q-14 -34 -24 -34 Q-34 -34 -42 -20" fill="#c98a3a"/>
      <circle cx="-28" cy="-14" r="2.6" fill="#3a2b1a"/>
      <circle cx="-18" cy="-14" r="2.6" fill="#3a2b1a"/>
      <path d="M-27 -6 Q-23 -2 -19 -6" stroke="#c77" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="-24" cy="-36" rx="20" ry="6" fill="none" stroke="#fff3c0" stroke-width="4"/>
    </g>
    <!-- braco de Maria segurando o bebe -->
    <path d="M-30 30 Q-58 40 -70 62" stroke="#2f5fc0" stroke-width="22" fill="none" stroke-linecap="round"/>
  </g>
  <!-- particulas de amor -->
  <g fill="#fff3c0">
    <circle cx="330" cy="250" r="3.5"/>
    <circle cx="470" cy="240" r="3"/>
    <circle cx="400" cy="300" r="3"/>
  </g>
</svg>`,

});

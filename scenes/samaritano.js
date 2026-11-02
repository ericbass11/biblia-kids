/* Ilustrações da história "O Bom Samaritano" (Lucas 10).
   Estilo livro infantil: vetorial flat, formas arredondadas, cores quentes.
   Personagens consistentes:
   - homem ferido: túnica bege rasgada, curativo na cabeça e no braço;
   - samaritano: túnica âmbar quente, lenço de cabeça terracota;
   - passantes: túnicas em tons frios (azul e roxo). */
window.SCENES = window.SCENES || {};

Object.assign(window.SCENES, {
  "samaritano:traveler": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Um homem viajante ferido caído numa estrada empoeirada entre colinas, com sua trouxa de viagem espalhada">
  <defs>
    <linearGradient id="tr-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe6b0"/>
      <stop offset="1" stop-color="#ffd48a"/>
    </linearGradient>
    <linearGradient id="tr-road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e8c48f"/>
      <stop offset="1" stop-color="#d8ab6d"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#tr-sky)"/>
  <circle cx="140" cy="120" r="60" fill="#fff2cf" opacity="0.9"/>
  <g fill="#f6faff" opacity="0.85">
    <ellipse cx="560" cy="120" rx="70" ry="34"/>
    <ellipse cx="610" cy="105" rx="50" ry="28"/>
    <ellipse cx="510" cy="108" rx="46" ry="26"/>
  </g>
  <!-- colinas -->
  <path d="M0 300 Q200 220 420 300 Q620 380 800 300 L800 600 L0 600 Z" fill="#b6d989"/>
  <path d="M0 360 Q220 300 460 360 Q640 410 800 350 L800 600 L0 600 Z" fill="#9ccb6c"/>
  <!-- estrada empoeirada -->
  <path d="M330 360 Q380 460 240 600 L560 600 Q470 460 470 360 Z" fill="url(#tr-road)"/>
  <g fill="#c99a5e" opacity="0.5">
    <ellipse cx="380" cy="470" rx="34" ry="9"/>
    <ellipse cx="330" cy="540" rx="40" ry="10"/>
  </g>
  <!-- arbustos e pedras -->
  <g>
    <circle cx="120" cy="430" r="34" fill="#7fb356"/>
    <circle cx="150" cy="440" r="26" fill="#8ec062"/>
    <ellipse cx="690" cy="470" rx="46" ry="30" fill="#8ec062"/>
    <ellipse cx="655" cy="520" rx="30" ry="20" fill="#b3a48c"/>
    <ellipse cx="605" cy="410" rx="22" ry="15" fill="#c2b39a"/>
  </g>
  <!-- trouxa de viagem espalhada -->
  <g transform="translate(520 470)">
    <ellipse cx="0" cy="18" rx="40" ry="10" fill="#000" opacity="0.08"/>
    <path d="M-34 6 Q0 -34 34 6 Q0 24 -34 6 Z" fill="#c77b45"/>
    <path d="M-30 6 L30 6" stroke="#a55f2f" stroke-width="4" stroke-linecap="round"/>
    <rect x="-8" y="-30" width="16" height="30" rx="6" fill="#8a5a34"/>
  </g>
  <!-- homem ferido caído -->
  <g transform="translate(340 500)">
    <ellipse cx="10" cy="30" rx="120" ry="22" fill="#000" opacity="0.1"/>
    <!-- pernas -->
    <path d="M20 6 Q90 -6 150 24" stroke="#e9d8bd" stroke-width="30" stroke-linecap="round" fill="none"/>
    <path d="M120 20 l30 4" stroke="#c79a68" stroke-width="12" stroke-linecap="round"/>
    <!-- tronco / túnica bege rasgada -->
    <path d="M-70 -10 Q-40 -46 20 -30 Q40 6 -10 20 Q-60 24 -70 -10 Z" fill="#efe0c6"/>
    <path d="M-30 -20 l10 18 12 -14 8 16" stroke="#d9c19a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- braço com curativo -->
    <path d="M-40 -20 Q-84 -18 -104 8" stroke="#e9d1b3" stroke-width="20" stroke-linecap="round" fill="none"/>
    <g stroke="#ffffff" stroke-width="7" stroke-linecap="round">
      <path d="M-96 -6 l16 10"/>
      <path d="M-102 4 l16 8"/>
    </g>
    <!-- cabeça deitada com curativo -->
    <circle cx="-84" cy="-30" r="28" fill="#f3cfa6"/>
    <path d="M-110 -40 Q-84 -66 -58 -42 Q-70 -56 -84 -56 Q-100 -54 -110 -40" fill="#5b3d24"/>
    <path d="M-112 -38 Q-84 -52 -56 -38" stroke="#ffffff" stroke-width="9" fill="none" stroke-linecap="round"/>
    <circle cx="-92" cy="-26" r="3" fill="#3a2b1a"/>
    <circle cx="-78" cy="-26" r="3" fill="#3a2b1a"/>
    <path d="M-94 -14 Q-84 -10 -74 -14" stroke="#8a5a3a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  "samaritano:passing-by": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Duas pessoas passam com pressa pela estrada sem parar para ajudar o homem ferido caído no chão">
  <defs>
    <linearGradient id="pb-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe0a6"/>
      <stop offset="1" stop-color="#ffcf82"/>
    </linearGradient>
    <linearGradient id="pb-road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e8c48f"/>
      <stop offset="1" stop-color="#d8ab6d"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#pb-sky)"/>
  <circle cx="660" cy="120" r="54" fill="#fff2cf" opacity="0.9"/>
  <g fill="#f6faff" opacity="0.8">
    <ellipse cx="200" cy="115" rx="64" ry="30"/>
    <ellipse cx="250" cy="100" rx="46" ry="24"/>
  </g>
  <path d="M0 310 Q200 240 400 300 Q600 360 800 300 L800 600 L0 600 Z" fill="#b6d989"/>
  <path d="M0 370 Q220 320 440 360 Q640 400 800 360 L800 600 L0 600 Z" fill="#9ccb6c"/>
  <!-- estrada larga -->
  <path d="M120 360 L280 360 Q120 480 40 600 L-40 600 Q40 470 120 360 Z" fill="url(#pb-road)"/>
  <path d="M280 360 L470 360 Q560 480 640 600 L760 600 Q560 460 470 360 Z" fill="url(#pb-road)" opacity="0"/>
  <path d="M300 360 L470 360 L720 600 L360 600 Z" fill="url(#pb-road)"/>
  <g fill="#c99a5e" opacity="0.45">
    <ellipse cx="330" cy="470" rx="34" ry="9"/>
    <ellipse cx="200" cy="520" rx="40" ry="10"/>
  </g>
  <!-- arbustos -->
  <circle cx="100" cy="360" r="30" fill="#7fb356"/>
  <ellipse cx="720" cy="430" rx="44" ry="28" fill="#8ec062"/>
  <ellipse cx="690" cy="480" rx="26" ry="17" fill="#b3a48c"/>
  <!-- homem ferido caído (mesmo personagem) -->
  <g transform="translate(400 505)">
    <ellipse cx="0" cy="26" rx="100" ry="18" fill="#000" opacity="0.1"/>
    <path d="M10 6 Q70 -4 120 22" stroke="#e9d8bd" stroke-width="26" stroke-linecap="round" fill="none"/>
    <path d="M-60 -8 Q-34 -40 18 -26 Q34 6 -8 18 Q-52 22 -60 -8 Z" fill="#efe0c6"/>
    <path d="M-34 -18 Q-72 -16 -90 8" stroke="#e9d1b3" stroke-width="18" stroke-linecap="round" fill="none"/>
    <path d="M-84 -6 l14 10" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <circle cx="-72" cy="-26" r="25" fill="#f3cfa6"/>
    <path d="M-96 -34 Q-72 -58 -48 -36 Q-60 -50 -72 -50 Q-88 -48 -96 -34" fill="#5b3d24"/>
    <path d="M-98 -32 Q-72 -46 -46 -32" stroke="#ffffff" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="-78" cy="-22" r="2.8" fill="#3a2b1a"/>
    <circle cx="-64" cy="-22" r="2.8" fill="#3a2b1a"/>
    <path d="M-80 -12 Q-72 -9 -64 -12" stroke="#8a5a3a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <!-- primeiro passante (túnica azul), de costas, seguindo em frente -->
  <g transform="translate(600 350)">
    <ellipse cx="0" cy="130" rx="52" ry="14" fill="#000" opacity="0.1"/>
    <path d="M-40 130 Q-46 40 0 30 Q46 40 40 130 Z" fill="#5a86d8"/>
    <path d="M-40 130 l14 0 6 -60 M40 130 l-14 0 -6 -60" stroke="#3f66b0" stroke-width="3" fill="none"/>
    <path d="M-30 60 Q-58 90 -60 130" stroke="#5a86d8" stroke-width="20" stroke-linecap="round" fill="none"/>
    <path d="M30 60 Q58 90 60 120" stroke="#5a86d8" stroke-width="20" stroke-linecap="round" fill="none"/>
    <circle cx="0" cy="8" r="30" fill="#e9b489"/>
    <path d="M-30 6 Q0 -34 30 6 Q30 -30 0 -32 Q-30 -30 -30 6" fill="#3a2b1a"/>
    <path d="M-30 6 Q0 20 30 6 L30 30 Q0 40 -30 30 Z" fill="#2f2417"/>
  </g>
  <!-- segundo passante (túnica roxa), mais atrás, apressado -->
  <g transform="translate(690 400)">
    <ellipse cx="0" cy="105" rx="42" ry="12" fill="#000" opacity="0.1"/>
    <path d="M-32 105 Q-38 30 0 22 Q38 30 32 105 Z" fill="#8a6ad0"/>
    <path d="M-26 46 Q-50 72 -50 105" stroke="#8a6ad0" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M26 46 Q48 66 46 96" stroke="#8a6ad0" stroke-width="16" stroke-linecap="round" fill="none"/>
    <circle cx="0" cy="4" r="25" fill="#e9b489"/>
    <path d="M-25 2 Q0 -30 25 2 Q25 -26 0 -28 Q-25 -26 -25 2" fill="#4a3418"/>
    <path d="M-25 2 Q0 14 25 2 L25 22 Q0 30 -25 22 Z" fill="#3c2a13"/>
  </g>
</svg>`,

  "samaritano:samaritan-helps": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O bom samaritano com túnica âmbar ajoelhado cuidando com carinho dos machucados do homem ferido, com seu burrinho ao lado">
  <defs>
    <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe7bf"/>
      <stop offset="1" stop-color="#ffd08a"/>
    </linearGradient>
    <radialGradient id="sh-glow" cx="0.4" cy="0.35" r="0.6">
      <stop offset="0" stop-color="#fff6e0" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff6e0" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sh-road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e8c48f"/>
      <stop offset="1" stop-color="#d8ab6d"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sh-sky)"/>
  <ellipse cx="360" cy="260" rx="360" ry="240" fill="url(#sh-glow)"/>
  <circle cx="120" cy="120" r="52" fill="#fff2cf" opacity="0.9"/>
  <path d="M0 320 Q220 250 440 310 Q640 360 800 310 L800 600 L0 600 Z" fill="#b6d989"/>
  <path d="M0 380 Q220 330 440 370 L800 360 L800 600 L0 600 Z" fill="#9ccb6c"/>
  <path d="M180 360 Q120 480 60 600 L520 600 Q560 470 560 360 Z" fill="url(#sh-road)"/>
  <!-- arbustos e pedras -->
  <circle cx="90" cy="420" r="32" fill="#7fb356"/>
  <ellipse cx="710" cy="500" rx="42" ry="26" fill="#8ec062"/>
  <ellipse cx="60" cy="540" rx="34" ry="20" fill="#b3a48c"/>
  <!-- burrinho ao lado -->
  <g transform="translate(650 380)">
    <ellipse cx="0" cy="150" rx="80" ry="18" fill="#000" opacity="0.1"/>
    <ellipse cx="0" cy="70" rx="72" ry="52" fill="#b9b3aa"/>
    <path d="M-70 66 l0 76 M-40 90 l0 54 M40 90 l0 54 M70 66 l0 76" stroke="#a49d92" stroke-width="18" stroke-linecap="round"/>
    <path d="M60 44 Q104 22 104 -20 Q76 -8 66 28 Z" fill="#b9b3aa"/>
    <circle cx="96" cy="0" r="20" fill="#c3bdb3"/>
    <path d="M84 -18 l-6 -26 8 24 M104 -16 l8 -24 -4 26" fill="#a49d92" stroke="#a49d92" stroke-width="4" stroke-linecap="round"/>
    <circle cx="90" cy="-4" r="3" fill="#3a2b1a"/>
    <ellipse cx="104" cy="8" rx="8" ry="6" fill="#8f887d"/>
    <!-- mantas de carga -->
    <path d="M-56 40 Q0 24 56 40 L48 66 Q0 54 -48 66 Z" fill="#c77b45"/>
    <path d="M-40 46 l0 14 M0 42 l0 16 M40 46 l0 14" stroke="#a55f2f" stroke-width="3"/>
  </g>
  <!-- homem ferido deitado, sendo cuidado -->
  <g transform="translate(300 470)">
    <ellipse cx="20" cy="60" rx="140" ry="24" fill="#000" opacity="0.1"/>
    <path d="M40 40 Q120 28 200 56" stroke="#e9d8bd" stroke-width="28" stroke-linecap="round" fill="none"/>
    <path d="M-40 30 Q-6 -8 60 12 Q78 46 20 56 Q-30 60 -40 30 Z" fill="#efe0c6"/>
    <path d="M-20 20 Q-58 24 -74 48" stroke="#e9d1b3" stroke-width="20" stroke-linecap="round" fill="none"/>
    <g stroke="#ffffff" stroke-width="7" stroke-linecap="round">
      <path d="M-66 34 l16 10"/>
      <path d="M-72 44 l16 8"/>
    </g>
    <circle cx="-58" cy="8" r="27" fill="#f3cfa6"/>
    <path d="M-84 0 Q-58 -26 -32 -2 Q-44 -18 -58 -18 Q-74 -16 -84 0" fill="#5b3d24"/>
    <path d="M-86 2 Q-58 -12 -30 2" stroke="#ffffff" stroke-width="9" fill="none" stroke-linecap="round"/>
    <circle cx="-64" cy="8" r="3" fill="#3a2b1a"/>
    <circle cx="-48" cy="8" r="3" fill="#3a2b1a"/>
    <path d="M-66 20 Q-56 24 -46 20" stroke="#8a5a3a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- samaritano ajoelhado, túnica âmbar -->
  <g transform="translate(430 350)">
    <ellipse cx="0" cy="200" rx="90" ry="20" fill="#000" opacity="0.1"/>
    <!-- perna ajoelhada -->
    <path d="M-50 150 Q-70 200 -20 205 L60 205 Q70 170 40 150 Z" fill="#c98a3a"/>
    <!-- túnica -->
    <path d="M-46 60 Q-70 150 -40 180 L60 180 Q86 150 60 60 Q30 30 8 30 Q-20 30 -46 60 Z" fill="#eaa64a"/>
    <path d="M-4 34 Q-4 120 0 178" stroke="#d98f34" stroke-width="4" fill="none"/>
    <!-- cinto -->
    <path d="M-52 96 Q6 112 66 92" stroke="#a55f2f" stroke-width="12" fill="none" stroke-linecap="round"/>
    <!-- braços cuidando, alcançando o ferido -->
    <path d="M-40 70 Q-100 90 -140 120" stroke="#eaa64a" stroke-width="24" stroke-linecap="round" fill="none"/>
    <circle cx="-146" cy="122" r="13" fill="#e9b489"/>
    <path d="M52 70 Q92 96 96 140" stroke="#eaa64a" stroke-width="22" stroke-linecap="round" fill="none"/>
    <circle cx="96" cy="146" r="12" fill="#e9b489"/>
    <!-- pote de óleo para cuidar -->
    <path d="M88 150 q-12 4 -8 22 q4 14 20 12 q14 -4 8 -20 q-4 -12 -20 -14 Z" fill="#cf7b3a"/>
    <!-- cabeça com lenço terracota -->
    <circle cx="6" cy="6" r="32" fill="#e9b489"/>
    <path d="M-28 2 Q6 -40 40 2 Q42 -26 26 -34 Q6 -42 -14 -34 Q-30 -26 -28 2 Z" fill="#c96a3a"/>
    <path d="M-28 2 Q-40 30 -26 44 L-16 34 Q-26 18 -22 2 Z" fill="#b95c30"/>
    <circle cx="-6" cy="6" r="3.4" fill="#3a2b1a"/>
    <circle cx="18" cy="6" r="3.4" fill="#3a2b1a"/>
    <path d="M-4 20 Q6 28 16 20" stroke="#8a5a3a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <path d="M6 2 l4 10 -8 0 z" fill="#d99a72"/>
  </g>
  <!-- coraçãozinho de carinho -->
  <path d="M420 250 q-14 -18 -30 -6 q-14 12 30 44 q44 -32 30 -44 q-16 -12 -30 6 Z" fill="#e85f7a" opacity="0.9"/>
</svg>`,

  "samaritano:inn": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O bom samaritano leva o homem ferido a uma aconchegante hospedaria de telhado quente, entregando moedas ao hospedeiro, com o burrinho ao lado">
  <defs>
    <linearGradient id="in-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd9a0"/>
      <stop offset="1" stop-color="#ffc27a"/>
    </linearGradient>
    <linearGradient id="in-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f4dcae"/>
      <stop offset="1" stop-color="#e6c489"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#in-sky)"/>
  <circle cx="120" cy="110" r="48" fill="#fff2cf" opacity="0.9"/>
  <g fill="#ffe9c4">
    <path d="M660 90 l6 16 18 2 -13 12 4 18 -15-10 -15 10 4-18 -13-12 18-2z"/>
    <circle cx="600" cy="150" r="4"/>
  </g>
  <path d="M0 400 Q400 350 800 400 L800 600 L0 600 Z" fill="#9ccb6c"/>
  <path d="M0 450 Q400 410 800 450 L800 600 L0 600 Z" fill="#86bd58"/>
  <!-- hospedaria -->
  <g transform="translate(430 150)">
    <rect x="0" y="120" width="330" height="230" rx="14" fill="url(#in-wall)"/>
    <path d="M-24 130 L165 20 L354 130 Z" fill="#c8623a"/>
    <path d="M-24 130 L354 130 L340 148 L-10 148 Z" fill="#a94f2d"/>
    <!-- porta arqueada -->
    <path d="M120 350 L120 250 Q165 210 210 250 L210 350 Z" fill="#8a5a34"/>
    <path d="M165 250 L165 350 M120 290 L210 290" stroke="#6f4526" stroke-width="4"/>
    <circle cx="196" cy="300" r="5" fill="#f0c86a"/>
    <!-- janelas com luz quente -->
    <rect x="34" y="185" width="56" height="56" rx="8" fill="#ffd873"/>
    <rect x="240" y="185" width="56" height="56" rx="8" fill="#ffd873"/>
    <path d="M62 185 l0 56 M34 213 l56 0" stroke="#c79a4a" stroke-width="4"/>
    <path d="M268 185 l0 56 M240 213 l56 0" stroke="#c79a4a" stroke-width="4"/>
    <!-- lampiãozinho -->
    <circle cx="165" cy="205" r="14" fill="#ffe08a"/>
    <path d="M165 191 l0 -14" stroke="#8a5a34" stroke-width="4"/>
  </g>
  <!-- vaso de planta decorativo -->
  <g transform="translate(400 470)">
    <path d="M-16 0 L16 0 L10 40 L-10 40 Z" fill="#c77b45"/>
    <circle cx="0" cy="-8" r="18" fill="#7fb356"/>
    <circle cx="-14" cy="-2" r="12" fill="#8ec062"/>
    <circle cx="14" cy="-2" r="12" fill="#8ec062"/>
  </g>
  <!-- burrinho carregando trouxas -->
  <g transform="translate(140 400)">
    <ellipse cx="0" cy="120" rx="74" ry="16" fill="#000" opacity="0.1"/>
    <ellipse cx="0" cy="56" rx="64" ry="46" fill="#b9b3aa"/>
    <path d="M-58 54 l0 66 M-30 74 l0 46 M30 74 l0 46 M58 54 l0 66" stroke="#a49d92" stroke-width="16" stroke-linecap="round"/>
    <path d="M-54 34 Q-96 14 -96 -24 Q-70 -12 -60 22 Z" fill="#b9b3aa"/>
    <circle cx="-88" cy="-6" r="18" fill="#c3bdb3"/>
    <path d="M-78 -22 l-4 -22 6 20 M-96 -20 l6 -22 -4 22" fill="#a49d92" stroke="#a49d92" stroke-width="4" stroke-linecap="round"/>
    <circle cx="-82" cy="-8" r="3" fill="#3a2b1a"/>
    <path d="M-42 30 Q0 16 42 30 L36 52 Q0 42 -36 52 Z" fill="#cf7b3a"/>
  </g>
  <!-- homem ferido apoiado, andando com o samaritano -->
  <g transform="translate(300 350)">
    <ellipse cx="0" cy="200" rx="46" ry="14" fill="#000" opacity="0.1"/>
    <path d="M-34 60 Q-52 150 -24 190 L28 190 Q44 150 30 60 Q6 34 -4 34 Q-24 36 -34 60 Z" fill="#efe0c6"/>
    <path d="M-30 96 Q0 108 30 94" stroke="#cdb488" stroke-width="8" fill="none"/>
    <path d="M28 70 Q52 96 56 130" stroke="#e9d1b3" stroke-width="18" stroke-linecap="round" fill="none"/>
    <circle cx="-2" cy="6" r="28" fill="#f3cfa6"/>
    <path d="M-26 -2 Q-2 -28 24 -4 Q12 -20 -2 -20 Q-18 -18 -26 -2" fill="#5b3d24"/>
    <path d="M-28 0 Q-2 -14 26 0" stroke="#ffffff" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="-10" cy="8" r="3" fill="#3a2b1a"/>
    <circle cx="8" cy="8" r="3" fill="#3a2b1a"/>
    <path d="M-8 20 Q0 24 8 20" stroke="#8a5a3a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- samaritano amparando e entregando moedas -->
  <g transform="translate(360 340)">
    <ellipse cx="0" cy="210" rx="52" ry="14" fill="#000" opacity="0.1"/>
    <path d="M-36 60 Q-56 160 -26 200 L34 200 Q56 160 40 60 Q14 32 4 32 Q-20 34 -36 60 Z" fill="#eaa64a"/>
    <path d="M-40 92 Q6 106 46 90" stroke="#a55f2f" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- braço amparando o ferido -->
    <path d="M-30 66 Q-70 74 -96 96" stroke="#eaa64a" stroke-width="22" stroke-linecap="round" fill="none"/>
    <circle cx="-100" cy="98" r="12" fill="#e9b489"/>
    <!-- braço estendendo moedas -->
    <path d="M36 70 Q76 84 96 108" stroke="#eaa64a" stroke-width="20" stroke-linecap="round" fill="none"/>
    <circle cx="98" cy="112" r="12" fill="#e9b489"/>
    <g transform="translate(112 108)">
      <circle cx="0" cy="0" r="8" fill="#f0c85a"/>
      <circle cx="10" cy="6" r="7" fill="#e9bd45"/>
      <circle cx="4" cy="12" r="6" fill="#f0c85a"/>
    </g>
    <circle cx="4" cy="6" r="30" fill="#e9b489"/>
    <path d="M-28 2 Q4 -40 38 2 Q40 -26 24 -34 Q4 -42 -16 -34 Q-30 -26 -28 2 Z" fill="#c96a3a"/>
    <path d="M-28 2 Q-40 28 -26 42 L-16 32 Q-26 16 -22 2 Z" fill="#b95c30"/>
    <circle cx="-8" cy="6" r="3.4" fill="#3a2b1a"/>
    <circle cx="16" cy="6" r="3.4" fill="#3a2b1a"/>
    <path d="M-6 20 Q4 28 14 20" stroke="#8a5a3a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  "samaritano:love-neighbor": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jesus com túnica clara ensina com carinho, cercado de corações, mostrando que amar o próximo é amar a Deus, sob um céu ensolarado com colinas verdes">
  <defs>
    <linearGradient id="ln-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9c2"/>
      <stop offset="1" stop-color="#ffd591"/>
    </linearGradient>
    <radialGradient id="ln-glow" cx="0.5" cy="0.3" r="0.7">
      <stop offset="0" stop-color="#fff7e3" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff7e3" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#ln-sky)"/>
  <ellipse cx="400" cy="220" rx="400" ry="300" fill="url(#ln-glow)"/>
  <circle cx="400" cy="150" r="70" fill="#fff2cf" opacity="0.85"/>
  <g fill="#fff5da" opacity="0.55">
    <polygon points="400,150 300,360 360,360"/>
    <polygon points="400,150 440,360 500,360"/>
    <polygon points="400,150 210,320 270,340"/>
    <polygon points="400,150 590,320 530,340"/>
  </g>
  <path d="M0 400 Q200 330 400 390 Q600 440 800 390 L800 600 L0 600 Z" fill="#9ccb6c"/>
  <path d="M0 460 Q220 410 440 450 Q640 480 800 450 L800 600 L0 600 Z" fill="#86bd58"/>
  <!-- florzinhas -->
  <g>
    <g transform="translate(120 500)"><circle r="8" fill="#ffd873"/><circle cx="-12" r="7" fill="#f4a3c0"/><circle cx="12" r="7" fill="#f4a3c0"/><circle cy="-12" r="7" fill="#f4a3c0"/><circle cy="12" r="7" fill="#f4a3c0"/></g>
    <g transform="translate(690 510)"><circle r="8" fill="#ffd873"/><circle cx="-12" r="7" fill="#a9d0f0"/><circle cx="12" r="7" fill="#a9d0f0"/><circle cy="-12" r="7" fill="#a9d0f0"/><circle cy="12" r="7" fill="#a9d0f0"/></g>
  </g>
  <!-- corações flutuando -->
  <g fill="#e85f7a" opacity="0.9">
    <path d="M180 200 q-16 -20 -34 -7 q-16 13 34 49 q50 -36 34 -49 q-18 -13 -34 7 Z"/>
    <path d="M620 220 q-13 -16 -28 -6 q-13 11 28 40 q41 -29 28 -40 q-15 -10 -28 6 Z" opacity="0.8"/>
    <path d="M640 380 q-10 -12 -21 -4 q-10 8 21 30 q31 -22 21 -30 q-11 -8 -21 4 Z" opacity="0.7"/>
    <path d="M150 360 q-11 -14 -24 -5 q-11 9 24 34 q35 -25 24 -34 q-13 -9 -24 5 Z" opacity="0.75"/>
  </g>
  <!-- Jesus ensinando, túnica clara com faixa -->
  <g transform="translate(400 300)">
    <ellipse cx="0" cy="230" rx="110" ry="24" fill="#000" opacity="0.1"/>
    <!-- túnica -->
    <path d="M-64 60 Q-92 200 -48 226 L48 226 Q92 200 64 60 Q30 24 0 24 Q-30 24 -64 60 Z" fill="#f6efe0"/>
    <!-- manto azul-claro sobre o ombro -->
    <path d="M-64 58 Q-30 34 0 34 Q30 34 64 58 Q40 96 0 92 Q-40 96 -64 58 Z" fill="#b9d3ef"/>
    <path d="M40 60 Q70 150 52 220 L74 220 Q92 150 66 62 Z" fill="#a9c8ea"/>
    <!-- faixa -->
    <path d="M-60 108 Q0 124 60 104" stroke="#d9b06a" stroke-width="12" fill="none" stroke-linecap="round"/>
    <!-- braços abertos, acolhedores -->
    <path d="M-52 74 Q-108 74 -140 44" stroke="#f6efe0" stroke-width="24" stroke-linecap="round" fill="none"/>
    <circle cx="-146" cy="42" r="13" fill="#e9b489"/>
    <path d="M52 74 Q108 74 140 44" stroke="#f6efe0" stroke-width="24" stroke-linecap="round" fill="none"/>
    <circle cx="146" cy="42" r="13" fill="#e9b489"/>
    <!-- cabeça com auréola suave -->
    <circle cx="0" cy="-2" r="70" fill="#fff6df" opacity="0.7"/>
    <circle cx="0" cy="4" r="34" fill="#e9b489"/>
    <path d="M-34 4 Q0 -42 34 4 Q34 -34 0 -36 Q-34 -34 -34 4" fill="#6b4a2b"/>
    <path d="M-34 4 Q-44 40 -30 62 L-16 48 Q-28 26 -26 4 Z" fill="#5b3d24"/>
    <path d="M34 4 Q44 40 30 62 L16 48 Q28 26 26 4 Z" fill="#5b3d24"/>
    <circle cx="-12" cy="4" r="3.6" fill="#3a2b1a"/>
    <circle cx="12" cy="4" r="3.6" fill="#3a2b1a"/>
    <path d="M-10 20 Q0 28 10 20" stroke="#8a5a3a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <!-- barba curta -->
    <path d="M-22 22 Q0 52 22 22 Q18 40 0 42 Q-18 40 -22 22 Z" fill="#6b4a2b"/>
  </g>
</svg>`,
});

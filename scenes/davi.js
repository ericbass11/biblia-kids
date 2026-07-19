/* Cenas da historia "Davi e Golias" (id: davi).
   window.SCENES guarda o SVG de cada cena, indexado por "davi:<scene>". */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  // Cena 1: Davi pastor cuidando das ovelhas e tocando harpa
  "davi:shepherd": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Davi menino pastor tocando harpa no campo com suas ovelhas sob o sol">
  <defs>
    <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8fd3ff"/>
      <stop offset="1" stop-color="#dff3ff"/>
    </linearGradient>
    <linearGradient id="sh-hill1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9ed86a"/>
      <stop offset="1" stop-color="#7cc44e"/>
    </linearGradient>
    <linearGradient id="sh-hill2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7ec24a"/>
      <stop offset="1" stop-color="#5ea637"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sh-sky)"/>
  <!-- sol -->
  <circle cx="120" cy="110" r="60" fill="#ffd54a"/>
  <circle cx="120" cy="110" r="78" fill="#ffd54a" opacity="0.3"/>
  <!-- nuvens -->
  <g fill="#ffffff">
    <ellipse cx="560" cy="110" rx="70" ry="34"/>
    <ellipse cx="610" cy="95" rx="52" ry="30"/>
    <ellipse cx="510" cy="95" rx="46" ry="26"/>
    <ellipse cx="300" cy="70" rx="55" ry="26"/>
    <ellipse cx="345" cy="60" rx="40" ry="22"/>
  </g>
  <!-- passarinhos -->
  <g stroke="#5a3d2b" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M400 130 q12 -12 24 0"/>
    <path d="M424 130 q12 -12 24 0"/>
  </g>
  <!-- colinas -->
  <path d="M0 430 Q200 350 420 420 T800 400 V600 H0 Z" fill="url(#sh-hill1)"/>
  <path d="M0 500 Q260 430 520 490 T800 470 V600 H0 Z" fill="url(#sh-hill2)"/>
  <!-- arbustos -->
  <g fill="#4f9330">
    <circle cx="700" cy="470" r="30"/>
    <circle cx="730" cy="480" r="24"/>
    <circle cx="60" cy="500" r="28"/>
  </g>
  <!-- ovelhas -->
  <g>
    <g transform="translate(150 500)">
      <ellipse cx="0" cy="0" rx="48" ry="34" fill="#fff8ef"/>
      <circle cx="-30" cy="12" r="18" fill="#f4f0e6"/>
      <circle cx="-40" cy="6" r="16" fill="#5a4a3a"/>
      <circle cx="-45" cy="2" r="3" fill="#2b2320"/>
      <ellipse cx="-46" cy="14" rx="5" ry="4" fill="#2b2320"/>
      <rect x="-8" y="28" width="7" height="22" rx="3" fill="#5a4a3a"/>
      <rect x="18" y="28" width="7" height="22" rx="3" fill="#5a4a3a"/>
    </g>
    <g transform="translate(560 520) scale(0.9)">
      <ellipse cx="0" cy="0" rx="48" ry="34" fill="#fff8ef"/>
      <circle cx="30" cy="12" r="18" fill="#f4f0e6"/>
      <circle cx="40" cy="6" r="16" fill="#5a4a3a"/>
      <circle cx="45" cy="2" r="3" fill="#2b2320"/>
      <ellipse cx="46" cy="14" rx="5" ry="4" fill="#2b2320"/>
      <rect x="1" y="28" width="7" height="22" rx="3" fill="#5a4a3a"/>
      <rect x="-25" y="28" width="7" height="22" rx="3" fill="#5a4a3a"/>
    </g>
    <g transform="translate(660 560) scale(0.7)">
      <ellipse cx="0" cy="0" rx="48" ry="34" fill="#fff8ef"/>
      <circle cx="30" cy="12" r="18" fill="#f4f0e6"/>
      <circle cx="40" cy="6" r="16" fill="#5a4a3a"/>
      <circle cx="45" cy="2" r="3" fill="#2b2320"/>
    </g>
  </g>
  <!-- Davi pastor com harpa -->
  <g transform="translate(360 350)">
    <!-- pernas -->
    <rect x="-22" y="150" width="20" height="52" rx="9" fill="#c9884a"/>
    <rect x="8" y="150" width="20" height="52" rx="9" fill="#c9884a"/>
    <ellipse cx="-14" cy="206" rx="16" ry="9" fill="#6b4a2b"/>
    <ellipse cx="20" cy="206" rx="16" ry="9" fill="#6b4a2b"/>
    <!-- tunica -->
    <path d="M-40 60 Q0 44 40 60 L34 160 Q0 172 -34 160 Z" fill="#e8873a"/>
    <path d="M-40 60 Q0 44 40 60 L38 92 Q0 104 -38 92 Z" fill="#d1732c"/>
    <!-- cinto -->
    <rect x="-38" y="112" width="76" height="14" rx="7" fill="#8a5a2b"/>
    <!-- bracos -->
    <rect x="-58" y="70" width="18" height="60" rx="9" fill="#c9884a" transform="rotate(18 -49 100)"/>
    <rect x="40" y="70" width="18" height="58" rx="9" fill="#c9884a" transform="rotate(-14 49 99)"/>
    <!-- cabeca -->
    <circle cx="0" cy="24" r="34" fill="#f2c199"/>
    <path d="M-34 12 Q-30 -18 0 -18 Q30 -18 34 12 Q22 -4 0 -2 Q-22 -4 -34 12 Z" fill="#5a3a22"/>
    <circle cx="-12" cy="26" r="4" fill="#3a2a1c"/>
    <circle cx="12" cy="26" r="4" fill="#3a2a1c"/>
    <path d="M-12 40 Q0 50 12 40" stroke="#b5603a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="36" r="6" fill="#f6a98a" opacity="0.6"/>
    <circle cx="20" cy="36" r="6" fill="#f6a98a" opacity="0.6"/>
    <!-- harpa -->
    <g transform="translate(70 96)">
      <path d="M0 60 Q-6 0 40 -18 Q50 30 34 62 Z" fill="#d99a3a"/>
      <path d="M0 60 Q-6 0 40 -18" stroke="#8a5a1c" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M0 60 L34 62" stroke="#8a5a1c" stroke-width="7" stroke-linecap="round"/>
      <g stroke="#fff3d0" stroke-width="2">
        <line x1="8" y1="56" x2="14" y2="-6"/>
        <line x1="16" y1="58" x2="24" y2="-8"/>
        <line x1="24" y1="59" x2="33" y2="-4"/>
      </g>
    </g>
    <!-- notas musicais -->
    <g fill="#ffffff" stroke="#5a3d2b" stroke-width="3">
      <circle cx="150" cy="40" r="8"/>
      <line x1="158" y1="40" x2="158" y2="12" stroke-width="4"/>
      <circle cx="188" cy="70" r="7"/>
      <line x1="195" y1="70" x2="195" y2="46" stroke-width="4"/>
    </g>
  </g>
  <!-- cajado de pastor -->
  <path d="M300 380 q-20 -30 6 -44 q22 -10 22 10" stroke="#8a5a2b" stroke-width="10" fill="none" stroke-linecap="round"/>
  <line x1="300" y1="380" x2="300" y2="552" stroke="#8a5a2b" stroke-width="10" stroke-linecap="round"/>
</svg>`,

  // Cena 2: Golias gigante assustando a todos
  "davi:giant": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O gigante Golias enorme com armadura assustando pequenos soldados no campo de batalha">
  <defs>
    <linearGradient id="gi-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7fb0d6"/>
      <stop offset="1" stop-color="#c7dfe8"/>
    </linearGradient>
    <linearGradient id="gi-armor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9aa7b3"/>
      <stop offset="1" stop-color="#6d7b89"/>
    </linearGradient>
    <linearGradient id="gi-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c7a86a"/>
      <stop offset="1" stop-color="#a8894c"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#gi-sky)"/>
  <!-- nuvens escuras -->
  <g fill="#b9cdd8">
    <ellipse cx="180" cy="90" rx="80" ry="34"/>
    <ellipse cx="240" cy="80" rx="56" ry="28"/>
    <ellipse cx="640" cy="70" rx="70" ry="30"/>
  </g>
  <!-- colinas ao fundo -->
  <path d="M0 380 Q200 320 420 370 T800 350 V600 H0 Z" fill="#8fae5a"/>
  <!-- chao de batalha -->
  <path d="M0 470 Q400 430 800 470 V600 H0 Z" fill="url(#gi-ground)"/>
  <!-- pedras espalhadas -->
  <g fill="#8a6f42">
    <ellipse cx="120" cy="560" rx="22" ry="12"/>
    <ellipse cx="700" cy="540" rx="26" ry="14"/>
    <ellipse cx="620" cy="580" rx="16" ry="9"/>
  </g>
  <!-- soldados pequenos tremendo de medo -->
  <g transform="translate(120 470)">
    <ellipse cx="0" cy="82" rx="26" ry="8" fill="#000000" opacity="0.12"/>
    <path d="M-18 30 Q0 22 18 30 L14 78 Q0 84 -14 78 Z" fill="#b45c3a"/>
    <circle cx="0" cy="10" r="18" fill="#efb98a"/>
    <path d="M-18 6 A18 18 0 0 1 18 6 L14 4 Q0 -6 -14 4 Z" fill="#8a94a0"/>
    <circle cx="-6" cy="12" r="3" fill="#3a2a1c"/>
    <circle cx="6" cy="12" r="3" fill="#3a2a1c"/>
    <ellipse cx="0" cy="22" rx="5" ry="6" fill="#7a4230"/>
    <path d="M-24 40 l-14 8" stroke="#8a94a0" stroke-width="6" stroke-linecap="round"/>
  </g>
  <g transform="translate(200 490) scale(0.9)">
    <ellipse cx="0" cy="82" rx="26" ry="8" fill="#000000" opacity="0.12"/>
    <path d="M-18 30 Q0 22 18 30 L14 78 Q0 84 -14 78 Z" fill="#6a86b0"/>
    <circle cx="0" cy="10" r="18" fill="#e0a877"/>
    <path d="M-18 6 A18 18 0 0 1 18 6 L14 4 Q0 -6 -14 4 Z" fill="#8a94a0"/>
    <circle cx="-6" cy="12" r="3" fill="#3a2a1c"/>
    <circle cx="6" cy="12" r="3" fill="#3a2a1c"/>
    <ellipse cx="0" cy="22" rx="5" ry="6" fill="#7a4230"/>
  </g>
  <!-- GOLIAS gigante -->
  <g transform="translate(520 60)">
    <ellipse cx="20" cy="500" rx="120" ry="22" fill="#000000" opacity="0.15"/>
    <!-- pernas -->
    <rect x="-40" y="360" width="46" height="130" rx="20" fill="url(#gi-armor)"/>
    <rect x="34" y="360" width="46" height="130" rx="20" fill="url(#gi-armor)"/>
    <ellipse cx="-16" cy="496" rx="40" ry="16" fill="#4a4038"/>
    <ellipse cx="58" cy="496" rx="40" ry="16" fill="#4a4038"/>
    <!-- saia de armadura -->
    <path d="M-56 300 L96 300 L84 372 L-44 372 Z" fill="#7d8b98"/>
    <g fill="#6d7b89">
      <rect x="-44" y="300" width="20" height="70"/>
      <rect x="0" y="300" width="20" height="70"/>
      <rect x="44" y="300" width="20" height="70"/>
    </g>
    <!-- torso com peitoral -->
    <path d="M-70 150 Q20 130 110 150 L96 310 Q20 328 -56 310 Z" fill="url(#gi-armor)"/>
    <path d="M-60 170 Q20 156 100 170 L92 250 Q20 264 -52 250 Z" fill="#b7c2cc"/>
    <circle cx="20" cy="210" r="16" fill="#d7dee4"/>
    <!-- bracos enormes -->
    <rect x="-96" y="160" width="40" height="150" rx="18" fill="url(#gi-armor)"/>
    <rect x="96" y="160" width="40" height="130" rx="18" fill="url(#gi-armor)"/>
    <circle cx="-76" cy="316" r="24" fill="#d99a6a"/>
    <!-- lanca na mao esquerda -->
    <line x1="-76" y1="316" x2="-76" y2="30" stroke="#8a5a2b" stroke-width="12" stroke-linecap="round"/>
    <path d="M-76 30 l-16 34 l32 0 Z" fill="#c7d0d8"/>
    <!-- escudo na mao direita -->
    <g transform="translate(130 300)">
      <ellipse cx="0" cy="0" rx="40" ry="52" fill="#a5651f"/>
      <ellipse cx="0" cy="0" rx="28" ry="40" fill="#c98a3a"/>
      <circle cx="0" cy="0" r="12" fill="#e0b45a"/>
    </g>
    <!-- cabeca com capacete -->
    <circle cx="20" cy="90" r="56" fill="#d99a6a"/>
    <path d="M-40 74 A60 60 0 0 1 80 74 L80 56 A60 46 0 0 0 -40 56 Z" fill="url(#gi-armor)"/>
    <rect x="-42" y="60" width="124" height="20" rx="6" fill="#8a97a3"/>
    <!-- crista do capacete -->
    <path d="M20 34 Q-2 8 20 -4 Q42 8 20 34" fill="#c0392b"/>
    <path d="M14 30 Q6 14 20 2 Q34 14 26 30 Z" fill="#e05545"/>
    <!-- rosto bravo -->
    <path d="M-2 96 l22 4 M42 96 l-22 4" stroke="#7a4a2a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="4" cy="106" r="5" fill="#3a2a1c"/>
    <circle cx="36" cy="106" r="5" fill="#3a2a1c"/>
    <path d="M-10 132 Q20 126 50 132" stroke="#7a4a2a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M-4 130 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" fill="none" stroke="#7a4a2a" stroke-width="3"/>
    <!-- barba -->
    <path d="M-14 118 Q20 160 54 118 Q48 150 20 156 Q-8 150 -14 118 Z" fill="#5a3a22"/>
  </g>
  <!-- linhas de grito -->
  <g stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity="0.7">
    <line x1="330" y1="150" x2="380" y2="160"/>
    <line x1="325" y1="185" x2="378" y2="188"/>
    <line x1="335" y1="220" x2="384" y2="212"/>
  </g>
</svg>`,

  // Cena 3: Davi corajoso pega funda e cinco pedrinhas do rio
  "davi:david-brave": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Davi corajoso ajoelhado junto ao rio pegando cinco pedrinhas lisas segurando a funda">
  <defs>
    <linearGradient id="br-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9ad7ff"/>
      <stop offset="1" stop-color="#e6f5ff"/>
    </linearGradient>
    <linearGradient id="br-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5fb8e8"/>
      <stop offset="1" stop-color="#3f97cf"/>
    </linearGradient>
    <radialGradient id="br-glow" cx="0.5" cy="0.4" r="0.6">
      <stop offset="0" stop-color="#fff6d6" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff6d6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#br-sky)"/>
  <ellipse cx="400" cy="230" rx="320" ry="220" fill="url(#br-glow)"/>
  <!-- sol -->
  <circle cx="670" cy="110" r="54" fill="#ffd54a"/>
  <!-- nuvens -->
  <g fill="#ffffff">
    <ellipse cx="180" cy="90" rx="66" ry="30"/>
    <ellipse cx="230" cy="78" rx="46" ry="24"/>
  </g>
  <!-- colinas -->
  <path d="M0 300 Q220 240 460 290 T800 270 V420 H0 Z" fill="#8fce5c"/>
  <path d="M0 360 Q260 320 540 360 T800 350 V440 H0 Z" fill="#6fb843"/>
  <!-- rio -->
  <path d="M0 420 Q400 390 800 430 V600 H0 Z" fill="url(#br-water)"/>
  <g stroke="#bfeaff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8">
    <path d="M80 470 q30 -10 60 0"/>
    <path d="M540 480 q30 -10 60 0"/>
    <path d="M620 540 q30 -10 60 0"/>
  </g>
  <!-- margem de terra -->
  <path d="M0 440 Q200 420 420 440 L420 470 Q200 452 0 470 Z" fill="#c7a86a"/>
  <!-- cinco pedrinhas lisas no chao -->
  <g>
    <ellipse cx="150" cy="470" rx="16" ry="10" fill="#b8b0a2"/>
    <ellipse cx="150" cy="466" rx="12" ry="6" fill="#d3ccc0"/>
    <ellipse cx="205" cy="482" rx="14" ry="9" fill="#a89f90"/>
    <ellipse cx="205" cy="478" rx="10" ry="5" fill="#cbc4b8"/>
    <ellipse cx="258" cy="470" rx="15" ry="9" fill="#b8b0a2"/>
    <ellipse cx="258" cy="466" rx="11" ry="5" fill="#d3ccc0"/>
    <ellipse cx="300" cy="488" rx="12" ry="8" fill="#a89f90"/>
    <ellipse cx="112" cy="486" rx="13" ry="8" fill="#b8b0a2"/>
  </g>
  <!-- Davi ajoelhado pegando pedra -->
  <g transform="translate(470 300)">
    <ellipse cx="10" cy="192" rx="70" ry="16" fill="#000000" opacity="0.12"/>
    <!-- perna dobrada -->
    <path d="M-30 120 Q-40 160 -6 176 L28 176 Q0 150 4 120 Z" fill="#c9884a"/>
    <ellipse cx="-30" cy="176" rx="20" ry="10" fill="#6b4a2b"/>
    <ellipse cx="42" cy="176" rx="20" ry="10" fill="#6b4a2b"/>
    <!-- tunica -->
    <path d="M-42 40 Q0 24 42 40 L38 130 Q0 146 -38 130 Z" fill="#e8873a"/>
    <path d="M-42 40 Q0 24 42 40 L40 72 Q0 84 -40 72 Z" fill="#d1732c"/>
    <rect x="-40" y="92" width="80" height="14" rx="7" fill="#8a5a2b"/>
    <!-- braco esticado para pegar pedra -->
    <path d="M-30 60 Q-90 90 -140 150" stroke="#c9884a" stroke-width="20" fill="none" stroke-linecap="round"/>
    <circle cx="-146" cy="156" r="14" fill="#f2c199"/>
    <!-- outro braco com funda -->
    <path d="M34 62 Q70 80 78 120" stroke="#c9884a" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="124" r="13" fill="#f2c199"/>
    <!-- funda pendurada -->
    <path d="M80 124 q20 30 4 60 M80 124 q40 20 30 56" stroke="#8a5a2b" stroke-width="4" fill="none"/>
    <path d="M92 176 q18 14 14 30 q-24 6 -30 -14 Z" fill="#7a4a2a"/>
    <!-- cabeca -->
    <circle cx="0" cy="4" r="34" fill="#f2c199"/>
    <path d="M-34 -8 Q-30 -38 0 -38 Q30 -38 34 -8 Q22 -24 0 -22 Q-22 -24 -34 -8 Z" fill="#5a3a22"/>
    <circle cx="-12" cy="6" r="4" fill="#3a2a1c"/>
    <circle cx="12" cy="6" r="4" fill="#3a2a1c"/>
    <path d="M-12 20 Q0 30 12 20" stroke="#b5603a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="16" r="6" fill="#f6a98a" opacity="0.6"/>
    <circle cx="20" cy="16" r="6" fill="#f6a98a" opacity="0.6"/>
  </g>
  <!-- pequeno arbusto -->
  <g fill="#4f9330">
    <circle cx="720" cy="430" r="30"/>
    <circle cx="750" cy="440" r="22"/>
  </g>
</svg>`,

  // Cena 4: Davi rodando a funda e o gigante caindo
  "davi:sling": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Davi rodando a funda e lancando a pedrinha enquanto o gigante Golias cai no chao">
  <defs>
    <linearGradient id="sl-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd08a"/>
      <stop offset="1" stop-color="#ffe9c2"/>
    </linearGradient>
    <linearGradient id="sl-armor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9aa7b3"/>
      <stop offset="1" stop-color="#6d7b89"/>
    </linearGradient>
    <linearGradient id="sl-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c7a86a"/>
      <stop offset="1" stop-color="#a8894c"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sl-sky)"/>
  <!-- sol grande -->
  <circle cx="400" cy="130" r="70" fill="#ffca3a" opacity="0.85"/>
  <!-- nuvens -->
  <g fill="#fff6e6">
    <ellipse cx="150" cy="90" rx="66" ry="30"/>
    <ellipse cx="660" cy="80" rx="70" ry="30"/>
  </g>
  <!-- colinas -->
  <path d="M0 380 Q200 320 420 370 T800 350 V600 H0 Z" fill="#8fae5a"/>
  <path d="M0 460 Q400 420 800 460 V600 H0 Z" fill="url(#sl-ground)"/>
  <!-- Davi pequeno rodando a funda -->
  <g transform="translate(150 340)">
    <ellipse cx="0" cy="150" rx="48" ry="12" fill="#000000" opacity="0.12"/>
    <rect x="-20" y="98" width="18" height="52" rx="9" fill="#c9884a"/>
    <rect x="6" y="98" width="18" height="52" rx="9" fill="#c9884a"/>
    <ellipse cx="-12" cy="152" rx="15" ry="8" fill="#6b4a2b"/>
    <ellipse cx="18" cy="152" rx="15" ry="8" fill="#6b4a2b"/>
    <path d="M-36 24 Q0 10 36 24 L32 100 Q0 114 -32 100 Z" fill="#e8873a"/>
    <path d="M-36 24 Q0 10 36 24 L34 52 Q0 62 -34 52 Z" fill="#d1732c"/>
    <rect x="-34" y="70" width="68" height="12" rx="6" fill="#8a5a2b"/>
    <!-- braco erguido girando funda -->
    <path d="M20 30 Q60 -6 40 -50" stroke="#c9884a" stroke-width="16" fill="none" stroke-linecap="round"/>
    <circle cx="40" cy="-54" r="12" fill="#f2c199"/>
    <!-- funda girando -->
    <ellipse cx="60" cy="-70" rx="52" ry="30" fill="none" stroke="#8a5a2b" stroke-width="4" stroke-dasharray="10 8"/>
    <path d="M40 -54 l52 -8 M40 -54 l50 12" stroke="#7a4a2a" stroke-width="4"/>
    <!-- outro braco -->
    <path d="M-24 34 Q-50 60 -40 90" stroke="#c9884a" stroke-width="15" fill="none" stroke-linecap="round"/>
    <!-- cabeca -->
    <circle cx="0" cy="-2" r="30" fill="#f2c199"/>
    <path d="M-30 -12 Q-26 -38 0 -38 Q26 -38 30 -12 Q20 -26 0 -24 Q-20 -26 -30 -12 Z" fill="#5a3a22"/>
    <circle cx="-10" cy="0" r="4" fill="#3a2a1c"/>
    <circle cx="10" cy="0" r="4" fill="#3a2a1c"/>
    <path d="M-10 12 Q0 20 10 12" stroke="#b5603a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="-18" cy="8" r="5" fill="#f6a98a" opacity="0.6"/>
    <circle cx="18" cy="8" r="5" fill="#f6a98a" opacity="0.6"/>
  </g>
  <!-- pedrinha voando reto e certeiro -->
  <g>
    <ellipse cx="420" cy="230" rx="12" ry="9" fill="#8a8072"/>
    <ellipse cx="420" cy="226" rx="8" ry="4" fill="#cbc4b8"/>
    <g stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.8">
      <line x1="320" y1="240" x2="380" y2="234"/>
      <line x1="300" y1="258" x2="360" y2="252"/>
      <line x1="330" y1="272" x2="385" y2="264"/>
    </g>
  </g>
  <!-- GOLIAS caindo para tras -->
  <g transform="translate(560 300) rotate(28 40 160)">
    <ellipse cx="40" cy="300" rx="130" ry="20" fill="#000000" opacity="0.15"/>
    <!-- pernas -->
    <rect x="-30" y="200" width="42" height="110" rx="18" fill="url(#sl-armor)"/>
    <rect x="40" y="200" width="42" height="110" rx="18" fill="url(#sl-armor)"/>
    <ellipse cx="-8" cy="312" rx="34" ry="14" fill="#4a4038"/>
    <ellipse cx="62" cy="312" rx="34" ry="14" fill="#4a4038"/>
    <!-- saia armadura -->
    <path d="M-44 150 L84 150 L74 210 L-34 210 Z" fill="#7d8b98"/>
    <!-- torso -->
    <path d="M-58 20 Q20 4 98 20 L84 160 Q20 176 -44 160 Z" fill="url(#sl-armor)"/>
    <path d="M-50 40 Q20 28 90 40 L82 110 Q20 122 -42 110 Z" fill="#b7c2cc"/>
    <!-- bracos abertos caindo -->
    <rect x="-108" y="30" width="36" height="120" rx="16" fill="url(#sl-armor)" transform="rotate(30 -90 90)"/>
    <rect x="90" y="30" width="36" height="120" rx="16" fill="url(#sl-armor)" transform="rotate(-24 108 90)"/>
    <!-- cabeca com capacete -->
    <circle cx="20" cy="-30" r="50" fill="#d99a6a"/>
    <path d="M-30 -44 A54 54 0 0 1 70 -44 L70 -60 A54 40 0 0 0 -30 -60 Z" fill="url(#sl-armor)"/>
    <rect x="-32" y="-58" width="104" height="18" rx="6" fill="#8a97a3"/>
    <path d="M20 -84 Q0 -104 20 -114 Q40 -104 20 -84" fill="#c0392b"/>
    <!-- olhos tontos -->
    <path d="M4 -30 l14 -8 M4 -38 l14 8" stroke="#3a2a1c" stroke-width="4" stroke-linecap="round"/>
    <path d="M28 -30 l14 -8 M28 -38 l14 8" stroke="#3a2a1c" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="22" cy="-8" rx="10" ry="8" fill="#7a4230"/>
    <path d="M-4 -8 Q20 -18 44 -8 Z" fill="#5a3a22"/>
    <!-- estrelinhas de tonto -->
    <g fill="#ffe066" stroke="#e0a800" stroke-width="1.5">
      <path d="M78 -84 l4 10 10 2 -8 7 2 10 -8 -6 -8 6 2 -10 -8 -7 10 -2 Z"/>
      <path d="M-36 -76 l3 7 8 1 -6 5 2 8 -7 -4 -6 4 1 -8 -6 -5 8 -1 Z"/>
    </g>
  </g>
</svg>`,

  // Cena 5: Vitoria, todos felizes com Davi
  "davi:victory": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Davi celebrando a vitoria com os bracos erguidos enquanto o povo comemora feliz sob o ceu ensolarado">
  <defs>
    <linearGradient id="vi-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8fd3ff"/>
      <stop offset="1" stop-color="#e6f6ff"/>
    </linearGradient>
    <radialGradient id="vi-glow" cx="0.5" cy="0.35" r="0.65">
      <stop offset="0" stop-color="#fff6d6" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff6d6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="vi-hill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9ed86a"/>
      <stop offset="1" stop-color="#7cc44e"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#vi-sky)"/>
  <ellipse cx="400" cy="200" rx="360" ry="240" fill="url(#vi-glow)"/>
  <!-- sol com raios -->
  <g transform="translate(400 150)">
    <g stroke="#ffd54a" stroke-width="8" stroke-linecap="round">
      <line x1="0" y1="-90" x2="0" y2="-64"/>
      <line x1="64" y1="-64" x2="46" y2="-46"/>
      <line x1="90" y1="0" x2="64" y2="0"/>
      <line x1="-64" y1="-64" x2="-46" y2="-46"/>
      <line x1="-90" y1="0" x2="-64" y2="0"/>
    </g>
    <circle cx="0" cy="0" r="48" fill="#ffd54a"/>
  </g>
  <!-- nuvens -->
  <g fill="#ffffff">
    <ellipse cx="150" cy="100" rx="60" ry="28"/>
    <ellipse cx="650" cy="90" rx="66" ry="30"/>
  </g>
  <!-- passarinhos -->
  <g stroke="#5a3d2b" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M240 130 q10 -10 20 0"/>
    <path d="M262 130 q10 -10 20 0"/>
    <path d="M540 150 q10 -10 20 0"/>
  </g>
  <!-- colinas -->
  <path d="M0 400 Q220 340 460 390 T800 370 V600 H0 Z" fill="url(#vi-hill)"/>
  <path d="M0 470 Q260 430 540 470 T800 460 V600 H0 Z" fill="#5ea637"/>
  <!-- confete festivo -->
  <g>
    <rect x="120" y="200" width="14" height="14" rx="3" fill="#ff6b6b" transform="rotate(20 127 207)"/>
    <rect x="680" y="230" width="14" height="14" rx="3" fill="#4dabf7" transform="rotate(-15 687 237)"/>
    <circle cx="220" cy="180" r="8" fill="#ffd43b"/>
    <circle cx="600" cy="180" r="8" fill="#69db7c"/>
    <rect x="500" y="210" width="12" height="12" rx="3" fill="#f783ac" transform="rotate(30 506 216)"/>
    <circle cx="320" cy="200" r="7" fill="#b197fc"/>
  </g>
  <!-- Davi vitorioso no centro, bracos erguidos -->
  <g transform="translate(400 320)">
    <ellipse cx="0" cy="200" rx="60" ry="14" fill="#000000" opacity="0.12"/>
    <rect x="-22" y="150" width="20" height="54" rx="9" fill="#c9884a"/>
    <rect x="8" y="150" width="20" height="54" rx="9" fill="#c9884a"/>
    <ellipse cx="-14" cy="206" rx="16" ry="9" fill="#6b4a2b"/>
    <ellipse cx="20" cy="206" rx="16" ry="9" fill="#6b4a2b"/>
    <path d="M-42 56 Q0 40 42 56 L36 156 Q0 170 -36 156 Z" fill="#e8873a"/>
    <path d="M-42 56 Q0 40 42 56 L40 90 Q0 102 -40 90 Z" fill="#d1732c"/>
    <rect x="-40" y="108" width="80" height="14" rx="7" fill="#8a5a2b"/>
    <!-- bracos erguidos em festa -->
    <path d="M-34 66 Q-70 20 -58 -30" stroke="#c9884a" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="-58" cy="-34" r="13" fill="#f2c199"/>
    <path d="M34 66 Q70 20 58 -30" stroke="#c9884a" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="58" cy="-34" r="13" fill="#f2c199"/>
    <!-- funda na mao -->
    <path d="M58 -34 q22 6 26 26" stroke="#7a4a2a" stroke-width="4" fill="none"/>
    <!-- cabeca sorridente -->
    <circle cx="0" cy="20" r="34" fill="#f2c199"/>
    <path d="M-34 8 Q-30 -22 0 -22 Q30 -22 34 8 Q22 -8 0 -6 Q-22 -8 -34 8 Z" fill="#5a3a22"/>
    <circle cx="-12" cy="22" r="4" fill="#3a2a1c"/>
    <circle cx="12" cy="22" r="4" fill="#3a2a1c"/>
    <path d="M-14 34 Q0 48 14 34" stroke="#b5603a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="32" r="6" fill="#f6a98a" opacity="0.6"/>
    <circle cx="20" cy="32" r="6" fill="#f6a98a" opacity="0.6"/>
  </g>
  <!-- povo comemorando ao redor -->
  <g transform="translate(180 400)">
    <ellipse cx="0" cy="120" rx="40" ry="10" fill="#000000" opacity="0.1"/>
    <path d="M-26 30 Q0 18 26 30 L22 110 Q0 122 -22 110 Z" fill="#6a86b0"/>
    <path d="M-24 34 Q-44 0 -34 -30" stroke="#e0a877" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M24 34 Q44 0 34 -30" stroke="#e0a877" stroke-width="12" fill="none" stroke-linecap="round"/>
    <circle cx="-36" cy="-34" r="9" fill="#e0a877"/>
    <circle cx="36" cy="-34" r="9" fill="#e0a877"/>
    <circle cx="0" cy="0" r="26" fill="#efb98a"/>
    <path d="M-26 -8 Q-22 -30 0 -30 Q22 -30 26 -8 Q14 -20 0 -18 Q-14 -20 -26 -8 Z" fill="#3a2a1c"/>
    <circle cx="-9" cy="2" r="3.5" fill="#3a2a1c"/>
    <circle cx="9" cy="2" r="3.5" fill="#3a2a1c"/>
    <path d="M-10 12 Q0 22 10 12" stroke="#b5603a" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(630 410) scale(0.95)">
    <ellipse cx="0" cy="120" rx="40" ry="10" fill="#000000" opacity="0.1"/>
    <path d="M-26 30 Q0 18 26 30 L22 110 Q0 122 -22 110 Z" fill="#b45c3a"/>
    <path d="M-24 34 Q-44 0 -34 -30" stroke="#d99a6a" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M24 34 Q44 0 34 -30" stroke="#d99a6a" stroke-width="12" fill="none" stroke-linecap="round"/>
    <circle cx="-36" cy="-34" r="9" fill="#d99a6a"/>
    <circle cx="36" cy="-34" r="9" fill="#d99a6a"/>
    <circle cx="0" cy="0" r="26" fill="#e0a877"/>
    <path d="M-26 -6 Q-22 -30 0 -30 Q22 -30 26 -6 Q22 -18 0 -30 Q-22 -18 -26 -6 Z" fill="#5a3a22"/>
    <circle cx="-9" cy="2" r="3.5" fill="#3a2a1c"/>
    <circle cx="9" cy="2" r="3.5" fill="#3a2a1c"/>
    <path d="M-10 12 Q0 22 10 12" stroke="#b5603a" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,
});

/* Cenas da história "Jesus Acalma a Tempestade" (Marcos 4).
   Ilustrações SVG "flat" para app infantil. Indexadas por "tempestade:<scene>". */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  "tempestade:boat-calm": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Barquinho de madeira navegando tranquilo num lago calmo ao entardecer, com Jesus dormindo e os amigos por perto">
  <defs>
    <linearGradient id="bc-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe6b8"/>
      <stop offset="1" stop-color="#ffd08a"/>
    </linearGradient>
    <linearGradient id="bc-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7fd0c8"/>
      <stop offset="1" stop-color="#3a9aa0"/>
    </linearGradient>
    <radialGradient id="bc-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff6d6"/>
      <stop offset="1" stop-color="#ffd257"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bc-sky)"/>
  <circle cx="640" cy="150" r="70" fill="url(#bc-sun)"/>
  <circle cx="640" cy="150" r="90" fill="#fff3c4" opacity="0.35"/>
  <!-- nuvens fofas -->
  <g fill="#fff5e6" opacity="0.9">
    <ellipse cx="180" cy="120" rx="70" ry="34"/>
    <ellipse cx="240" cy="130" rx="55" ry="28"/>
    <ellipse cx="120" cy="135" rx="45" ry="24"/>
    <ellipse cx="470" cy="90" rx="55" ry="26"/>
    <ellipse cx="520" cy="98" rx="42" ry="22"/>
  </g>
  <!-- água -->
  <rect y="360" width="800" height="240" fill="url(#bc-water)"/>
  <ellipse cx="640" cy="380" rx="120" ry="18" fill="#ffe08a" opacity="0.5"/>
  <g stroke="#5fbdb8" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.7">
    <path d="M60 430 q30 -14 60 0 t60 0"/>
    <path d="M520 460 q30 -14 60 0 t60 0"/>
    <path d="M120 520 q34 -14 68 0 t68 0"/>
  </g>
  <!-- peixinhos -->
  <g fill="#ff9d5c">
    <path d="M210 500 q26 -16 52 0 q-26 16 -52 0 z"/>
    <polygon points="210,500 194,490 194,510"/>
    <circle cx="250" cy="500" r="3" fill="#3a3a4a"/>
  </g>
  <g fill="#ffd257">
    <path d="M660 540 q22 -13 44 0 q-22 13 -44 0 z"/>
    <polygon points="660,540 646,532 646,548"/>
    <circle cx="694" cy="540" r="2.6" fill="#3a3a4a"/>
  </g>
  <!-- barco -->
  <g>
    <path d="M300 420 h200 l-34 70 a20 20 0 0 1 -18 11 h-96 a20 20 0 0 1 -18 -11 z" fill="#b5713a"/>
    <path d="M300 420 h200 l-8 17 h-184 z" fill="#8a5327"/>
    <rect x="316" y="440" width="168" height="8" rx="4" fill="#8a5327"/>
    <!-- mastro e vela enrolada -->
    <rect x="396" y="300" width="10" height="128" rx="5" fill="#7a4a24"/>
    <path d="M406 312 q54 40 0 96 z" fill="#fff3dc"/>
    <path d="M406 312 q54 40 0 96" fill="none" stroke="#e8d3ac" stroke-width="4"/>
  </g>
  <!-- Jesus dormindo na popa -->
  <g>
    <ellipse cx="330" cy="452" rx="46" ry="20" fill="#7a4a24"/>
    <path d="M300 452 q40 -24 82 -4 l-6 18 q-38 -16 -70 0 z" fill="#d9e8ff"/>
    <circle cx="316" cy="440" r="20" fill="#f2c79a"/>
    <path d="M300 440 a20 20 0 0 1 32 0 q-6 -18 -16 -18 t-16 18 z" fill="#7a5236"/>
    <path d="M305 448 q11 10 22 0 q-4 8 -11 8 t-11 -8z" fill="#8a5f40"/>
    <circle cx="312" cy="440" r="2.4" fill="#3a3a4a"/>
    <circle cx="320" cy="440" r="2.4" fill="#3a3a4a"/>
  </g>
  <!-- amigo remando -->
  <g>
    <circle cx="440" cy="404" r="19" fill="#e8b183"/>
    <path d="M421 404 a19 19 0 0 1 38 0 q-10 -14 -19 -14 t-19 14z" fill="#4a3b2a"/>
    <circle cx="434" cy="404" r="2.4" fill="#3a3a4a"/>
    <circle cx="446" cy="404" r="2.4" fill="#3a3a4a"/>
    <path d="M436 410 q4 4 8 0" fill="none" stroke="#a86a44" stroke-width="2" stroke-linecap="round"/>
    <path d="M420 422 q20 -12 40 0 l-4 24 h-32 z" fill="#5aa8a0"/>
    <line x1="452" y1="430" x2="500" y2="470" stroke="#7a4a24" stroke-width="7" stroke-linecap="round"/>
  </g>
</svg>`,

  "tempestade:storm": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tempestade forte no lago com ondas enormes, céu escuro, raios e o barquinho balançando com os amigos assustados">
  <defs>
    <linearGradient id="st-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3a4a66"/>
      <stop offset="1" stop-color="#5a6d8c"/>
    </linearGradient>
    <linearGradient id="st-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2f6f74"/>
      <stop offset="1" stop-color="#1c4a54"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#st-sky)"/>
  <!-- nuvens escuras -->
  <g fill="#37435c">
    <ellipse cx="180" cy="110" rx="130" ry="56"/>
    <ellipse cx="330" cy="90" rx="110" ry="48"/>
    <ellipse cx="560" cy="110" rx="140" ry="60"/>
    <ellipse cx="690" cy="90" rx="90" ry="42"/>
  </g>
  <g fill="#2b3550">
    <ellipse cx="250" cy="150" rx="150" ry="46"/>
    <ellipse cx="580" cy="150" rx="160" ry="48"/>
  </g>
  <!-- raios -->
  <g fill="#ffe14d" stroke="#fff2a0" stroke-width="3" stroke-linejoin="round">
    <polygon points="470,150 430,270 470,260 440,380 540,240 494,250 530,150"/>
    <polygon points="180,180 156,260 184,254 166,330 226,240 198,246 220,180"/>
  </g>
  <!-- chuva -->
  <g stroke="#bcd6e6" stroke-width="3" stroke-linecap="round" opacity="0.55">
    <line x1="90" y1="230" x2="76" y2="270"/>
    <line x1="150" y1="270" x2="136" y2="310"/>
    <line x1="640" y1="240" x2="626" y2="280"/>
    <line x1="700" y1="280" x2="686" y2="320"/>
    <line x1="360" y1="300" x2="346" y2="340"/>
  </g>
  <!-- água agitada -->
  <rect y="380" width="800" height="220" fill="url(#st-water)"/>
  <!-- ondas enormes -->
  <path d="M0 420 q80 -80 160 -10 q70 -76 150 -6 q80 -74 160 -4 q78 -80 170 -8 q70 -60 160 -6 v220 h-960 z" fill="#256a70"/>
  <path d="M0 470 q90 -70 180 -6 q90 -72 190 -4 q100 -70 200 -4 q100 -66 200 -2 v180 h-970 z" fill="#1d545c"/>
  <!-- espuma -->
  <g fill="#e8f6f6" opacity="0.85">
    <ellipse cx="160" cy="410" rx="26" ry="12"/>
    <ellipse cx="470" cy="412" rx="30" ry="13"/>
    <ellipse cx="640" cy="416" rx="24" ry="11"/>
  </g>
  <!-- barco inclinado balançando -->
  <g transform="rotate(-11 400 470)">
    <path d="M300 450 h200 l-34 70 a20 20 0 0 1 -18 11 h-96 a20 20 0 0 1 -18 -11 z" fill="#a5652f"/>
    <path d="M300 450 h200 l-8 17 h-184 z" fill="#7a4a22"/>
    <rect x="396" y="330" width="10" height="128" rx="5" fill="#6e4220"/>
    <path d="M406 342 q54 40 0 96 z" fill="#f0e0c0"/>
    <!-- amigos assustados -->
    <g>
      <circle cx="352" cy="432" r="18" fill="#e8b183"/>
      <path d="M334 432 a18 18 0 0 1 36 0 q-9 -14 -18 -14 t-18 14z" fill="#4a3b2a"/>
      <circle cx="346" cy="431" r="3" fill="#3a3a4a"/>
      <circle cx="358" cy="431" r="3" fill="#3a3a4a"/>
      <ellipse cx="352" cy="440" rx="4" ry="5" fill="#7a3b2a"/>
      <path d="M338 450 q14 -8 28 0 l-3 20 h-22 z" fill="#c85a4a"/>
      <path d="M334 442 l-16 -14" stroke="#e8b183" stroke-width="7" stroke-linecap="round"/>
    </g>
    <g>
      <circle cx="446" cy="430" r="18" fill="#f2c79a"/>
      <path d="M428 430 a18 18 0 0 1 36 0 q-9 -16 -18 -16 t-18 16z" fill="#6e4a2c"/>
      <circle cx="440" cy="429" r="3" fill="#3a3a4a"/>
      <circle cx="452" cy="429" r="3" fill="#3a3a4a"/>
      <ellipse cx="446" cy="439" rx="4" ry="5" fill="#7a3b2a"/>
      <path d="M432 448 q14 -8 28 0 l-3 20 h-22 z" fill="#5aa8a0"/>
      <path d="M464 440 l16 -16" stroke="#f2c79a" stroke-width="7" stroke-linecap="round"/>
    </g>
  </g>
</svg>`,

  "tempestade:wake-jesus": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Os amigos acordam Jesus dentro do barco durante a tempestade, e Jesus se levanta calmo e sem medo">
  <defs>
    <linearGradient id="wj-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#43506e"/>
      <stop offset="1" stop-color="#6a7c98"/>
    </linearGradient>
    <linearGradient id="wj-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#317278"/>
      <stop offset="1" stop-color="#1f4d56"/>
    </linearGradient>
    <radialGradient id="wj-glow" cx="0.5" cy="0.4" r="0.5">
      <stop offset="0" stop-color="#fff3c4" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff3c4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#wj-sky)"/>
  <!-- nuvens escuras -->
  <g fill="#3a465f">
    <ellipse cx="200" cy="110" rx="130" ry="52"/>
    <ellipse cx="600" cy="110" rx="150" ry="56"/>
    <ellipse cx="400" cy="80" rx="120" ry="46"/>
  </g>
  <!-- raio distante -->
  <polygon points="150,150 128,220 152,214 134,290 190,206 164,212 186,150" fill="#ffe14d" opacity="0.85"/>
  <!-- chuva -->
  <g stroke="#c6dce8" stroke-width="3" stroke-linecap="round" opacity="0.5">
    <line x1="640" y1="200" x2="626" y2="240"/>
    <line x1="700" y1="240" x2="686" y2="280"/>
    <line x1="120" y1="300" x2="106" y2="340"/>
  </g>
  <!-- água -->
  <rect y="380" width="800" height="220" fill="url(#wj-water)"/>
  <path d="M0 430 q90 -60 190 -6 q100 -62 200 -4 q100 -60 200 -2 q90 -54 210 -4 v210 h-970z" fill="#256a70"/>
  <g fill="#e8f6f6" opacity="0.8">
    <ellipse cx="150" cy="424" rx="24" ry="11"/>
    <ellipse cx="620" cy="426" rx="26" ry="12"/>
  </g>
  <!-- brilho suave ao redor de Jesus -->
  <ellipse cx="400" cy="330" rx="180" ry="200" fill="url(#wj-glow)"/>
  <!-- barco -->
  <g transform="rotate(-5 400 470)">
    <path d="M270 452 h260 l-40 72 a22 22 0 0 1 -19 12 h-142 a22 22 0 0 1 -19 -12 z" fill="#a5652f"/>
    <path d="M270 452 h260 l-9 18 h-242 z" fill="#7a4a22"/>
    <rect x="290" y="470" width="220" height="8" rx="4" fill="#7a4a22"/>
    <!-- Jesus em pé, calmo, no centro -->
    <g>
      <path d="M370 470 q30 -16 60 0 l6 22 h-72 z" fill="#c74a3a"/>
      <path d="M366 396 q34 -22 68 0 l4 82 q-36 -18 -76 0 z" fill="#eaeef6"/>
      <path d="M366 396 q34 -22 68 0 l3 40 q-36 -14 -74 0 z" fill="#7bb6dd"/>
      <path d="M366 404 l-22 60 q10 6 18 2 l16 -48 z" fill="#dfe6f2"/>
      <path d="M434 404 l22 60 q-10 6 -18 2 l-16 -48 z" fill="#dfe6f2"/>
      <circle cx="400" cy="372" r="24" fill="#f2c79a"/>
      <path d="M376 372 a24 24 0 0 1 48 0 q-8 -22 -24 -22 t-24 22z" fill="#6e4a2c"/>
      <path d="M400 350 q-30 4 -30 34 q0 10 6 20 l6 -8 q-6 -18 4 -34 q10 -14 14 -12z" fill="#6e4a2c"/>
      <path d="M400 350 q30 4 30 34 q0 10 -6 20 l-6 -8 q6 -18 -4 -34 q-10 -14 -14 -12z" fill="#6e4a2c"/>
      <circle cx="392" cy="372" r="2.6" fill="#3a3a4a"/>
      <circle cx="408" cy="372" r="2.6" fill="#3a3a4a"/>
      <path d="M392 380 q8 6 16 0" fill="none" stroke="#a86a44" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M390 384 q10 12 20 0 q-4 10 -10 10 t-10 -10z" fill="#c79070"/>
    </g>
    <!-- amigo pedindo socorro à esquerda -->
    <g>
      <circle cx="322" cy="446" r="17" fill="#e8b183"/>
      <path d="M305 446 a17 17 0 0 1 34 0 q-8 -14 -17 -14 t-17 14z" fill="#4a3b2a"/>
      <circle cx="316" cy="445" r="2.8" fill="#3a3a4a"/>
      <circle cx="328" cy="445" r="2.8" fill="#3a3a4a"/>
      <ellipse cx="322" cy="454" rx="4" ry="5" fill="#7a3b2a"/>
      <path d="M309 464 q13 -8 26 0 l-3 18 h-20z" fill="#5aa8a0"/>
      <path d="M308 458 l-16 -20" stroke="#e8b183" stroke-width="6.5" stroke-linecap="round"/>
    </g>
  </g>
</svg>`,

  "tempestade:calm-storm": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jesus em pé no barco com a mão erguida acalma o vento e o mar, que ficam lisos e brilhantes ao sol">
  <defs>
    <linearGradient id="cs-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe6ff"/>
      <stop offset="1" stop-color="#ffe6b8"/>
    </linearGradient>
    <linearGradient id="cs-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8fdcd4"/>
      <stop offset="1" stop-color="#3fa0a6"/>
    </linearGradient>
    <radialGradient id="cs-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fffbe6"/>
      <stop offset="1" stop-color="#ffd257"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cs-sky)"/>
  <!-- sol saindo -->
  <circle cx="400" cy="140" r="76" fill="url(#cs-sun)"/>
  <g stroke="#ffdd7a" stroke-width="8" stroke-linecap="round" opacity="0.8">
    <line x1="400" y1="30" x2="400" y2="8"/>
    <line x1="290" y1="80" x2="276" y2="66"/>
    <line x1="510" y1="80" x2="524" y2="66"/>
    <line x1="250" y1="150" x2="228" y2="150"/>
    <line x1="550" y1="150" x2="572" y2="150"/>
  </g>
  <!-- metade das nuvens indo embora -->
  <g fill="#eef2f4" opacity="0.8">
    <ellipse cx="120" cy="110" rx="70" ry="30"/>
    <ellipse cx="185" cy="120" rx="52" ry="24"/>
    <ellipse cx="690" cy="115" rx="66" ry="28"/>
  </g>
  <g fill="#c9cfd6" opacity="0.55">
    <ellipse cx="150" cy="150" rx="80" ry="22"/>
    <ellipse cx="660" cy="160" rx="80" ry="22"/>
  </g>
  <!-- água lisa -->
  <rect y="380" width="800" height="220" fill="url(#cs-water)"/>
  <ellipse cx="400" cy="400" rx="150" ry="16" fill="#fff2c4" opacity="0.5"/>
  <g stroke="#bff0ea" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7">
    <line x1="80" y1="470" x2="200" y2="470"/>
    <line x1="560" y1="500" x2="700" y2="500"/>
    <line x1="140" y1="540" x2="300" y2="540"/>
  </g>
  <!-- peixinho pulando feliz -->
  <g fill="#ff9d5c">
    <path d="M600 440 q26 -16 52 0 q-26 16 -52 0 z"/>
    <polygon points="600,440 584,430 584,450"/>
    <circle cx="640" cy="440" r="3" fill="#3a3a4a"/>
  </g>
  <!-- barco -->
  <g>
    <path d="M280 452 h240 l-38 72 a22 22 0 0 1 -19 12 h-126 a22 22 0 0 1 -19 -12 z" fill="#b5713a"/>
    <path d="M280 452 h240 l-8 18 h-224 z" fill="#8a5327"/>
    <rect x="298" y="470" width="204" height="8" rx="4" fill="#8a5327"/>
    <rect x="396" y="332" width="10" height="128" rx="5" fill="#7a4a24"/>
    <path d="M406 344 q54 40 0 96 z" fill="#fff3dc"/>
    <!-- Jesus com a mão erguida -->
    <g>
      <path d="M368 470 q32 -16 64 0 l6 22 h-76 z" fill="#c74a3a"/>
      <path d="M368 396 q32 -22 64 0 l4 82 q-34 -18 -72 0 z" fill="#eaeef6"/>
      <path d="M368 396 q32 -22 64 0 l3 40 q-34 -14 -70 0 z" fill="#7bb6dd"/>
      <path d="M368 404 l-20 56 q10 6 18 2 l14 -46 z" fill="#dfe6f2"/>
      <!-- braço erguido -->
      <path d="M432 406 q34 -30 44 -66" fill="none" stroke="#eaeef6" stroke-width="18" stroke-linecap="round"/>
      <circle cx="480" cy="332" r="11" fill="#f2c79a"/>
      <circle cx="400" cy="372" r="24" fill="#f2c79a"/>
      <path d="M376 372 a24 24 0 0 1 48 0 q-8 -22 -24 -22 t-24 22z" fill="#6e4a2c"/>
      <path d="M400 350 q-30 4 -30 34 q0 10 6 20 l6 -8 q-6 -18 4 -34 q10 -14 14 -12z" fill="#6e4a2c"/>
      <path d="M400 350 q30 4 30 34 q0 10 -6 20 l-6 -8 q6 -18 -4 -34 q-10 -14 -14 -12z" fill="#6e4a2c"/>
      <circle cx="392" cy="372" r="2.6" fill="#3a3a4a"/>
      <circle cx="408" cy="372" r="2.6" fill="#3a3a4a"/>
      <path d="M392 380 q8 6 16 0" fill="none" stroke="#a86a44" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M390 384 q10 12 20 0 q-4 10 -10 10 t-10 -10z" fill="#c79070"/>
    </g>
    <!-- amigo aliviado sentado -->
    <g>
      <circle cx="330" cy="452" r="16" fill="#e8b183"/>
      <path d="M314 452 a16 16 0 0 1 32 0 q-8 -13 -16 -13 t-16 13z" fill="#4a3b2a"/>
      <circle cx="324" cy="451" r="2.6" fill="#3a3a4a"/>
      <circle cx="336" cy="451" r="2.6" fill="#3a3a4a"/>
      <path d="M323 458 q7 6 14 0" fill="none" stroke="#a86a44" stroke-width="2" stroke-linecap="round"/>
      <path d="M317 466 q13 -7 26 0 l-3 16 h-20z" fill="#5aa8a0"/>
    </g>
  </g>
</svg>`,

  "tempestade:peace": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mar totalmente calmo e ensolarado, com o barquinho tranquilo, Jesus e os amigos felizes e admirados, pássaros e peixinhos ao redor">
  <defs>
    <linearGradient id="pc-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cdeeff"/>
      <stop offset="1" stop-color="#fff1cf"/>
    </linearGradient>
    <linearGradient id="pc-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9fe4dc"/>
      <stop offset="1" stop-color="#45a6ac"/>
    </linearGradient>
    <radialGradient id="pc-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fffbe6"/>
      <stop offset="1" stop-color="#ffce4a"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#pc-sky)"/>
  <circle cx="650" cy="130" r="72" fill="url(#pc-sun)"/>
  <circle cx="650" cy="130" r="92" fill="#fff3c4" opacity="0.35"/>
  <g stroke="#ffdd7a" stroke-width="7" stroke-linecap="round" opacity="0.75">
    <line x1="650" y1="30" x2="650" y2="14"/>
    <line x1="560" y1="70" x2="548" y2="58"/>
    <line x1="740" y1="70" x2="752" y2="58"/>
    <line x1="530" y1="130" x2="512" y2="130"/>
  </g>
  <!-- nuvens fofas e leves -->
  <g fill="#ffffff" opacity="0.92">
    <ellipse cx="170" cy="110" rx="72" ry="32"/>
    <ellipse cx="230" cy="120" rx="52" ry="26"/>
    <ellipse cx="110" cy="122" rx="44" ry="22"/>
    <ellipse cx="420" cy="90" rx="54" ry="24"/>
  </g>
  <!-- passarinhos -->
  <g stroke="#5a6d8c" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M300 150 q14 -14 28 0"/>
    <path d="M328 150 q14 -14 28 0"/>
    <path d="M470 180 q11 -11 22 0"/>
    <path d="M492 180 q11 -11 22 0"/>
  </g>
  <!-- água espelhada -->
  <rect y="380" width="800" height="220" fill="url(#pc-water)"/>
  <ellipse cx="650" cy="398" rx="120" ry="14" fill="#fff2c4" opacity="0.5"/>
  <g stroke="#c6f2ec" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7">
    <line x1="90" y1="470" x2="230" y2="470"/>
    <line x1="520" y1="500" x2="670" y2="500"/>
    <line x1="150" y1="545" x2="320" y2="545"/>
  </g>
  <!-- peixinhos felizes -->
  <g fill="#ff9d5c">
    <path d="M180 500 q26 -16 52 0 q-26 16 -52 0 z"/>
    <polygon points="180,500 164,490 164,510"/>
    <circle cx="220" cy="500" r="3" fill="#3a3a4a"/>
  </g>
  <g fill="#ffd257">
    <path d="M560 540 q24 -14 48 0 q-24 14 -48 0 z"/>
    <polygon points="560,540 546,531 546,549"/>
    <circle cx="596" cy="540" r="2.8" fill="#3a3a4a"/>
  </g>
  <!-- barco -->
  <g>
    <path d="M280 452 h240 l-38 72 a22 22 0 0 1 -19 12 h-126 a22 22 0 0 1 -19 -12 z" fill="#b5713a"/>
    <path d="M280 452 h240 l-8 18 h-224 z" fill="#8a5327"/>
    <rect x="298" y="470" width="204" height="8" rx="4" fill="#8a5327"/>
    <rect x="396" y="332" width="10" height="128" rx="5" fill="#7a4a24"/>
    <path d="M406 344 q54 40 0 96 z" fill="#fff3dc"/>
    <!-- Jesus sereno no centro -->
    <g>
      <path d="M370 470 q30 -16 60 0 l6 22 h-72 z" fill="#c74a3a"/>
      <path d="M366 400 q34 -20 68 0 l4 78 q-36 -16 -76 0 z" fill="#eaeef6"/>
      <path d="M366 400 q34 -20 68 0 l3 38 q-36 -12 -74 0 z" fill="#7bb6dd"/>
      <circle cx="400" cy="378" r="24" fill="#f2c79a"/>
      <path d="M376 378 a24 24 0 0 1 48 0 q-8 -22 -24 -22 t-24 22z" fill="#6e4a2c"/>
      <path d="M400 356 q-30 4 -30 34 q0 10 6 20 l6 -8 q-6 -18 4 -34 q10 -14 14 -12z" fill="#6e4a2c"/>
      <path d="M400 356 q30 4 30 34 q0 10 -6 20 l-6 -8 q6 -18 -4 -34 q-10 -14 -14 -12z" fill="#6e4a2c"/>
      <circle cx="392" cy="378" r="2.6" fill="#3a3a4a"/>
      <circle cx="408" cy="378" r="2.6" fill="#3a3a4a"/>
      <path d="M390 386 q10 8 20 0" fill="none" stroke="#a86a44" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="384" cy="386" r="4" fill="#f2a97a" opacity="0.6"/>
      <circle cx="416" cy="386" r="4" fill="#f2a97a" opacity="0.6"/>
    </g>
    <!-- amigo feliz esquerda -->
    <g>
      <circle cx="330" cy="452" r="16" fill="#e8b183"/>
      <path d="M314 452 a16 16 0 0 1 32 0 q-8 -13 -16 -13 t-16 13z" fill="#4a3b2a"/>
      <circle cx="324" cy="451" r="2.6" fill="#3a3a4a"/>
      <circle cx="336" cy="451" r="2.6" fill="#3a3a4a"/>
      <path d="M323 458 q7 7 14 0" fill="none" stroke="#a86a44" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M317 466 q13 -7 26 0 l-3 16 h-20z" fill="#5aa8a0"/>
    </g>
    <!-- amigo feliz direita -->
    <g>
      <circle cx="470" cy="452" r="16" fill="#f2c79a"/>
      <path d="M454 452 a16 16 0 0 1 32 0 q-8 -14 -16 -14 t-16 14z" fill="#6e4a2c"/>
      <circle cx="464" cy="451" r="2.6" fill="#3a3a4a"/>
      <circle cx="476" cy="451" r="2.6" fill="#3a3a4a"/>
      <path d="M463 458 q7 7 14 0" fill="none" stroke="#a86a44" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M457 466 q13 -7 26 0 l-3 16 h-20z" fill="#e0a24a"/>
    </g>
  </g>
</svg>`
});

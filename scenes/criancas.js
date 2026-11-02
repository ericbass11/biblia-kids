/* Ilustrações da história "Jesus e as Crianças" (Mateus 19).
   Cada cena é um SVG vetorial flat, estilo livro infantil moderno.
   Indexado por "criancas:<scene>". */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  "criancas:children-run": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Muitas crianças felizes correndo por um campo ensolarado em direção a Jesus">
  <defs>
    <linearGradient id="cr-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe6ff"/>
      <stop offset="1" stop-color="#e9f7ff"/>
    </linearGradient>
    <linearGradient id="cr-hill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9ad86b"/>
      <stop offset="1" stop-color="#6fbf49"/>
    </linearGradient>
    <radialGradient id="cr-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff2b0"/>
      <stop offset="1" stop-color="#ffd85e"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-sky)"/>
  <!-- sol -->
  <circle cx="120" cy="110" r="62" fill="url(#cr-sun)"/>
  <g stroke="#ffdf6b" stroke-width="8" stroke-linecap="round">
    <line x1="120" y1="18" x2="120" y2="0"/>
    <line x1="30" y1="110" x2="10" y2="110"/>
    <line x1="52" y1="42" x2="38" y2="28"/>
    <line x1="188" y1="42" x2="202" y2="28"/>
    <line x1="52" y1="178" x2="38" y2="192"/>
  </g>
  <!-- nuvens -->
  <g fill="#ffffff">
    <ellipse cx="560" cy="90" rx="70" ry="30"/>
    <ellipse cx="610" cy="80" rx="50" ry="26"/>
    <ellipse cx="500" cy="100" rx="45" ry="22"/>
    <ellipse cx="330" cy="150" rx="48" ry="22"/>
    <ellipse cx="370" cy="140" rx="34" ry="18"/>
  </g>
  <!-- pássaros -->
  <g stroke="#5a6b7a" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M430 70 q12 -12 24 0 q12 -12 24 0"/>
    <path d="M690 150 q10 -10 20 0 q10 -10 20 0"/>
  </g>
  <!-- colinas -->
  <path d="M0 430 Q200 360 420 420 Q640 480 800 400 L800 600 L0 600 Z" fill="url(#cr-hill)"/>
  <path d="M0 480 Q250 430 500 470 Q680 500 800 460 L800 600 L0 600 Z" fill="#5cad3c"/>
  <!-- árvore grande -->
  <g transform="translate(680 300)">
    <rect x="-14" y="30" width="28" height="150" rx="12" fill="#8a5a34"/>
    <circle cx="0" cy="0" r="72" fill="#57a83e"/>
    <circle cx="-50" cy="30" r="46" fill="#4f9c37"/>
    <circle cx="48" cy="26" r="48" fill="#63b649"/>
    <circle cx="0" cy="-40" r="40" fill="#6cbe4f"/>
    <circle cx="-20" cy="-6" r="9" fill="#ff5a7a"/>
    <circle cx="24" cy="-24" r="9" fill="#ffb43b"/>
    <circle cx="34" cy="18" r="9" fill="#ff5a7a"/>
  </g>
  <!-- Jesus, aguardando de braços abertos -->
  <g transform="translate(150 350)">
    <ellipse cx="0" cy="182" rx="76" ry="18" fill="#000" opacity="0.08"/>
    <path d="M-58 30 Q-58 -30 0 -30 Q58 -30 58 30 L52 182 L-52 182 Z" fill="#ffffff"/>
    <path d="M-58 30 Q-58 -30 0 -30 L0 182 L-52 182 Z" fill="#eef1f6"/>
    <path d="M-58 -6 Q-30 40 0 40 Q30 40 58 -6 L60 24 Q30 66 0 66 Q-30 66 -60 24 Z" fill="#7fb2e8"/>
    <path d="M-52 20 L-92 96" stroke="#f2c39a" stroke-width="22" stroke-linecap="round"/>
    <path d="M52 20 L92 96" stroke="#f2c39a" stroke-width="22" stroke-linecap="round"/>
    <circle cx="-98" cy="100" r="13" fill="#f2c39a"/>
    <circle cx="98" cy="100" r="13" fill="#f2c39a"/>
    <circle cx="0" cy="-64" r="34" fill="#f7cfa4"/>
    <path d="M-34 -70 Q-30 -110 0 -110 Q30 -110 34 -70 Q34 -92 0 -96 Q-34 -92 -34 -70" fill="#5a3f27"/>
    <path d="M-34 -60 Q-38 -20 -20 -6 L-14 -60 Z" fill="#5a3f27"/>
    <path d="M34 -60 Q38 -20 20 -6 L14 -60 Z" fill="#5a3f27"/>
    <circle cx="-11" cy="-64" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-64" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -50 Q0 -42 9 -50" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- crianças correndo -->
  <g transform="translate(420 400)">
    <ellipse cx="0" cy="118" rx="40" ry="12" fill="#000" opacity="0.08"/>
    <path d="M-26 24 Q-26 -20 0 -20 Q26 -20 26 24 L20 112 L-20 112 Z" fill="#ff7a8a"/>
    <path d="M-24 6 L-52 44" stroke="#e79a6a" stroke-width="13" stroke-linecap="round"/>
    <path d="M24 6 L54 -12" stroke="#e79a6a" stroke-width="13" stroke-linecap="round"/>
    <path d="M-14 108 L-30 150" stroke="#c9607a" stroke-width="13" stroke-linecap="round"/>
    <path d="M14 108 L30 150" stroke="#c9607a" stroke-width="13" stroke-linecap="round"/>
    <circle cx="0" cy="-44" r="26" fill="#e8a06a"/>
    <path d="M-26 -50 Q-22 -80 0 -80 Q22 -80 26 -50 Q26 -68 0 -72 Q-26 -68 -26 -50" fill="#2b1c10"/>
    <circle cx="-9" cy="-44" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-44" r="3" fill="#3a2b1a"/>
    <path d="M-8 -34 Q0 -27 8 -34" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(520 420)">
    <ellipse cx="0" cy="108" rx="38" ry="11" fill="#000" opacity="0.08"/>
    <path d="M-24 20 Q-24 -18 0 -18 Q24 -18 24 20 L18 100 L-18 100 Z" fill="#5fc9c0"/>
    <path d="M-22 4 L-50 -14" stroke="#f2c9a0" stroke-width="12" stroke-linecap="round"/>
    <path d="M22 4 L48 40" stroke="#f2c9a0" stroke-width="12" stroke-linecap="round"/>
    <path d="M-12 96 L-26 136" stroke="#3f9c94" stroke-width="12" stroke-linecap="round"/>
    <path d="M12 96 L26 136" stroke="#3f9c94" stroke-width="12" stroke-linecap="round"/>
    <circle cx="0" cy="-40" r="24" fill="#f7cfa4"/>
    <path d="M-24 -44 Q-20 -74 0 -74 Q20 -74 24 -44 L24 -30 Q22 -56 0 -58 Q-22 -56 -24 -30 Z" fill="#c98a3a"/>
    <circle cx="-8" cy="-40" r="2.8" fill="#3a2b1a"/>
    <circle cx="8" cy="-40" r="2.8" fill="#3a2b1a"/>
    <path d="M-7 -31 Q0 -25 7 -31" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(610 440)">
    <ellipse cx="0" cy="98" rx="34" ry="10" fill="#000" opacity="0.08"/>
    <path d="M-22 18 Q-22 -16 0 -16 Q22 -16 22 18 L16 92 L-16 92 Z" fill="#ffb43b"/>
    <path d="M-20 2 L-46 30" stroke="#8a5a3a" stroke-width="11" stroke-linecap="round"/>
    <path d="M20 2 L46 -12" stroke="#8a5a3a" stroke-width="11" stroke-linecap="round"/>
    <path d="M-10 88 L-24 124" stroke="#d98f1f" stroke-width="11" stroke-linecap="round"/>
    <path d="M10 88 L24 124" stroke="#d98f1f" stroke-width="11" stroke-linecap="round"/>
    <circle cx="0" cy="-36" r="22" fill="#8a5a3a"/>
    <path d="M-22 -40 Q-18 -66 0 -66 Q18 -66 22 -40 Q22 -56 0 -60 Q-22 -56 -22 -40" fill="#1c120a"/>
    <circle cx="-7" cy="-36" r="2.6" fill="#fff"/><circle cx="-7" cy="-36" r="1.6" fill="#241a10"/>
    <circle cx="7" cy="-36" r="2.6" fill="#fff"/><circle cx="7" cy="-36" r="1.6" fill="#241a10"/>
    <path d="M-6 -27 Q0 -22 6 -27" stroke="#241a10" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>
  <!-- flores e borboletas -->
  <g>
    <g transform="translate(90 540)"><circle cx="0" cy="0" r="9" fill="#ff5a7a"/><circle cx="0" cy="0" r="4" fill="#ffe27a"/><rect x="-2" y="9" width="4" height="30" fill="#4f9c37"/></g>
    <g transform="translate(300 560)"><circle cx="0" cy="0" r="9" fill="#a06bff"/><circle cx="0" cy="0" r="4" fill="#ffe27a"/><rect x="-2" y="9" width="4" height="30" fill="#4f9c37"/></g>
    <g transform="translate(250 540)"><circle cx="0" cy="0" r="8" fill="#ff9f3b"/><circle cx="0" cy="0" r="3.5" fill="#fff"/><rect x="-2" y="8" width="4" height="28" fill="#4f9c37"/></g>
  </g>
  <g transform="translate(360 260)">
    <path d="M0 0 q-22 -18 -6 -30 q14 -8 6 24" fill="#ff7ab0"/>
    <path d="M0 0 q22 -18 6 -30 q-14 -8 -6 24" fill="#ff9ec9"/>
    <circle cx="0" cy="-2" r="3" fill="#5a3f27"/>
  </g>
</svg>`,

  "criancas:disciples-stop": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Os discípulos tentam impedir as crianças de se aproximarem de Jesus">
  <defs>
    <linearGradient id="ds-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cfe8ff"/>
      <stop offset="1" stop-color="#eef8ff"/>
    </linearGradient>
    <linearGradient id="ds-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#95d466"/>
      <stop offset="1" stop-color="#6cbc46"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#ds-sky)"/>
  <circle cx="700" cy="100" r="54" fill="#ffd85e"/>
  <g fill="#ffffff">
    <ellipse cx="200" cy="100" rx="66" ry="28"/>
    <ellipse cx="250" cy="92" rx="46" ry="22"/>
    <ellipse cx="520" cy="130" rx="50" ry="22"/>
  </g>
  <g stroke="#5a6b7a" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M120 160 q10 -10 20 0 q10 -10 20 0"/>
    <path d="M600 80 q10 -10 20 0 q10 -10 20 0"/>
  </g>
  <path d="M0 440 Q400 380 800 440 L800 600 L0 600 Z" fill="url(#ds-ground)"/>
  <path d="M0 490 Q400 450 800 490 L800 600 L0 600 Z" fill="#58ac39"/>
  <!-- árvore -->
  <g transform="translate(90 320)">
    <rect x="-12" y="20" width="24" height="140" rx="10" fill="#8a5a34"/>
    <circle cx="0" cy="0" r="60" fill="#57a83e"/>
    <circle cx="-40" cy="24" r="38" fill="#4f9c37"/>
    <circle cx="40" cy="20" r="40" fill="#63b649"/>
    <circle cx="10" cy="-30" r="10" fill="#ffb43b"/>
  </g>
  <!-- Jesus à direita, sentado calmo -->
  <g transform="translate(600 340)">
    <ellipse cx="0" cy="196" rx="80" ry="18" fill="#000" opacity="0.08"/>
    <path d="M-60 40 Q-60 -26 0 -26 Q60 -26 60 40 L54 196 L-54 196 Z" fill="#ffffff"/>
    <path d="M-60 40 Q-60 -26 0 -26 L0 196 L-54 196 Z" fill="#eef1f6"/>
    <path d="M-60 0 Q-30 46 0 46 Q30 46 60 0 L62 30 Q30 72 0 72 Q-30 72 -62 30 Z" fill="#7fb2e8"/>
    <path d="M-52 26 L-30 120" stroke="#f2c39a" stroke-width="22" stroke-linecap="round"/>
    <circle cx="-26" cy="124" r="13" fill="#f2c39a"/>
    <circle cx="0" cy="-60" r="34" fill="#f7cfa4"/>
    <path d="M-34 -66 Q-30 -106 0 -106 Q30 -106 34 -66 Q34 -88 0 -92 Q-34 -88 -34 -66" fill="#5a3f27"/>
    <path d="M-34 -56 Q-38 -16 -20 -2 L-14 -56 Z" fill="#5a3f27"/>
    <path d="M34 -56 Q38 -16 20 -2 L14 -56 Z" fill="#5a3f27"/>
    <circle cx="-11" cy="-60" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-60" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -46 Q0 -38 9 -46" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- discípulo com mão levantada (parar) -->
  <g transform="translate(400 350)">
    <ellipse cx="0" cy="188" rx="66" ry="16" fill="#000" opacity="0.08"/>
    <path d="M-48 34 Q-48 -22 0 -22 Q48 -22 48 34 L44 188 L-44 188 Z" fill="#c46a3a"/>
    <path d="M-48 34 Q-48 -22 0 -22 L0 188 L-44 188 Z" fill="#b25e30"/>
    <path d="M-44 10 L-70 -70" stroke="#f2c39a" stroke-width="19" stroke-linecap="round"/>
    <circle cx="-74" cy="-80" r="14" fill="#f2c39a"/>
    <g stroke="#f2c39a" stroke-width="6" stroke-linecap="round">
      <line x1="-80" y1="-92" x2="-82" y2="-104"/>
      <line x1="-74" y1="-93" x2="-74" y2="-106"/>
      <line x1="-68" y1="-92" x2="-66" y2="-104"/>
    </g>
    <path d="M44 20 L66 88" stroke="#f2c39a" stroke-width="18" stroke-linecap="round"/>
    <circle cx="68" cy="92" r="12" fill="#f2c39a"/>
    <circle cx="0" cy="-56" r="32" fill="#eabb86"/>
    <path d="M-32 -60 Q-28 -98 0 -98 Q28 -98 32 -60 Q32 -82 0 -86 Q-32 -82 -32 -60" fill="#4a3320"/>
    <path d="M-24 -30 Q0 -14 24 -30 Q24 -6 0 -6 Q-24 -6 -24 -30" fill="#4a3320"/>
    <circle cx="-10" cy="-56" r="3.2" fill="#3a2b1a"/>
    <circle cx="10" cy="-56" r="3.2" fill="#3a2b1a"/>
    <path d="M-9 -40 Q0 -46 9 -40" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- crianças à esquerda, um pouco tristes/curiosas -->
  <g transform="translate(220 420)">
    <ellipse cx="0" cy="108" rx="38" ry="11" fill="#000" opacity="0.08"/>
    <path d="M-24 20 Q-24 -18 0 -18 Q24 -18 24 20 L18 100 L-18 100 Z" fill="#ff7a8a"/>
    <path d="M22 6 L46 30" stroke="#e79a6a" stroke-width="12" stroke-linecap="round"/>
    <path d="M-22 6 L-42 26" stroke="#e79a6a" stroke-width="12" stroke-linecap="round"/>
    <path d="M-12 96 L-24 134" stroke="#c9607a" stroke-width="12" stroke-linecap="round"/>
    <path d="M12 96 L24 134" stroke="#c9607a" stroke-width="12" stroke-linecap="round"/>
    <circle cx="0" cy="-40" r="24" fill="#e8a06a"/>
    <path d="M-24 -44 Q-20 -74 0 -74 Q20 -74 24 -44 Q24 -62 0 -66 Q-24 -62 -24 -44" fill="#2b1c10"/>
    <circle cx="-8" cy="-40" r="2.8" fill="#3a2b1a"/>
    <circle cx="8" cy="-40" r="2.8" fill="#3a2b1a"/>
    <path d="M-7 -28 Q0 -32 7 -28" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(300 440)">
    <ellipse cx="0" cy="98" rx="34" ry="10" fill="#000" opacity="0.08"/>
    <path d="M-22 18 Q-22 -16 0 -16 Q22 -16 22 18 L16 92 L-16 92 Z" fill="#5fc9c0"/>
    <path d="M-20 4 L-42 26" stroke="#f2c9a0" stroke-width="11" stroke-linecap="round"/>
    <path d="M20 4 L42 24" stroke="#f2c9a0" stroke-width="11" stroke-linecap="round"/>
    <path d="M-10 88 L-22 124" stroke="#3f9c94" stroke-width="11" stroke-linecap="round"/>
    <path d="M10 88 L22 124" stroke="#3f9c94" stroke-width="11" stroke-linecap="round"/>
    <circle cx="0" cy="-36" r="22" fill="#f7cfa4"/>
    <path d="M-22 -40 Q-18 -66 0 -66 Q18 -66 22 -40 L22 -28 Q20 -54 0 -56 Q-20 -54 -22 -28 Z" fill="#c98a3a"/>
    <circle cx="-7" cy="-36" r="2.6" fill="#3a2b1a"/>
    <circle cx="7" cy="-36" r="2.6" fill="#3a2b1a"/>
    <path d="M-6 -25 Q0 -28 6 -25" stroke="#3a2b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>
  <!-- flores -->
  <g>
    <g transform="translate(140 540)"><circle cx="0" cy="0" r="9" fill="#ff5a7a"/><circle cx="0" cy="0" r="4" fill="#ffe27a"/><rect x="-2" y="9" width="4" height="28" fill="#4f9c37"/></g>
    <g transform="translate(520 560)"><circle cx="0" cy="0" r="9" fill="#a06bff"/><circle cx="0" cy="0" r="4" fill="#ffe27a"/><rect x="-2" y="9" width="4" height="28" fill="#4f9c37"/></g>
  </g>
</svg>`,

  "criancas:let-children": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jesus sorri e estende os braços convidando as crianças a virem até ele">
  <defs>
    <linearGradient id="lc-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9c4"/>
      <stop offset="1" stop-color="#fff6e6"/>
    </linearGradient>
    <radialGradient id="lc-glow" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="#fff7dc" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff7dc" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lc-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#97d668"/>
      <stop offset="1" stop-color="#6bbb45"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#lc-sky)"/>
  <ellipse cx="400" cy="250" rx="380" ry="280" fill="url(#lc-glow)"/>
  <circle cx="400" cy="120" r="60" fill="#ffe07a" opacity="0.9"/>
  <g fill="#ffffff">
    <ellipse cx="150" cy="110" rx="60" ry="26"/>
    <ellipse cx="650" cy="120" rx="60" ry="26"/>
    <ellipse cx="690" cy="108" rx="42" ry="20"/>
  </g>
  <g stroke="#8a6b3a" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6">
    <path d="M230 90 q10 -10 20 0 q10 -10 20 0"/>
    <path d="M560 80 q10 -10 20 0 q10 -10 20 0"/>
  </g>
  <path d="M0 450 Q400 390 800 450 L800 600 L0 600 Z" fill="url(#lc-ground)"/>
  <path d="M0 500 Q400 460 800 500 L800 600 L0 600 Z" fill="#57ab38"/>
  <g transform="translate(710 300)">
    <rect x="-12" y="20" width="24" height="150" rx="10" fill="#8a5a34"/>
    <circle cx="0" cy="0" r="62" fill="#57a83e"/>
    <circle cx="-42" cy="24" r="40" fill="#4f9c37"/>
    <circle cx="42" cy="22" r="40" fill="#63b649"/>
  </g>
  <!-- Jesus central, braços abertos, sorrindo -->
  <g transform="translate(400 320)">
    <ellipse cx="0" cy="210" rx="90" ry="20" fill="#000" opacity="0.08"/>
    <path d="M-64 44 Q-64 -28 0 -28 Q64 -28 64 44 L58 210 L-58 210 Z" fill="#ffffff"/>
    <path d="M-64 44 Q-64 -28 0 -28 L0 210 L-58 210 Z" fill="#eef1f6"/>
    <path d="M-64 2 Q-32 50 0 50 Q32 50 64 2 L66 34 Q32 78 0 78 Q-32 78 -66 34 Z" fill="#7fb2e8"/>
    <!-- braços abertos, convidando -->
    <path d="M-56 30 Q-104 20 -128 -20" stroke="#f2c39a" stroke-width="22" stroke-linecap="round" fill="none"/>
    <path d="M56 30 Q104 20 128 -20" stroke="#f2c39a" stroke-width="22" stroke-linecap="round" fill="none"/>
    <circle cx="-132" cy="-26" r="14" fill="#f2c39a"/>
    <circle cx="132" cy="-26" r="14" fill="#f2c39a"/>
    <circle cx="0" cy="-66" r="36" fill="#f7cfa4"/>
    <path d="M-36 -72 Q-32 -114 0 -114 Q32 -114 36 -72 Q36 -96 0 -100 Q-36 -96 -36 -72" fill="#5a3f27"/>
    <path d="M-36 -62 Q-40 -18 -22 -4 L-14 -62 Z" fill="#5a3f27"/>
    <path d="M36 -62 Q40 -18 22 -4 L14 -62 Z" fill="#5a3f27"/>
    <circle cx="-12" cy="-66" r="3.6" fill="#3a2b1a"/>
    <circle cx="12" cy="-66" r="3.6" fill="#3a2b1a"/>
    <path d="M-11 -50 Q0 -40 11 -50" stroke="#3a2b1a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="-56" r="4" fill="#ff9a9a" opacity="0.6"/>
    <circle cx="20" cy="-56" r="4" fill="#ff9a9a" opacity="0.6"/>
    <!-- auréola suave -->
    <ellipse cx="0" cy="-110" rx="42" ry="10" fill="none" stroke="#ffe07a" stroke-width="4" opacity="0.8"/>
  </g>
  <!-- crianças aproximando de ambos os lados -->
  <g transform="translate(190 430)">
    <ellipse cx="0" cy="108" rx="38" ry="11" fill="#000" opacity="0.08"/>
    <path d="M-24 20 Q-24 -18 0 -18 Q24 -18 24 20 L18 100 L-18 100 Z" fill="#ff7a8a"/>
    <path d="M22 4 L48 -18" stroke="#e79a6a" stroke-width="12" stroke-linecap="round"/>
    <path d="M-22 6 L-42 26" stroke="#e79a6a" stroke-width="12" stroke-linecap="round"/>
    <path d="M-12 96 L-24 134" stroke="#c9607a" stroke-width="12" stroke-linecap="round"/>
    <path d="M12 96 L24 134" stroke="#c9607a" stroke-width="12" stroke-linecap="round"/>
    <circle cx="0" cy="-40" r="24" fill="#8a5a3a"/>
    <path d="M-24 -44 Q-20 -74 0 -74 Q20 -74 24 -44 Q24 -62 0 -66 Q-24 -62 -24 -44" fill="#1c120a"/>
    <circle cx="-8" cy="-40" r="2.8" fill="#fff"/><circle cx="-8" cy="-40" r="1.6" fill="#241a10"/>
    <circle cx="8" cy="-40" r="2.8" fill="#fff"/><circle cx="8" cy="-40" r="1.6" fill="#241a10"/>
    <path d="M-8 -30 Q0 -22 8 -30" stroke="#241a10" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(600 430)">
    <ellipse cx="0" cy="108" rx="38" ry="11" fill="#000" opacity="0.08"/>
    <path d="M-24 20 Q-24 -18 0 -18 Q24 -18 24 20 L18 100 L-18 100 Z" fill="#ffb43b"/>
    <path d="M-22 4 L-48 -18" stroke="#f2c9a0" stroke-width="12" stroke-linecap="round"/>
    <path d="M22 6 L42 26" stroke="#f2c9a0" stroke-width="12" stroke-linecap="round"/>
    <path d="M-12 96 L-24 134" stroke="#d98f1f" stroke-width="12" stroke-linecap="round"/>
    <path d="M12 96 L24 134" stroke="#d98f1f" stroke-width="12" stroke-linecap="round"/>
    <circle cx="0" cy="-40" r="24" fill="#f7cfa4"/>
    <path d="M-24 -44 Q-20 -74 0 -74 Q20 -74 24 -44 L24 -30 Q22 -56 0 -58 Q-22 -56 -24 -30 Z" fill="#c98a3a"/>
    <circle cx="-8" cy="-40" r="2.8" fill="#3a2b1a"/>
    <circle cx="8" cy="-40" r="2.8" fill="#3a2b1a"/>
    <path d="M-8 -30 Q0 -22 8 -30" stroke="#3a2b1a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(290 460)">
    <ellipse cx="0" cy="92" rx="30" ry="9" fill="#000" opacity="0.08"/>
    <path d="M-20 16 Q-20 -14 0 -14 Q20 -14 20 16 L15 86 L-15 86 Z" fill="#5fc9c0"/>
    <path d="M18 2 L40 -14" stroke="#f2c9a0" stroke-width="10" stroke-linecap="round"/>
    <path d="M-18 4 L-36 22" stroke="#f2c9a0" stroke-width="10" stroke-linecap="round"/>
    <circle cx="0" cy="-32" r="20" fill="#e8a06a"/>
    <path d="M-20 -36 Q-16 -60 0 -60 Q16 -60 20 -36 Q20 -52 0 -56 Q-20 -52 -20 -36" fill="#2b1c10"/>
    <circle cx="-7" cy="-32" r="2.4" fill="#3a2b1a"/>
    <circle cx="7" cy="-32" r="2.4" fill="#3a2b1a"/>
    <path d="M-6 -23 Q0 -17 6 -23" stroke="#3a2b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>
  <!-- corações e borboleta -->
  <g fill="#ff6b8a">
    <path d="M400 200 q-10 -14 -20 -4 q-8 8 20 26 q28 -18 20 -26 q-10 -10 -20 4"/>
  </g>
  <g transform="translate(150 300)">
    <path d="M0 0 q-22 -18 -6 -30 q14 -8 6 24" fill="#ff7ab0"/>
    <path d="M0 0 q22 -18 6 -30 q-14 -8 -6 24" fill="#ff9ec9"/>
    <circle cx="0" cy="-2" r="3" fill="#5a3f27"/>
  </g>
  <g>
    <g transform="translate(120 550)"><circle cx="0" cy="0" r="8" fill="#ff9f3b"/><circle cx="0" cy="0" r="3.5" fill="#fff"/><rect x="-2" y="8" width="4" height="26" fill="#4f9c37"/></g>
    <g transform="translate(680 555)"><circle cx="0" cy="0" r="8" fill="#a06bff"/><circle cx="0" cy="0" r="3.5" fill="#ffe27a"/><rect x="-2" y="8" width="4" height="26" fill="#4f9c37"/></g>
  </g>
</svg>`,

  "criancas:jesus-blessing": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jesus abraça as crianças e coloca as mãos sobre elas para abençoá-las">
  <defs>
    <linearGradient id="jb-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe6b8"/>
      <stop offset="1" stop-color="#fff7e8"/>
    </linearGradient>
    <radialGradient id="jb-glow" cx="0.5" cy="0.38" r="0.62">
      <stop offset="0" stop-color="#fff6d4" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff6d4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="jb-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#96d567"/>
      <stop offset="1" stop-color="#6aba44"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jb-sky)"/>
  <ellipse cx="400" cy="240" rx="400" ry="300" fill="url(#jb-glow)"/>
  <!-- raios do céu -->
  <g fill="#fff3c9" opacity="0.6">
    <polygon points="400,20 350,220 450,220"/>
    <polygon points="400,20 250,200 340,220"/>
    <polygon points="400,20 550,200 460,220"/>
  </g>
  <circle cx="400" cy="90" r="48" fill="#ffdf6b" opacity="0.9"/>
  <g fill="#ffffff">
    <ellipse cx="140" cy="120" rx="58" ry="24"/>
    <ellipse cx="660" cy="130" rx="58" ry="24"/>
  </g>
  <path d="M0 450 Q400 395 800 450 L800 600 L0 600 Z" fill="url(#jb-ground)"/>
  <path d="M0 500 Q400 460 800 500 L800 600 L0 600 Z" fill="#56aa37"/>
  <g transform="translate(90 320)">
    <rect x="-12" y="16" width="24" height="140" rx="10" fill="#8a5a34"/>
    <circle cx="0" cy="0" r="58" fill="#57a83e"/>
    <circle cx="-38" cy="22" r="38" fill="#4f9c37"/>
    <circle cx="38" cy="20" r="38" fill="#63b649"/>
    <circle cx="6" cy="-28" r="9" fill="#ff5a7a"/>
  </g>
  <g transform="translate(720 320)">
    <rect x="-10" y="16" width="20" height="130" rx="9" fill="#8a5a34"/>
    <circle cx="0" cy="0" r="50" fill="#57a83e"/>
    <circle cx="-32" cy="20" r="32" fill="#4f9c37"/>
    <circle cx="32" cy="18" r="32" fill="#63b649"/>
  </g>
  <!-- Jesus ajoelhado no centro, abraçando -->
  <g transform="translate(400 300)">
    <ellipse cx="0" cy="248" rx="150" ry="24" fill="#000" opacity="0.08"/>
    <!-- corpo de Jesus, túnica ampla acolhendo -->
    <path d="M-70 60 Q-90 -20 0 -30 Q90 -20 70 60 L92 250 L-92 250 Z" fill="#ffffff"/>
    <path d="M-70 60 Q-90 -20 0 -30 L0 250 L-92 250 Z" fill="#eef1f6"/>
    <path d="M-72 20 Q-34 60 0 60 Q34 60 72 20 L76 54 Q34 96 0 96 Q-34 96 -76 54 Z" fill="#7fb2e8"/>
    <!-- cabeça de Jesus -->
    <circle cx="0" cy="-64" r="36" fill="#f7cfa4"/>
    <path d="M-36 -70 Q-32 -112 0 -112 Q32 -112 36 -70 Q36 -94 0 -98 Q-36 -94 -36 -70" fill="#5a3f27"/>
    <path d="M-36 -60 Q-40 -16 -22 -2 L-14 -60 Z" fill="#5a3f27"/>
    <path d="M36 -60 Q40 -16 22 -2 L14 -60 Z" fill="#5a3f27"/>
    <circle cx="-12" cy="-64" r="3.6" fill="#3a2b1a"/>
    <circle cx="12" cy="-64" r="3.6" fill="#3a2b1a"/>
    <path d="M-11 -48 Q0 -38 11 -48" stroke="#3a2b1a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="-54" r="4" fill="#ff9a9a" opacity="0.6"/>
    <circle cx="20" cy="-54" r="4" fill="#ff9a9a" opacity="0.6"/>
    <ellipse cx="0" cy="-108" rx="44" ry="10" fill="none" stroke="#ffe07a" stroke-width="4" opacity="0.85"/>
  </g>
  <!-- criança à esquerda, mão de Jesus sobre a cabeça (bênção) -->
  <g transform="translate(280 470)">
    <ellipse cx="0" cy="86" rx="34" ry="10" fill="#000" opacity="0.08"/>
    <path d="M-24 14 Q-24 -22 0 -22 Q24 -22 24 14 L18 82 L-18 82 Z" fill="#ff7a8a"/>
    <path d="M-20 78 L-30 116" stroke="#c9607a" stroke-width="11" stroke-linecap="round"/>
    <path d="M6 78 L14 116" stroke="#c9607a" stroke-width="11" stroke-linecap="round"/>
    <circle cx="0" cy="-42" r="26" fill="#e8a06a"/>
    <path d="M-26 -46 Q-22 -78 0 -78 Q22 -78 26 -46 Q26 -66 0 -70 Q-26 -66 -26 -46" fill="#2b1c10"/>
    <circle cx="-9" cy="-42" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-42" r="3" fill="#3a2b1a"/>
    <path d="M-8 -31 Q0 -23 8 -31" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- braço de Jesus com a mão sobre a cabeça da criança esquerda -->
  <path d="M360 300 Q300 360 286 402" stroke="#f2c39a" stroke-width="22" stroke-linecap="round" fill="none"/>
  <ellipse cx="284" cy="410" rx="18" ry="13" fill="#f2c39a"/>
  <!-- criança à direita, abraçada -->
  <g transform="translate(510 475)">
    <ellipse cx="0" cy="82" rx="34" ry="10" fill="#000" opacity="0.08"/>
    <path d="M-24 14 Q-24 -22 0 -22 Q24 -22 24 14 L18 78 L-18 78 Z" fill="#5fc9c0"/>
    <path d="M-6 74 L-14 112" stroke="#3f9c94" stroke-width="11" stroke-linecap="round"/>
    <path d="M20 74 L30 112" stroke="#3f9c94" stroke-width="11" stroke-linecap="round"/>
    <circle cx="0" cy="-42" r="26" fill="#f7cfa4"/>
    <path d="M-26 -46 Q-22 -78 0 -78 Q22 -78 26 -46 L26 -32 Q24 -60 0 -62 Q-24 -60 -26 -32 Z" fill="#c98a3a"/>
    <circle cx="-9" cy="-42" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-42" r="3" fill="#3a2b1a"/>
    <path d="M-8 -31 Q0 -23 8 -31" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="-14" cy="-38" r="3.4" fill="#ff9a9a" opacity="0.6"/>
    <circle cx="14" cy="-38" r="3.4" fill="#ff9a9a" opacity="0.6"/>
  </g>
  <!-- braço de Jesus abraçando a criança direita -->
  <path d="M440 300 Q510 350 520 402" stroke="#f2c39a" stroke-width="22" stroke-linecap="round" fill="none"/>
  <ellipse cx="522" cy="410" rx="18" ry="13" fill="#f2c39a"/>
  <!-- criancinha pequena na frente, sentada no colo -->
  <g transform="translate(400 500)">
    <ellipse cx="0" cy="70" rx="30" ry="9" fill="#000" opacity="0.08"/>
    <path d="M-20 12 Q-20 -16 0 -16 Q20 -16 20 12 L15 66 L-15 66 Z" fill="#ffb43b"/>
    <circle cx="0" cy="-34" r="22" fill="#8a5a3a"/>
    <path d="M-22 -38 Q-18 -64 0 -64 Q18 -64 22 -38 Q22 -56 0 -60 Q-22 -56 -22 -38" fill="#1c120a"/>
    <circle cx="-7" cy="-34" r="2.6" fill="#fff"/><circle cx="-7" cy="-34" r="1.6" fill="#241a10"/>
    <circle cx="7" cy="-34" r="2.6" fill="#fff"/><circle cx="7" cy="-34" r="1.6" fill="#241a10"/>
    <path d="M-6 -24 Q0 -17 6 -24" stroke="#241a10" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <!-- corações flutuando -->
  <g fill="#ff6b8a">
    <path d="M250 250 q-9 -12 -18 -3 q-7 7 18 24 q25 -17 18 -24 q-9 -9 -18 3"/>
    <path d="M560 240 q-8 -11 -16 -3 q-6 6 16 22 q22 -16 16 -22 q-8 -8 -16 3"/>
    <path d="M400 190 q-7 -9 -13 -2 q-5 5 13 18 q18 -13 13 -18 q-7 -7 -13 2"/>
  </g>
  <!-- borboleta e flores -->
  <g transform="translate(660 260)">
    <path d="M0 0 q-20 -16 -6 -28 q13 -7 6 22" fill="#ff7ab0"/>
    <path d="M0 0 q20 -16 6 -28 q-13 -7 -6 22" fill="#ff9ec9"/>
    <circle cx="0" cy="-2" r="3" fill="#5a3f27"/>
  </g>
  <g>
    <g transform="translate(150 555)"><circle cx="0" cy="0" r="8" fill="#ff5a7a"/><circle cx="0" cy="0" r="3.5" fill="#ffe27a"/><rect x="-2" y="8" width="4" height="26" fill="#4f9c37"/></g>
    <g transform="translate(650 560)"><circle cx="0" cy="0" r="8" fill="#a06bff"/><circle cx="0" cy="0" r="3.5" fill="#ffe27a"/><rect x="-2" y="8" width="4" height="26" fill="#4f9c37"/></g>
  </g>
</svg>`,

  "criancas:loved": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jesus sorridente cercado de corações mostrando que também ama você">
  <defs>
    <linearGradient id="lv-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd9e6"/>
      <stop offset="1" stop-color="#fff2f6"/>
    </linearGradient>
    <radialGradient id="lv-glow" cx="0.5" cy="0.4" r="0.6">
      <stop offset="0" stop-color="#fff7e0" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff7e0" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lv-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#98d769"/>
      <stop offset="1" stop-color="#6cbc46"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#lv-sky)"/>
  <ellipse cx="400" cy="240" rx="380" ry="280" fill="url(#lv-glow)"/>
  <circle cx="660" cy="110" r="52" fill="#ffdf6b"/>
  <g stroke="#ffd85e" stroke-width="7" stroke-linecap="round">
    <line x1="660" y1="30" x2="660" y2="14"/>
    <line x1="736" y1="110" x2="752" y2="110"/>
    <line x1="716" y1="54" x2="728" y2="42"/>
  </g>
  <g fill="#ffffff">
    <ellipse cx="160" cy="120" rx="60" ry="26"/>
    <ellipse cx="210" cy="110" rx="42" ry="20"/>
  </g>
  <g stroke="#c98aa6" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7">
    <path d="M300 90 q10 -10 20 0 q10 -10 20 0"/>
    <path d="M520 80 q10 -10 20 0 q10 -10 20 0"/>
  </g>
  <path d="M0 460 Q400 400 800 460 L800 600 L0 600 Z" fill="url(#lv-ground)"/>
  <path d="M0 510 Q400 470 800 510 L800 600 L0 600 Z" fill="#57ab38"/>
  <g transform="translate(120 330)">
    <rect x="-12" y="16" width="24" height="140" rx="10" fill="#8a5a34"/>
    <circle cx="0" cy="0" r="58" fill="#57a83e"/>
    <circle cx="-38" cy="22" r="36" fill="#4f9c37"/>
    <circle cx="38" cy="20" r="36" fill="#63b649"/>
    <circle cx="6" cy="-26" r="9" fill="#ff5a7a"/>
    <circle cx="-16" cy="6" r="8" fill="#ffb43b"/>
  </g>
  <!-- Jesus central, mão no coração, sorrindo para você -->
  <g transform="translate(400 320)">
    <ellipse cx="0" cy="212" rx="90" ry="20" fill="#000" opacity="0.08"/>
    <path d="M-64 44 Q-64 -28 0 -28 Q64 -28 64 44 L58 212 L-58 212 Z" fill="#ffffff"/>
    <path d="M-64 44 Q-64 -28 0 -28 L0 212 L-58 212 Z" fill="#eef1f6"/>
    <path d="M-64 2 Q-32 50 0 50 Q32 50 64 2 L66 34 Q32 78 0 78 Q-32 78 -66 34 Z" fill="#7fb2e8"/>
    <!-- braço direito aberto acolhedor -->
    <path d="M60 32 Q104 24 126 -14" stroke="#f2c39a" stroke-width="22" stroke-linecap="round" fill="none"/>
    <circle cx="130" cy="-20" r="14" fill="#f2c39a"/>
    <!-- braço esquerdo, mão sobre o peito -->
    <path d="M-58 30 Q-40 70 -6 82" stroke="#f2c39a" stroke-width="22" stroke-linecap="round" fill="none"/>
    <ellipse cx="-2" cy="84" rx="16" ry="12" fill="#f2c39a"/>
    <!-- coração no peito -->
    <path d="M-2 60 q-12 -16 -24 -4 q-10 10 24 32 q34 -22 24 -32 q-12 -12 -24 4" fill="#ff5a7a"/>
    <circle cx="0" cy="-66" r="36" fill="#f7cfa4"/>
    <path d="M-36 -72 Q-32 -114 0 -114 Q32 -114 36 -72 Q36 -96 0 -100 Q-36 -96 -36 -72" fill="#5a3f27"/>
    <path d="M-36 -62 Q-40 -18 -22 -4 L-14 -62 Z" fill="#5a3f27"/>
    <path d="M36 -62 Q40 -18 22 -4 L14 -62 Z" fill="#5a3f27"/>
    <circle cx="-12" cy="-66" r="3.6" fill="#3a2b1a"/>
    <circle cx="12" cy="-66" r="3.6" fill="#3a2b1a"/>
    <path d="M-12 -50 Q0 -38 12 -50" stroke="#3a2b1a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <circle cx="-20" cy="-56" r="4.5" fill="#ff9a9a" opacity="0.6"/>
    <circle cx="20" cy="-56" r="4.5" fill="#ff9a9a" opacity="0.6"/>
    <ellipse cx="0" cy="-110" rx="44" ry="10" fill="none" stroke="#ffe07a" stroke-width="4" opacity="0.85"/>
  </g>
  <!-- corações flutuando por toda a cena -->
  <g fill="#ff6b8a">
    <path d="M200 220 q-10 -14 -20 -4 q-8 8 20 26 q28 -18 20 -26 q-10 -10 -20 4"/>
    <path d="M600 240 q-9 -12 -18 -3 q-7 7 18 24 q25 -17 18 -24 q-9 -9 -18 3"/>
    <path d="M300 300 q-7 -10 -14 -2 q-6 6 14 20 q20 -14 14 -20 q-7 -8 -14 2"/>
    <path d="M540 320 q-6 -9 -12 -2 q-5 5 12 17 q17 -12 12 -17 q-6 -7 -12 2"/>
  </g>
  <g fill="#ffb0c4">
    <path d="M150 430 q-8 -11 -16 -3 q-6 6 16 22 q22 -16 16 -22 q-8 -8 -16 3"/>
    <path d="M650 420 q-8 -11 -16 -3 q-6 6 16 22 q22 -16 16 -22 q-8 -8 -16 3"/>
  </g>
  <!-- borboletas -->
  <g transform="translate(240 350)">
    <path d="M0 0 q-20 -16 -6 -28 q13 -7 6 22" fill="#ff9ec9"/>
    <path d="M0 0 q20 -16 6 -28 q-13 -7 -6 22" fill="#ffc2dd"/>
    <circle cx="0" cy="-2" r="3" fill="#5a3f27"/>
  </g>
  <g transform="translate(560 380)">
    <path d="M0 0 q-18 -14 -5 -26 q12 -6 5 20" fill="#a06bff"/>
    <path d="M0 0 q18 -14 5 -26 q-12 -6 -5 20" fill="#c4a0ff"/>
    <circle cx="0" cy="-2" r="3" fill="#5a3f27"/>
  </g>
  <!-- flores -->
  <g>
    <g transform="translate(100 560)"><circle cx="0" cy="0" r="9" fill="#ff5a7a"/><circle cx="0" cy="0" r="4" fill="#ffe27a"/><rect x="-2" y="9" width="4" height="28" fill="#4f9c37"/></g>
    <g transform="translate(700 560)"><circle cx="0" cy="0" r="9" fill="#ff9f3b"/><circle cx="0" cy="0" r="4" fill="#fff"/><rect x="-2" y="9" width="4" height="28" fill="#4f9c37"/></g>
    <g transform="translate(500 570)"><circle cx="0" cy="0" r="8" fill="#a06bff"/><circle cx="0" cy="0" r="3.5" fill="#ffe27a"/><rect x="-2" y="8" width="4" height="26" fill="#4f9c37"/></g>
  </g>
</svg>`,
});

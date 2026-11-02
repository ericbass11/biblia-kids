/* Cenas base compartilhadas: oração final e fallback.
   window.SCENES guarda o SVG de cada cena, indexado por "<storyId>:<scene>". */
window.SCENES = window.SCENES || {};

/* Ilustração usada na página de oração de todas as histórias */
window.SCENES["prayer"] = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Criança rezando sob uma luz do céu">
  <defs>
    <linearGradient id="pr-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff3d6"/>
      <stop offset="1" stop-color="#ffe0b0"/>
    </linearGradient>
    <radialGradient id="pr-glow" cx="0.5" cy="0.25" r="0.7">
      <stop offset="0" stop-color="#fff8e6" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff8e6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#pr-sky)"/>
  <ellipse cx="400" cy="150" rx="360" ry="260" fill="url(#pr-glow)"/>
  <!-- raios de luz -->
  <g fill="#fff5da" opacity="0.7">
    <polygon points="400,60 340,300 460,300"/>
    <polygon points="400,60 250,300 330,300"/>
    <polygon points="400,60 470,300 550,300"/>
  </g>
  <!-- estrelas -->
  <g fill="#ffcf5c">
    <path d="M150 120 l8 20 22 2 -16 15 5 22 -19-12 -19 12 5-22 -16-15 22-2z"/>
    <path d="M650 100 l6 15 16 2 -12 11 4 16 -14-9 -14 9 4-16 -12-11 16-2z"/>
    <circle cx="600" cy="230" r="5"/>
    <circle cx="200" cy="250" r="4"/>
  </g>
  <!-- chão -->
  <path d="M0 470 Q400 420 800 470 L800 600 L0 600 Z" fill="#8fce6b"/>
  <path d="M0 500 Q400 460 800 500 L800 600 L0 600 Z" fill="#79bd57"/>
  <!-- criança rezando -->
  <g transform="translate(400 470)">
    <ellipse cx="0" cy="30" rx="70" ry="16" fill="#000" opacity="0.08"/>
    <!-- corpo -->
    <path d="M-42 20 Q-42 -40 0 -40 Q42 -40 42 20 Z" fill="#6b8ff0"/>
    <!-- braços/mãos em oração -->
    <path d="M-14 -30 L-6 -70 M14 -30 L6 -70" stroke="#f2c9a0" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M0 -86 l10 16 -20 0 z" fill="#f2c9a0"/>
    <!-- cabeça -->
    <circle cx="0" cy="-96" r="30" fill="#f5cfa6"/>
    <path d="M-30 -104 Q0 -140 30 -104 Q22 -120 0 -120 Q-22 -120 -30 -104" fill="#6b4a2b"/>
    <circle cx="-10" cy="-96" r="3.2" fill="#3a2b1a"/>
    <circle cx="10" cy="-96" r="3.2" fill="#3a2b1a"/>
    <path d="M-8 -84 Q0 -78 8 -84" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
</svg>`;

/* Fallback caso alguma cena não tenha ilustração */
window.SCENES["_fallback"] = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração">
  <defs>
    <linearGradient id="fb" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cfe3ff"/>
      <stop offset="1" stop-color="#eaf3ff"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#fb)"/>
  <text x="400" y="320" font-size="120" text-anchor="middle">📖</text>
</svg>`;

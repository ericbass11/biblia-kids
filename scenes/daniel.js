/* Cenas ilustradas da história "Daniel na Cova dos Leões" (Daniel 6).
   Cada valor é um SVG flat, colorido e fofo, no formato 800x600.
   Indexado por "daniel:<scene>". */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  /* Cena 1: Daniel reza três vezes por dia, agradecendo a Deus. */
  "daniel:daniel-pray": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daniel ajoelhado rezando dentro do palácio, com o sol brilhando pela janela">
  <defs>
    <linearGradient id="dp-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f6d9a8"/>
      <stop offset="1" stop-color="#e9bd80"/>
    </linearGradient>
    <linearGradient id="dp-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9a8"/>
      <stop offset="1" stop-color="#ffd07a"/>
    </linearGradient>
    <radialGradient id="dp-glow" cx="0.5" cy="0.4" r="0.7">
      <stop offset="0" stop-color="#fff6d8" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff6d8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#dp-wall)"/>
  <!-- piso de pedra -->
  <rect x="0" y="470" width="800" height="130" fill="#c99a63"/>
  <g stroke="#b07f4c" stroke-width="4">
    <line x1="0" y1="510" x2="800" y2="510"/>
    <line x1="130" y1="470" x2="130" y2="510"/>
    <line x1="330" y1="470" x2="330" y2="510"/>
    <line x1="530" y1="470" x2="530" y2="510"/>
    <line x1="700" y1="470" x2="700" y2="510"/>
    <line x1="60" y1="510" x2="60" y2="600"/>
    <line x1="260" y1="510" x2="260" y2="600"/>
    <line x1="470" y1="510" x2="470" y2="600"/>
    <line x1="680" y1="510" x2="680" y2="600"/>
  </g>
  <!-- colunas do palacio -->
  <g fill="#ecc98f" stroke="#cfa564" stroke-width="3">
    <rect x="40" y="60" width="60" height="410" rx="14"/>
    <rect x="700" y="60" width="60" height="410" rx="14"/>
    <rect x="30" y="40" width="80" height="30" rx="8"/>
    <rect x="690" y="40" width="80" height="30" rx="8"/>
  </g>
  <!-- janela com ceu -->
  <g>
    <rect x="500" y="70" width="230" height="300" rx="18" fill="#a97c46"/>
    <rect x="516" y="86" width="198" height="268" rx="10" fill="url(#dp-sky)"/>
    <circle cx="650" cy="150" r="42" fill="#ffd23f"/>
    <g stroke="#ffd23f" stroke-width="7" stroke-linecap="round">
      <line x1="650" y1="80" x2="650" y2="100"/>
      <line x1="712" y1="150" x2="695" y2="150"/>
      <line x1="606" y1="106" x2="618" y2="118"/>
      <line x1="694" y1="106" x2="682" y2="118"/>
    </g>
    <path d="M540 320 q30 -40 60 0 q30 -35 60 0 q30 -30 54 0 z" fill="#8fce6b"/>
    <line x1="615" y1="86" x2="615" y2="354" stroke="#a97c46" stroke-width="9"/>
    <line x1="516" y1="220" x2="714" y2="220" stroke="#a97c46" stroke-width="9"/>
  </g>
  <!-- luz do ceu sobre Daniel -->
  <ellipse cx="300" cy="360" rx="320" ry="260" fill="url(#dp-glow)"/>
  <!-- Daniel ajoelhado rezando -->
  <g transform="translate(300 470)">
    <ellipse cx="0" cy="26" rx="105" ry="20" fill="#000" opacity="0.08"/>
    <!-- pernas ajoelhadas -->
    <path d="M-70 24 Q-40 -20 6 0 L40 24 Z" fill="#5c8fc7"/>
    <!-- tunica -->
    <path d="M-52 20 Q-58 -110 0 -120 Q58 -110 52 20 Z" fill="#7c5cff"/>
    <path d="M-52 20 Q-58 -70 0 -78 Q58 -70 52 20 Z" fill="#8f74ff"/>
    <!-- faixa -->
    <path d="M-50 -30 Q0 -18 50 -30 L48 -12 Q0 0 -48 -12 Z" fill="#ffd23f"/>
    <!-- bracos e maos em oracao -->
    <path d="M-30 -70 L-8 -128 M30 -70 L8 -128" stroke="#f0c39a" stroke-width="18" stroke-linecap="round" fill="none"/>
    <path d="M0 -150 l14 24 -28 0 z" fill="#f0c39a"/>
    <!-- cabeca -->
    <circle cx="0" cy="-168" r="36" fill="#f4cca2"/>
    <path d="M-36 -178 Q0 -224 36 -178 Q26 -200 0 -200 Q-26 -200 -36 -178" fill="#5a3a22"/>
    <!-- barba -->
    <path d="M-24 -156 Q0 -128 24 -156 Q18 -140 0 -140 Q-18 -140 -24 -156" fill="#5a3a22"/>
    <circle cx="-12" cy="-168" r="3.4" fill="#3a2b1a"/>
    <circle cx="12" cy="-168" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -154 Q0 -148 9 -154" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- coracoes de gratidao -->
  <g fill="#ff7fa5" opacity="0.9">
    <path d="M170 200 q-14 -20 -28 -6 q-14 14 28 40 q42 -26 28 -40 q-14 -14 -28 6z"/>
    <path d="M440 250 q-9 -13 -18 -4 q-9 9 18 26 q27 -17 18 -26 q-9 -9 -18 4z"/>
  </g>
</svg>`,

  /* Cena 2: Pessoas com inveja criam uma lei malvada. */
  "daniel:jealous": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Homens com inveja e cara de bravos segurando um pergaminho com uma lei malvada dentro do palácio">
  <defs>
    <linearGradient id="jl-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b9a7c9"/>
      <stop offset="1" stop-color="#9d86b4"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jl-wall)"/>
  <!-- piso -->
  <rect x="0" y="470" width="800" height="130" fill="#6f5a86"/>
  <g stroke="#5a4870" stroke-width="4">
    <line x1="0" y1="512" x2="800" y2="512"/>
    <line x1="150" y1="470" x2="150" y2="512"/>
    <line x1="400" y1="470" x2="400" y2="512"/>
    <line x1="650" y1="470" x2="650" y2="512"/>
  </g>
  <!-- arcos do palacio -->
  <g fill="#8a71a3" opacity="0.7">
    <path d="M60 470 L60 200 Q60 120 150 120 Q240 120 240 200 L240 470 Z"/>
    <path d="M560 470 L560 200 Q560 120 650 120 Q740 120 740 200 L740 470 Z"/>
  </g>
  <g fill="#7a6392" opacity="0.6">
    <path d="M90 470 L90 210 Q90 150 150 150 Q210 150 210 210 L210 470 Z"/>
    <path d="M590 470 L590 210 Q590 150 650 150 Q710 150 710 210 L710 470 Z"/>
  </g>
  <!-- tocha -->
  <g transform="translate(400 150)">
    <rect x="-6" y="0" width="12" height="70" rx="4" fill="#7a5a34"/>
    <path d="M0 -34 q22 20 0 44 q-22 -24 0 -44z" fill="#ff9a3c"/>
    <path d="M0 -18 q12 12 0 26 q-12 -14 0 -26z" fill="#ffd23f"/>
  </g>
  <!-- pergaminho da lei malvada -->
  <g transform="translate(400 350)">
    <ellipse cx="0" cy="120" rx="120" ry="18" fill="#000" opacity="0.12"/>
    <rect x="-96" y="-70" width="192" height="180" rx="10" fill="#f4e6c8" stroke="#d8c39a" stroke-width="4"/>
    <ellipse cx="-96" cy="20" rx="16" ry="90" fill="#e4d2a8"/>
    <ellipse cx="96" cy="20" rx="16" ry="90" fill="#e4d2a8"/>
    <g stroke="#b09a6a" stroke-width="5" stroke-linecap="round">
      <line x1="-70" y1="-40" x2="70" y2="-40"/>
      <line x1="-70" y1="-14" x2="60" y2="-14"/>
      <line x1="-70" y1="12" x2="70" y2="12"/>
      <line x1="-70" y1="38" x2="50" y2="38"/>
    </g>
    <!-- selo bravo -->
    <circle cx="0" cy="82" r="20" fill="#c0392b"/>
    <path d="M-8 76 L-2 82 M2 82 L8 76 M-8 90 L8 90" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>
  </g>
  <!-- homem invejoso da esquerda -->
  <g transform="translate(150 430)">
    <ellipse cx="0" cy="118" rx="70" ry="16" fill="#000" opacity="0.1"/>
    <path d="M-46 110 Q-52 -10 0 -18 Q52 -10 46 110 Z" fill="#c0453f"/>
    <path d="M-46 40 Q0 26 46 40" stroke="#992f2a" stroke-width="6" fill="none"/>
    <circle cx="0" cy="-52" r="34" fill="#e8b98f"/>
    <path d="M-34 -60 Q0 -100 34 -60 Q24 -82 0 -82 Q-24 -82 -34 -60" fill="#3a2b1a"/>
    <path d="M-22 -40 Q0 -18 22 -40 Q16 -26 0 -26 Q-16 -26 -22 -40" fill="#3a2b1a"/>
    <!-- sobrancelhas bravas -->
    <line x1="-20" y1="-58" x2="-6" y2="-52" stroke="#3a2b1a" stroke-width="4" stroke-linecap="round"/>
    <line x1="20" y1="-58" x2="6" y2="-52" stroke="#3a2b1a" stroke-width="4" stroke-linecap="round"/>
    <circle cx="-11" cy="-48" r="3.2" fill="#2a1e12"/>
    <circle cx="11" cy="-48" r="3.2" fill="#2a1e12"/>
    <path d="M-10 -34 Q0 -40 10 -34" stroke="#2a1e12" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- homem invejoso da direita apontando -->
  <g transform="translate(650 430)">
    <ellipse cx="0" cy="118" rx="70" ry="16" fill="#000" opacity="0.1"/>
    <path d="M-46 110 Q-52 -10 0 -18 Q52 -10 46 110 Z" fill="#3f7a5a"/>
    <path d="M-46 40 Q0 26 46 40" stroke="#2c5a41" stroke-width="6" fill="none"/>
    <!-- braco apontando ao pergaminho -->
    <path d="M-30 20 L-90 -6" stroke="#e8b98f" stroke-width="16" stroke-linecap="round"/>
    <circle cx="-96" cy="-8" r="9" fill="#e8b98f"/>
    <circle cx="0" cy="-52" r="34" fill="#e8b98f"/>
    <path d="M-34 -62 Q0 -98 34 -62 Q24 -84 0 -84 Q-24 -84 -34 -62" fill="#4a2f16"/>
    <line x1="-20" y1="-58" x2="-6" y2="-52" stroke="#4a2f16" stroke-width="4" stroke-linecap="round"/>
    <line x1="20" y1="-58" x2="6" y2="-52" stroke="#4a2f16" stroke-width="4" stroke-linecap="round"/>
    <circle cx="-11" cy="-48" r="3.2" fill="#2a1e12"/>
    <circle cx="11" cy="-48" r="3.2" fill="#2a1e12"/>
    <path d="M-10 -32 Q0 -38 10 -32" stroke="#2a1e12" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  /* Cena 3: Daniel continua rezando com a janela aberta, sem medo. */
  "daniel:daniel-still-pray": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daniel rezando de joelhos diante de uma janela aberta com o céu estrelado, sem medo">
  <defs>
    <linearGradient id="ds-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e7c9de"/>
      <stop offset="1" stop-color="#d3a9c6"/>
    </linearGradient>
    <linearGradient id="ds-night" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3a4a86"/>
      <stop offset="1" stop-color="#6a5aa0"/>
    </linearGradient>
    <radialGradient id="ds-glow" cx="0.62" cy="0.35" r="0.6">
      <stop offset="0" stop-color="#fff6d8" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#fff6d8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#ds-wall)"/>
  <!-- piso -->
  <rect x="0" y="480" width="800" height="120" fill="#b98bab"/>
  <g stroke="#a2769a" stroke-width="4">
    <line x1="0" y1="520" x2="800" y2="520"/>
    <line x1="200" y1="480" x2="200" y2="520"/>
    <line x1="500" y1="480" x2="500" y2="520"/>
  </g>
  <!-- janela aberta com noite estrelada -->
  <g>
    <rect x="470" y="70" width="270" height="340" rx="18" fill="#9d6f90"/>
    <rect x="488" y="88" width="234" height="304" rx="10" fill="url(#ds-night)"/>
    <!-- lua -->
    <circle cx="640" cy="160" r="40" fill="#fff2c2"/>
    <circle cx="656" cy="150" r="34" fill="url(#ds-night)"/>
    <!-- estrelas -->
    <g fill="#fff3c4">
      <path d="M540 150 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1z"/>
      <circle cx="560" cy="250" r="4"/>
      <circle cx="620" cy="300" r="5"/>
      <circle cx="700" cy="240" r="4"/>
      <circle cx="520" cy="320" r="3"/>
      <circle cx="680" cy="330" r="3"/>
    </g>
    <line x1="605" y1="88" x2="605" y2="392" stroke="#9d6f90" stroke-width="10"/>
    <line x1="488" y1="240" x2="722" y2="240" stroke="#9d6f90" stroke-width="10"/>
  </g>
  <!-- luz do ceu -->
  <ellipse cx="500" cy="360" rx="340" ry="260" fill="url(#ds-glow)"/>
  <!-- Daniel rezando -->
  <g transform="translate(300 480)">
    <ellipse cx="0" cy="24" rx="100" ry="18" fill="#000" opacity="0.08"/>
    <path d="M-68 22 Q-38 -20 6 0 L40 22 Z" fill="#5c8fc7"/>
    <path d="M-52 18 Q-58 -110 0 -120 Q58 -110 52 18 Z" fill="#7c5cff"/>
    <path d="M-52 18 Q-58 -70 0 -78 Q58 -70 52 18 Z" fill="#8f74ff"/>
    <path d="M-50 -30 Q0 -18 50 -30 L48 -12 Q0 0 -48 -12 Z" fill="#ffd23f"/>
    <path d="M-30 -70 L-8 -128 M30 -70 L8 -128" stroke="#f0c39a" stroke-width="18" stroke-linecap="round" fill="none"/>
    <path d="M0 -150 l14 24 -28 0 z" fill="#f0c39a"/>
    <circle cx="0" cy="-168" r="36" fill="#f4cca2"/>
    <path d="M-36 -178 Q0 -224 36 -178 Q26 -200 0 -200 Q-26 -200 -36 -178" fill="#5a3a22"/>
    <path d="M-24 -156 Q0 -128 24 -156 Q18 -140 0 -140 Q-18 -140 -24 -156" fill="#5a3a22"/>
    <circle cx="-12" cy="-168" r="3.4" fill="#3a2b1a"/>
    <circle cx="12" cy="-168" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -154 Q0 -148 9 -154" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  /* Cena 4: Daniel colocado na cova dos leões, confiando em Deus. */
  "daniel:lions-den": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daniel dentro da cova de pedra rodeado por leões grandes, rezando com confiança em Deus">
  <defs>
    <linearGradient id="ld-cave" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6b5744"/>
      <stop offset="1" stop-color="#4a3a2c"/>
    </linearGradient>
    <radialGradient id="ld-light" cx="0.5" cy="0.05" r="0.7">
      <stop offset="0" stop-color="#ffe9b0" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#ld-cave)"/>
  <!-- entrada de luz no topo -->
  <path d="M250 0 L550 0 L500 70 L300 70 Z" fill="#ffe9b0" opacity="0.6"/>
  <ellipse cx="400" cy="120" rx="360" ry="220" fill="url(#ld-light)"/>
  <!-- pedras da cova -->
  <g fill="#5a4838" stroke="#3d3024" stroke-width="3">
    <path d="M0 90 q60 -30 120 0 q60 30 120 0 q60 -30 120 0 q60 30 120 0 q60 -30 120 0 q60 30 120 0 L800 0 L0 0 Z"/>
    <ellipse cx="80" cy="200" rx="60" ry="42"/>
    <ellipse cx="720" cy="220" rx="66" ry="46"/>
    <ellipse cx="60" cy="360" rx="54" ry="40"/>
    <ellipse cx="740" cy="380" rx="58" ry="42"/>
  </g>
  <!-- chao de pedra -->
  <path d="M0 470 Q400 430 800 470 L800 600 L0 600 Z" fill="#7a6349"/>
  <path d="M0 500 Q400 470 800 500 L800 600 L0 600 Z" fill="#6a553f"/>
  <!-- leao esquerdo (fofo, sentado) -->
  <g transform="translate(150 430)">
    <ellipse cx="0" cy="90" rx="80" ry="16" fill="#000" opacity="0.15"/>
    <circle cx="0" cy="0" r="66" fill="#e8934a"/>
    <circle cx="0" cy="0" r="46" fill="#f6b26b"/>
    <g fill="#e8934a">
      <circle cx="-52" cy="-30" r="14"/><circle cx="-58" cy="0" r="14"/><circle cx="-52" cy="30" r="14"/>
      <circle cx="52" cy="-30" r="14"/><circle cx="58" cy="0" r="14"/><circle cx="52" cy="30" r="14"/>
      <circle cx="-32" cy="-50" r="14"/><circle cx="32" cy="-50" r="14"/><circle cx="0" cy="-58" r="14"/>
      <circle cx="-30" cy="52" r="13"/><circle cx="30" cy="52" r="13"/>
    </g>
    <ellipse cx="-24" cy="-52" rx="12" ry="14" fill="#f6b26b"/>
    <ellipse cx="24" cy="-52" rx="12" ry="14" fill="#f6b26b"/>
    <circle cx="-16" cy="-8" r="5" fill="#3a2b1a"/>
    <circle cx="16" cy="-8" r="5" fill="#3a2b1a"/>
    <path d="M-8 8 L8 8 L0 18 Z" fill="#a35a2c"/>
    <path d="M0 18 Q-14 30 -24 24 M0 18 Q14 30 24 24" stroke="#a35a2c" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- leao direito (fofo, deitado) -->
  <g transform="translate(650 440)">
    <ellipse cx="0" cy="90" rx="90" ry="16" fill="#000" opacity="0.15"/>
    <ellipse cx="30" cy="60" rx="78" ry="40" fill="#f6b26b"/>
    <circle cx="0" cy="0" r="60" fill="#e8934a"/>
    <circle cx="0" cy="0" r="42" fill="#f6b26b"/>
    <g fill="#e8934a">
      <circle cx="-48" cy="-26" r="13"/><circle cx="-54" cy="0" r="13"/><circle cx="-48" cy="26" r="13"/>
      <circle cx="48" cy="-26" r="13"/><circle cx="54" cy="0" r="13"/><circle cx="48" cy="26" r="13"/>
      <circle cx="-28" cy="-46" r="13"/><circle cx="28" cy="-46" r="13"/><circle cx="0" cy="-54" r="13"/>
    </g>
    <ellipse cx="-22" cy="-48" rx="11" ry="13" fill="#f6b26b"/>
    <ellipse cx="22" cy="-48" rx="11" ry="13" fill="#f6b26b"/>
    <circle cx="-15" cy="-6" r="4.6" fill="#3a2b1a"/>
    <circle cx="15" cy="-6" r="4.6" fill="#3a2b1a"/>
    <path d="M-7 8 L7 8 L0 17 Z" fill="#a35a2c"/>
    <path d="M0 17 Q-12 28 -22 22 M0 17 Q12 28 22 22" stroke="#a35a2c" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Daniel em pe rezando, confiante -->
  <g transform="translate(400 470)">
    <ellipse cx="0" cy="26" rx="60" ry="14" fill="#000" opacity="0.15"/>
    <path d="M-44 22 Q-52 -120 0 -132 Q52 -120 44 22 Z" fill="#7c5cff"/>
    <path d="M-44 22 Q-50 -70 0 -80 Q50 -70 44 22 Z" fill="#8f74ff"/>
    <path d="M-44 -34 Q0 -22 44 -34 L42 -14 Q0 -2 -42 -14 Z" fill="#ffd23f"/>
    <path d="M-26 -76 L-6 -132 M26 -76 L6 -132" stroke="#f0c39a" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M0 -152 l12 22 -24 0 z" fill="#f0c39a"/>
    <circle cx="0" cy="-170" r="32" fill="#f4cca2"/>
    <path d="M-32 -180 Q0 -220 32 -180 Q23 -200 0 -200 Q-23 -200 -32 -180" fill="#5a3a22"/>
    <path d="M-21 -158 Q0 -132 21 -158 Q16 -144 0 -144 Q-16 -144 -21 -158" fill="#5a3a22"/>
    <circle cx="-11" cy="-170" r="3.2" fill="#3a2b1a"/>
    <circle cx="11" cy="-170" r="3.2" fill="#3a2b1a"/>
    <path d="M-8 -156 Q0 -150 8 -156" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  /* Cena 5: Um anjo luminoso fecha a boca dos leões. */
  "daniel:angel-lions": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Um anjo luminoso desce na cova e fecha a boca dos leões, que ficam mansos como gatinhos ao lado de Daniel">
  <defs>
    <linearGradient id="an-cave" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5a4a68"/>
      <stop offset="1" stop-color="#3c3049"/>
    </linearGradient>
    <radialGradient id="an-glow" cx="0.5" cy="0.3" r="0.6">
      <stop offset="0" stop-color="#fffbe6" stop-opacity="1"/>
      <stop offset="0.5" stop-color="#fff2b0" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#fff2b0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#an-cave)"/>
  <!-- pedras -->
  <g fill="#463a52" stroke="#2f2639" stroke-width="3">
    <path d="M0 80 q70 -34 140 0 q70 34 140 0 q70 -34 140 0 q70 34 140 0 q70 -34 140 0 L800 0 L0 0 Z"/>
    <ellipse cx="70" cy="240" rx="56" ry="42"/>
    <ellipse cx="730" cy="260" rx="60" ry="44"/>
  </g>
  <!-- chao -->
  <path d="M0 480 Q400 440 800 480 L800 600 L0 600 Z" fill="#6a5842"/>
  <path d="M0 510 Q400 480 800 510 L800 600 L0 600 Z" fill="#5a4a37"/>
  <!-- brilho grande do anjo -->
  <ellipse cx="400" cy="230" rx="380" ry="330" fill="url(#an-glow)"/>
  <!-- raios -->
  <g fill="#fff7cf" opacity="0.5">
    <polygon points="400,60 350,300 450,300"/>
    <polygon points="400,60 240,280 320,300"/>
    <polygon points="400,60 560,280 480,300"/>
  </g>
  <!-- Anjo luminoso -->
  <g transform="translate(400 250)">
    <!-- asas -->
    <path d="M-30 30 Q-160 -60 -150 60 Q-110 30 -40 60 Z" fill="#fff6dc"/>
    <path d="M30 30 Q160 -60 150 60 Q110 30 40 60 Z" fill="#fff6dc"/>
    <path d="M-30 30 Q-120 -20 -120 50 Q-90 30 -40 50 Z" fill="#ffe9a8"/>
    <path d="M30 30 Q120 -20 120 50 Q90 30 40 50 Z" fill="#ffe9a8"/>
    <!-- tunica -->
    <path d="M-40 40 Q-46 -30 0 -40 Q46 -30 40 40 Z" fill="#fbfbff"/>
    <path d="M-40 40 Q-40 100 0 100 Q40 100 40 40 Z" fill="#eef1ff"/>
    <!-- bracos abaixando (fechando bocas) -->
    <path d="M-30 -6 Q-80 40 -120 96" stroke="#fff" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M30 -6 Q80 40 120 96" stroke="#fff" stroke-width="16" stroke-linecap="round" fill="none"/>
    <circle cx="-124" cy="100" r="9" fill="#ffe6cf"/>
    <circle cx="124" cy="100" r="9" fill="#ffe6cf"/>
    <!-- cabeca -->
    <circle cx="0" cy="-58" r="28" fill="#ffe6cf"/>
    <path d="M-28 -66 Q0 -98 28 -66 Q20 -84 0 -84 Q-20 -84 -28 -66" fill="#f2c85a"/>
    <circle cx="-9" cy="-58" r="3" fill="#5a4a37"/>
    <circle cx="9" cy="-58" r="3" fill="#5a4a37"/>
    <path d="M-7 -46 Q0 -40 7 -46" stroke="#5a4a37" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <!-- auréola -->
    <ellipse cx="0" cy="-92" rx="30" ry="9" fill="none" stroke="#ffd23f" stroke-width="5"/>
  </g>
  <!-- leao esquerdo manso, boca fechada -->
  <g transform="translate(140 470)">
    <ellipse cx="0" cy="70" rx="72" ry="14" fill="#000" opacity="0.15"/>
    <circle cx="0" cy="0" r="58" fill="#e8934a"/>
    <circle cx="0" cy="0" r="40" fill="#f6b26b"/>
    <g fill="#e8934a">
      <circle cx="-46" cy="-24" r="12"/><circle cx="-52" cy="4" r="12"/><circle cx="-42" cy="30" r="12"/>
      <circle cx="46" cy="-24" r="12"/><circle cx="52" cy="4" r="12"/><circle cx="42" cy="30" r="12"/>
      <circle cx="-26" cy="-44" r="12"/><circle cx="26" cy="-44" r="12"/><circle cx="0" cy="-50" r="12"/>
    </g>
    <ellipse cx="-20" cy="-44" rx="10" ry="12" fill="#f6b26b"/>
    <ellipse cx="20" cy="-44" rx="10" ry="12" fill="#f6b26b"/>
    <path d="M-22 -6 Q-14 -12 -8 -6" stroke="#3a2b1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M8 -6 Q14 -12 22 -6" stroke="#3a2b1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M-7 8 L7 8 L0 16 Z" fill="#a35a2c"/>
    <!-- boca fechada em sorriso -->
    <path d="M-14 24 Q0 30 14 24" stroke="#a35a2c" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- leao direito manso, olhos fechados dormindo -->
  <g transform="translate(660 480)">
    <ellipse cx="0" cy="66" rx="80" ry="14" fill="#000" opacity="0.15"/>
    <ellipse cx="26" cy="46" rx="70" ry="34" fill="#f6b26b"/>
    <circle cx="0" cy="0" r="54" fill="#e8934a"/>
    <circle cx="0" cy="0" r="38" fill="#f6b26b"/>
    <g fill="#e8934a">
      <circle cx="-42" cy="-22" r="11"/><circle cx="-48" cy="4" r="11"/><circle cx="-40" cy="28" r="11"/>
      <circle cx="42" cy="-22" r="11"/><circle cx="48" cy="4" r="11"/><circle cx="40" cy="28" r="11"/>
      <circle cx="-24" cy="-40" r="11"/><circle cx="24" cy="-40" r="11"/><circle cx="0" cy="-46" r="11"/>
    </g>
    <ellipse cx="-18" cy="-40" rx="9" ry="11" fill="#f6b26b"/>
    <ellipse cx="18" cy="-40" rx="9" ry="11" fill="#f6b26b"/>
    <path d="M-20 -4 Q-13 2 -6 -4" stroke="#3a2b1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M6 -4 Q13 2 20 -4" stroke="#3a2b1a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M-6 8 L6 8 L0 15 Z" fill="#a35a2c"/>
    <path d="M-13 22 Q0 28 13 22" stroke="#a35a2c" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- zzz do soninho -->
    <path d="M56 -34 h16 l-16 16 h16" stroke="#fff" stroke-width="3" fill="none"/>
    <path d="M78 -52 h11 l-11 11 h11" stroke="#fff" stroke-width="2.4" fill="none"/>
  </g>
</svg>`,

  /* Cena 6: De manhã, Daniel sai da cova são e salvo, todos comemoram. */
  "daniel:daniel-safe": `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De manhã Daniel sai da cova são e salvo, com os braços erguidos e pessoas comemorando ao sol nascente">
  <defs>
    <linearGradient id="sf-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe6a3"/>
      <stop offset="1" stop-color="#ffd6c0"/>
    </linearGradient>
    <radialGradient id="sf-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff3b0"/>
      <stop offset="1" stop-color="#ffd23f"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sf-sky)"/>
  <!-- sol nascente -->
  <circle cx="400" cy="180" r="90" fill="url(#sf-sun)"/>
  <g stroke="#ffd23f" stroke-width="9" stroke-linecap="round" opacity="0.85">
    <line x1="400" y1="40" x2="400" y2="70"/>
    <line x1="250" y1="70" x2="270" y2="92"/>
    <line x1="550" y1="70" x2="530" y2="92"/>
    <line x1="180" y1="180" x2="210" y2="180"/>
    <line x1="620" y1="180" x2="590" y2="180"/>
    <line x1="250" y1="290" x2="272" y2="268"/>
    <line x1="550" y1="290" x2="528" y2="268"/>
  </g>
  <!-- morros -->
  <path d="M0 420 Q200 360 400 420 Q600 360 800 420 L800 600 L0 600 Z" fill="#8fce6b"/>
  <path d="M0 470 Q220 420 440 470 Q620 430 800 470 L800 600 L0 600 Z" fill="#79bd57"/>
  <!-- cova de pedra ao fundo com tampa aberta -->
  <g transform="translate(620 400)">
    <ellipse cx="0" cy="60" rx="110" ry="30" fill="#6a553f"/>
    <ellipse cx="0" cy="52" rx="86" ry="22" fill="#3d3024"/>
    <path d="M-120 44 l40 -34 24 22 z" fill="#8a725a" stroke="#6a553f" stroke-width="3"/>
  </g>
  <!-- Daniel saindo com bracos erguidos, feliz -->
  <g transform="translate(320 460)">
    <ellipse cx="0" cy="80" rx="80" ry="18" fill="#000" opacity="0.1"/>
    <path d="M-50 74 Q-58 -110 0 -122 Q58 -110 50 74 Z" fill="#7c5cff"/>
    <path d="M-50 74 Q-56 -60 0 -70 Q56 -60 50 74 Z" fill="#8f74ff"/>
    <path d="M-50 -20 Q0 -8 50 -20 L48 2 Q0 14 -48 2 Z" fill="#ffd23f"/>
    <!-- bracos erguidos comemorando -->
    <path d="M-34 -60 L-64 -128 M34 -60 L64 -128" stroke="#f0c39a" stroke-width="18" stroke-linecap="round" fill="none"/>
    <circle cx="-68" cy="-134" r="11" fill="#f0c39a"/>
    <circle cx="68" cy="-134" r="11" fill="#f0c39a"/>
    <circle cx="0" cy="-158" r="36" fill="#f4cca2"/>
    <path d="M-36 -168 Q0 -212 36 -168 Q26 -190 0 -190 Q-26 -190 -36 -168" fill="#5a3a22"/>
    <path d="M-24 -146 Q0 -118 24 -146 Q18 -130 0 -130 Q-18 -130 -24 -146" fill="#5a3a22"/>
    <circle cx="-12" cy="-158" r="3.4" fill="#3a2b1a"/>
    <circle cx="12" cy="-158" r="3.4" fill="#3a2b1a"/>
    <path d="M-11 -142 Q0 -134 11 -142" stroke="#3a2b1a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <!-- bochechas -->
    <circle cx="-20" cy="-150" r="5" fill="#ff9a9a" opacity="0.6"/>
    <circle cx="20" cy="-150" r="5" fill="#ff9a9a" opacity="0.6"/>
  </g>
  <!-- pessoa comemorando a esquerda -->
  <g transform="translate(120 470)">
    <ellipse cx="0" cy="70" rx="52" ry="14" fill="#000" opacity="0.1"/>
    <path d="M-34 64 Q-40 -6 0 -14 Q40 -6 34 64 Z" fill="#e8873a"/>
    <path d="M-24 -20 L-40 -60 M24 -20 L40 -60" stroke="#e8b98f" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="-44" cy="-64" r="8" fill="#e8b98f"/>
    <circle cx="44" cy="-64" r="8" fill="#e8b98f"/>
    <circle cx="0" cy="-46" r="26" fill="#f0c39a"/>
    <path d="M-26 -54 Q0 -86 26 -54 Q18 -74 0 -74 Q-18 -74 -26 -54" fill="#3a2b1a"/>
    <circle cx="-9" cy="-46" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-46" r="3" fill="#3a2b1a"/>
    <path d="M-8 -34 Q0 -26 8 -34" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- pessoa comemorando a direita -->
  <g transform="translate(540 480)">
    <ellipse cx="0" cy="66" rx="52" ry="14" fill="#000" opacity="0.1"/>
    <path d="M-34 60 Q-40 -6 0 -14 Q40 -6 34 60 Z" fill="#20a4a4"/>
    <path d="M-24 -20 L-42 -56 M24 -20 L42 -56" stroke="#e8b98f" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="-46" cy="-60" r="8" fill="#e8b98f"/>
    <circle cx="46" cy="-60" r="8" fill="#e8b98f"/>
    <circle cx="0" cy="-46" r="26" fill="#e8b98f"/>
    <path d="M-26 -54 Q0 -86 26 -54 Q18 -74 0 -74 Q-18 -74 -26 -54" fill="#4a2f16"/>
    <circle cx="-9" cy="-46" r="3" fill="#3a2b1a"/>
    <circle cx="9" cy="-46" r="3" fill="#3a2b1a"/>
    <path d="M-8 -34 Q0 -26 8 -34" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- passarinhos -->
  <g stroke="#8a5a3c" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7">
    <path d="M150 130 q14 -14 28 0 q14 -14 28 0"/>
    <path d="M600 110 q12 -12 24 0 q12 -12 24 0"/>
  </g>
</svg>`,
});

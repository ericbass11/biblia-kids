/* Ilustrações da história "Jonas e o Grande Peixe".
   Estilo livro infantil moderno, vetorial flat, cores quentes, rostos fofos.
   Indexado por "<storyId>:<scene>". */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  /* ---------------------------------------------------------------- */
  "jonas:jonah-call": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deus chama Jonas para ir a Ninive, mas Jonas foge para o lado contrario">
  <defs>
    <linearGradient id="jc-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9c2"/>
      <stop offset="1" stop-color="#ffd28a"/>
    </linearGradient>
    <radialGradient id="jc-glow" cx="0.72" cy="0.2" r="0.55">
      <stop offset="0" stop-color="#fff8e6" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff8e6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jc-sky)"/>
  <ellipse cx="580" cy="120" rx="320" ry="240" fill="url(#jc-glow)"/>
  <!-- sol e nuvens -->
  <circle cx="580" cy="110" r="52" fill="#ffd45e"/>
  <g fill="#fff5e0" opacity="0.9">
    <ellipse cx="180" cy="110" rx="70" ry="34"/>
    <ellipse cx="240" cy="95" rx="55" ry="30"/>
    <ellipse cx="470" cy="70" rx="60" ry="28"/>
  </g>
  <!-- raios de luz do ceu (voz de Deus) -->
  <g fill="#fff3cf" opacity="0.65">
    <polygon points="580,60 500,300 560,300"/>
    <polygon points="580,60 600,300 660,300"/>
    <polygon points="580,60 690,300 740,300"/>
  </g>
  <!-- colinas -->
  <path d="M0 430 Q220 370 460 430 Q640 470 800 420 L800 600 L0 600 Z" fill="#8fce6b"/>
  <path d="M0 480 Q260 430 520 490 Q680 520 800 480 L800 600 L0 600 Z" fill="#79bd57"/>
  <!-- cidade de Ninive ao longe (para onde Deus aponta) -->
  <g transform="translate(640 320)">
    <rect x="-8" y="0" width="34" height="70" rx="6" fill="#e6b979"/>
    <rect x="30" y="-24" width="30" height="94" rx="6" fill="#d9a566"/>
    <rect x="62" y="6" width="32" height="64" rx="6" fill="#e6b979"/>
    <polygon points="7,-4 43,-4 25,-30" fill="#c98f52"/>
    <polygon points="78,2 110,2 94,-22" fill="#c98f52"/>
    <rect x="0" y="18" width="12" height="12" rx="2" fill="#fff4d6"/>
    <rect x="40" y="0" width="12" height="12" rx="2" fill="#fff4d6"/>
    <rect x="72" y="24" width="12" height="12" rx="2" fill="#fff4d6"/>
  </g>
  <!-- placa apontando -->
  <g transform="translate(300 360)">
    <rect x="-6" y="0" width="12" height="120" rx="4" fill="#a97243"/>
    <path d="M-70 -18 L60 -18 L86 6 L60 30 L-70 30 Z" fill="#c98f52"/>
    <path d="M-70 -18 L60 -18 L86 6 L60 30 L-70 30 Z" fill="none" stroke="#a2703f" stroke-width="4"/>
    <circle cx="-40" cy="6" r="6" fill="#fff4d6"/>
    <circle cx="-14" cy="6" r="6" fill="#fff4d6"/>
    <circle cx="12" cy="6" r="6" fill="#fff4d6"/>
  </g>
  <!-- Jonas foge para o lado contrario (esquerda) -->
  <g transform="translate(180 400)">
    <ellipse cx="0" cy="86" rx="60" ry="16" fill="#000" opacity="0.08"/>
    <!-- tunica -->
    <path d="M-44 78 Q-50 -14 0 -14 Q50 -14 44 78 Z" fill="#5a8f5a"/>
    <path d="M-44 78 Q-50 -14 0 -14 Q50 -14 44 78 Z" fill="none" stroke="#4a7a4a" stroke-width="3"/>
    <rect x="-46" y="40" width="92" height="12" rx="6" fill="#c9772f"/>
    <!-- bracos (um levantado como quem recusa) -->
    <path d="M-30 6 Q-64 -6 -70 -40" stroke="#f2c39a" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path d="M30 8 Q54 26 48 56" stroke="#f2c39a" stroke-width="14" fill="none" stroke-linecap="round"/>
    <!-- cabeca -->
    <circle cx="0" cy="-40" r="30" fill="#f7cfa4"/>
    <path d="M-30 -46 Q0 -84 30 -46 Q22 -66 0 -66 Q-22 -66 -30 -46" fill="#5a3d24"/>
    <!-- barba curta -->
    <path d="M-20 -28 Q0 -6 20 -28 Q14 -14 0 -12 Q-14 -14 -20 -28" fill="#6b4a2b"/>
    <circle cx="-11" cy="-42" r="3.4" fill="#3a2b1a"/>
    <circle cx="9" cy="-42" r="3.4" fill="#3a2b1a"/>
    <path d="M-14 -28 Q-6 -34 2 -28" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- pegadas fugindo -->
  <g fill="#5a3d24" opacity="0.3">
    <ellipse cx="255" cy="512" rx="12" ry="7"/>
    <ellipse cx="300" cy="528" rx="12" ry="7"/>
    <ellipse cx="345" cy="512" rx="12" ry="7"/>
  </g>
</svg>`,
  /* ---------------------------------------------------------------- */
  "jonas:jonah-ship": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jonas num navio de madeira em meio a uma tempestade forte no mar">
  <defs>
    <linearGradient id="js-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6b7ea3"/>
      <stop offset="1" stop-color="#9fb0cf"/>
    </linearGradient>
    <linearGradient id="js-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f6fb0"/>
      <stop offset="1" stop-color="#2f5590"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#js-sky)"/>
  <!-- nuvens de tempestade -->
  <g fill="#4f5f7d" opacity="0.9">
    <ellipse cx="180" cy="90" rx="120" ry="46"/>
    <ellipse cx="300" cy="70" rx="100" ry="40"/>
    <ellipse cx="560" cy="80" rx="130" ry="48"/>
    <ellipse cx="680" cy="110" rx="90" ry="38"/>
  </g>
  <!-- raio -->
  <polygon points="470,120 440,210 470,200 448,290 520,180 486,190 510,120" fill="#ffe066"/>
  <!-- chuva -->
  <g stroke="#cfe0f5" stroke-width="3" stroke-linecap="round" opacity="0.6">
    <line x1="120" y1="200" x2="108" y2="250"/>
    <line x1="200" y1="230" x2="188" y2="280"/>
    <line x1="640" y1="210" x2="628" y2="260"/>
    <line x1="720" y1="240" x2="708" y2="290"/>
    <line x1="360" y1="250" x2="348" y2="300"/>
  </g>
  <!-- mar agitado -->
  <path d="M0 360 Q120 300 240 360 Q360 420 480 360 Q600 300 720 360 Q780 390 800 360 L800 600 L0 600 Z" fill="url(#js-sea)"/>
  <path d="M0 440 Q140 390 280 440 Q420 490 560 440 Q700 390 800 440 L800 600 L0 600 Z" fill="#2a4c82" opacity="0.7"/>
  <!-- espuma -->
  <g fill="#eaf3ff" opacity="0.85">
    <ellipse cx="120" cy="352" rx="34" ry="12"/>
    <ellipse cx="470" cy="356" rx="40" ry="14"/>
    <ellipse cx="700" cy="356" rx="30" ry="12"/>
  </g>
  <!-- navio de madeira inclinado -->
  <g transform="translate(400 350) rotate(-9)">
    <ellipse cx="0" cy="70" rx="180" ry="20" fill="#000" opacity="0.12"/>
    <!-- casco -->
    <path d="M-170 0 Q-150 70 -60 78 L120 78 Q170 70 176 4 Q90 34 -20 30 Q-110 26 -170 0 Z" fill="#9c5f34"/>
    <path d="M-170 0 Q-150 70 -60 78 L120 78 Q170 70 176 4" fill="none" stroke="#7d4a26" stroke-width="4"/>
    <!-- ripas do casco -->
    <path d="M-150 24 Q0 48 168 22" stroke="#7d4a26" stroke-width="3" fill="none" opacity="0.6"/>
    <path d="M-140 46 Q0 66 150 44" stroke="#7d4a26" stroke-width="3" fill="none" opacity="0.6"/>
    <!-- convite/borda -->
    <rect x="-150" y="-10" width="320" height="14" rx="6" fill="#b57a44"/>
    <!-- mastro e vela rasgada -->
    <rect x="-6" y="-160" width="12" height="160" rx="4" fill="#7d4a26"/>
    <path d="M8 -150 Q90 -120 70 -30 Q40 -60 8 -40 Z" fill="#f4ead2"/>
    <path d="M8 -150 Q90 -120 70 -30 Q40 -60 8 -40 Z" fill="none" stroke="#d8c9a6" stroke-width="3"/>
    <!-- bandeirinha -->
    <path d="M6 -160 L40 -150 L6 -140 Z" fill="#e0553f"/>
    <!-- Jonas assustado a bordo -->
    <g transform="translate(-70 -20)">
      <path d="M-24 40 Q-28 -6 0 -6 Q28 -6 24 40 Z" fill="#5a8f5a"/>
      <rect x="-26" y="20" width="52" height="8" rx="4" fill="#c9772f"/>
      <circle cx="0" cy="-26" r="20" fill="#f7cfa4"/>
      <path d="M-20 -30 Q0 -56 20 -30 Q14 -44 0 -44 Q-14 -44 -20 -30" fill="#5a3d24"/>
      <path d="M-13 -18 Q0 -4 13 -18 Q9 -8 0 -8 Q-9 -8 -13 -18" fill="#6b4a2b"/>
      <circle cx="-7" cy="-27" r="2.6" fill="#3a2b1a"/>
      <circle cx="7" cy="-27" r="2.6" fill="#3a2b1a"/>
      <ellipse cx="0" cy="-15" rx="4" ry="5" fill="#3a2b1a"/>
      <path d="M-10 6 Q-30 -2 -34 -22" stroke="#f2c39a" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M10 6 Q30 -2 34 -22" stroke="#f2c39a" stroke-width="10" fill="none" stroke-linecap="round"/>
    </g>
  </g>
</svg>`,
  /* ---------------------------------------------------------------- */
  "jonas:jonah-sea": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jonas cai no mar e um peixe enorme e simpatico aparece para engoli-lo">
  <defs>
    <linearGradient id="jw-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8fa6cc"/>
      <stop offset="1" stop-color="#bcc9e2"/>
    </linearGradient>
    <linearGradient id="jw-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#4f86c6"/>
      <stop offset="1" stop-color="#2f5f9c"/>
    </linearGradient>
    <linearGradient id="jw-fish" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6fc3d6"/>
      <stop offset="1" stop-color="#3f9fbb"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jw-sky)"/>
  <!-- nuvens -->
  <g fill="#eef2fb" opacity="0.9">
    <ellipse cx="160" cy="80" rx="80" ry="30"/>
    <ellipse cx="230" cy="66" rx="60" ry="26"/>
  </g>
  <!-- mar -->
  <path d="M0 200 Q120 160 240 200 Q360 240 480 200 Q600 160 720 200 Q780 220 800 200 L800 600 L0 600 Z" fill="url(#jw-sea)"/>
  <!-- ondas decorativas -->
  <g stroke="#bcd8f2" stroke-width="4" fill="none" opacity="0.5">
    <path d="M40 260 Q80 244 120 260 Q160 276 200 260"/>
    <path d="M560 300 Q600 284 640 300 Q680 316 720 300"/>
  </g>
  <!-- bolhas -->
  <g fill="#dff0ff" opacity="0.7">
    <circle cx="150" cy="360" r="10"/>
    <circle cx="180" cy="330" r="6"/>
    <circle cx="130" cy="410" r="7"/>
    <circle cx="690" cy="430" r="9"/>
    <circle cx="660" cy="400" r="5"/>
  </g>
  <!-- peixe gigante simpatico surgindo da direita -->
  <g transform="translate(520 360)">
    <!-- cauda -->
    <path d="M210 -20 Q300 -90 320 -30 Q300 0 250 8 Z" fill="url(#jw-fish)"/>
    <path d="M210 30 Q300 90 320 40 Q300 14 250 6 Z" fill="url(#jw-fish)"/>
    <!-- corpo -->
    <path d="M-190 10 Q-140 -150 60 -140 Q230 -130 250 6 Q230 150 60 150 Q-140 150 -190 10 Z" fill="url(#jw-fish)"/>
    <!-- barriga clara -->
    <path d="M-150 60 Q-40 150 90 145 Q200 140 230 60 Q120 120 -150 60 Z" fill="#d7f0f4"/>
    <!-- nadadeira superior -->
    <path d="M40 -140 Q70 -196 120 -150 Q90 -142 60 -140 Z" fill="#3f9fbb"/>
    <!-- nadadeira lateral -->
    <path d="M20 70 Q40 140 100 120 Q70 96 40 76 Z" fill="#3f9fbb"/>
    <!-- boca aberta gigante e fofa -->
    <path d="M-190 10 Q-150 -70 -70 -74 Q-40 -30 -40 10 Q-40 50 -70 92 Q-150 88 -190 10 Z" fill="#f4a6b0"/>
    <path d="M-190 10 Q-150 -30 -70 -30 Q-40 -10 -40 10 Q-40 30 -70 50 Q-150 50 -190 10 Z" fill="#d8737f"/>
    <!-- dentes arredondados (nao assustadores) -->
    <g fill="#ffffff">
      <path d="M-150 -48 q10 12 20 0 z"/>
      <path d="M-118 -56 q10 12 20 0 z"/>
      <path d="M-150 66 q10 -12 20 0 z"/>
      <path d="M-118 74 q10 -12 20 0 z"/>
    </g>
    <!-- olho fofo -->
    <circle cx="30" cy="-56" r="26" fill="#ffffff"/>
    <circle cx="36" cy="-52" r="14" fill="#2b3a4a"/>
    <circle cx="42" cy="-58" r="5" fill="#ffffff"/>
    <path d="M4 -84 Q30 -100 56 -84" stroke="#2f7c92" stroke-width="5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Jonas caindo no mar -->
  <g transform="translate(210 300) rotate(20)">
    <path d="M-22 40 Q-26 -4 0 -4 Q26 -4 22 40 Z" fill="#5a8f5a"/>
    <rect x="-24" y="20" width="48" height="8" rx="4" fill="#c9772f"/>
    <circle cx="0" cy="-24" r="19" fill="#f7cfa4"/>
    <path d="M-19 -28 Q0 -52 19 -28 Q13 -42 0 -42 Q-13 -42 -19 -28" fill="#5a3d24"/>
    <path d="M-12 -16 Q0 -3 12 -16 Q8 -7 0 -7 Q-8 -7 -12 -16" fill="#6b4a2b"/>
    <circle cx="-6" cy="-25" r="2.5" fill="#3a2b1a"/>
    <circle cx="6" cy="-25" r="2.5" fill="#3a2b1a"/>
    <ellipse cx="0" cy="-13" rx="3.4" ry="4.4" fill="#3a2b1a"/>
    <path d="M-8 4 Q-32 -6 -40 -30" stroke="#f2c39a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M8 4 Q30 -8 40 -30" stroke="#f2c39a" stroke-width="10" fill="none" stroke-linecap="round"/>
  </g>
  <!-- respingos -->
  <g fill="#eaf3ff" opacity="0.9">
    <circle cx="250" cy="345" r="9"/>
    <circle cx="270" cy="320" r="6"/>
    <circle cx="230" cy="330" r="5"/>
  </g>
</svg>`,
  /* ---------------------------------------------------------------- */
  "jonas:jonah-belly": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jonas rezando dentro da barriga aconchegante do grande peixe">
  <defs>
    <radialGradient id="jb-belly" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0" stop-color="#ffd9c2"/>
      <stop offset="1" stop-color="#e6889a"/>
    </radialGradient>
    <radialGradient id="jb-glow" cx="0.5" cy="0.4" r="0.5">
      <stop offset="0" stop-color="#fff4d9" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff4d9" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- fundo escuro da barriga -->
  <rect width="800" height="600" fill="#a85c66"/>
  <!-- interior aconchegante -->
  <path d="M400 30 Q740 90 760 320 Q740 560 400 580 Q60 560 40 320 Q60 90 400 30 Z" fill="url(#jb-belly)"/>
  <!-- costelas arredondadas do peixe (decorativas, suaves) -->
  <g stroke="#d98a8a" stroke-width="14" fill="none" opacity="0.6" stroke-linecap="round">
    <path d="M120 150 Q90 300 130 460"/>
    <path d="M200 110 Q170 300 210 500"/>
    <path d="M680 150 Q710 300 670 460"/>
    <path d="M600 110 Q630 300 590 500"/>
  </g>
  <!-- pocinha de agua no fundo -->
  <path d="M120 520 Q400 470 680 520 Q680 560 400 560 Q120 560 120 520 Z" fill="#4f86c6" opacity="0.7"/>
  <g fill="#dff0ff" opacity="0.6">
    <circle cx="260" cy="512" r="6"/>
    <circle cx="520" cy="516" r="5"/>
    <circle cx="600" cy="500" r="4"/>
  </g>
  <!-- pequenas plantinhas/algas engolidas (detalhe) -->
  <g fill="#5aa06a" opacity="0.7">
    <path d="M180 520 Q170 470 190 440 Q200 480 200 520 Z"/>
    <path d="M640 520 Q650 470 630 440 Q622 480 620 520 Z"/>
  </g>
  <!-- luz suave sobre Jonas -->
  <ellipse cx="400" cy="320" rx="260" ry="240" fill="url(#jb-glow)"/>
  <!-- Jonas rezando (joelhos, maos juntas, olhando para cima) -->
  <g transform="translate(400 380)">
    <ellipse cx="0" cy="120" rx="90" ry="20" fill="#000" opacity="0.1"/>
    <!-- tunica sentada -->
    <path d="M-70 120 Q-90 30 0 20 Q90 30 70 120 Z" fill="#5a8f5a"/>
    <path d="M-70 120 Q-90 30 0 20 Q90 30 70 120 Z" fill="none" stroke="#4a7a4a" stroke-width="3"/>
    <rect x="-72" y="86" width="144" height="12" rx="6" fill="#c9772f"/>
    <!-- bracos em oracao -->
    <path d="M-18 34 Q-30 -40 -6 -78 M18 34 Q30 -40 6 -78" stroke="#f2c39a" stroke-width="15" fill="none" stroke-linecap="round"/>
    <path d="M0 -96 l12 20 -24 0 z" fill="#f2c39a"/>
    <!-- cabeca olhando para cima -->
    <circle cx="0" cy="-40" r="32" fill="#f7cfa4"/>
    <path d="M-32 -48 Q0 -88 32 -48 Q24 -70 0 -70 Q-24 -70 -32 -48" fill="#5a3d24"/>
    <!-- barba curta -->
    <path d="M-22 -26 Q0 0 22 -26 Q15 -12 0 -10 Q-15 -12 -22 -26" fill="#6b4a2b"/>
    <circle cx="-11" cy="-44" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-44" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -30 Q0 -24 9 -30" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <!-- estrelinhas de esperanca -->
  <g fill="#ffd45e" opacity="0.9">
    <path d="M250 180 l5 12 13 1 -10 9 3 13 -11-7 -11 7 3-13 -10-9 13-1z"/>
    <path d="M560 200 l4 10 11 1 -8 7 2 11 -9-6 -9 6 2-11 -8-7 11-1z"/>
    <circle cx="330" cy="140" r="4"/>
    <circle cx="480" cy="150" r="3"/>
  </g>
</svg>`,
  /* ---------------------------------------------------------------- */
  "jonas:jonah-free": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O grande peixe leva Jonas ate a praia e o solta na areia">
  <defs>
    <linearGradient id="jf-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9c2"/>
      <stop offset="1" stop-color="#ffd7a0"/>
    </linearGradient>
    <linearGradient id="jf-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5fa0d4"/>
      <stop offset="1" stop-color="#3f7ab0"/>
    </linearGradient>
    <linearGradient id="jf-fish" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6fc3d6"/>
      <stop offset="1" stop-color="#3f9fbb"/>
    </linearGradient>
    <radialGradient id="jf-sun" cx="0.2" cy="0.2" r="0.5">
      <stop offset="0" stop-color="#fff6df" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff6df" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jf-sky)"/>
  <ellipse cx="140" cy="120" rx="300" ry="220" fill="url(#jf-sun)"/>
  <circle cx="130" cy="110" r="48" fill="#ffd45e"/>
  <g fill="#fff5e0" opacity="0.9">
    <ellipse cx="470" cy="90" rx="70" ry="30"/>
    <ellipse cx="540" cy="76" rx="50" ry="24"/>
  </g>
  <!-- gaivotas -->
  <g stroke="#7a6b52" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M340 130 Q356 118 372 130 Q388 118 404 130"/>
    <path d="M420 100 Q432 90 444 100 Q456 90 468 100"/>
  </g>
  <!-- mar -->
  <path d="M0 300 Q200 270 400 300 Q600 330 800 300 L800 460 L0 460 Z" fill="url(#jf-sea)"/>
  <g stroke="#bcd8f2" stroke-width="4" fill="none" opacity="0.5">
    <path d="M60 330 Q100 316 140 330 Q180 344 220 330"/>
    <path d="M560 340 Q600 326 640 340 Q680 354 720 340"/>
  </g>
  <!-- praia de areia -->
  <path d="M0 400 Q400 350 800 400 L800 600 L0 600 Z" fill="#f2d79b"/>
  <path d="M0 440 Q400 400 800 440 L800 600 L0 600 Z" fill="#e8c67e"/>
  <!-- espuma na beira -->
  <path d="M0 402 Q200 384 400 402 Q600 420 800 402" fill="none" stroke="#eaf3ff" stroke-width="8" opacity="0.8"/>
  <!-- conchas e estrela do mar -->
  <g>
    <path d="M120 520 q16 -22 32 0 q-16 8 -32 0z" fill="#f7b6b6"/>
    <g fill="#f0964f" transform="translate(660 500)">
      <path d="M0 -18 L6 -4 20 -4 8 6 12 20 0 11 -12 20 -8 6 -20 -4 -6 -4z"/>
    </g>
    <circle cx="230" cy="540" r="6" fill="#f2d79b" stroke="#c9a35f" stroke-width="3"/>
  </g>
  <!-- peixe gigante amigavel meio na agua, despedindo-se -->
  <g transform="translate(560 300)">
    <path d="M170 -30 Q250 -90 268 -34 Q250 -6 205 0 Z" fill="url(#jf-fish)"/>
    <path d="M170 20 Q250 80 268 24 Q250 -2 205 2 Z" fill="url(#jf-fish)"/>
    <path d="M-150 6 Q-110 -120 60 -114 Q200 -108 216 4 Q200 118 60 118 Q-110 118 -150 6 Z" fill="url(#jf-fish)"/>
    <path d="M-110 50 Q0 120 110 116 Q180 110 200 54 Q100 100 -110 50 Z" fill="#d7f0f4"/>
    <path d="M40 -114 Q70 -164 116 -122 Q86 -114 60 -114 Z" fill="#3f9fbb"/>
    <!-- jato dagua fofo -->
    <path d="M60 -120 Q56 -180 76 -190" stroke="#bcd8f2" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.8"/>
    <circle cx="80" cy="-196" r="8" fill="#dff0ff" opacity="0.8"/>
    <circle cx="60" cy="-176" r="6" fill="#dff0ff" opacity="0.8"/>
    <!-- olho fofo e sorriso -->
    <circle cx="10" cy="-40" r="24" fill="#ffffff"/>
    <circle cx="4" cy="-38" r="13" fill="#2b3a4a"/>
    <circle cx="-1" cy="-43" r="4.5" fill="#ffffff"/>
    <path d="M-120 30 Q-90 60 -40 54" stroke="#2f7c92" stroke-width="6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Jonas na areia, aliviado, sentado -->
  <g transform="translate(280 430)">
    <ellipse cx="0" cy="70" rx="80" ry="18" fill="#000" opacity="0.08"/>
    <!-- pernas/tunica sentado -->
    <path d="M-58 70 Q-70 6 0 0 Q70 6 58 70 Z" fill="#5a8f5a"/>
    <rect x="-60" y="40" width="120" height="12" rx="6" fill="#c9772f"/>
    <!-- braco erguido feliz -->
    <path d="M-16 16 Q-46 -6 -50 -46" stroke="#f2c39a" stroke-width="13" fill="none" stroke-linecap="round"/>
    <path d="M16 16 Q40 30 36 58" stroke="#f2c39a" stroke-width="13" fill="none" stroke-linecap="round"/>
    <!-- cabeca -->
    <circle cx="0" cy="-30" r="28" fill="#f7cfa4"/>
    <path d="M-28 -36 Q0 -74 28 -36 Q21 -56 0 -56 Q-21 -56 -28 -36" fill="#5a3d24"/>
    <path d="M-18 -18 Q0 4 18 -18 Q12 -8 0 -6 Q-12 -8 -18 -18" fill="#6b4a2b"/>
    <circle cx="-10" cy="-32" r="3" fill="#3a2b1a"/>
    <circle cx="10" cy="-32" r="3" fill="#3a2b1a"/>
    <path d="M-11 -20 Q0 -12 11 -20" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,
  /* ---------------------------------------------------------------- */
  "jonas:nineveh": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jonas na cidade de Ninive contando do amor de Deus e as pessoas felizes">
  <defs>
    <linearGradient id="jn-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe6b0"/>
      <stop offset="1" stop-color="#ffd07a"/>
    </linearGradient>
    <radialGradient id="jn-sun" cx="0.5" cy="0.18" r="0.5">
      <stop offset="0" stop-color="#fff6df" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fff6df" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#jn-sky)"/>
  <ellipse cx="400" cy="110" rx="340" ry="220" fill="url(#jn-sun)"/>
  <circle cx="400" cy="95" r="46" fill="#ffd45e"/>
  <g fill="#fff5e0" opacity="0.85">
    <ellipse cx="150" cy="90" rx="66" ry="28"/>
    <ellipse cx="660" cy="100" rx="70" ry="30"/>
  </g>
  <!-- cidade de Ninive com muralhas e torres -->
  <g>
    <!-- muralha -->
    <rect x="60" y="250" width="680" height="120" rx="10" fill="#e0b06f"/>
    <path d="M60 250 h680" stroke="#c98f52" stroke-width="4"/>
    <!-- ameias -->
    <g fill="#e0b06f">
      <rect x="70" y="234" width="26" height="22"/>
      <rect x="120" y="234" width="26" height="22"/>
      <rect x="170" y="234" width="26" height="22"/>
      <rect x="604" y="234" width="26" height="22"/>
      <rect x="654" y="234" width="26" height="22"/>
      <rect x="704" y="234" width="26" height="22"/>
    </g>
    <!-- torres -->
    <rect x="120" y="150" width="70" height="220" rx="8" fill="#d9a566"/>
    <rect x="610" y="150" width="70" height="220" rx="8" fill="#d9a566"/>
    <polygon points="115,150 195,150 155,108" fill="#c98f52"/>
    <polygon points="605,150 685,150 645,108" fill="#c98f52"/>
    <!-- bandeirinhas -->
    <rect x="153" y="86" width="4" height="24" fill="#7d4a26"/>
    <path d="M157 88 L184 96 L157 104 Z" fill="#e0553f"/>
    <rect x="643" y="86" width="4" height="24" fill="#7d4a26"/>
    <path d="M647 88 L674 96 L647 104 Z" fill="#e0553f"/>
    <!-- portao -->
    <path d="M360 370 L360 280 Q400 250 440 280 L440 370 Z" fill="#9c5f34"/>
    <path d="M360 370 L360 280 Q400 250 440 280 L440 370" fill="none" stroke="#7d4a26" stroke-width="4"/>
    <line x1="400" y1="262" x2="400" y2="370" stroke="#7d4a26" stroke-width="3"/>
    <!-- janelas das torres -->
    <rect x="142" y="180" width="26" height="30" rx="4" fill="#fff4d6"/>
    <rect x="632" y="180" width="26" height="30" rx="4" fill="#fff4d6"/>
    <!-- casinhas atras -->
    <rect x="230" y="200" width="60" height="60" rx="6" fill="#e6b979"/>
    <rect x="300" y="180" width="60" height="80" rx="6" fill="#d9a566"/>
    <rect x="480" y="190" width="60" height="70" rx="6" fill="#e6b979"/>
    <rect x="540" y="205" width="55" height="55" rx="6" fill="#d9a566"/>
  </g>
  <!-- chao -->
  <path d="M0 400 Q400 372 800 400 L800 600 L0 600 Z" fill="#e8c67e"/>
  <path d="M0 440 Q400 415 800 440 L800 600 L0 600 Z" fill="#d9b467"/>
  <!-- Jonas pregando (bracos abertos, feliz) -->
  <g transform="translate(400 440)">
    <ellipse cx="0" cy="90" rx="70" ry="18" fill="#000" opacity="0.08"/>
    <path d="M-46 90 Q-52 -6 0 -8 Q52 -6 46 90 Z" fill="#5a8f5a"/>
    <path d="M-46 90 Q-52 -6 0 -8 Q52 -6 46 90 Z" fill="none" stroke="#4a7a4a" stroke-width="3"/>
    <rect x="-48" y="52" width="96" height="12" rx="6" fill="#c9772f"/>
    <!-- bracos abertos -->
    <path d="M-24 6 Q-58 -14 -70 -50" stroke="#f2c39a" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path d="M24 6 Q58 -14 70 -50" stroke="#f2c39a" stroke-width="14" fill="none" stroke-linecap="round"/>
    <circle cx="-72" cy="-54" r="8" fill="#f2c39a"/>
    <circle cx="72" cy="-54" r="8" fill="#f2c39a"/>
    <!-- cabeca -->
    <circle cx="0" cy="-42" r="30" fill="#f7cfa4"/>
    <path d="M-30 -48 Q0 -86 30 -48 Q22 -68 0 -68 Q-22 -68 -30 -48" fill="#5a3d24"/>
    <path d="M-20 -28 Q0 -4 20 -28 Q13 -14 0 -12 Q-13 -14 -20 -28" fill="#6b4a2b"/>
    <circle cx="-11" cy="-44" r="3.2" fill="#3a2b1a"/>
    <circle cx="11" cy="-44" r="3.2" fill="#3a2b1a"/>
    <path d="M-11 -30 Q0 -20 11 -30" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  </g>
  <!-- pessoas de Ninive felizes ouvindo -->
  <g transform="translate(150 480)">
    <path d="M-22 70 Q-26 4 0 2 Q26 4 22 70 Z" fill="#c9772f"/>
    <circle cx="0" cy="-22" r="20" fill="#e8b98a"/>
    <path d="M-20 -26 Q0 -50 20 -26 Q13 -40 0 -40 Q-13 -40 -20 -26" fill="#3a2b1a"/>
    <circle cx="-7" cy="-23" r="2.6" fill="#3a2b1a"/>
    <circle cx="7" cy="-23" r="2.6" fill="#3a2b1a"/>
    <path d="M-8 -12 Q0 -4 8 -12" stroke="#3a2b1a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <g transform="translate(640 486)">
    <path d="M-24 70 Q-28 2 0 0 Q28 2 24 70 Z" fill="#7a8fd0"/>
    <circle cx="0" cy="-24" r="21" fill="#f2c39a"/>
    <path d="M-21 -28 Q0 -54 21 -28 Q14 -44 0 -44 Q-14 -44 -21 -28" fill="#5a3d24"/>
    <circle cx="-7" cy="-25" r="2.8" fill="#3a2b1a"/>
    <circle cx="7" cy="-25" r="2.8" fill="#3a2b1a"/>
    <path d="M-9 -14 Q0 -5 9 -14" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <!-- crianca ao lado -->
    <g transform="translate(-34 24)">
      <path d="M-14 46 Q-16 6 0 4 Q16 6 14 46 Z" fill="#e0553f"/>
      <circle cx="0" cy="-14" r="14" fill="#e8b98a"/>
      <path d="M-14 -18 Q0 -34 14 -18 Q9 -28 0 -28 Q-9 -28 -14 -18" fill="#3a2b1a"/>
      <circle cx="-5" cy="-15" r="2" fill="#3a2b1a"/>
      <circle cx="5" cy="-15" r="2" fill="#3a2b1a"/>
      <path d="M-6 -8 Q0 -2 6 -8" stroke="#3a2b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g>
  </g>
  <!-- coracoes de amor flutuando -->
  <g fill="#e0553f" opacity="0.9">
    <path d="M400 250 q-14 -18 -28 -4 q-14 14 28 40 q42 -26 28 -40 q-14 -14 -28 4z" transform="scale(0.5) translate(400 40)"/>
    <path d="M300 300 q-10 -13 -20 -3 q-10 10 20 28 q30 -18 20 -28 q-10 -10 -20 3z"/>
    <path d="M520 320 q-8 -11 -16 -2 q-8 8 16 23 q24 -15 16 -23 q-8 -9 -16 2z"/>
  </g>
</svg>`,
});

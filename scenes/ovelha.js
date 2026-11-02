/* Cenas ilustradas para a historia "A Ovelha Perdida" (Lucas 15).
   Estilo livro infantil moderno, vetorial flat, cores quentes. */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  /* Cena 1: o rebanho feliz com o pastor */
  "ovelha:flock": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O bom pastor cuidando de seu rebanho de ovelhinhas em uma colina verde ensolarada">
    <defs>
      <linearGradient id="fl-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffe9c2"/>
        <stop offset="1" stop-color="#cfeafc"/>
      </linearGradient>
      <radialGradient id="fl-sun" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#fff6d8"/>
        <stop offset="1" stop-color="#ffd873"/>
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#fl-sky)"/>
    <circle cx="120" cy="110" r="62" fill="url(#fl-sun)"/>
    <g fill="#ffe07a" opacity="0.7">
      <rect x="112" y="16" width="16" height="34" rx="8"/>
      <rect x="112" y="170" width="16" height="34" rx="8"/>
      <rect x="18" y="102" width="34" height="16" rx="8"/>
      <rect x="188" y="102" width="34" height="16" rx="8"/>
    </g>
    <g fill="#ffffff" opacity="0.92">
      <ellipse cx="560" cy="120" rx="70" ry="34"/>
      <ellipse cx="610" cy="100" rx="52" ry="30"/>
      <ellipse cx="510" cy="105" rx="46" ry="26"/>
      <ellipse cx="330" cy="80" rx="52" ry="26"/>
      <ellipse cx="378" cy="66" rx="40" ry="22"/>
    </g>
    <path d="M0 330 Q200 270 400 320 Q600 370 800 300 L800 600 L0 600 Z" fill="#9ad86f"/>
    <path d="M0 420 Q220 370 440 415 Q640 455 800 400 L800 600 L0 600 Z" fill="#7ec455"/>
    <path d="M0 500 Q260 460 520 500 Q680 524 800 490 L800 600 L0 600 Z" fill="#66ac41"/>
    <g fill="#ff8fb0">
      <g transform="translate(80 470)"><circle cx="0" cy="0" r="8"/><circle cx="-12" cy="-6" r="7"/><circle cx="12" cy="-6" r="7"/><circle cx="0" cy="-14" r="7"/><circle cx="0" cy="0" r="4" fill="#fff3a0"/></g>
      <g transform="translate(720 520)"><circle cx="0" cy="0" r="8"/><circle cx="-12" cy="-6" r="7"/><circle cx="12" cy="-6" r="7"/><circle cx="0" cy="-14" r="7"/><circle cx="0" cy="0" r="4" fill="#fff3a0"/></g>
    </g>
    <g fill="#f6d24c">
      <g transform="translate(180 540)"><circle cx="0" cy="0" r="7"/><circle cx="-10" cy="-5" r="6"/><circle cx="10" cy="-5" r="6"/><circle cx="0" cy="-12" r="6"/></g>
      <g transform="translate(620 470)"><circle cx="0" cy="0" r="7"/><circle cx="-10" cy="-5" r="6"/><circle cx="10" cy="-5" r="6"/><circle cx="0" cy="-12" r="6"/></g>
    </g>
    <!-- pastor -->
    <g transform="translate(250 300)">
      <ellipse cx="0" cy="150" rx="70" ry="18" fill="#000" opacity="0.08"/>
      <path d="M18 30 Q26 150 30 160 L120 175" stroke="#8a5a2b" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M120 175 q28 -10 20 -34 q-24 2 -20 34" fill="none" stroke="#8a5a2b" stroke-width="9" stroke-linecap="round"/>
      <path d="M-46 150 Q-52 40 0 40 Q52 40 46 150 Z" fill="#7c9fe0"/>
      <path d="M-46 150 Q-52 40 0 40 L0 150 Z" fill="#6b8ed0"/>
      <path d="M0 60 L0 150" stroke="#e7b23c" stroke-width="9"/>
      <path d="M-24 44 L-14 6 M24 44 L14 6" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round" fill="none"/>
      <circle cx="0" cy="-34" r="32" fill="#f5cfa6"/>
      <path d="M-34 -40 Q0 -80 34 -40 Q40 -30 34 -20 Q0 -58 -34 -20 Q-40 -30 -34 -40" fill="#5b3a20"/>
      <path d="M-34 -42 Q0 -60 34 -42 L38 -38 Q0 -52 -38 -38 Z" fill="#d9483f"/>
      <circle cx="-11" cy="-34" r="3.4" fill="#3a2b1a"/>
      <circle cx="11" cy="-34" r="3.4" fill="#3a2b1a"/>
      <circle cx="-18" cy="-26" r="5" fill="#ff9db0" opacity="0.6"/>
      <circle cx="18" cy="-26" r="5" fill="#ff9db0" opacity="0.6"/>
      <path d="M-9 -20 Q0 -12 9 -20" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>
    <!-- ovelhinhas do rebanho -->
    <g transform="translate(430 400)">
      <ellipse cx="0" cy="42" rx="52" ry="12" fill="#000" opacity="0.08"/>
      <circle cx="-26" cy="0" r="24" fill="#f3f6fb"/><circle cx="26" cy="0" r="24" fill="#f3f6fb"/>
      <circle cx="0" cy="-18" r="26" fill="#f3f6fb"/><circle cx="-18" cy="18" r="24" fill="#f3f6fb"/><circle cx="18" cy="18" r="24" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#ffffff"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#4a3b30"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#4a3b30"/>
      <circle cx="-42" cy="0" r="20" fill="#3a3230"/>
      <ellipse cx="-58" cy="-10" rx="8" ry="12" fill="#2c2624"/><ellipse cx="-30" cy="-16" rx="7" ry="11" fill="#2c2624"/>
      <circle cx="-47" cy="-3" r="3.2" fill="#fff"/><circle cx="-37" cy="-3" r="3.2" fill="#fff"/>
      <circle cx="-46.5" cy="-2.5" r="1.6" fill="#000"/><circle cx="-37.5" cy="-2.5" r="1.6" fill="#000"/>
      <ellipse cx="-42" cy="6" rx="4" ry="3" fill="#5b4a42"/>
    </g>
    <g transform="translate(600 440) scale(0.85)">
      <ellipse cx="0" cy="42" rx="52" ry="12" fill="#000" opacity="0.08"/>
      <circle cx="-26" cy="0" r="24" fill="#f3f6fb"/><circle cx="26" cy="0" r="24" fill="#f3f6fb"/>
      <circle cx="0" cy="-18" r="26" fill="#f3f6fb"/><circle cx="-18" cy="18" r="24" fill="#f3f6fb"/><circle cx="18" cy="18" r="24" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#ffffff"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#4a3b30"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#4a3b30"/>
      <circle cx="42" cy="0" r="20" fill="#3a3230"/>
      <ellipse cx="58" cy="-10" rx="8" ry="12" fill="#2c2624"/><ellipse cx="30" cy="-16" rx="7" ry="11" fill="#2c2624"/>
      <circle cx="37" cy="-3" r="3.2" fill="#fff"/><circle cx="47" cy="-3" r="3.2" fill="#fff"/>
      <circle cx="37.5" cy="-2.5" r="1.6" fill="#000"/><circle cx="46.5" cy="-2.5" r="1.6" fill="#000"/>
      <ellipse cx="42" cy="6" rx="4" ry="3" fill="#5b4a42"/>
    </g>
    <g transform="translate(520 500) scale(0.7)">
      <ellipse cx="0" cy="42" rx="52" ry="12" fill="#000" opacity="0.08"/>
      <circle cx="-26" cy="0" r="24" fill="#f3f6fb"/><circle cx="26" cy="0" r="24" fill="#f3f6fb"/>
      <circle cx="0" cy="-18" r="26" fill="#f3f6fb"/><circle cx="-18" cy="18" r="24" fill="#f3f6fb"/><circle cx="18" cy="18" r="24" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#ffffff"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#4a3b30"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#4a3b30"/>
      <circle cx="-42" cy="0" r="20" fill="#3a3230"/>
      <ellipse cx="-58" cy="-10" rx="8" ry="12" fill="#2c2624"/><ellipse cx="-30" cy="-16" rx="7" ry="11" fill="#2c2624"/>
      <circle cx="-47" cy="-3" r="3.2" fill="#fff"/><circle cx="-37" cy="-3" r="3.2" fill="#fff"/>
      <circle cx="-46.5" cy="-2.5" r="1.6" fill="#000"/><circle cx="-37.5" cy="-2.5" r="1.6" fill="#000"/>
      <ellipse cx="-42" cy="6" rx="4" ry="3" fill="#5b4a42"/>
    </g>
  </svg>`,

  /* Cena 2: a ovelhinha perdida, sozinha no escuro */
  "ovelha:lost-sheep": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ovelhinha perdida sozinha e assustada na noite escura entre as pedras">
    <defs>
      <linearGradient id="ls-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2b55"/>
        <stop offset="1" stop-color="#5a5b8f"/>
      </linearGradient>
      <radialGradient id="ls-moon" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#fff9e6"/>
        <stop offset="1" stop-color="#f2e2a6"/>
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#ls-sky)"/>
    <circle cx="650" cy="120" r="66" fill="url(#ls-moon)"/>
    <circle cx="628" cy="104" r="14" fill="#e9d792" opacity="0.5"/>
    <circle cx="668" cy="140" r="9" fill="#e9d792" opacity="0.5"/>
    <g fill="#fff7d6">
      <path d="M120 90 l6 16 17 2 -12 12 3 17 -14-9 -14 9 3-17 -12-12 17-2z"/>
      <path d="M300 60 l5 12 13 1 -9 9 2 13 -11-7 -11 7 2-13 -9-9 13-1z"/>
      <path d="M470 110 l4 10 11 1 -8 8 2 11 -9-6 -9 6 2-11 -8-8 11-1z"/>
      <circle cx="200" cy="160" r="3"/><circle cx="380" cy="120" r="2.6"/>
      <circle cx="540" cy="70" r="2.6"/><circle cx="90" cy="200" r="2.6"/>
      <circle cx="720" cy="220" r="3"/><circle cx="250" cy="220" r="2.2"/>
    </g>
    <path d="M0 360 Q200 320 400 355 Q600 390 800 350 L800 600 L0 600 Z" fill="#3b3d63"/>
    <path d="M0 450 Q220 415 460 450 Q650 480 800 440 L800 600 L0 600 Z" fill="#2f3152"/>
    <!-- pedras escuras -->
    <g fill="#26283f">
      <ellipse cx="120" cy="500" rx="80" ry="40"/>
      <ellipse cx="700" cy="520" rx="90" ry="46"/>
      <ellipse cx="300" cy="560" rx="70" ry="30"/>
    </g>
    <!-- arvore seca -->
    <g stroke="#20223a" stroke-width="10" fill="none" stroke-linecap="round">
      <path d="M80 470 L80 360"/>
      <path d="M80 400 L44 360 M80 420 L118 386 M80 370 L52 340 M80 380 L108 350"/>
    </g>
    <!-- ovelhinha perdida e assustada -->
    <g transform="translate(400 430)">
      <ellipse cx="0" cy="46" rx="54" ry="12" fill="#000" opacity="0.22"/>
      <circle cx="-26" cy="0" r="24" fill="#e6ebf3"/><circle cx="26" cy="0" r="24" fill="#e6ebf3"/>
      <circle cx="0" cy="-18" r="26" fill="#e6ebf3"/><circle cx="-18" cy="18" r="24" fill="#e6ebf3"/><circle cx="18" cy="18" r="24" fill="#e6ebf3"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#f4f6fb"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#3a2f28"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#3a2f28"/>
      <circle cx="0" cy="-2" r="22" fill="#4a4038"/>
      <ellipse cx="-18" cy="-14" rx="8" ry="12" fill="#3a322c"/><ellipse cx="18" cy="-14" rx="8" ry="12" fill="#3a322c"/>
      <circle cx="-8" cy="-2" r="6" fill="#fff"/><circle cx="8" cy="-2" r="6" fill="#fff"/>
      <circle cx="-8" cy="0" r="3.4" fill="#1c1712"/><circle cx="8" cy="0" r="3.4" fill="#1c1712"/>
      <circle cx="-6.5" cy="-1.5" r="1.2" fill="#fff"/><circle cx="9.5" cy="-1.5" r="1.2" fill="#fff"/>
      <ellipse cx="0" cy="9" rx="4.5" ry="3.5" fill="#5b4a42"/>
      <path d="M-6 16 Q0 12 6 16" stroke="#3a2f28" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <ellipse cx="-16" cy="8" rx="5" ry="4" fill="#ffb0c0" opacity="0.5"/>
      <ellipse cx="16" cy="8" rx="5" ry="4" fill="#ffb0c0" opacity="0.5"/>
      <path d="M-14 -22 L-10 -30 M14 -22 L10 -30" stroke="#cfd6e2" stroke-width="3" stroke-linecap="round"/>
    </g>
  </svg>`,

  /* Cena 3: o pastor procurando por montes e vales */
  "ovelha:searching": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O bom pastor com lanterna procurando a ovelhinha perdida por montes e vales ao entardecer">
    <defs>
      <linearGradient id="se-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffd0a0"/>
        <stop offset="0.6" stop-color="#f7a97a"/>
        <stop offset="1" stop-color="#8f6fae"/>
      </linearGradient>
      <radialGradient id="se-lamp" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#fff3c4" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#fff3c4" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#se-sky)"/>
    <circle cx="640" cy="150" r="54" fill="#ffe6a6" opacity="0.85"/>
    <g fill="#fff2d0" opacity="0.6">
      <path d="M120 110 l4 10 11 1 -8 8 2 11 -9-6 -9 6 2-11 -8-8 11-1z"/>
      <circle cx="260" cy="90" r="3"/><circle cx="420" cy="70" r="2.6"/><circle cx="520" cy="120" r="2.4"/>
    </g>
    <!-- montes ao fundo -->
    <path d="M0 300 Q160 200 340 290 Q520 380 700 260 Q760 220 800 250 L800 600 L0 600 Z" fill="#c98fb0"/>
    <path d="M0 360 Q200 270 420 360 Q620 440 800 340 L800 600 L0 600 Z" fill="#a9d17a"/>
    <path d="M0 450 Q240 380 500 460 Q680 510 800 450 L800 600 L0 600 Z" fill="#8bbf5c"/>
    <path d="M0 530 Q280 490 560 530 L800 510 L800 600 L0 600 Z" fill="#71a848"/>
    <g fill="#5e8f3a" opacity="0.7">
      <ellipse cx="700" cy="470" rx="16" ry="26"/><ellipse cx="120" cy="500" rx="14" ry="22"/>
    </g>
    <!-- luz da lanterna -->
    <ellipse cx="360" cy="360" rx="150" ry="120" fill="url(#se-lamp)"/>
    <!-- pastor caminhando e olhando, cajado com lanterna -->
    <g transform="translate(430 300)">
      <ellipse cx="0" cy="180" rx="72" ry="18" fill="#000" opacity="0.1"/>
      <!-- cajado -->
      <path d="M-30 20 L-90 200" stroke="#8a5a2b" stroke-width="9" stroke-linecap="round"/>
      <!-- lanterna pendurada -->
      <g transform="translate(-90 200)">
        <rect x="-14" y="-4" width="28" height="34" rx="8" fill="#e7b23c"/>
        <rect x="-9" y="1" width="18" height="24" rx="5" fill="#fff3b0"/>
        <circle cx="0" cy="13" r="6" fill="#ffcf5c"/>
        <path d="M-12 -4 Q0 -22 12 -4" stroke="#8a5a2b" stroke-width="4" fill="none"/>
      </g>
      <!-- corpo inclinado, procurando -->
      <path d="M-48 170 Q-56 40 6 40 Q60 44 52 170 Z" fill="#c98a54"/>
      <path d="M-48 170 Q-56 40 6 40 L6 170 Z" fill="#b8794a"/>
      <path d="M6 60 L2 170" stroke="#e7b23c" stroke-width="9"/>
      <!-- braco segurando cajado -->
      <path d="M-20 60 L-34 30" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round"/>
      <path d="M24 56 L48 34" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round"/>
      <!-- cabeca olhando para baixo -->
      <circle cx="10" cy="-2" r="32" fill="#f5cfa6"/>
      <path d="M-24 -8 Q10 -48 44 -8 Q50 2 44 12 Q10 -26 -24 12 Q-30 2 -24 -8" fill="#5b3a20"/>
      <path d="M-24 -10 Q10 -28 44 -10 L48 -6 Q10 -20 -28 -6 Z" fill="#d9483f"/>
      <circle cx="-1" cy="0" r="3.4" fill="#3a2b1a"/>
      <circle cx="21" cy="0" r="3.4" fill="#3a2b1a"/>
      <path d="M2 12 Q10 16 18 12" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    </g>
    <!-- pegadas da ovelha -->
    <g fill="#5e8f3a" opacity="0.6">
      <circle cx="250" cy="470" r="5"/><circle cx="230" cy="490" r="5"/>
      <circle cx="200" cy="500" r="5"/><circle cx="180" cy="520" r="5"/>
    </g>
  </svg>`,

  /* Cena 4: encontrou! ovelha nos ombros, voltando feliz */
  "ovelha:found-sheep": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O bom pastor feliz carregando a ovelhinha encontrada nos ombros voltando para casa">
    <defs>
      <linearGradient id="fs-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff0cf"/>
        <stop offset="1" stop-color="#bfe6f7"/>
      </linearGradient>
      <radialGradient id="fs-sun" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#fff7dc"/>
        <stop offset="1" stop-color="#ffd25f"/>
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#fs-sky)"/>
    <circle cx="670" cy="120" r="66" fill="url(#fs-sun)"/>
    <g stroke="#ffe07a" stroke-width="10" stroke-linecap="round" opacity="0.7">
      <path d="M670 26 L670 4"/><path d="M756 120 L784 120"/><path d="M732 58 L752 38"/><path d="M732 182 L752 202"/>
    </g>
    <g fill="#ffffff" opacity="0.9">
      <ellipse cx="180" cy="110" rx="64" ry="30"/><ellipse cx="230" cy="92" rx="46" ry="26"/><ellipse cx="132" cy="96" rx="40" ry="22"/>
    </g>
    <path d="M0 340 Q220 280 440 330 Q640 375 800 320 L800 600 L0 600 Z" fill="#9ad86f"/>
    <path d="M0 430 Q240 380 480 425 Q660 462 800 415 L800 600 L0 600 Z" fill="#7ec455"/>
    <path d="M0 510 Q260 470 520 510 L800 490 L800 600 L0 600 Z" fill="#66ac41"/>
    <g fill="#ff8fb0">
      <g transform="translate(90 500)"><circle cx="0" cy="0" r="8"/><circle cx="-12" cy="-6" r="7"/><circle cx="12" cy="-6" r="7"/><circle cx="0" cy="-14" r="7"/><circle cx="0" cy="0" r="4" fill="#fff3a0"/></g>
      <g transform="translate(700 540)"><circle cx="0" cy="0" r="8"/><circle cx="-12" cy="-6" r="7"/><circle cx="12" cy="-6" r="7"/><circle cx="0" cy="-14" r="7"/><circle cx="0" cy="0" r="4" fill="#fff3a0"/></g>
    </g>
    <!-- passarinho -->
    <g transform="translate(150 220)" fill="#ff9d5c">
      <ellipse cx="0" cy="0" rx="14" ry="10"/><circle cx="12" cy="-4" r="7"/><path d="M-14 0 l-16 -6 6 12z"/><circle cx="14" cy="-5" r="1.8" fill="#3a2b1a"/><path d="M18 -3 l8 1 -8 3z" fill="#e7b23c"/>
    </g>
    <!-- pastor carregando a ovelha nos ombros -->
    <g transform="translate(400 300)">
      <ellipse cx="0" cy="200" rx="80" ry="20" fill="#000" opacity="0.09"/>
      <!-- cajado -->
      <path d="M52 40 L92 210" stroke="#8a5a2b" stroke-width="9" stroke-linecap="round"/>
      <path d="M52 40 q26 -8 18 -30 q-22 0 -18 30" fill="none" stroke="#8a5a2b" stroke-width="9" stroke-linecap="round"/>
      <!-- corpo -->
      <path d="M-50 195 Q-58 70 0 70 Q58 70 50 195 Z" fill="#7c9fe0"/>
      <path d="M-50 195 Q-58 70 0 70 L0 195 Z" fill="#6b8ed0"/>
      <path d="M0 90 L0 195" stroke="#e7b23c" stroke-width="9"/>
      <!-- bracos segurando as patas da ovelha por cima dos ombros -->
      <path d="M-34 78 Q-46 44 -34 20" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round" fill="none"/>
      <path d="M34 78 Q46 44 34 20" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round" fill="none"/>
      <!-- cabeca -->
      <circle cx="0" cy="16" r="32" fill="#f5cfa6"/>
      <path d="M-34 12 Q0 -28 34 12 Q40 22 34 32 Q0 -6 -34 32 Q-40 22 -34 12" fill="#5b3a20"/>
      <path d="M-34 10 Q0 -8 34 10 L38 14 Q0 0 -38 14 Z" fill="#d9483f"/>
      <circle cx="-11" cy="16" r="3.4" fill="#3a2b1a"/><circle cx="11" cy="16" r="3.4" fill="#3a2b1a"/>
      <circle cx="-18" cy="24" r="5" fill="#ff9db0" opacity="0.6"/><circle cx="18" cy="24" r="5" fill="#ff9db0" opacity="0.6"/>
      <path d="M-11 30 Q0 40 11 30" stroke="#3a2b1a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
      <!-- ovelhinha feliz nos ombros -->
      <g transform="translate(0 -30)">
        <ellipse cx="0" cy="8" rx="60" ry="26" fill="#ffffff"/>
        <circle cx="-46" cy="0" r="20" fill="#f3f6fb"/><circle cx="46" cy="0" r="20" fill="#f3f6fb"/>
        <circle cx="-24" cy="-14" r="20" fill="#f3f6fb"/><circle cx="24" cy="-14" r="20" fill="#f3f6fb"/><circle cx="0" cy="-18" r="20" fill="#f3f6fb"/>
        <!-- patinhas penduradas nos ombros -->
        <rect x="-56" y="18" width="7" height="20" rx="3" fill="#4a3b30"/>
        <rect x="49" y="18" width="7" height="20" rx="3" fill="#4a3b30"/>
        <!-- cabeca da ovelha (para o lado) -->
        <g transform="translate(-58 6)">
          <circle cx="0" cy="0" r="17" fill="#3a3230"/>
          <ellipse cx="-12" cy="-10" rx="6" ry="9" fill="#2c2624"/><ellipse cx="10" cy="-14" rx="5" ry="8" fill="#2c2624"/>
          <circle cx="-6" cy="-2" r="3" fill="#fff"/><circle cx="6" cy="-2" r="3" fill="#fff"/>
          <circle cx="-6" cy="-1.5" r="1.6" fill="#1c1712"/><circle cx="6" cy="-1.5" r="1.6" fill="#1c1712"/>
          <ellipse cx="0" cy="6" rx="3.6" ry="2.8" fill="#5b4a42"/>
          <path d="M-5 11 Q0 15 5 11" stroke="#1c1712" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>
      </g>
    </g>
    <!-- notas de musica (alegria) -->
    <g fill="#e07aa8">
      <g transform="translate(620 300)"><ellipse cx="0" cy="14" rx="7" ry="5"/><rect x="5" y="-14" width="3.4" height="28"/><path d="M5 -14 q14 4 10 16 q-2 -8 -10 -8z"/></g>
      <g transform="translate(680 360)"><ellipse cx="0" cy="12" rx="6" ry="4.5"/><rect x="4" y="-12" width="3" height="24"/></g>
    </g>
  </svg>`,

  /* Cena 5: celebracao - todos comemoram o retorno */
  "ovelha:celebration": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Festa de alegria com o pastor e todas as ovelhinhas juntas comemorando o retorno da ovelha perdida">
    <defs>
      <linearGradient id="ce-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffe6f0"/>
        <stop offset="1" stop-color="#fff2c9"/>
      </linearGradient>
      <radialGradient id="ce-glow" cx="0.5" cy="0.35" r="0.65">
        <stop offset="0" stop-color="#fff8e0" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#fff8e0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#ce-sky)"/>
    <ellipse cx="400" cy="180" rx="420" ry="300" fill="url(#ce-glow)"/>
    <!-- confetes e coracoes -->
    <g>
      <rect x="120" y="80" width="14" height="14" rx="3" fill="#ff8fb0" transform="rotate(20 127 87)"/>
      <rect x="640" y="70" width="14" height="14" rx="3" fill="#7cc0f0" transform="rotate(-15 647 77)"/>
      <rect x="300" y="60" width="12" height="12" rx="3" fill="#ffd25f" transform="rotate(30 306 66)"/>
      <rect x="520" y="120" width="12" height="12" rx="3" fill="#8fd67a" transform="rotate(-25 526 126)"/>
      <circle cx="200" cy="150" r="7" fill="#ffd25f"/><circle cx="600" cy="180" r="7" fill="#ff8fb0"/>
      <path d="M400 70 q-12 -16 -24 -4 q-10 10 24 30 q34 -20 24 -30 q-12 -12 -24 4z" fill="#ff6f9c"/>
      <path d="M120 200 q-8 -11 -16 -3 q-7 7 16 20 q23 -13 16 -20 q-8 -8 -16 3z" fill="#ff9db8"/>
      <path d="M690 240 q-8 -11 -16 -3 q-7 7 16 20 q23 -13 16 -20 q-8 -8 -16 3z" fill="#ff9db8"/>
    </g>
    <path d="M0 350 Q220 300 440 345 Q640 388 800 335 L800 600 L0 600 Z" fill="#9ad86f"/>
    <path d="M0 440 Q240 395 480 435 Q660 470 800 425 L800 600 L0 600 Z" fill="#7ec455"/>
    <path d="M0 520 Q260 485 520 520 L800 500 L800 600 L0 600 Z" fill="#66ac41"/>
    <g fill="#ff8fb0">
      <g transform="translate(70 520)"><circle cx="0" cy="0" r="8"/><circle cx="-12" cy="-6" r="7"/><circle cx="12" cy="-6" r="7"/><circle cx="0" cy="-14" r="7"/><circle cx="0" cy="0" r="4" fill="#fff3a0"/></g>
      <g transform="translate(740 540)"><circle cx="0" cy="0" r="8"/><circle cx="-12" cy="-6" r="7"/><circle cx="12" cy="-6" r="7"/><circle cx="0" cy="-14" r="7"/><circle cx="0" cy="0" r="4" fill="#fff3a0"/></g>
    </g>
    <!-- pastor com bracos erguidos, feliz -->
    <g transform="translate(400 320)">
      <ellipse cx="0" cy="150" rx="70" ry="18" fill="#000" opacity="0.09"/>
      <path d="M-46 150 Q-52 40 0 40 Q52 40 46 150 Z" fill="#7c9fe0"/>
      <path d="M-46 150 Q-52 40 0 40 L0 150 Z" fill="#6b8ed0"/>
      <path d="M0 60 L0 150" stroke="#e7b23c" stroke-width="9"/>
      <path d="M-24 44 Q-54 20 -50 -14" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round" fill="none"/>
      <path d="M24 44 Q54 20 50 -14" stroke="#f2c9a0" stroke-width="15" stroke-linecap="round" fill="none"/>
      <circle cx="-50" cy="-18" r="7" fill="#f2c9a0"/><circle cx="50" cy="-18" r="7" fill="#f2c9a0"/>
      <circle cx="0" cy="-34" r="32" fill="#f5cfa6"/>
      <path d="M-34 -40 Q0 -80 34 -40 Q40 -30 34 -20 Q0 -58 -34 -20 Q-40 -30 -34 -40" fill="#5b3a20"/>
      <path d="M-34 -42 Q0 -60 34 -42 L38 -38 Q0 -52 -38 -38 Z" fill="#d9483f"/>
      <circle cx="-11" cy="-34" r="3.4" fill="#3a2b1a"/><circle cx="11" cy="-34" r="3.4" fill="#3a2b1a"/>
      <circle cx="-19" cy="-26" r="5" fill="#ff9db0" opacity="0.6"/><circle cx="19" cy="-26" r="5" fill="#ff9db0" opacity="0.6"/>
      <path d="M-12 -22 Q0 -10 12 -22" stroke="#3a2b1a" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    </g>
    <!-- ovelhinha reencontrada, pulando de alegria -->
    <g transform="translate(250 420)">
      <ellipse cx="0" cy="50" rx="46" ry="10" fill="#000" opacity="0.08"/>
      <circle cx="-24" cy="0" r="22" fill="#f3f6fb"/><circle cx="24" cy="0" r="22" fill="#f3f6fb"/>
      <circle cx="0" cy="-16" r="24" fill="#f3f6fb"/><circle cx="-16" cy="16" r="22" fill="#f3f6fb"/><circle cx="16" cy="16" r="22" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="36" ry="28" fill="#ffffff"/>
      <rect x="-7" y="28" width="6" height="16" rx="3" fill="#4a3b30" transform="rotate(-12 -4 36)"/>
      <rect x="1" y="28" width="6" height="16" rx="3" fill="#4a3b30" transform="rotate(12 4 36)"/>
      <circle cx="0" cy="-2" r="20" fill="#3a3230"/>
      <ellipse cx="-16" cy="-14" rx="7" ry="10" fill="#2c2624"/><ellipse cx="16" cy="-14" rx="7" ry="10" fill="#2c2624"/>
      <circle cx="-7" cy="-2" r="5" fill="#fff"/><circle cx="7" cy="-2" r="5" fill="#fff"/>
      <circle cx="-7" cy="-1.5" r="2.6" fill="#1c1712"/><circle cx="7" cy="-1.5" r="2.6" fill="#1c1712"/>
      <ellipse cx="0" cy="7" rx="4" ry="3" fill="#5b4a42"/>
      <path d="M-6 12 Q0 17 6 12" stroke="#1c1712" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <ellipse cx="-14" cy="6" rx="4.5" ry="3.5" fill="#ffb0c0" opacity="0.6"/>
      <ellipse cx="14" cy="6" rx="4.5" ry="3.5" fill="#ffb0c0" opacity="0.6"/>
    </g>
    <!-- outras ovelhinhas do rebanho -->
    <g transform="translate(600 450) scale(0.9)">
      <ellipse cx="0" cy="46" rx="50" ry="11" fill="#000" opacity="0.08"/>
      <circle cx="-26" cy="0" r="24" fill="#f3f6fb"/><circle cx="26" cy="0" r="24" fill="#f3f6fb"/>
      <circle cx="0" cy="-18" r="26" fill="#f3f6fb"/><circle cx="-18" cy="18" r="24" fill="#f3f6fb"/><circle cx="18" cy="18" r="24" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#ffffff"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#4a3b30"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#4a3b30"/>
      <circle cx="42" cy="0" r="20" fill="#3a3230"/>
      <ellipse cx="58" cy="-10" rx="8" ry="12" fill="#2c2624"/><ellipse cx="30" cy="-16" rx="7" ry="11" fill="#2c2624"/>
      <circle cx="37" cy="-3" r="3.2" fill="#fff"/><circle cx="47" cy="-3" r="3.2" fill="#fff"/>
      <circle cx="37.5" cy="-2.5" r="1.6" fill="#000"/><circle cx="46.5" cy="-2.5" r="1.6" fill="#000"/>
      <ellipse cx="42" cy="6" rx="4" ry="3" fill="#5b4a42"/>
    </g>
    <g transform="translate(690 520) scale(0.6)">
      <ellipse cx="0" cy="46" rx="50" ry="11" fill="#000" opacity="0.08"/>
      <circle cx="-26" cy="0" r="24" fill="#f3f6fb"/><circle cx="26" cy="0" r="24" fill="#f3f6fb"/>
      <circle cx="0" cy="-18" r="26" fill="#f3f6fb"/><circle cx="-18" cy="18" r="24" fill="#f3f6fb"/><circle cx="18" cy="18" r="24" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#ffffff"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#4a3b30"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#4a3b30"/>
      <circle cx="-42" cy="0" r="20" fill="#3a3230"/>
      <ellipse cx="-58" cy="-10" rx="8" ry="12" fill="#2c2624"/><ellipse cx="-30" cy="-16" rx="7" ry="11" fill="#2c2624"/>
      <circle cx="-47" cy="-3" r="3.2" fill="#fff"/><circle cx="-37" cy="-3" r="3.2" fill="#fff"/>
      <circle cx="-46.5" cy="-2.5" r="1.6" fill="#000"/><circle cx="-37.5" cy="-2.5" r="1.6" fill="#000"/>
      <ellipse cx="-42" cy="6" rx="4" ry="3" fill="#5b4a42"/>
    </g>
    <g transform="translate(140 470) scale(0.7)">
      <ellipse cx="0" cy="46" rx="50" ry="11" fill="#000" opacity="0.08"/>
      <circle cx="-26" cy="0" r="24" fill="#f3f6fb"/><circle cx="26" cy="0" r="24" fill="#f3f6fb"/>
      <circle cx="0" cy="-18" r="26" fill="#f3f6fb"/><circle cx="-18" cy="18" r="24" fill="#f3f6fb"/><circle cx="18" cy="18" r="24" fill="#f3f6fb"/>
      <ellipse cx="0" cy="4" rx="40" ry="30" fill="#ffffff"/>
      <rect x="-8" y="30" width="7" height="18" rx="3" fill="#4a3b30"/><rect x="1" y="30" width="7" height="18" rx="3" fill="#4a3b30"/>
      <circle cx="42" cy="0" r="20" fill="#3a3230"/>
      <ellipse cx="58" cy="-10" rx="8" ry="12" fill="#2c2624"/><ellipse cx="30" cy="-16" rx="7" ry="11" fill="#2c2624"/>
      <circle cx="37" cy="-3" r="3.2" fill="#fff"/><circle cx="47" cy="-3" r="3.2" fill="#fff"/>
      <circle cx="37.5" cy="-2.5" r="1.6" fill="#000"/><circle cx="46.5" cy="-2.5" r="1.6" fill="#000"/>
      <ellipse cx="42" cy="6" rx="4" ry="3" fill="#5b4a42"/>
    </g>
  </svg>`,
});

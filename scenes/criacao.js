/* Cenas ilustradas da história "A Criação do Mundo" (Gênesis 1).
   Estilo: livro infantil moderno, vetorial flat, formas grandes e arredondadas.
   Indexadas por "criacao:<scene>" em window.SCENES. */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  // ---------------------------------------------------------------------------
  // 1) darkness — no comecinho de tudo, só escuridão
  // ---------------------------------------------------------------------------
  "criacao:darkness": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O mundo antes da criação: escuridão profunda com uma pequena luz de esperança no centro">
  <defs>
    <radialGradient id="cr-dk-bg" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0" stop-color="#2b2d63"/>
      <stop offset="0.55" stop-color="#191a3f"/>
      <stop offset="1" stop-color="#0c0d24"/>
    </radialGradient>
    <radialGradient id="cr-dk-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff6d6" stop-opacity="0.9"/>
      <stop offset="0.5" stop-color="#ffd98a" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-dk-bg)"/>
  <!-- neblina escura ondulada embaixo -->
  <path d="M0 470 Q200 420 400 470 T800 470 L800 600 L0 600 Z" fill="#141534" opacity="0.8"/>
  <path d="M0 520 Q220 480 400 520 T800 520 L800 600 L0 600 Z" fill="#0d0e26" opacity="0.9"/>
  <!-- poeirinhas de luz muito fracas -->
  <g fill="#8b8fd6" opacity="0.5">
    <circle cx="120" cy="120" r="2.5"/>
    <circle cx="220" cy="200" r="1.8"/>
    <circle cx="640" cy="140" r="2.2"/>
    <circle cx="700" cy="240" r="1.6"/>
    <circle cx="150" cy="330" r="1.8"/>
    <circle cx="560" cy="330" r="2"/>
    <circle cx="330" cy="90" r="1.6"/>
    <circle cx="470" cy="120" r="1.8"/>
  </g>
  <!-- pequena esperança de luz no centro -->
  <ellipse cx="400" cy="300" rx="200" ry="200" fill="url(#cr-dk-glow)"/>
  <circle cx="400" cy="300" r="34" fill="#fff3cf"/>
  <circle cx="400" cy="300" r="20" fill="#ffffff" opacity="0.9"/>
  <!-- brilhos delicados ao redor da luz -->
  <g fill="#fff3cf" opacity="0.85">
    <path d="M400 236 l5 22 -5 -3 -5 3z"/>
    <path d="M400 364 l5 -22 -5 3 -5 -3z"/>
    <path d="M336 300 l22 5 -3 -5 3 -5z"/>
    <path d="M464 300 l-22 5 3 -5 -3 -5z"/>
  </g>
</svg>`,

  // ---------------------------------------------------------------------------
  // 2) light — "Que haja luz!" dia e noite
  // ---------------------------------------------------------------------------
  "criacao:light": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A criação da luz: metade dia claro e ensolarado, metade noite estrelada, com raios de luz brilhando">
  <defs>
    <linearGradient id="cr-lt-day" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9a8"/>
      <stop offset="1" stop-color="#fff6dd"/>
    </linearGradient>
    <linearGradient id="cr-lt-night" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#20235c"/>
      <stop offset="1" stop-color="#3a3f86"/>
    </linearGradient>
    <radialGradient id="cr-lt-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fffdf2" stop-opacity="1"/>
      <stop offset="0.6" stop-color="#ffe27a" stop-opacity="0.6"/>
      <stop offset="1" stop-color="#ffe27a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- lado noite -->
  <rect width="800" height="600" fill="url(#cr-lt-night)"/>
  <!-- lado dia -->
  <path d="M0 0 L800 0 L800 600 Z" fill="url(#cr-lt-day)"/>
  <!-- estrelas no lado noite -->
  <g fill="#fff4c2">
    <path d="M110 110 l6 15 16 2 -12 11 4 16 -14 -9 -14 9 4 -16 -12 -11 16 -2z"/>
    <path d="M80 260 l4 11 12 1 -9 8 3 12 -10 -6 -10 6 3 -12 -9 -8 12 -1z"/>
    <path d="M170 400 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1z"/>
    <circle cx="240" cy="180" r="3"/>
    <circle cx="60" cy="420" r="3"/>
    <circle cx="200" cy="300" r="2.5"/>
    <circle cx="120" cy="490" r="2.5"/>
  </g>
  <!-- lua no lado noite -->
  <circle cx="150" cy="180" r="46" fill="#fdf3c9"/>
  <circle cx="168" cy="168" r="10" fill="#efe0a8" opacity="0.7"/>
  <circle cx="135" cy="200" r="7" fill="#efe0a8" opacity="0.7"/>
  <!-- raios de luz saindo do sol -->
  <g fill="#ffe27a" opacity="0.6">
    <polygon points="620,150 800,80 800,240"/>
    <polygon points="620,150 780,300 640,360"/>
    <polygon points="620,150 500,20 700,20"/>
    <polygon points="620,150 470,220 520,340"/>
  </g>
  <!-- sol brilhante -->
  <ellipse cx="620" cy="150" rx="150" ry="150" fill="url(#cr-lt-glow)"/>
  <circle cx="620" cy="150" r="66" fill="#ffd23f"/>
  <circle cx="620" cy="150" r="52" fill="#ffe066"/>
  <!-- rostinho fofo no sol -->
  <circle cx="602" cy="145" r="4.5" fill="#7a4a10"/>
  <circle cx="638" cy="145" r="4.5" fill="#7a4a10"/>
  <path d="M604 162 Q620 176 636 162" stroke="#7a4a10" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="592" cy="160" r="6" fill="#ffb0a0" opacity="0.6"/>
  <circle cx="648" cy="160" r="6" fill="#ffb0a0" opacity="0.6"/>
  <!-- nuvenzinhas no lado dia -->
  <g fill="#ffffff" opacity="0.95">
    <ellipse cx="470" cy="470" rx="60" ry="30"/>
    <ellipse cx="510" cy="460" rx="45" ry="34"/>
    <ellipse cx="700" cy="430" rx="55" ry="28"/>
  </g>
</svg>`,

  // ---------------------------------------------------------------------------
  // 3) sky-sea — céu azul em cima, mares embaixo
  // ---------------------------------------------------------------------------
  "criacao:sky-sea": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A criação do céu e do mar: céu azul com nuvens em cima e ondas suaves do mar embaixo">
  <defs>
    <linearGradient id="cr-ss-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7ec4ff"/>
      <stop offset="1" stop-color="#c8ecff"/>
    </linearGradient>
    <linearGradient id="cr-ss-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2fa9d6"/>
      <stop offset="1" stop-color="#1c7fb0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-ss-sky)"/>
  <!-- sol suave alto -->
  <circle cx="660" cy="110" r="50" fill="#ffdf6b"/>
  <circle cx="660" cy="110" r="70" fill="#ffdf6b" opacity="0.3"/>
  <!-- nuvens grandes e fofas -->
  <g fill="#ffffff">
    <g>
      <ellipse cx="180" cy="130" rx="70" ry="40"/>
      <ellipse cx="230" cy="115" rx="55" ry="45"/>
      <ellipse cx="130" cy="150" rx="50" ry="34"/>
    </g>
    <g opacity="0.95">
      <ellipse cx="470" cy="90" rx="55" ry="32"/>
      <ellipse cx="510" cy="80" rx="42" ry="36"/>
      <ellipse cx="430" cy="105" rx="40" ry="26"/>
    </g>
  </g>
  <!-- passarinho em V -->
  <g stroke="#5a6b8c" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7">
    <path d="M330 200 Q345 188 360 200"/>
    <path d="M360 200 Q375 188 390 200"/>
  </g>
  <!-- mar embaixo com ondas -->
  <path d="M0 360 Q200 330 400 360 T800 360 L800 600 L0 600 Z" fill="url(#cr-ss-sea)"/>
  <!-- ondinhas claras -->
  <g stroke="#bfeeff" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8">
    <path d="M60 420 Q90 408 120 420 T180 420"/>
    <path d="M300 460 Q330 448 360 460 T420 460"/>
    <path d="M560 430 Q590 418 620 430 T680 430"/>
    <path d="M180 520 Q210 508 240 520 T300 520"/>
    <path d="M480 530 Q510 518 540 530 T600 530"/>
  </g>
  <!-- reflexo do sol na água -->
  <g fill="#ffe9a0" opacity="0.5">
    <ellipse cx="640" cy="400" rx="40" ry="8"/>
    <ellipse cx="650" cy="440" rx="30" ry="6"/>
    <ellipse cx="635" cy="475" rx="22" ry="5"/>
  </g>
  <!-- espuma na linha do horizonte -->
  <g fill="#ffffff" opacity="0.85">
    <ellipse cx="120" cy="362" rx="30" ry="8"/>
    <ellipse cx="500" cy="360" rx="34" ry="8"/>
    <ellipse cx="720" cy="366" rx="26" ry="7"/>
  </g>
</svg>`,

  // ---------------------------------------------------------------------------
  // 4) plants — gramas, flores e árvores com frutas
  // ---------------------------------------------------------------------------
  "criacao:plants": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A criação das plantas: campo verde com flores coloridas e árvores cheias de frutas docinhas">
  <defs>
    <linearGradient id="cr-pl-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe8ff"/>
      <stop offset="1" stop-color="#eaf8ff"/>
    </linearGradient>
    <linearGradient id="cr-pl-grass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8ed766"/>
      <stop offset="1" stop-color="#6cbf49"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-pl-sky)"/>
  <!-- sol -->
  <circle cx="110" cy="100" r="46" fill="#ffd94d"/>
  <circle cx="110" cy="100" r="64" fill="#ffd94d" opacity="0.28"/>
  <!-- nuvens -->
  <g fill="#ffffff">
    <ellipse cx="600" cy="110" rx="60" ry="30"/>
    <ellipse cx="640" cy="98" rx="45" ry="34"/>
    <ellipse cx="560" cy="120" rx="40" ry="24"/>
  </g>
  <!-- colinas -->
  <path d="M0 380 Q250 320 500 370 Q650 400 800 360 L800 600 L0 600 Z" fill="#a6e07d"/>
  <path d="M0 430 Q400 380 800 430 L800 600 L0 600 Z" fill="url(#cr-pl-grass)"/>
  <!-- árvore grande com frutinhas (esquerda) -->
  <g>
    <rect x="150" y="360" width="30" height="120" rx="12" fill="#8a5a2b"/>
    <circle cx="165" cy="330" r="70" fill="#4fae4f"/>
    <circle cx="120" cy="360" r="46" fill="#5cbe5c"/>
    <circle cx="210" cy="360" r="46" fill="#5cbe5c"/>
    <g fill="#ff5b5b">
      <circle cx="140" cy="320" r="9"/>
      <circle cx="185" cy="345" r="9"/>
      <circle cx="165" cy="300" r="9"/>
      <circle cx="120" cy="360" r="9"/>
      <circle cx="205" cy="335" r="9"/>
    </g>
  </g>
  <!-- árvore média (direita) -->
  <g>
    <rect x="620" y="360" width="26" height="110" rx="11" fill="#8a5a2b"/>
    <circle cx="633" cy="330" r="60" fill="#57ba57"/>
    <circle cx="595" cy="352" r="40" fill="#66c766"/>
    <circle cx="672" cy="352" r="40" fill="#66c766"/>
    <g fill="#ffab2e">
      <circle cx="615" cy="320" r="8"/>
      <circle cx="650" cy="340" r="8"/>
      <circle cx="633" cy="360" r="8"/>
      <circle cx="600" cy="345" r="8"/>
    </g>
  </g>
  <!-- flores coloridas -->
  <g>
    <g transform="translate(300 500)">
      <rect x="-3" y="-40" width="6" height="44" fill="#3f9d3f"/>
      <g fill="#ff7bac"><circle cx="0" cy="-46" r="10"/><circle cx="-12" cy="-46" r="10"/><circle cx="12" cy="-46" r="10"/><circle cx="0" cy="-58" r="10"/><circle cx="0" cy="-34" r="10"/></g>
      <circle cx="0" cy="-46" r="7" fill="#ffd94d"/>
    </g>
    <g transform="translate(400 520)">
      <rect x="-3" y="-40" width="6" height="44" fill="#3f9d3f"/>
      <g fill="#ffd23f"><circle cx="0" cy="-46" r="10"/><circle cx="-12" cy="-46" r="10"/><circle cx="12" cy="-46" r="10"/><circle cx="0" cy="-58" r="10"/><circle cx="0" cy="-34" r="10"/></g>
      <circle cx="0" cy="-46" r="7" fill="#ff8a3d"/>
    </g>
    <g transform="translate(500 495)">
      <rect x="-3" y="-40" width="6" height="44" fill="#3f9d3f"/>
      <g fill="#9b6bff"><circle cx="0" cy="-46" r="10"/><circle cx="-12" cy="-46" r="10"/><circle cx="12" cy="-46" r="10"/><circle cx="0" cy="-58" r="10"/><circle cx="0" cy="-34" r="10"/></g>
      <circle cx="0" cy="-46" r="7" fill="#fff2b0"/>
    </g>
  </g>
  <!-- tufos de grama -->
  <g stroke="#4fa53a" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M240 560 q-6 -24 -14 -30 M240 560 q0 -28 0 -34 M240 560 q6 -24 14 -30"/>
    <path d="M700 555 q-6 -24 -14 -30 M700 555 q0 -28 0 -34 M700 555 q6 -24 14 -30"/>
    <path d="M60 560 q-6 -24 -14 -30 M60 560 q0 -28 0 -34 M60 560 q6 -24 14 -30"/>
  </g>
</svg>`,

  // ---------------------------------------------------------------------------
  // 5) sun-moon — sol de dia, lua e estrelas de noite
  // ---------------------------------------------------------------------------
  "criacao:sun-moon": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A criação do sol, da lua e das estrelas: o sol dourado de um lado e a lua sorridente com estrelas do outro, sobre colinas">
  <defs>
    <linearGradient id="cr-sm-sky" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffdca8"/>
      <stop offset="0.45" stop-color="#ffb98a"/>
      <stop offset="0.6" stop-color="#6d5bb0"/>
      <stop offset="1" stop-color="#2b2b66"/>
    </linearGradient>
    <radialGradient id="cr-sm-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff3c0"/>
      <stop offset="1" stop-color="#ffcf3d"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-sm-sky)"/>
  <!-- raios do sol -->
  <g fill="#ffdf6b" opacity="0.55">
    <polygon points="150,150 40,60 70,180"/>
    <polygon points="150,150 260,80 250,190"/>
    <polygon points="150,150 60,260 170,250"/>
    <polygon points="150,150 250,260 180,270"/>
  </g>
  <!-- sol com rostinho -->
  <circle cx="150" cy="150" r="72" fill="url(#cr-sm-sun)"/>
  <circle cx="132" cy="145" r="5" fill="#8a5a10"/>
  <circle cx="170" cy="145" r="5" fill="#8a5a10"/>
  <path d="M132 165 Q151 182 170 165" stroke="#8a5a10" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <circle cx="120" cy="162" r="7" fill="#ff9a8a" opacity="0.55"/>
  <circle cx="182" cy="162" r="7" fill="#ff9a8a" opacity="0.55"/>
  <!-- estrelas lado noite -->
  <g fill="#fff4c2">
    <path d="M560 90 l6 15 16 2 -12 11 4 16 -14 -9 -14 9 4 -16 -12 -11 16 -2z"/>
    <path d="M700 160 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1z"/>
    <path d="M500 200 l4 11 12 1 -9 8 3 12 -10 -6 -10 6 3 -12 -9 -8 12 -1z"/>
    <circle cx="640" cy="240" r="3.5"/>
    <circle cx="740" cy="280" r="3"/>
    <circle cx="560" cy="270" r="2.6"/>
  </g>
  <!-- lua sorridente -->
  <circle cx="650" cy="130" r="60" fill="#fdf3c9"/>
  <circle cx="672" cy="118" r="12" fill="#ece0a8" opacity="0.7"/>
  <circle cx="632" cy="150" r="8" fill="#ece0a8" opacity="0.7"/>
  <circle cx="637" cy="128" r="4.5" fill="#b7a76a"/>
  <path d="M637 146 Q652 158 667 146" stroke="#b7a76a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- colinas embaixo -->
  <path d="M0 430 Q200 380 400 430 T800 430 L800 600 L0 600 Z" fill="#5f8f4a"/>
  <path d="M0 480 Q250 440 500 480 T800 480 L800 600 L0 600 Z" fill="#4c7a3a"/>
</svg>`,

  // ---------------------------------------------------------------------------
  // 6) animals — peixes, pássaros e bichos da terra
  // ---------------------------------------------------------------------------
  "criacao:animals": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A criação dos animais: leão, coelho e elefante na grama, borboletas e passarinhos no céu e peixinhos no mar">
  <defs>
    <linearGradient id="cr-an-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe8ff"/>
      <stop offset="1" stop-color="#e8f7ff"/>
    </linearGradient>
    <linearGradient id="cr-an-grass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8ed766"/>
      <stop offset="1" stop-color="#65b846"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-an-sky)"/>
  <!-- sol e nuvens -->
  <circle cx="700" cy="90" r="44" fill="#ffd94d"/>
  <g fill="#ffffff"><ellipse cx="180" cy="90" rx="55" ry="28"/><ellipse cx="220" cy="80" rx="40" ry="30"/><ellipse cx="140" cy="100" rx="34" ry="20"/></g>
  <!-- passarinhos -->
  <g fill="#5a83d6">
    <g transform="translate(430 120)"><ellipse cx="0" cy="0" rx="16" ry="11"/><circle cx="12" cy="-4" r="7"/><path d="M-4 -6 q-16 -12 -22 -2 q12 0 20 8z" fill="#7aa0e8"/><circle cx="15" cy="-5" r="1.6" fill="#20304f"/><path d="M18 -3 l8 1 -8 3z" fill="#ffab2e"/></g>
    <g transform="translate(520 170)"><ellipse cx="0" cy="0" rx="13" ry="9"/><circle cx="10" cy="-3" r="6"/><path d="M-3 -5 q-13 -10 -18 -2 q10 0 16 6z" fill="#7aa0e8"/><circle cx="12" cy="-4" r="1.4" fill="#20304f"/><path d="M15 -3 l6 1 -6 2z" fill="#ffab2e"/></g>
  </g>
  <!-- borboletas -->
  <g>
    <g transform="translate(120 220)"><g fill="#ff7bac"><ellipse cx="-8" cy="-6" rx="9" ry="11"/><ellipse cx="8" cy="-6" rx="9" ry="11"/><ellipse cx="-7" cy="8" rx="7" ry="8"/><ellipse cx="7" cy="8" rx="7" ry="8"/></g><rect x="-1.5" y="-10" width="3" height="22" rx="1.5" fill="#5a3a2a"/></g>
    <g transform="translate(330 210)"><g fill="#ffcf3d"><ellipse cx="-8" cy="-6" rx="9" ry="11"/><ellipse cx="8" cy="-6" rx="9" ry="11"/><ellipse cx="-7" cy="8" rx="7" ry="8"/><ellipse cx="7" cy="8" rx="7" ry="8"/></g><rect x="-1.5" y="-10" width="3" height="22" rx="1.5" fill="#5a3a2a"/></g>
  </g>
  <!-- grama -->
  <path d="M0 360 Q400 320 800 360 L800 520 L0 520 Z" fill="url(#cr-an-grass)"/>
  <!-- mar embaixo -->
  <path d="M0 500 Q200 478 400 500 T800 500 L800 600 L0 600 Z" fill="#2fa9d6"/>
  <g stroke="#bfeeff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"><path d="M80 555 Q100 546 120 555 T160 555"/><path d="M600 560 Q620 551 640 560 T680 560"/></g>
  <!-- peixinhos -->
  <g>
    <g transform="translate(230 555)"><ellipse cx="0" cy="0" rx="22" ry="14" fill="#ff8a3d"/><polygon points="20,0 40,-12 40,12" fill="#ff8a3d"/><circle cx="-10" cy="-3" r="3" fill="#fff"/><circle cx="-10" cy="-3" r="1.5" fill="#333"/></g>
    <g transform="translate(430 560)"><ellipse cx="0" cy="0" rx="18" ry="12" fill="#ffcf3d"/><polygon points="16,0 32,-10 32,10" fill="#ffcf3d"/><circle cx="-8" cy="-2" r="2.6" fill="#fff"/><circle cx="-8" cy="-2" r="1.3" fill="#333"/></g>
  </g>
  <!-- leão (esquerda) -->
  <g transform="translate(160 400)">
    <ellipse cx="0" cy="55" rx="60" ry="14" fill="#000" opacity="0.08"/>
    <ellipse cx="0" cy="20" rx="48" ry="34" fill="#e8a23a"/>
    <rect x="-24" y="44" width="14" height="26" rx="7" fill="#e8a23a"/>
    <rect x="10" y="44" width="14" height="26" rx="7" fill="#e8a23a"/>
    <circle cx="-6" cy="-24" r="42" fill="#ffb84d"/>
    <circle cx="-6" cy="-24" r="30" fill="#ffcf7a"/>
    <circle cx="-18" cy="-30" r="4.5" fill="#4a2f14"/>
    <circle cx="6" cy="-30" r="4.5" fill="#4a2f14"/>
    <path d="M-6 -22 l-7 6 7 3 7 -3z" fill="#7a4a1a"/>
    <path d="M-13 -13 Q-6 -6 1 -13" stroke="#7a4a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- elefante (direita) -->
  <g transform="translate(600 400)">
    <ellipse cx="0" cy="55" rx="70" ry="14" fill="#000" opacity="0.08"/>
    <ellipse cx="0" cy="15" rx="58" ry="42" fill="#9bb0c9"/>
    <rect x="-40" y="46" width="18" height="26" rx="9" fill="#9bb0c9"/>
    <rect x="22" y="46" width="18" height="26" rx="9" fill="#9bb0c9"/>
    <ellipse cx="-46" cy="0" rx="24" ry="30" fill="#8aa0ba"/>
    <path d="M-38 24 q-30 10 -26 46 q10 4 14 -6 q-6 -26 20 -30z" fill="#9bb0c9"/>
    <circle cx="-24" cy="0" r="4.5" fill="#3a4a5c"/>
  </g>
  <!-- coelho (centro) -->
  <g transform="translate(390 430)">
    <ellipse cx="0" cy="30" rx="34" ry="10" fill="#000" opacity="0.08"/>
    <ellipse cx="0" cy="8" rx="24" ry="26" fill="#ffffff"/>
    <ellipse cx="-8" cy="-30" rx="7" ry="24" fill="#ffffff"/>
    <ellipse cx="8" cy="-30" rx="7" ry="24" fill="#ffffff"/>
    <ellipse cx="-8" cy="-30" rx="3.5" ry="16" fill="#ffc2d6"/>
    <ellipse cx="8" cy="-30" rx="3.5" ry="16" fill="#ffc2d6"/>
    <circle cx="-8" cy="2" r="3" fill="#5a3a2a"/>
    <circle cx="8" cy="2" r="3" fill="#5a3a2a"/>
    <path d="M-3 10 l3 3 3 -3z" fill="#ff9ab0"/>
    <circle cx="24" cy="18" r="7" fill="#ffffff"/>
  </g>
</svg>`,

  // ---------------------------------------------------------------------------
  // 7) adam-eve — a criação das pessoas
  // ---------------------------------------------------------------------------
  "criacao:adam-eve": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A criação das pessoas: um homem e uma mulher sorridentes de mãos dadas num jardim verde com árvore e flores, sob uma luz do céu">
  <defs>
    <linearGradient id="cr-ae-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9b8"/>
      <stop offset="1" stop-color="#fff6e0"/>
    </linearGradient>
    <linearGradient id="cr-ae-grass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8ed766"/>
      <stop offset="1" stop-color="#68ba48"/>
    </linearGradient>
    <radialGradient id="cr-ae-glow" cx="0.5" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#fffaf0" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#fffaf0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-ae-sky)"/>
  <ellipse cx="400" cy="90" rx="340" ry="230" fill="url(#cr-ae-glow)"/>
  <!-- raios do céu -->
  <g fill="#fff3cf" opacity="0.6">
    <polygon points="400,20 330,300 470,300"/>
    <polygon points="400,20 220,290 320,300"/>
    <polygon points="400,20 480,300 580,290"/>
  </g>
  <!-- nuvens -->
  <g fill="#ffffff"><ellipse cx="140" cy="110" rx="55" ry="28"/><ellipse cx="180" cy="98" rx="42" ry="32"/><ellipse cx="670" cy="120" rx="55" ry="28"/><ellipse cx="630" cy="108" rx="42" ry="30"/></g>
  <!-- árvore ao fundo -->
  <g transform="translate(660 430)">
    <rect x="-14" y="-40" width="28" height="120" rx="12" fill="#8a5a2b"/>
    <circle cx="0" cy="-70" r="66" fill="#57ba57"/>
    <circle cx="-44" cy="-42" r="42" fill="#66c766"/>
    <circle cx="44" cy="-42" r="42" fill="#66c766"/>
    <g fill="#ff5b5b"><circle cx="-18" cy="-80" r="8"/><circle cx="22" cy="-60" r="8"/><circle cx="0" cy="-50" r="8"/></g>
  </g>
  <!-- grama -->
  <path d="M0 430 Q400 390 800 430 L800 600 L0 600 Z" fill="url(#cr-ae-grass)"/>
  <!-- flores -->
  <g>
    <g transform="translate(120 520)"><rect x="-3" y="-34" width="6" height="38" fill="#3f9d3f"/><g fill="#ff7bac"><circle cx="0" cy="-40" r="8"/><circle cx="-10" cy="-40" r="8"/><circle cx="10" cy="-40" r="8"/><circle cx="0" cy="-50" r="8"/></g><circle cx="0" cy="-40" r="5" fill="#ffd94d"/></g>
    <g transform="translate(230 540)"><rect x="-3" y="-30" width="6" height="34" fill="#3f9d3f"/><g fill="#9b6bff"><circle cx="0" cy="-36" r="8"/><circle cx="-10" cy="-36" r="8"/><circle cx="10" cy="-36" r="8"/><circle cx="0" cy="-46" r="8"/></g><circle cx="0" cy="-36" r="5" fill="#fff2b0"/></g>
  </g>
  <!-- homem (Adão) -->
  <g transform="translate(330 480)">
    <ellipse cx="0" cy="30" rx="52" ry="14" fill="#000" opacity="0.08"/>
    <path d="M-34 20 Q-34 -44 0 -44 Q34 -44 34 20 Z" fill="#6fbf6f"/>
    <!-- braço estendido para dar as mãos -->
    <path d="M28 -18 L70 6" stroke="#e0a878" stroke-width="14" stroke-linecap="round"/>
    <path d="M-28 -18 L-46 20" stroke="#e0a878" stroke-width="14" stroke-linecap="round"/>
    <circle cx="0" cy="-64" r="32" fill="#eab98c"/>
    <path d="M-32 -70 Q0 -104 32 -70 Q24 -88 0 -88 Q-24 -88 -32 -70" fill="#4a3320"/>
    <circle cx="-11" cy="-64" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-64" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -52 Q0 -45 9 -52" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="-18" cy="-56" r="5" fill="#ff9a8a" opacity="0.5"/>
    <circle cx="18" cy="-56" r="5" fill="#ff9a8a" opacity="0.5"/>
  </g>
  <!-- mulher (Eva) -->
  <g transform="translate(470 480)">
    <ellipse cx="0" cy="30" rx="52" ry="14" fill="#000" opacity="0.08"/>
    <path d="M-36 20 Q-30 -44 0 -44 Q30 -44 36 20 Z" fill="#ff8fb3"/>
    <path d="M-28 -18 L-70 6" stroke="#e8b48a" stroke-width="14" stroke-linecap="round"/>
    <path d="M28 -18 L46 20" stroke="#e8b48a" stroke-width="14" stroke-linecap="round"/>
    <circle cx="0" cy="-64" r="32" fill="#f0c39a"/>
    <path d="M-34 -66 Q-38 -20 -22 -6 Q-30 -50 0 -92 Q30 -50 22 -6 Q38 -20 34 -66 Q0 -104 -34 -66" fill="#7a4a2a"/>
    <circle cx="-11" cy="-64" r="3.4" fill="#3a2b1a"/>
    <circle cx="11" cy="-64" r="3.4" fill="#3a2b1a"/>
    <path d="M-9 -52 Q0 -45 9 -52" stroke="#3a2b1a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="-18" cy="-56" r="5" fill="#ff7a9a" opacity="0.55"/>
    <circle cx="18" cy="-56" r="5" fill="#ff7a9a" opacity="0.55"/>
    <path d="M-16 -84 a6 6 0 0 1 12 0 z" fill="#ffd94d"/>
  </g>
  <!-- mãos dadas (encontro no centro) -->
  <circle cx="400" cy="486" r="10" fill="#e6b184"/>
</svg>`,

  // ---------------------------------------------------------------------------
  // 8) rest — Deus descansou no sétimo dia
  // ---------------------------------------------------------------------------
  "criacao:rest": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O sétimo dia de descanso: noite tranquila com lua sorridente, muitas estrelas e um mundo pacífico com colinas, árvore e flores dormindo">
  <defs>
    <linearGradient id="cr-rt-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2a2c66"/>
      <stop offset="0.6" stop-color="#4a4a98"/>
      <stop offset="1" stop-color="#7c6bbf"/>
    </linearGradient>
    <radialGradient id="cr-rt-moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff8dc"/>
      <stop offset="1" stop-color="#f3e6ad"/>
    </radialGradient>
    <linearGradient id="cr-rt-hill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f6a4a"/>
      <stop offset="1" stop-color="#2f5238"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#cr-rt-sky)"/>
  <!-- estrelas -->
  <g fill="#fff4c2">
    <path d="M120 90 l6 15 16 2 -12 11 4 16 -14 -9 -14 9 4 -16 -12 -11 16 -2z"/>
    <path d="M300 60 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1z"/>
    <path d="M560 100 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1z"/>
    <path d="M690 200 l4 11 12 1 -9 8 3 12 -10 -6 -10 6 3 -12 -9 -8 12 -1z"/>
    <path d="M200 220 l4 11 12 1 -9 8 3 12 -10 -6 -10 6 3 -12 -9 -8 12 -1z"/>
    <circle cx="420" cy="130" r="3"/>
    <circle cx="500" cy="210" r="2.6"/>
    <circle cx="80" cy="180" r="2.6"/>
    <circle cx="620" cy="60" r="3"/>
    <circle cx="360" cy="200" r="2.4"/>
    <circle cx="740" cy="130" r="2.6"/>
    <circle cx="250" cy="150" r="2.2"/>
  </g>
  <!-- lua grande sorrindo dormindo -->
  <circle cx="620" cy="150" r="74" fill="url(#cr-rt-moon)"/>
  <circle cx="646" cy="132" r="14" fill="#e8d79c" opacity="0.7"/>
  <circle cx="600" cy="176" r="9" fill="#e8d79c" opacity="0.7"/>
  <circle cx="596" cy="150" r="10" fill="#e8d79c" opacity="0.5"/>
  <!-- olhos fechados e sorriso da lua -->
  <path d="M598 148 Q607 156 616 148" stroke="#b7a76a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M632 148 Q641 156 650 148" stroke="#b7a76a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M608 168 Q624 180 640 168" stroke="#b7a76a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- Zzz de sono -->
  <g fill="#fff4c2" opacity="0.9">
    <path d="M690 90 h20 l-20 22 h20" stroke="#fff4c2" stroke-width="4" fill="none" stroke-linejoin="round"/>
    <path d="M716 66 h14 l-14 16 h14" stroke="#fff4c2" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <!-- nuvens noturnas -->
  <g fill="#5a5aa0" opacity="0.55"><ellipse cx="150" cy="300" rx="70" ry="26"/><ellipse cx="200" cy="290" rx="50" ry="30"/></g>
  <!-- colinas -->
  <path d="M0 400 Q220 350 440 400 Q600 435 800 390 L800 600 L0 600 Z" fill="#4a7a56"/>
  <path d="M0 460 Q400 410 800 460 L800 600 L0 600 Z" fill="url(#cr-rt-hill)"/>
  <!-- árvore adormecida -->
  <g transform="translate(160 460)">
    <rect x="-12" y="-30" width="24" height="90" rx="10" fill="#5a3f22"/>
    <circle cx="0" cy="-56" r="56" fill="#3f7a4a"/>
    <circle cx="-38" cy="-32" r="36" fill="#4a8a54"/>
    <circle cx="38" cy="-32" r="36" fill="#4a8a54"/>
  </g>
  <!-- flores dormindo (curvadas) -->
  <g stroke="#3f7a4a" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M520 560 Q516 530 500 522"/>
    <path d="M600 560 Q604 528 622 522"/>
  </g>
  <g fill="#ff9ec4">
    <circle cx="497" cy="518" r="9"/>
    <circle cx="625" cy="518" r="9"/>
  </g>
  <!-- vaga-lumes -->
  <g fill="#fff0a0" opacity="0.9">
    <circle cx="360" cy="500" r="3.5"/>
    <circle cx="410" cy="530" r="3"/>
    <circle cx="300" cy="540" r="3"/>
    <circle cx="700" cy="510" r="3.2"/>
  </g>
</svg>`,
});

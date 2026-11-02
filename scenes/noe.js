/* Cenas da história "Noé e a Arca" (Gênesis 6-9).
   window.SCENES guarda o SVG de cada cena, indexado por "<storyId>:<scene>". */
window.SCENES = window.SCENES || {};
Object.assign(window.SCENES, {
  "noe:noah": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Noé, um homem bondoso de barba branca e túnica, com o coração feliz sob o céu ensolarado">
  <defs>
    <linearGradient id="noe-noah-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bdeeff"/>
      <stop offset="1" stop-color="#e8f9ff"/>
    </linearGradient>
    <radialGradient id="noe-noah-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff4c2"/>
      <stop offset="1" stop-color="#ffd86b"/>
    </radialGradient>
    <linearGradient id="noe-noah-hill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9bdb6a"/>
      <stop offset="1" stop-color="#6cbf49"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-noah-sky)"/>
  <circle cx="120" cy="110" r="70" fill="url(#noe-noah-sun)"/>
  <g fill="#ffe07a" opacity="0.85">
    <rect x="112" y="10" width="16" height="34" rx="8"/>
    <rect x="10" y="102" width="34" height="16" rx="8"/>
    <rect x="205" y="55" width="30" height="14" rx="7" transform="rotate(45 220 62)"/>
    <rect x="20" y="185" width="30" height="14" rx="7" transform="rotate(-45 35 192)"/>
  </g>
  <g fill="#ffffff" opacity="0.95">
    <ellipse cx="600" cy="120" rx="70" ry="40"/>
    <ellipse cx="660" cy="130" rx="55" ry="34"/>
    <ellipse cx="540" cy="135" rx="45" ry="28"/>
    <ellipse cx="330" cy="80" rx="48" ry="28"/>
    <ellipse cx="380" cy="90" rx="38" ry="22"/>
  </g>
  <path d="M0 430 Q200 380 400 420 Q600 460 800 410 L800 600 L0 600 Z" fill="url(#noe-noah-hill)"/>
  <path d="M0 470 Q250 440 500 475 Q650 495 800 465 L800 600 L0 600 Z" fill="#7fce53" opacity="0.7"/>
  <g>
    <rect x="618" y="360" width="26" height="120" rx="12" fill="#a9713d"/>
    <circle cx="631" cy="330" r="70" fill="#5cb85c"/>
    <circle cx="585" cy="360" r="48" fill="#6cc466"/>
    <circle cx="678" cy="360" r="48" fill="#4fae52"/>
    <circle cx="600" cy="320" r="10" fill="#ff5d73"/>
    <circle cx="665" cy="320" r="10" fill="#ff5d73"/>
    <circle cx="632" cy="360" r="10" fill="#ff5d73"/>
  </g>
  <g>
    <ellipse cx="400" cy="560" rx="120" ry="24" fill="#4c9c33" opacity="0.35"/>
    <path d="M340 560 Q330 420 400 400 Q470 420 460 560 Z" fill="#8e5db0"/>
    <path d="M352 560 Q345 430 400 412 Q455 430 448 560 Z" fill="#a06fc4"/>
    <path d="M400 260 a58 58 0 0 1 58 58 v18 a58 58 0 0 1 -116 0 v-18 a58 58 0 0 1 58 -58 z" fill="#f6c9a0"/>
    <path d="M342 320 q-16 40 8 96 q30 18 100 0 q24 -56 8 -96 q-40 40 -116 0 z" fill="#f0f0f0"/>
    <path d="M338 300 q62 44 124 0 q6 -70 -62 -74 q-68 4 -62 74 z" fill="#e9e4dc"/>
    <path d="M338 300 q62 44 124 0 q-8 -60 -62 -60 q-54 0 -62 60 z" fill="#f6c9a0"/>
    <circle cx="376" cy="308" r="6" fill="#3a2a20"/>
    <circle cx="424" cy="308" r="6" fill="#3a2a20"/>
    <path d="M382 332 q18 16 36 0" stroke="#c56a4a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="366" cy="322" r="8" fill="#ff9a8a" opacity="0.6"/>
    <circle cx="434" cy="322" r="8" fill="#ff9a8a" opacity="0.6"/>
    <path d="M356 340 q44 70 88 0 q-6 44 -44 46 q-38 -2 -44 -46 z" fill="#f2f2f2"/>
    <path d="M344 470 q-30 -30 -20 -70 l24 6 q-6 34 12 58 z" fill="#f6c9a0"/>
    <path d="M456 470 q30 -30 20 -70 l-24 6 q6 34 -12 58 z" fill="#f6c9a0"/>
    <circle cx="400" cy="418" r="26" fill="#ffd34d"/>
    <path d="M400 404 c-10 -14 -30 -2 -18 12 l18 18 18 -18 c12 -14 -8 -26 -18 -12 z" fill="#ff5d73"/>
  </g>
  <g fill="#ff9ec2">
    <path d="M180 300 q10 -20 24 0 q20 -10 12 18 q10 14 -12 18 q-14 20 -24 0 q-22 4 -12 -18 q-10 -18 12 -18 z"/>
    <circle cx="192" cy="318" r="7" fill="#fff2c2"/>
  </g>
  <g fill="#ffd34d">
    <path d="M700 250 l6 16 17 1 -13 11 4 17 -14-9 -14 9 4-17 -13-11 17-1z"/>
  </g>
</svg>`,

  "noe:ark-build": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Noé de barba branca martelando as tábuas de madeira enquanto constrói a grande arca">
  <defs>
    <linearGradient id="noe-build-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe8b8"/>
      <stop offset="1" stop-color="#fff5df"/>
    </linearGradient>
    <linearGradient id="noe-build-wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d69a5a"/>
      <stop offset="1" stop-color="#b9773a"/>
    </linearGradient>
    <linearGradient id="noe-build-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f0c98a"/>
      <stop offset="1" stop-color="#e0b06a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-build-sky)"/>
  <circle cx="680" cy="110" r="60" fill="#ffd86b"/>
  <g fill="#ffffff" opacity="0.9">
    <ellipse cx="180" cy="110" rx="70" ry="38"/>
    <ellipse cx="240" cy="120" rx="50" ry="30"/>
  </g>
  <rect x="0" y="470" width="800" height="130" fill="url(#noe-build-ground)"/>
  <path d="M0 470 Q400 445 800 470 L800 490 L0 490 Z" fill="#d9a961" opacity="0.6"/>
  <g>
    <path d="M150 470 q0 -180 250 -190 q250 10 250 190 z" fill="url(#noe-build-wood)"/>
    <path d="M160 470 q0 -170 240 -180 q240 10 240 180 z" fill="none" stroke="#a0672f" stroke-width="6"/>
    <g stroke="#a0672f" stroke-width="5" opacity="0.7">
      <line x1="170" y1="430" x2="630" y2="430"/>
      <line x1="185" y1="380" x2="615" y2="380"/>
      <line x1="215" y1="330" x2="585" y2="330"/>
    </g>
    <g fill="#8a5424">
      <circle cx="200" cy="450" r="5"/><circle cx="600" cy="450" r="5"/>
      <circle cx="260" cy="450" r="5"/><circle cx="540" cy="450" r="5"/>
      <circle cx="240" cy="405" r="5"/><circle cx="560" cy="405" r="5"/>
    </g>
    <rect x="360" y="345" width="80" height="90" rx="10" fill="#8a5424"/>
    <rect x="372" y="357" width="56" height="66" rx="6" fill="#f7d9a0"/>
    <line x1="400" y1="357" x2="400" y2="423" stroke="#8a5424" stroke-width="5"/>
    <line x1="372" y1="390" x2="428" y2="390" stroke="#8a5424" stroke-width="5"/>
  </g>
  <g>
    <rect x="90" y="430" width="120" height="26" rx="8" fill="#c98a4c"/>
    <rect x="96" y="456" width="110" height="24" rx="8" fill="#b9773a"/>
    <rect x="70" y="420" width="30" height="70" rx="8" fill="#a0672f"/>
    <rect x="180" y="420" width="30" height="70" rx="8" fill="#a0672f"/>
  </g>
  <g>
    <ellipse cx="300" cy="540" rx="70" ry="18" fill="#c89a58" opacity="0.5"/>
    <path d="M280 540 q-8 -70 40 -84 q48 14 40 84 z" fill="#a06fc4"/>
    <path d="M270 460 a44 44 0 0 1 44 44 v10 a44 44 0 0 1 -88 0 v-10 a44 44 0 0 1 44 -44 z" fill="#f6c9a0"/>
    <path d="M232 478 q46 34 92 0 q4 -52 -46 -54 q-50 2 -46 54 z" fill="#f0f0f0"/>
    <path d="M232 470 q46 34 92 0 q-6 -46 -46 -46 q-40 0 -46 46 z" fill="#f6c9a0"/>
    <circle cx="256" cy="480" r="5" fill="#3a2a20"/>
    <circle cx="292" cy="480" r="5" fill="#3a2a20"/>
    <path d="M262 498 q14 12 28 0" stroke="#c56a4a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="248" cy="492" r="6" fill="#ff9a8a" opacity="0.6"/>
    <circle cx="300" cy="492" r="6" fill="#ff9a8a" opacity="0.6"/>
    <path d="M248 504 q30 46 60 0 q-4 30 -30 32 q-26 -2 -30 -32 z" fill="#f2f2f2"/>
    <path d="M330 500 l40 -34 l16 18 l-40 34 z" fill="#f6c9a0"/>
    <rect x="360" y="452" width="22" height="26" rx="4" fill="#8a5424"/>
    <rect x="356" y="448" width="30" height="12" rx="4" fill="#6b3f1a"/>
  </g>
  <g fill="#c56a4a" font-style="normal">
    <circle cx="430" cy="440" r="6" opacity="0.5"/>
    <circle cx="445" cy="425" r="4" opacity="0.4"/>
    <circle cx="418" cy="422" r="4" opacity="0.4"/>
  </g>
  <g fill="#ffd34d">
    <path d="M120 260 l6 16 17 1 -13 11 4 17 -14-9 -14 9 4-17 -13-11 17-1z"/>
  </g>
</svg>`,

  "noe:animals-two": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Casais de animais, leões, girafas e coelhos, entrando em fila na arca">
  <defs>
    <linearGradient id="noe-an-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c6ecff"/>
      <stop offset="1" stop-color="#eafaff"/>
    </linearGradient>
    <linearGradient id="noe-an-ark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d69a5a"/>
      <stop offset="1" stop-color="#a86a30"/>
    </linearGradient>
    <linearGradient id="noe-an-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9bdb6a"/>
      <stop offset="1" stop-color="#6cbf49"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-an-sky)"/>
  <circle cx="700" cy="90" r="55" fill="#ffd86b"/>
  <g fill="#ffffff" opacity="0.9">
    <ellipse cx="150" cy="90" rx="60" ry="34"/>
    <ellipse cx="200" cy="100" rx="46" ry="26"/>
  </g>
  <rect x="0" y="440" width="800" height="160" fill="url(#noe-an-ground)"/>
  <g>
    <path d="M520 440 q0 -170 130 -180 q140 10 140 180 z" fill="url(#noe-an-ark)"/>
    <g stroke="#8a5424" stroke-width="5" opacity="0.6">
      <line x1="530" y1="400" x2="785" y2="400"/>
      <line x1="545" y1="350" x2="785" y2="350"/>
    </g>
    <rect x="600" y="330" width="90" height="110" rx="12" fill="#7a4a1f"/>
    <rect x="612" y="440" width="66" height="6" fill="#5c3714"/>
  </g>
  <g>
    <ellipse cx="120" cy="500" rx="52" ry="34" fill="#e8a23a"/>
    <circle cx="120" cy="452" r="40" fill="#f0b24a"/>
    <circle cx="120" cy="452" r="46" fill="none" stroke="#c8791f" stroke-width="10"/>
    <circle cx="103" cy="448" r="5" fill="#3a2a20"/>
    <circle cx="137" cy="448" r="5" fill="#3a2a20"/>
    <ellipse cx="120" cy="464" rx="10" ry="7" fill="#7a4a1f"/>
    <path d="M108 470 q12 10 24 0" stroke="#7a4a1f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="80" cy="520" rx="10" ry="14" fill="#c8791f"/>
    <ellipse cx="160" cy="520" rx="10" ry="14" fill="#c8791f"/>
  </g>
  <g>
    <ellipse cx="200" cy="510" rx="46" ry="30" fill="#f0b24a"/>
    <circle cx="200" cy="466" r="34" fill="#f0b24a"/>
    <ellipse cx="182" cy="470" rx="4" ry="5" fill="#3a2a20"/>
    <ellipse cx="214" cy="470" rx="4" ry="5" fill="#3a2a20"/>
    <ellipse cx="198" cy="482" rx="8" ry="6" fill="#7a4a1f"/>
    <path d="M180 470 q-14 -6 -6 12" stroke="#f0b24a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M220 470 q14 -6 6 12" stroke="#f0b24a" stroke-width="10" fill="none" stroke-linecap="round"/>
    <ellipse cx="168" cy="530" rx="8" ry="12" fill="#c8791f"/>
    <ellipse cx="232" cy="530" rx="8" ry="12" fill="#c8791f"/>
  </g>
  <g>
    <ellipse cx="330" cy="520" rx="26" ry="18" fill="#ffe07a"/>
    <rect x="316" y="360" width="18" height="150" rx="9" fill="#ffcf5c"/>
    <circle cx="325" cy="345" r="30" fill="#ffe07a"/>
    <rect x="312" y="330" width="8" height="20" rx="4" fill="#c99a2f"/>
    <rect x="330" y="330" width="8" height="20" rx="4" fill="#c99a2f"/>
    <circle cx="315" cy="342" r="4" fill="#3a2a20"/>
    <circle cx="336" cy="342" r="4" fill="#3a2a20"/>
    <ellipse cx="325" cy="356" rx="8" ry="6" fill="#e0a63a"/>
    <g fill="#d99a2f"><circle cx="322" cy="400" r="5"/><circle cx="320" cy="440" r="5"/><circle cx="326" cy="470" r="5"/></g>
    <ellipse cx="316" cy="520" rx="7" ry="10" fill="#e0a63a"/>
    <ellipse cx="344" cy="520" rx="7" ry="10" fill="#e0a63a"/>
  </g>
  <g>
    <ellipse cx="400" cy="524" rx="24" ry="16" fill="#ffcf5c"/>
    <rect x="388" y="382" width="16" height="140" rx="8" fill="#ffe07a"/>
    <circle cx="396" cy="368" r="27" fill="#ffcf5c"/>
    <rect x="384" y="354" width="7" height="18" rx="3" fill="#c99a2f"/>
    <rect x="401" y="354" width="7" height="18" rx="3" fill="#c99a2f"/>
    <circle cx="388" cy="366" r="4" fill="#3a2a20"/>
    <circle cx="406" cy="366" r="4" fill="#3a2a20"/>
    <ellipse cx="396" cy="380" rx="7" ry="5" fill="#e0a63a"/>
    <g fill="#d99a2f"><circle cx="392" cy="420" r="4"/><circle cx="394" cy="455" r="4"/></g>
  </g>
  <g>
    <ellipse cx="450" cy="536" rx="34" ry="22" fill="#f2f2f2"/>
    <circle cx="450" cy="502" r="26" fill="#f7f7f7"/>
    <ellipse cx="438" cy="474" rx="9" ry="26" fill="#f7f7f7"/>
    <ellipse cx="462" cy="474" rx="9" ry="26" fill="#f7f7f7"/>
    <ellipse cx="438" cy="480" rx="4" ry="16" fill="#ffb6c8"/>
    <ellipse cx="462" cy="480" rx="4" ry="16" fill="#ffb6c8"/>
    <circle cx="441" cy="502" r="4" fill="#3a2a20"/>
    <circle cx="459" cy="502" r="4" fill="#3a2a20"/>
    <circle cx="450" cy="510" r="4" fill="#ffb6c8"/>
    <circle cx="432" cy="508" r="6" fill="#ffc2d2" opacity="0.7"/>
    <circle cx="468" cy="508" r="6" fill="#ffc2d2" opacity="0.7"/>
    <circle cx="480" cy="540" r="8" fill="#ffffff"/>
  </g>
  <g>
    <ellipse cx="510" cy="540" rx="30" ry="20" fill="#e6e6e6"/>
    <circle cx="510" cy="510" r="24" fill="#efefef"/>
    <ellipse cx="500" cy="484" rx="8" ry="23" fill="#efefef"/>
    <ellipse cx="522" cy="484" rx="8" ry="23" fill="#efefef"/>
    <ellipse cx="500" cy="490" rx="4" ry="14" fill="#ffb6c8"/>
    <ellipse cx="522" cy="490" rx="4" ry="14" fill="#ffb6c8"/>
    <circle cx="502" cy="510" r="4" fill="#3a2a20"/>
    <circle cx="518" cy="510" r="4" fill="#3a2a20"/>
    <circle cx="510" cy="518" r="4" fill="#ffb6c8"/>
    <circle cx="538" cy="544" r="7" fill="#ffffff"/>
  </g>
  <path d="M0 560 Q400 530 800 560" stroke="#4c9c33" stroke-width="8" fill="none" opacity="0.5"/>
  <g fill="#ffd34d">
    <path d="M120 200 l6 16 17 1 -13 11 4 17 -14-9 -14 9 4-17 -13-11 17-1z"/>
  </g>
</svg>`,

  "noe:rain": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chuva forte caindo do céu escuro enquanto a arca de madeira protege os animais">
  <defs>
    <linearGradient id="noe-rain-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5b708f"/>
      <stop offset="1" stop-color="#8fa6c2"/>
    </linearGradient>
    <linearGradient id="noe-rain-ark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c98a4c"/>
      <stop offset="1" stop-color="#9a5f2a"/>
    </linearGradient>
    <linearGradient id="noe-rain-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#4f8ec4"/>
      <stop offset="1" stop-color="#356fa6"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-rain-sky)"/>
  <g fill="#6d7f9c" opacity="0.95">
    <ellipse cx="180" cy="110" rx="110" ry="50"/>
    <ellipse cx="270" cy="130" rx="80" ry="42"/>
    <ellipse cx="90" cy="130" rx="70" ry="38"/>
  </g>
  <g fill="#5a6c88" opacity="0.95">
    <ellipse cx="600" cy="90" rx="120" ry="52"/>
    <ellipse cx="690" cy="115" rx="80" ry="40"/>
    <ellipse cx="500" cy="115" rx="70" ry="36"/>
  </g>
  <g stroke="#cfe4f5" stroke-width="4" stroke-linecap="round" opacity="0.8">
    <line x1="60" y1="200" x2="46" y2="250"/>
    <line x1="140" y1="220" x2="126" y2="270"/>
    <line x1="220" y1="200" x2="206" y2="250"/>
    <line x1="300" y1="230" x2="286" y2="280"/>
    <line x1="380" y1="200" x2="366" y2="250"/>
    <line x1="460" y1="230" x2="446" y2="280"/>
    <line x1="540" y1="200" x2="526" y2="250"/>
    <line x1="620" y1="230" x2="606" y2="280"/>
    <line x1="700" y1="200" x2="686" y2="250"/>
    <line x1="760" y1="225" x2="746" y2="275"/>
    <line x1="100" y1="300" x2="86" y2="350"/>
    <line x1="200" y1="320" x2="186" y2="370"/>
    <line x1="330" y1="300" x2="316" y2="350"/>
    <line x1="520" y1="310" x2="506" y2="360"/>
    <line x1="660" y1="300" x2="646" y2="350"/>
    <line x1="740" y1="320" x2="726" y2="370"/>
  </g>
  <path d="M0 430 Q200 410 400 430 Q600 450 800 428 L800 600 L0 600 Z" fill="url(#noe-rain-water)"/>
  <g stroke="#9ccbe8" stroke-width="5" fill="none" opacity="0.6" stroke-linecap="round">
    <path d="M40 480 q30 -18 60 0 q30 18 60 0"/>
    <path d="M640 500 q30 -18 60 0 q30 18 60 0"/>
    <path d="M120 550 q30 -18 60 0 q30 18 60 0"/>
  </g>
  <g>
    <path d="M240 440 q10 -50 160 -54 q150 4 160 54 l-30 30 q-130 26 -260 0 z" fill="url(#noe-rain-ark)"/>
    <rect x="240" y="335" width="320" height="80" rx="14" fill="#b9773a"/>
    <g stroke="#8a5424" stroke-width="4" opacity="0.6">
      <line x1="255" y1="365" x2="545" y2="365"/>
      <line x1="255" y1="395" x2="545" y2="395"/>
    </g>
    <path d="M330 335 l70 -70 l70 70 z" fill="#c34a4a"/>
    <path d="M340 335 l60 -60 l60 60 z" fill="#e05a5a"/>
    <rect x="386" y="300" width="28" height="35" rx="6" fill="#7a4a1f"/>
    <circle cx="300" cy="375" r="18" fill="#ffe07a"/>
    <circle cx="300" cy="375" r="18" fill="none" stroke="#8a5424" stroke-width="4"/>
    <circle cx="500" cy="375" r="18" fill="#ffe07a"/>
    <circle cx="500" cy="375" r="18" fill="none" stroke="#8a5424" stroke-width="4"/>
    <g>
      <circle cx="360" cy="290" r="16" fill="#f0b24a"/>
      <circle cx="352" cy="288" r="3" fill="#3a2a20"/>
      <circle cx="368" cy="288" r="3" fill="#3a2a20"/>
      <path d="M354 296 q6 6 12 0" stroke="#7a4a1f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M346 278 q-8 -6 -2 8" stroke="#f0b24a" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M374 278 q8 -6 2 8" stroke="#f0b24a" stroke-width="7" fill="none" stroke-linecap="round"/>
    </g>
    <g>
      <circle cx="440" cy="290" r="16" fill="#e8a23a"/>
      <circle cx="440" cy="290" r="18" fill="none" stroke="#c8791f" stroke-width="6"/>
      <circle cx="433" cy="288" r="3" fill="#3a2a20"/>
      <circle cx="447" cy="288" r="3" fill="#3a2a20"/>
      <path d="M434 296 q6 6 12 0" stroke="#7a4a1f" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>
  </g>
  <g stroke="#cfe4f5" stroke-width="4" stroke-linecap="round" opacity="0.7">
    <line x1="120" y1="470" x2="110" y2="500"/>
    <line x1="680" y1="470" x2="670" y2="500"/>
    <line x1="60" y1="420" x2="50" y2="450"/>
    <line x1="750" y1="420" x2="740" y2="450"/>
  </g>
</svg>`,

  "noe:float": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A arca flutuando calmamente sobre as águas com Noé cuidando dos animais na janela">
  <defs>
    <linearGradient id="noe-float-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9fd6ef"/>
      <stop offset="1" stop-color="#d7f1fb"/>
    </linearGradient>
    <linearGradient id="noe-float-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5aa0d0"/>
      <stop offset="1" stop-color="#3d7fb0"/>
    </linearGradient>
    <linearGradient id="noe-float-ark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d69a5a"/>
      <stop offset="1" stop-color="#a86a30"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-float-sky)"/>
  <circle cx="120" cy="110" r="55" fill="#ffe07a" opacity="0.9"/>
  <g fill="#ffffff" opacity="0.92">
    <ellipse cx="600" cy="110" rx="80" ry="40"/>
    <ellipse cx="660" cy="125" rx="55" ry="30"/>
    <ellipse cx="540" cy="125" rx="45" ry="26"/>
    <ellipse cx="300" cy="90" rx="55" ry="28"/>
    <ellipse cx="350" cy="100" rx="40" ry="22"/>
  </g>
  <path d="M0 400 Q200 380 400 400 Q600 420 800 398 L800 600 L0 600 Z" fill="url(#noe-float-water)"/>
  <g>
    <path d="M200 400 q10 -70 200 -74 q190 4 200 74 l-40 60 q-160 40 -320 0 z" fill="url(#noe-float-ark)"/>
    <g stroke="#8a5424" stroke-width="5" opacity="0.55">
      <line x1="220" y1="420" x2="580" y2="420"/>
      <line x1="235" y1="450" x2="565" y2="450"/>
      <line x1="255" y1="478" x2="545" y2="478"/>
    </g>
    <rect x="200" y="290" width="400" height="120" rx="16" fill="#b9773a"/>
    <g stroke="#8a5424" stroke-width="4" opacity="0.5">
      <line x1="215" y1="330" x2="585" y2="330"/>
      <line x1="215" y1="370" x2="585" y2="370"/>
    </g>
    <path d="M300 290 l100 -90 l100 90 z" fill="#c34a4a"/>
    <path d="M312 290 l88 -80 l88 80 z" fill="#e86a6a"/>
    <rect x="384" y="235" width="32" height="55" rx="6" fill="#7a4a1f"/>
    <rect x="392" y="180" width="6" height="35" fill="#8a5424"/>
    <path d="M398 182 l40 12 -40 14 z" fill="#ffcf5c"/>
    <circle cx="270" cy="335" r="22" fill="#fff2c2"/>
    <circle cx="270" cy="335" r="22" fill="none" stroke="#8a5424" stroke-width="5"/>
    <line x1="270" y1="313" x2="270" y2="357" stroke="#8a5424" stroke-width="4"/>
    <line x1="248" y1="335" x2="292" y2="335" stroke="#8a5424" stroke-width="4"/>
    <circle cx="530" cy="335" r="22" fill="#fff2c2"/>
    <circle cx="530" cy="335" r="22" fill="none" stroke="#8a5424" stroke-width="5"/>
    <line x1="530" y1="313" x2="530" y2="357" stroke="#8a5424" stroke-width="4"/>
    <line x1="508" y1="335" x2="552" y2="335" stroke="#8a5424" stroke-width="4"/>
    <g>
      <rect x="378" y="300" width="44" height="90" rx="10" fill="#a86a30"/>
      <rect x="386" y="308" width="28" height="78" rx="6" fill="#f7d9a0"/>
      <g>
        <path d="M388 335 q-6 -30 12 -40 q18 10 12 40 z" fill="#a06fc4"/>
        <circle cx="400" cy="304" r="15" fill="#f6c9a0"/>
        <path d="M386 300 q14 12 28 0 q2 -18 -14 -18 q-16 0 -14 18 z" fill="#f0f0f0"/>
        <path d="M386 296 q14 12 28 0 q0 -14 -14 -14 q-14 0 -14 14 z" fill="#f6c9a0"/>
        <circle cx="394" cy="300" r="2.5" fill="#3a2a20"/>
        <circle cx="406" cy="300" r="2.5" fill="#3a2a20"/>
        <path d="M396 308 q4 4 8 0" stroke="#c56a4a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M394 316 q10 14 20 0 q-2 12 -10 13 q-8 -1 -10 -13 z" fill="#eaeaea"/>
      </g>
    </g>
  </g>
  <g fill="#f0b24a">
    <ellipse cx="330" cy="345" rx="16" ry="12"/>
    <circle cx="323" cy="343" r="2.5" fill="#3a2a20"/>
    <circle cx="337" cy="343" r="2.5" fill="#3a2a20"/>
    <path d="M320 330 q-6 -6 -2 6" stroke="#f0b24a" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M340 330 q6 -6 2 6" stroke="#f0b24a" stroke-width="6" fill="none" stroke-linecap="round"/>
  </g>
  <g fill="#e8a23a">
    <circle cx="470" cy="345" r="15"/>
    <circle cx="470" cy="345" r="17" fill="none" stroke="#c8791f" stroke-width="5"/>
    <circle cx="464" cy="343" r="2.5" fill="#3a2a20"/>
    <circle cx="476" cy="343" r="2.5" fill="#3a2a20"/>
  </g>
  <g stroke="#bfe0f2" stroke-width="6" fill="none" opacity="0.7" stroke-linecap="round">
    <path d="M40 500 q40 -20 80 0 q40 20 80 0"/>
    <path d="M600 510 q40 -20 80 0 q40 20 80 0"/>
    <path d="M120 555 q40 -20 80 0 q40 20 80 0"/>
    <path d="M500 555 q40 -20 80 0 q40 20 80 0"/>
  </g>
  <g fill="#bfe0f2" opacity="0.8">
    <circle cx="180" cy="470" r="6"/>
    <circle cx="640" cy="475" r="6"/>
    <circle cx="380" cy="490" r="5"/>
  </g>
  <g fill="#ffffff">
    <path d="M690 260 q20 -14 30 0 q14 -8 8 12 q10 10 -8 14 q-12 12 -22 0 q-16 4 -10 -14 q-8 -12 2 -12 z" opacity="0.9"/>
  </g>
</svg>`,

  "noe:dove": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Uma pombinha branca voando com um raminho verde no bico voltando para a arca">
  <defs>
    <linearGradient id="noe-dove-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe6b0"/>
      <stop offset="0.5" stop-color="#ffd9d0"/>
      <stop offset="1" stop-color="#d7f0fb"/>
    </linearGradient>
    <radialGradient id="noe-dove-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff6d0"/>
      <stop offset="1" stop-color="#ffcf7a"/>
    </radialGradient>
    <linearGradient id="noe-dove-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5aa0d0"/>
      <stop offset="1" stop-color="#3d7fb0"/>
    </linearGradient>
    <linearGradient id="noe-dove-ark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d69a5a"/>
      <stop offset="1" stop-color="#a86a30"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-dove-sky)"/>
  <circle cx="660" cy="130" r="80" fill="url(#noe-dove-sun)"/>
  <g fill="#fff6d0" opacity="0.5">
    <circle cx="660" cy="130" r="110"/>
  </g>
  <g fill="#ffffff" opacity="0.9">
    <ellipse cx="150" cy="120" rx="70" ry="34"/>
    <ellipse cx="210" cy="130" rx="50" ry="28"/>
    <ellipse cx="520" cy="90" rx="55" ry="26"/>
  </g>
  <path d="M0 440 Q200 420 400 440 Q600 460 800 438 L800 600 L0 600 Z" fill="url(#noe-dove-water)"/>
  <g>
    <path d="M540 440 q8 -55 130 -58 q120 3 130 58 l-26 40 q-104 26 -208 0 z" fill="url(#noe-dove-ark)"/>
    <rect x="540" y="345" width="260" height="80" rx="14" fill="#b9773a"/>
    <g stroke="#8a5424" stroke-width="4" opacity="0.55">
      <line x1="555" y1="375" x2="785" y2="375"/>
      <line x1="555" y1="405" x2="785" y2="405"/>
    </g>
    <path d="M610 345 l60 -60 l60 60 z" fill="#c34a4a"/>
    <path d="M620 345 l50 -50 l50 50 z" fill="#e86a6a"/>
    <rect x="656" y="308" width="28" height="37" rx="6" fill="#7a4a1f"/>
    <circle cx="600" cy="385" r="18" fill="#fff2c2"/>
    <circle cx="600" cy="385" r="18" fill="none" stroke="#8a5424" stroke-width="4"/>
    <g>
      <circle cx="670" cy="270" r="17" fill="#f6c9a0"/>
      <path d="M655 266 q15 12 30 0 q2 -18 -15 -18 q-17 0 -15 18 z" fill="#f0f0f0"/>
      <path d="M655 262 q15 12 30 0 q0 -14 -15 -14 q-15 0 -15 14 z" fill="#f6c9a0"/>
      <circle cx="664" cy="266" r="2.5" fill="#3a2a20"/>
      <circle cx="676" cy="266" r="2.5" fill="#3a2a20"/>
      <path d="M665 274 q5 5 10 0" stroke="#c56a4a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M655 282 q15 16 30 0 q-3 14 -15 15 q-12 -1 -15 -15 z" fill="#a06fc4"/>
      <path d="M665 296 q5 20 10 40" stroke="#f6c9a0" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M660 300 q-16 -20 -30 -22" stroke="#f6c9a0" stroke-width="9" fill="none" stroke-linecap="round"/>
    </g>
  </g>
  <g>
    <ellipse cx="300" cy="280" rx="62" ry="40" fill="#ffffff"/>
    <ellipse cx="300" cy="280" rx="62" ry="40" fill="none" stroke="#e6edf2" stroke-width="3"/>
    <path d="M355 275 q40 -10 78 6 q-36 22 -78 12 z" fill="#f4f8fb"/>
    <path d="M355 275 q40 -10 78 6" fill="none" stroke="#dfe7ee" stroke-width="3"/>
    <circle cx="252" cy="262" r="32" fill="#ffffff"/>
    <circle cx="252" cy="262" r="32" fill="none" stroke="#e6edf2" stroke-width="3"/>
    <circle cx="240" cy="256" r="4" fill="#3a2a20"/>
    <path d="M222 260 l-24 -4 l24 -8 z" fill="#ffb14a"/>
    <path d="M250 300 q-10 40 -6 70" fill="none" stroke="#ffb14a" stroke-width="4" stroke-linecap="round"/>
    <path d="M256 300 q0 42 6 70" fill="none" stroke="#ffb14a" stroke-width="4" stroke-linecap="round"/>
    <path d="M310 300 q26 30 34 70 q-30 -20 -50 -50 z" fill="#f0f5f9"/>
    <path d="M310 300 q26 30 34 70" fill="none" stroke="#dfe7ee" stroke-width="3"/>
    <g>
      <path d="M180 258 q-30 -6 -50 6 q22 10 46 4 z" fill="#5cb85c"/>
      <line x1="182" y1="258" x2="130" y2="262" stroke="#3f9e3f" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="160" cy="250" rx="10" ry="6" fill="#6cc466" transform="rotate(-20 160 250)"/>
      <ellipse cx="145" cy="262" rx="10" ry="6" fill="#6cc466" transform="rotate(10 145 262)"/>
      <ellipse cx="168" cy="264" rx="9" ry="5" fill="#4fae52" transform="rotate(15 168 264)"/>
    </g>
  </g>
  <g fill="#ffffff" opacity="0.85">
    <circle cx="420" cy="160" r="6"/>
    <circle cx="460" cy="200" r="5"/>
    <circle cx="390" cy="210" r="4"/>
  </g>
  <g stroke="#bfe0f2" stroke-width="6" fill="none" opacity="0.6" stroke-linecap="round">
    <path d="M60 500 q40 -18 80 0 q40 18 80 0"/>
    <path d="M120 555 q40 -18 80 0 q40 18 80 0"/>
    <path d="M480 555 q40 -18 80 0 q40 18 80 0"/>
  </g>
</svg>`,

  "noe:rainbow": `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Um grande arco-íris no céu sobre a arca com Noé e os animais felizes na terra seca">
  <defs>
    <linearGradient id="noe-rb-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bdeeff"/>
      <stop offset="1" stop-color="#eafaff"/>
    </linearGradient>
    <radialGradient id="noe-rb-sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff4c2"/>
      <stop offset="1" stop-color="#ffd86b"/>
    </radialGradient>
    <linearGradient id="noe-rb-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9bdb6a"/>
      <stop offset="1" stop-color="#6cbf49"/>
    </linearGradient>
    <linearGradient id="noe-rb-ark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d69a5a"/>
      <stop offset="1" stop-color="#a86a30"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#noe-rb-sky)"/>
  <circle cx="120" cy="110" r="60" fill="url(#noe-rb-sun)"/>
  <g fill="#ffe07a" opacity="0.8">
    <rect x="112" y="18" width="16" height="30" rx="8"/>
    <rect x="18" y="102" width="30" height="16" rx="8"/>
  </g>
  <g fill="none" stroke-width="24" stroke-linecap="round">
    <path d="M120 560 A280 280 0 0 1 680 560" stroke="#ff6b6b"/>
    <path d="M144 560 A256 256 0 0 1 656 560" stroke="#ffa04a"/>
    <path d="M168 560 A232 232 0 0 1 632 560" stroke="#ffe05a"/>
    <path d="M192 560 A208 208 0 0 1 608 560" stroke="#6cd06c"/>
    <path d="M216 560 A184 184 0 0 1 584 560" stroke="#5aa6e8"/>
    <path d="M240 560 A160 160 0 0 1 560 560" stroke="#a06fc4"/>
  </g>
  <g fill="#ffffff" opacity="0.95">
    <ellipse cx="160" cy="250" rx="55" ry="30"/>
    <ellipse cx="210" cy="262" rx="42" ry="24"/>
    <ellipse cx="640" cy="240" rx="55" ry="30"/>
    <ellipse cx="690" cy="252" rx="42" ry="24"/>
  </g>
  <path d="M0 470 Q400 445 800 470 L800 600 L0 600 Z" fill="url(#noe-rb-ground)"/>
  <path d="M0 505 Q400 480 800 505 L800 600 L0 600 Z" fill="#7fce53" opacity="0.6"/>
  <g>
    <path d="M300 500 q8 -60 100 -63 q92 3 100 63 l-22 34 q-78 22 -156 0 z" fill="url(#noe-rb-ark)"/>
    <rect x="300" y="418" width="200" height="70" rx="12" fill="#b9773a"/>
    <g stroke="#8a5424" stroke-width="4" opacity="0.55">
      <line x1="314" y1="445" x2="486" y2="445"/>
      <line x1="314" y1="470" x2="486" y2="470"/>
    </g>
    <path d="M355 418 l45 -48 l45 48 z" fill="#c34a4a"/>
    <path d="M364 418 l36 -38 l36 38 z" fill="#e86a6a"/>
    <rect x="388" y="384" width="24" height="34" rx="5" fill="#7a4a1f"/>
    <circle cx="345" cy="455" r="15" fill="#fff2c2"/>
    <circle cx="345" cy="455" r="15" fill="none" stroke="#8a5424" stroke-width="4"/>
    <circle cx="455" cy="455" r="15" fill="#fff2c2"/>
    <circle cx="455" cy="455" r="15" fill="none" stroke="#8a5424" stroke-width="4"/>
  </g>
  <g>
    <ellipse cx="400" cy="580" rx="60" ry="14" fill="#4c9c33" opacity="0.35"/>
    <path d="M372 580 q-6 -60 28 -70 q34 10 28 70 z" fill="#a06fc4"/>
    <path d="M340 512 a36 36 0 0 1 36 36 v8 a36 36 0 0 1 -72 0 v-8 a36 36 0 0 1 36 -36 z" fill="#f6c9a0" transform="translate(60 0)"/>
    <g transform="translate(60 0)">
      <path d="M304 528 q36 28 72 0 q4 -42 -36 -44 q-40 2 -36 44 z" fill="#f0f0f0"/>
      <path d="M304 522 q36 28 72 0 q-4 -38 -36 -38 q-32 0 -36 38 z" fill="#f6c9a0"/>
      <circle cx="326" cy="530" r="4" fill="#3a2a20"/>
      <circle cx="354" cy="530" r="4" fill="#3a2a20"/>
      <path d="M332 544 q8 8 16 0" stroke="#c56a4a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="320" cy="538" r="5" fill="#ff9a8a" opacity="0.6"/>
      <circle cx="360" cy="538" r="5" fill="#ff9a8a" opacity="0.6"/>
      <path d="M320 548 q20 30 40 0 q-2 24 -20 26 q-18 -2 -20 -26 z" fill="#eaeaea"/>
      <path d="M366 555 q26 -6 30 -34" fill="none" stroke="#f6c9a0" stroke-width="12" stroke-linecap="round"/>
    </g>
  </g>
  <g>
    <ellipse cx="560" cy="560" rx="40" ry="26" fill="#e8a23a"/>
    <circle cx="560" cy="524" r="30" fill="#f0b24a"/>
    <circle cx="560" cy="524" r="34" fill="none" stroke="#c8791f" stroke-width="8"/>
    <circle cx="548" cy="522" r="4" fill="#3a2a20"/>
    <circle cx="572" cy="522" r="4" fill="#3a2a20"/>
    <ellipse cx="560" cy="534" rx="8" ry="6" fill="#7a4a1f"/>
    <path d="M550 540 q10 8 20 0" stroke="#7a4a1f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="530" cy="575" rx="8" ry="11" fill="#c8791f"/>
    <ellipse cx="590" cy="575" rx="8" ry="11" fill="#c8791f"/>
  </g>
  <g>
    <ellipse cx="230" cy="565" rx="30" ry="18" fill="#f2f2f2"/>
    <circle cx="230" cy="538" r="22" fill="#f7f7f7"/>
    <ellipse cx="220" cy="514" rx="7" ry="20" fill="#f7f7f7"/>
    <ellipse cx="240" cy="514" rx="7" ry="20" fill="#f7f7f7"/>
    <ellipse cx="220" cy="518" rx="3.5" ry="12" fill="#ffb6c8"/>
    <ellipse cx="240" cy="518" rx="3.5" ry="12" fill="#ffb6c8"/>
    <circle cx="222" cy="538" r="3.5" fill="#3a2a20"/>
    <circle cx="238" cy="538" r="3.5" fill="#3a2a20"/>
    <circle cx="230" cy="545" r="3.5" fill="#ffb6c8"/>
    <circle cx="214" cy="544" r="5" fill="#ffc2d2" opacity="0.7"/>
    <circle cx="246" cy="544" r="5" fill="#ffc2d2" opacity="0.7"/>
  </g>
  <g fill="#ff9ec2">
    <path d="M690 400 q8 -16 20 0 q16 -8 10 14 q8 12 -10 14 q-12 16 -20 0 q-18 2 -10 -14 q-8 -14 10 -14 z"/>
    <circle cx="700" cy="414" r="6" fill="#fff2c2"/>
  </g>
</svg>`
});

/* ===========================================================
   Bíblia Kids — lógica do app
   Livro digital interativo com narração por voz (Web Speech API)
   =========================================================== */
(function () {
  "use strict";

  // ---- Elementos ----
  const $ = (id) => document.getElementById(id);
  const libraryScreen = $("library");
  const readerScreen = $("reader");
  const grid = $("story-grid");
  const illustration = $("illustration");
  const pageEl = $("page");
  const pageText = $("page-text");
  const readerTitle = $("reader-title");
  const readerRef = $("reader-ref");
  const progress = $("progress");
  const playBtn = $("play-btn");
  const rateInput = $("rate");
  const rateVal = $("rate-val");
  const autoAdvance = $("autoadvance");
  const voiceSelect = $("voice-select");
  const voiceWarn = $("voice-warn");
  const settingsOverlay = $("settings-overlay");

  // ---- Estado ----
  let currentStory = null;
  let pages = []; // páginas da história + página da oração
  let pageIndex = 0;
  let isPlaying = false;
  let wordSpans = [];

  const synth = window.speechSynthesis;
  let voices = [];
  let chosenVoice = null;

  // Narração em áudio neural (arquivos pré-gerados em /audio)
  let currentAudio = null; // elemento <audio> em reprodução
  let audioMarks = null; // marcação de palavras [{t, c}] da página atual
  let lastMarkIdx = -1;

  // ===========================================================
  // BIBLIOTECA
  // ===========================================================
  function buildLibrary() {
    grid.innerHTML = "";
    STORIES.forEach((story) => {
      const card = document.createElement("button");
      card.className = "story-card";
      card.setAttribute("aria-label", "Abrir história: " + story.title);
      card.innerHTML = `
        <div class="story-card__cover" style="background:${story.color}">
          <span aria-hidden="true">${story.emoji}</span>
          <span class="story-card__play" aria-hidden="true">▶</span>
        </div>
        <div class="story-card__body">
          <h3>${story.title}</h3>
          <p>${story.subtitle}</p>
          <span class="story-card__ref">${story.reference}</span>
        </div>`;
      card.addEventListener("click", () => openStory(story));
      grid.appendChild(card);
    });
  }

  // ===========================================================
  // ABRIR / FECHAR HISTÓRIA
  // ===========================================================
  function openStory(story) {
    currentStory = story;
    pages = story.pages.slice();
    if (story.prayer) {
      pages.push({ scene: "prayer", text: story.prayer, isPrayer: true });
    }
    pageIndex = 0;

    readerTitle.textContent = story.title;
    readerRef.textContent = story.reference;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", story.color);

    buildProgress();
    showScreen("reader");
    renderPage();
  }

  function closeStory() {
    stopSpeech();
    showScreen("library");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#4a2f8f");
  }

  function showScreen(name) {
    libraryScreen.classList.toggle("is-active", name === "library");
    readerScreen.classList.toggle("is-active", name === "reader");
    window.scrollTo(0, 0);
  }

  // ===========================================================
  // RENDERIZAR PÁGINA
  // ===========================================================
  function buildProgress() {
    progress.innerHTML = "";
    pages.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      progress.appendChild(dot);
    });
  }

  function updateProgress() {
    [...progress.children].forEach((dot, i) => {
      dot.classList.toggle("active", i === pageIndex);
      dot.classList.toggle("done", i < pageIndex);
    });
  }

  function renderPage() {
    stopSpeech();
    const page = pages[pageIndex];

    // Ilustração
    const key = currentStory.id + ":" + page.scene;
    const svg =
      (window.SCENES && (window.SCENES[key] || window.SCENES[page.scene])) ||
      (window.SCENES && window.SCENES["_fallback"]) ||
      "";
    illustration.innerHTML = svg;

    // Texto com palavras clicáveis para destaque
    pageText.classList.toggle("prayer", !!page.isPrayer);
    wordSpans = [];
    pageText.innerHTML = "";
    const words = page.text.split(/(\s+)/);
    words.forEach((token) => {
      if (/^\s+$/.test(token)) {
        pageText.appendChild(document.createTextNode(token));
      } else {
        const span = document.createElement("span");
        span.className = "w";
        span.textContent = token;
        pageText.appendChild(span);
        wordSpans.push(span);
      }
    });

    // Página vira com animação
    pageEl.classList.remove("turning");
    void pageEl.offsetWidth;
    pageEl.classList.add("turning");

    updateProgress();
    updateNavButtons();
  }

  function updateNavButtons() {
    const atStart = pageIndex === 0;
    const atEnd = pageIndex === pages.length - 1;
    [$("prev-btn"), $("prev-btn-2")].forEach((b) => (b.disabled = atStart));
    [$("next-btn"), $("next-btn-2")].forEach((b) => (b.disabled = atEnd));
  }

  function goTo(index, autoRead) {
    if (index < 0 || index >= pages.length) return;
    pageIndex = index;
    renderPage();
    if (autoRead) speakCurrent();
  }

  // ===========================================================
  // NARRAÇÃO (Web Speech API)
  // ===========================================================
  function loadVoices() {
    voices = synth ? synth.getVoices() : [];
    const pt = voices.filter((v) => /pt/i.test(v.lang));
    voiceSelect.innerHTML = "";

    if (pt.length === 0 && voices.length > 0) {
      voiceWarn.hidden = false;
    } else {
      voiceWarn.hidden = true;
    }

    const list = pt.length ? pt : voices;
    list.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.name;
      opt.textContent = v.name + (/pt-BR/i.test(v.lang) ? " ⭐" : "");
      voiceSelect.appendChild(opt);
    });

    // Preferir uma voz pt-BR
    const preferred =
      pt.find((v) => /pt-BR/i.test(v.lang) && /female|maria|luciana|google/i.test(v.name)) ||
      pt.find((v) => /pt-BR/i.test(v.lang)) ||
      pt[0] ||
      voices[0];
    if (preferred) {
      chosenVoice = preferred;
      voiceSelect.value = preferred.name;
    }
  }

  // Converte o valor do slider (0.6–1.2, "Normal" = 0.9) em velocidade de
  // reprodução do áudio neural (1.0 = ritmo original gravado).
  function audioPlaybackRate() {
    const v = parseFloat(rateInput.value) || 0.9;
    const r = v / 0.9;
    return Math.min(1.6, Math.max(0.6, r));
  }

  // Ponto de entrada: tenta o áudio neural; se não houver/der erro, usa a voz
  // do navegador (Web Speech API).
  function speakCurrent() {
    stopSpeech();
    const page = pages[pageIndex];
    const base = "audio/" + currentStory.id + "-" + pageIndex;

    const audio = new Audio();
    audio.preload = "auto";
    currentAudio = audio;
    audioMarks = null;
    lastMarkIdx = -1;
    let fellBack = false;

    const fallback = () => {
      if (fellBack) return;
      fellBack = true;
      currentAudio = null;
      speakBrowser(page);
    };

    // Carrega a marcação de palavras (para o destaque sincronizado)
    fetch(base + ".json")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && currentAudio === audio) audioMarks = data.marks || [];
      })
      .catch(() => {});

    audio.playbackRate = audioPlaybackRate();
    audio.addEventListener("playing", () => setPlaying(true));
    audio.addEventListener("timeupdate", () => syncHighlight(page, audio));
    audio.addEventListener("ended", () => {
      clearHighlight();
      setPlaying(false);
      currentAudio = null;
      if (autoAdvance.checked && pageIndex < pages.length - 1) {
        setTimeout(() => goTo(pageIndex + 1, true), 700);
      }
    });
    audio.addEventListener("error", fallback);

    audio.src = base + ".mp3";
    const p = audio.play();
    if (p && p.catch) p.catch(fallback);
  }

  // Destaca a palavra correspondente ao instante atual do áudio
  function syncHighlight(page, audio) {
    if (!audioMarks || !audioMarks.length) return;
    const t = audio.currentTime;
    let idx = lastMarkIdx;
    while (idx + 1 < audioMarks.length && audioMarks[idx + 1].t <= t) idx++;
    if (idx !== lastMarkIdx) {
      lastMarkIdx = idx;
      if (idx >= 0) highlightWord(charIndexToWord(page.text, audioMarks[idx].c));
    }
  }

  // Narração pela voz do navegador (usada como fallback)
  function speakBrowser(page) {
    if (!synth) return;
    if (synth) synth.cancel();
    const utter = new SpeechSynthesisUtterance(page.text);
    utter.lang = "pt-BR";
    utter.rate = parseFloat(rateInput.value) || 0.9;
    utter.pitch = 1.08;
    if (chosenVoice) utter.voice = chosenVoice;

    utter.onboundary = (e) => {
      if (e.name && e.name !== "word") return;
      highlightWord(charIndexToWord(page.text, e.charIndex));
    };
    utter.onstart = () => setPlaying(true);
    utter.onend = () => {
      clearHighlight();
      setPlaying(false);
      if (autoAdvance.checked && pageIndex < pages.length - 1) {
        setTimeout(() => goTo(pageIndex + 1, true), 700);
      }
    };
    utter.onerror = () => {
      clearHighlight();
      setPlaying(false);
    };

    synth.speak(utter);
    if (synth.paused) synth.resume();
  }

  function charIndexToWord(text, charIndex) {
    // Conta quantas palavras vieram antes do charIndex
    const before = text.slice(0, charIndex);
    const matches = before.match(/\S+/g);
    return matches ? matches.length : 0;
  }

  function highlightWord(i) {
    wordSpans.forEach((s, idx) => s.classList.toggle("spoken", idx === i));
  }
  function clearHighlight() {
    wordSpans.forEach((s) => s.classList.remove("spoken"));
  }

  function stopSpeech() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = "";
      currentAudio = null;
    }
    audioMarks = null;
    lastMarkIdx = -1;
    if (synth) synth.cancel();
    clearHighlight();
    setPlaying(false);
  }

  function setPlaying(state) {
    isPlaying = state;
    playBtn.classList.toggle("playing", state);
    playBtn.querySelector(".play-icon").textContent = state ? "⏸" : "▶";
    playBtn.querySelector(".play-label").textContent = state ? "Pausar" : "Ouvir";
  }

  function togglePlay() {
    if (isPlaying) {
      stopSpeech();
    } else {
      speakCurrent();
    }
  }

  // ===========================================================
  // CONFIGURAÇÕES
  // ===========================================================
  function updateRateLabel() {
    const r = parseFloat(rateInput.value);
    let label = "Normal";
    if (r < 0.8) label = "Bem devagar";
    else if (r < 0.9) label = "Devagar";
    else if (r > 1.05) label = "Rápido";
    else if (r > 0.95) label = "Um pouco rápido";
    rateVal.textContent = label;
  }

  function openSettings() {
    settingsOverlay.classList.add("is-open");
  }
  function closeSettings() {
    settingsOverlay.classList.remove("is-open");
  }

  // ===========================================================
  // EVENTOS
  // ===========================================================
  function bindEvents() {
    $("back-btn").addEventListener("click", closeStory);
    $("prev-btn").addEventListener("click", () => goTo(pageIndex - 1, false));
    $("next-btn").addEventListener("click", () => goTo(pageIndex + 1, false));
    $("prev-btn-2").addEventListener("click", () => goTo(pageIndex - 1, false));
    $("next-btn-2").addEventListener("click", () => goTo(pageIndex + 1, false));
    playBtn.addEventListener("click", togglePlay);

    $("settings-btn").addEventListener("click", openSettings);
    $("settings-close").addEventListener("click", closeSettings);
    settingsOverlay.addEventListener("click", (e) => {
      if (e.target === settingsOverlay) closeSettings();
    });

    rateInput.addEventListener("input", () => {
      updateRateLabel();
      if (currentAudio) currentAudio.playbackRate = audioPlaybackRate();
    });
    voiceSelect.addEventListener("change", () => {
      chosenVoice = voices.find((v) => v.name === voiceSelect.value) || null;
    });

    // Teclado (setas + espaço)
    document.addEventListener("keydown", (e) => {
      if (!readerScreen.classList.contains("is-active")) return;
      if (e.key === "ArrowRight") goTo(pageIndex + 1, false);
      else if (e.key === "ArrowLeft") goTo(pageIndex - 1, false);
      else if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "Escape") closeStory();
    });

    // Gestos de deslizar (swipe) no livro
    let touchX = null;
    pageEl.addEventListener(
      "touchstart",
      (e) => (touchX = e.changedTouches[0].clientX),
      { passive: true }
    );
    pageEl.addEventListener(
      "touchend",
      (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 60) {
          if (dx < 0) goTo(pageIndex + 1, false);
          else goTo(pageIndex - 1, false);
        }
        touchX = null;
      },
      { passive: true }
    );

    // Parar a fala ao sair/ocultar a aba
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopSpeech();
    });
    window.addEventListener("beforeunload", stopSpeech);
  }

  // ===========================================================
  // INICIALIZAÇÃO
  // ===========================================================
  function init() {
    buildLibrary();
    bindEvents();
    updateRateLabel();
    if (synth) {
      loadVoices();
      if (typeof synth.onvoiceschanged !== "undefined") {
        synth.onvoiceschanged = loadVoices;
      }
    } else {
      voiceWarn.hidden = false;
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

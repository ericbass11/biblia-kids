/*
 * Extrai o texto de todas as páginas (conteúdo + oração) de stories.js
 * para /tmp/pages.json, usado por scripts/gerar_audio.py.
 *
 * Uso: node scripts/dump_paginas.js
 */
const path = require("path");
const STORIES = require(path.join(__dirname, "..", "stories.js"));

const out = [];
for (const s of STORIES) {
  const pages = s.pages.slice();
  if (s.prayer) pages.push({ text: s.prayer, isPrayer: true });
  pages.forEach((p, i) => out.push({ key: `${s.id}-${i}`, text: p.text }));
}

const dest = process.env.PAGES_JSON || "/tmp/pages.json";
require("fs").writeFileSync(dest, JSON.stringify(out, null, 2));
console.log(`Páginas exportadas: ${out.length} -> ${dest}`);

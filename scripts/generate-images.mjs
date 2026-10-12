// Generates lightweight SVG "screenshots" for each product into /public/images.
// Replace these with real screenshots from the trainer (keep file names or update src/data/products.js).
import { writeFileSync } from "node:fs";

const S = "#c9cfd9"; // silver
const BG = "#070a12";
const PANEL = "#0d1220";

const frame = (title, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" role="img" aria-label="${title} dashboard preview">
<defs>
  <radialGradient id="g" cx="50%" cy="0%" r="80%"><stop offset="0" stop-color="#8aa4ff" stop-opacity=".22"/><stop offset="1" stop-color="#8aa4ff" stop-opacity="0"/></radialGradient>
  <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#7f8aa3"/></linearGradient>
</defs>
<rect width="1200" height="750" fill="${BG}"/><rect width="1200" height="750" fill="url(#g)"/>
<rect x="40" y="40" width="1120" height="670" rx="20" fill="${PANEL}" stroke="${S}" stroke-opacity=".55"/>
<circle cx="76" cy="76" r="6" fill="${S}" fill-opacity=".6"/><circle cx="98" cy="76" r="6" fill="${S}" fill-opacity=".4"/><circle cx="120" cy="76" r="6" fill="${S}" fill-opacity=".25"/>
<text x="600" y="82" fill="${S}" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" opacity=".8">${title}</text>
<line x1="40" y1="108" x2="1160" y2="108" stroke="${S}" stroke-opacity=".25"/>
<rect x="40" y="108" width="190" height="602" fill="#0a0f1b"/><line x1="230" y1="108" x2="230" y2="710" stroke="${S}" stroke-opacity=".25"/>
${[0, 1, 2, 3, 4].map((i) => `<rect x="62" y="${140 + i * 48}" width="${i === 0 ? 146 : 110 - i * 8}" height="16" rx="8" fill="${S}" fill-opacity="${i === 0 ? 0.55 : 0.18}"/>`).join("")}
${body}
</svg>`;

const line = (x, y, w, o = 0.2, h = 12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${S}" fill-opacity="${o}"/>`;
const card = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#101729" stroke="${S}" stroke-opacity=".3"/>`;

const kanban = () => [0, 1, 2].map((c) => {
  const x = 262 + c * 290;
  return `${card(x, 140, 270, 540)}${line(x + 20, 164, 110, 0.55, 14)}` +
    [0, 1, 2, 3].slice(0, 4 - (c === 2 ? 1 : 0)).map((r) => `${card(x + 16, 200 + r * 118, 238, 100)}${line(x + 32, 220 + r * 118, 150, 0.5)}${line(x + 32, 246 + r * 118, 190, 0.2)}${line(x + 32, 272 + r * 118, 70, 0.35, 10)}`).join("");
}).join("");

const tickets = () => `${card(262, 140, 330, 540)}${card(612, 140, 520, 540)}` +
  [0, 1, 2, 3, 4].map((r) => `${line(282, 166 + r * 98, 40, 0.4, 40)}${line(336, 170 + r * 98, 190, 0.5)}${line(336, 196 + r * 98, 150, 0.2)}`).join("") +
  [0, 1, 2, 3].map((r) => `<rect x="${r % 2 ? 790 : 636}" y="${170 + r * 90}" width="${r % 2 ? 320 : 280}" height="62" rx="14" fill="${S}" fill-opacity="${r % 2 ? 0.28 : 0.12}"/>`).join("") +
  `<rect x="636" y="610" width="470" height="48" rx="24" fill="none" stroke="${S}" stroke-opacity=".5"/>`;

const invoice = () => `${[0, 1, 2].map((i) => `${card(262 + i * 300, 140, 280, 110)}${line(282 + i * 300, 164, 90, 0.3)}${line(282 + i * 300, 192, 150, 0.7, 24)}`).join("")}${card(262, 276, 870, 404)}` +
  [0, 1, 2, 3, 4, 5].map((r) => `${line(286, 308 + r * 56, 130, r ? 0.45 : 0.6)}${line(500, 308 + r * 56, 200, 0.2)}${line(780, 308 + r * 56, 80, 0.3)}<rect x="960" y="${302 + r * 56}" width="${90 + (r % 3) * 10}" height="26" rx="13" fill="${S}" fill-opacity="${r % 2 ? 0.14 : 0.35}"/>${r < 5 ? `<line x1="286" y1="${338 + r * 56}" x2="1108" y2="${338 + r * 56}" stroke="${S}" stroke-opacity=".12"/>` : ""}`).join("");

const pulse = () => {
  const pts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `${290 + i * 90},${400 - [40, 90, 60, 140, 110, 170, 140, 210, 180, 240][i] + 120}`).join(" ");
  return `${card(262, 140, 870, 360)}<polyline points="${pts}" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/><polyline points="${pts}" fill="none" stroke="#8aa4ff" stroke-opacity=".35" stroke-width="14" stroke-linejoin="round"/>` +
    [0, 1, 2].map((i) => `${card(262 + i * 300, 524, 270, 156)}${line(284 + i * 300, 550, 100, 0.3)}${line(284 + i * 300, 584, 150, 0.7, 28)}${line(284 + i * 300, 640, 190, 0.18, 10)}`).join("");
};

const charts = () => `${card(262, 140, 520, 540)}${card(802, 140, 330, 250)}${card(802, 410, 330, 270)}` +
  [0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const h = [120, 200, 160, 300, 240, 340, 280, 380][i]; return `<rect x="${296 + i * 58}" y="${640 - h}" width="34" height="${h}" rx="8" fill="url(#bar)" fill-opacity="${0.35 + i * 0.08}"/>`; }).join("") +
  `<circle cx="967" cy="270" r="76" fill="none" stroke="${S}" stroke-opacity=".2" stroke-width="22"/><circle cx="967" cy="270" r="76" fill="none" stroke="#fff" stroke-width="22" stroke-dasharray="300 480" transform="rotate(-90 967 270)"/>` +
  [0, 1, 2, 3].map((r) => `${line(826, 440 + r * 56, 90, 0.4)}${line(940, 440 + r * 56, 170 - r * 30, 0.2)}`).join("");

const calendar = () => `${card(262, 140, 870, 540)}` +
  ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => `<text x="${330 + i * 116}" y="190" fill="${S}" opacity=".7" font-family="Arial" font-size="18" text-anchor="middle">${d}</text>`).join("") +
  [0, 1, 2, 3].map((r) => `${line(286, 232 + r * 106, 20, 0.0)}` + [0, 1, 2, 3, 4, 5, 6].map((c) => ((r * 7 + c) % 3 === 0 ? `<rect x="${278 + c * 116}" y="${216 + r * 106}" width="104" height="88" rx="12" fill="${S}" fill-opacity="${0.12 + ((r + c) % 3) * 0.1}" stroke="${S}" stroke-opacity=".35"/>${line(292 + c * 116, 236 + r * 106, 60, 0.6, 10)}${line(292 + c * 116, 260 + r * 106, 40, 0.3, 10)}` : `<rect x="${278 + c * 116}" y="${216 + r * 106}" width="104" height="88" rx="12" fill="none" stroke="${S}" stroke-opacity=".14"/>`)).join("")).join("");

const items = {
  "taskflow-screen": ["TaskFlow", kanban],
  "datalens-screen": ["DataLens", charts],
  "securevault-screen": ["SecureVault", invoice],
  "autosync-screen": ["AutoSync", pulse],
};

for (const [file, [title, fn]] of Object.entries(items)) {
  writeFileSync(new URL(`../public/images/${file}.svg`, import.meta.url), frame(title, fn()));
}

// ---------- Card icons (silver, glowing) ----------
const iconWrap = (label, inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="${label}">
<defs>
<linearGradient id="m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#b9c1d1"/><stop offset="1" stop-color="#5d6780"/></linearGradient>
<linearGradient id="d" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8e98ad"/><stop offset="1" stop-color="#2a3145"/></linearGradient>
<radialGradient id="h" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#9db4ff" stop-opacity=".35"/><stop offset="1" stop-color="#9db4ff" stop-opacity="0"/></radialGradient>
<filter id="b" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
</defs>
<ellipse cx="200" cy="215" rx="170" ry="140" fill="url(#h)"/>
<ellipse cx="200" cy="350" rx="110" ry="14" fill="#9db4ff" opacity=".25" filter="url(#b)"/>
${inner}
</svg>`;

const layers = iconWrap("Layered cloud stack icon", [0, 1, 2].map((i) => {
  const y = 250 - i * 52;
  return `<path d="M200 ${y - 60} L320 ${y} L200 ${y + 60} L80 ${y} Z" fill="${i === 2 ? "url(#m)" : "url(#d)"}" stroke="#dfe4ee" stroke-opacity=".8" stroke-width="2"/><path d="M80 ${y} L200 ${y + 60} L320 ${y} L320 ${y + 18} L200 ${y + 78} L80 ${y + 18} Z" fill="url(#d)" stroke="#dfe4ee" stroke-opacity=".5" stroke-width="2"/>`;
}).join(""));

const bars = iconWrap("Rising bar chart icon", [0, 1, 2, 3].map((i) => {
  const h = 70 + i * 55, x = 90 + i * 60;
  return `<rect x="${x}" y="${320 - h}" width="44" height="${h}" rx="6" fill="url(#m)" stroke="#fff" stroke-opacity=".7" stroke-width="2"/><rect x="${x + 30}" y="${326 - h}" width="14" height="${h - 6}" rx="3" fill="#2a3145" opacity=".45"/>`;
}).join("") + `<polyline points="95,215 170,160 235,185 315,85" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`);

const shield = iconWrap("Shield with check mark icon",
  `<path d="M200 55 L315 100 V195 C315 270 265 322 200 348 C135 322 85 270 85 195 V100 Z" fill="url(#m)" stroke="#fff" stroke-width="3"/>
   <path d="M200 80 L292 116 V195 C292 255 252 298 200 320 Z" fill="#fff" opacity=".28"/>
   <path d="M200 100 L275 130 V195 C275 245 243 282 200 302 C157 282 125 245 125 195 V130 Z" fill="url(#d)"/>
   <path d="M158 200 L192 234 L248 160" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>`);

const teeth = Array.from({ length: 8 }, (_, i) => `<rect x="178" y="48" width="44" height="64" rx="8" fill="url(#m)" stroke="#fff" stroke-opacity=".7" stroke-width="2" transform="rotate(${i * 45} 200 200)"/>`).join("");
const gear = iconWrap("Gear icon", `${teeth}<circle cx="200" cy="200" r="104" fill="url(#m)" stroke="#fff" stroke-width="3"/><circle cx="200" cy="200" r="52" fill="#070a12" stroke="#dfe4ee" stroke-width="4"/><circle cx="200" cy="200" r="22" fill="url(#d)"/>`);

writeFileSync(new URL("../public/images/icon-taskflow.svg", import.meta.url), layers);
writeFileSync(new URL("../public/images/icon-datalens.svg", import.meta.url), bars);
writeFileSync(new URL("../public/images/icon-securevault.svg", import.meta.url), shield);
writeFileSync(new URL("../public/images/icon-autosync.svg", import.meta.url), gear);

// ---------- Hero laptop ----------
const lp = [60, 100, 80, 130, 110, 165, 140, 190].map((v, i) => `${200 + i * 70},${360 - v}`).join(" ");
const laptop = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560" role="img" aria-label="Laptop showing a Syncorp analytics dashboard">
<defs>
<radialGradient id="gl" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#8aa4ff" stop-opacity=".32"/><stop offset="1" stop-color="#8aa4ff" stop-opacity="0"/></radialGradient>
<linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3e7ef"/><stop offset="1" stop-color="#6b7388"/></linearGradient>
</defs>
<ellipse cx="450" cy="270" rx="450" ry="270" fill="url(#gl)"/>
<rect x="130" y="40" width="640" height="395" rx="22" fill="#0b0f1a" stroke="#c9cfd9" stroke-opacity=".8" stroke-width="2"/>
<rect x="148" y="58" width="604" height="359" rx="10" fill="#070a12"/>
<rect x="148" y="58" width="120" height="359" fill="#0a0f1b"/>
${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="164" y="${86 + i * 34}" width="${i === 0 ? 88 : 70 - i * 4}" height="12" rx="6" fill="#c9cfd9" fill-opacity="${i === 0 ? 0.55 : 0.18}"/>`).join("")}
<rect x="288" y="78" width="130" height="14" rx="7" fill="#c9cfd9" fill-opacity=".55"/>
${[0, 1, 2].map((i) => `<rect x="${288 + i * 154}" y="108" width="140" height="62" rx="10" fill="#101729" stroke="#c9cfd9" stroke-opacity=".3"/><rect x="${302 + i * 154}" y="122" width="50" height="8" rx="4" fill="#c9cfd9" fill-opacity=".3"/><rect x="${302 + i * 154}" y="140" width="80" height="16" rx="8" fill="#fff" fill-opacity=".8"/>`).join("")}
<rect x="288" y="186" width="454" height="214" rx="12" fill="#101729" stroke="#c9cfd9" stroke-opacity=".3"/>
<polyline points="${lp.split(" ").map((pt) => { const [x, y] = pt.split(","); return `${+x + 56},${+y + 56}`; }).join(" ")}" fill="none" stroke="#8aa4ff" stroke-opacity=".4" stroke-width="12" stroke-linejoin="round"/>
<polyline points="${lp.split(" ").map((pt) => { const [x, y] = pt.split(","); return `${+x + 56},${+y + 56}`; }).join(" ")}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
<path d="M60 436 H840 L880 470 Q884 484 868 484 H32 Q16 484 20 470 Z" fill="url(#bs)" stroke="#fff" stroke-opacity=".6"/>
<rect x="380" y="436" width="140" height="10" rx="5" fill="#2a3145"/>
</svg>`;
writeFileSync(new URL("../public/images/hero-laptop.svg", import.meta.url), laptop);

// ---------- Mountain scene for the Why Choose section ----------
const mountains = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" role="img" aria-label="Dark mountain landscape">
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1224"/><stop offset="1" stop-color="#05070d"/></linearGradient>
<linearGradient id="p1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b4560"/><stop offset="1" stop-color="#0a0e1a"/></linearGradient>
<linearGradient id="p2" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f2740"/><stop offset="1" stop-color="#05070d"/></linearGradient>
<radialGradient id="mg" cx="50%" cy="0%" r="70%"><stop offset="0" stop-color="#9db4ff" stop-opacity=".25"/><stop offset="1" stop-color="#9db4ff" stop-opacity="0"/></radialGradient>
</defs>
<rect width="800" height="560" fill="url(#sky)"/><rect width="800" height="560" fill="url(#mg)"/>
<polygon points="-20,560 180,230 300,380 430,150 640,420 700,330 820,560" fill="url(#p2)"/>
<polygon points="430,150 520,300 470,290 430,380 380,270 340,300" fill="#c9cfd9" fill-opacity=".1"/>
<polygon points="-40,560 120,330 240,450 360,260 560,560" fill="url(#p1)" stroke="#c9cfd9" stroke-opacity=".35"/>
<polyline points="360,260 330,330 360,360 300,430" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.5"/>
<polygon points="300,560 520,330 640,450 820,300 820,560" fill="#070a12" stroke="#c9cfd9" stroke-opacity=".3"/>
<rect y="500" width="800" height="60" fill="#05070d"/>
</svg>`;
writeFileSync(new URL("../public/images/mountains.svg", import.meta.url), mountains);

console.log("Generated images");

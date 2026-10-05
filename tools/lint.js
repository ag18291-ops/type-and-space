#!/usr/bin/env node
// Rendered-DOM compliance lint for the type-and-space skill.
// Usage: node tools/lint.js page.html [--width 1100] [--height 900]
// Needs: npm i playwright-core, and a Chromium (set CHROMIUM_PATH, or let Playwright find its own).
// Prints JSON metrics: body size/leading, heading sizes, distinct font sizes, box padding (equal vs bottom>top),
// tracking on lowercase, control heights, characters per line, chroma colours, font families, caps use, overflow.
const { chromium } = require('playwright-core');
const path = require('path');
const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('--'));
const opt = n => { const i = args.indexOf('--' + n); return i >= 0 ? +args[i + 1] : undefined; };
if (!file) { console.error('usage: node tools/lint.js page.html [--width N] [--height N]'); process.exit(1); }
function measure() {
  const px = v => parseFloat(v) || 0;
  const all = [...document.body.querySelectorAll('*')];
  const textEls = all.filter(e => [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 0));
  const cs = e => getComputedStyle(e);
  const vis = e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && cs(e).visibility !== 'hidden' && cs(e).display !== 'none'; };
  const T = textEls.filter(vis);
  const sizes = new Set(T.map(e => Math.round(px(cs(e).fontSize) * 2) / 2));
  const paras = T.filter(e => e.tagName === 'P' && e.textContent.trim().length > 90);
  const bodySize = (() => { const m = {}; T.forEach(e => { const s = Math.round(px(cs(e).fontSize)); m[s] = (m[s] || 0) + e.textContent.trim().length; }); return +Object.entries(m).sort((a, b) => b[1] - a[1])[0][0]; })();
  const lhs = paras.map(e => { const c = cs(e); const lh = c.lineHeight === 'normal' ? 1.2 : px(c.lineHeight) / px(c.fontSize); return lh; }).sort((a, b) => a - b);
  const bodyLH = lhs.length ? lhs[Math.floor(lhs.length / 2)] : null;
  const hs = ['H1', 'H2', 'H3', 'H4'].map(t => { const e = [...document.querySelectorAll(t)].filter(vis)[0]; return e ? Math.round(px(cs(e).fontSize)) : null; });
  const levels = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].filter(t => [...document.querySelectorAll(t)].some(vis)).length;
  // boxed containers
  const boxes = all.filter(vis).filter(e => { const c = cs(e); const bg = c.backgroundColor; const hasBg = bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent'; const hasB = px(c.borderTopWidth) > 0 || px(c.borderLeftWidth) > 0; return (hasBg || hasB) && px(c.paddingTop) > 4 && e.getBoundingClientRect().height > 60 && e.textContent.trim().length > 20; });
  const eq = boxes.filter(e => Math.abs(px(cs(e).paddingTop) - px(cs(e).paddingBottom)) < 0.6).length;
  const gt = boxes.filter(e => px(cs(e).paddingBottom) > px(cs(e).paddingTop) + 0.6).length;
  // lowercase tracking
  const lowTrack = T.filter(e => { const c = cs(e); const t = e.textContent.trim(); const upper = c.textTransform === 'uppercase' || (t === t.toUpperCase() && /[A-ZА-Я]/.test(t)); return px(c.letterSpacing) > 0.4 && !upper; }).length;
  // controls
  const ctl = all.filter(vis).filter(e => ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(e.tagName) || (e.tagName === 'A' && /btn|button|cta|tab|chip/i.test(e.className)) || e.getAttribute('role') === 'button' || e.getAttribute('role') === 'tab');
  const ctlH = ctl.map(e => e.getBoundingClientRect().height);
  const ctlOK = ctlH.filter(h => h >= 43.5).length;
  // measure: chars per line for long paragraphs
  const cpl = paras.map(e => { const c = cs(e); const lh = c.lineHeight === 'normal' ? px(c.fontSize) * 1.2 : px(c.lineHeight); const lines = Math.max(1, Math.round(e.getBoundingClientRect().height / lh)); return lines > 1 ? Math.round(e.textContent.trim().length / lines) : null; }).filter(Boolean);
  const maxCpl = cpl.length ? Math.max(...cpl) : null;
  const centered = paras.filter(e => cs(e).textAlign === 'center').length;
  // numeric alignment
  const nums = T.filter(e => /^[−+\-]?[$€£]?[\d,]+(\.\d+)?\s?[%hx]?$/.test(e.textContent.trim()) && e.textContent.trim().length > 2);
  const numOK = nums.filter(e => { const c = cs(e); const p = e.parentElement ? cs(e.parentElement) : c; return c.textAlign === 'right' || c.textAlign === 'end' || p.textAlign === 'right' || p.textAlign === 'end' || c.fontVariantNumeric.includes('tabular') || p.fontVariantNumeric.includes('tabular'); }).length;
  // overflow & clipping
  const de = document.documentElement;
  const clipped = all.filter(vis).filter(e => { const c = cs(e); return (c.overflow === 'hidden' || c.overflowY === 'hidden') && e.scrollHeight > e.clientHeight + 3 && e.clientHeight > 0; }).length;
  const fam = new Set(T.map(e => cs(e).fontFamily.split(',')[0].replace(/["']/g, '').trim()));
    const upperEls = T.filter(e => { const c = cs(e); const t = e.textContent.trim(); return c.textTransform === 'uppercase' || (t === t.toUpperCase() && /[A-Z]/.test(t) && t.length > 3); });
    const upperLong = upperEls.filter(e => e.textContent.trim().split(/\s+/).length > 2).length;
    const upperTracked = upperEls.filter(e => px(cs(e).letterSpacing) > 0.3).length;
    const italicEls = T.filter(e => cs(e).fontStyle === 'italic').length;
    const boldProse = T.filter(e => (e.tagName === 'STRONG' || e.tagName === 'B')).length;
    const synth = getComputedStyle(document.body).fontSynthesis;
    const straightQuotes = (document.body.innerText.match(/["']/g) || []).length;
    const typedCapsRuns = (document.body.innerText.match(/\b[A-Z]{4,}\b/g) || []).length;
  const parseRGB = s => { const m = (s || '').match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,\/]+/).map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const chromaSet = new Set(); all.filter(vis).forEach(e => { const c = cs(e); [c.color, c.backgroundColor, px(c.borderTopWidth) > 0 ? c.borderTopColor : null].forEach(v => { const q = parseRGB(v); if (q && q.a > 0.1 && (Math.max(q.r, q.g, q.b) - Math.min(q.r, q.g, q.b)) > 14) chromaSet.add(v); }); });
  const display = Math.max(...T.map(e => px(cs(e).fontSize)));
  return { bodySize, bodyLH: bodyLH && +bodyLH.toFixed(2), h: hs, levels, distinctSizes: sizes.size, boxes: boxes.length, boxEqualPad: eq, boxBottomGtTop: gt, lowerTracking: lowTrack,
    controls: ctl.length, controlsOK44: ctlOK, minControlH: ctlH.length ? Math.round(Math.min(...ctlH)) : null, maxCharsPerLine: maxCpl, centeredLongParas: centered,
    numericCells: nums.length, numericAligned: numOK, overflowX: de.scrollWidth - de.clientWidth, clipped, displayRatio: +(display / bodySize).toFixed(2), pageH: de.scrollHeight, chromaColors: chromaSet.size, families: fam.size, famList: [...fam].slice(0, 4).join(' | '), upperEls: upperEls.length, upperLong, upperTracked, italicEls, boldProse, fontSynthesis: synth, straightQuotes, typedCapsRuns };
}

(async () => {
  const b = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH, args: ['--no-sandbox'] } : {});
  const ctx = await b.newContext({ viewport: { width: opt('width') || 1100, height: opt('height') || 900 } });
  const p = await ctx.newPage();
  await p.goto('file://' + path.resolve(file));
  await p.waitForTimeout(150);
  console.log(JSON.stringify(await p.evaluate(measure), null, 2));
  await b.close();
})();

# 06 — Typeface and style

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

**What this file gives and does not give.** It names no recommended typeface and has no fixed rule for serif vs sans, weight contrast or italic. What it does give is an *operating system of styles*: two families with roles, a few levers per hierarchy step, specific uses of caps, small caps, italic and numerals, and a microtypography discipline. Everything below that picks a class of face for a job is EST/ADAPTED and is marked so.

## 1. Choosing the class of face by job

| Job | Class | Origin |
|---|---|---|
| Long reading, science, premium ("Renaissance" skeleton) | old-style serif roman with italic for annotation, no bold; caps only for inscriptions and labels | CORE + CORE (Tufte, Poliphilo) |
| UI, business information, navigation, tables, controls ("ikea" / Swiss skeleton) | plain humanist or neo-grotesque sans, flush-left, size contrast | CORE + CORE (IKEA, iPhone, T2, Skyscanner) |
| Headings | serif regular large, **or** sans bold at medium size; sentence case, no period | CORE |
| Numbers (factoids, prices, KPIs) | same family as the surrounding text, large, regular or bold, one accent colour; unit and currency small | CORE |
| Display / decorative / script / Slavic hands | rare, one per piece, brand moves only; not a default for everyday work | CORE (Kagor critique), CORE |

- Do not default to all-caps display or brick-justified blocks. CORE
- The neutral skeleton is a base: a graphic idea and brand style go on top. CORE
- With only system fonts (no web fonts), see section 7 for stacks; the roles stay the same. ADAPTED

## 1b. Voice for typography-led pieces

When the type *is* the design (restaurant menu, cover, poster, editorial opener, label, invitation), the neutral skeleton is the floor and is not enough: an all-neutral pair (serif + system sans) reads as generic and undifferentiated: the neutral skeleton needs a graphic move on top. CORE

Rule: **keep the skeleton, add exactly one expressive display moment.** Not for UI screens, dashboards or transactional email.

- **Pick the moment** (the title, the name, one big word or figure) and set it in a display face chosen for character: a high-contrast display serif; a condensed or heavy grotesque; a slab. At most one display face, used once. ADAPTED
- **Two working families plus one display face** is the ceiling (two families plus a one-off display face). The display face may be the same family as the text, used large. ADAPTED
- **Build the voice from contrast inside the title**, not decoration: roman + italic on one phrase; light + heavy; one accent colour on one word or glyph (a swash last letter is the same idea). ADAPTED, CORE
- **Scale and leading:** display 3–5 × body, leading 1.0–1.1; caps display obeys the capitals rules (tracking 0.13–0.3 em, word space and line gap larger than tracking); lowercase display stays untracked. CORE
- **Everything else stays quiet:** the rest of the piece uses the neutral roles of section 2; one accent colour; no second display moment.
- **Text-led pages (articles, essays, interviews, long guides, policies): the voice stays on the title, and optionally the deck.** Headings H2/H3 and everything read at length use a sturdy weight: a bold serif or a bold or medium sans, not a light display face. A light high-contrast serif on subheads reads as fragile hairline headings; a bold serif title with sans subheads holds up. ADAPTED
- **Hairline faces need size:** high-contrast display serifs (Didot, Bodoni 72) only at ≥ 32 px, never for subheads, captions, labels or meta lines; at small sizes use a sturdier serif or the sans. Meta, byline and caption text keeps contrast ≥ 4.5 : 1 and ≥ 12 px. ADAPTED
- **Say what you chose and why** in the output (class of face, the stack, the one moment).
- **Check availability:** display stacks below only work if installed; render the page and check the title really shows the display face rather than a fallback. ADAPTED

## 2. Families and roles (the role system)

- **Two families, no more**, each keeping its role across the piece. Example: one serif (regular, italic, small caps, one swash glyph) and one sans (regular, bold). Never two of the same class. CORE, EST
- **Match x-height** between the two so they sit at the same size without optical compensation (e.g. both 413/1000). With system fonts, use the same family or `font-size-adjust`. CORE, ADAPTED
- **Role map:** running text and h1–h2 in one face at regular weight; the **third heading level changes family and weight at body size** (sans bold 1em), not size; labels, tables, controls, scanned lists in the second face; emphasis inside serif text is italic, never bold (there is no bold serif). CORE
- The whole system needs **six faces** in daily use and **seven visual voices** (serif body, serif italic, small-caps label, bold sans heading, regular sans UI, swash accent, display caps). Add a style only by removing one. CORE, EST
- **Hierarchy changes at most two levers at a time** (size, weight, family, case). h1 size; h2 size; h3 family + weight; label case + size; call-out italic + size. Never size + weight + family + colour together. EST

## 3. Where each style belongs

| Element | Style | Origin |
|---|---|---|
| Heading | serif regular large, or sans bold medium; sentence case, no period; leading 1.0–1.15 (h1 1.025); h1 need not be bold | CORE |
| Tag | small tracked caps, or small caps, or regular vs bold; above or left; ≈ ¼–½ the heading size; contrasts in family, case or weight, not size alone | CORE |
| Subhead | smaller than the heading (≈ 0.45 ×), tighter leading | EST |
| Label, metadata, contents, page numbers, captions | **one dedicated small-caps voice at 0.55–0.75 of body**, tracking untouched; where real small caps are missing see section 7 | CORE |
| Caption | smaller size or a different style (small caps or italic); no final period | CORE |
| Quote / call-out | italic at 1.5–2.4 × body, centred, leading ≈ 1.2; italic carries the voice, scale carries the importance | CORE |
| Lead-in / dedication | italic at body size, no size change | CORE |
| Link | text face and colour, faint underline (≈ 15 % black), accent on hover; or blue underlined (default); no bold | CORE |
| Table | UI face ≈ 0.7 × body, one hairline under the header, bold group rows with extra top padding, no zebra | CORE |
| Factoid / price | numeral 3–6 × its caption, same family, one accent colour; currency, unit, "/mo", "%" ≈ 0.3–0.4 × the numeral and often lighter; old price smaller, grey, struck through | CORE |
| Swash / ornament | one glyph per title at most (the last letter), titles only, never in text | CORE |
| Inline emphasis | italic or small caps for a word or two; never bold half a heading; emphasis "declines" with grammar (include the governing preposition) and stays out of text used as a layout building block | CORE |

**Italic:** short, decorative or secondary only. An italic lead-in spanning the full width above a photo-plus-text module separates the heading from its text and confuses reading. CORE

## 4. Capitals

Capitals fall inside the inner/outer rule, not as a style default.

**Mechanics (CORE):**
- Capitals need tracking; lowercase never gets it (`letter-spacing: normal` for lowercase).
- Display caps plates (CSS in em of the headline): good tracking ≈ **0.13–0.3 em**, with failures shown at −0.04 em (jammed) and +0.45 em (words fall apart).
- Caps tracking < leading; the white between lines of caps ≥ cap height; word space must clearly exceed tracking; a line gap close to the tracking makes a "chessboard".
- Reducing tracking to separate words must not go below a letter's own stem gaps; a **condensed cut** needs less tracking (0.45 → 0.25 em in the reference) and makes the plate more compact.
- Check on capitals: moderate tracking + standard word space passes; strong tracking + standard word space on one line passes; no tracking fails; strong tracking with reduced word space fails; strong tracking on two lines at standard leading fails.

**Use (CORE):**
- Plain heading = lowercase with an initial capital, no period. Caps belong to tags, labels, short plates, acronyms in small caps (units, standards) and the first words of a block as a small-caps lead-in.
- Do not default to all caps or "brick" (forced equal width) lines.
- Subhead levels may use small caps; alternate style between neighbouring levels.

**Small tags and labels (ADAPTED):**
- Uppercase small labels: tracking **0.06–0.1 em** at ≈ 0.75 of body (.13 em on a 0.925 line is the upper edge). Display plates use 0.13–0.3 em. These are two values, not one.
- Prefer real small caps (`font-variant-caps: all-small-caps`, only if the font has them) over shrunken capitals; otherwise uppercase at ≈ 0.75–0.8 × with the tracking above.
- Use CSS `text-transform: uppercase` on sentence-case text, not typed capitals (copy/paste, screen readers, localisation). ADAPTED
- Avoid caps for body text, long strings and buttons with more than two words (there is no reading data; this is ADAPTED).
- Lint: tracked lowercase is a defect; check for it in the rendered page. ADAPTED

## 5. Numerals and units

- Factoids, prices and KPIs: see section 3. The numeral is an anchor (C3).
- Tables: right- or digit-aligned; use `font-variant-numeric: tabular-nums` where the font has it (plain lining figures are fine when the font lacks `tnum`). CORE, ADAPTED
- Glue number and unit with a non-breaking space; the thin gap before % is ≈ 0.09 em, and the whole expression is `white-space: nowrap`. CORE

## 6. Microtypography

Hand-set HTML uses soft hyphens, non-breaking spaces and typographic quotes throughout, never straight quotes. CORE

- Glue a one-letter word or short preposition/conjunction to the next word (nbsp); in English glue "a", "I", initials, number + unit; keep short hyphen compounds together. For English use `text-wrap: pretty` instead of gluing every short word. CORE, ADAPTED
- Put nbsp before an em dash so a dash never opens a line (253 of 265 cases). CORE
- Hyphenation: break points only inside paragraphs, captions and list items; none in headings, labels, names or answers; ≥ 3 letters before, ≥ 2 after, minimum word length 5 (`hyphenate-limit-chars: 5 3 2`); and only on measures ≤ ~45 ch (`02-tokens`). CORE
- Real quote glyphs (the language's pair, inner pair nested), never straight quotes. One ellipsis glyph `…`, also for numeric ranges and for controls that open further input. CORE
- Dashes: a reference text may use an em dash for ranges; in English use an en dash for ranges and a true minus sign (`−`) for negatives. ADAPTED
- Paragraph separation is **either** first-line indent 1 em with zero gap **or** no indent with a vertical gap; never both. CORE
- Set `liga` and `kern` on explicitly for headings, labels and call-outs. CORE

## 7. System-font carry-over (no web fonts)

ADAPTED; check the page renders with what is actually installed.

| Role | Stack (first available wins) |
|---|---|
| Reading serif | `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif` |
| UI primary (Geist, Inter, Funnel Sans) | `Geist, Inter, "Funnel Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` |
| UI / neutral sans (system only) | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Humanist sans (a warmer alternative) | `"Avenir Next", "Gill Sans", "Segoe UI", Candara, sans-serif` |
| Slab (display headings, numerals) | `Rockwell, "Rockwell Nova", "Roboto Slab", "Courier New", serif` |
| Mono (code, tabular data) | `ui-monospace, "SF Mono", Menlo, Consolas, monospace` |
| Display serif (high-contrast; the one expressive moment) | `Didot, "Bodoni 72", "Bodoni MT", "Playfair Display", Baskerville, Georgia, serif` |
| Display condensed grotesque (posters, plates) | `"Avenir Next Condensed", "Helvetica Neue Condensed", "DIN Condensed", "Arial Narrow", sans-serif` |

- Keep the two-role split; with a single system family let weight and size do the work. Set `font-synthesis: none` so the browser does not fake a missing bold or italic (and avoid bold serif where it may not exist). EST
- If the second face is a fallback, `font-size-adjust` carries the "same x-height" idea. EST
- Sizes in rem/em from one root; small tiers as fixed ratios of body (0.85, 0.75, 0.7, 0.6) with a floor of ≈ 11–12 px on screen. CORE
- A variable font replaces the six files: weight axis for regular/bold, `ital` or `font-style` for italic. Without real small caps or swash, keep the idea: one deliberate flourish in a title (an accent colour on the last word) and none in text. EST

## 8. What to avoid

Fragmenting a heading by styles; tracked lowercase; strong caps tracking with a cramped line gap; all-caps or brick as a default; decorative or Slavic display type for everyday work; an italic lead-in over a module; a bold half-heading for decoration; three or more families; changing three levers at once; shrunken capitals posing as small caps; typed capitals instead of `text-transform`. CORE, EST

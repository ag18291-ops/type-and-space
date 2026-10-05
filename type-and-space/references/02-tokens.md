# 02 — Tokens and formulas

Derive spacing from one number, **L = body font size × body leading** (the line height in px). Everything else is a multiple of L. This makes C1 hold by construction.

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

## Leading and measure

| Token | Value | Origin |
|---|---|---|
| `--lh-body` | UI 1.4–1.5, marketing body 1.4–1.5. The reference band is 1.2–1.4 (16/20, 12/15, 14/20, 11/12, 11/15). **Leading ≥ 1.45 needs a paragraph gap ≥ 0.5 L**: a serif sample at ≈ 1.45 with a tiny paragraph gap is rejected | CORE floor, CORE, ADAPTED upper |
| leave-alone guard | Do not change an existing body leading that already sits in 1.3–1.65 on a measure ≥ 45 ch. Tightening 1.5 → 1.4 makes pages look cramped | ADAPTED |
| narrow column | Same size, ≈ 4–5 words per line: leading ≈ −0.25 × size vs a 9-word line (11/12 vs 11/15) | EST |
| reference text | 20 px / 1.25 in a 372 px column ≈ 45 characters | CORE |
| `--lh-long` | body leading + 0.05–0.1 for long lines | CORE |
| `--lh-display` | 1.0–1.15 (h1 1.025, title 1.033) | CORE, ADAPTED |
| `--measure` | text column 60–70% of window, `max-width` capped (~65 ch). On short measures (≤ 45–50 ch) use the low end of leading | CORE, ADAPTED |
| ragged-right air | air to the next element or container edge ≈ 2 × the left margin, measured **from the longest line**; rag within ≈ 6% of the longest line | CORE, EST |
| hyphenation | `hyphens: auto` **only on measures ≤ ~45 ch** (narrow columns, cards, sidebars). On wider measures leave it off: breaks like "arith-metic" read as defects at 76–88 ch. Never hyphenate headings, captions, names or labels | CORE |
| long-form reading (articles, docs prose, essays) | body **17–18 px or more** (≥ 18 px for a pure long read), leading **1.55–1.7**, measure 60–70 ch, paragraph gap ≈ 0.5–0.75 L. This profile replaces the UI block band for continuous reading | ADAPTED |

## Size scale (body = 1)

| Role | Text page / docs | App screen (dense UI) | Marketing | Origin |
|---|---|---|---|---|
| body | 12–16 px (**17–18 px+ for long-form reading**, see above) | 12–16 px | 16–20 px | CORE, ADAPTED |
| small (caption, label) | 0.75 × body, leading 1.2 | 0.75–0.8 × | 0.75 × | CORE |
| side note | 0.6 × body | — | — | CORE |
| H3 | = body, bold, 0.64 L above, none below | same | same | CORE |
| H2 | **1.4–1.6 ×** | ≈ 1.25 × | 1.5–2 × | CORE |
| H1 | **1.8–2 ×** | **≥ 1.5 ×** (page anchor) | display below | CORE |
| display | — | — | 2.5–4 ×, `clamp()` on web, px on fixed artboards, ≤ 3 lines in its column | CORE, ADAPTED |
| stat / KPI figure | — | ≥ 2.5 × its label; never smaller than its existing size | factoid number 4–6 × its caption | EST |

- Max three heading levels; a fourth only for dictionaries and reference works. CORE
- Alternate styles between adjacent levels (size, weight, case, colour). CORE
- A 1.2–1.25 ratio applies only to inner heading levels of a dense app screen; on docs and login pages headings need to be clearly larger than the next level. ADAPTED

## Gaps (multiples of L)

| Token | Value | Origin |
|---|---|---|
| `--gap-para` | **default 0.5 L**; accepted range ≈ 0.45–0.9 L; it must be visibly larger than the interline gap. 1.6 L is too detached; zero extra gap with loose leading merges paragraphs. The "blind line" (1 L) belongs to baseline-grid layouts | CORE |
| running text | indent 1 em, zero gap (CORE); its demo "swiss" paragraphs use 0.48 L | CORE |
| `--gap-item` | extra gap between list items, on top of leading. Core: 0.28 L. Start at 0.3–0.5 L; feed items about +0.5 line | CORE, EST |
| `--gap-h2-before` | 1.6–2 L (core 1.6 L; ~2 lines in prose) | CORE |
| `--gap-h2-after` | = `--gap-para` for subheads in running text (CORE: 0.28 L) | CORE |
| `--gap-h1-after` | ≈ 2.3 L | CORE |
| `--gap-h-after` | heading followed by a subtitle or short block: ≥ the larger of the heading's own line gap and the text's interline gap; always < the gap before the heading | CORE, ADAPTED |
| heading stack | heading line gap (and tag gap) < subhead gap < gap to text < gap to the preceding module; the gap before ≥ the heading's own leading | CORE, EST |
| module gap | 1.6 L between modules, 0.8 L inside | CORE |
| `--gap-layer` | 2.4–3 L on a full-width page (text-only wireframes ≈ 2.4 pitch, long illustrated page ≈ 3 pitch); 1.5–2 L in email, poster, slide | EST, ADAPTED |
| rules | more space above a rule than below it, ≈ 1.3–1.6 : 1 | EST |
| after an image | ≈ 2 × the space before it (≈ 1 pitch before, 2 after) | EST |
| caption gap | 0.8 em under an image (≈ 1.4 caption pitch); beside an image ≈ 1 pitch, caption ≈ 0.54 × image width, last line on the image's bottom edge | CORE, EST |
| column gutter (text) | 1 em; page grid: outer margin ≈ 6.7 % of width, gutter ≈ 0.2–0.25 × column | CORE, EST |

## Margins and padding

| Token | Value | Origin |
|---|---|---|
| unit `u` (left margin) | ≥ the interline white gap (leading − size); ≈ 1 L in the reference example; 0.6–1 L in dense UI | CORE, EST |
| `--pad-module` | left u : top 1.5 u : right 2 u for ragged-right text (u for controls) : bottom **2 × top** (page canon bottom 3 u) | CORE |
| vertical ≠ horizontal | never equal margins; never top = bottom | CORE |
| card | may bleed ≈ 1 outer gutter past the grid while content stays on the grid; padding top ≈ 1.5 pitch, bottom ≈ 2.6 pitch | EST |

Margins are compared to the interline white gaps, not to the line pitch L. The reference left margin equals the leading. Do not reject a module just because a margin is below L.

## Controls (forms)

| Token | Value | Origin |
|---|---|---|
| row pitch | one text line + one paragraph gap = the module for control rows (15 px line + 15 px gap = 30; after a form block, 30 + 7 before ordinary text) | EST |
| min gap between neighbours | ≈ 0.5 line (7 px at 15 px); field-to-field ≈ 9 px at 15 px; ≈ 2 word spaces horizontally; control to its label ≈ 1 space | CORE, EST |
| label above | label → its field ≈ 0.55–0.6 × the field → next label gap; label left-aligned with the field edge; 4–8 px | EST |
| label left | label → frame ≥ 1.5 × the field's inner padding (≈ 1.9 × the row gap in the schematic); labels share a column | CORE, EST |
| field | label size = typed text size; height ≈ 1.8 em; horizontal padding ≈ 0.65 em; label and text share a baseline | EST |
| button | side padding ≥ 0.5 × height; short labels (≤ 2 words) ≈ 1–1.4 × height (width ≈ 3.7 : 1) | CORE, EST |
| vertical centring | centre the **baseline-to-cap-top band**, about 2 px (≈ 3.5 % of the box height) below the pure x-height centre; a label with no ascenders or descenders looks sunk even when geometrically centred: raise it optically | CORE, EST |
| `--hit-min` | 44 px target for standalone controls on touch; ≥ 24 px with spacing for pointer-only dense UI; inline links exempt | ADAPTED |

## Procedure for a new block

1. Pick size and leading → compute L (check the leave-alone guard).
2. Set line length (measure).
3. Check: leading rises on long lines, falls slightly on narrow ones; leading ≥ 1.45 → raise the paragraph gap.
4. Heading distance: ≥ line gap, closer to its text than to what precedes.
5. Margins: unit u, then 1 : 1.5 : 2 : 3 (compress for UI). Check the top-left rectangle's proportion against the format.
6. Re-run C1 on the full list of gaps.
7. Check no anchor (title, KPI, price, hero image) got smaller than before.

## Example (UI, 15 px / 1.45 → L ≈ 21.75 px)

```css
--gap-para: 11px;                  /* ≈ 0.5 L */
--gap-h2-before: 38px;             /* ≈ 1.75 L */
--pad-module: 28px 24px 56px 24px; /* top 1.5u (u ≈ 18) / sides u / bottom 2 × top */
```

If the unit u would be smaller than the interline gap, the module is too small for that size: reduce size and leading, not the margin.

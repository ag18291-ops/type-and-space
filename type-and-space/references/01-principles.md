# 01 — Principles (the kernel)

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

## C1. Inner ≤ outer

Proximity at every level. An object reads as separate only if its internal distances are no larger than the distances to its neighbours. What is "outer" at one level is "inner" at the next:

stroke gap → letter gap → word space → line gap (leading) → paragraph gap → block gap → margin

The formula is "inner ≤ outer" (non-strict). The goal is **visible contrast**, not a strict inequality at every pair. CORE

- Minimum contrast gives calm reading ("the silver of the page"); more contrast gives emphasis. CORE
- Capitals need tracking because the space inside a letter (e.g. a wide letter such as H or O) exceeds the space to its neighbour; lowercase must not be tracked. CORE
- The inventory of old typesetters' rules, all derived from this one: caps are tracked; lowercase is not; vertical strokes stand at equal intervals; caps tracking < leading; the white between lines of caps ≥ cap height; leading > word spaces; at minimum leading descenders almost touch the next line's ascenders; longer line → more leading; leading ≤ outer margins; list items get an extra gap larger than leading; **a page number sits nearer the text block than the page edge**; a heading sits nearer the next paragraph than the previous; heading-to-paragraph distance ≥ the heading's line spacing. CORE
- **Stacked capitals recipe** (CSS in em of the headline): tracking ≈ 0.15–0.3 em; word space must clearly exceed tracking; the line gap must clearly exceed tracking or letters merge into a chessboard; tracking must not fall below the distance between a letter's own stems; a condensed cut needs less tracking (e.g. 0.45 → 0.25 em) and gives a more compact plate. CORE
- **Check (capitals)** CORE: moderate tracking + standard word space is fine; strong tracking + standard word space on one line is fine; no tracking is wrong; strong tracking with a reduced word space is wrong; strong tracking on two lines with standard leading is wrong.
- **Heading exclusion zone** CORE: the heading's own leading is a no-go zone. Wrong: text starting inside the heading's leading; the top edge of the format inside the leading of a two-line heading. A one-line heading with the same top margin can be fine, so re-check per instance.
- A subheading placed inside a headline's leading looks like part of it; move it away by at least the headline's line gap. CORE
- Heading to its text: ≥ the larger of (the heading's own line gap, the text's interline white gap). When the heading is underlined, measure from the underline. A heading closer to the following paragraph than to the previous. CORE
- List items need a gap larger than leading between them. CORE
- A frame or underline must not intrude into the leading of the **text typed inside it**. A label standing beside a field may have the frame top above its cap line (CORE). CORE
- When space is fixed (label, plate), step down every level and keep the contrast. CORE
- Do not shorten a gap to fit something in; drop a level of the hierarchy instead. ADAPTED

**Test:** list the gaps from smallest to largest. Does the order match the hierarchy of objects? Is there visible contrast between neighbouring levels?

## C2. Modularity

- A layout is cut into non-overlapping rectangles that agree in width and height and together form the page or screen. CORE
- **Cut-and-remainder:** cut a rectangle off a rectangle and the remainder is again a rectangle; repeat to any depth and any proportion. Build pages by successive straight cuts (columns, then rows, then bricks). CORE
- **Self-similar formats:** a golden rectangle cut by a square leaves a golden rectangle; a 1:√2 rectangle halves into the same shape (basis of ISO/DIN). Choose such formats when you will subdivide into many same-shape modules. CORE
- **One base module:** the tatami standardised the whole house. Pick one base module (here: L) and derive sizes from it. CORE
- Modules need not be filled. Emptiness is a module and should also be rectangular. CORE
- **Reserved white field elevates an element:** economise (tight grey tone) in one place and spend white on the element you want to raise (a lowered start for a rubric, a dedicated field for a heading or caption). CORE (Serov quote)
- Modules may be separated by space, rules, frames or cards. Each has its own margins; adding a card, rule or frame creates a new format with its own proportions. CORE
- Aligning edges of unrelated items creates a **pseudo-module**. Worked examples: a news grid where a headline's top edge and an unrelated box's top edge sit on one line; a poster where a statistic caption aligns to the top of the product box and the slogan to its bottom, so the fact attaches to the product; a menu where a CTA button aligns to the top of two small labels and to the bottom of a menu row. Fix: remove stray aligned rows, give the main CTA its own corner. CORE
- **Edge-coincidence check:** do vertical edges and gutters of neighbouring layers coincide? That is the test for "grid or no grid". CORE/EST
- Distances above and below a horizontal boundary (rule, card edge) are never equal. CORE
- Modules must not overlap or crawl into each other unless it is a deliberate stylistic move (C10). CORE
- **Anti-pattern:** forcing every element into identical rectangles regardless of content (Swiss followers unified even parts of illustrations). Modularity follows content. CORE
- On screens, content has unpredictable length and unequal elements; a strict square-nested module grid looks strained. Use flexible modules: cut the layout into neat non-overlapping rectangles. CORE

## C3. Anchor objects

Anchor objects are the most visible things: images, headlines, factoids, logos, icons, big numbers, and any text paragraph surrounded by empty space. Controls are anchors too. **Stat figures, KPI numbers, prices and totals are anchors and must not be shrunk to fit a type ratio**. **The key figure of a document or screen (total due, balance, price, the headline number) must be the strongest element after the title**: set it apart by size, weight, contrast or a container, and keep it near the bottom-right of its table or the visual centre of its card. ADAPTED

- An anchor sits in a corner, on a side, or at the **visual centre**, which is above the geometric centre (≈ 40–45 % from the top of its rectangle; EST). CORE
- The rule applies recursively **inside every module's own rectangle**, not only to the page. CORE
- The snap must be obvious: opposite sides need air or less dense, less visible objects. The most common beginner error is forgetting the air. Flush-left text needs spare room on the right. CORE
- Four layouts pass the anchor test (CORE): text bottom-left with the image at the right middle; image top-right with text bottom-left (opposite corners); image top-left with text beneath and the right half empty; image and text stacked and centred as one group. A centred anchor is as valid as a corner one.
- **Silhouette exception:** a diagonal glyph (a large check mark) cannot snap into a corner because its own shape leaves an empty triangle there. Compensate optically or choose an object whose box is visually filled. CORE
- A centred point over flush-left text breaks the alignment: align the point to the text's left edge or attach it to the heading line. EST
- Secondary objects attach to anchors and may nudge them off the snap point. Small attaches to large; an attached caption shares the baseline or bottom edge of the large element. CORE/EST
- Noticeability depends on size, density, contrast with the background, surrounding space; measured relative to neighbours. A colour change can make an object an anchor. CORE
- Hierarchy of attention: images → large headlines → logos, signs, numbers → set text (most neutral). CORE
- Without a snap point the layout falls apart. CORE
- A single line spanning edge to edge looks odd; as an anchor a line sits pressed to the top or bottom of its module. Heterogeneous lines put anchors left and right, or centre. CORE
- Re-snap anchors per format (wide strip, tall module, 3:2 block) instead of scaling one layout. EST (editor's inference from the figures)
- Take one accent colour from the illustration and use it once in the text part (a plate, a prefix, a highlighted line) to bind image and text. CORE

## C4. Format, margins, leading

Layout starts with the relation of two rectangles: content and format. CORE

**The margin canon.** Measured on a 400 × 606 reference page and a reference layout: left : top : right : bottom = **1 : 1.5 : 2 : 3** (inner : top : outer : bottom = 2 : 3 : 4 : 6). The text block keeps the page's own proportion (tall page → tall block, 1.51) and hugs the top-left. This is the **bounded page** (print page, poster, artboard). On a wide web viewport do **not** park a narrow text column at the left with an empty right third: centre it in its container, or pair it with a sidebar or aligned neighbours, and let the header rule, footer and related blocks share the column's edges. A column with the right margin as the only "air" looks left-heavy and misaligned. CORE

- The same set appears in the reference text module: 16 pt on 20 pt leading, paragraph gap 10, margins 30 / 60 / 20 / 40 (top / bottom / left / right) = 1.5 / 3 / 1 / 2 in multiples of leading. EST
- Wrong: equal margins; top = bottom; the canon turned upside down (big top and left, small bottom); a block centred left-to-right. CORE
- A reference layout: top margin 1/12 of the viewport height, bottom 2/12. CORE
- Two named corrections, not defaults: bottom > top "gravity correction" (2× in the example) and right > left "extra air on the right" for flush-left text (2× in the example). CORE
- The small rectangle in the top-left corner (top × left) sets the feel; give it the format's orientation. A square there is a mark of weak, amateur layout. CORE
- **Margins are compared to the interline white gaps, not to the line pitch:** "margins around text exceed the line gaps". The reference left margin equals the leading (20 on 20) and is five times the white gap (leading − size). So u (the left margin) ≥ the interline gap, and ≈ 1 L is the reference choice. In dense UI u may be 0.6–1 L. CORE/EST
- If a format is too small for the margins, reduce size and leading, not the margins. CORE
- Leading is a function of size, line length and format; longer line → more leading; a narrow column of short lines may take less (same size, ≈ 4–5 words per line: ≈ −0.25 × size; 11/12 vs 11/15 pair). CORE/EST
- Order of reasoning: **line length → leading → distance to heading → side margin → top margin → repeat.** CORE
- Turn off the baseline grid until the main ratios are set. CORE
- Multi-panel formats (a leaflet folded in four): each panel keeps its own margin ratios. A spread is one system (Van de Graaf canon: inner : outer = 1 : 2, top : bottom = 1 : 2, text block ≈ 2/3 of page width). CORE/EST
- Frames: thin or remove thick ones. When the frame goes, picture and text become one tall rectangle: reduce leading and margins, then re-check C1. CORE
- Trim the half-leading above the first and below the last line so the cap height, not the line box, sits on the margin (older CSS used negative margins; today `text-box: trim-both cap alphabetic` where supported). CORE/ADAPTED
- Fluid layout: define not only the container shape but the rules by which it changes (min/max measure, breakpoints). CORE

## C5. Primitives: point, line, rectangle

| Primitive | Behaviour | Examples |
|---|---|---|
| Point | One focus; centripetal; draws attention; competes with other points. The circle is the strongest point | icon, logo, number, letter, sign, checkbox, face in a photo, cut-out image, a small knob on a big picture |
| Line | Calm, readable, economical; one line of text; anchors left/right/centre | menu, header, button, input, caption, a one-line label |
| Rectangle | Universal container; divides without waste | paragraph, illustration, card, map, any text of two or more lines |

- Decision rule (CORE): one line of text is a line; the same text wrapped to two lines is a rectangle. A big drawing is a rectangle, not a point; the small knob on it is the point. A two-heading column is a rectangle.
- Points are poor team players: each shouts over the others (an avatar mosaic is the bad example). Calm a row of icons by unifying size, order and rhythm, even dropping colour. CORE
- **Gather into a line:** a line is the most convenient, readable, laconic element; objects that gather into a line always find room (a letterhead address set as two lines at the foot frees the top for the logo). Urgent notices and temporary blocks fit as a strip pressed to the top (Google default-search bar, Yandex election strip). CORE

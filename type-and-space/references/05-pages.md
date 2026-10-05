# 05 — Pages

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

## Grid

A page without a grid can look decent; a page designed on a grid usually looks more whole, pages of one product look uniform, and templating speeds teamwork. Use the grid and its non-standard options to put brand elements in (factoids, half-column quotes). Break it on purpose, not by accident. CORE

- **Grid test:** do vertical edges and gutters of neighbouring layers coincide? In a bad example the layers use 3, 5 and 4 columns with gutters that change (≈ 46 px vs ≈ 33 px) and no common base. EST
- Reference grid: four equal columns, outer margin ≈ 6.7 % of the page, gutter ≈ 0.2–0.25 × column. Build different pages from blocks spanning 1, 2, 3 or 4 columns; a sidebar is exactly one column. EST
- **Counting columns** (CORE, six layouts → 3, 5, 4 and 8, 6, 7, 8): the number of equal units that every module width is a multiple of, plus gutters. A grid of N columns also reads as 2N, so an even grid is the safe choice. A six-column base lets one page mix 2-, 3- and 6-up layers. A factoid column can be the odd narrow column that makes six into seven. CORE
- Layers that alternate (3 / 2 / 1 / 2 / 3 columns) work because they share the outer edges and a common base (six-column). CORE, EST
- A 12 × 12 grid: page margin 1 unit, inner margin 0.5, text column gutter 1 em. CORE

## Sandwich (pages without images)

Stack modules as layers; it survives any content length. CORE

1. Dominant block with a large heading on top; every module rectangular.
2. A uniform page does not hook the eye: introduce rhythm by columns.
3. Too many equal secondary modules bore: **alternate rhythm by layer** (e.g. 4-column base with some 3-column layers).
4. Neighbouring layers contrast (width, density, tone), otherwise they merge and rules will not save them.
5. **Card:** separates a module and unites its parts; it emphasises, so put the more important of two neighbours on it. The card may bleed ≈ 1 gutter past the grid while its content stays on the grid; padding top ≈ 1.5 pitch, bottom ≈ 2.6 pitch. Style is fashion; function is to unite and highlight. EST
6. Break the grid of an important module and put it on a card: the card glues the odd module.
7. A vertical column breaks horizontal monotony: tint it from under the header to the bottom and let the footer link band continue the tint (an L-shaped frame); the main sandwich narrows to ≈ 68 %. EST
8. Layer gap by format: 2.4–3 L on a full-width page; 1.5–2 L in constrained formats (email ≤ 600 px, poster, slide). EST, ADAPTED
9. Alternate **background colour** between layers; a full-bleed colour tile grid is the practical carrier of contrast. EST

**Failure modes:** the dominant block is not at the top; identical layers repeat (a flat stack of equal H2 blocks); a layer packs 5 narrow columns of tiny text (do not go beyond 4 text columns). Promo pages that attack with rows of benefits fail the same way. CORE

## Pages with images

- Images small and equal: weak. One image is large, preferably in the upper part (not necessarily at the very top). A size ladder of about 1 : 2 : 5 in width (thumbnail : medium : dominant) works on a good page. CORE, EST
- Images obey C3 and are distributed evenly. Mistakes: all at the top, far down, or along one side; side images always on the same side or all the same height (CORE: only the page with a dominant image on top, side images alternating left and right, and a closing link layer passes). CORE
- Equal peers (pricing tiers, spec columns) may stay equal because comparison is their purpose; mark the recommended one dominant. Feature trios should still contrast by layer, size or position. ADAPTED
- Long pages alternate calm text layers, saturated image layers, thoughtful tables and review quotes; the simpler the content, the fewer and more uniform the layers. Alternate by brightness, dynamics, emotional tone, image vs text dominance, image size, text length, rhythm. CORE
- A link block with small userpics can close the page as a contrasting end layer. EST
- **Gallery:** its own layer or page; images are the hero. Avoid dead brick matrices. A little air around photos animates it and joins it to the page; two sets of margins (outer around the big photo, inner around the vertical photo and its caption: inset the vertical image ≈ a sixth of the block width). Images are the densest element and activate counter-space most, so badly mixed sizes form corners, dead ends and steps; push extra air and captions to the gallery's edges. One featured product on a card is a legitimate emphasis. CORE, EST

## Text page (article, note, chapter, about)

- A flow of sequential reading, unlike a modular page of atoms; it holds subheads, lists, tables, images in free order. CORE
- **Main text:** column 60–70 % of the window, capped (a reference wireframe is ~79 %: keep the prose number). Slightly more leading for long lines. Paragraphs separated by a vertical gap. Air on the right of the rag. CORE
- **Placement on a wide page:** a column narrower than the page is **centred in its container or paired** with a sidebar (contents, related posts, notes). Do not left-park it with an empty right third; header rule, author box, related grid and footer share the column's edges (or all share the page grid). ADAPTED
- **Long-form profile:** body ≥ 17–18 px, leading 1.55–1.7, 60–70 ch, hyphenation off at that measure (`02-tokens`). ADAPTED
- **Subheads:** one H1; H2 larger than text, about two lines before it, gap after equal to the paragraph gap. H3 bold at body size, not separated from its text (CORE: 0.64 L above, none below); a run-in subhead saves space. No H4. Alternate style contrast between adjacent levels. CORE
- **Lists and tables:** see `03-elements`.
- **Links in text:** blue underlined; hover accent; visited faded; file links state type and size. CORE
- **Images:** left or centre of the measure; ≈ 2 × the space after as before; do not interrupt text with banners or full-width foreign links (the reader may think the text ended). Captions smaller, no period. Comparison sets in two or three equal columns. CORE, EST
- A brand-book style page: large title top-left, two narrow columns hung from the same top line in the right half, the lower half deliberately empty. EST

## Home page

The face, cover and quintessence of a site; it explains, introduces, sets the scenario and the tone. Four recurring structures, alone or combined (CORE: feed, tiles, photorama, rubricator are the right four; wall, mosaic, classifier, photo-feed are not): CORE

| Structure | Core | Watch for |
|---|---|---|
| **Feed** | Typed modules in a stream, newest on top; endless middle | Fixed image height vs variable text; auto-updated sections (changelog, Q&A) use the same logic |
| **Tiles** | Typed rectangles packed in rows left→right, top→bottom, equal row height, widths in whole grid columns, equal horizontal and vertical gutters (≈ 4 %) | Varying heights destroy the horizontal line (Pinterest). Irregular tight packing is an acceptable experiment; text-only navigation tiles can close the grid |
| **Photorama** | A dominant photo fills the page or a large part | The switcher must be informative: captions or a flush strip of ≈ 6 equal thumbnails with a framed active one; anonymous dots only for a uniform cycle (CORE: Volvo = low informativeness) |
| **Rubricator** | Neat cells for site sections, often with a hanging bold label per section | Default for most sites; even a busy news page is a rubricator; fixed layout, sandwich, robust to content change |

Content may be filled automatically, but the designer fixes what is main and secondary. The header-to-title gap is larger than title-to-content. CORE, EST

## Mini-formats

Compact, airy, and the cheapest place to set style. Use C3 to arrange them; they are concentrates of the design language (Swiss, Renaissance-refined, super-modern). CORE

- **Pull quote:** large quote marks in the accent colour, the speaker's photo, a half-column width; choose interesting or contested quotes. CORE, EST
- **Factoid:** a large number with a short caption, no frame, air all round. Number in the accent colour, caption ≈ 4–6 × smaller, top-aligned to the numeral's first line, ragged right, 3–5 short lines. It occupies a whole grid column at a row edge, or the empty tail of a row; a page may carry two in different corners. Several figures set as equal-width chips, number above label. EST
- **Price tag:** small raised currency, huge numeral, small unit; an old price struck through, smaller and grey; few elements, "almost a hieroglyph". Drawing price tags is a good beginner exercise. CORE, EST
- **Byline box:** photo left (≈ 120 px), name first (bold), date, share or follow buttons, one rule above. EST
- **Poll or chart strip:** one line at the page edge, bar length proportional to value, number in bold beside the label. EST
- **Ears:** a row of 3–4 equal-width illustrated teasers (image, bold title in the accent colour, short description) above the masthead, at the foot or in the middle. EST
- **Free a column:** shrink the dominant block by one column and fill the freed side column with a mini-format; shift the next layer by a column. EST
- **Cliché sheet:** 12 templates, each an anchor (dot, rectangle, bar, big numeral) at one edge, a text block at the opposite edge, air between; many work mirrored. EST
- Dense information modules pack tightly; mini-formats carry the air. A neat Swiss style suits headers, menus, footers and inserts. CORE

## Breaking the rectangle (C10)

After the modular discipline is solid, exit with intent: captions that follow a contour, ears that flirt with strict rectangles, an image cut-out reaching into the next module (done only after the construction is stable), text bending around a form. Maps, scientific drawings and experimental editorial are the tradition. In practice one exit per page, while the rest of the page stays strictly rectangular. CORE

## Style stance

- A layout pass is the floor, not the style. A designer who has mastered layout still needs a graphic move and a brand style on top of a neutral skeleton. CORE
- Two neutral skeletons: **Renaissance** (serif, harmonious proportions and margins, elegant type, fine illustration; for reading, science, a clever or luxurious product) and **"ikea"** (Swiss / international / airport style: flush-left type, size contrast, modular grid; the default mode for UI, business information, navigation). CORE
- Do not default to all-caps headlines or "brick" justified text; do not follow trends (blur, translucency, gradients) as default decoration. CORE

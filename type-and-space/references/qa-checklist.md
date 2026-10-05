# QA checklist (self-review)

Run against your own output. Mark each pass / fail / n/a. Fix fails before presenting.

## Do-no-harm (run first)
- [ ] No anchor got smaller than in the input (page title, hero image, KPI figures, prices, dominant headline).
- [ ] No existing leading inside the mode's band was lowered; no heading ratio was applied that flattened a level.
- [ ] No copy changed; copy-bound defects are listed under "Needs copy decision".
- [ ] Nothing was truncated (no new ellipsis, no line clamp that hides copy).

## Spacing (C1, C4)
- [ ] Gaps listed smallest to largest match the hierarchy, with visible contrast between neighbouring levels.
- [ ] Heading is closer to the text below than to the block above; heading-to-text ≥ the larger of its own line gap and the text's interline gap.
- [ ] The text never starts inside the heading's leading; the format's top edge is not inside a heading's leading.
- [ ] List-item gap is larger than the interline gap; feed items ≈ +0.5 line or ruled.
- [ ] Margins: not equal; top ≠ bottom; bottom ≈ 2 × top; left < top < right (ragged text); left margin ≥ the interline white gap.
- [ ] Leading rises with line length; narrow columns not over-led; leading ≥ 1.45 comes with a paragraph gap ≥ 0.5 L.
- [ ] Paragraph gap is visibly larger than the interline gap and ≤ ~0.9 L.
- [ ] Frames, rules and underlines don't intrude into the leading of the text typed inside them.
- [ ] A folio or page number sits nearer the text block than the page edge.
- [ ] More space above a rule than below it.

## Structure (C2, C3, C5, C6)
- [ ] Each element is named as one of six; no lumps.
- [ ] Each is classified point / line / rectangle (one line of text = line, two lines = rectangle).
- [ ] All modules are rectangles (or formed by space); no overlaps.
- [ ] No accidental alignment grouping unrelated things: no text line shares a top or bottom edge with an unrelated image or box; no CTA aligned with two unrelated rows.
- [ ] Vertical edges and gutters of neighbouring layers coincide (grid test).
- [ ] The dominant element is named; each anchor's snap point is named; air on opposite sides; an anchor with a diagonal silhouette is optically compensated.

## Hierarchy and order (C7, C8, C9)
- [ ] Max three heading levels; adjacent levels differ visibly (a text-page H2 is well above body).
- [ ] Within a block size and weight step down, detail steps up.
- [ ] Gaze path is a simple line; columns top-aligned and not growing; a lone comment block stays next to its article.
- [ ] No banner or foreign link inside running text; no image splitting an article in the middle.
- [ ] Neighbouring layers contrast; rhythm alternates; a page without images has its dominant block at the top.

## Elements
- [ ] Headings: no final period, no hanging prepositions, no split names, one unit; a short heading over a multi-column module is covered by a rule or width.
- [ ] Links: descriptive, recognisable, no multi-line wraps, spaced; emphasis includes the preposition.
- [ ] Controls: side padding ≥ 0.5 × height; label size = input size; gaps meet the mode minimum; standalone targets ≥ 44 px on touch (inline links exempt); button label centred optically.
- [ ] Labels: left labels sit farther from the frame than the inner padding and share a column; top labels are nearer their field than the next field.
- [ ] Images: identifiable, undistorted, edges defined, cropped, not squared by default; none purely decorative.
- [ ] Captions: smaller, no period, near the object, tag above and caption below a link.
- [ ] Tables: repeats removed, hairline under the header only, numbers aligned, a title and a note.
- [ ] Ragged-right text has air on the right measured from the longest line and a shallow rag; hyphenation only on measures ≤ ~45 ch, never in headings, captions, names or labels.
- [ ] Long-form reading uses body ≥ 17–18 px and leading 1.55–1.7; the UI band is not applied to it.
- [ ] A narrow text column on a wide page is centred or paired; no empty right third; header rule, footer and related blocks share its edges.
- [ ] The key figure (total due, balance, price, headline number) is the strongest element after the title, set apart by size, weight, contrast or container.
- [ ] Text over image has a scrim or equivalent (marketing only).
- [ ] No armpit: a full-width heading is not stranded above an image and its text.

## Typeface and style (`06-typeface-style`)
- [ ] At most two working families, each in a fixed role, plus at most one display face used once; the typeface class and stack are stated, fallbacks named.
- [ ] Text-led page: the voice is on the title/deck only; H2/H3 and body are sturdy (no hairline weights); hairline display faces only at ≥ 32 px; meta, byline and captions ≥ 12 px and ≥ 4.5 : 1 contrast.
- [ ] Typography-led piece: exactly one expressive display moment, built from contrast inside the title; the rest stays quiet; the display face actually renders (not a fallback).
- [ ] Each hierarchy step changes at most two levers (size, weight, family, case); the third heading level changes family or weight, not only size.
- [ ] Emphasis in serif text is italic, not bold; no bold half-heading; no italic lead-in spanning a module.
- [ ] Capitals: lowercase is never tracked; display caps tracking 0.13–0.3 em with word space and line gap larger; small uppercase labels 0.06–0.1 em; capitals via `text-transform`, not typed; no all-caps body or brick lines.
- [ ] Labels, captions and metadata share one dedicated voice (small caps or uppercase at ≈ 0.75 × body).
- [ ] Numerals: key figures large, same family, unit/currency small; table figures aligned (`tabular-nums` where available); number and unit glued.
- [ ] Microtypography: real quotes, single `…`, en dash for ranges, true minus; `font-synthesis: none`.

## Mode (C10)
- [ ] Parameters match the mode file; deviations are explained.
- [ ] UI: layout survives longer and shorter content; touch targets meet the floor.
- [ ] Marketing: at most one deliberate rule break; no all-caps or brick-justified body by default.
- [ ] Accessibility floors (contrast, zoom, target size) hold.

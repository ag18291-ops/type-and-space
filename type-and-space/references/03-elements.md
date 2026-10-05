# 03 — Six base elements

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

Every piece of a layout is one of: heading, text, illustration, control, link, caption. Name each one. Do not mix them into "lumps" (a field with its label stuck inside the text, a heading with a link buried in it). Merging functions to reduce the count is allowed: field + label, heading + link, text + links (if the label is grey text inside the field, keep an accessible name). CORE

## Heading

- Names the page or block; sets the structure; is an anchor. Size shows importance or nesting. It is **not a formal résumé** of the text (that would be a repeat to cut): it must add information, attract attention, and answer "where am I". CORE
- Simplest form: large, uniform, sentence case, **no final period**. Bold is not required if size already makes it visible; at small sizes bold gives contrast. Reference headings are regular weight serif. CORE
- One syntactic unit; do not fragment it by styles (CORE: italic serif + bold sans halves = defect). Exception: the **double heading** "Travel: …" with a bold lead-in noun, a colon, then a regular continuation in one flow. CORE
- Multi-line: no hanging prepositions or conjunctions, no illogical breaks. A longer top line is better ("…in terms of / string theory", not "…in / terms of string theory"); break before a name rather than inside it; do not leave a one-word last line. Use `text-wrap: balance`. CORE
- Covers its text module and takes its shape (CORE): in a three-column module acceptable headings are a centred title with hairline rules reaching ~90 % of the width, a long title spanning ~75 %, or a short title centred over the middle column; **not** a short title in column 1 only. If too short to cover, the neighbours above and below form an unplanned link: add a **full-width rule directly above the heading**, hugging it so the heading belongs to the lower group. CORE
- Compound heading helpers: **tag**, subhead, double heading, graphic marker.
  - Tag: strip the quotation marks, set the headline larger (≈ 2 ×), and set the tag much smaller above-left, glued to the start. It makes the heading "finished, dressed, more expensive" (a serif for a letter, a cornice for a building, a caption for a picture). It contrasts by family, case, tracking or weight (e.g. small tracked sans caps over a regular serif heading, tag cap height ≈ 0.45 of the heading's). CORE, EST
  - Subhead: ≈ 0.45 × the heading size, tighter leading, flush with the heading, as a separate block; gaps rise heading line < heading→subhead < subhead→text. EST
  - Graphic marker: a round picture (≈ 2.3 × cap height) centred on the heading line's cap band, tight gap, text starting on the marker's left edge. EST
- A narrow vertical module wraps its heading: follow the break rules and never allow excessive lines (a bad example runs 8 lines; the fix is tag + one-line title + subhead). Request length limits from editors ("editorial policy"). CORE, EST
- Heading distances: C1 and `02-tokens`. Never separate a heading from the start of its text.

## Text

- Incompressible liquid in a container: the designer sets the container's shape, proportions and volume; define the rules by which it changes with the window. CORE
- Heading tends to a line; text is a rectangle (wide, tall or square). CORE
- Screen size 12–16 px; leading and measure in `02-tokens`. Long lines gain from slightly more leading, but leading ≥ 1.45 needs a larger paragraph gap. CORE
- Ragged right: air on the right, measured from the longest line; the neighbour column retreats from the rag; keep the rag shallow, never break lines by hand. Hyphenate **only where the measure is narrow (≤ ~45 ch)**; at 60–70 ch hyphens read as defects. Never hyphenate headings, captions, names or labels. CORE
- Long-form reading (articles, docs prose) uses its own profile: body ≥ 17–18 px, leading 1.55–1.7 (`02-tokens`); do not apply the 12–16 px UI band to it. ADAPTED
- Paragraph gap on screen ≈ half a line (accepted 0.45–0.9). The Swiss "blind line" belongs to baseline-grid layouts. CORE
- Columns on screen hold separate semantic blocks (news, products, tariffs), not one continuous text. CORE
- Text used as a building block inside a complex layout: do not break it with inline emphasis, links and markers. CORE
- Ask editors for length limits on subheads, quotes and leads when you can; most text is a given. CORE

## Illustration

- Identifiable, relevant, informative. No decorative "to fill the space" images; choose the image early instead of leaving a grey placeholder; a generic full-bleed photo behind unrelated copy is the common failure. CORE
- Noticed before the heading; the key image often dictates the page's proportions, size and position. CORE
- Horizontal feels natural; vertical feels dynamic and **needs design attention** (do not crop verticals to squares or horizontals by default; plan templates for portrait ratios); a tall subject needs a vertical format. Square is dull but useful for modular effects. CORE
- Crop until it "screams": decisive aspect (tall ≈ 1 : 2 for a standing figure), a little air above the head, nothing extra. Frame edges must not coincide with object edges or visible lines and must not cut limbs when the figure fits. CORE, EST
- Never stretch or squash. Enlarge good photos when detail rewards it. CORE
- A photo that fades into the page (sky on white) needs its own background or a thin rectangular frame. Cut-outs are **not forbidden**; they need sharp edges and the cut-off part masked by page edge, card, or at worst a rule running across photo and text together (CORE: "clothing merges with the page" and "no frame or rule" are the defects). CORE
- Keep faces recognisable at small sizes; check neighbours (an innocent photo beside another can distort meaning). CORE
- After an in-text image leave ≈ 2 × the space you left before it. Comparison or sequence sets use two or three equal columns, gutter ≈ 12 % of image width. EST

## Control

- Classify: **point** (icon, checkbox, progress), **line** (button, input, switch, slider, rating), **rectangle** (text area, map, palette, big list). CORE
- Line controls stretch horizontally with their text, not vertically; they form toolbars. Short labels still widen for aiming (Fitts): side padding scales with height (`02-tokens`). The bad "OK" has side padding ≈ 0.5 × height, the good one ≈ 1.4 ×. CORE, EST
- Label size matches typed text; label and text share a baseline. The frame must not climb into the leading of the **typed text**. CORE
- **Label to the left**: label → frame ≥ 1.5 × the inner padding, and larger than the row gap; align labels in one column. **Label above**: label belongs to its field (gap ≈ 0.55–0.6 × the field-to-next-label gap), left-aligned with the field edge. EST
- Vertical centring and optical centring of labels: see `02-tokens` (baseline-to-cap band; raise labels with no ascenders/descenders). CORE, EST
- Spacing: neighbours ≈ 0.5 line apart; control to label ≈ 1 space; row pitch = line + gap. EST
- Line controls fit poorly into running text; they overlap or push the leading apart. CORE
- Points attach to important elements: a status dot or icon before its label; a "more" marker after it; a star or plus at the end of a heading. Rows of icons need unified size, order and rhythm. CORE
- Rectangular controls are strong anchors: park them first. Important buttons grow, leave the line and act as rectangles. CORE
- Sort, separate, group into uniform modules, align. Not a layout problem but check: consistent capitalisation of labels and ellipsis on buttons that open further input. CORE
- Proscan redesign steps (bad → good): park the biggest rectangle (the list); replace ~25 free-floating fields with one search line and short labelled rows; equal-height toolbar buttons in one top row; drop the bright image buttons; align everything to two edges. EST

## Link

- Coloured, underlined text; hover changes colour; visited gets a faded colour except in menus and controls. Default blue underlined. A quiet underline (≈ 15 % black, text colour) with a red hover also works, and brand overrides are fine if links stay recognisable. CORE
- Informative text; the link and not the surrounding sentence decides the click. "Emphasis leans": include prepositions and conjunctions in any inline emphasis. CORE: the preferred link covers a whole clause or a phrase including its preposition, and a one-word link on a name or a single noun is rejected
- Long enough to hit by mouse or finger; spaced from other links (≈ 2 spaces; vertical lists need extra gaps). Inline links are exempt from the 44 px floor. CORE, ADAPTED
- Avoid wraps inside a link: parts land on different sides of a page and the hover/focus shape becomes a stepped polygon. Shorten, or use `box-decoration-break: clone`. CORE, EST
- Do not link to an anchor on the same page without signalling it; a new window is exceptional. CORE
- A lone important link gains weight by a tag above, a caption below, bold, or a tinted plate (all four accepted, CORE). Several links embedded in running text, or a link wedged between heading and text, are defects; put links at the end, make the heading the link, or use a gapped list. CORE
- File links: what, type and size, with type and size outside the link in a small or lighter style; localise units (KB/MB). Show email addresses in full. CORE
- Group homogeneous links in blocks (horizontal menu, vertical list). CORE

## Caption

- Explains an illustration, control or link; a bridge into the main text. Optional when the image is clear beside a heading or description. CORE
- Near the object; best when individual details are labelled, in short role-plus-action wording that may address the reader; no legends or codes. In marketing a caption may carry a question or invitation ("Guess what they are looking at…"). CORE
- Position: below the image ≈ 0.8 em gap, left-aligned with the image edge, narrower than the image; beside it the last line sits on the image's bottom edge. Tag above, caption below a link. EST, CORE
- Smaller size or different weight than text (≈ 0.75 ×, leading 1.2); no period at the end. Field labels sit left or above. CORE
- Callout lines: thin (≤ 20 % black on screen), not crossing each other, crossing the image as little as possible, not stabbing the detail, not parallel to the image's own lines, long enough to see. Rotated or tilted captions only once, when the image is playful. CORE

## Tables

- Goal: find and compare. Remove repeats (move to group rows, title or note); sort for comparison, rarely alphabetical. CORE
- Table recipe: bold title at body size, then a note stating **unit, exclusions and missing data**; table at ≈ 0.7 em; row padding ≈ 0.3 em; group rows bold with larger top padding; a single hairline under the header, no other rules, no zebra; totals in a right column and they must add up. CORE, EST
- Align top and left by default. Comparable numbers in one unit align by digit, else right (technical shortcut). CORE

## Lists

- A list is one sentence or a set of items with a lead-in or heading; the first item goes on the very next line without extra leading. CORE
- Numerals with a dot (each item a sentence: capital, full stop; numbers hang). `1)` or `a)` when the whole list is one sentence (items end with `;` or `,`, the last with `.`). Dashes or bullets for unnumbered; with no marker use a hanging indent (≈ 3 em). Simple items without links may omit the extra gap. CORE

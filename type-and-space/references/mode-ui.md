# Mode: UI

Goal: orient, operate, repeat without effort. Content is unpredictable (from a database), components repeat, density is high. Two profiles share the kernel: an **app screen** (dashboard, settings, inbox: dense, many components) and a **text page** (docs, help, articles: flow of reading, use the text-page numbers).

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

**Typeface.** Primary UI faces are **Geist**, **Inter** and **Funnel Sans** (use the one the product already ships; otherwise Geist, then Inter). Keep one family for the whole interface; roles come from weight and size, not a second family. Fall back to the system stack in `06-typeface-style` §7 if none can be loaded.

## Parameters

| Parameter | App screen | Text page | Origin |
|---|---|---|---|
| Body | 12–16 px, leading 1.4–1.5 | docs/help 15–17 px at 1.45–1.55; **long-form articles ≥ 17–18 px at 1.55–1.7** | CORE floor 1.2–1.4, ADAPTED upper |
| H1 | ≥ 1.5 × body, the page anchor | 1.8–2 × body | CORE |
| H2 | ≈ 1.25 × | 1.4–1.6 × | CORE |
| H3 | body size, bold | same | CORE |
| Heading levels | max 3 | max 3 | CORE |
| Measure | cards: set by the module; lists: ≤ 65 ch | 60–70 % of the window, ≤ ~65 ch | CORE, ADAPTED |
| Paragraph gap | ≈ 0.5 L (accepted 0.45–0.9 L) | same | CORE |
| Margins | unit u = 0.6–1 L; left u : top 1.5 u : bottom ≈ 2 × top; sides ≠ top | u ≈ 1 L, right ≈ 2 × left for ragged text | CORE, EST |
| Controls | neighbour gap ≈ 0.5 line, ≥ 8 px; standalone target ≥ 44 px on touch; button side padding ≥ 0.5 × height | same | EST, ADAPTED |
| Stat / KPI figures | ≥ 2.5 × the label; never smaller than its existing size | — | ADAPTED |
| Density | high, uniform modules | low to medium | ADAPTED |
| Text over image | avoid | avoid | CORE |
| Rule breaking (C10) | almost never | never | CORE |

## Priorities

1. **Do not shrink what works.** Page titles, KPI numbers, prices and hero images that are already prominent keep their size; apply ratios only to levels that lacked contrast. ADAPTED
2. **Component stability.** Layout must survive any text length: sandwich of layers; cap headline lines; fix item counts; crop thumbnails to the height of the text part. CORE
3. **Controls.** Classify as point / line / rectangle. Park large rectangles first (list, text area, map). Group homogeneous controls in uniform modules and align. CORE
4. **Forms.** Label left (column, gap ≥ 1.5 × inner padding) or above (label nearer its field than the next field); label size = typed text size; button with generous side padding; control rows on a module of line + gap; centre label text on the baseline-to-cap band. CORE, EST
5. **Links.** Informative text, recognisable style, hover, no wraps, spaced; inline links exempt from the 44 px floor. CORE
6. **Tables and lists.** Remove repeats, sort for comparison, right-align or digit-align numbers, hairline under the header only, a title and a note stating unit, exclusions and gaps. CORE
7. **Reading order.** Columns top-aligned; avoid matrices unless order is irrelevant; keep side rails short. CORE
8. **Icons (points).** Unify size, order and rhythm; drop colour if a row shouts. CORE
9. **Feeds.** Tag above, caption below; extra ≈ 0.5 line between items or rules; a small userpic at the top-left of a module whose text column has its own heading is fine; thumbnails cropped to the text height. CORE, EST

## Common UI failures to catch

- Input text jammed against its frame; label much smaller than the input.
- Button without side padding; a short-label button narrower than ≈ 3 × its height.
- A button label with no ascenders or descenders that looks sunk even though it is geometrically centred.
- Line controls inside running text pushing the leading apart.
- Pseudo-modules from accidental alignment (a button aligned to two unrelated rows).
- Two adjacent links with no gap.
- A full-width heading above a left image and its text ("left armpit").
- A date as a tag in a non-live feed.
- Headings only barely larger than the next level on a text page.
- KPI figures shrunk to fit a ratio.
- The total, balance or price on a document or card set as plain text (an invoice's total due must be a visible anchor).
- A narrow article column parked at the left of a wide page, leaving an empty right third while the header rule and related grid run wider.
- `hyphens: auto` on a 60–70 ch measure ("arith-metic").
- Long-form body text at 16 px / 1.45 from the UI band.

## Token file

Start from `assets/tokens-ui.css`.

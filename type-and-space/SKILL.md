---
name: type-and-space
description: Use when setting or reviewing typography, font sizes, line height, margins, spacing, hierarchy or layout for a screen (UI, app, web page, dashboard) or a visual material (landing page, poster, slide, banner, email), or when choosing and pairing typefaces. Not for brand identity or font licensing.
---

# Type and space

Layout and type rules for text-led design. Adapted for modern UI and marketing. The skill covers the *class* of face for a job, pairing, style levers, capitals and microtypography (`references/06-typeface-style.md`); the specific font comes from what is available (system fonts by default) or the brief. Every rule in the reference files carries an origin tag (CORE, EST, ADAPTED); trust CORE over ADAPTED and EST when they conflict.

## 0. First, do no harm

A layout pass is the floor, not the style. Before changing anything, name what already works (a prominent page title, large KPI figures, a clear dominant image, a leading that already sits in the mode's band) and **leave it alone**. Never shrink an anchor to fit a ratio. Rewriting working values to the rule's edge makes a page worse; keeping them makes it better.

## 1. Pick the mode

| Signal | Mode | Load |
|---|---|---|
| Controls, forms, tables, repeated components, dense information, docs | **ui** | `references/mode-ui.md`, `assets/tokens-ui.css` |
| One message, hero, poster, banner, slide, emotion first | **marketing** | `references/mode-marketing.md`, `assets/tokens-marketing.css` |

If the request mixes both (a landing page with a signup form), set the page in marketing mode and each form or table in UI mode. Say so in the output. If it is unclear, ask one question.

## 2. Run the kernel

Always read `references/01-principles.md` (C1–C5). Apply to every block, then to the page.

- **C1 Inner ≤ outer.** Every gap is no larger than the gap one level up, with visible contrast between levels.
- **C2 Modularity.** Rectangles that do not overlap and sum to the page. Empty space is a rectangle too. Accidental alignment makes pseudo-modules.
- **C3 Anchor objects.** Visible objects (title, hero, KPI, price, CTA) sit at a corner, an edge or the visual centre, with air opposite.
- **C4 Format, margins, leading.** Line length, then leading, then heading gap, then margins. Margin set left : top : right : bottom ≈ 1 : 1.5 : 2 : 3; margins exceed the interline white gaps (not necessarily L).
- **C5 Primitives.** Classify each element as point, line or rectangle before placing it.

**Typography-led pieces** (menu, cover, poster, editorial opener, label, invitation): after the kernel, add a **voice step**: keep the neutral skeleton and add exactly one expressive display moment (`references/06-typeface-style.md` §1b). Not for UI screens, dashboards or transactional email. On text-led pages (articles, essays, interviews, policies) the voice stays on the title and deck; headings and body use a sturdy weight and hairline display faces only appear at large sizes.

## 3. Load detail only when needed

| Task involves | Read |
|---|---|
| Sizes, leading, spacing numbers | `references/02-tokens.md` |
| Heading, text, image, control, link, caption, table, list | `references/03-elements.md` |
| Cards, feeds, text with images, dominant images, reading order | `references/04-modules.md` |
| Whole page, grid, sandwich, text page, home page, factoid/quote/price tag, style stance | `references/05-pages.md` |
| Choosing or pairing typefaces, which style goes where, capitals, small caps, italic, numerals, microtypography, system-font stacks | `references/06-typeface-style.md` |

## 4. Produce

Output, in this order:
1. **Mode** and why.
2. **Left alone**: what already complied, so unchanged values are not rewritten for their own sake.
3. **Tokens**: a CSS block (start from the mode's token file; change values, don't invent new names).
4. **Structure**: the modules, each classified (C5), with its anchor named (C3).
5. **Markup or spec** at the level requested.
6. **Rationale**: one line per non-obvious decision, citing the kernel rule C1–C10 by ID (not just "Element"), e.g. "C1: heading 12px from text, 24px from previous block".
7. **Needs copy decision**: see step 5.

## 5. Copy-bound issues: report, don't fix

If a defect needs a copy change (missing visible label, heading with a final period, table without title, a heading that needs a cut), do not edit the copy. List it under **Needs copy decision** with proposed wording and, where useful, a length limit to ask the editors for. Apply every fix that doesn't change words.

## 6. Self-review

Run `references/qa-checklist.md` against your own output before presenting, starting with its do-no-harm block. Fix failures; report any you chose to leave and why. If you can render the page, look at it.

## Boundaries

- Rules marked ADAPTED or EST in the reference files are defaults, not law. Brand or accessibility requirements override them.
- Accessibility floors (contrast, minimum touch target, zoom) always override aesthetic rules.
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for text; `hyphens: auto` only on narrow measures (≤ ~45 ch).
- Long-form reading (articles, essays, docs prose) has its own profile: body ≥ 17–18 px, leading 1.55–1.7. The 12–16 px UI band is for blocks, controls and dense screens.
- The skill produces a neutral skeleton (Swiss "ikea" for UI and business information, Renaissance serif for reading and premium) with at most two families, each in a fixed role. A graphic idea and a brand style are separate decisions; do not default to all caps, brick-justified blocks or trend decoration. State the typeface class and the stack you chose in the output, and say which are fallbacks.

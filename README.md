# type-and-space

A skill for AI coding agents that sets type, spacing, hierarchy and layout for screens (UI, apps, dashboards, articles) and visual materials (landing pages, posters, covers, labels, emails). One shared kernel, two modes (UI and marketing), a typeface-and-style module, and a self-review checklist.

**Status: experimental (v0.6).**

## What it does

- **Kernel (five rules):** inner ≤ outer spacing at every level; layout as non-overlapping rectangles; anchor objects at corners, edges or the visual centre; format, margins and leading derived from one unit; point / line / rectangle classification.
- **Modes:** `ui` (controls, forms, tables, dense screens, docs) and `marketing` (one message, display type, posters, covers, emails). Mixed pages use both, stated explicitly.
- **Typeface and style:** class of face by job, a two-family role system, which style goes where, capitals, numerals, microtypography, system-font stacks, and a "voice" step for typography-led pieces.
- **Do no harm:** names what already works and leaves it alone; reports copy-bound defects instead of editing copy.
- **Checklist and tokens:** `qa-checklist.md`, plus CSS token files derived from one number (`L`, line height).

## Install

Claude Code: copy the `type-and-space/` folder into `~/.claude/skills/` (all projects) or `<project>/.claude/skills/`. Then ask for typography, layout, spacing or hierarchy work, or invoke the skill by name.

The UI token file names Geist, Inter and Funnel Sans as primary faces but does not load them: add the font files (or a web-font link) in your project, or the system fallbacks render.

Other agents: point your agent at `type-and-space/SKILL.md`; it routes to the reference files it needs.

## Layout

```
type-and-space/
  SKILL.md                      entry: mode, kernel, output format, self-review
  references/
    01-principles.md            the kernel (C1–C5)
    02-tokens.md                sizes, leading, gaps, margins, controls
    03-elements.md              heading, text, image, control, link, caption, tables, lists
    04-modules.md               cards, feeds, text with images, dominant images, reading order
    05-pages.md                 grid, sandwich pages, text pages, home pages, mini-formats, style stance
    06-typeface-style.md        typeface classes, pairing, capitals, microtypography, voice step
    mode-ui.md  mode-marketing.md
    qa-checklist.md             self-review
  assets/tokens-ui.css  tokens-marketing.css
tools/lint.js                   measures a rendered page against the checkable rules
```

Every rule carries an origin tag: **CORE** (established rule), **EST** (estimated), **ADAPTED** (translated for modern UI and marketing). Trust CORE over ADAPTED and EST when they conflict.

## Use the tools

```
npm i playwright-core
node tools/lint.js page.html --width 1100
```

## Licence

Text, tables, tokens and tools are MIT-licensed, see [LICENSE](LICENSE).

## Contributing

The most useful contributions are failing cases: a brief, the page an agent produced with the skill, and what looked wrong. Open an issue with those three things.

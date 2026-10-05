# tools

`lint.js` measures a rendered page against the skill's checkable rules (see `type-and-space/references/qa-checklist.md`). It is a sanity check, not a verdict: it reports numbers, you decide.

```
npm i playwright-core
node tools/lint.js page.html --width 1100
```

Set `CHROMIUM_PATH` to use a specific Chromium build.

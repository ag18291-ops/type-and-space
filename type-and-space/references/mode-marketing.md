# Mode: Marketing / visual materials

Goal: land one message, build emotion. Few elements, strong hierarchy, deliberate composition. Applies to landing pages, posters, banners, slides, emails, packaging-style layouts.

Tags: **CORE** established rule · **EST** estimated · **ADAPTED** translated for modern UI/marketing.

## Parameters

| Parameter | Value | Origin |
|---|---|---|
| Body | 16–20 px on screen (set per format in print) | ADAPTED |
| Body leading | 1.4–1.5; ≥ 1.45 needs a paragraph gap ≥ 0.5 L | ADAPTED, CORE |
| Display leading | 1.0–1.15 | CORE, ADAPTED |
| Heading ratio | H2 1.5–2 ×, display 2.5–4 × body | CORE, ADAPTED |
| Display size | `clamp()` on the web; fixed artboards pick px so the headline fits ≤ 3 lines at its column width | ADAPTED |
| Factoid / price | number 4–6 × its caption, accent colour, air all round | EST |
| Layer gap | 2.4–3 L on full-width pages; 1.5–2 L in email, poster, slide | EST, ADAPTED |
| Measure | display copy ≲ 45 characters per line; body ≈ 55 ch | ADAPTED |
| Paragraph gap | 0.5–0.9 line | CORE |
| Margins | left u : top 1.5 u : right 2 u (ragged text) : bottom ≈ 2 × top | CORE |
| Density | low; few layers | ADAPTED |
| Text over image | allowed with a scrim, a gradient, or an image with a calm flat zone for the text | CORE |
| Rule breaking (C10) | one per piece | CORE |
| Capitals | do not default to all caps or "brick" justified blocks; tracked caps for tags (0.06–0.1 em) and short display plates (0.13–0.3 em) only; see `06-typeface-style` | CORE, ADAPTED |
| Typefaces | at most two families with fixed roles; class by job (old-style serif for reading and premium, neutral sans for information); one display moment per piece | CORE, EST |

## Priorities

1. **Name the dominant.** One image or headline wins; everything else supports. Equal elements quarrel. CORE
2. **Place anchors on purpose.** Corner, side or visual centre, with air opposite. Top-load the dominant. CORE
3. **Build the headline.** Sentence case, no period. Use a **tag** (small, above-left, contrasting in family, case or weight) to dress it; set the headline up until it is short and visible; one syntactic unit; no hanging prepositions. CORE
4. **Image first.** The picture is read before the headline: put it above or beside. Pick identifiable, relevant images; crop hard; never decorate. CORE
5. **Layer the page.** Sandwich with alternating rhythm; neighbouring layers contrast (background colour is the practical carrier); one card for the key module. Avoid rows of equal benefits. CORE
6. **Use mini-formats.** Pull quote, factoid, price tag, ears, byline: lots of air; they set the style. CORE
7. **CTA is a rectangle.** The key button leaves the line, takes a strategic corner, and does not compete with another button of similar size. CORE
8. **Text over image.** Only with a scrim or an image with a calm zone; check contrast at the worst point. CORE
9. **Break the rectangle once.** Curved caption, a cut-out reaching into the next module, off-grid element; after everything else holds. CORE
10. **A layout pass is the floor.** Add one graphic move and the brand style on top of the neutral skeleton; do not copy trends. For typography-led pieces make the move a single expressive display moment (`06-typeface-style` §1b). CORE

## Reference exercise

Poster workflow: start from the largest anchor (headline) → add the image above → answer "what" then "when / where" in a layer with equal-height columns → stack features in a side column of module height → footer in equal-height columns → logo subordinate to the module → refine: tag on the headline, colour accents unified (take one from the illustration), inner/outer spacing systematised. The result: fewer layers, larger type, a simpler and sturdier construction. A bad variant moves the CTA to the end so anchors float and neighbouring layers stop contrasting. CORE

## Common marketing failures to catch

- Nine layers of small fragments.
- Everything emphasised, no dominant.
- Rows of equal items with no reason. **Exception:** peers whose job is comparison (pricing tiers, spec columns) may stay equal if one is made dominant (colour, size, lift); a feature trio is fine when a layer contrast or one larger item breaks the monotony. Say which applies.
- Photo filling the placeholder with unidentifiable scenery.
- Call to action moved to the end.
- Square-cropped everything, killing vertical photos.
- Equal margins on a poster; top = bottom.
- A stat or price figure shrunk to fit a type scale.
- A shrunk dominant image or headline to make everything fit.

## Token file

Start from `assets/tokens-marketing.css`.

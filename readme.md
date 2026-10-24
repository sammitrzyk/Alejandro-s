# Alejandro's Landscaping — Design System

Landscaping, hardscaping, tree work and commercial grounds care in Central Pennsylvania. Based in New Cumberland, working a roughly 20-mile radius across Cumberland, Dauphin, York, Perry, Lancaster and Lebanon counties.

The business is not a landscaping company that also lays pavers, and not a hardscape company that also mows. It is both, and the design system exists to make that legible without splitting the brand in two.

## Sources

| Source | What it gave us |
| --- | --- |
| `uploads/alejandroslogo.png` | The brand mark. Copied to `assets/logo.png`. |
| ~280 project photographs | Twelve usable, non-HEIC images copied to `assets/photos/`. See "Photography" below. |
| Woolley Outdoors (Lititz PA) — About, Commercial Landscape Construction, Commercial Snow Removal | Page architecture: a full commercial branch, snow removal as a standalone page, geography in every service subhead, paired quote + phone CTAs, Careers, client log-in. |
| Earthworkers Landscaping (Central PA) — mega-nav | One indexable page per service, exposed through a structured Residential/Commercial mega-nav. |
| Brandywine Designs LLC — homepage | The visual direction: left-aligned serif over full-bleed photography, one restrained accent, square corners, copy that takes a position. |
| costacustompools.com/service-area/ | The service-area model. Operational specifics per town instead of a list of town names. The strongest reference in the set. |
| groundworks.com — Harrisburg satellite office | Location-page template, ratings shown with review counts, a plainly-stated three-step process. |
| Renuity, West Shore Home, Lifescape Colorado, System Pavers | Owner-supplied ranking of platform-scale operators. System Pavers was rated 10/10 but no URL was supplied and it could not be read. |

Discovery notes live in `discovery/design-brief.md` and `discovery/service-area.md`. Read them before changing direction — they record what was rejected and why.

## The brief in one line

**Institutional credibility in the structure, boutique restraint on the surface.** Platform-grade architecture — real process, honest numbers, a repeatable town-page template, phone always visible — presented with the calm of a design-led studio. Big photography, one accent colour, generous space.

## What this system is reacting against

The owner's brief was explicit: not another technically competent but generic contractor site. The rejected pattern is giant hero → three service cards → icon row → "Why Choose Us" → testimonials → FAQ → CTA. Concretely, this system does not ship:

- Three-card service grids. Services are editorial rows (`ServiceRow`) with real photographs.
- Icon rows standing in for reasons to trust. Trust comes from projects, towns and process.
- Centred hero text over a black wash. Heroes are left-aligned with a directional scrim.
- Pill buttons. Corners are square.
- A testimonials carousel. Reviews sit next to the doubt they answer, one at a time.
- A four-column grid of 60 town links. Towns get real pages or a county cluster page.

Before shipping any new section, ask: with the logo removed and the text changed, could this belong to 500 other landscaping sites? If yes, it gets redesigned.

---

## CONTENT FUNDAMENTALS

**Voice: a competent tradesperson explaining something, not a marketing department.** The model is Costa Custom Pools — short declarative sentences, operational fact, almost no adjectives.

**Person.** "We" for the company, "you" for the homeowner. Never "our team of dedicated professionals". Never third person ("Alejandro's Landscaping is committed to…").

**Casing.** Sentence case everywhere in prose and headlines. Uppercase only for eyebrows and buttons, both tracked out. No Title Case On Headings.

**Sentence length.** Short. Most sentences under 18 words. A long one is allowed when it earns it by carrying a real explanation.

**Adjectives are a smell.** "Beautiful", "stunning", "premium", "top-quality", "dedicated", "passionate" do not appear. Replace an adjective with the fact underneath it:

> ✗ We deliver stunning, high-quality outdoor living spaces.
> ✓ Wall lighting set into the course below the cap, so the light washes the stone instead of glaring at the seat.

**Headlines take a position.** They state how the company works, not what the customer will feel.

> ✓ "Ground first. Then everything you see."
> ✓ "The part you never see is the part that fails."
> ✓ "Two halves of the same yard."
> ✗ "Transform Your Outdoor Space"
> ✗ "Your Dream Backyard Awaits"

**Eyebrows carry facts.** "Camp Hill, PA · Retaining wall", "New Cumberland, PA · Hardscape & landscape". Never "Excellence in outdoor living".

**Geography is named, never implied.** Every service page subhead names towns. Town copy names the township, the soil, the permit office, the slope.

**CTAs sound like a person.** "Request an estimate", "Send a photo of the yard", "Tell us what you are looking at". Not "GET YOUR FREE QUOTE NOW!"

**Never invent.** No years in business, crew size, project counts, review counts, ratings, awards, certifications, warranties, financing, licensing, or "family-owned" unless the owner has supplied and verified it. Where a real figure is missing, the copy says nothing rather than guessing. Placeholder text currently in the UI kit is labelled as such in visible captions — search for "Placeholder" before launch.

**Ratings, if used, always carry their count.** "4.8 from 1,547 reviews", never four gold stars on their own.

**No emoji. Anywhere.**

---

## VISUAL FOUNDATIONS

### Colour

The logo is roughly 80% green and 10% gold; the owner's brief described the brand as gold and white. That contradiction is resolved in favour of the artwork: **green is the ground, gold is the accent.**

- **Green** (`--green-950` → `--green-50`) carries dark sections, the footer, the primary CTA and the wordmark. `--green-800` (#14532B) is the wordmark green and the default action colour.
- **Gold** (`--gold-500`, #F5B324) appears **once per screen**. Eyebrow text, a 28px rule, the focus ring, the before/after handle, a single high-priority CTA. It is never a background wash and never a section fill. Two gold tokens exist for a reason: `--gold-600` is for rules, fills and borders, and `--gold-text` (#8A5D08, ~5.4:1 on the page ground) is for any gold **glyph**. Gold text at 12px does not pass AA in the lighter shades.
- **Lime** (`--lime-500`) exists in the logo only. It is not a UI colour.
- **Neutrals are warm stone**, never blue-grey. `--stone-50` is the page ground, `--stone-100` the alternating band, `--stone-900` body text. Warm neutrals sit correctly under photographs of soil, mulch and flagstone; cool grey makes the same photographs look cheap.
- Two background colours per page maximum, plus the dark band.

Always reference semantic tokens (`--surface-page`, `--text-secondary`, `--cta-bg`, `--border-hairline`) rather than raw ramp values.

### Type

**Newsreader** (serif) for every headline. **Archivo** (grotesque) for everything else. Hard rule: the serif never appears below 20px, the sans never above 32px.

Newsreader gives editorial weight without the fashion-magazine coldness of a didone; Archivo is a workmanlike grotesque that holds up at small sizes in forms and captions. Both load from Google Fonts — **no original brand typeface was supplied, so this pairing is a designed choice, not a match to an existing identity.** If the business has typefaces in use on trucks, shirts or estimates, send them and this changes.

Headings are capped at ~18ch so they break into short display lines instead of running as sentences. Body measure is 64ch, lead 52ch.

### Spacing and layout

4px base scale. Section rhythm is deliberately large: `--section-y` is `clamp(72px, 9vw, 144px)`. Container max is 1320px, text column 720px, gutter `clamp(20px, 4vw, 56px)`.

Layouts are asymmetric by default. Hero text sits left, never centred. Service rows alternate side to side. Galleries use one lead tile at double width rather than an even grid.

### Responsive

Mobile is not compressed desktop. Three breakpoints govern the system:

- **1180px** — the header's mega-nav collapses into a Menu drawer. The drawer carries the *full* service taxonomy, not a shortened one; nothing that exists at desktop width disappears on a phone. Phone number and estimate CTA stay visible in the bar.
- **900px** — `MobileCallBar` appears, fixed to the bottom with 56px targets. It renders its own spacer so it never covers the footer.
- **560px** — the logo steps down to 32px and the header phone number gives way to the call bar below it.

Every grid in the system is `repeat(auto-fit, minmax(...))`, so columns collapse on their own without media queries. Hit targets are never below 44px.

### Contrast

Body copy, service names, captions, form hints and metadata all use `--text-muted` (`--stone-600`, ~5.6:1 on the page ground). `--text-faint` (`--stone-500`) exists for decoration only and must never carry content — it fails AA at text sizes.

### Corners, borders, elevation

**Radius is effectively zero.** Buttons and fields are square (`--radius-none`); images take 2px (`--radius-image`) purely to avoid an aliased edge. Pills are not used — they read as SaaS. Square corners read as masonry, which is the actual product.

Cards sit on **hairlines, not shadows**. `--border-hairline` between sections and around surfaces. Shadow is reserved for elements that genuinely float: the mega-nav panel (`--shadow-panel`) and the sticky mobile bar (`--shadow-sticky`). Project tiles and service rows have no shadow at all — the photograph is the object.

### Backgrounds

No gradients as decoration, no patterns, no textures, no illustration. Backgrounds are one of four things: the warm page ground, the sunken alternating band, the dark green band, or a full-bleed photograph.

The only gradients in the system are photographic scrims: `--scrim-hero` runs horizontally so the text side darkens and the photograph stays readable; `--scrim-tile` darkens the bottom 60% of a project tile so a caption can sit on it. Detail crops get no scrim.

### Photography

The most valuable asset in the whole system is the set of **night shots** — the lit seat wall and firepit. No competitor in the Harrisburg market is showing work after dark. That is the hero.

Rules: real projects only, no stock. Every image credited by town and by what was built. Warm colour, as shot — no filters, no desaturation, no black-and-white. Landscape crops for heroes and rows, 3/4 portrait for gallery columns, 21/9 for full-bleed bands. Images scale to 1.03 on hover over 600ms and nothing else.

Weak photographs do not get large positions. If there is no good image for a section, the section changes.

### Motion

Restrained. Entrances are opacity 0→1 plus an 18px rise over 800ms on `--ease-out` (`cubic-bezier(.22,.61,.36,1)`), triggered once by IntersectionObserver. Hover on controls is colour only, 200ms. Hover on images is `scale(1.03)`, 600ms. Nothing bounces, nothing slides in from off-screen, nothing parallaxes. `prefers-reduced-motion` collapses every duration to 0ms.

### States

Hover on a filled button darkens it (`--cta-bg-hover`). Hover on an outline button darkens the border and adds the faintest green tint. Hover on an inverse button turns the border gold. Hover on a text link swaps the underline colour to gold. Focus is a 2px gold outline at 2px offset, everywhere. Disabled is 42% opacity — no colour change.

---

## ICONOGRAPHY

**Alejandro's has no icon set of its own.** No icon font, no sprite sheet, no SVG library was supplied. **Substitution flagged:** the system uses [Lucide](https://lucide.dev) at stroke weight 1.5 to match the hairline border system, loaded from CDN:

```html
<script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js"></script>
```

The `Icon` component reads glyph data off `window.lucide`. Six glyphs are in active use: `phone`, `arrow-right`, `chevron-down`, `map-pin`, `menu`, `x`.

Icons are functional only — they mark a phone number, a direction, a disclosure. **An icon never illustrates a value.** The four-icon "Quality / Experience / Reliability / Customer Satisfaction" row is exactly the pattern this system was built to avoid. No emoji, no unicode dingbats, no decorative glyphs.

If Alejandro's has real iconography — anything on trucks, signage or estimates — send it and Lucide comes out.

---

## Components

Fifteen primitives, in four groups. All are exported on `window.AlejandroSLandscapingDesignSystem_a675b9`. Each has a sibling `.d.ts` (props contract) and `.prompt.md` (when and how to use it).

### `components/core/`
- **Button** — five variants (primary, accent, outline, inverse, solidLight), three sizes. Square corners. Accent is capped at one per screen.
- **Eyebrow** — uppercase tracked label that must carry a fact, optionally prefixed with a hairline rule.
- **Icon** — Lucide wrapper at stroke weight 1.5.
- **SectionHead** — eyebrow + serif H2 + lead. The standard opener for any section.
- **StatRow** — figures on hairlines. Verifiable numbers only.

### `components/content/`
- **BeforeAfter** — draggable comparison slider. Genuine same-position pairs only.
- **ProjectTile** — photograph, town, what was built, one concrete detail.
- **QuestionList** — editorial FAQ. Numbered question left, extractable answer and a link to the deeper resource right. Five to seven per service page.
- **ReviewQuote** — a single review set large in the display serif. No stars, no carousel.
- **ServiceRow** — full-width editorial row, copy one side and photograph the other. The replacement for the three-card grid.
- **TownEntry** — one town, with operational notes. The `notes` prop is the entire point.

### `components/navigation/`
- **SiteHeader** — three-branch mega-nav (Hardscaping / Landscaping / Commercial), persistent phone, estimate CTA, transparent overlay mode for photographic heroes.
- **SiteFooter** — dark, four link columns, town list as flowing text rather than a link grid.
- **MobileCallBar** — sticky two-up call/estimate bar, 56px targets, mobile only.

### `components/forms/`
- **Field** — labelled text, tel, email, textarea or select. Square, gold focus ring.
- **EstimateForm** — the site's single conversion form. Five fields, town required, expectation-setting beside the button rather than in fine print.

---

## UI kit

`ui_kits/website/` — four click-through screens sharing one shell. Use the switcher at bottom right.

- **Home** — hero, editorial service rows, asymmetric project gallery, the construction-spec dark band, service-area preview, one contextual review, estimate band.
- **PaverPatios** — a service page whose section order follows the buyer's questions: can they build it → what does it look like → what goes into it → what can I choose → how does hiring work → has anyone else → estimate.
- **ServiceArea** — the Costa model. Eight town blocks with operational notes, then the remaining towns grouped by drive-time ring as flowing text.
- **SnowRemoval** — deliberately different behaviour. Phone-first CTA, terms above the fold, no inspiration gallery. A property manager at 4am is not browsing.

`Shell.jsx` holds the shared `Container`, `Section`, `Reveal`, `Hero` and `EstimateBand` compositions.

---

## Index

```
styles.css                 entry point — @import list only
tokens/                    colors · typography · spacing · layout · motion · base
assets/logo.png            brand mark
assets/photos/             12 real project photographs
components/core/           Button Eyebrow Icon SectionHead StatRow
components/content/        BeforeAfter ProjectTile QuestionList ReviewQuote ServiceRow TownEntry
components/navigation/     SiteHeader SiteFooter MobileCallBar
components/forms/          Field EstimateForm
guidelines/                15 foundation specimen cards
ui_kits/website/           Home · PaverPatios · ServiceArea · SnowRemoval
discovery/                 design-brief.md · service-area.md
thumbnail.html             homepage tile
SKILL.md                   Agent Skills manifest
```

## Open items

1. **No verified business facts.** Years in business, crew size, review count and rating, insurance, licensing, guarantee, financing — none supplied, none invented. Every place one belongs is currently empty or labelled placeholder.
2. **Phone number is `(717) 736-6538` throughout.** Replace before anything ships.
3. **Town notes are placeholders** written from general Central PA conditions. They must be replaced with what Alejandro's actually encounters. That specificity is the whole competitive advantage of the service-area architecture.
4. **No typefaces supplied** — Newsreader and Archivo are a designed pairing, not a brand match.
5. **No icon set supplied** — Lucide substituted, flagged above.
6. **No crew photograph available.** ~270 of the uploaded images are HEIC and cannot be read in a browser; the About page was not built because the Woolley-style crew shot that would anchor it may exist in that set but could not be opened. Re-export any crew, equipment and before/after photos as JPEG.
7. **System Pavers was rated 10/10 by the owner but no URL was supplied**, so the reference the owner most wanted studied is the one gap in the analysis.

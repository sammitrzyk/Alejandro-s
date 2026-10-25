# VERIFY-LIST — unverified content in the Astro build

Every `[VERIFY ...]`, `[ADD ...]` and `[CONTENT NEEDED ...]` marker found while porting the
prototype (`ui_kits/website/`) into the production Astro site (`astro/`). None of this text is
visible to a normal visitor. Two mechanisms are used, matching how each page is built:

1. **Hand-built pages** (Home, the bespoke service pages, Projects/ProjectPage, ServiceArea,
   Resources, FAQs, About) — the bracketed text was removed at the template level. Where a whole
   sentence was nothing but a bracket, the surrounding element (line, paragraph, FAQ item, or
   whole section) is omitted rather than left empty.
2. **Data-driven pages** (the 5 services still using the generic `src/layouts/Service.astro` —
   fire features, grading & drainage, landscape lighting, Christmas lights, sod installation —
   plus the 4 project case studies) — the source data in `src/data/services.js` /
   `src/data/projects.js` keeps the bracketed text verbatim, exactly as the prototype's own data
   files do, and `src/scripts/hide-verify.js` (loaded on every page via `src/layouts/Base.astro`)
   strips it from the rendered DOM at runtime — the same mechanism the prototype itself used
   (`ui_kits/website/index.html`'s inline hider script). Add `?review` to any URL to see the raw
   bracketed text for content review.

Add `?review` to any URL (e.g. `/landscaping/sod-installation/?review`) to see the markers while
reviewing content with the owner.

---

## Hand-stripped pages (bracket text removed at build time, not just hidden)

### Home (`/`)
- "Where we work" cards for Camp Hill, Mechanicsburg, New Cumberland: prototype's `notes` field
  was `[VERIFY ... CONDITIONS — soil, grade, permitting, access ...]` for all three. Now blank.
- "Customer proof" section (`[ADD REAL CUSTOMER REVIEW]`) omitted entirely — no real review exists.

### `/hardscaping/paver-driveways/`
- Load-diagram caption `[VERIFY DRIVEWAY BUILD WITH DORIAN — excavation depth, base material and
  thickness, compaction, bedding, paver thickness, edge treatment...]` omitted.
- Surface-choice section closing line `[VERIFY COMPARISON CLAIMS BEFORE PUBLISHING.]` omitted.

### `/hardscaping/walkways/`
- Before/after breakdown's "Built" row had `[VERIFY TOWN AND PAVER PRODUCT.]` — line shortened.
- Steps-section caption `[VERIFY STEP CONSTRUCTION — block, cap and base used.]` omitted.
- FAQ: `[VERIFY WALKWAY PRICING.]` and `[VERIFY TYPICAL DURATION.]` stripped from their answers.

### `/landscaping/installation/`
- "Customer proof" section (`[ADD REAL LANDSCAPE INSTALLATION REVIEW]`) omitted entirely.
- FAQ: `[VERIFY LANDSCAPING PRICE RANGE...]` and `[VERIFY WHETHER A DRAWN PLAN IS PROVIDED...]`
  stripped from their answers.
- "Shrubs & ornamental trees" and "Renovating existing beds" install rows had
  `[VERIFY NURSERY SOURCES AND WHETHER PLANT STOCK IS WARRANTED.]` /
  `[VERIFY RENOVATION SCOPE.]` — replaced with neutral copy that makes no verification claim;
  still needs owner review before publishing as-is.

### `/service-areas/`
- Intro lost the clause `[VERIFY REGIONAL SOIL AND GRADE CHARACTERISTICS with Dorian before this
  line publishes.]`.
- All seven featured town cards (Camp Hill, Mechanicsburg, New Cumberland, Harrisburg, Hershey,
  Lemoyne, Enola) had `[VERIFY ... CONDITIONS WITH DORIAN — soil, grade, borough permitting,
  what actually goes wrong on these lots]`-style notes. All blank now — each needs real
  operational detail before publishing.
- The prototype's own caption explaining that the town notes were placeholders was dropped along
  with the placeholders themselves.

### `/resources/faqs/`
- "Project completion" group dropped entirely — all four items ("Do you clean up and haul debris
  away?", "Will you repair the lawn afterward?", "Is there a final walkthrough?", "What warranty
  applies?") had answers that were nothing but a `[VERIFY ...]` bracket.
- "Estimates & scheduling" group: "Is the estimate free?" and "How far out are you scheduling?"
  dropped, same reason.
- "What do I get in writing?" dropped — its only non-bracket content was a comparison-shopping
  tip, not an actual answer.
- Kept items had a `[VERIFY ...]` bracket stripped from the answer, same sentence otherwise:
  "What services do you offer?", "Are you licensed and insured?", "How much does a paver patio
  cost?", "Can you replace an existing concrete patio or walkway?", "How much does landscaping
  cost?".

### `/about/`
- Dorian's photo caption lost `[VERIFY ROLE AND TITLE]` — only "Dorian" remains, no title.
- "The company" section's first paragraph was entirely `[VERIFY WITH DORIAN — who started
  Alejandro's, what year, and the first kind of work the company took on.]` — dropped. The second
  paragraph kept its real sentence after stripping `[VERIFY — how the company grew...]`.
- Entire "How it started" section dropped — its only content was `[VERIFY ORIGIN STORY WITH
  DORIAN — and add an early photo of the company if one exists.]`.
- "Tree work" removed from the "What we do" grid — its description was `[VERIFY TREE SERVICES
  OFFERED — trimming, removal.]`. `discovery/business-fact-sheet.md` still lists tree
  removal/trimming as NEEDED (never confirmed as offered) — do not re-add without that
  confirmation.

### `/commercial-landscaping/`
- Advanced Dental Partners portfolio entry: town was `[VERIFY LOCATION], PA` — now blank.
- FAQ "Do you offer recurring commercial landscaping?" had `[VERIFY HOW RECURRING SERVICE IS
  SCHEDULED AND BILLED.]` stripped from the answer.

### `/projects/[slug]/` (template-level filters, apply to all four case studies)
- `facts` rows where the value is `[VERIFY YEAR]` (the "Completed" row, on 3 of 4 projects) are
  filtered out of the rendered fact grid.
- `work` list items that are entirely a bracket are filtered out (one per project: base prep on
  the driveway/walkway job, base rebuild on the pool patio, step construction on the walkway job,
  wall base/drainage/reinforcement on the wall/patio/fire-pit job).
- `patio-retaining-wall-fire-pit`'s `before` field is entirely `[VERIFY STARTING CONDITION...]` —
  the whole "Before the work" block is hidden for that project.

---

## Data-driven pages (bracket text hidden at runtime by `hide-verify.js`, not stripped from data)

These five pages use the generic `src/layouts/Service.astro` template, pulling content straight
from `src/data/services.js`. The bracketed text below still lives in that file (so the source is
auditable) but never reaches a visitor — `hide-verify.js` removes it from the DOM on every page
load.

### `/hardscaping/fire-features/` (`src/data/services.js`, `fire-features-seat-walls`)
- Construction detail: footing spec, gas line responsibility, fixture/transformer spec,
  clearance, retrofit routine, township fire-feature restrictions (6 items).
- FAQ: retrofit capability, added cost of a fire pit/seat wall, fire-pit clearance, fixture spec
  for integrated lighting (4 answers).

### `/hardscaping/drainage/` (`grading-drainage`)
- Construction detail: downspout inclusion, outlet handling, grading fall spec, lawn-restoration
  inclusion (4 items).
- FAQ: fall spec used in regrading, drainage/grading price ranges, lawn-restoration inclusion
  (3 answers).

### `/landscaping/landscape-lighting/` (`landscape-lighting`)
- Page-level banner: whether lighting is sold standalone and whether electrical work is in-house
  (`notConfirmed`).
- Missing-photo note for path/uplighting photography.
- Construction detail: fixture/spacing standard, tree/facade uplighting, step-lighting routine,
  low-voltage system spec, timer/photocell/app control (5 items).
- `detailNote`: full lighting capability, fixture brands and electrical scope need verification
  with Dorian; do not imply electrical licensing.
- Process steps: whether a lighting plan is drawn, lawn/bed restoration after trenching, whether a
  night-aiming visit is included (3 steps).
- FAQ: pricing basis, retrofit capability, new-outlet/circuit requirement, fixture brand/warranty
  (4 answers).

### `/landscaping/christmas-light-installation/` (`christmas-light-installation`, **noindex**)
- Construction detail: pre-season walkthrough, who supplies/owns the lights, height/fall-
  protection capability, ground-level elements offered, timer/circuit management, in-season
  repairs, takedown terms (7 items).
- `detailNote`: all holiday-lighting capability, equipment, insurance and contract structure need
  verification; explicitly flagged as a liability question pending insurance confirmation.
- FAQ: pricing basis, light-ownership model, takedown inclusion, fastening method, booking window,
  in-season service response (6 answers).
- This page is excluded from the sitemap and marked `noindex` per owner instruction, independent
  of the content gaps above.

### `/landscaping/sod-installation/` (`sod-installation`)
- Construction detail: grading inclusion, topsoil supply/depth, sod variety/supplier,
  delivery-to-install window, seam/peg method, aftercare guidance (6 items).
- FAQ: price per square foot, whether grading is included (2 answers).

---

## Business facts still blocking content (see `discovery/business-fact-sheet.md`)

Independent of the above, the fact sheet lists these as still **NEEDED** — nothing in the Astro
build states them, and nothing should until they're confirmed: operating address, business hours,
founding year, PA HIC registration number, insurance status, estimate fee/response time, warranty
terms, whether tree removal/trimming, commercial grounds maintenance, or snow removal are
genuinely offered as residential vs. commercial-only services, and aggregate review rating/count.
The LocalBusiness JSON-LD on every page (`src/lib/localBusiness.ts`) intentionally includes only
the four verified facts — name, phone, email, and the New Cumberland service-area description —
and omits address, hours and ratings for this reason.

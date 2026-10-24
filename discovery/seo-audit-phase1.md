# Phase 1 Audit — SEO/AEO/GEO Readiness

Date: 8 September 2026. Scope: everything currently in this project. No files were modified.

---

## HEADLINE FINDING

**There is no website to audit.**

This project is a *design system* plus a four-screen React prototype. It is not a deployed site, not a CMS, and not an application with routing. Nine of the twelve audit items in the specification have no implementation to examine because the layer they live in does not exist yet.

That is not a failure of the work — the prototype was built to settle visual direction, and it did. But the specification assumes an existing production website ("You are working on the existing website for Alejandro's Landscaping"), and that assumption is wrong. Several instructions cannot be executed against the current artifact:

| Spec instruction | Status |
| --- | --- |
| "Preserve the existing service hierarchy" | No URL hierarchy exists. Routes are simulated in React state. |
| "Preserve existing analytics/tracking" | None exists. |
| "Existing SEO metadata system" | None exists. |
| "Upgrade /projects/ into a structured project library" | `/projects/` does not exist in any form. |
| "Create or preserve /service-areas/" | Exists as a prototype screen only, at no URL. |

**The real Phase 1 decision is not "how do we add `/resources/`." It is "what platform does this get built on."** Everything in the specification — canonical tags, sitemap generation, IndexNow, structured data, breadcrumbs, a project data model — is platform work. Answering that question first prevents building the resource architecture twice.

---

## 1. CURRENT ROUTING ARCHITECTURE

**Finding: no routing. Client-side state switching only.**

`ui_kits/website/index.html` holds a `PAGES` array of four entries and a `useState` page key. The `go()` handler intercepts every `<a href>` click, strips the path to its last segment, matches it against four known slugs, and falls back to Home for everything else.

Consequences: one URL for the whole prototype. No deep links, no back button, no server-rendered HTML per page, nothing crawlable. The `href` values written throughout the components (`/hardscaping/paver-patios`, `/tree-services/tree-removal`) are **aspirational** — they describe the intended URL architecture but resolve to nothing.

Useful salvage: those hrefs already encode a coherent URL plan matching the spec's hierarchy. `components/navigation/SiteHeader.jsx` and `SiteFooter.jsx` between them define the intended sitemap. Nineteen distinct service URLs are declared across four groups.

## 2. EXISTING SERVICE PAGES

**Finding: one of nineteen declared services is built.**

Built as a real screen: **Paver patios** (`ui_kits/website/PaverPatios.jsx`). Also built: Commercial snow removal, Service area, Home.

Declared in nav but not built (18): retaining walls, walkways & steps, fire features & seat walls, grading & drainage, landscape installation, mulch & bed work, shrub & hedge trimming, property cleanups, lawn installation, tree removal, tree trimming, grounds maintenance, commercial landscaping, HOA & property management, projects, about, careers, contact.

Against the spec's proposed hierarchy, two differences: the spec puts grading/drainage at root (`/grading-drainage/`) while the nav nests it under hardscaping; the spec has no commercial branch at all, but the prototype has four commercial URLs and a built snow-removal page. **The commercial branch and snow removal both need confirmation — they were inferred from a competitor reference and one photograph, never confirmed by the owner.**

The PaverPatios page is already close to the spec's service-page architecture — intro, photography, before/after, construction detail, materials, process, review, CTA. It is missing: AEO question blocks, related resources, an explicit service-territory section.

## 3. CURRENT PROJECT ARCHITECTURE

**Finding: none. Projects exist as decorative tiles.**

`ProjectTile` renders image, town, service and one detail line. Every instance is hardcoded inline in the page files. There is no data model, no per-project record, no slug, no `/projects/` index, and every tile's `href` defaults to `#`.

Of the spec's 23-field project data model, the current tile supports four: `city` (as a display string), `projectType`, `heroImage`, and a free-text detail. Nineteen fields have nowhere to live.

Photography is the binding constraint. Twelve usable images exist in `assets/photos/`. Roughly 270 further uploads are HEIC and unreadable in a browser. There is exactly **one** genuine before/after pair, and **zero** during-construction images — which matters because the spec's project template and several priority resources ("why paver patios sink", "base depth") depend on construction photography to carry their evidence.

**No project's town is verified.** Every tile currently reads "Central PA" because the photo-to-town mapping was never supplied. Town-specific project pages cannot be built until it is.

## 4. CURRENT SERVICE-AREA ARCHITECTURE

**Finding: strongest existing piece, but the content is placeholder.**

`ui_kits/website/ServiceArea.jsx` implements the Costa Custom Pools model correctly: eight town blocks with operational notes, then 47 further towns grouped into three drive-time rings as flowing text rather than a link grid. `discovery/service-area.md` holds the full 20-mile analysis — 47 towns across six counties, ringed by distance, with a build/don't-build recommendation.

This aligns with the spec's anti-doorway stance, and the recommendation there (15 real pages, the rest on county cluster pages) is the same conclusion the spec reaches independently.

**But every operational note is invented.** Shale on the Camp Hill ridges, Trindle corridor architectural review, Derry Township approvals — all written from general Central PA plausibility, none verified. The page already carries a visible caption saying so. Under the spec's "NO FAKE EXPERIENCE" rule these are the highest-priority removal-or-verification items in the entire project.

No town page exists at any URL. There is no `/service-areas/mechanicsburg-pa/`.

## 5. EXISTING SEO METADATA SYSTEM

**Finding: none.**

One `<title>` in the whole project: "Alejandro's Landscaping — UI kit". No meta descriptions, no canonical tags, no Open Graph, no Twitter cards, no `hreflang`, no `robots` directives.

Heading semantics are, however, in decent shape and worth preserving. `Hero` renders a real `<h1>`, `SectionHead` renders `<h2>`, `ServiceRow`/`TownEntry`/subsection headers render `<h3>`, and none of them pick their tag by visual size — type is applied through tokens independently of the element. That satisfies the spec's heading rule already.

Image alt text is descriptive and specific throughout ("Retaining wall and firepit lit at night behind a Central Pennsylvania home"), matching the spec's alt-text guidance. No keyword stuffing found.

Gaps against the technical checklist: no `width`/`height` attributes on images (layout shift), no lazy loading, filenames are semantic but images are unoptimised full-size JPEGs straight from a phone.

## 6. EXISTING STRUCTURED DATA

**Finding: none. Zero `application/ld+json` blocks.**

Nothing for LocalBusiness, BreadcrumbList, Article, FAQPage, ImageObject or VideoObject.

Blocking issue: **LocalBusiness schema cannot be written at all right now.** It requires name, address, telephone, geo, opening hours and area served. The only one of those that exists is the name. The phone number in the prototype is `(717) 736-6538` on every screen, and no address or hours have ever been supplied.

## 7. SITEMAP / ROBOTS

**Finding: neither file exists.** No `sitemap.xml`, no `robots.txt`, no generation mechanism. Not applicable to a design-system project — this is platform work.

## 8. INTERNAL LINKING

**Finding: navigational only. No contextual layer.**

What exists: header mega-nav (19 service links across four groups), footer (four columns plus a 21-town flowing list), and in-page CTAs.

What does not exist: any contextual link between pages. `ServiceRow` links a service to its own page and nothing else. `ProjectTile` links nowhere. No service links to a related service. No page links to a resource, because none exist.

The spec's target — a semantic network of SERVICE ↔ PROJECT ↔ RESOURCE ↔ LOCATION — currently has one of four node types partially built and none of the edges.

One thing already correct: the footer town list is flowing middot-separated text, not a keyword link block, which is what the spec asks for.

## 9. ANALYTICS / TRACKING

**Finding: none.** No GA4, no GTM, no `dataLayer`, no pixel, no event handlers beyond UI state. `EstimateForm` calls `setSent(true)` and an optional `onSubmit` callback; it posts nowhere. Nothing to preserve.

---

## 10. BEST TECHNICAL APPROACH FOR `/resources/`

The spec's requirements — per-page metadata, canonical URLs, JSON-LD, sitemap generation, IndexNow, breadcrumbs, fast Core Web Vitals, a content model editable without a developer — point clearly at **a static-site or hybrid framework with a file-based or headless content layer.** Astro or Next.js both satisfy every item; Astro ships less JavaScript by default and suits a photography-led marketing site with light interactivity.

The content layer needs three collections, matching the spec's three-part funnel:

**`resources`** — slug, question (the H1), directAnswer, quickFacts, body, category (hardscaping/landscaping/tree), relatedServices, relatedProjects, faq, reviewedBy, lastUpdated.

**`projects`** — the spec's 23-field model. Critically, every field must be optional except slug, name, projectType and heroImage, so a project can be published with three photographs and grow later rather than sitting unpublished waiting for a timeline nobody recorded.

**`serviceAreas`** — slug, town, county, distance, notes, projects (referenced, not duplicated), publish flag. The publish flag is the doorway-page guard: a town without real notes and at least one real project stays on the hub and never gets a URL.

Relationships should be **referential and bidirectional-by-derivation** — a project names its services and resources; the service and resource pages derive their related-project lists by querying rather than by maintaining a second hand-written list that will drift.

Two things carry over from this project unchanged: `styles.css` with all 151 tokens, and the fifteen components. `ServiceRow`, `ProjectTile`, `TownEntry`, `ReviewQuote`, `BeforeAfter`, `SectionHead`, `Eyebrow` and `StatRow` are the editorial vocabulary the spec's resource design section describes. Roughly six new components are needed and no existing one needs replacing:

- `Breadcrumb` — semantic, paired with BreadcrumbList schema
- `DirectAnswer` — the extractable answer block below an H1
- `QuickFacts` — the compact fact summary
- `ProjectCallout` — a real project embedded mid-article
- `FaqList` — question/answer pairs, paired with FAQPage schema
- `RelatedLinks` — contextual service/resource/project links

The resources index should follow the spec's editorial treatment: category sections, one large featured article per category, supporting questions as text-led rows. Not a card grid. `ServiceRow` already establishes that pattern and can carry the featured item.

## 11. CONFLICTS WITH THIS SPECIFICATION

**A. The spec assumes a website that does not exist.** Discussed above. This is the one that changes the plan.

**B. `/grading-drainage/` placement.** Spec puts it at root; current nav nests it under hardscaping. Nesting is more defensible — it is a hardscape-adjacent service and the nesting reinforces topical grouping. Needs a decision either way.

**C. The commercial branch is unverified.** Four commercial URLs and a built snow-removal page exist in the prototype. The spec's service architecture contains no commercial branch at all. One of the two is wrong. Snow removal was inferred from a competitor reference plus one photograph of a plow truck; the commercial branch was inferred from a competitor reference plus photographs of a condominium property. Neither was ever confirmed.

**D. Placeholder policy is stricter than what is currently on screen.** The prototype contains invented town notes, invented material lists, invented snow-removal contract terms, two fabricated review quotes (labelled "Placeholder — awaiting real review"), and a fake phone number. All are visibly captioned as placeholder, but the spec's rule is `[VERIFY X]` markers, not plausible-sounding filler. **Recommendation: convert all of it to explicit bracketed markers before anything ships**, because plausible placeholder text is the kind that survives to production.

**E. The tree-services branch has no content behind it.** Tree removal and trimming were added to the nav this session at the owner's request. No tree photography exists in the readable image set, no tree services were ever confirmed as offered, and the spec lists five tree resources. Nothing can be built here yet.

**F. "Do not redesign" is satisfiable, with one caveat.** The design system is stable and documented and nothing here requires changing it. The caveat is that the resource article layout is a *new page type* with no existing precedent in the kit — it will need composition work using existing tokens and components. That is extension, not redesign, but it should be reviewed before six articles are built on top of it.

## 12. VERIFIED BUSINESS INFORMATION STILL REQUIRED

None of this has been supplied. Nothing has been invented in its place.

**Blocks LocalBusiness schema and every page footer**
- Real phone number (currently `(717) 736-6538` sitewide)
- Business address, or explicit service-area-business status
- Business hours
- Email address
- Legal entity name and Google Business Profile URL

**Blocks all trust content**
- Years in business
- Crew size
- Google review count and rating
- Insurance and licensing status
- Any real guarantee
- Financing, if offered

**Blocks resource articles 1, 5, 8, 12, 19 (all cost guides)**
- Typical price range per square foot for patios
- Typical total project range
- Retaining wall pricing basis
- Landscaping project ranges
- Tree removal pricing basis
- Whether pricing may be published at all

**Blocks timeline and construction resources**
- Typical patio installation duration by size
- Actual base preparation spec — excavation depth, base material, lift thickness, compaction method
- Whether geotextile is standard or conditional
- Edge restraint and jointing products used
- Paver brands and lines actually stocked

**Blocks all project pages**
- Photo-to-town mapping for the twelve usable images
- Project sizes, materials, dates
- JPEG re-exports of the ~270 HEIC files
- Construction/progress photography (currently zero)
- Customer permission to publish location and detail

**Blocks service-area pages**
- Real operational notes per town: permit offices, thresholds, soil, slope, HOA review
- Which towns actually have completed projects

**Blocks reviews everywhere**
- Real customer quotes with name, town and service

**Blocks service architecture decisions**
- Is commercial work real revenue?
- Is snow removal offered?
- Are tree services offered, and self-performed or subcontracted?
- Which services are most profitable — this sets homepage hierarchy

**Blocks authorship**
- Who reviews technical content, and under what name and role

---

## RECOMMENDED NEXT STEPS

1. **Decide the platform.** Everything in Phases 2–8 is platform work. Astro is the recommendation.
2. **Answer the service-architecture questions** — commercial, snow, tree. They change the sitemap.
3. **Supply the blocking business facts**, at minimum phone, address, hours. Without them no page can ship regardless of platform.
4. **Convert existing placeholder prose to bracketed markers** in the prototype, so nothing plausible-but-invented survives into production.
5. **Then** build the resource system, starting with the paver patio cost guide.

Per the specification's stop condition: **no implementation has begun. Awaiting approval.**

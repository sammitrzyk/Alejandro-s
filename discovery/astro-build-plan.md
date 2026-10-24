# Astro Build Plan — Phases 2 & 3

Platform decision: **Astro** (owner-confirmed, 9 Sep 2026). Phone: **(717) 736-6538** (verified, now live sitewide in the prototype).

This document specifies the production build. Nothing here is implemented yet — the artifact in this project remains the design system plus prototype.

## Why Astro

Static HTML by default with zero client JS unless a component asks for it, which suits a photography-led marketing site with three interactive elements (mega-nav, before/after slider, estimate form). Content Collections give a typed, file-based content layer with no CMS to run. `@astrojs/sitemap` and `@astrojs/image` cover two spec requirements out of the box. Per-page `<head>` control makes canonical tags, meta and JSON-LD trivial.

## Project structure

```
src/
  content/
    config.ts              collection schemas (zod)
    services/*.md
    projects/*.md
    resources/*.md
    areas/*.md
  components/              ports of the 15 design-system components
  layouts/
    Base.astro             head, schema slot, header, footer, call bar
    Service.astro
    Project.astro
    Resource.astro
    Area.astro
  pages/
    index.astro
    [...service]/
    projects/[slug].astro
    resources/[slug].astro
    service-areas/[slug].astro
  lib/
    schema.ts              JSON-LD builders
    related.ts             derived relationship queries
public/
  robots.txt
  images/
```

## Content collections

**`services`** — title, slug, category (hardscaping|landscaping|tree|commercial), summary, heroImage, offered (boolean), included[], excluded[], costDrivers[], faq[], relatedServices[], seo{title,description}.

`offered: false` keeps a page out of the build and out of the sitemap. That is the guard against publishing the seven unconfirmed services.

**`projects`** — slug, name, projectType, serviceCategory, town, county, completionDate, size, materials[], scope, challenge, solution, timeline, investmentRange, heroImage, beforeImages[], duringImages[], afterImages[], detailImages[], testimonial, relatedServices[], relatedResources[], publish.

Only slug, name, projectType and heroImage are required. Everything else optional so a project can publish with three photos and grow.

**`resources`** — slug, question (the H1), directAnswer, quickFacts[], category, body, relatedServices[], relatedProjects[], faq[], reviewedBy, lastUpdated, publish.

**`areas`** — slug, town, county, distance, notes, relatedProjects[], publish.

`publish` defaults false. A town needs real notes **and** at least one real local project before it can be true. That is the doorway-page guard, enforced by the schema rather than by discipline.

## Relationships

Derived, not duplicated. A project declares its services and resources; service and resource pages query the collection for projects that name them. One direction of authorship, both directions of linking, no second list to drift.

## New components (6)

`Breadcrumb`, `DirectAnswer`, `QuickFacts`, `ProjectCallout`, `FaqList`, `RelatedLinks`. All compose existing tokens. No existing component is replaced.

## Page metadata (prepared 21 Oct 2026)

- `astro/src/data/seo-pages.json` — title, description, canonical path, breadcrumbs, social image and noindex flag for all 21 static routes. Same values the prototype uses (`ui_kits/website/seo.js`).
- `astro/src/components/SeoHead.astro` — renders title, description, canonical, robots, Open Graph, Twitter, favicons and BreadcrumbList into the generated HTML. Static pages: `<SeoHead route="paver-patios" />`. Project and town pages pass their own title/description/path/crumbs.
- `astro/public/og/` — five 1200×630 share images cut from the project's own photos (home, patios, driveways, commercial, snow). Other pages fall back to `og-home.jpg`.
- Domain comes from `PUBLIC_SITE_URL`, falling back to the JSON's `site` value. Domain confirmed: `https://alejandroslandscapes.com`. Set `PUBLIC_SITE_URL` to it in production.
- Christmas light installation confirmed by owner; indexed and in the Landscaping menu.

After the first build, check every route by direct visit: HTTP 200, one title / description / canonical in the served HTML, canonical matches the URL, og:image returns 200.

## Structured data

`LocalBusiness` — **now unblocked on phone, still blocked on address and hours.** Ships as soon as those land.
`BreadcrumbList` on every page below root. `Article` on resources with a real `reviewedBy`. `FAQPage` only where the questions are visible on the page and the answers are verified. No `AggregateRating` until a real count and source exist.

## Technical

Canonical on every page. `@astrojs/sitemap` filtered to `publish: true`. `robots.txt` with sitemap reference. Search Console and Bing verification tokens in `.env`, never hardcoded. IndexNow key in an env var, ping on build. GA4 with events for estimate start, estimate submit, phone click, resource→service, service→estimate. Images through `@astrojs/image` — width/height attributes, lazy below fold, eager on the hero.

## Wave 1 — buildable now

Home, `/hardscaping/`, `/landscaping/`, `/projects/` index, `/service-areas/` hub, `/contact/`, `/resources/` index.

## Before Wave 1 ships

Two blockers remain: **address** (or a service-area-business decision) and **business hours**. Both are required for LocalBusiness schema and the footer.

One correction owed regardless of platform: the paver patio page presents generic industry construction practice as Alejandro's method. It needs the real base spec or it needs to stop describing one.

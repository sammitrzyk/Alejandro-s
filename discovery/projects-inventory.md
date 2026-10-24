# Projects — inventory, mapping and owner checklist

Last updated 9 Oct 2026. Data: `ui_kits/website/projects-data.js`. Template: `ProjectPage.jsx`.

## URLs
- `/projects/` — index (H1 "Landscaping & Hardscaping Projects"), filters All / Hardscaping / Landscaping / Commercial (only non-empty ones show).
- `/projects/<slug>/` — one case study per documented job. No previous project URLs existed, so no redirects are needed.

## Case studies (own page)

| Slug | Title / H1 | Town | Service page | Area link | Status |
|---|---|---|---|---|---|
| paver-driveway-walkway-new-cumberland | Paver Driveway and Walkway in New Cumberland, PA | New Cumberland ✔ | /hardscaping/paver-driveways | Service area (New Cumberland strip) | Publishable |
| pool-patio-rebuild | Pool Patio Rebuild in Mechanicsburg, PA | Mechanicsburg ✔ (owner) | /hardscaping/paver-patios | Service area | Needs town |
| paver-walkway-and-steps | Paver Walkway and Entry Steps in New Cumberland, PA | New Cumberland ✔ (owner) | /hardscaping/walkways | Service area | Needs town |
| patio-retaining-wall-fire-pit | Patio, Retaining Wall and Fire Pit in Mechanicsburg, PA | Mechanicsburg ✔ (owner) | /hardscaping/retaining-walls | Service area | Needs town + starting condition |

Once a town is confirmed: set `town` and `townVerified: true`, add the town to the title ("… in [Town], PA"), and the project automatically appears on that town's strip.

Two-way links in place: each project → its service page(s) + service area; Paver Driveways, Paver Patios, Walkways & Steps and Retaining Walls each show a "Related projects" strip; Service Area shows "Completed projects in New Cumberland".

## Card-only entries (single photo → links to the service)
Raised patio & lit steps · Seat wall & fire pit · Beds, edging & plantings · River rock & decorative stone · Geigle Funeral Home (Colonial Park) · MeadowView Dental (Dillsburg) · Bridge Street Dental Center (New Cumberland) · Family Physician Associates (New Cumberland).

Promote a card to a case study when there are at least a before (or during) and an after photo from the same job, plus a confirmed town.

## Owner checklist (Dorian)
1. Which landscaping card is Camp Hill / New Cumberland / Mechanicsburg (azalea bed, island bed, perennials, stone-edged bed, river rock, bed edging).
2. Year completed for all four case studies.
3. Pool patio: was the base rebuilt? What was used?
4. Walkway & steps: step construction (block, cap, base).
5. Patio/wall/fire pit: what the yard was before; wall base, drainage and reinforcement.
6. New Cumberland driveway: excavation depth, base and bedding.
7. Permission from each homeowner to show the photos and town.
8. Any review from these specific customers (name, month, source).

## Technical notes
- Each project page sets its own title, meta description, canonical and BreadcrumbList JSON-LD, plus a visible breadcrumb. No review, rating or address markup.
- Hero image loads eagerly; all other images lazy-load. Fixed aspect ratios reserve space.
- Sitemap, HTTP status and redirects cannot be tested in this prototype. They belong to the Astro build: generate `/projects/<slug>/` from the same data, and include only entries with a verified town in the sitemap.

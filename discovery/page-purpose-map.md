# Page-Purpose Map

Reconciles the two specifications. Column key: **Blocked by** names the fact that must exist before the page can publish.

## Reconciling the two specs

They agree on almost everything: no doorway pages, no mass city×service combinations, evidence over adjectives, answer-first structure, no invented facts, no redesign. Four differences resolved below.

| Point | Spec A (SEO/AEO/GEO) | Spec B (senior strategist) | Resolution |
| --- | --- | --- | --- |
| Educational section name | `/resources/` | "advice/resources" | `/resources/` |
| Reviews | placed contextually only | contextual **and** a dedicated page | Both. Contextual placement plus `/reviews/` once real reviews exist. |
| Pricing | resource articles per service | a pricing/cost-guide page | Both. Hub at `/pricing/`, depth in resources. |
| Grading & drainage | root URL | under hardscaping | Nested. Owner to confirm. |
| Commercial | absent from architecture | "only if offered" | Blocked pending confirmation. |

Spec B adds three page types Spec A omits: `/reviews/`, `/pricing/`, and a services overview. It also drops the resource-count ambition, which is the safer instinct.

## Map

| Page | Customer intent | Primary topic | Geographic scope | Evidence | Main action | Blocked by |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Orient | Who, what, where | Primary market | Night hero, 4 projects, 1 review | Estimate | Phone, review |
| `/hardscaping/` | Browse category | Hardscape overview | Region | Project set | Sub-service | — |
| `/hardscaping/paver-patios/` | Commercial | Patio installation | Region + towns | 3 patios, 1 before/after | Estimate | Base spec, cost |
| `/hardscaping/retaining-walls/` | Commercial | Wall installation | Region | Night seat wall | Estimate | Photos, geogrid spec |
| `/hardscaping/walkways-steps/` | Commercial | Walkways | Region | — | Estimate | **All photos** |
| `/hardscaping/fire-features/` | Commercial | Firepits, seat walls | Region | 2 night shots | Estimate | Project detail |
| `/hardscaping/grading-drainage/` | Problem-solving | Drainage correction | Region | — | Estimate | Photos, service confirm |
| `/landscaping/` | Browse category | Landscape overview | Region | Bed/lawn photos | Sub-service | — |
| `/landscaping/installation/` | Commercial | Planting, beds | Region | Stone-edged bed | Estimate | Plant list |
| `/landscaping/mulch-bed-work/` | Commercial | Mulch, edging | Region | Bed photos | Estimate | Materials |
| `/landscaping/trimming/` | Recurring | Shrub, hedge | Region | — | Estimate | Photos |
| `/landscaping/cleanups/` | Seasonal | Property cleanup | Region | — | Estimate | Photos |
| `/landscaping/lawn-installation/` | Transformational | Lawn install | Region | Lawn photos | Estimate | Method |
| `/tree-services/` | Urgent/functional | Tree overview | Region | — | **Phone** | **Service confirm** |
| `/tree-services/tree-removal/` | Urgent | Removal | Region | — | **Phone** | **Service confirm, photos, insurance** |
| `/tree-services/tree-trimming/` | Functional | Trimming | Region | — | Phone | **Service confirm, photos** |
| `/commercial/` | B2B | Commercial overview | Region | 3 commercial photos | Quote | **Revenue confirm** |
| `/commercial/snow-removal/` | Seasonal B2B | Snow & ice | Region | Plow truck | **Phone** | **Service confirm, contract terms** |
| `/projects/` | Proof | Project library | All towns | 12 photos | Project page | Town mapping |
| `/projects/<slug>/` | Deep proof | One project | One town | Per project | Estimate | **Town mapping, permission** |
| `/service-areas/` | Qualify | Coverage | 47 towns | Per-town notes | Estimate | **Real notes** |
| `/service-areas/<town>/` | Local qualify | One town | One town | Local projects | Estimate | **Notes + ≥1 local project** |
| `/about/` | Trust | Owner, crew, practice | Region | Crew photo | Estimate | **Owner name, year, crew photo** |
| `/reviews/` | Trust | Customer feedback | Region | Real reviews | Estimate | **Real reviews** |
| `/pricing/` | Budget | What drives cost | Region | Ranges | Estimate | **Cost data** |
| `/resources/` | Research | Advice index | Region | Featured articles | Article | — |
| `/resources/<slug>/` | Research | One question | Region | Project callout | Service → estimate | Per topic |
| `/contact/` | Convert | Estimate request | Region | Process | Submit | **Phone, process** |

## Build order

**Wave 1 — nothing blocked but the phone number.** Home, `/hardscaping/`, `/landscaping/`, `/projects/` index, `/service-areas/` hub, `/contact/`, `/resources/` index.

**Wave 2 — needs the construction spec and cost data.** Paver patios (rewrite the invented spec), retaining walls, fire features, landscape installation, mulch & beds, `/pricing/`, first two resources.

**Wave 3 — needs owner confirmation the service exists.** Tree services, commercial, snow removal, walkways, grading & drainage, trimming, cleanups.

**Wave 4 — needs evidence that does not exist yet.** Individual project pages (town mapping), town pages (real notes + local project), `/about/` (crew photo), `/reviews/` (real reviews).

Roughly a third of the declared architecture is in Wave 3 or 4 — blocked on facts, not on build effort.

## Title patterns

Service: `Paver Patio Installation | Harrisburg Area | Alejandro's Landscaping`
Project: `Paver Patio Installation for a Sloped Backyard in Mechanicsburg`
Resource: `Paver Patio Cost in Central PA: 2026 Homeowner Guide | Alejandro's`
Location: `Landscaping & Hardscaping in Mechanicsburg, PA | Alejandro's`

One market per title. No city lists.

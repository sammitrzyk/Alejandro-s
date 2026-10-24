# Content Plan — service FAQs and Resources

Source: owner's search-intent analysis, 9 Sep 2026. These are **search-intent candidates derived from current SERPs, not verified volumes.** Replace with real Search Console query data once it accumulates.

## The three-level rule

**Level A — service page.** Closest to purchase: cost, timeline, durability, scope, "will it work on my property". Five to seven per service page, each with a direct extractable answer and a link to the deeper resource.

**Level B — resource article.** Needs a real explanation: why patios sink, pavers vs stamped concrete, what geogrid does, French drain vs grading, why walls lean.

**Level C — micro-question.** Answered in service copy only. Never gets a URL. "Do you haul away debris", "will you repair the grass". Creating `/resources/do-you-haul-away-branches/` is how a good site turns into sludge.

No resource article gets duplicated onto its service page. The service page carries a 40–100 word answer and a link.

## Resources — build order

**Tier 1, hardscape (build first)**
1. Paver Patio Cost in Central PA
2. Pavers vs Stamped Concrete in Pennsylvania
3. Why Do Paver Patios Sink?
4. Does a Paver Patio Need Drainage?
5. Do Paver Patios Hold Up Through Pennsylvania Winters?
6. Retaining Wall Cost in Central PA
7. Why Is My Retaining Wall Leaning?
8. Does a Retaining Wall Need Drainage?
9. When Does a Retaining Wall Need Geogrid?
10. Paver Walkway Cost in Central PA

**Tier 2, drainage** — prioritise above landscaping. Symptom-intent: the homeowner does not yet know what service to search for.
11. Why Is Water Pooling in My Yard?
12. French Drain vs Regrading
13. Yard Drainage Cost in Central PA
14. How to Fix a Soggy Backyard
15. How Much Slope Should a Yard Have Away From a House?

**Tier 3, landscaping**
16. Landscaping Cost in Central PA
17. Best Time to Install Landscaping in Pennsylvania
18. What Should I Plant Around My House in Central PA?
19. Mulch Installation Cost in Central PA
20. How Much Mulch Do I Need? (calculator candidate)
21. Best Time to Mulch in Pennsylvania
22. How to Fix a Severely Overgrown Yard
23. Seed vs Sod in Pennsylvania
24. New Lawn Installation Cost in Central PA

**Tier 4, trees** — blocked until tree services are confirmed as offered.
25. Tree Removal Cost Around Harrisburg
26. When Does a Tree Need to Be Removed?
27. Tree Trimming vs Tree Removal
28. Removing a Tree Close to a House
29. Best Time to Trim Trees in Pennsylvania

**Launch set: 12.** Items 1–9, 11, 12, 16. Then let Search Console decide the rest.

## Blocking dependency

Every cost article — the highest-value tier — is blocked on pricing data. Nine of the twelve launch articles need at least one verified figure. See `business-fact-sheet.md`.

Technical articles (why patios sink, geogrid, drainage) are blocked on the real construction spec. They cannot describe Alejandro's method until the method is confirmed.

## Service-page FAQ sets

Seven questions written and live on the Paver Patios prototype page, using the `QuestionList` component. Four carry verified general answers; three carry `[VERIFY]` markers where a figure or capability is needed.

Remaining service FAQ sets are drafted in the owner's source analysis and get written as each service page is built — but only for services confirmed as offered. Seven of nineteen nav entries currently fail that test.

## Commercial voice

Commercial pages use a different register from residential. Contract structure, pricing basis, service frequency, property types, response commitments. Not "transform your property."

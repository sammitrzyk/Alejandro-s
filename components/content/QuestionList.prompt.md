Editorial FAQ block — the house alternative to a stack of identical accordions. Numbered question on the left, direct answer and a link to the deeper resource on the right, hairline between each.

```jsx
<QuestionList items={[
  { question: "Do paver patios hold up through Pennsylvania winters?",
    answer: "Yes, when the base is built for it. Freeze-thaw moves water in the ground...",
    linkLabel: "How freeze-thaw affects a patio", href: "/resources/paver-patios-pennsylvania-winters" }
]} />
```

**Five to seven items on a service page**, closest-to-purchase only: cost, timeline, durability, scope, "will it work on my property". Anything needing a full explanation gets a resource article and a link from here instead. Micro-questions ("do you haul away debris") are answered in the service copy, never given their own page.

Answers must be extractable — a reader who sees only that paragraph should get a real answer. No "that depends on several factors, which we'll explore below."

Pairs with FAQPage schema, but only when every answer is verified.

The site's single conversion form. Five fields: name, phone, town, project type, detail.

```jsx
<EstimateForm tone="dark" onSubmit={vals => console.log(vals)} />
```

Two deliberate choices:

**Town is a required field.** It qualifies the lead against the 20-mile radius before anyone drives anywhere, and it feeds the town-page content loop.

**Expectation-setting sits next to the button, not in fine print.** The biggest fear in this category is "will they even show up." Answering it beside the submit button converts better than any trust badge.

**The `expectation` default is a `[VERIFY]` marker by design.** This slot is a customer-facing promise about response time and what the homeowner receives in writing — all three are unverified. Never substitute plausible copy; pass the real confirmed process or leave the marker visible.

No email field — homeowners in this category answer the phone.

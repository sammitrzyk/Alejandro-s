Global header. Three service branches (Hardscaping, Landscaping, Commercial) each open a panel listing every individually-indexed service page — the SEO backbone.

```jsx
<SiteHeader phone="(717) 736-6538" overlay active="Hardscaping" onNavigate={setRoute} />
```

`overlay` makes the header transparent and inverts the logo for pages that open on a full-bleed photograph. It flips to a solid white bar as soon as a menu or the drawer opens.

**Responsive:** below 1180px the six nav items collapse behind a Menu button and the mega-panels become a full-height drawer carrying the complete service taxonomy — nothing is dropped for small screens. Below 560px the logo steps down and the header phone number hands off to `MobileCallBar`.

The estimate button is never the only path to contact.

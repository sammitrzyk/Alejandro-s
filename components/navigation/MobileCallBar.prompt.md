Fixed call/estimate bar for mobile. Both targets are 56px tall. It removes itself at 900px and above and renders its own 56px spacer so it never covers the footer.

```jsx
<MobileCallBar phone="(717) 736-6538" onNavigate={go} />
```

It stays hidden until the visitor has scrolled past `revealAfter` (400px by default), then slides up. The hero already carries a paired estimate and phone CTA, so showing the bar immediately would double the same action on the first screen and cover part of the photograph.

Mount it **once**, as a sibling of the page rather than inside it. Mobile visitors are usually comparing contractors straight from search results, so the two things they might do next are always on screen. Above 900px the header already carries both.

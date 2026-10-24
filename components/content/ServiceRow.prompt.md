Editorial service row — the house alternative to a three-card service grid.

```jsx
<ServiceRow index="01" title="Hardscaping" flip={false}
  summary="Paver patios, retaining walls, walkways and seat walls, built on a base cut for Pennsylvania freeze-thaw."
  points={["Paver patios","Retaining walls","Walkways","Fire features"]}
  image="assets/photos/firepit-seatwall-night.jpg" alt="Lit seat wall and firepit at night" href="/hardscaping" />
```

Alternate `flip` down the stack so the eye zig-zags. Each row is separated by a hairline, not a card border — the section reads as one continuous editorial column rather than a set of boxes.

Do not use more than four of these on a page; past that, switch to a project gallery.

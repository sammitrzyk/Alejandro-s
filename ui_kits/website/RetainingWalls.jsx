/* Retaining walls. Story: the property → the grade problem → what the wall changes → what makes it work
   → a real transformation → how it fits the property → complexity → action. Composition is specific to walls. */

const RW = { ink: "#4A453F", line: "#A79E90", soil: "#8A6A4A", soilD: "#5A4632", stone: "#B8B0A2", gold: "#F5B324", goldT: "#8A5D08", cream: "#F2EEE7", on: "#F4F1EB", on2: "#B9B4A9", water: "#6E93A8" };
const rwLab = { fontFamily: "Archivo, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase" };

function useRwWide(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

function Frame({ children, dark }) {
  return <div style={{ borderTop: `1px solid ${dark ? "var(--border-dark)" : "var(--gold-500)"}`, borderBottom: `1px solid ${dark ? "var(--border-dark)" : "var(--gold-500)"}`, padding: "var(--space-8) 0" }}>{children}</div>;
}

const RW_FAQ = [
  ["How do I know if I need a retaining wall?", "Usually the yard tells you: ground that falls away too steeply to use, soil washing down a bank, or a patio or walkway that needs level ground the property doesn't have. A wall is one answer; sometimes regrading alone is enough."],
  ["Can you replace an existing failing retaining wall?", "Yes. A leaning or bulging wall usually failed because of what's behind or below it, typically drainage or base, so the cause gets looked at before the wall is rebuilt. [VERIFY REMOVAL AND REBUILD PRACTICE.]"],
  ["Why is drainage important behind a retaining wall?", "Water that collects in the soil behind a wall adds pressure against it. Drainage gives that water a path through the system and out, instead of pushing on the back of the wall."],
  ["Do retaining walls require permits or engineering?", "Some do. Height, slope above the wall, soil, nearby structures and loads such as driveways can all change what's required. [VERIFY WITH DORIAN how engineering and permits are handled.]"],
  ["What types of retaining-wall block do you install?", "[VERIFY BLOCK SYSTEMS INSTALLED — manufacturer and product lines.]"],
  ["Can a retaining wall be incorporated into a patio or walkway?", "Yes. Walls often hold up a raised patio, or create the level ground a patio or walkway sits on, with steps where people move between elevations."]
]

function RwLabel({ children, dark }) {
  return <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: dark ? "var(--gold-300)" : "var(--gold-text)" }}>{children}</div>;
}
function RwSlot({ note, ratio }) {
  return <div style={{ aspectRatio: ratio, border: "1px dashed var(--border-strong)", background: "var(--stone-100)", display: "grid", placeItems: "center", padding: "var(--space-3)", textAlign: "center", font: "var(--type-caption)", fontSize: 11, lineHeight: 1.4, color: "var(--text-muted)", borderRadius: "var(--radius-image)" }}>{note}</div>;
}

function RetainingWalls({ go }) {
  const wide = useRwWide();
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  const nav = (e, h) => { e.preventDefault(); go(h); };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Hardscaping" onNavigate={go} />

      {/* 1. Finished result */}
      <Hero height="min(84vh,760px)" image={P + "rw/IMG_2724.jpg"}
        alt="Curved block retaining wall with built-in lights holding a raised paver patio above a pool deck at night"
        eyebrow="Hardscaping · Retaining walls"
        title="Retaining walls that hold the grade."
        lede="Retaining wall design and installation in Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={tel}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Curved wall, raised patio and wall lighting" />

      {/* 2. Featured project — same job, mid-build then finished */}
      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Retaining wall project</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "18ch" }}>From open lawn to a walled patio.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--gap-grid)", marginTop: "var(--space-6)" }}>
            <Reveal><figure style={{ margin: 0 }}>
              <img src={P + "rw/IMG_2716.jpg"} alt="Tan block wall and paver patio mid-build, with tools and gravel still on site" loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "30% 55%", borderRadius: "var(--radius-image)", display: "block" }} />
              <figcaption style={{ marginTop: "var(--space-2)" }}><RwLabel>During</RwLabel></figcaption>
            </figure></Reveal>
            <Reveal delay={80}><figure style={{ margin: 0 }}>
              <img src={P + "rw/IMG_2717.jpg"} alt="The same tan block wall finished, with caps, pillars and built-in lights around the patio and fire pit" loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "40% 40%", borderRadius: "var(--radius-image)", display: "block" }} />
              <figcaption style={{ marginTop: "var(--space-2)" }}><RwLabel>Finished</RwLabel></figcaption>
            </figure></Reveal>
          </div>
          <Reveal>
            <dl style={{ margin: "var(--space-6) 0 0", display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(24px,4vw,56px)" }}>
              {[["Problem", "[VERIFY — what the yard was doing before: slope, grade, open edge.]"],
                ["Solution", "An L-shaped tan block wall with pillars, set around a new paver patio and fire pit beside the deck."],
                ["Result", "A defined patio with caps and lights built into the wall."]].map(([h, d]) => (
                <div key={h} style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: "var(--space-3)", borderTop: "1px solid var(--gold-500)", padding: "var(--space-3) 0" }}>
                  <dt style={{ paddingTop: 2 }}><RwLabel>{h}</RwLabel></dt>
                  <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-secondary)" }}>{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Why retaining walls — swipe examples */}
      <style>{".rw-swipe::-webkit-scrollbar{display:none}"}</style>
      <Section tone="sunken" tight>
        <Container>
          <Reveal><Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Why retaining walls</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch" }}>Make difficult ground usable.</h2>
            <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "56ch" }}>Retaining walls can hold back a slope, create level space, support a patio or walkway, or replace an existing wall that's beginning to fail.</p></Reveal>
          <div className="rw-swipe" style={{ display: wide ? "grid" : "flex", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : undefined, gap: "var(--gap-grid)", overflowX: wide ? "visible" : "auto", scrollSnapType: "x mandatory", margin: wide ? "var(--space-8) 0 0" : "var(--space-6) calc(var(--gutter) * -1) 0", padding: wide ? 0 : "0 var(--gutter)", scrollbarWidth: "none" }}>
            <figure style={{ margin: 0, flex: wide ? "auto" : "0 0 78vw", scrollSnapAlign: "start" }}>
              <img src={P + "rw/IMG_2721.jpg"} alt="Block wall with pillar caps holding the slope in front of a house" loading="lazy" style={{ width: "100%", height: wide ? "auto" : 300, aspectRatio: wide ? "3/2" : "auto", objectFit: "cover", objectPosition: "40% 60%", borderRadius: "var(--radius-image)", display: "block" }} />
              <figcaption style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>Holding a slope</figcaption>
            </figure>
            <figure style={{ margin: 0, flex: wide ? "auto" : "0 0 78vw", scrollSnapAlign: "start" }}>
              <img src={P + "rw/IMG_2714.jpg"} alt="Capped block wall along the edge of a driveway" loading="lazy" style={{ width: "100%", height: wide ? "auto" : 300, aspectRatio: wide ? "3/2" : "auto", objectFit: "cover", objectPosition: "40% 62%", borderRadius: "var(--radius-image)", display: "block" }} />
              <figcaption style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>Along a driveway</figcaption>
            </figure>
            <figure style={{ margin: 0, flex: wide ? "auto" : "0 0 78vw", scrollSnapAlign: "start" }}>
              <img src={P + "rw/IMG_2718.jpg"} alt="Block wall raising a planting bed along an alley" loading="lazy" style={{ width: "100%", height: wide ? "auto" : 300, aspectRatio: wide ? "3/2" : "auto", objectFit: "cover", objectPosition: "40% 65%", borderRadius: "var(--radius-image)", display: "block" }} />
              <figcaption style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>Creating a raised bed</figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* 4. How they're built — copy first, one photo */}
      <Section tone="dark" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.3fr)" : "minmax(0,1fr)", gap: "var(--space-6) clamp(28px,5vw,80px)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-4)" }}>How they're built</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "16ch" }}>Built for what's behind the wall.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-4)", maxWidth: "44ch" }}>A retaining wall isn't just the block you see. Base preparation and drainage behind the wall are critical parts of the installation.</p>
            </Reveal>
            <Reveal delay={80}>
              <img src={P + "rw/IMG_2715.jpg"} alt="Curved capped wall with clean stone backfill behind it, before final grading" loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", objectPosition: "50% 72%", borderRadius: "var(--radius-image)", display: "block" }} />
              <p style={{ font: "var(--type-caption)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-2)" }}>Clean stone behind the wall, before final grading. [VERIFY BASE AND DRAINAGE SPEC.]</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Materials — one featured, two small */}
      <Section tone="light" tight>
        <Container>
          <Reveal><Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Materials</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)" }}>Designed to fit the property.</h2>
            <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "56ch" }}>Block, cap, color and texture can be selected to work with the house and surrounding hardscape.</p></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.6fr) minmax(0,1fr)" : "repeat(2,minmax(0,1fr))", gap: "var(--gap-grid)", marginTop: "var(--space-8)", alignItems: "stretch" }}>
            <Reveal style={{ gridColumn: wide ? "auto" : "span 2" }}>
              <img src={P + "rw/IMG_2724.jpg"} alt="Curved block wall with built-in lights holding a raised patio above a pool deck at night" loading="lazy" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", objectPosition: "40% 45%", borderRadius: "var(--radius-image)", display: "block" }} />
            </Reveal>
            <div style={{ display: wide ? "grid" : "contents", gridTemplateRows: "repeat(2,minmax(0,1fr))", gap: "var(--gap-grid)" }}>
            <Reveal delay={60}><img src={P + "rw/IMG_2723.jpg"} alt="Grey block seat wall with a stone-look cap wrapping a square fire pit" loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", objectPosition: "45% 55%", borderRadius: "var(--radius-image)", display: "block" }} /></Reveal>
            <Reveal delay={120}><img src={P + "rw/IMG_2719.jpg"} alt="Grey block wall along a paver patio with steps set into the wall line" loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", objectPosition: "35% 45%", borderRadius: "var(--radius-image)", display: "block" }} /></Reveal>
            </div>
          </div>
          <Reveal><p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-6)", maxWidth: "70ch" }}>Taller or more complex walls may require additional engineering or permitting depending on site conditions and local requirements.</p></Reveal>
        </Container>
      </Section>

      {/* 7b. Other hardscaping services */}
      <Section tone="sunken" tight>
        <Container>
          <Reveal><Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>More hardscaping</Eyebrow>
            <h2 style={{ font: "var(--type-h3)", letterSpacing: "var(--ls-heading)" }}>Building more than the wall?</h2></Reveal>
          <ul style={{ listStyle: "none", margin: "var(--space-6) 0 0", padding: 0, display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(24px,4vw,56px)" }}>
            {[["Paver patios", "/hardscaping/paver-patios"], ["Paver driveways", "/hardscaping/paver-driveways"], ["Walkways & steps", "/hardscaping/walkways"], ["Fire features & seat walls", "/hardscaping/fire-features"], ["Grading & drainage", "/grading-drainage"]].map(([l, h]) => (
              <li key={l} style={{ borderTop: "1px solid var(--border-strong)" }}>
                <a href={h} onClick={(e) => { e.preventDefault(); go(h); }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 52, font: "var(--fw-medium) 1rem/1.3 var(--font-sans)", color: "var(--text-primary)", textDecoration: "none" }}>
                  {l}<span style={{ color: "var(--gold-text)" }}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 8. FAQ — accordion */}
      <style>{".rw-sum::-webkit-details-marker{display:none}"}</style>
      <Section tone="light">
        <Container width="var(--container-text)">
          <Reveal><h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)" }}>Retaining wall questions</h2></Reveal>
          <div style={{ marginTop: "var(--space-8)", borderBottom: "1px solid var(--border-hairline)" }}>
            {RW_FAQ.map(([q, a]) => (
              <details key={q} style={{ borderTop: "1px solid var(--border-hairline)" }}>
                <summary className="rw-sum" style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: "var(--space-4)", padding: "var(--space-5) 0", font: "var(--fw-regular) 1.1875rem/1.3 var(--font-display)" }}>
                  <span>{q}</span><span aria-hidden="true" style={{ color: "var(--gold-text)", font: "var(--fw-regular) 1.25rem/1 var(--font-sans)" }}>+</span>
                </summary>
                <p style={{ font: "var(--fw-regular) .9375rem/1.55 var(--font-sans)", color: "var(--text-secondary)", padding: "0 0 var(--space-5)", maxWidth: "62ch" }}>{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. Final CTA — image-led */}
      <RelatedProjects go={go} service="retaining-walls" />
      <section id="estimate" style={{ position: "relative", minHeight: "min(78vh,640px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--green-950)" }}>
        <img src={P + "rw/IMG_2721.jpg"} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "45% 55%" }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-hero)" }} />
        <Container style={{ position: "relative", width: "100%", padding: "clamp(64px,8vw,120px) var(--gutter)" }}>
          <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-6)" }}>Planning a retaining wall?</Eyebrow>
          <h2 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", color: "#fff", maxWidth: "14ch" }}>Let's look at the grade.</h2>
          <p style={{ font: "var(--type-lead)", color: "rgba(255,255,255,.9)", maxWidth: "46ch", margin: "var(--space-6) 0 var(--space-8)" }}>Show us what you're trying to change. We'll look at the property, elevation and surrounding conditions before recommending the next step.</p>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.3fr)" : "minmax(0,1fr)", gap: "var(--space-8) clamp(28px,5vw,80px)", alignItems: "start" }}>
            <Button variant="inverse" size="lg" href={tel} style={{ justifySelf: "start" }}><Icon name="phone" size={16} />{PHONE}</Button>
            <EstimateForm tone="dark" />
          </div>
        </Container>
      </section>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.RetainingWalls = RetainingWalls;

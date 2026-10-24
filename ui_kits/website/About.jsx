/* About — the people behind the work. Only confirmed facts are stated plainly;
   the company story is [VERIFY] until Dorian supplies it (hidden from visitors by the note filter). */

function useWideAB(q = "(min-width:860px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

const AB_WORK = [
  ["Hardscaping", "Patios, driveways, walkways, retaining walls and fire features.", "/hardscaping/paver-patios"],
  ["Landscaping", "Installation, mulch and beds, sod, trimming, cleanups and lighting.", "/landscaping/installation"],
  ["Tree work", "[VERIFY TREE SERVICES OFFERED — trimming, removal.]", null],
  ["Commercial maintenance", "Grounds care for offices, medical practices and managed properties.", "/commercial/landscaping"],
  ["Snow removal", "Commercial snow and ice management through the winter.", "/commercial/snow-removal"]
];

const AB_TOWNS = ["New Cumberland", "Camp Hill", "Lemoyne", "Mechanicsburg", "Enola", "Harrisburg", "Hershey", "Dillsburg"];

function About({ go }) {
  const wide = useWideAB();
  const link = (href) => (e) => { e.preventDefault(); go(href); };
  const label = { font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase" };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} active="About" onNavigate={go} />

      {/* 1. Who — owner photo + company story */}
      <Section tone="light">
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>About Alejandro's</Eyebrow>
            <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch" }}>The people behind Alejandro's.</h1>
            <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", marginTop: "var(--space-5)", maxWidth: "52ch" }}>
              Alejandro's Landscaping is a New Cumberland-based landscaping and hardscaping company serving properties across Central Pennsylvania.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.3fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,72px)", alignItems: "end", marginTop: "var(--space-10)" }}>
            <Reveal>
              <figure style={{ margin: 0 }}>
                <img src={P + "about-dorian-mower.jpg"} alt="Dorian of Alejandro's Landscaping on a Kubota zero-turn mower on a freshly striped lawn" fetchpriority="high"
                  style={{ width: "100%", aspectRatio: wide ? "4/3" : "4/3", objectFit: "cover", objectPosition: "38% 55%", borderRadius: "var(--radius-image)", display: "block" }} />
                <figcaption style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1) var(--space-3)", alignItems: "baseline", marginTop: "var(--space-3)" }}>
                  <span style={{ ...label, color: "var(--gold-text)" }}>Dorian</span>
                  <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>[VERIFY ROLE AND TITLE]</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-5)" }}>
                <div style={{ ...label, color: "var(--green-700)", marginBottom: "var(--space-4)" }}>The company</div>
                <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "46ch" }}>
                  [VERIFY WITH DORIAN — who started Alejandro's, what year, and the first kind of work the company took on.]
                </p>
                <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "46ch" }}>
                  [VERIFY — how the company grew, and how large the crew is today.] Today Alejandro's builds patios, driveways and walls, installs and maintains landscapes, and cares for commercial properties year round.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2. How it started — text until an origin story and older photo exist */}
      <Section tone="sunken" tight>
        <Container width="var(--container-text)">
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>How it started</Eyebrow>
            <p style={{ font: "var(--type-h3)", color: "var(--text-primary)", maxWidth: "34ch" }}>[VERIFY ORIGIN STORY WITH DORIAN — and add an early photo of the company if one exists.]</p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Today — crew and equipment */}
      <Section tone="dark" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-4)" }}>The company today</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "18ch" }}>Crews, trucks and equipment on the job.</h2>
          </Reveal>
        </Container>
      </Section>

      {/* 4. The work — breadth, one list */}
      <Section tone="light" tight>
        <Container>
          <Reveal><SectionHead eyebrow="The work" title="What we do." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(5,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: "0 clamp(16px,2.6vw,40px)", marginTop: "var(--space-8)" }}>
            {AB_WORK.map(([h, d, href]) => (
              <div key={h} style={{ borderTop: "1px solid var(--gold-500)", padding: "var(--space-4) 0" }}>
                {href
                  ? <a href={href} onClick={link(href)} style={{ ...label, color: "var(--text-primary)", textDecoration: "none" }}>{h} →</a>
                  : <span style={{ ...label, color: "var(--text-primary)" }}>{h}</span>}
                <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-2)" }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Where we work */}
      <Section tone="sunken" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "var(--space-6) clamp(28px,5vw,80px)", alignItems: "end" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Where we work</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch" }}>Based in New Cumberland.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "46ch" }}>We work properties within about twenty miles: the west shore, Harrisburg, Hershey and the communities around them.</p>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ font: "var(--fw-regular) 1.125rem/1.9 var(--font-display)", color: "var(--text-primary)" }}>{AB_TOWNS.join(" · ")}</p>
              <a href="/service-area" onClick={link("/service-area")} style={{ display: "inline-block", marginTop: "var(--space-4)", font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", textDecoration: "none", borderBottom: "1px solid var(--gold-500)", paddingBottom: 5 }}>View our service area →</a>
            </Reveal>
          </div>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Tell us what you're working with." intro="Send a photo of the property and what you'd like to change. We'll come out, walk it with you and give you a written estimate." /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.About = About;

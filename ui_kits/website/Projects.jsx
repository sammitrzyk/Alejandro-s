/* Projects index. Case studies (own page) first, then single-photo cards that link to the service.
   Data lives in projects-data.js. Filters only show categories that have entries. */

const PJ = "../../assets/photos/";
function useWidePJ(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

function Projects({ go }) {
  const wide = useWidePJ();
  const [cat, setCat] = React.useState("All");
  React.useEffect(() => { window.setHead && window.setHead("Landscaping & Hardscaping Projects in Central PA | Alejandro's Landscaping", "Completed paver driveways, patios, walkways, retaining walls, landscaping and commercial grounds by Alejandro's Landscaping in New Cumberland and across Central Pennsylvania.", "/projects/", [["Home", "/"], ["Projects", "/projects/"]]); }, []);
  const studies = (window.PROJECT_STUDIES || []).map((p) => ({ cat: p.cat, img: p.hero, alt: p.heroAlt, title: p.short, town: p.town, scope: p.result, href: "/projects/" + p.slug, study: true }));
  const all = [...studies, ...(window.PROJECT_CARDS || [])];
  const cats = ["All", ...["Hardscaping", "Landscaping", "Commercial"].filter((c) => all.some((p) => p.cat === c))];
  const list = all.filter((p) => cat === "All" || p.cat === cat);
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} active="Projects" onNavigate={go} />
      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Projects</Eyebrow>
            <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch" }}>Landscaping &amp; Hardscaping Projects</h1>
            <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "54ch" }}>Driveways, patios, walkways, retaining walls, landscaping and commercial grounds completed by Alejandro's in New Cumberland and across Central Pennsylvania. Every photo here is our work.</p>
          </Reveal>
          <div role="tablist" aria-label="Filter projects" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "var(--space-8)", borderBottom: "1px solid var(--border-hairline)", paddingBottom: "var(--space-4)" }}>
            {cats.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} style={{
                font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", cursor: "pointer", minHeight: 44, padding: "0 16px",
                background: cat === c ? "var(--green-800)" : "transparent", color: cat === c ? "#fff" : "var(--text-primary)",
                border: `1px solid ${cat === c ? "var(--green-800)" : "var(--border-strong)"}`, borderRadius: 0
              }}>{c}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "var(--space-8) clamp(16px,2vw,28px)" : "var(--space-5) 12px", marginTop: "var(--space-8)" }}>
            {list.map((p) => (
              <a key={p.title} href={p.href + (p.study ? "/" : "")} onClick={(e) => { e.preventDefault(); go(p.href); }} style={{ display: "block", textDecoration: "none", color: "inherit", minWidth: 0 }}>
                <img src={PJ + p.img} alt={p.alt} loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />
                <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)", marginTop: "var(--space-3)" }}>{p.town}</div>
                <div style={{ font: wide ? "var(--fw-regular) 1.125rem/1.25 var(--font-display)" : "var(--fw-regular) .9375rem/1.25 var(--font-display)", color: "var(--text-primary)", marginTop: 2 }}>{p.title}</div>
                {wide && <p style={{ font: "var(--type-caption)", color: "var(--text-secondary)", marginTop: 4, maxWidth: "40ch" }}>{p.scope}</p>}
                {p.study && <div style={{ font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", marginTop: "var(--space-2)", fontSize: ".75rem" }}>View project →</div>}
              </a>
            ))}
          </div>
        </Container>
      </Section>
      <div id="estimate"><EstimateBand title="Have a project like one of these?" intro="Send a photo of the yard and tell us what you're thinking. We'll look at the property and talk through what it needs." /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.Projects = Projects;

/* Reusable project case-study template + RelatedProjects strip for service and area pages. */

const PJP = "../../assets/photos/";
function useWidePP(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}
function setHead(title, desc, path, crumbs) { return window.__seoSetHead(title, desc, path, crumbs); }
const ppLabel = { font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" };

function ProjectPage({ go, slug }) {
  const wide = useWidePP();
  const d = (window.PROJECT_STUDIES || []).find((p) => p.slug === slug);
  const link = (href) => (e) => { e.preventDefault(); go(href); };
  React.useEffect(() => { if (d) setHead(d.title.replace(/\s*\[VERIFY[^\]]*\]/, "") + " | Alejandro's Landscaping", d.meta, "/projects/" + d.slug + "/", [["Home", "/"], ["Projects", "/projects/"], [d.short, "/projects/" + d.slug + "/"]]); }, [slug]);
  if (!d) return null;
  const [bl, al] = d.beforeAfterLabels || ["Before", "After"];
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} active="Projects" onNavigate={go} />
      <Section tone="light" tight>
        <Container>
          <nav aria-label="Breadcrumb" style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
            <a href="/" onClick={link("/")}>Home</a> <span aria-hidden="true">/</span> <a href="/projects/" onClick={link("/projects")}>Projects</a> <span aria-hidden="true">/</span> <span>{d.short}</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.25fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "start" }}>
            <div>
              <div style={ppLabel}>{d.serviceLabel} · {d.town}</div>
              <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", marginTop: "var(--space-3)", maxWidth: "18ch" }}>{d.title}</h1>
              <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", marginTop: "var(--space-5)", maxWidth: "48ch" }}>{d.intro}</p>
              <dl style={{ margin: "var(--space-6) 0 0", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0 var(--space-5)" }}>
                {d.facts.map(([k, v]) => (
                  <div key={k} style={{ borderTop: "1px solid var(--gold-500)", padding: "var(--space-3) 0" }}>
                    <dt style={ppLabel}>{k}</dt>
                    <dd style={{ margin: "var(--space-1) 0 0", font: "var(--type-small)", color: "var(--text-primary)" }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <img src={PJP + d.hero} alt={d.heroAlt} fetchpriority="high" style={{ width: "100%", aspectRatio: wide ? "4/3" : "16/10", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block", order: wide ? 0 : -1 }} />
          </div>
        </Container>
      </Section>

      <Section tone="sunken" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.2fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "start" }}>
            <div>
              <BeforeAfter before={PJP + d.beforeAfter[0]} after={PJP + d.beforeAfter[1]} beforeAlt={d.beforeAfter[2]} afterAlt={d.beforeAfter[3]} ratio="4/3" />
              <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>Drag to compare · {bl} / {al}</p>
            </div>
            <div>
              {!/^\s*\[(VERIFY|ADD)[^\]]*\]\s*$/.test(d.before) && <>
                <h2 style={{ ...ppLabel, marginBottom: "var(--space-2)" }}>Before the work</h2>
                <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "46ch", marginBottom: "var(--space-6)" }}>{d.before}</p>
              </>}
              <h2 style={{ ...ppLabel, marginBottom: "var(--space-2)" }}>Work performed</h2>
              <ul style={{ margin: 0, paddingLeft: "1.1em", display: "flex", flexDirection: "column", gap: 6 }}>
                {d.work.map((w) => <li key={w} style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "46ch" }}>{w}</li>)}
              </ul>
              <h2 style={{ ...ppLabel, margin: "var(--space-6) 0 var(--space-2)" }}>The result</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "46ch" }}>{d.result}</p>
            </div>
          </div>
          {d.gallery.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: wide ? "var(--gap-grid)" : 12, marginTop: "var(--space-10)", maxWidth: wide ? 820 : "none" }}>
              {d.gallery.map(([f, alt, cap]) => (
                <figure key={f} style={{ margin: 0 }}>
                  <img src={PJP + f} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />
                  <figcaption style={{ font: "var(--type-caption)", color: "var(--text-secondary)", marginTop: "var(--space-2)" }}>{cap}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section tone="light" tight>
        <Container>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4) var(--space-10)", alignItems: "baseline" }}>
            <h2 style={{ ...ppLabel, color: "var(--text-primary)" }}>Related services</h2>
            {d.related.map(([l, h]) => <a key={h} href={h} onClick={link(h)} style={{ font: "var(--type-body)" }}>{l} →</a>)}
            <a href={d.areaHref} onClick={link(d.areaHref)} style={{ font: "var(--type-body)" }}>{d.townVerified ? `Our services in ${d.town.replace(", PA", "")}` : "Our service area"} →</a>
          </div>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Planning something similar?" intro={`Send a photo of your property and tell us what you have in mind. We'll take a look and talk through the ${d.serviceLabel.toLowerCase()} work it needs.`} /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}

/* Strip of related case studies for a service page or town page. Renders nothing if none match. */
function RelatedProjects({ go, service, town, title }) {
  const wide = useWidePP();
  const list = (window.PROJECT_STUDIES || []).filter((p) => (service ? p.service === service : true) && (town ? p.townVerified && p.town.startsWith(town) : true));
  if (!list.length) return null;
  return (
    <Section tone="light" tight>
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-4)", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-5)" }}>
          <h2 style={{ font: "var(--type-h3)" }}>{title || "Related projects"}</h2>
          <a href="/projects/" onClick={(e) => { e.preventDefault(); go("/projects"); }} style={{ font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", textDecoration: "none" }}>All projects →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "var(--gap-grid)" : 12, marginTop: "var(--space-6)" }}>
          {list.map((p) => (
            <a key={p.slug} href={"/projects/" + p.slug + "/"} onClick={(e) => { e.preventDefault(); go("/projects/" + p.slug); }} style={{ textDecoration: "none", color: "inherit", minWidth: 0 }}>
              <img src={PJP + p.hero} alt={p.heroAlt} loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />
              <div style={{ ...ppLabel, marginTop: "var(--space-3)" }}>{p.town}</div>
              <div style={{ font: "var(--fw-regular) 1rem/1.3 var(--font-display)", marginTop: 2 }}>{p.short}</div>
            </a>
          ))}
        </div>
        {service && (() => {
          const towns = (window.TOWNS_DATA || []).filter((t) => list.some((p) => p.townVerified && p.town.startsWith(t.town)));
          if (!towns.length) return null;
          return (
            <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-6)", display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-4)", alignItems: "baseline" }}>
              <span style={ppLabel}>Where we work</span>
              {towns.map((t) => <a key={t.slug} href={"/service-areas/" + t.slug + "/"} onClick={(e) => { e.preventDefault(); go("/service-areas/" + t.slug); }}>{t.town}, PA</a>)}
              <a href="/service-areas/" onClick={(e) => { e.preventDefault(); go("/service-area"); }}>All service areas →</a>
            </p>
          );
        })()}
      </Container>
    </Section>
  );
}

Object.assign(window, { ProjectPage, RelatedProjects, setHead });

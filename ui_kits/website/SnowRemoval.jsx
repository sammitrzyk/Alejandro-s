/* Commercial snow & ice. Operational, property-by-property.
   hero → the real deadline → real work → property planning (signature) → services
   → property types → seasonal quote. Nothing here states triggers, response times,
   equipment counts or treatment products — none are verified. */

const SN_CM = "../../assets/photos/commercial/";

function useSnWide(q = "(min-width:820px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

const SN_JOB = [
  ["Parking & access", "Keep primary driving and parking areas accessible as conditions develop."],
  ["Entrances & walkways", "Address pedestrian routes and high-traffic areas around the property."],
  ["Ice management", "Treat appropriate surfaces when conditions create slipping hazards."]
];

const SN_PLAN = [
  ["01", "Access", "Which entrances and driving lanes need to remain usable."],
  ["02", "Parking", "How parked vehicles and traffic affect clearing."],
  ["03", "Pedestrian areas", "Which sidewalks, entrances and walking routes require attention."],
  ["04", "Snow placement", "Where cleared snow can be placed without creating problems elsewhere on the property."]
];

const SN_SERVICES = [
  ["Snow plowing", "Commercial lots and vehicle access areas."],
  ["Sidewalks & entrances", "Pedestrian areas around buildings and primary access points."],
  ["Ice management", "Treatment of appropriate paved surfaces based on site conditions. [VERIFY MATERIALS AND METHOD.]"],
  ["Storm cleanup", "Additional clearing and cleanup as conditions require."]
];

const SN_PROPS = [
  ["Condominium & HOA communities", "Snow management around shared roads, parking and pedestrian areas."],
  ["Professional & medical offices", "Access around parking areas, entrances and frequently used pedestrian routes."],
  ["Retail & customer-facing properties", "Clearing focused around the areas customers and employees use."],
  ["Managed commercial properties", "Property-specific winter service for commercial and managed sites."]
];

function SnowRemoval({ go }) {
  const wide = useSnWide();
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  const lbl = (t, c = "var(--text-primary)") => <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: c, marginBottom: "var(--space-2)" }}>{t}</h3>;
  const eyebrowGold = (t) => <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: "var(--space-5)" }}>{t}</div>;
  const h2 = (t, inverse, max = "16ch") => <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", maxWidth: max, textWrap: "balance" }}>{t}</h2>;
  const body = (t, inverse) => <p style={{ font: wide ? "var(--type-body)" : "var(--type-small)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "54ch" }}>{t}</p>;


  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Commercial" onNavigate={go} />

      {/* 1 — Hero */}
      <section style={{ position: "relative", minHeight: wide ? "min(86vh,780px)" : "min(78vh,600px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#07150D" }}>
        <img src={SN_CM + (wide ? "snow-hero3-wide.jpg" : "snow-hero3-tall.jpg")} alt="Alejandro's plow truck with a red blade on a snowy commercial lot at night, fresh tire tracks in the snow" fetchpriority="high"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: wide ? "50% 50%" : "50% 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: wide ? "linear-gradient(90deg,rgba(6,18,11,.9) 0%,rgba(6,18,11,.62) 48%,rgba(6,18,11,.2) 85%)" : "linear-gradient(180deg,rgba(6,18,11,.35) 0%,rgba(6,18,11,.65) 45%,rgba(6,18,11,.94) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(6,18,11,.55) 0%,rgba(6,18,11,0) 26%)" }} />
        <Container style={{ position: "relative", width: "100%", paddingTop: 140, paddingBottom: wide ? "clamp(56px,7vw,104px)" : "var(--space-10)" }}>
          <Eyebrow tone="inverse" rule style={{ marginBottom: wide ? "var(--space-8)" : "var(--space-5)" }}>Commercial · Snow & ice</Eyebrow>
          <h1 style={{ font: wide ? "var(--type-display)" : "var(--fw-regular) clamp(2.5rem,11vw,3rem)/1.04 var(--font-display)", letterSpacing: "var(--ls-display)", color: "#fff", maxWidth: "13ch", textWrap: "balance" }}>Snow management built around your property.</h1>
          <p style={{ font: wide ? "var(--type-lead)" : "var(--type-small)", color: "rgba(255,255,255,.88)", maxWidth: "50ch", marginTop: wide ? "var(--space-8)" : "var(--space-5)" }}>Commercial snow removal and ice management for condominium associations, office properties and commercial sites throughout the Harrisburg area and surrounding Central Pennsylvania communities.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: wide ? "var(--space-10)" : "var(--space-6)" }}>
            <Button variant="solidLight" size={wide ? "lg" : "md"} href="#estimate">Request a seasonal quote</Button>
            <Button variant="inverse" size={wide ? "lg" : "md"} href={tel}><Icon name="phone" size={16} />{PHONE}</Button>
          </div>
          <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginTop: wide ? "var(--space-8)" : "var(--space-5)", lineHeight: 1.6 }}>Commercial lots · Condominiums · Offices · Managed properties</div>
        </Container>
      </section>

      <TrustedBy onView={() => go("/commercial/commercial-landscaping")} />

      {/* 2 — The real deadline */}
      <Section tone="light" tight={!wide}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.15fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-8)", alignItems: "start" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Before the first car arrives</Eyebrow>
              {h2("The storm isn't the deadline. Opening time is.", false, "14ch")}
              {body("Commercial snow management is about more than clearing accumulation. Parking areas, entrances and pedestrian routes need to be addressed around how the property is actually used.")}
            </Reveal>
            <Reveal delay={80}>
              <dl style={{ margin: 0, borderTop: "1px solid var(--gold-500)" }}>
                {SN_JOB.map(([h, d]) => (
                  <div key={h} style={{ padding: wide ? "var(--space-6) 0" : "var(--space-4) 0", borderBottom: "1px solid var(--border-hairline)" }}>
                    <dt>{lbl(h)}</dt>
                    <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "48ch" }}>{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3 — Real work */}
      <Section tone="dark" tight={!wide}>
        <Container>
          <Reveal>
            {eyebrowGold("Commercial snow work")}
            {h2("Working while the weather is still happening.", true, "17ch")}
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.7fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: wide ? "clamp(24px,3vw,48px)" : "var(--space-6)", alignItems: "end", marginTop: wide ? "var(--space-10)" : "var(--space-6)" }}>
            <Reveal>
              <figure style={{ margin: 0 }}>
                <img src={P + "plow-truck-night.jpg"} alt="Plow truck working a snow-covered commercial lot at night" loading="lazy" width="1600" height="900"
                  style={{ width: "100%", height: "auto", aspectRatio: wide ? "16/9" : "3/2", objectFit: "cover", objectPosition: "50% 55%", borderRadius: "var(--radius-image)", display: "block" }} />
                <figcaption style={{ font: "var(--type-caption)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-3)" }}>Commercial snow removal · Central Pennsylvania</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              {wide && (
                <img src={SN_CM + "commercial-snow-removal-office-lot-central-pa.jpg"} alt="Snow-covered office parking lot after clearing" loading="lazy" width="1200" height="675"
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block", marginBottom: "var(--space-6)" }} />
              )}
              <p style={{ font: wide ? "var(--type-body)" : "var(--type-small)", color: "var(--text-on-dark-secondary)", maxWidth: "44ch", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-4)" }}>Snow operations happen on the property's schedule and the storm's schedule. The goal is to keep critical areas moving while conditions change.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4 — Property planning (signature) */}
      <Section tone="light">
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Before winter</Eyebrow>
            <h2 style={{ font: wide ? "var(--type-h1)" : "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "14ch" }}>Every property has a snow plan.</h2>
            {body("Where snow can be placed, which entrances matter most and how vehicles move through the site all affect how a property should be serviced.")}
          </Reveal>
          <ol style={{ listStyle: "none", margin: wide ? "var(--space-16) 0 0" : "var(--space-8) 0 0", padding: 0, display: "grid", gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "0 clamp(20px,3vw,48px)" : "var(--space-6) var(--space-5)" }}>
            {SN_PLAN.map(([n, h, d], i) => (
              <li key={n} style={{ borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-5)" }}>
                <Reveal delay={i * 60}>
                  <div style={{ font: wide ? "var(--fw-light) 3rem/1 var(--font-display)" : "var(--fw-light) 2rem/1 var(--font-display)", color: "var(--gold-text)", marginBottom: wide ? "var(--space-6)" : "var(--space-3)" }}>{n}</div>
                  {lbl(h)}
                  <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "30ch" }}>{d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5 — Services */}
      <Section tone="dark" tight={!wide}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,.85fr) minmax(0,1.4fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-6)", alignItems: "start" }}>
            <Reveal>
              {eyebrowGold("Snow & ice services")}
              {h2("Winter coverage for the property.", true, "12ch")}
            </Reveal>
            <Reveal delay={80}>
              <dl style={{ margin: 0, display: "grid", gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(24px,3vw,48px)" }}>
                {SN_SERVICES.map(([h, d]) => (
                  <div key={h} style={{ borderTop: "1px solid var(--border-dark)", padding: wide ? "var(--space-6) 0" : "var(--space-4) 0" }}>
                    <dt>{lbl(h, "var(--text-on-dark)")}</dt>
                    <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-on-dark-secondary)", maxWidth: "40ch" }}>{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6 — Property types */}
      <Section tone="light" tight={!wide}>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Commercial properties</Eyebrow>
            {h2("Built for properties that can't simply close when it snows.", false, "18ch")}
          </Reveal>
          <dl style={{ margin: wide ? "var(--space-10) 0 0" : "var(--space-6) 0 0", borderTop: "1px solid var(--gold-500)" }}>
            {SN_PROPS.map(([h, d], i) => (
              <Reveal key={h} delay={i * 50}>
                <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.4fr)" : "minmax(0,1fr)", gap: wide ? "clamp(24px,4vw,64px)" : "var(--space-2)", alignItems: "baseline", padding: wide ? "var(--space-6) 0" : "var(--space-4) 0", borderBottom: "1px solid var(--border-hairline)" }}>
                  <dt style={{ font: wide ? "var(--fw-regular) 1.375rem/1.25 var(--font-display)" : "var(--fw-regular) 1.125rem/1.25 var(--font-display)", color: "var(--text-primary)" }}>{h}</dt>
                  <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "52ch" }}>{d}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      {/* 7 — Seasonal quote */}
      <div id="estimate">
        <section style={{ position: "relative", overflow: "hidden", background: "var(--green-950)" }}>
          <img src={SN_CM + "commercial-snow-removal-office-lot-central-pa.jpg"} alt="" aria-hidden="true" loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .35 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(10,36,22,.96) 0%,rgba(10,36,22,.86) 60%,rgba(10,36,22,.7) 100%)" }} />
          <Container style={{ position: "relative", padding: wide ? "var(--section-y) var(--gutter)" : "var(--space-12) var(--gutter)" }}>
            <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-8)", alignItems: "start" }}>
              <div>
                {eyebrowGold("Plan before the first storm")}
                {h2("Talk through your property before winter.", true, "14ch")}
                {body("Tell us about the property, the areas that need service and how the site is used. We'll discuss the scope and seasonal snow-management options for the property.", true)}
                <div style={{ marginTop: "var(--space-6)" }}>
                  <Button variant="inverse" size={wide ? "lg" : "md"} href={tel}><Icon name="phone" size={16} />{PHONE}</Button>
                </div>
              </div>
              <EstimateForm tone="dark" projects={["Commercial lot plowing", "Sidewalks & entrances", "Ice management", "Full seasonal coverage", "Not sure yet"]} />
            </div>
          </Container>
        </section>
      </div>

      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.SnowRemoval = SnowRemoval;

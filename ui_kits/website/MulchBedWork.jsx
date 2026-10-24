/* Mulch & bed work. Deliberately NOT the Landscape Installation skeleton.
   Installation sells a transformation; this sells a quick, recurring job done properly.
   So the page is short and practical: the one-visit job → why depth matters (signature
   profile drawing) → a working mulch calculator → mulch or stone → a little proof → questions. */

const MB_INK = "#4A453F", MB_SOIL = "#6B5442", MB_MULCH = "#2E2420", MB_LAWN = "#6E9A5C", MB_LEAF = "#3E6B3A", MB_GOLD = "#F5B324", MB_ON = "#F4F1EB", MB_ON2 = "#B9B4A9";
const mbLabel = { fontFamily: "Archivo, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase" };

function useWideMB(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

const MB_GUIDE = [[50,"0.5","0.5"],[100,"1","1"],[200,"1.5","2"],[400,"2.5","4"],[800,"5","7.5"]];

function MulchCalc({ wide, go }) {
  const th = { font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", textAlign: "left", padding: "0 0 var(--space-3)", fontWeight: 600 };
  const td = { font: "var(--fw-regular) 1.125rem/1.2 var(--font-display)", color: "var(--text-primary)", padding: "var(--space-3) 0", borderTop: "1px solid var(--border-hairline)" };
  return (
    <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.2fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "var(--space-8) clamp(28px,5vw,80px)", alignItems: "start", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-6)", marginTop: "var(--space-8)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th style={th}>Bed area</th><th style={th}>At 2 in</th><th style={th}>At 3 in</th></tr></thead>
        <tbody>
          {MB_GUIDE.map(([a, two, three]) => (
            <tr key={a}><td style={td}>{a} sq ft</td><td style={td}>{two} yd</td><td style={{ ...td, color: "var(--green-800)" }}>{three} yd</td></tr>
          ))}
        </tbody>
      </table>
      <div>
        <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "40ch" }}>Not sure of the size? Send a photo of the beds and we'll measure them when we come out.</p>
        <a href="#estimate" onClick={(e) => { e.preventDefault(); go("#estimate"); }} style={{ display: "inline-block", marginTop: "var(--space-4)", font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", borderBottom: "1px solid var(--gold-500)", paddingBottom: 4, textDecoration: "none" }}>Have us measure and install it →</a>
      </div>
    </div>
  );
}

const MB_STEPS = [
  ["Clear", "Weeds pulled to the root and spent growth cut back."],
  ["Edge", "A spade-cut trench along the lawn so the line holds."],
  ["Mulch", "Two to three inches, spread by hand."],
  ["Rake back", "Pulled off stems and trunks, beds left tidy."]
];

const CMB = "../../assets/photos/commercial/";
const MB_WORK = [
  [P + "mb-res-azaleas.jpg", "Blooming azaleas in a fresh black mulch bed behind a dry-laid fieldstone edge", "Foundation bed & azaleas", "Camp Hill, PA", "50% 50%"],
  [P + "mb-res-island-bed.jpg", "Island bed of black mulch and shrubs edged in fieldstone beside a driveway", "Island bed refresh", "Mechanicsburg, PA", "50% 50%"],
  [P + "mulch-hero-black-beds.jpg", "Fresh black mulch with a sharp cut edge against the lawn", "Edging & mulch", "New Cumberland, PA", "50% 60%"],
  [CMB + "commercial-landscaping-linglestown-family-dental-mulch-colonial-park-pa.jpg", "Long bed of fresh black mulch along a lawn and walkway", "Long border bed", "Colonial Park, PA", "50% 62%"]
];

function MulchBedWork({ go }) {
  const wide = useWideMB();
  const link = (href) => (e) => { e.preventDefault(); go(href); };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Landscaping" onNavigate={go} />

      <Hero height="min(70vh,620px)"
        image={P + "mulch-hero-black-beds.jpg"}
        alt="Fresh black mulch beds with clean curved edges against a lawn and walkway"
        eyebrow="Landscaping · Mulch & bed work"
        title="Clean beds, sharp edges, fresh mulch."
        lede="Mulch, edging, weeding and bed refreshes for homes and commercial properties across the west shore, Harrisburg and the towns within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Cut edges and fresh black mulch" />

      {/* 1. Recent bed work — photos first */}
      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Recent bed work</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "18ch" }}>Beds we keep sharp.</h2>
            <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-3)", maxWidth: "50ch" }}>Front beds, island beds and borders around homes across the west shore.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "clamp(14px,2vw,24px)" : 12, marginTop: "var(--space-8)" }}>
            {MB_WORK.map(([src, alt, cap, town, pos], i) => (
              <Reveal key={src} delay={(i % 4) * 60}>
                <figure style={{ margin: 0 }}>
                  <img src={src} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block" }} />
                  <figcaption style={{ marginTop: "var(--space-2)" }}>
                    <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)" }}>{cap}</div>
                    <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>{town}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. The job — one visit, no numbering */}
      <Section tone="dark" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-4)" }}>What a bed refresh includes</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "18ch" }}>Usually done in one visit.</h2>
          </Reveal>
          <dl style={{ margin: "var(--space-8) 0 0", display: "grid", gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "0 clamp(20px,3vw,40px)" : "0 16px" }}>
            {MB_STEPS.map(([h, d]) => (
              <div key={h} style={{ borderTop: "1px solid var(--gold-500)", padding: "var(--space-4) 0" }}>
                <dt style={{ font: "var(--type-h3)", color: "var(--text-on-dark)", marginBottom: "var(--space-2)" }}>{h}</dt>
                <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-on-dark-secondary)", maxWidth: "26ch" }}>{d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* 3. Calculator */}
      <Section tone="sunken" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>How much mulch</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "18ch" }}>How much mulch will your beds take?</h2>
            <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-3)", maxWidth: "52ch" }}>One cubic yard covers about 160 square feet at two inches, or about 108 at three. Rounded up to the half yard.</p>
          </Reveal>
          <MulchCalc wide={wide} go={go} />
        </Container>
      </Section>

      {/* 4. Mulch or stone — side by side with a photo each */}
      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Mulch or stone</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "20ch" }}>Pick the material for the spot.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: wide ? "clamp(24px,4vw,56px)" : 14, marginTop: "var(--space-8)" }}>
            {[[CMB + "commercial-landscaping-family-physician-associates-new-cumberland-pa.jpg", "Rounded shrubs in a fresh black mulch bed", "Mulch", "Breaks down and feeds the soil. Cheaper up front, topped up every year or two. Best in planting beds you change around.", "50% 70%"],
              [CMB + "commercial-landscaping-linglestown-family-dental-river-rock-colonial-park-pa.jpg", "Tan river rock bed along a building", "Decorative stone", "Doesn't need replacing and stays put on a slope or along a drive. Reflects heat onto plants and is hard to remove later.", "50% 65%"]].map(([src, alt, h, d, pos]) => (
              <Reveal key={h}>
                <figure style={{ margin: 0 }}>
                  <img src={src} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: wide ? "3/2" : "1/1", objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block" }} />
                  <figcaption style={{ borderTop: "1px solid var(--gold-500)", marginTop: "var(--space-4)", paddingTop: "var(--space-3)" }}>
                    <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase" }}>{h}</div>
                    <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-2)", maxWidth: "44ch" }}>{d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal><p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-8)" }}>
            Starting from bare ground? <a href="/landscaping/installation" onClick={link("/landscaping/installation")}>See landscape installation →</a>
          </p></Reveal>
        </Container>
      </Section>

      {/* 5. Questions */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Questions about mulch & bed work" title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-10)" }}>
            <QuestionList items={[
              { question: "When should mulch go down in Pennsylvania?", answer: "Mid to late spring, once the soil has warmed and the first weeds have shown. Mulching too early traps cold, wet soil and buries weeds that are about to come up anyway. Fall mulching helps insulate roots but does less for appearance.", linkLabel: null, href: null },
              { question: "Do old mulch and weeds get removed first?", answer: "Weeds come out to the root first, because burying them only delays them. Old mulch usually stays unless it has built up past about three inches; then some comes off before the new layer goes down.", linkLabel: null, href: null },
              { question: "How often should beds be mulched?", answer: "Most beds look right with a light top-up once a year. Many properties alternate: a full refresh one year and just edging and touch-ups the next, which also stops the layer building up too deep.", linkLabel: null, href: null },
              { question: "Do you do mulch for commercial properties?", answer: "Yes. Bed work is a regular part of our commercial grounds maintenance for offices, practices and managed properties.", linkLabel: "Commercial landscaping", href: "/commercial/landscaping" }
            ]} />
          </Reveal>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Send a photo of the beds."
        intro="One picture tells us most of what the price needs: how overgrown the beds are, how long the edges are, and whether anything has to come out first." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.MulchBedWork = MulchBedWork;

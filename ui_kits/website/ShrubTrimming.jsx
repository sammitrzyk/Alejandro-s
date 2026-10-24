/* Shrub & hedge trimming. Recurring, plant-led work. Distinct from bed work and installation:
   three kinds of trimming → when YOUR plant gets cut (interactive calendar, signature) →
   cut for the light (hedge profile) → overgrown: shape, renovate or replace → homes & commercial → questions. */

const ST_INK = "#4A453F", ST_LEAF = "#3E6B3A", ST_LEAF2 = "#6E9A5C", ST_BARE = "#8A7A62", ST_GOLD = "#F5B324", ST_GOLDTEXT = "#8A5D08";
const stLabel = { fontFamily: "Archivo, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase" };

function useWideST(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

/* Signature drawing: why a hedge is cut wider at the base. General horticultural principle, not a company spec. */
function HedgeProfiles() {
  const L = { ...stLabel, fontSize: 15, letterSpacing: "1.6px" };
  const sun = (x) => [0, 1, 2].map((i) => <path key={i} d={`M${x + i * 14} 6 L${x + 10 + i * 14} 26`} stroke={ST_GOLD} strokeWidth="1.6" />);
  return (
    <svg viewBox="0 0 440 280" role="img" aria-label="Two hedge profiles: one cut wider at the base so light reaches the lower branches, one cut wider at the top so the base is shaded and goes bare" style={{ width: "100%", height: "auto", display: "block" }}>
      <path d="M0 196 L440 196" stroke={ST_INK} strokeWidth="1.5" />
      {sun(70)}{sun(290)}
      <path d="M48 196 L72 54 Q110 40 148 54 L172 196 Z" fill={ST_LEAF} />
      <path d="M48 196 L72 54 M172 196 L148 54" stroke={ST_LEAF2} strokeWidth="2" />
      <text x="110" y="222" textAnchor="middle" style={{ ...L, fill: ST_INK }}>Wider at base</text>
      <text x="110" y="246" textAnchor="middle" style={{ ...L, fill: ST_GOLDTEXT }}>Light reaches</text>
      <text x="110" y="266" textAnchor="middle" style={{ ...L, fill: ST_GOLDTEXT }}>lower branches</text>
      <path d="M290 196 L280 120 L258 60 Q330 40 402 60 L380 120 L370 196 Z" fill={ST_BARE} opacity=".5" />
      {[300, 316, 332, 348].map((x) => <path key={x} d={`M${x} 196 L${x + 2} 128`} stroke={ST_BARE} strokeWidth="2" />)}
      <path d="M258 60 Q330 40 402 60 L380 120 L280 120 Z" fill={ST_LEAF} />
      <text x="330" y="222" textAnchor="middle" style={{ ...L, fill: ST_INK }}>Wider at top</text>
      <text x="330" y="246" textAnchor="middle" style={{ ...L, fill: ST_INK }}>Base shaded,</text>
      <text x="330" y="266" textAnchor="middle" style={{ ...L, fill: ST_INK }}>goes bare</text>
    </svg>
  );
}

const ST_MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
/* General Pennsylvania timing by plant type. Months are 0-indexed; "light" = touch-up only. */
const ST_PLANTS = [
  ["Boxwood", [4, 5], [7], "Shear after the spring flush, with a light touch-up in late summer."],
  ["Yew", [5], [7], "Shape in early summer; a second light cut in August keeps it tight."],
  ["Privet", [4, 5, 6, 7], [], "Fast grower. Sheared two or three times through the summer."],
  ["Arborvitae", [4, 5], [], "Light shear in late spring. Don't cut back into bare brown wood; it won't regrow."],
  ["Holly", [1, 2], [6], "Main shaping in late winter, with a light tidy in early summer."],
  ["Azalea", [5], [], "Right after it flowers. Later than early July and you cut off next year's buds."],
  ["Forsythia & lilac", [4, 5], [], "Straight after bloom. Both flower on last year's growth."],
  ["Panicle hydrangea", [1, 2], [], "Late winter, before growth starts. It flowers on new wood."]
];
const ST_KINDS = [
  ["Maintenance shearing", "Hedges and foundation shrubs brought back to their line, on a schedule."],
  ["Shaping & detail", "Hand-pruning flowering shrubs and specimens so they keep a natural form."],
  ["Overgrown reduction", "Shrubs that have taken over a window or walk, cut back in stages."]
];
const ST_OPTIONS = [
  ["Shape it back", "If there's still green growth where the cut lands, most overgrown shrubs come back to a clean outline in one visit."],
  ["Renovate it", "Many can be cut back hard over two or three seasons, taking some old growth each year. It depends on the plant."],
  ["Replace it", "Some won't recover from a hard cut, or were planted in the wrong spot. Replanting is then the cheaper long-term answer."]
];

function TrimCalendar({ wide }) {
  const [pick, setPick] = React.useState(0);
  const [name, main, light, note] = ST_PLANTS[pick];
  return (
    <div style={{ marginTop: "var(--space-8)" }}>
      <div role="tablist" aria-label="Choose a shrub" style={{ display: "flex", flexWrap: wide ? "wrap" : "nowrap", overflowX: wide ? "visible" : "auto", gap: 8, paddingBottom: 4 }}>
        {ST_PLANTS.map(([n], i) => (
          <button key={n} role="tab" aria-selected={pick === i} onClick={() => setPick(i)} style={{ flex: "0 0 auto", minHeight: 40, padding: "0 14px", border: `1px solid ${pick === i ? "var(--gold-500)" : "var(--border-dark)"}`, background: pick === i ? "var(--gold-500)" : "transparent", color: pick === i ? "var(--green-950)" : "var(--text-on-dark)", font: "var(--type-small)", cursor: "pointer" }}>{n}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12,minmax(0,1fr))", gap: 3, marginTop: "var(--space-6)" }} aria-label={`Trimming months for ${name}`}>
        {ST_MONTHS.map((m, i) => {
          const on = main.includes(i), lt = light.includes(i), avoid = i >= 8 && i <= 10;
          return (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ height: wide ? 44 : 34, background: on ? "var(--gold-500)" : lt ? "rgba(245,179,36,.38)" : "rgba(244,241,235,.08)", borderBottom: avoid ? "2px solid #A93916" : "2px solid transparent" }} />
              <div style={{ font: "var(--type-caption)", color: on ? "var(--gold-300)" : "var(--text-on-dark-secondary)", marginTop: 6 }}>{m}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-5)", marginTop: "var(--space-4)", font: "var(--type-caption)", color: "var(--text-on-dark-secondary)" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "var(--gold-500)", marginRight: 6 }} />Main cut</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "rgba(245,179,36,.38)", marginRight: 6 }} />Light touch-up</span>
        <span><span style={{ display: "inline-block", width: 10, height: 2, background: "#A93916", marginRight: 6, verticalAlign: "middle" }} />Avoid: new growth won't harden before frost</span>
      </div>
      <p style={{ font: "var(--type-lead)", color: "var(--text-on-dark)", marginTop: "var(--space-6)", maxWidth: "52ch" }}><strong style={{ fontWeight: 600 }}>{name}.</strong> {note}</p>
    </div>
  );
}

function ShrubTrimming({ go }) {
  const wide = useWideST();
  const data = (window.SERVICES_LANDSCAPE || {})["shrub-hedge-trimming"] || {};
  const faq = (data.faq || []).filter((q, i) => [0, 3, 4, 5].includes(i)).map((q) => ({ ...q, answer: String(q.answer).replace(/\s*\[VERIFY[^\]]*\]/g, "") }));
  const link = (href) => (e) => { e.preventDefault(); go(href); };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Landscaping" onNavigate={go} />

      <Hero height="min(76vh,680px)"
        image={P + "commercial/east-main.jpg"}
        alt="Sheared boxwood hedge along the front of a brick office building"
        eyebrow="Landscaping · Shrub & hedge trimming"
        title="Shrub & hedge trimming in Harrisburg, PA."
        lede="Shrub and hedge trimming for homes and commercial properties across the west shore, Harrisburg and the towns within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Sheared foundation shrubs · Colonial Park, PA" />

      {/* 1. Three kinds of trimming — photo-led */}
      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>What we trim</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "18ch" }}>Not every shrub gets the same cut.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: wide ? "clamp(20px,3vw,40px)" : "var(--space-5)", marginTop: "var(--space-8)" }}>
            {[["commercial/east-main.jpg", "Sheared boxwood hedge along the front of a brick dental office in Harrisburg", "Hedges & foundation shrubs", "Sheared back to a clean, straight line on a schedule.", "50% 60%"],
              ["stone-edge-bed.jpg", "Rounded shrubs shaped inside a stone-edged bed beside a house", "Shaping & detail", "Rounded and specimen shrubs hand-shaped so each keeps its form.", "50% 55%"],
              ["landscape-azaleas-flagstone-edge.jpg", "Azaleas in bloom behind a flagstone bed edge", "Flowering shrubs", "Azaleas, hydrangeas and other bloomers cut at the right time so they flower again.", "50% 50%"]].map(([f, alt, h, d, pos], i) => (
              <Reveal key={h} delay={i * 60}>
                <figure style={{ margin: 0, display: wide ? "block" : "grid", gridTemplateColumns: "128px 1fr", gap: "var(--space-4)", alignItems: "center" }}>
                  <img src={P + f} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: wide ? "4/3" : "1/1", objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block" }} />
                  <figcaption style={{ marginTop: wide ? "var(--space-4)" : 0 }}>
                    <h3 style={{ font: "var(--type-h4)" }}>{h}</h3>
                    <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: 4, maxWidth: "34ch" }}>{d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 1b. Before / after — same boxwood row */}
      <Section tone="light" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.5fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Before & after</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "14ch" }}>Same boxwoods, back in shape.</h2>
              <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "40ch" }}>A row of boxwoods sheared back to rounded forms, with the bed re-edged and fresh black mulch underneath. Drag to compare.</p>
            </Reveal>
            <Reveal delay={80}>
              <BeforeAfter before={P + "shrub-before.jpg"} after={P + "shrub-after.jpg"} ratio="4/3"
                beforeAlt="Overgrown boxwood row with loose new growth above a gravel bed"
                afterAlt="The same boxwood row sheared into rounded forms over fresh black mulch" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 2. Recent trimming — real properties */}
      <Section tone="sunken" tight>
        <Container>
          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-4)" }}>
              <div>
                <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Recent trimming</Eyebrow>
                <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "18ch" }}>Homes and businesses we keep trimmed.</h2>
              </div>
              <a href="/commercial/landscaping" onClick={link("/commercial/landscaping")} style={{ font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", textDecoration: "none" }}>Commercial landscaping →</a>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "var(--gap-grid)" : 12, marginTop: "var(--space-8)" }}>
            {[["landscape-island-bed-fieldstone.jpg", "Island bed of layered shrubs and grasses edged in fieldstone beside a driveway", "Island bed shrubs", "Camp Hill, PA", true, "50% 55%"],
              ["commercial/sauve.jpg", "Shrub bed and flowering plants around the Sauvé Family Dentistry sign", "Sauvé Family Dentistry", "Camp Hill, PA", false, "50% 60%"],
              ["commercial/family-physician.jpg", "Rounded shrub bed at Family Physician Associates", "Family Physician Associates", "New Cumberland, PA", false, "50% 62%"]].map(([f, alt, h, town, big, pos], i) => (
              <Reveal key={f} delay={(i % 2) * 60} style={{ gridColumn: big ? "span 2" : "auto", minWidth: 0 }}>
                <figure style={{ margin: 0 }}>
                  <img src={P + f} alt={alt} loading="lazy" style={{ width: "100%", ...(wide ? { height: "clamp(200px,24vw,300px)" } : { aspectRatio: big ? "16/9" : "1/1" }), objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block" }} />
                  <figcaption style={{ marginTop: "var(--space-2)" }}>
                    <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" }}>{town}</div>
                    <div style={{ font: "var(--fw-regular) .9375rem/1.3 var(--font-display)", marginTop: 2 }}>{h}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Overgrown */}
      <Section tone="light" tight>
        <Container>
          <Reveal><SectionHead eyebrow="Overgrown shrubs" title="Shrubs over the windows?" intro="A shrub sheared into a ball for years is green outside and bare inside. What happens next depends on the plant." /></Reveal>
          <ol style={{ listStyle: "none", margin: "var(--space-8) 0 0", padding: 0, display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(24px,4vw,56px)" }}>
            {ST_OPTIONS.map(([h, d], i) => (
              <Reveal key={h} delay={i * 70} style={{ borderTop: "1px solid var(--border-strong)", padding: "var(--space-4) 0" }}>
                <li>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
                    <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 style={{ font: "var(--type-h4)" }}>{h}</h3>
                  </div>
                  <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "38ch" }}>{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal><p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-4)" }}>Time to replant? <a href="/landscaping/installation" onClick={link("/landscaping/installation")}>See landscape installation →</a></p></Reveal>
        </Container>
      </Section>

      {/* 6. Questions */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Questions about trimming" title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-10)" }}><QuestionList items={faq} /></Reveal>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Send a photo of the shrubs." intro="We'll tell you whether they can be shaped back, renovated over a couple of seasons, or whether it's time to replant." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.ShrubTrimming = ShrubTrimming;

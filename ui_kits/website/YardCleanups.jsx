/* Spring & fall cleanups. Seasonal, problem-led work — distinct from bed work and trimming:
   one real before/after → the two seasons and when they happen → what a cleanup covers on the ground
   → what usually follows a cleanup → questions → photos. No numbered steps. */

const YC_GOLD = "#F5B324", YC_INK = "#4A453F";
const CL = "../../assets/photos/cleanup/";

function useWideYC(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

/* Drag/tap comparison. Both images share one box; "before" is clipped, so they always align. */
function CleanupCompare({ ratio, before = CL + "cleanup-before-overgrown-bed.jpg", after = CL + "cleanup-after-cleared-bed.jpg", beforeAlt = "Planting bed before the cleanup, overgrown with tall grasses and weeds over thin, faded mulch", afterAlt = "The same bed after the cleanup: grasses cut back, weeds out, fresh black mulch and a clean edge against the lawn" }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const move = (x) => { const r = ref.current?.getBoundingClientRect(); if (r) setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100))); };
  const tag = (t, side) => <span style={{ position: "absolute", top: 12, [side]: 12, font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "#fff", background: "rgba(10,36,22,.72)", padding: "6px 10px" }}>{t}</span>;
  return (
    <div ref={ref}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => { if (e.buttons === 1) move(e.clientX); }}
      style={{ position: "relative", aspectRatio: ratio, overflow: "hidden", borderRadius: "var(--radius-image)", cursor: "ew-resize", touchAction: "pan-y", userSelect: "none", background: "var(--stone-200)" }}>
      <img src={after} alt={afterAlt} draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <img src={before} alt={beforeAlt} draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, marginLeft: -1, background: YC_GOLD, pointerEvents: "none" }}>
        <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 40, height: 40, borderRadius: "50%", background: YC_GOLD, display: "grid", placeItems: "center", color: "var(--green-950)", font: "var(--fw-semibold) 13px/1 var(--font-sans)" }}>⇆</span>
      </div>
      {tag("Before", "left")}{tag("After", "right")}
    </div>
  );
}

const YC_LEAF = [
  ["Lawn cleared", "Leaves raked and blown off the lawn so the grass isn't smothered going into winter."],
  ["Beds and edges", "Leaves pulled out from under shrubs, along fences, foundations and bed edges."],
  ["Hard surfaces", "Patios, walks and driveways cleared of leaves and debris."]
];
const YC_SPRING = [
  ["Winter debris out", "Leaves, sticks and matted growth cleared out of the beds."],
  ["Cut back", "Last year's perennial and ornamental-grass growth cut down before new growth comes in."],
  ["Weeds and edges", "Early weeds pulled and bed edges re-cut sharp."]
];

const YC_NEXT = [
  ["Mulch & bed work", "Beds are already cleared and edged, so fresh mulch goes straight down.", "/landscaping/mulch-beds", "landscape-azaleas-flagstone-edge.jpg"],
  ["Shrub & hedge trimming", "Shrubs get shaped while the crew is already on the property.", "/landscaping/trimming", "commercial/east-main.jpg"],
  ["Sod installation", "Bare or worn lawn areas that show up after cleanup can be replaced.", "/landscaping/sod-installation", "sod/sod-hero-pool-new-lawn.jpg"]
];

function YardCleanups({ go }) {
  const wide = useWideYC();
  const d = (window.SERVICES_LANDSCAPE || {})["yard-cleanups"] || {};
  const link = (href) => (e) => { e.preventDefault(); go(href); };
  
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Landscaping" onNavigate={go} />

      <Hero height="min(72vh,640px)"
        image={CL + "cleanup-hero-cleared-beds.jpg"}
        alt="Cleared planting beds with fresh black mulch and clean edges beside a lawn at a brick building"
        eyebrow="Landscaping · Spring & fall cleanups"
        title="Leaf cleanups and spring cleanups in the Harrisburg area."
        lede="Fall leaf removal and spring yard cleanups across the west shore, Harrisburg and the towns within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request a cleanup estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Beds cleared, cut back and mulched" />

      {/* One real cleanup, before and after */}
      <Section tone="light" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.5fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "center" }}>
            <Reveal><CleanupCompare ratio="4/3" /></Reveal>
            <Reveal delay={80}>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>One bed, one visit</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "14ch" }}>Same bed. One cleanup.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "42ch" }}>Grasses cut back, weeds pulled, debris cleared, the edge re-cut and fresh mulch laid. Drag the line to compare.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Leaf cleanup + spring cleanup */}
      <Section tone="dark">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-12)" }}>
            {[["Fall", "Leaf cleanup", "Leaves off before they sit all winter.", YC_LEAF], ["Spring", "Spring cleanup", "Clear the winter out of the yard.", YC_SPRING]].map(([e, h, t, rows], i) => (
              <Reveal key={h} delay={i * 80}>
                {i === 0 && <div style={{ marginBottom: "var(--space-6)" }}><CleanupCompare ratio="4/3" before={CL + "leaf-before.jpg"} after={CL + "leaf-after.jpg"} beforeAlt="Front lawn under an oak tree covered in fallen oak leaves before a fall cleanup" afterAlt="The same lawn after the leaf cleanup, cleared to green grass under the oak tree" /></div>}
                <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-4)" }}>{e} · {h}</Eyebrow>
                <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "14ch" }}>{t}</h2>
                <dl style={{ margin: "var(--space-6) 0 0" }}>
                  {rows.map(([dt, dd]) => (
                    <div key={dt} style={{ padding: "var(--space-4) 0", borderTop: "1px solid var(--border-dark)" }}>
                      <dt style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: 4 }}>{dt}</dt>
                      <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-on-dark-secondary)", maxWidth: "44ch" }}>{dd}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* What usually follows */}
      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>While the beds are clear</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "18ch" }}>What usually comes after a cleanup.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: wide ? "clamp(20px,2.4vw,36px)" : "var(--space-5)", marginTop: "var(--space-8)" }}>
            {YC_NEXT.map(([h, t, href, img], i) => (
              <Reveal key={h} delay={i * 60}>
                <a href={href} onClick={link(href)} style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr)" : "112px minmax(0,1fr)", gap: "var(--space-4)", alignItems: "start", textDecoration: "none", color: "inherit", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-4)" }}>
                  <img src={P + img} alt="" loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />
                  <div>
                    <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "var(--space-2)" }}>{h} →</h3>
                    <p style={{ font: "var(--type-small)", color: "var(--text-secondary)" }}>{t}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {d.faq && (
        <Section tone="sunken">
          <Container>
            <Reveal><SectionHead eyebrow="Questions about cleanups" title="What people ask first." /></Reveal>
            <Reveal style={{ marginTop: "var(--space-10)" }}><QuestionList items={d.faq} /></Reveal>
          </Container>
        </Section>
      )}

      <div id="estimate"><EstimateBand title="Book a leaf or spring cleanup." intro="Send a few photos of the yard. Cleanups are quoted off what's actually there." /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.YardCleanups = YardCleanups;

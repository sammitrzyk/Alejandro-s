/* Homepage. Section order follows the buyer's questions, not a template:
   who / what they build → proof of work → why it lasts → do they work here → someone else hired them → act. */

const BUILD_SPEC = [
  ["01", "Excavate", "Dig out to sub-grade — deeper than the frost line, not just deep enough to hold stone."],
  ["02", "Base", "Compacted modified stone in lifts. Every lift gets run before the next one goes down."],
  ["03", "Drainage", "Water gets a route off the slab and away from the house before the first paver is set."],
  ["04", "Set & lock", "Screeded bedding, cut edges, polymeric joints, edge restraint on every open side."]
];

const VIGNETTES = [
  ["01", "Hardscaping", "Patios & Hardscapes.", "Patios, retaining walls, walkways, fire features and drainage.", "Explore hardscaping", "/hardscaping/paver-patios", "patio-pool-pavers.jpg", "Paver patio wrapping the curve of a backyard pool", "50% 55%"],
  ["02", "Landscaping", "Finished landscapes.", "Planting, mulch, sod, trimming and seasonal property work.", "Explore landscaping", "/landscaping/installation", "stone-edge-bed.jpg", "Stone-edged planting bed with sculpted shrubs against a house", "50% 55%"],
  ["03", "Commercial & snow", "Commercial landscaping.", "Grounds maintenance and winter service for commercial properties.", "Explore commercial", "/commercial/landscaping", "commercial-mowing-stripes.jpg", "Freshly striped lawn on a commercial property", "50% 50%"]
];

function HomeVignettes({ go }) {
  const [wide, setWide] = React.useState(() => window.matchMedia("(min-width:900px)").matches);
  React.useEffect(() => { const m = window.matchMedia("(min-width:900px)"); const on = (e) => setWide(e.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, []);
  return (
    <section aria-label="What we build" style={{ background: "var(--surface-page)", padding: wide ? "64px 0 clamp(72px,7vw,96px)" : "56px 0 72px" }}>
      <div style={{ padding: "0 var(--gutter)", maxWidth: "var(--container-max)", margin: "0 auto var(--space-8)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-3)" }}>
          <span style={{ width: 28, height: 1, background: "var(--gold-500)" }} />
          <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--green-700)" }}>What we build</span>
        </div>
        <p style={{ font: "var(--fw-regular) clamp(1.125rem,1.6vw,1.375rem)/1.35 var(--font-display)", color: "var(--text-primary)", maxWidth: "36ch" }}>From the ground beneath it to the finished property.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: 10 }}>
      {VIGNETTES.map(([n, label, h, d, cta, href, img, alt, pos], i) => (
        <Vignette key={n} n={n} label={label} h={h} d={d} cta={cta} href={href} img={img} alt={alt} pos={pos} wide={wide} go={go} last={i === VIGNETTES.length - 1} />
      ))}
      </div>
    </section>
  );
}

function Vignette({ n, label, h, d, cta, href, img, alt, pos, wide, go, last }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onClick={(e) => { e.preventDefault(); go(href); }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", display: "flex", alignItems: "flex-end", overflow: "hidden", textDecoration: "none", color: "#fff",
        minHeight: wide ? "min(86vh,760px)" : "min(54vh,440px)", borderRadius: 0 }}>
      <img src={P + img} alt={alt} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: pos,
        transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform 1.1s var(--ease-out)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,36,22,.15) 0%,rgba(10,36,22,.05) 30%,rgba(10,36,22,.7) 66%,rgba(10,36,22,.94) 100%)" }} />
      <div style={{ position: "relative", padding: wide ? "clamp(28px,3vw,48px)" : "var(--space-6) var(--gutter) var(--space-8)", width: "100%" }}>
        <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: "var(--space-4)" }}>{n} — {label}</div>
        <h2 style={{ font: wide ? "var(--fw-regular) clamp(2rem,3vw,2.75rem)/1.05 var(--font-display)" : "var(--fw-regular) clamp(2.25rem,9vw,2.75rem)/1.05 var(--font-display)", letterSpacing: "var(--ls-heading)", color: "#fff", maxWidth: "12ch" }}>{h}</h2>
        <p style={{ font: "var(--type-small)", color: "rgba(244,241,235,.84)", marginTop: "var(--space-4)", maxWidth: "34ch" }}>{d}</p>
        <span style={{ display: "inline-block", marginTop: "var(--space-6)", font: "var(--type-button)", letterSpacing: ".14em", textTransform: "uppercase", color: "#fff",
          borderBottom: `1px solid ${hover ? "var(--gold-500)" : "rgba(244,241,235,.5)"}`, paddingBottom: 6, transition: "border-color var(--dur-fast) var(--ease-out)" }}>{cta} →</span>
      </div>
    </a>
  );
}

function Home({ go }) {
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay onNavigate={go} />

      <Hero
        image={P + "patio-raised-wall-dusk.jpg"}
        alt="Raised paver patio on a block retaining wall with lit steps beside a house at dusk"
        eyebrow="Alejandro's Landscaping · New Cumberland, PA"
        title="Landscaping & hardscaping in the Harrisburg area."
        lede="Paver patios, retaining walls, walkways, planting and commercial landscaping for homes and businesses within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Raised patio, block wall and lit steps"
      />

      {/* WHAT WE DO — three photographic vignettes: image, copy and CTA as one composition */}
      <HomeVignettes go={go} />

      {/* PROOF — asymmetric gallery. Photography carries this, not copy. */}
      <Section tone="sunken">
        <Container>
          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-8)", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "var(--space-12)" }}>
              <SectionHead eyebrow="Recent work" title="Recent projects around Harrisburg." style={{ flex: "1 1 340px" }} />
              <Button variant="outline" href="#projects">All projects</Button>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "var(--gap-grid)" }}>
            <Reveal style={{ gridColumn: "span 2", minWidth: 0 }}>
              <ProjectTile size="lg" ratio="16/9" image={P + "firepit-seatwall-night.jpg"} alt="Lit seat wall and gas firepit at night"
                town="Central PA" service="Seat wall, firepit & lighting" detail="Wall lighting set into the course below the cap, so the light washes the stone instead of glaring at the seat." />
            </Reveal>
            <Reveal delay={80}>
              <ProjectTile image={P + "patio-pergola-mulch.jpg"} alt="Patio with pergola and fresh beds"
                town="Central PA" service="Patio, pergola pad & beds" detail="Slab, beds and lawn regraded in one pass." />
            </Reveal>
            <Reveal delay={160}>
              <ProjectTile image={P + "patio-pool-pavers.jpg"} alt="Paver patio around a pool"
                town="Central PA" service="Pool surround" detail="Three-piece modular pattern, soldier-course border cut to the pool radius." />
            </Reveal>
            <Reveal delay={240}>
              <ProjectTile image={P + "residential-lawn-beds.jpg"} alt="Striped lawn and planting beds beside a house"
                town="Central PA" service="Lawn & bed maintenance" detail="Cut lines re-edged each visit." />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* WHERE — Costa-model service area preview */}
      <Section tone="light">
        <Container>
          <Reveal><SectionHead eyebrow="Where we work" title="Landscaping across the Harrisburg area."
            intro="Camp Hill, Mechanicsburg, Harrisburg, Hershey, New Cumberland and surrounding communities."
            action={<Button variant="outline" href="#service-area">Full service area</Button>} /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(24px,3vw,48px)", marginTop: "var(--space-16)" }}>
            <Reveal><TownEntry town="Camp Hill" county="Cumberland County" distance="3 mi" image={P + "landscape-azaleas-flagstone-edge.jpg"} alt="Azaleas in a mulched bed behind a flagstone edge"
              notes="[VERIFY CAMP HILL CONDITIONS — soil, grade, borough permitting, what goes wrong on these lots.]" href="#service-area" /></Reveal>
            <Reveal delay={80}><TownEntry town="Mechanicsburg" county="Cumberland County" distance="7 mi" image={P + "walk/walk-after.jpg"} alt="Finished paver walkway leading to a front entry"
              notes="[VERIFY MECHANICSBURG CONDITIONS — development review, township thresholds, ground encountered.]" href="#service-area" /></Reveal>
            <Reveal delay={160}><TownEntry town="New Cumberland" county="Cumberland County" distance="0 mi" image={P + "sod/sod-first-watering-dusk.jpg"} alt="New sod lawn after its first watering at dusk"
              notes="[VERIFY NEW CUMBERLAND CONDITIONS — home ground, access, borough permitting.]" href="#service-area" /></Reveal>
          </div>
        </Container>
      </Section>

      {/* PROOF IN CONTEXT — empty until a real review exists. Nothing invented. */}
      <Section tone="darkAlt" tight>
        <Container width="var(--container-text)">
          <Reveal>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-6)" }}>Customer proof</Eyebrow>
            <p style={{ font: "var(--type-h3)", color: "var(--text-on-dark)", maxWidth: "34ch", textWrap: "pretty" }}>
              [ADD REAL CUSTOMER REVIEW]
            </p>
            <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-5)", maxWidth: "52ch" }}>
              [ADD: One verbatim quote from a completed job, with the customer's name, town, the month and a link to the source. No invented quote goes in this slot.]
            </p>
          </Reveal>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} towns={["New Cumberland", "Lemoyne", "Wormleysburg", "Camp Hill", "Shiremanstown", "Enola", "Mechanicsburg", "Harrisburg", "Steelton", "Highspire", "Lewisberry", "Marysville", "Middletown", "Dillsburg", "Hummelstown", "Hershey", "Boiling Springs", "Carlisle", "Elizabethtown", "Palmyra", "York"]} />
    </>
  );
}
window.Home = Home;

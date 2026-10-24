/* Paver driveways. Deliberately not the patio skeleton.
   Patio page asks: how do we create an outdoor space around your property?
   Driveway page asks: how do we build a paved surface that becomes part of the front of the
   property while carrying vehicle loads every day?
   Sequence: relevance → where it takes abuse → one real driveway examined → how load moves
   → three transitions → surface choice → front-elevation design → process → objections → action. */

const DW_INK = "#4A453F", DW_GOLD = "#F5B324", DW_GOLDTEXT = "#8A5D08", DW_LINE = "#A79E90", DW_ONDARK = "#F4F1EB", DW_ONDARK2 = "#B9B4A9";
const dwLabel = { fontFamily: "Archivo, sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "1.4px", textTransform: "uppercase" };

function useWide(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

function DrivewayLogo({ file, name, h }) {
  const [ok, setOk] = React.useState(true);
  if (ok) return <img src={"../../assets/logos/" + file} alt={name} onError={() => setOk(false)} style={{ height: h, width: "auto", maxWidth: "100%", display: "block" }} />;
  return <span style={{ font: "var(--fw-semibold) 1.125rem/1 var(--font-sans)", color: "var(--text-primary)" }}>{name}</span>;
}

/* 4 — load spreading through the pavement. Illustrative, not to scale. */
function LoadSection() {
  return (
    <svg viewBox="0 0 640 340" role="img" aria-label="Cross-section: a tyre load on the pavers spreads wider through the bedding and compacted base into the subgrade" style={{ width: "100%", height: "auto", display: "block" }}>
      <circle cx="320" cy="58" r="52" fill="#2E2B27" /><circle cx="320" cy="58" r="22" fill="#6B655D" />
      <text x="400" y="40" style={{ ...dwLabel, fill: DW_INK }}>Vehicle load</text>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => <rect key={i} x={40 + i * 64} y="112" width="60" height="26" fill="#B8B0A2" stroke="#6B655D" />)}
      <rect x="40" y="140" width="572" height="16" fill="#6B655D" />
      <path d="M40 158 L612 158 L612 246 L40 246 Z" fill="#4A453F" />
      <path d="M40 248 L612 248 L612 330 L40 330 Z" fill="#5A4632" />
      <path d="M296 112 L276 140 L200 246 L90 330 M344 112 L364 140 L440 246 L550 330" fill="none" stroke={DW_GOLD} strokeWidth="2" />
      <path d="M296 112 L344 112 L364 140 L440 246 L550 330 L90 330 L200 246 L276 140 Z" fill={DW_GOLD} opacity=".14" />
      {[["Pavers", 131], ["Bedding", 152], ["Compacted base", 206], ["Subgrade", 294]].map(([t, y]) => <text key={t} x="600" y={y} textAnchor="end" style={{ ...dwLabel, fill: t === "Pavers" ? "#2E2B27" : DW_ONDARK }}>{t}</text>)}
      <path d="M320 112 L320 330" stroke={DW_GOLD} strokeWidth="1" strokeDasharray="3 5" />
    </svg>
  );
}

/* 5 — one simplified profile: street → driveway → garage. Illustrative. */
function MeetProfile() {
  const t = (s, x, y, c = DW_ONDARK2, a = "middle") => <text x={x} y={y} textAnchor={a} style={{ ...dwLabel, fill: c }}>{s}</text>;
  return (
    <svg viewBox="0 0 640 220" role="img" aria-label="Side profile from the street across the driveway to the garage slab, with the street, garage and edge conditions marked" style={{ width: "100%", height: "auto", display: "block" }}>
      <path d="M0 150 L110 150" stroke={DW_ONDARK2} strokeWidth="1.5" />
      <path d="M110 150 L520 112" stroke={DW_ONDARK} strokeWidth="1.5" />
      {Array.from({ length: 14 }).map((_, i) => { const x = 110 + i * 29.3; const y = 150 - i * 2.72; return <path key={i} d={`M${x} ${y} L${x} ${y + 10}`} stroke={DW_ONDARK2} />; })}
      <path d="M110 160 L520 122" stroke={DW_ONDARK2} />
      <rect x="520" y="40" width="120" height="72" fill="none" stroke={DW_ONDARK2} />
      <path d="M520 112 L640 112" stroke={DW_ONDARK} strokeWidth="1.5" />
      <circle cx="110" cy="152" r="5" fill="none" stroke={DW_GOLD} strokeWidth="2" />
      <circle cx="520" cy="114" r="5" fill="none" stroke={DW_GOLD} strokeWidth="2" />
      <path d="M300 178 L300 196 M290 196 L310 196" stroke={DW_GOLD} strokeWidth="1.5" />
      <path d="M430 96 L360 103" stroke={DW_GOLD} strokeWidth="1.2" />
      <path d="M366 99 L358 103 L366 108" fill="none" stroke={DW_GOLD} strokeWidth="1.2" />
      {t("Street / sidewalk", 70, 182)}{t("Garage slab", 580, 132)}{t("Edge", 300, 212, DW_GOLD)}{t("Pitch away", 420, 88, DW_GOLD)}
    </svg>
  );
}

const MEETS = [
  ["01", "The street / sidewalk", "Where the driveway meets the existing apron, sidewalk or road."],
  ["02", "The garage", "The finished elevation has to meet the existing garage slab while maintaining appropriate pitch away from the structure."],
  ["03", "The edges", "The perimeter needs to remain defined and supported where paving meets lawn, beds or adjacent surfaces."]
];

function MiniPattern() {
  return (<svg viewBox="0 0 96 72" aria-hidden="true" style={{ width: "100%", height: "auto", display: "block" }}>
    <rect width="96" height="72" fill="#D0C8BB" />
    {[[0,0,32,24],[32,0,20,24],[52,0,44,24],[0,24,20,24],[20,24,44,24],[64,24,32,24],[0,48,44,24],[44,48,32,24],[76,48,20,24]].map(([x,y,w,h],i)=><rect key={i} x={x} y={y} width={w} height={h} fill={i%3?"#B8B0A2":"#A79E90"} stroke="#6B655D" />)}
  </svg>);
}
function MiniBorder() {
  return (<svg viewBox="0 0 96 72" aria-hidden="true" style={{ width: "100%", height: "auto", display: "block" }}>
    <rect width="96" height="72" fill="#4A453F" />
    <rect x="9" y="9" width="78" height="54" fill="#B8B0A2" />
    {[27,45,63].map(x=><path key={x} d={`M${x} 9 L${x} 63`} stroke="#8E877C" />)}{[27,45].map(y=><path key={y} d={`M9 ${y} L87 ${y}`} stroke="#8E877C" />)}
  </svg>);
}
function MiniWalk() {
  return (<svg viewBox="0 0 96 72" aria-hidden="true" style={{ width: "100%", height: "auto", display: "block" }}>
    <rect width="96" height="72" fill="#E4DED4" />
    <rect x="6" y="18" width="48" height="50" fill="#B8B0A2" stroke="#4A453F" strokeWidth="4" />
    <path d="M54 34 L78 34 L78 4 M54 46 L90 46 L90 4" fill="none" stroke="#4A453F" strokeWidth="3" />
    <path d="M56 40 L84 40 L84 6" fill="none" stroke="#B8B0A2" strokeWidth="8" />
  </svg>);
}
function MiniSwatch() {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, aspectRatio: "4/3" }}>
    {[1,2,3,4].map(i=><img key={i} src={P + "swatches/swatch-" + i + ".jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />)}
  </div>);
}
const DESIGN = [
  ["Color & texture", "How the paver field relates to brick, siding, stone and other materials on the house.", MiniSwatch],
  ["Pattern", "How paver scale and laying pattern change the appearance of a large paved surface.", MiniPattern],
  ["Borders", "How a contrasting border defines the driveway perimeter and connects visually with adjacent walkways.", MiniBorder],
  ["Connected walkways", "How the driveway and front walk can use related materials so they read as one composition.", MiniWalk]
];

const SURFACES = [
  ["Asphalt", "Lowest cost to install. Flexible, but it oxidises, cracks and needs periodic sealcoating. Repairs are patches that rarely match the surrounding surface."],
  ["Poured concrete", "A single rigid slab. Strong and clean-looking, but when the ground moves it cracks, and a crack in a slab cannot be undone — only cut out and patched."],
  ["Pavers", "Individual units that move slightly with the ground instead of cracking across it. A damaged or settled section can be lifted and reset with the same pavers. Higher cost up front."]
];

const DW_STEPS = [
  ["Walk the property", "Access, elevations, drainage, garage and street transitions, and how the driveway connects to the property."],
  ["Define the project", "Layout, paver direction, border and design choices, and a written scope."],
  ["Build", "Excavation, base preparation, paving and finishing according to the confirmed scope."],
  ["Final walkthrough", "Review the finished work with the homeowner."]
]

function PaverDriveways({ go }) {
  const wide = useWide();
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Hardscaping" onNavigate={go} />

      {/* 1. Relevance */}
      <Hero height="min(84vh,760px)"
        image={P + "driveway-hero-v4.jpg"}
        alt="Large-format modular paver driveway with a charcoal border leading up to a brick house in evening light"
        eyebrow="Hardscaping · Paver driveways"
        title="Custom Paver Driveways"
        lede="Paver driveway design and installation in Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Driveway, border and walkway — Central PA" />

      {/* 3. Real project — proof, not a case study */}
      <Section tone="sunken" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.35fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Built in New Cumberland</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch" }}>A driveway that connects all the way to the front door.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-5)", maxWidth: "46ch" }}>This New Cumberland project uses Cambridge pavers with a charcoal border, extending from the parking area into a matching walkway toward the home's front entry.</p>
              <ul style={{ listStyle: "none", margin: "var(--space-6) 0 0", padding: 0, display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-5)", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-4)" }}>
                <li style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" }}>Cambridge pavers</li>
                <li style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" }}>Charcoal border</li>
                <li style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" }}>Connected walkway</li>
                <li style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" }}>New Cumberland, PA</li>
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <BeforeAfter before={P + "dw-before2.jpg"} after={P + "dw-after2.jpg"} ratio="4/3"
                beforeAlt="Old concrete walk broken out and piled on the lawn in front of a brick house, with a jackhammer and shovel on site"
                afterAlt="Finished paver parking area with a charcoal border and a matching walkway leading to the front of the brick house"
                caption="Drag to compare. The old concrete walk was broken out and removed before the driveway and walkway went in." />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3b. Drainage — short pivot, small thumb + link */}
      <Section tone="dark" tight>
        <Container width="var(--container-text)">
          <Reveal>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-5)" }}>Driveway drainage</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "18ch" }}>Water needs somewhere to go.</h2>
            <p style={{ font: "var(--type-body)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-4)", maxWidth: "52ch" }}>A paver driveway is graded with the property around it in mind. Pitch, garage height and the surrounding grades decide where runoff can safely go.</p>
            <a href="/grading-drainage" onClick={(e) => { e.preventDefault(); go("/grading-drainage"); }}
              style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginTop: "var(--space-8)", textDecoration: "none", width: "fit-content" }}>
              <img src={P + "drainage-trench-sm.jpg"} alt="Drain pipe laid in a trench before grading" loading="lazy"
                style={{ width: 96, height: 72, objectFit: "cover", borderRadius: "var(--radius-image)", display: "block", flex: "0 0 auto" }} />
              <span style={{ font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--text-on-dark)", borderBottom: "1px solid var(--gold-500)", paddingBottom: 5 }}>Learn more about our drainage process →</span>
            </a>
          </Reveal>
        </Container>
      </Section>

      {/* 4. How load moves */}
      <Section tone="light">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(32px,5vw,88px)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-6)" }}>What's under the surface</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch" }}>The surface carries the car. The base carries the load.</h2>
              <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "var(--measure-lead)", marginTop: "var(--space-6)" }}>
                A tire puts its weight on a small area of pavers. The pavement system distributes that load downward and outward through the layers beneath it. By the time it reaches the subgrade, the load is spread across a much larger area.
              </p>
              <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-6)", maxWidth: "52ch" }}>
                [VERIFY DRIVEWAY BUILD WITH DORIAN — excavation depth, base material and thickness, compaction, bedding, paver thickness, edge treatment, and what changes because cars drive on it. Layers will be annotated once confirmed.]
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ borderTop: "1px solid var(--gold-500)", borderBottom: "1px solid var(--gold-500)", padding: "var(--space-8) 0" }}><LoadSection /></div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5b. Designing the surface */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Designing the surface" title="The driveway takes up a lot of the front of a property. It should belong there." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(28px,4vw,64px)", marginTop: "var(--space-10)", borderBottom: "1px solid var(--gold-500)" }}>
            {DESIGN.map(([h, d, V], i) => (
              <Reveal key={h} delay={i * 60} style={{ display: "grid", gridTemplateColumns: "112px 1fr", gap: "var(--space-5)", alignItems: "center", borderTop: "1px solid var(--gold-500)", padding: "var(--space-5) 0" }}>
                <div style={{ overflow: "hidden", borderRadius: "var(--radius-xs)" }}><V /></div>
                <div><h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>{h}</h3>
                  <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "42ch" }}>{d}</p></div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Surface choice — editorial, neutral */}
      <Section tone="light">
        <Container>
          <Reveal><SectionHead eyebrow="Asphalt, concrete or pavers" title="Why choose individual pavers for something this large?"
            intro="All three can make a good driveway. They fail differently, repair differently and cost differently, and that's usually what decides it." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "0 clamp(24px,4vw,56px)", marginTop: "var(--space-12)" }}>
            {SURFACES.map(([h, d], i) => (
              <Reveal key={h} delay={i * 70} style={{ borderTop: i === 2 ? "2px solid var(--gold-500)" : "1px solid var(--border-strong)", padding: "var(--space-6) 0" }}>
                <h3 style={{ font: "var(--type-h3)", marginBottom: "var(--space-4)" }}>{h}</h3>
                <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "42ch" }}>{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-6)", maxWidth: "60ch" }}>[VERIFY COMPARISON CLAIMS BEFORE PUBLISHING.]</p></Reveal>
        </Container>
      </Section>

      {/* 7. Manufacturers */}
      <Section tone="sunken" tight>
        <Container>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "var(--space-6) clamp(24px,4vw,64px)", alignItems: "center", borderTop: "1px solid var(--gold-500)", borderBottom: "1px solid var(--gold-500)", padding: "var(--space-8) 0" }}>
              <div>
                <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", marginBottom: "var(--space-3)" }}>Paver manufacturers</h3>
                <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "46ch" }}>We install pavers from Techo-Bloc and Cambridge, including units made for vehicle traffic.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-6) 0" }}>
                <div style={{ padding: "var(--space-2) clamp(20px,3vw,40px) var(--space-2) 0" }}><DrivewayLogo file="techo-bloc.png" name="Techo-Bloc" h="clamp(14px,1.6vw,19px)" /></div>
                <div style={{ padding: "var(--space-2) 0 var(--space-2) clamp(20px,3vw,40px)", borderLeft: "1px solid var(--border-strong)" }}><DrivewayLogo file="cambridge-pavers.png" name="Cambridge Pavers" h="clamp(44px,4.8vw,58px)" /></div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 9. Process — compact */}
      <Section tone="light" tight>
        <Container>
          <Reveal><Eyebrow tone="brand" style={{ marginBottom: "var(--space-8)" }}>Getting a driveway built</Eyebrow></Reveal>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,210px),1fr))", gap: "var(--space-6) var(--space-8)" }}>
            {DW_STEPS.map(([h, d], i) => (
              <li key={h} style={{ borderTop: "1px solid var(--border-strong)", paddingTop: "var(--space-4)" }}>
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "baseline", marginBottom: "var(--space-2)" }}>
                  <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ font: "var(--type-h4)" }}>{h}</h3>
                </div>
                <p style={{ font: "var(--type-small)", color: "var(--text-secondary)" }}>{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 10. Objections */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Questions about paver driveways" title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-10)" }}>
            <QuestionList items={[
              { question: "How are paver driveways different from paver patios?", answer: "The surface can look similar. What changes is the load: cars are heavier than foot traffic and tires turn on the surface, so a driveway is built with a deeper base and pavers made for vehicle traffic. [VERIFY DRIVEWAY BASE AND PAVER THICKNESS.]", linkLabel: "Paver patios", href: "/hardscaping/paver-patios" },
              { question: "Can pavers handle vehicle traffic?", answer: "Yes, when the pavement system is built as a driveway. The pavers, bedding and compacted base spread each tire's load across a wider area, as shown above. [VERIFY PAVER THICKNESS AND BASE DEPTH USED for vehicle loads.]", linkLabel: null, href: null },
              { question: "Can a paver driveway connect to an existing concrete garage slab?", answer: "Yes. The finished paver surface is set to meet the slab and pitched away from the garage so water doesn't run toward it.", linkLabel: null, href: null },
              { question: "Can a matching paver walkway be built with the driveway?", answer: "Yes. Building both together lets them share the same pavers and border, so they read as one composition. The New Cumberland project above does exactly that.", linkLabel: "Walkways & steps", href: "/hardscaping/walkways" },
              { question: "How do you choose paver colors and borders?", answer: "Start with what's already on the house: brick, siding, stone and trim. The field usually picks up the main exterior tone, and a darker border defines the edge. We install Techo-Bloc and Cambridge, which offer a wide range of both.", linkLabel: null, href: null },
              { question: "Do paver driveways work on sloped properties?", answer: "Often, yes. Slope affects how water moves across the surface and how the edges are held. [VERIFY HOW ALEJANDRO'S HANDLES STEEP DRIVEWAYS.]", linkLabel: "Grading & drainage", href: "/grading-drainage" },
              { question: "What areas do you serve?", answer: "Towns within about twenty miles of New Cumberland, including Camp Hill, Mechanicsburg, Lemoyne, Harrisburg and Hershey.", linkLabel: "Service area", href: "/service-area" }
            ]} />
          </Reveal>
        </Container>
      </Section>

      <RelatedProjects go={go} service="paver-driveways" />

      <div id="estimate"><EstimateBand title="Send a photo of the driveway." intro="A picture of what's there now and a rough size tells us more than a paragraph. We'll look at how it meets the street and the house, and what has to come out." /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.PaverDriveways = PaverDriveways;

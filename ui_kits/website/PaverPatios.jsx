/* Paver patios. Sequence follows the buyer, not a template:
   relevance → desire → personalisation → technical trust → transformation → choice
   → process → company trust → adjacent needs → objections → local → action. */

const PLAN_FACTORS = [
  ["How you'll use it", "Dining, seating, grilling, fire features and how many people the patio needs to accommodate."],
  ["How it connects", "Doors, walkways, pools and the natural routes people take through the yard."],
  ["How the property sits", "Slope, elevation, drainage and whether steps or retaining walls need to become part of the project."]
];

/* Listed top-down as the homeowner sees it in section, numbered in build order. */
const ASSEMBLY = [
  ["05", "Joints + edge restraint", "The finished field is secured at the perimeter and the joints are filled appropriately for the system.", { h: 14, bg: "repeating-linear-gradient(90deg,#8E877C 0 46px,#2E2B27 46px 49px)" }],
  ["04", "Pavers", "Pavers are set to the planned elevations, pattern and pitch.", { h: 30, bg: "repeating-linear-gradient(90deg,#B8B0A2 0 58px,#6B655D 58px 61px)" }],
  ["03", "1B stone-chip bedding", "Instead of a conventional sand setting bed, we level the pavers over clean stone chips. The open-graded material allows water to move through the bedding layer rather than relying on a fine sand layer directly beneath the pavers.", { h: 20, bg: "radial-gradient(circle,#9A9388 1.6px,transparent 2px) 0 0/7px 7px,#6B655D" }],
  ["02", "Compacted stone base", "The structural aggregate base provides the patio's foundation.", { h: 56, bg: "radial-gradient(circle,#A79E90 2.2px,transparent 2.8px) 0 0/10px 9px,radial-gradient(circle,#6B655D 1.4px,transparent 2px) 4px 5px/9px 10px,#4A453F" }],
  ["01", "Prepared subgrade", "The existing surface is excavated and prepared for the patio system.", { h: 40, bg: "linear-gradient(180deg,#5A4632,#3E3022)" }]
];

const OPTIONS = [
  ["Colour & texture", "Smooth, tumbled or textured faces, in blends chosen to sit with the siding, brick or stone already on the house.", "swatch"],
  ["Pattern", "Pattern changes how big the patio reads and how busy it looks. Modular breaks up a large field; running bond and herringbone add direction.", "pattern"],
  ["Borders", "A contrasting border around the field is the simplest way to make a patio look finished. It also holds the cut edge on curves.", "border"],
  ["Curves or straight lines", "Straight lines suit a formal house and a square yard. Curves follow a pool, a planting bed or the way people walk through the space.", "plan"]
];

const SPEC_INK = "#4A453F";
const SPEC_LABEL = { font: "var(--fw-semibold) 10px/1 var(--font-sans)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-muted)" };

function SwatchTile({ file, base, grain }) {
  const [ok, setOk] = React.useState(true);
  return (
    <div style={{ width: 60, height: 60, position: "relative", overflow: "hidden", background: grain + "," + base, boxShadow: "inset 0 -3px 0 rgba(0,0,0,.14), inset 0 1px 0 rgba(255,255,255,.18)" }}>
      {ok && <img src={P + "swatches/" + file} alt="" onError={() => setOk(false)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
    </div>
  );
}

/* Drop product close-ups into assets/photos/swatches/ with these filenames. Until a file exists the
   drawn texture shows. Labels stay generic until the owner confirms which paver lines are installed. */
function Swatches() {
  const s = [
    ["Warm", "swatch-1.jpg", "linear-gradient(135deg,#B9926B,#9C7650)", "radial-gradient(circle,rgba(255,240,220,.35) 1px,transparent 1.6px) 0 0/6px 6px"],
    ["Blend", "swatch-2.jpg", "linear-gradient(135deg,#A89C8C 0%,#8E8174 45%,#B7A48C 100%)", "radial-gradient(circle,rgba(40,30,20,.25) 1px,transparent 1.6px) 2px 3px/7px 7px"],
    ["Cool", "swatch-3.jpg", "linear-gradient(135deg,#8C9095,#6F747A)", "radial-gradient(circle,rgba(255,255,255,.22) .9px,transparent 1.5px) 0 0/5px 5px"],
    ["Textured", "swatch-4.jpg", "linear-gradient(135deg,#7A7066,#5B534B)", "radial-gradient(circle,rgba(0,0,0,.35) 1.6px,transparent 2.4px) 0 0/9px 8px, radial-gradient(circle,rgba(255,255,255,.18) 1.2px,transparent 2px) 4px 4px/8px 9px"]
  ];
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {s.map(([l, file, base, grain]) => (
        <div key={l} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <SwatchTile file={file} base={base} grain={grain} />
          <span style={SPEC_LABEL}>{l}</span>
        </div>
      ))}
    </div>
  );
}

function herringbone(u, w, h) {
  const out = [];
  for (let s = -12; s <= 12; s++) for (let t = -12; t <= 16; t++) {
    const ox = s * 4 + t, oy = t;
    out.push([ox * u, oy * u, 2 * u, u], [(ox + 2) * u, (oy - 1) * u, u, 2 * u]);
  }
  return out.filter(([x, y, rw, rh]) => x < w && y < h && x + rw > 0 && y + rh > 0);
}

function Patterns() {
  const W = 92, H = 68, f = "#E4DED4";
  const modular = [[0,0,34,22],[34,0,22,22],[56,0,36,22],[0,22,22,22],[22,22,34,22],[56,22,22,22],[78,22,14,22],[0,44,34,24],[34,44,22,24],[56,44,36,24]];
  const bond = []; for (let r = 0; r < 6; r++) for (let c = -1; c < 5; c++) bond.push([c * 24 + (r % 2 ? 12 : 0), r * 12, 24, 12]);
  const sets = [["Modular", modular], ["Running bond", bond], ["Herringbone", herringbone(8, W, H)]];
  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
      {sets.map(([l, rects], i) => (
        <div key={l} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" style={{ display: "block", background: f, outline: "1px solid " + SPEC_INK }}>
            <defs><clipPath id={"pc" + i}><rect width={W} height={H} /></clipPath></defs>
            <g clipPath={`url(#pc${i})`} fill={f} stroke={SPEC_INK} strokeWidth="1">
              {rects.map(([x, y, w, h], k) => <rect key={k} x={x} y={y} width={w} height={h} />)}
            </g>
          </svg>
          <span style={SPEC_LABEL}>{l}</span>
        </div>
      ))}
    </div>
  );
}

function BorderDiagram() {
  const W = 200, H = 108, b = 12, f = "#E4DED4";
  const field = []; for (let r = 0; r < 8; r++) for (let c = -1; c < 10; c++) field.push([b + c * 22 + (r % 2 ? 11 : 0), b + r * 11, 22, 11]);
  const ring = [];
  for (let x = 0; x < W; x += b) ring.push([x, 0], [x, H - b]);
  for (let y = b; y < H - b; y += b) ring.push([0, y], [W - b, y]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" style={{ display: "block" }}>
        <defs><clipPath id="bf"><rect x={b} y={b} width={W - 2 * b} height={H - 2 * b} /></clipPath></defs>
        <g clipPath="url(#bf)" fill={f} stroke={SPEC_INK} strokeWidth="1">{field.map(([x, y, w, h], k) => <rect key={k} x={x} y={y} width={w} height={h} />)}</g>
        <g fill="#5B534B" stroke="#2E2B27" strokeWidth="1">{ring.map(([x, y], k) => <rect key={k} x={x} y={y} width={b} height={b} />)}</g>
        <rect x=".75" y=".75" width={W - 1.5} height={H - 1.5} fill="none" stroke="var(--gold-500)" strokeWidth="1.5" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ ...SPEC_LABEL, display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 12, height: 12, background: f, outline: "1px solid " + SPEC_INK }} />Field</span>
        <span style={{ ...SPEC_LABEL, display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 12, height: 12, background: "#5B534B", outline: "1.5px solid var(--gold-500)" }} />Border</span>
      </div>
    </div>
  );
}

function PlanViews() {
  const W = 120, H = 88, f = "#E4DED4";
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" style={{ display: "block" }}>
          <rect x="6" y="4" width="108" height="14" fill="#A79E90" />
          <text x="60" y="14" textAnchor="middle" style={{ font: "600 7px var(--font-sans)", letterSpacing: ".14em" }} fill="#FAF8F4">HOUSE</text>
          <rect x="18" y="18" width="84" height="56" fill={f} stroke={SPEC_INK} strokeWidth="1" />
          <rect x="22" y="22" width="76" height="48" fill="none" stroke={SPEC_INK} strokeWidth=".6" strokeDasharray="2 2" />
          <rect x="52" y="74" width="16" height="8" fill={f} stroke={SPEC_INK} strokeWidth="1" />
        </svg>
        <span style={SPEC_LABEL}>Straight</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" style={{ display: "block" }}>
          <path d="M8 44 C8 14 40 6 64 8 C94 10 114 26 112 50 C110 74 84 84 58 82 C30 80 8 70 8 44 Z" fill={f} stroke={SPEC_INK} strokeWidth="1" />
          <ellipse cx="62" cy="45" rx="32" ry="22" fill="#B9CFD6" stroke={SPEC_INK} strokeWidth="1" />
          <ellipse cx="62" cy="45" rx="36" ry="26" fill="none" stroke={SPEC_INK} strokeWidth=".6" strokeDasharray="2 2" />
          <text x="62" y="48" textAnchor="middle" style={{ font: "600 7px var(--font-sans)", letterSpacing: ".14em" }} fill={SPEC_INK}>POOL</text>
        </svg>
        <span style={SPEC_LABEL}>Curved</span>
      </div>
    </div>
  );
}

const SPEC_VISUALS = { swatch: Swatches, pattern: Patterns, border: BorderDiagram, plan: PlanViews };

const PROCESS = [
  ["Walk the property", "We look at the space, access for equipment, elevation, drainage, and what you want the patio to do."],
  ["Plan the project", "Footprint, features, materials and scope, written down with a price before anything starts."],
  ["Prepare the site", "Excavation, grading and base preparation. The part that decides whether the patio stays flat."],
  ["Build", "Pavers, borders, and any steps, walls or features that are part of the plan."],
  ["Finish the property", "Final grading, cleanup, and a walkthrough with you. [VERIFY LAWN RESTORATION AND WALKTHROUGH PRACTICE.]"]
];

const RELATED = [
  ["Retaining walls", "/hardscaping/retaining-walls", "When the patio needs level ground the yard does not have."],
  ["Walkways & steps", "/hardscaping/walkways", "Connecting the patio to the driveway, the gate or the front door."],
  ["Fire features & seat walls", "/hardscaping/fire-features", "Built into the patio on the same excavation."],
  ["Grading & drainage", "/hardscaping/drainage", "When water already stands where the patio is going."]
];

const TOWNS = ["Camp Hill", "Mechanicsburg", "New Cumberland", "Lemoyne", "Harrisburg", "Enola", "Hershey", "Hummelstown", "Dillsburg", "Elizabethtown"];

function BrandLogo({ file, name, h = 40 }) {
  const [ok, setOk] = React.useState(true);
  if (ok) return <img src={"../../assets/logos/" + file} alt={name} onError={() => setOk(false)} style={{ height: h, width: "auto", maxWidth: "100%", display: "block" }} />;
  /* Fallback until the official file is supplied: the name in plain type, never a redrawn mark. */
  return <span style={{ font: "var(--fw-semibold) 1.125rem/1 var(--font-sans)", letterSpacing: ".04em", color: "var(--text-primary)" }}>{name}</span>;
}

function PaverPatios({ go }) {
  const tileRatio = useTileRatio();
  const nav = (href) => (e) => { e.preventDefault(); go && go(href); };
  const phoneHref = `tel:${PHONE.replace(/\D/g, "")}`;
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Hardscaping" onNavigate={go} />

      {/* 1. Relevance */}
      <Hero height="min(78vh,700px)"
        image={P + "patio-raised-wall-dusk.jpg"}
        alt="Raised paver patio on a block retaining wall with lit steps and a seat wall beside the house at dusk"
        eyebrow="Paver patios"
        title="Built around your property."
        lede="Custom paver patio design and installation in Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={phoneHref}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Raised patio, block wall base and lit steps" />

      {/* 2. Desire — prove the hero was not a one-off */}
      <Section tone="light" tight>
        <Container>
          <Reveal><SectionHead eyebrow="Recent patios" title="Built around the way you use the yard." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--gap-grid)", marginTop: "var(--space-12)" }}>
            <Reveal><ProjectTile ratio={tileRatio} image={P + "patio-pool-pavers.jpg"} alt="Paver patio cut to the curve of an in-ground pool" town="Central PA" service="Pool pavers" detail="Field cut to the pool radius with a contrasting border." /></Reveal>
            <Reveal delay={80}><ProjectTile ratio={tileRatio} image={P + "patio-firepit-seatwall-dusk.jpg"} alt="Paver patio at dusk with a round stone firepit, Adirondack chairs and an under-cap lit seat wall" town="Central PA" service="Patio, seat wall & fire pit" detail="Round block fire pit, seat wall lit from under the cap." /></Reveal>
            <Reveal delay={160}><ProjectTile ratio={tileRatio} image={P + "patio-pergola-web.png"} alt="Ground-level paver patio with a charcoal soldier-course border under a louvred pergola, framed by black mulch beds" town="Central PA" service="Patio & pergola pad" detail="Two-tone field with a charcoal soldier-course border." /></Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. One real transformation — paver patio before and after */}
      <Section tone="sunken">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,72px)", alignItems: "center" }}>
            <Reveal><BeforeAfter before={P + "pool-pavers-before.jpg"} after={P + "pool-pavers-after.jpg"}
              beforeAlt="Old pool-side paver patio with weeds in every joint and pavers lifting at the pool edge"
              afterAlt="Rebuilt pool patio in a multi-size blended paver, cut to the pool curve with a charcoal border and a channel drain across the field"
              caption="Drag to compare." /></Reveal>
            <Reveal delay={100}>
              <SectionHead eyebrow="Project breakdown" title="Rebuilding a failing pool patio." />
              <dl style={{ margin: "var(--space-8) 0 0" }}>
                {[["Before", "Weeds had taken over the joints, while pavers along the pool coping were lifting and separating."],
                  ["What we did", "[VERIFY SCOPE — e.g. removed the existing pavers, rebuilt the base, reset or replaced the pavers, installed the border, added the channel drain.]"],
                  ["The result", "A clean, continuous pool surround with properly aligned edges and a finished surface built to hold together."]].map(([h, d]) => (
                  <div key={h} style={{ display: "grid", gridTemplateColumns: "minmax(96px,120px) 1fr", gap: "var(--space-5)", padding: "var(--space-5) 0", borderTop: "1px solid var(--border-hairline)" }}>
                    <dt style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)", paddingTop: 3 }}>{h}</dt>
                    <dd style={{ margin: 0, font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "48ch" }}>{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4. Technical trust — real photo, then a closer look, then the assembly at one glance */}
      <Section tone="dark">
        <Container>
          <Reveal>
            <figure style={{ margin: 0, position: "relative" }}>
              <img src={P + "paver-walkway-chip-bed-install.jpg"} alt="Pavers being laid over a bed of clean 1B stone chips on a compacted base, with the next pavers stacked beside the run"
                style={{ width: "100%", aspectRatio: "21/9", objectFit: "cover", objectPosition: "50% 80%", borderRadius: "var(--radius-image)" }} />
              <span aria-hidden="true" style={{ position: "absolute", left: "40%", top: "56%", width: 44, height: 44, transform: "translate(-50%,-50%)", border: "1.5px solid var(--gold-500)", borderRadius: "50%", boxShadow: "0 0 0 4px rgba(10,36,22,.35)" }} />
              <figcaption style={{ font: "var(--type-caption)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-4)" }}>
                Pavers going down over the stone-chip bed. [VERIFY TOWN AND PROJECT.]
              </figcaption>
            </figure>
          </Reveal>

          <Reveal style={{ marginTop: "clamp(48px,6vw,88px)" }}>
            <SectionHead tone="dark" eyebrow="Built from the ground up" title="What's underneath the pavers matters."
              intro="A patio is more than the pavers you see. The system underneath determines how the finished surface is supported, leveled and handles water. Alejandro's builds that foundation in layers—including a clean, angular stone-chip bedding course instead of a conventional sand setting bed." />
          </Reveal>

          {/* The one idea kept from the zoom concept: a detail crop that hands off to the diagram */}
          <Reveal style={{ marginTop: "var(--space-12)", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <div aria-hidden="true" style={{ flex: "0 0 auto", width: 112, height: 72, borderRadius: "var(--radius-image)", outline: "1.5px solid var(--gold-500)", outlineOffset: 2, background: `url(${P + "paver-walkway-chip-bed-install.jpg"}) 38% 72% / 420% auto no-repeat` }} />
            <span style={{ flex: "0 0 auto", width: "clamp(24px,6vw,80px)", height: 1, background: "var(--gold-500)" }} />
            <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-on-dark)" }}>A closer look underneath</span>
          </Reveal>

          <ol style={{ listStyle: "none", margin: "var(--space-12) 0 0", padding: 0, borderBottom: "1px solid var(--border-dark)" }}>
            {ASSEMBLY.map(([n, h, d, band], i) => {
              const focus = n === "03";
              return (
              <Reveal key={n} delay={i * 60}>
                <li style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--space-4) clamp(24px,4vw,64px)", alignItems: "center", borderTop: "1px solid var(--border-dark)", padding: focus ? "var(--space-6) var(--space-5)" : "var(--space-5) 0", margin: focus ? "0 calc(var(--space-5) * -1)" : 0, background: focus ? "rgba(245,179,36,.06)" : "transparent", outline: focus ? "1px solid rgba(245,179,36,.55)" : "none", outlineOffset: -1 }}>
                  <div aria-hidden="true" style={{ height: band.h, background: band.bg, borderRadius: "var(--radius-xs)", boxShadow: focus ? "0 0 0 1px var(--gold-500)" : "none" }} />
                  <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "var(--space-4)" }}>
                    <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-500)", paddingTop: 3 }}>{n}</span>
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
                        <h4 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: focus ? "var(--gold-300)" : "var(--text-on-dark)" }}>{h}</h4>
                        {focus && <span style={{ font: "var(--fw-semibold) 10px/1 var(--font-sans)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--green-950)", background: "var(--gold-500)", padding: "4px 7px" }}>Our method</span>}
                      </div>
                      <p style={{ font: "var(--type-small)", color: focus ? "var(--text-on-dark)" : "var(--text-on-dark-secondary)", maxWidth: "52ch" }}>{d}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
              );
            })}
          </ol>

          <Reveal style={{ marginTop: "var(--space-12)", borderTop: "2px solid var(--gold-500)", paddingTop: "var(--space-6)", maxWidth: "62ch" }}>
            <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-500)", marginBottom: "var(--space-4)" }}>Why we build it this way</div>
            <p style={{ font: "var(--fw-regular) clamp(1.25rem,1.9vw,1.625rem)/1.4 var(--font-display)", color: "var(--text-on-dark)", textWrap: "pretty" }}>
              Water gets beneath outdoor paving. Our bedding system is designed around that reality, using clean stone beneath the pavers as part of a stable, free-draining assembly.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Personalisation — lower the intimidation of a large purchase */}
      <Section tone="light">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Planning your patio" title="A good patio starts with the space around it."
                intro="You don't need to know the dimensions, paver pattern or finished layout before you call. We look at how the patio connects to the house, how you'll use it, and what the property allows." />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "0 clamp(24px,3vw,48px)", marginTop: "clamp(40px,5vw,72px)" }}>
            {PLAN_FACTORS.map(([h, d], i) => (
              <Reveal key={h} delay={i * 60} style={{ borderTop: "1px solid var(--border-strong)", padding: "var(--space-5) 0 var(--space-6)" }}>
                <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)", marginBottom: "var(--space-3)" }}>{h}</h3>
                <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "38ch" }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Choice without a catalogue */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Materials & design" title="Make it fit the house, not just the yard." /></Reveal>
          <div style={{ marginTop: "var(--space-12)", borderBottom: "1px solid var(--gold-500)" }}>
            {OPTIONS.map(([h, d, kind], i) => {
              const Visual = SPEC_VISUALS[kind];
              return (
                <Reveal key={h} delay={i * 60}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "var(--space-6) clamp(24px,4vw,64px)", alignItems: "center", borderTop: "1px solid var(--gold-500)", padding: "var(--space-8) 0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "var(--space-4)" }}>
                      <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)", paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "var(--space-3)" }}>{h}</h3>
                        <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "46ch" }}>{d}</p>
                      </div>
                    </div>
                    <div style={{ minWidth: 0, overflowX: "auto" }}><Visual /></div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "var(--space-6) clamp(24px,4vw,64px)", alignItems: "center", borderTop: "1px solid var(--gold-500)", padding: "var(--space-8) 0" }}>
                <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "var(--space-4)" }}>
                  <span aria-hidden="true"></span>
                  <div>
                    <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "var(--space-3)" }}>Paver manufacturers</h3>
                    <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "46ch" }}>We install pavers from Techo-Bloc and Cambridge, giving homeowners a wide range of colors, textures, sizes and patterns to work with.</p>
                    <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-3)" }}>Product availability varies by project, color and style.</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-6) 0" }}>
                  <div style={{ padding: "var(--space-2) clamp(20px,3vw,40px) var(--space-2) 0" }}><BrandLogo file="techo-bloc.png" name="Techo-Bloc" h="clamp(14px,1.6vw,19px)" /></div>
                  <div style={{ padding: "var(--space-2) 0 var(--space-2) clamp(20px,3vw,40px)", borderLeft: "1px solid var(--border-strong)" }}><BrandLogo file="cambridge-pavers.png" name="Cambridge Pavers" h="clamp(44px,4.8vw,58px)" /></div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 9. Adjacent needs */}
      <Section tone="light" tight>
        <Container>
          <Reveal><SectionHead eyebrow="Related hardscaping" title="Building more than the patio?" /></Reveal>
          <div style={{ marginTop: "var(--space-10)" }}>
            {RELATED.map(([label, href, note], i) => (
              <Reveal key={href} delay={i * 50}>
                <a href={href} onClick={nav(href)} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr) auto", gap: "var(--space-6)", alignItems: "baseline", padding: "var(--space-6) 0", borderTop: "1px solid var(--border-hairline)", textDecoration: "none", color: "inherit" }}>
                  <span style={{ font: "var(--type-h3)", color: "var(--text-primary)" }}>{label}</span>
                  <span style={{ font: "var(--type-small)", color: "var(--text-secondary)" }}>{note}</span>
                  <Icon name="arrow-right" size={18} color="var(--green-800)" />
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 10. Objections */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Questions about paver patios" title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-12)" }}>
            <QuestionList items={[
              { question: "How much does a paver patio cost in Central Pennsylvania?", answer: "Most paver patio projects we build in Central Pennsylvania fall between $10,000 and $50,000. Size sets the base number. Excavation depth, equipment access to the back yard, drainage work, the paver chosen, and any steps, walls or fire features move it from there. Every estimate should state what preparation and materials are included.", linkLabel: null, href: null },
              { question: "How long does paver patio installation take?", answer: "Most paver patios take 3–7 days once construction begins. Laying the pavers is rarely what takes longest. Excavation, hauling spoil out through a narrow gate, drainage work, and rain that delays base compaction are what extend a schedule.", linkLabel: null, href: null },
              { question: "Can you replace an existing concrete patio with pavers?", answer: "[VERIFY DEMOLITION CAPABILITY AND WHETHER REMOVAL IS INCLUDED OR QUOTED SEPARATELY.] A cracked slab can't be patched invisibly. Pavers are individual units, so a damaged section can be lifted and reset instead.", linkLabel: null, href: null },
              { question: "Do paver patios require maintenance?", answer: "Some. Joint sand can wash out over time and should be topped up, and weeds or moss in the joints are easier to handle early. [VERIFY WHETHER SEALING IS RECOMMENDED OR OFFERED.] A patio on a sound base shouldn't need resetting.", linkLabel: null, href: null },
              { question: "How do you prepare the base for a paver patio?", answer: "We excavate, build a compacted stone base, and level the pavers on a clean 1B stone-chip bedding course instead of sand. [VERIFY EXCAVATION DEPTH AND BASE THICKNESS.] The base decides whether a patio stays flat through Pennsylvania freeze-thaw.", linkLabel: null, href: null },
              { question: "Can you build a patio on a sloped yard?", answer: "Yes. The patio is cut into the grade, raised on a retaining-wall base, or split into levels with steps. Which one depends on how far the ground falls and where the door sits.", linkLabel: "Retaining walls", href: "/hardscaping/retaining-walls" },
              { question: "Can you add steps, walls, lighting or a fire feature?", answer: "Yes, and it's simpler at the same time. Wall footings, the patio base and lighting wires all go in during one excavation, instead of cutting into a finished patio later.", linkLabel: "Fire features & seat walls", href: "/hardscaping/fire-features" },
              { question: "What areas do you serve?", answer: "Towns within about twenty miles of New Cumberland, including Camp Hill, Mechanicsburg, Lemoyne, Harrisburg and Hershey, across Cumberland, Dauphin and York counties.", linkLabel: "Service area", href: "/service-area" }
            ]} />
          </Reveal>
        </Container>
      </Section>

      {/* 11. Local relevance, compact */}
      <Section tone="light" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(24px,4vw,72px)", alignItems: "baseline" }}>
            <Reveal><SectionHead eyebrow="Where we build" title="Paver patio installation across the Harrisburg area." /></Reveal>
            <Reveal delay={80}>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", lineHeight: 1.9 }}>{TOWNS.join(" · ")}</p>
              <a href="/service-area" onClick={nav("/service-area")} style={{ display: "inline-block", marginTop: "var(--space-5)", font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", textDecoration: "none", borderBottom: "1px solid var(--border-strong)", paddingBottom: 5 }}>Full service area →</a>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 12. Action */}
      <div style={{ position: "relative", height: "clamp(260px,42vw,520px)", overflow: "hidden", background: "var(--green-950)" }}>
        <img src={P + "firepit-seatwall-night.jpg"} alt="Finished paver patio with a lit seat wall and firepit at night" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <RelatedProjects go={go} service="paver-patios" />
      <div id="estimate"><EstimateBand title="Have a backyard you are ready to use differently?"
        intro="Tell us what you are working with and what you would like the space to become. We will take a look at the property and talk through the project with you." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.PaverPatios = PaverPatios;

const NS = window.AlejandroSLandscapingDesignSystem_a675b9 || {};
const { Button, Eyebrow, SectionHead, StatRow, Icon, ProjectTile, ServiceRow, TownEntry, ReviewQuote, BeforeAfter, QuestionList, SiteHeader, SiteFooter, MobileCallBar, Field, EstimateForm } = NS;

const P = "../../assets/photos/";
const LOGO = "../../assets/logo.png";
const PHONE = "(717) 736-6538";

function Container({ children, width = "var(--container-max)", style }) {
  return <div style={{ maxWidth: width, margin: "0 auto", padding: "0 var(--gutter)", ...style }}>{children}</div>;
}

function Section({ children, tone = "light", tight = false, style, ...rest }) {
  const bg = { light: "var(--surface-page)", raised: "var(--surface-raised)", sunken: "var(--surface-sunken)", dark: "var(--surface-dark)", darkAlt: "var(--surface-dark-alt)" }[tone];
  return <section style={{ background: bg, padding: `${tight ? "var(--section-y-tight)" : "var(--section-y)"} 0`, ...style }} {...rest}>{children}</section>;
}

/* Scroll reveal — fade + 18px rise, once. Honours prefers-reduced-motion via tokens. */
function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: .12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{
    opacity: on ? 1 : 0, transform: on ? "none" : "translateY(var(--reveal-distance))",
    transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms, transform var(--dur-reveal) var(--ease-out) ${delay}ms`, ...style
  }}>{children}</div>;
}

/* Full-bleed photographic hero. Text left, project credit bottom-right. */
function Hero({ image, alt, eyebrow, title, lede, primary, secondary, credit, height = "min(92vh,860px)" }) {
  return (
    <div style={{ position: "relative", minHeight: height, display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--green-950)" }}>
      <img src={image} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--scrim-hero)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,36,22,.55) 0%,rgba(10,36,22,0) 32%)" }} />
      <Container style={{ position: "relative", width: "100%", paddingBottom: "clamp(56px,7vw,104px)", paddingTop: "180px" }}>
        <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-8)" }}>{eyebrow}</Eyebrow>
        <h1 style={{ font: "var(--type-display)", letterSpacing: "var(--ls-display)", color: "#fff", maxWidth: "15ch", textWrap: "balance", marginBottom: "var(--space-8)" }}>{title}</h1>
        <p style={{ font: "var(--type-lead)", color: "rgba(255,255,255,.9)", maxWidth: "48ch", marginBottom: "var(--space-10)", textWrap: "pretty" }}>{lede}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>{primary}{secondary}</div>
      </Container>
      {credit && <span style={{
        position: "absolute", right: "var(--gutter)", bottom: "var(--space-6)",
        font: "var(--type-caption)", color: "rgba(255,255,255,.6)", textAlign: "right", maxWidth: "30ch"
      }}>{credit}</span>}
    </div>
  );
}

/* Dark CTA band with the estimate form. Used once per page, at the end. */
function EstimateBand({ title = "Tell us what you are looking at.", intro = "Photos of the yard help more than a paragraph. Send what you have and we will tell you what is possible on that ground." }) {
  return (
    <Section tone="dark">
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(32px,5vw,96px)", alignItems: "start" }}>
          <div>
            <SectionHead tone="dark" eyebrow="Free estimate" title={title} intro={intro} />
            <div style={{ marginTop: "var(--space-12)", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
              <Icon name="phone" size={18} color="var(--gold-500)" />
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} style={{ font: "var(--fw-light) 1.75rem/1 var(--font-display)", color: "#fff", textDecoration: "none" }}>{PHONE}</a>
            </div>
          </div>
          <EstimateForm tone="dark" />
        </div>
      </Container>
    </Section>
  );
}

/* Portrait on desktop, 4:3 on mobile so a stacked gallery does not become three screen-height cards. */
function useTileRatio(desktop = "3/4", mobile = "4/3") {
  const q = "(min-width:700px)";
  const [wide, setWide] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q); const on = (e) => setWide(e.matches);
    mq.addEventListener("change", on); return () => mq.removeEventListener("change", on);
  }, []);
  return wide ? desktop : mobile;
}


/* "Trusted by" logo cards — white rounded tiles on light grey; hover lifts with a gold
   "Click to view our work" band. Remote logos fall back to the name in type if they fail. */
const TRUSTED = [
  ["Progressive Dental Concepts", "https://www.progressivedentalconcepts.com/wp-content/uploads/logo-300x148.jpg", 56],
  ["MeadowView Dentistry", "../../assets/logos/meadowview-dentistry.png", 96],
  ["Panera Bread", "https://logos-world.net/wp-content/uploads/2022/01/Panera-Bread-Logo.png", 86],
  ["Sauvé Family Dentistry", "../../assets/logos/sauve.jpg", 64],
  ["Verizon", "../../assets/logos/verizon.png", 40],
  ["Bridge Street Dental Center", "../../assets/logos/bridge-street-dental.png", 72],
  ["PMI Property Management, Inc.", "../../assets/logos/pmi-property-management.png", 76],
  ["East Main Street Dental", "../../assets/logos/east-main-street-dental.png", 84],
  ["Advanced Dental Partners", "../../assets/logos/advanced-dental-partners.png", 64],
  ["Linglestown Family Dental", "../../assets/logos/linglestown-family-dental.png", 84]
];
function TrustedLogo({ name, src, h }) {
  const [ok, setOk] = React.useState(!!src);
  if (!ok) return <span style={{ font: "var(--fw-semibold) 1rem/1.25 var(--font-sans)", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--stone-700)", textAlign: "center", maxWidth: "14ch" }}>{name}</span>;
  return <img src={src} alt={name} onError={() => setOk(false)} referrerPolicy="no-referrer" style={{ height: (Math.min(1.15, Math.max(0.6, h / 72)) * 100).toFixed(0) + "%", maxHeight: "100%", maxWidth: "80%", width: "auto", display: "block", objectFit: "contain" }} />;
}
function TrustedCard({ name, src, h, onView }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button type="button" onClick={onView} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onFocus={() => setHov(true)} onBlur={() => setHov(false)}
      aria-label={name + " — view our work"}
      style={{ position: "relative", display: "flex", flexDirection: "column", padding: 0, border: `1px solid ${hov ? "#F7CB6B" : "transparent"}`, borderRadius: 16, background: "#fff", overflow: "hidden", cursor: "pointer", aspectRatio: "10/4.25",
        boxShadow: hov ? "0 18px 40px rgba(28,27,25,.12)" : "0 4px 18px rgba(28,27,25,.05)", transform: hov ? "translateY(-8px)" : "none",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)" }}>
      <span style={{ position: "absolute", left: 0, right: 0, top: "16%", height: "68%", display: "flex", alignItems: "center", justifyContent: "center" }}><TrustedLogo name={name} src={src} h={h} /></span>
      <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "#FFD166", color: "#1C1B19", font: "var(--fw-semibold) clamp(.6875rem,1.1vw,.9375rem)/1 var(--font-sans)", letterSpacing: ".08em", textTransform: "uppercase", padding: "clamp(11px,1.4vw,16px) 8px", textAlign: "center",
        transform: hov ? "translateY(0)" : "translateY(100%)", transition: "transform var(--dur-base) var(--ease-out)" }}>Click to view our work</span>
    </button>
  );
}
function TrustedBy({ onView }) {
  return (
    <section style={{ background: "#F4F5F6", padding: "clamp(56px,8vw,112px) 0" }}>
      <Container>
        <h2 style={{ font: "var(--fw-medium) clamp(1.125rem,2vw,1.625rem)/1 var(--font-sans)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--stone-600)", textAlign: "center", marginBottom: "clamp(32px,5vw,64px)" }}>Trusted by</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))", gap: "clamp(11px,2.3vw,38px)", maxWidth: 1480, margin: "0 auto" }}>
          {TRUSTED.map(([n, src, h]) => <TrustedCard key={n} name={n} src={src} h={h} onView={onView} />)}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { TrustedBy, useTileRatio, Container, Section, Reveal, Hero, EstimateBand, P, LOGO, PHONE, NS, Button, Eyebrow, SectionHead, StatRow, Icon, ProjectTile, ServiceRow, TownEntry, ReviewQuote, BeforeAfter, QuestionList, SiteHeader, SiteFooter, MobileCallBar, Field, EstimateForm });

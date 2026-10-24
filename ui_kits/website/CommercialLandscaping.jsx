/* Commercial landscaping. One job per section:
   hero → portfolio (credibility) → maintenance intro → scope → property types → how it works
   → snow cross-link → service area → FAQ → estimate. Add accounts by appending to CM_PORTFOLIO
   and CM_ORDER. Towns marked [VERIFY LOCATION] are not confirmed. */

const CM = "../../assets/photos/commercial/";
const CMF = (s) => CM + "commercial-landscaping-" + s + ".jpg";

function useCmWide(q = "(min-width:820px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}

/* Portfolio data. featured = larger slot. services stays [VERIFY] until confirmed per account. */
const CM_PORTFOLIO = {
  geigle: { name: "Geigle Funeral Home", town: "Colonial Park, PA", type: "Funeral home", scope: "Grounds maintenance", image: CMF("geigle-funeral-home-colonial-park-pa"), alt: "Manicured lawn, rounded shrubs and black-mulch beds across the front of Geigle Funeral Home in Colonial Park, Pennsylvania", note: "Formal frontage: shaped shrubs, clean black mulch and a full-width planting bed.", featured: true },
  advanced: { name: "Advanced Dental Partners", town: "[VERIFY LOCATION], PA", type: "Dental practice", scope: "Commercial grounds", image: CMF("advanced-dental-partners-pa"), alt: "Advanced Dental Partners sign in a freshly mulched bed with maintained lawn and trees", note: "Sign bed and tree rings freshly mulched, lawn cut and trimmed." },
  sauve: { name: "Sauvé Family Dentistry", town: "Camp Hill, PA", type: "Dental practice", scope: "Commercial grounds", image: CMF("sauve-family-dentistry-pa"), alt: "Sauvé Family Dentistry sign bed planted with roses, daylilies and shrubs", note: "Sign bed layered with roses, daylilies and shrubs." },
  eastmain: { name: "East Main Street Dental", town: "Harrisburg, PA", type: "Dental practice", scope: "Landscape maintenance", image: CMF("east-main-street-dental-harrisburg-pa"), alt: "Sheared foundation shrubs and beds along the front of East Main Street Dental in Harrisburg, Pennsylvania", note: "Foundation shrubs sheared to form along the walk." },
  meadowview: { name: "MeadowView Dental", town: "Dillsburg, PA", type: "Dental practice", scope: "Commercial landscaping", image: CMF("meadowview-dental-dillsburg-pa"), alt: "Striped lawn and a round black-mulch bed around the MeadowView Dental sign in Dillsburg, Pennsylvania", note: "Striped turf and a hand-cut ring of black mulch at the sign." },
  verizon: { name: "Verizon", town: "Harrisburg, PA", type: "Retail", scope: "Commercial landscape work", image: CMF("verizon-pa"), alt: "Alejandro's crew in branded safety vests working the landscape beds along a Verizon store in Pennsylvania", note: "Our crew on site, cutting back and clearing the beds along the building.", featured: true },
  linglestown: { name: "Linglestown Family Dental", town: "Linglestown, PA", type: "Dental practice", scope: "Commercial landscaping", images: [[CMF("linglestown-family-dental-mulch-colonial-park-pa"), "Black mulch", "Linglestown Family Dental sign bed finished in black mulch"], [CMF("linglestown-family-dental-river-rock-colonial-park-pa"), "River rock", "Linglestown Family Dental sign bed finished in tan river rock"]], note: "The same sign bed, shown in two finishes." },
  bridge: { name: "Bridge Street Dental Center", town: "New Cumberland, PA", type: "Dental practice", scope: "Commercial landscaping", image: CMF("bridge-street-dental-new-cumberland-pa"), alt: "Curved sign bed with hostas and up-lights at Bridge Street Dental Center in New Cumberland, Pennsylvania", note: "Hostas and sign lighting in a crisp-edged bed." },
  fpa: { name: "Family Physician Associates of New Cumberland", town: "New Cumberland, PA", type: "Medical practice", scope: "Commercial grounds", image: CMF("family-physician-associates-new-cumberland-pa"), alt: "Mulched corner sign bed and maintained lawn at Family Physician Associates of New Cumberland", note: "Corner sign bed, shrub care and a fresh edge." }
};

const CM_ORDER = [
  ["verizon", "Verizon", "45% 50%"],
  ["geigle", "Geigle Funeral Home", "50% 60%"],
  ["advanced", "Advanced Dental Partners", "50% 55%"],
  ["meadowview", "MeadowView Dental", "50% 62%"],
  ["eastmain", "East Main Street Dental", "50% 50%"],
  ["linglestown", "Linglestown Family Dental", "50% 50%"],
  ["sauve", "Sauvé Family Dentistry", "50% 50%"],
  ["bridge", "Bridge Street Dental Center", "50% 50%"],
  ["fpa", "Family Physician Associates", "50% 50%"]
];

/* Tree trimming / removal left out: those pages were removed and the service is unconfirmed. */
const CM_SCOPE = [
  ["01", "Lawn & grounds", ["Commercial mowing", "Edging", "Sod & lawn work", "Routine grounds care"], CM + "commercial-mowing-striped-slope-central-pa.jpg", "Striped commercial lawn mowed across a slope", ["Sod installation", "/landscaping/sod-installation"]],
  ["02", "Beds & landscaping", ["Mulch & bed work", "Landscape installation", "Planting", "Seasonal landscape improvements"], CM + "commercial-landscaping-managed-property-beds-central-pa.jpg", "Mulched planting beds and shrubs at a managed commercial property", ["Mulch & bed work", "/landscaping/mulch-beds"]],
  ["03", "Shrubs & hedges", ["Shrub & hedge trimming", "Foundation shrub shaping", "Hedge maintenance"], CM + "east-main.jpg", "Sheared foundation shrubs along a commercial building", ["Shrub & hedge trimming", "/landscaping/trimming"]],
  ["04", "Seasonal & property work", ["Spring & fall cleanups", "Grading & drainage", "Landscape lighting", "Property improvements"], CM + "commercial-landscaping-office-entrance-central-pa.jpg", "Office entrance with maintained beds and walkway", ["Grading & drainage", "/grading-drainage"]]
];

const CM_PROP_TYPES = [
  ["Medical & dental offices", "Maintain entrances, lawns, beds and high-visibility areas around practices where the exterior is part of the patient experience."],
  ["Professional offices", "Routine grounds maintenance for offices that need a clean, consistent exterior throughout the growing season."],
  ["Retail & commercial properties", "Landscape maintenance for customer-facing commercial sites where curb appeal and clear access matter."],
  ["HOAs & managed properties", "Coordinated grounds care for shared spaces and managed properties with recurring landscape needs."]
];

const CM_HOW = [
  ["01", "Walk the property", "We review the grounds, existing landscaping and the areas that need recurring or seasonal attention."],
  ["02", "Build the scope", "The maintenance plan is based on the work the property actually needs rather than forcing every site into the same package."],
  ["03", "Maintain the grounds", "The crew handles the agreed landscaping and grounds work throughout the service period."]
];

const CM_AREAS = ["New Cumberland", "Camp Hill", "Mechanicsburg", "Harrisburg", "Hershey"];

function CmFaq({ q, children, first }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: first ? "1px solid var(--border-strong)" : "1px solid var(--border-hairline)" }}>
      <h3 style={{ margin: 0 }}>
        <button onClick={() => setOpen(!open)} aria-expanded={open}
          style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-4)", background: "none", border: 0, cursor: "pointer", padding: "var(--space-5) 0", minHeight: 56, textAlign: "left",
            font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)" }}>
          <span>{q}</span>
          <span aria-hidden="true" style={{ color: "var(--gold-text)", font: "var(--fw-regular) 1.25rem/1 var(--font-sans)", flex: "0 0 auto", transform: open ? "rotate(45deg)" : "none", transition: "transform var(--dur-fast) var(--ease-out)" }}>+</span>
        </button>
      </h3>
      <div hidden={!open} style={{ paddingBottom: "var(--space-5)" }}>
        <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "64ch" }}>{children}</p>
      </div>
    </div>
  );
}

function CommercialLandscaping({ go }) {
  const wide = useCmWide();
  const P_ = CM_PORTFOLIO;
  const nav = (h) => (e) => { e.preventDefault(); go(h); };
  const link = (label, href, inverse) => (
    <a href={href} onClick={nav(href)} style={{ display: "inline-flex", alignItems: "center", minHeight: 44, font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: inverse ? "var(--text-on-dark)" : "var(--green-800)", textDecoration: "none" }}>
      <span style={{ borderBottom: "1px solid var(--gold-500)", paddingBottom: 5 }}>{label} →</span>
    </a>
  );
  const inlineLink = (label, href) => <a href={href} onClick={nav(href)}>{label}</a>;
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;


  const h2 = (text, inverse, max = "16ch") => <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", maxWidth: max, textWrap: "balance" }}>{text}</h2>;
  const lede = (text, inverse) => <p style={{ font: wide ? "var(--type-body)" : "var(--type-small)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "54ch" }}>{text}</p>;

  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Commercial" onNavigate={go} />

      {/* 01 — Hero */}
      <section style={{ position: "relative", minHeight: wide ? "min(88vh,820px)" : "min(82vh,640px)", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--green-950)" }}>
        <img src={CM + "commercial-lawn-striping-central-pa.jpg"} alt="Commercial lawn freshly mowed in crisp alternating stripes" fetchpriority="high"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 55%" }} />
        <div style={{ position: "absolute", inset: 0, background: wide ? "linear-gradient(90deg,rgba(10,36,22,.82) 0%,rgba(10,36,22,.5) 46%,rgba(10,36,22,.08) 82%)" : "linear-gradient(180deg,rgba(10,36,22,.25) 0%,rgba(10,36,22,.55) 45%,rgba(10,36,22,.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,36,22,.5) 0%,rgba(10,36,22,0) 26%)" }} />
        <Container style={{ position: "relative", width: "100%", paddingTop: 140, paddingBottom: wide ? "clamp(56px,7vw,104px)" : "var(--space-12)" }}>
          <Eyebrow tone="inverse" rule style={{ marginBottom: wide ? "var(--space-8)" : "var(--space-5)" }}>Commercial landscaping</Eyebrow>
          <h1 style={{ font: wide ? "var(--type-display)" : "var(--fw-regular) clamp(2.75rem,12.5vw,3.375rem)/1.02 var(--font-display)", letterSpacing: "var(--ls-display)", color: "#fff", maxWidth: "14ch", textWrap: "balance" }}>Commercial landscaping built around your property.</h1>
          <p style={{ font: wide ? "var(--type-lead)" : "var(--type-small)", color: "rgba(255,255,255,.9)", maxWidth: "50ch", marginTop: wide ? "var(--space-8)" : "var(--space-5)" }}>Commercial landscaping and grounds maintenance for businesses, medical offices, managed properties and commercial sites throughout the Harrisburg area and surrounding Central Pennsylvania communities.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: wide ? "var(--space-10)" : "var(--space-6)" }}>
            <Button variant="solidLight" size={wide ? "lg" : "md"} href="#estimate">Request a commercial estimate</Button>
            <Button variant="inverse" size={wide ? "lg" : "md"} href={tel}><Icon name="phone" size={16} />{PHONE}</Button>
          </div>
          <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginTop: wide ? "var(--space-8)" : "var(--space-5)" }}>Offices · Medical · Retail · Managed properties</div>
        </Container>
      </section>

      <TrustedBy onView={() => { const el = document.getElementById("portfolio"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); }} />

      {/* 02 — Portfolio */}
      <Section tone="light" tight={!wide} id="portfolio">
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Commercial experience</Eyebrow>
            {h2("Properties we maintain across Central PA.")}
            {lede("Alejandro's provides commercial landscaping and grounds maintenance for businesses and managed properties throughout the Harrisburg area.")}
          </Reveal>
          <ul style={{ listStyle: "none", margin: wide ? "var(--space-12) 0 0" : "var(--space-8) 0 0", padding: 0, display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "var(--space-10) clamp(16px,2.2vw,32px)" : "var(--space-6) 12px" }}>
            {CM_ORDER.map(([k, label, pos], i) => {
              const it = P_[k];
              const src = it.image || it.images[0][0];
              const alt = it.alt || it.images[0][2];
              return (
                <li key={k} style={{ minWidth: 0 }}>
                  <Reveal delay={(i % 3) * 60}>
                    <figure style={{ margin: 0 }}>
                      <img src={src} alt={alt} loading="lazy" width="900" height="675"
                        style={{ width: "100%", height: "auto", aspectRatio: wide ? "3/2" : "4/3", objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block", background: "var(--stone-200)" }} />
                      <figcaption style={{ marginTop: wide ? "var(--space-3)" : "var(--space-2)" }}>
                        <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-primary)", lineHeight: 1.35 }}>{label}</h3>
                        <div style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: 2 }}>{it.town}</div>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* 03 — Mowing — two real striping shots, compact */}
      <Section tone="sunken" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,.9fr) minmax(0,1.1fr) minmax(0,1.1fr)" : "repeat(2,minmax(0,1fr))", gap: wide ? "clamp(20px,2.4vw,36px)" : 10, alignItems: "end" }}>
            <Reveal style={{ gridColumn: wide ? "auto" : "span 2", marginBottom: wide ? 0 : "var(--space-4)" }}>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Commercial mowing</Eyebrow>
              {h2("Lines you can see from the road.", false, "13ch")}
            </Reveal>
            {[["commercial-mowing-striped-hillside-central-pa.jpg", "Wide commercial lawn mowed in curved stripes along a hillside", "50% 70%"],
              ["commercial-mowing-diamond-stripes-central-pa.jpg", "Commercial lawn mowed in a diamond stripe pattern", "50% 60%"]].map(([f, alt, pos], i) => (
              <Reveal key={f} delay={i * 70}>
                <img src={CM + f} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block" }} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 04 — Scope of work */}
      <Section tone="light" tight={!wide}>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Commercial landscaping services</Eyebrow>
            {h2("One crew for the grounds around your property.", false, "18ch")}
            {lede("Commercial maintenance can include routine grounds care, seasonal work and landscape improvements based on the needs of the property.")}
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)", gap: wide ? "var(--space-12) clamp(28px,4vw,64px)" : "var(--space-6)", marginTop: wide ? "var(--space-12)" : "var(--space-8)" }}>
            {CM_SCOPE.map(([n, h, list, img, alt, lk], i) => (
              <Reveal key={n} delay={(i % 2) * 70}>
                <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "112px minmax(0,1fr)", gap: wide ? "var(--space-6)" : "var(--space-4)", alignItems: "start", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-5)" }}>
                  <img src={img} alt={alt} loading="lazy" width="900" height="600" style={{ width: "100%", height: "auto", aspectRatio: "3/2", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />
                  <div>
                    <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)" }}>{n}</span>
                    <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", margin: "var(--space-2) 0 var(--space-3)" }}>{h}</h3>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                      {list.map((l) => <li key={l} style={{ font: "var(--type-small)", color: "var(--text-secondary)" }}>{l}</li>)}
                    </ul>
                    {wide && <div style={{ marginTop: "var(--space-3)" }}>{link(lk[0], lk[1])}</div>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 05 — Property types */}
      <Section tone="dark" tight={!wide}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,.9fr) minmax(0,1.3fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-8)", alignItems: "start" }}>
            <Reveal>
              <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-500)", marginBottom: "var(--space-5)" }}>Commercial properties</div>
              {h2("Built for properties people see every day.", true, "14ch")}
              {lede("Commercial landscaping needs vary by property, traffic, visibility and the amount of grounds surrounding the site.", true)}
            </Reveal>
            <Reveal delay={80}>
              <dl style={{ margin: 0 }}>
                {CM_PROP_TYPES.map(([h, d], i) => (
                  <div key={h} style={{ borderTop: i ? "1px solid var(--border-dark)" : "1px solid var(--gold-500)", padding: wide ? "var(--space-6) 0" : "var(--space-4) 0" }}>
                    <dt style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-on-dark)", marginBottom: "var(--space-2)" }}>{h}</dt>
                    <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-on-dark-secondary)", maxWidth: "56ch" }}>{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 06 — How it works */}
      <Section tone="light" tight={!wide}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.1fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-6)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Working with Alejandro's</Eyebrow>
              {h2("A maintenance plan built around the property.", false, "15ch")}
              <ol style={{ listStyle: "none", margin: wide ? "var(--space-10) 0 0" : "var(--space-6) 0 0", padding: 0 }}>
                {CM_HOW.map(([n, h, d]) => (
                  <li key={n} style={{ display: "grid", gridTemplateColumns: "40px minmax(0,1fr)", gap: "var(--space-3)", borderTop: "1px solid var(--border-hairline)", padding: wide ? "var(--space-5) 0" : "var(--space-4) 0" }}>
                    <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)", paddingTop: 2 }}>{n}</span>
                    <div>
                      <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", marginBottom: "var(--space-2)" }}>{h}</h3>
                      <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "48ch" }}>{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={80}>
              <img src={CM + "commercial-grounds-office-beds-truck-central-pa.jpg"} alt="Fresh black mulch beds, ornamental grasses and a new tree at a commercial office, with Alejandro's work truck in the lot" loading="lazy" width="414" height="414"
                style={{ width: "100%", height: "auto", aspectRatio: wide ? "1/1" : "16/9", maxHeight: wide ? 520 : 240, objectFit: "cover", objectPosition: "50% 62%", borderRadius: "var(--radius-image)", display: "block" }} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 07 — Snow cross-link */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--green-950)" }}>
        <img src={CM + "commercial-snow-removal-office-lot-central-pa.jpg"} alt="" aria-hidden="true" loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} />
        <div style={{ position: "absolute", inset: 0, background: wide ? "linear-gradient(90deg,rgba(10,36,22,.92) 0%,rgba(10,36,22,.72) 55%,rgba(10,36,22,.35) 100%)" : "rgba(10,36,22,.8)" }} />
        <Container style={{ position: "relative", padding: wide ? "var(--space-20) var(--gutter)" : "var(--space-12) var(--gutter)" }}>
          <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: "var(--space-4)" }}>Year-round property care</div>
          <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "#fff", maxWidth: "18ch" }}>Landscaping when it's green. Snow removal when it's white.</h2>
          <p style={{ font: wide ? "var(--type-body)" : "var(--type-small)", color: "rgba(255,255,255,.86)", marginTop: "var(--space-4)", maxWidth: "48ch" }}>Alejandro's also provides commercial snow removal for businesses and managed properties throughout the service area.</p>
          <div style={{ marginTop: "var(--space-5)" }}>{link("Explore commercial snow removal", "/commercial/snow-removal", true)}</div>
        </Container>
      </section>

      {/* 08 — Service area */}
      <Section tone="light" tight={!wide}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.2fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-6)", alignItems: "end" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Commercial landscaping service area</Eyebrow>
              {h2("Commercial landscaping throughout the Harrisburg area.", false, "17ch")}
              {lede("Alejandro's serves commercial properties in New Cumberland, Camp Hill, Mechanicsburg, Harrisburg, Hershey and surrounding communities within the company's Central Pennsylvania service area.")}
            </Reveal>
            <Reveal delay={80}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--gold-500)" }}>
                {CM_AREAS.map((a) => <li key={a} style={{ font: "var(--fw-regular) 1.125rem/1.3 var(--font-display)", color: "var(--text-primary)", padding: "var(--space-3) 0", borderBottom: "1px solid var(--border-hairline)" }}>{a}</li>)}
              </ul>
              <div style={{ marginTop: "var(--space-4)" }}>{link("View all service areas", "/service-area")}</div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 09 — FAQ */}
      <Section tone="sunken" tight={!wide}>
        <Container width="var(--container-text)">
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-5)" }}>Commercial landscaping FAQ</Eyebrow>
            {h2("Questions about commercial grounds maintenance.", false, "18ch")}
          </Reveal>
          <div style={{ marginTop: wide ? "var(--space-10)" : "var(--space-6)" }}>
            <CmFaq first q="What types of commercial properties do you service?">Medical and dental offices, professional offices, customer-facing businesses, managed properties and similar commercial sites. Most of our current commercial portfolio is medical and dental practices around the Harrisburg area.</CmFaq>
            <CmFaq q="Do you offer recurring commercial landscaping?">Yes. Commercial work can be set up around the property's recurring grounds-maintenance needs, with seasonal work such as cleanups and mulch added to the same scope. [VERIFY HOW RECURRING SERVICE IS SCHEDULED AND BILLED.]</CmFaq>
            <CmFaq q="What commercial landscaping services do you provide?">Mowing and edging, {inlineLink("mulch and bed work", "/landscaping/mulch-beds")}, shrub and hedge trimming, spring and fall cleanups, {inlineLink("landscape installation", "/landscaping/installation")}, sod and lawn work, and {inlineLink("grading and drainage", "/grading-drainage")} where landscape areas need it.</CmFaq>
            <CmFaq q="Do you provide commercial snow removal?">Yes. Alejandro's provides {inlineLink("commercial snow removal", "/commercial/snow-removal")} for businesses and managed properties throughout the service area.</CmFaq>
            <CmFaq q="What areas do you serve?">New Cumberland, Camp Hill, Mechanicsburg, Harrisburg, Hershey and the surrounding communities within our Central Pennsylvania {inlineLink("service area", "/service-area")}.</CmFaq>
            <CmFaq q="How do I get an estimate for my commercial property?">Request an estimate below or call {PHONE}. The first step is a look at the property, so the scope and price are based on the actual grounds rather than a standard package.</CmFaq>
          </div>
        </Container>
      </Section>

      {/* 10 — Final CTA */}
      <div id="estimate">
        <Section tone="dark" tight={!wide}>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-8)", alignItems: "start" }}>
              <div>
                <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-500)", marginBottom: "var(--space-5)" }}>Commercial landscaping</div>
                {h2("Let's walk the property.", true, "14ch")}
                {lede("Tell us about your commercial property and the grounds work you need. We'll start by looking at the site and building the scope around it.", true)}
                <div style={{ marginTop: "var(--space-6)" }}>
                  <Button variant="inverse" size={wide ? "lg" : "md"} href={tel}><Icon name="phone" size={16} />Call {PHONE}</Button>
                </div>
              </div>
              <EstimateForm tone="dark" projects={["Commercial grounds maintenance", "Mulch & bed work", "Shrub & hedge trimming", "Seasonal cleanup", "Landscape installation", "Commercial snow removal", "Not sure yet"]} />
            </div>
          </Container>
        </Section>
      </div>

      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.CommercialLandscaping = CommercialLandscaping;

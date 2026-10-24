/* Town pages. Only towns with documented local projects get a page; the rest stay listed on
   /service-areas/. Distinctness comes from real local work, not invented town facts. */

const TOWNS_DATA = [
  { slug: "new-cumberland-pa", town: "New Cumberland", county: "Cumberland County",
    intro: "Alejandro's Landscaping is based in New Cumberland and does landscaping, hardscaping and commercial grounds work across the borough and the neighbouring west shore towns.",
    note: "This is home ground for the crew, so New Cumberland jobs are the shortest drive on the schedule.",
    hero: "dw-proof2.jpg", heroAlt: "Paver parking area and walkway in front of a brick home in New Cumberland, PA" },
  { slug: "mechanicsburg-pa", town: "Mechanicsburg", county: "Cumberland County",
    intro: "Alejandro's Landscaping builds patios, retaining walls, fire features and landscape beds in Mechanicsburg, about seven miles from our base in New Cumberland.",
    note: "Most of our Mechanicsburg work so far has been backyard hardscaping: patios, walls and fire features.",
    hero: "pool-pavers-after.jpg", heroAlt: "Rebuilt paver pool patio at a home in Mechanicsburg, PA" },
  { slug: "camp-hill-pa", town: "Camp Hill", county: "Cumberland County",
    intro: "Alejandro's Landscaping does landscape installation, bed work and hardscaping in Camp Hill, a few minutes from our base in New Cumberland.",
    note: "Our documented Camp Hill work so far is planting and bed work: new beds, stone edging and layered shrubs.",
    hero: "landscape-island-bed-fieldstone.jpg", heroAlt: "Curved island bed with fieldstone edging and layered shrubs at a home in Camp Hill, PA" }
];
/* Every other town in the 20-mile radius gets a page too. Without a documented local project,
   the page shows recent work from nearby towns, labelled with the town it was actually done in. */
const TOWN_COUNTY = {
  "Cumberland County": ["Lemoyne", "Wormleysburg", "Shiremanstown", "Enola", "Summerdale", "Lisburn", "Grantham", "Boiling Springs", "New Kingstown", "Carlisle", "Mount Holly Springs"],
  "Dauphin County": ["Highspire", "Steelton", "Harrisburg", "Paxtang", "Penbrook", "Middletown", "Colonial Park", "Linglestown", "Dauphin", "Hummelstown", "Hershey", "Grantville"],
  "York County": ["Lewisberry", "Goldsboro", "Etters", "Newberrytown", "Dillsburg", "Wellsville", "Rossville", "Emigsville", "Franklintown", "Manchester", "Mount Wolf", "Dover", "York"],
  "Perry County": ["Marysville", "Shermans Dale", "New Bloomfield"],
  "Lancaster County": ["Bainbridge", "Elizabethtown", "Maytown"],
  "Lebanon County": ["Campbelltown", "Palmyra"]
};
const TOWN_RING = { "0–8 miles": ["Lemoyne", "Wormleysburg", "Highspire", "Steelton", "Harrisburg", "Shiremanstown", "Lewisberry", "Goldsboro", "Etters", "Enola", "Summerdale", "Marysville"],
  "8–15 miles": ["Paxtang", "Penbrook", "Newberrytown", "Middletown", "Colonial Park", "Lisburn", "Dillsburg", "Grantham", "Linglestown", "Dauphin", "Hummelstown", "Boiling Springs", "Wellsville", "New Kingstown", "Shermans Dale", "Hershey"] };
const TOWN_HEROES = [["patio-raised-wall-dusk.jpg", "Raised paver patio with lit steps at dusk, built by Alejandro's Landscaping"], ["firepit-seatwall-night.jpg", "Seat wall and fire pit lit at night, built by Alejandro's Landscaping"], ["patio-pool-pavers.jpg", "Paver pool patio built by Alejandro's Landscaping"], ["stone-edge-bed.jpg", "Stone-edged planting bed installed by Alejandro's Landscaping"], ["hero-firepit-wall-night.jpg", "Retaining wall and fire pit lit at night, built by Alejandro's Landscaping"]];
Object.entries(TOWN_COUNTY).forEach(([county, towns]) => towns.forEach((town) => {
  const slug = town.toLowerCase().replace(/ /g, "-") + "-pa";
  if (TOWNS_DATA.some((x) => x.slug === slug)) return;
  const ring = Object.keys(TOWN_RING).find((r) => TOWN_RING[r].includes(town));
  const where = ring === "0–8 miles" ? "within about eight miles of" : ring === "8–15 miles" ? "about eight to fifteen miles from" : "about fifteen to twenty miles from";
  const [hero, heroAlt] = TOWN_HEROES[TOWNS_DATA.length % TOWN_HEROES.length];
  TOWNS_DATA.push({ slug, town, county, hero, heroAlt, generic: true,
    intro: `Alejandro's Landscaping does landscaping, hardscaping and commercial grounds work in ${town}, ${where} our base in New Cumberland.`,
    note: `We haven't published a completed project in ${town} yet. Here's recent work from nearby towns, labelled with where it was done.` });
}));

const TOWN_SERVICES = [
  ["Paver patios", "/hardscaping/paver-patios", "New patios, rebuilds and patios with steps, seat walls or fire features."],
  ["Retaining walls", "/hardscaping/retaining-walls", "Walls that hold a slope or support a patio or walkway."],
  ["Walkways & steps", "/hardscaping/walkways", "Front walks and entry steps built on a compacted stone base."],
  ["Paver driveways", "/hardscaping/paver-driveways", "Paver driveways and parking areas with matching walks."],
  ["Landscape installation", "/landscaping/installation", "New beds, shrubs, decorative stone and edging."],
  ["Mulch & bed work", "/landscaping/mulch-beds", "Re-cutting bed edges and refreshing mulch."],
  ["Shrub & hedge trimming", "/landscaping/trimming", "Shaping shrubs and hedges, and dealing with overgrown ones."],
  ["Commercial landscaping", "/commercial/landscaping", "Grounds maintenance for offices, practices and managed properties."]
];

function useWideTP(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}
const tpLabel = { font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)" };

function townProjects(town) {
  const s = (window.PROJECT_STUDIES || []).filter((p) => p.townVerified && p.town.startsWith(town)).map((p) => ({ img: p.hero, alt: p.heroAlt, title: p.short, scope: p.result, href: "/projects/" + p.slug, study: true }));
  const c = (window.PROJECT_CARDS || []).filter((p) => p.town.startsWith(town)).map((p) => ({ img: p.img, alt: p.alt, title: p.title, scope: p.scope, href: p.href }));
  return [...s, ...c];
}
function nearbyProjects() {
  return (window.PROJECT_STUDIES || []).filter((p) => p.townVerified).map((p) => ({ img: p.hero, alt: p.heroAlt, title: p.short, place: p.town, scope: p.result, href: "/projects/" + p.slug, study: true }));
}

function TownPage({ go, slug }) {
  const wide = useWideTP();
  const t = TOWNS_DATA.find((x) => x.slug === slug);
  const link = (href) => (e) => { e.preventDefault(); go(href); };
  React.useEffect(() => { if (t && window.setHead) window.setHead(`Landscaping & Hardscaping in ${t.town}, PA | Alejandro's`, `Patios, walls, walkways, landscape installation and commercial grounds work in ${t.town}, PA by Alejandro's Landscaping, with completed local projects.`, "/service-areas/" + t.slug + "/", [["Home", "/"], ["Service areas", "/service-areas/"], [t.town, "/service-areas/" + t.slug + "/"]]); }, [slug]);
  if (!t) return null;
  const own = townProjects(t.town);
  const work = own.length ? own : nearbyProjects();
  const faq = [
    { question: `Does Alejandro's Landscaping serve ${t.town}?`, answer: `Yes. ${t.town} is inside our regular service area, which covers towns within about twenty miles of New Cumberland.` },
    { question: `What services are available in ${t.town}?`, answer: `The same landscaping, hardscaping and commercial services we offer across the area: patios, walls, walkways, driveways, landscape installation, bed work and trimming. Each is linked above.` },
    { question: "Can landscaping and hardscaping be done as one project?", answer: "Yes. We build the patio or wall and do the beds and planting around it, so one crew handles the whole job." },
    { question: "How do I request an estimate?", answer: "Use the form below or call (717) 736-6538. Photos of the area and a rough size help us understand the job before we visit." }
  ];
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} active="Areas" onNavigate={go} />
      <Section tone="light" tight>
        <Container>
          <nav aria-label="Breadcrumb" style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
            <a href="/" onClick={link("/")}>Home</a> / <a href="/service-areas/" onClick={link("/service-area")}>Service areas</a> / <span>{t.town}</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.2fr)" : "minmax(0,1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "center" }}>
            <div>
              <div style={tpLabel}>{t.county}</div>
              <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", marginTop: "var(--space-3)", maxWidth: "14ch" }}>Landscaping &amp; Hardscaping in {t.town}, PA</h1>
              <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", marginTop: "var(--space-5)", maxWidth: "46ch" }}>{t.intro}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
                <Button variant="primary" size="lg" href="#estimate" onClick={link("#estimate")}>Request an estimate</Button>
                <Button variant="outline" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
              </div>
            </div>
            <img src={P + t.hero} alt={t.heroAlt} fetchpriority="high" style={{ width: "100%", aspectRatio: wide ? "4/3" : "16/10", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block", order: wide ? 0 : -1 }} />
          </div>
        </Container>
      </Section>

      {work.length > 0 && (
        <Section tone="sunken" tight>
          <Container>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)" }}>{own.length ? `Completed projects in ${t.town}` : "Recent work nearby"}</h2>
            <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-3)", maxWidth: "52ch" }}>{t.note}</p>
            <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))", gap: wide ? "var(--space-8) var(--gap-grid)" : "var(--space-5) 12px", marginTop: "var(--space-8)" }}>
              {work.map((p) => (
                <a key={p.title} href={p.href} onClick={link(p.href)} style={{ textDecoration: "none", color: "inherit", minWidth: 0 }}>
                  <img src={P + p.img} alt={p.alt} loading="lazy" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />
                  {p.place && <div style={{ ...tpLabel, marginTop: "var(--space-3)" }}>{p.place}</div>}
                  <div style={{ font: "var(--fw-regular) 1rem/1.3 var(--font-display)", marginTop: p.place ? 2 : "var(--space-3)" }}>{p.title}</div>
                  {wide && <p style={{ font: "var(--type-caption)", color: "var(--text-secondary)", marginTop: 4 }}>{p.scope}</p>}
                  {p.study && <div style={{ ...tpLabel, color: "var(--green-800)", marginTop: "var(--space-2)" }}>View project →</div>}
                </a>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="light" tight>
        <Container>
          <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)" }}>Services in {t.town}</h2>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(24px,4vw,56px)", marginTop: "var(--space-6)" }}>
            {TOWN_SERVICES.map(([h, href, d]) => (
              <div key={h} style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-4) 0" }}>
                <a href={href} onClick={link(href)} style={{ font: "var(--type-h4)", textDecoration: "none", color: "var(--green-800)" }}>{h} →</a>
                <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: 4 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="sunken" tight>
        <Container>
          <h2 style={{ font: "var(--type-h3)", marginBottom: "var(--space-6)" }}>Questions about working in {t.town}</h2>
          <QuestionList items={faq} />
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title={`Planning a project in ${t.town}?`} intro="Send a photo of the area and a rough size. We'll come out, walk it with you and give you a written estimate." /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
Object.assign(window, { TownPage, TOWNS_DATA });

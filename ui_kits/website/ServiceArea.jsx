/* Service area page — modelled on Costa Custom Pools. Every town block carries operational
   fact, not the town name repeated. Towns without real notes belong on a county page instead. */

const TOWNS = [
  ["Camp Hill", "Cumberland County", "3 mi", "stone-edge-bed.jpg", "[VERIFY CAMP HILL CONDITIONS WITH DORIAN — soil, typical grade, borough permit process, what actually goes wrong on these lots.] Two to four short declarative sentences of operational fact. Nothing plausible-sounding goes here until it is confirmed."],
  ["Mechanicsburg", "Cumberland County", "7 mi", "patio-pool-pavers.jpg", "[VERIFY MECHANICSBURG CONDITIONS — which developments run architectural review, township permit thresholds, ground conditions encountered.]"],
  ["New Cumberland", "Cumberland County", "0 mi", "patio-pergola-mulch.jpg", "[VERIFY NEW CUMBERLAND CONDITIONS — home ground, so this should be the most specific block on the page. Access constraints, borough permitting, ground near the river.]"],
  ["Harrisburg", "Dauphin County", "4 mi", "residential-lawn-beds.jpg", "[VERIFY HARRISBURG CONDITIONS — city permitting, street staging, access on rowhome lots, which neighbourhoods work is actually done in.]"],
  ["Hershey", "Dauphin County", "15 mi", "commercial-property-beds.jpg", "[VERIFY HERSHEY / DERRY TOWNSHIP CONDITIONS — approval process, HOA review, ground conditions.]"],
  ["Lemoyne", "Cumberland County", "2 mi", "firepit-seatwall-night.jpg", "[VERIFY LEMOYNE CONDITIONS — slope off the ridge, borough wall permit threshold, typical project type here.]"],
  ["Enola", "Cumberland County", "6 mi", "patio-pool-pavers.jpg", "[VERIFY ENOLA / EAST PENNSBORO CONDITIONS — lot character, mature tree roots, permitting.]"],
  ["Mechanicsburg — commercial", "Cumberland County", "7 mi", "commercial-mowing-stripes.jpg", "[VERIFY COMMERCIAL WORK IN THIS CORRIDOR — confirm commercial is real revenue before this block publishes at all.]"]
];

const RINGS = [
  ["0–8 miles", ["New Cumberland", "Lemoyne", "Wormleysburg", "Camp Hill", "Highspire", "Steelton", "Harrisburg", "Shiremanstown", "Lewisberry", "Goldsboro", "Etters", "Enola", "Summerdale", "Marysville", "Mechanicsburg"]],
  ["8–15 miles", ["Paxtang", "Penbrook", "Newberrytown", "Middletown", "Colonial Park", "Lisburn", "Dillsburg", "Grantham", "Linglestown", "Dauphin", "Hummelstown", "Boiling Springs", "Wellsville", "New Kingstown", "Shermans Dale", "Hershey"]],
  ["15–20 miles", ["Rossville", "Emigsville", "Franklintown", "Manchester", "Mount Wolf", "New Bloomfield", "Carlisle", "Grantville", "Dover", "Bainbridge", "Elizabethtown", "Mount Holly Springs", "Campbelltown", "York", "Palmyra", "Maytown"]]
];

const townSlug = (n) => n.toLowerCase().replace(/ /g, "-") + "-pa";
function ServiceArea({ go }) {
  const toTown = (n) => (e) => { e.preventDefault(); go("/service-areas/" + townSlug(n)); };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} active="Areas" onNavigate={go} />

      <Section tone="light" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-6)" }}>Where we work</Eyebrow>
            <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", maxWidth: "17ch", marginBottom: "var(--space-8)", textWrap: "balance" }}>Landscaping &amp; Hardscaping Service Areas</h1>
            <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "var(--measure-lead)" }}>
              The radius crosses six counties and the ground changes across all of them. [VERIFY REGIONAL SOIL AND GRADE CHARACTERISTICS with Dorian before this line publishes.]
            </p>
          </Reveal>
          <Reveal delay={100} style={{ marginTop: "var(--space-16)" }}>
            <img src={P + "hero-firepit-wall-night.jpg"} alt="Retaining wall and firepit lit at night" style={{ width: "100%", aspectRatio: "21/9", objectFit: "cover", borderRadius: "var(--radius-image)" }} />
          </Reveal>
          <Reveal delay={140} style={{ marginTop: "var(--space-12)" }}>
            <StatRow items={[
              { value: "6", label: "Counties inside the radius — Cumberland, Dauphin, York, Perry, Lancaster, Lebanon" },
              { value: "20 mi", label: "Working radius, measured from New Cumberland" },
              { value: String((window.TOWNS_DATA || []).length || 47), label: "Towns, each with a page of its own" }
            ]} />
          </Reveal>
        </Container>
      </Section>

      <Section tone="sunken">
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(28px,3.5vw,56px)" }}>
            {TOWNS.filter(([town]) => !town.includes("—")).map(([town, county, dist, img, notes], i) => (
              <Reveal key={town} delay={(i % 3) * 70}>
                <TownEntry town={town} county={county} distance={dist} image={P + img} alt={`${town} project`} notes={notes} href={"/service-areas/" + townSlug(town) + "/"} onClick={toTown(town)} />
              </Reveal>
            ))}
          </div>
          <Reveal><p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-12)", maxWidth: "68ch" }}>
            Town notes above are [VERIFY] markers, not content. Each needs what Alejandro's actually encounters in that town — permit office, soil, slope, HOA review, access. That specificity is what a competitor cannot copy, and it is the only thing that earns a town its own page.
          </p></Reveal>
        </Container>
      </Section>

      {/* Everything else — grouped by ring, as flowing text rather than a grid of bare links */}
      <Section tone="light" tight>
        <Container>
          <Reveal><SectionHead eyebrow="The rest of the radius" title="Towns we reach, grouped by drive."
            intro="Covered from the same shop on the same schedule. Tap a town to see the services and recent work for it." /></Reveal>
          <div style={{ marginTop: "var(--space-12)" }}>
            {RINGS.map(([label, towns], i) => (
              <Reveal key={label} delay={i * 80}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(120px,180px) 1fr", gap: "clamp(20px,4vw,64px)", padding: "var(--space-8) 0", borderTop: "1px solid var(--border-hairline)" }}>
                  <h3 style={{ font: "var(--type-h4)", color: "var(--text-primary)" }}>{label}</h3>
                  <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", lineHeight: 1.9, display: "flex", flexWrap: "wrap", gap: "2px 14px" }}>{towns.map((n) => <a key={n} href={"/service-areas/" + townSlug(n) + "/"} onClick={toTown(n)} style={{ color: "var(--green-800)" }}>{n}</a>)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" tight>
        <Container>
          <h2 style={{ font: "var(--type-h3)", borderTop: "1px solid var(--gold-500)", paddingTop: "var(--space-5)" }}>Towns with completed projects</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3) var(--space-8)", marginTop: "var(--space-4)" }}>
            {(window.TOWNS_DATA || []).map((t) => <a key={t.slug} href={"/service-areas/" + t.slug + "/"} onClick={(e) => { e.preventDefault(); go("/service-areas/" + t.slug); }} style={{ font: "var(--type-h4)", color: "var(--green-800)", textDecoration: "none" }}>{t.town}, PA →</a>)}
          </div>
        </Container>
      </Section>
      <RelatedProjects go={go} title="Completed projects in the area" />

      <div id="estimate"><EstimateBand title="Not sure if you are in range?" intro="Tell us the town. If we do not cover it we will say so, and usually point you at somebody who does." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.ServiceArea = ServiceArea;

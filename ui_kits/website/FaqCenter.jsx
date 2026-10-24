/* FAQ Center. Concise answers only — service-specific questions get a short answer and a link
   to the service page that owns the full one. Rule 6: no full answer published twice. */

const FAQ_GROUPS = [
  ["Hiring Alejandro's", [
    ["Does Alejandro's Landscaping serve my town?", "We work a roughly twenty-mile radius from New Cumberland, which covers parts of Cumberland, Dauphin, York, Perry, Lancaster and Lebanon counties. Harrisburg, Camp Hill, Mechanicsburg, Lemoyne, Enola, Hershey, Hummelstown, Dillsburg, Elizabethtown and Carlisle are all inside it.", "Full service area", "/service-areas"],
    ["What services do you offer?", "Hardscaping — patios, retaining walls, walkways, fire features and drainage. Landscaping — installation, beds and mulch, trimming, cleanups, lawns and lighting. [VERIFY TREE AND COMMERCIAL SERVICES.]", "All services", "/hardscaping"],
    ["Are you licensed and insured?", "[VERIFY PA HIC REGISTRATION NUMBER AND INSURANCE STATUS.] Registration and insurance are different things and both are worth asking any contractor for before work starts.", null, null],
    ["Do you do both landscaping and hardscaping?", "Both, which is the point. Hardscape crews usually leave the beds to someone else and landscape crews subcontract the wall. One company means one number, one schedule and nobody blaming the other trade when the grade is wrong.", null, null]
  ]],
  ["Estimates & scheduling", [
    ["How do I request an estimate?", "Send a photo of the space and roughly what you are thinking, either through the form or by calling (717) 736-6538. Photos tell us more than a description does.", "Request an estimate", "#estimate"],
    ["Is the estimate free?", "[VERIFY WHETHER ESTIMATES ARE FREE, and whether any design work carries a fee.]", null, null],
    ["What do I get in writing?", "[VERIFY WHAT A WRITTEN ESTIMATE CONTAINS — scope, square footage, base spec, materials, drainage, exclusions.] Worth comparing line by line against any other quote, since what is left out is usually where two prices differ.", null, null],
    ["How far out are you scheduling?", "[VERIFY CURRENT LEAD TIMES BY SEASON.]", null, null],
    ["How does weather affect the schedule?", "Rain stops base work rather than paving. A base cannot be compacted properly when it is saturated, so a wet week moves a start date even when the forecast looks fine.", null, null]
  ]],
  ["Hardscaping", [
    ["How much does a paver patio cost?", "[VERIFY PATIO PRICE RANGE.] Size, material, excavation depth, access to the back yard, drainage correction, steps and walls all move the number.", "Paver patios", "/hardscaping/paver-patios"],
    ["Do paver patios hold up through Pennsylvania winters?", "Yes, when the base is built for it. Freeze-thaw lifts and drops the ground all winter — a patio with a deep compacted base and somewhere for water to go settles back flat.", "Paver patios", "/hardscaping/paver-patios"],
    ["Why do retaining walls lean?", "Water behind the wall, no reinforcement tying it into the hill, or a footing cut too shallow. A wall that has started to move does not settle back.", "Retaining walls", "/hardscaping/retaining-walls"],
    ["Can you replace an existing concrete patio or walkway?", "[VERIFY DEMOLITION CAPABILITY AND WHETHER IT IS INCLUDED.] Most jobs here start with a slab that has already cracked, so it is a normal first step.", "Paver patios", "/hardscaping/paver-patios"],
    ["Can a fire pit or seat wall be built in?", "Yes, and much cheaper during the patio build than after it. Footing, base and any gas or electrical run get set in the one excavation.", "Fire features", "/hardscaping/fire-features-seat-walls"]
  ]],
  ["Grading & drainage", [
    ["Why does water pool in my yard?", "Usually the ground falls the wrong way, there is a low spot with nowhere to drain, or roof water is being dumped beside the house and never carried off.", "Grading & drainage", "/grading-drainage"],
    ["Do I need grading or a French drain?", "Grading fixes water running the wrong way. A drain fixes water with nowhere to go once it arrives. Dries out a day after rain, usually grading. Soft for a week, something has to collect it.", "Grading & drainage", "/grading-drainage"]
  ]],
  ["Landscaping", [
    ["How much does landscaping cost?", "[VERIFY LANDSCAPING PRICE RANGE.] Bed size, how much comes out first, plant sizes, soil condition and access.", "Landscape installation", "/landscaping/landscape-installation"],
    ["When is the best time to plant in Pennsylvania?", "Spring and fall both work, and fall is often better — warm soil, cooler air, roots establish before winter without fighting summer heat.", "Landscape installation", "/landscaping/landscape-installation"],
    ["How much mulch do I need?", "Roughly one cubic yard per 100 square feet at three inches. Most residential properties land between three and ten yards.", "Mulch & bed work", "/landscaping/mulch-bed-work"],
    ["Can overgrown shrubs be saved?", "Often, over two or three seasons rather than one cut. Some species will not regrow from bare wood at all and are a replacement instead.", "Trimming", "/landscaping/shrub-hedge-trimming"],
    ["Sod or seed?", "Sod gives a lawn the day it is laid and holds a slope immediately. Seed costs far less and roots more deeply, but needs weeks of consistent watering.", "Sod installation", "/landscaping/sod-installation"]
  ]],
  ["Project completion", [
    ["Do you clean up and haul debris away?", "[VERIFY WHETHER HAULING IS INCLUDED OR QUOTED SEPARATELY.]", null, null],
    ["Will you repair the lawn afterward?", "[VERIFY WHETHER LAWN RESTORATION IS INCLUDED after excavation, and whether it is seed or sod.]", null, null],
    ["Is there a final walkthrough?", "[VERIFY WHETHER A DOCUMENTED FINAL WALKTHROUGH IS PART OF THE PROCESS.]", null, null],
    ["What warranty applies?", "[VERIFY WARRANTY TERMS, DURATION AND EXCLUSIONS — separately for workmanship and for plant material.]", null, null]
  ]]
];

function FaqCenter({ go }) {
  const [open, setOpen] = React.useState(FAQ_GROUPS[0][0]);
  const nav = (e, href) => { if (go && href && !href.startsWith("#")) { e.preventDefault(); go(href); } };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} onNavigate={go} />

      <Section tone="light" tight style={{ paddingTop: "var(--space-16)" }}>
        <Container>
          <Reveal>
            <nav style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginBottom: "var(--space-8)" }}>
              <a href="/" onClick={(e) => nav(e, "/")} style={{ color: "inherit" }}>Home</a> › <a href="/resources" onClick={(e) => nav(e, "/resources")} style={{ color: "inherit" }}>Resources</a> › FAQs
            </nav>
            <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch", marginBottom: "var(--space-8)", textWrap: "balance" }}>
              Questions, answered short.
            </h1>
            <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "var(--measure-lead)" }}>
              Quick answers about services, estimates and working with us. Where a question needs the full explanation, the link goes to the page that owns it.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light" tight style={{ paddingTop: 0 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)", gap: "clamp(24px,5vw,80px)", alignItems: "start" }}>
            <Reveal style={{ position: "sticky", top: 100 }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                {FAQ_GROUPS.map(([g]) => (
                  <li key={g}>
                    <button onClick={() => { setOpen(g); }}
                      style={{
                        display: "block", width: "100%", textAlign: "left", background: "none", cursor: "pointer",
                        border: 0, borderTop: "1px solid var(--border-hairline)", padding: "var(--space-4) 0", minHeight: 44,
                        font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase",
                        color: open === g ? "var(--green-800)" : "var(--text-muted)"
                      }}>{g}</button>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div>
              {FAQ_GROUPS.filter(([g]) => g === open).map(([g, items]) => (
                <Reveal key={g}>
                  <h2 style={{ font: "var(--type-h3)", marginBottom: "var(--space-8)" }}>{g}</h2>
                  {items.map(([q, a, label, href], i) => (
                    <div key={q} style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-8) 0" }}>
                      <h3 style={{ font: "var(--fw-medium) 1.125rem/1.35 var(--font-display)", marginBottom: "var(--space-4)", maxWidth: "40ch" }}>{q}</h3>
                      <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "58ch", textWrap: "pretty" }}>{a}</p>
                      {href && <a href={href} onClick={(e) => nav(e, href)} style={{ display: "inline-block", marginTop: "var(--space-4)", font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", textDecoration: "none", borderBottom: "1px solid var(--border-strong)", paddingBottom: 4 }}>{label} →</a>}
                    </div>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Question not here?" intro="Call and ask. Most of what people want to know is faster answered in two minutes on the phone than read off a page." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.FaqCenter = FaqCenter;

/* Resources hub. Lists only content that exists today: the FAQ center, completed projects,
   the service-area pages and the mulch quantity guide. Guides are added here when written. */

const RS_ITEMS = [
  ["FAQ center", "Short answers about services, estimates and working with Alejandro's.", "/resources/faqs", "Browse questions"],
  ["Completed projects", "Patios, driveways, walkways, walls and landscaping we've finished, with where they are and what was done.", "/projects", "See projects"],
  ["Service areas", "The towns we work in around New Cumberland and Harrisburg.", "/service-areas", "Find your town"],
  ["How much mulch?", "A quick table of how much mulch common bed sizes take at two and three inches.", "/landscaping/mulch-beds", "Open the guide"]
];

function Resources({ go }) {
  const nav = (e, href) => { if (go && href && !href.startsWith("#")) { e.preventDefault(); go(href); } };
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} active="Resources" onNavigate={go} />

      <Section tone="light" tight style={{ paddingTop: "var(--space-16)" }}>
        <Container>
          <Reveal>
            <Eyebrow tone="brand" style={{ marginBottom: "var(--space-6)" }}>Resources</Eyebrow>
            <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", maxWidth: "16ch", marginBottom: "var(--space-6)", textWrap: "balance" }}>
              Landscaping and hardscaping resources.
            </h1>
            <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "var(--measure-lead)" }}>
              Answers to common questions, completed projects and the towns we serve.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="sunken" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "0 clamp(20px,3vw,40px)" }}>
            {RS_ITEMS.map(([h, d, href, cta], i) => (
              <Reveal key={h} delay={i * 60} style={{ borderTop: "2px solid var(--gold-500)", padding: "var(--space-6) 0" }}>
                <h2 style={{ font: "var(--type-h4)", marginBottom: "var(--space-3)" }}>{h}</h2>
                <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "34ch", marginBottom: "var(--space-5)" }}>{d}</p>
                <a href={href} onClick={(e) => nav(e, href)} style={{ font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", textDecoration: "none", borderBottom: "1px solid var(--gold-500)", paddingBottom: 5 }}>{cta} →</a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Have a question about your property?" intro="Tell us what you're looking at and send a photo. We'll come out, walk it with you and give you a written estimate." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.Resources = Resources;

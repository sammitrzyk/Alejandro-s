/* Walkways & steps. Built around real before/after pairs.
   Sequence: arrival → one transformation → built from the base up → steps → borders & pattern → more → FAQ → estimate. */

function useWkWide(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => { const m = window.matchMedia(q); const on = (e) => setW(e.matches); setW(m.matches); m.addEventListener("change", on); return () => m.removeEventListener("change", on); }, [q]);
  return w;
}
const WK = P + "walk/";
function WkLabel({ children, dark }) {
  return <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: dark ? "var(--gold-300)" : "var(--gold-text)" }}>{children}</div>;
}
function WkPhoto({ f, alt, ratio = "4/3", pos = "50% 50%", label, dark }) {
  return (
    <figure style={{ margin: 0 }}>
      <img src={WK + f} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: ratio, objectFit: "cover", objectPosition: pos, borderRadius: "var(--radius-image)", display: "block" }} />
      {label && <figcaption style={{ marginTop: "var(--space-2)" }}><WkLabel dark={dark}>{label}</WkLabel></figcaption>}
    </figure>
  );
}

function WalkwaysSteps({ go }) {
  const wide = useWkWide();
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Hardscaping" onNavigate={go} />

      {/* 1. Arrival */}
      <Hero height="min(82vh,740px)" image={WK + "steps-grey.jpg"}
        alt="Grey paver steps with black railings leading up to the side entry of a house"
        eyebrow="Hardscaping · Walkways & steps"
        title="The way to the front door."
        lede="Paver walkway and step installation in New Cumberland, Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={tel}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Paver steps and landing" />

      {/* 2. One transformation */}
      <Section tone="light" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.6fr)" : "minmax(0,1fr)", gap: "var(--space-6) clamp(28px,5vw,72px)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Before & after</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "15ch" }}>A front walk, rebuilt.</h2>
              <dl style={{ margin: "var(--space-6) 0 0" }}>
                {[["Before", "The old concrete walk broken out, with the lawn cut back where the new path would run."],
                  ["Built", "A new paver walkway with a darker border, turning the corner along the front bed. [VERIFY TOWN AND PAVER PRODUCT.]"],
                  ["After", "One continuous path from the street steps toward the house."]].map(([h, d]) => (
                  <div key={h} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "var(--space-3)", borderTop: "1px solid var(--gold-500)", padding: "var(--space-3) 0" }}>
                    <dt style={{ paddingTop: 2 }}><WkLabel>{h}</WkLabel></dt>
                    <dd style={{ margin: 0, font: "var(--type-small)", color: "var(--text-secondary)" }}>{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={80} style={{ order: wide ? 0 : -1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--space-3)" }}>
                <WkPhoto f="walk2-dig.jpg" alt="Before: old concrete walk broken out and the ground dug out along the lawn for the new walkway" ratio="3/4" pos="50% 60%" label="Before" />
                <WkPhoto f="walk2-done.jpg" alt="After: the same walkway finished in pavers with a darker border along the lawn" ratio="3/4" pos="50% 60%" label="After" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3. Built from the base up — construction story, one dominant image */}
      <Section tone="dark" tight>
        <Container>
          <Reveal>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-4)" }}>Built from the base up</Eyebrow>
            <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "16ch" }}>What's under the walk keeps it flat.</h2>
            <p style={{ font: "var(--type-body)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-4)", maxWidth: "48ch" }}>A walkway is excavated and built on a compacted stone base before the first paver is set, so it stays level and meets adjoining steps and surfaces cleanly.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,3fr) minmax(0,2fr)" : "minmax(0,1fr)", gap: wide ? "clamp(20px,2.4vw,32px)" : "28px", alignItems: "start", marginTop: "var(--space-8)" }}>
            <Reveal>
              <figure style={{ margin: 0 }}>
                <img src={WK + "walk-base-wide2.jpg"} alt="Crew member working the compacted stone base for a walkway beside a raised garden bed, before the pavers are installed" loading="lazy" style={{ width: "100%", height: wide ? "clamp(360px,30vw,420px)" : 240, objectFit: "cover", objectPosition: "50% 55%", borderRadius: "var(--radius-image)", display: "block" }} />
                <figcaption style={{ marginTop: "var(--space-3)" }}>
                  <WkLabel dark>The base</WkLabel>
                  <p style={{ font: "var(--type-caption)", color: "var(--text-on-dark-secondary)", marginTop: 4 }}>Compacted stone prepared before the pavers are installed.</p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure style={{ margin: 0 }}>
                <img src={WK + "walk-steps-after.jpg"} alt="The finished walkway: paver landing and steps along the brick house beside the raised garden bed" loading="lazy" style={{ width: "100%", height: wide ? "clamp(360px,30vw,420px)" : 240, objectFit: "cover", objectPosition: "50% 62%", borderRadius: "var(--radius-image)", display: "block" }} />
                <figcaption style={{ marginTop: "var(--space-3)" }}>
                  <WkLabel dark>The finished walk</WkLabel>
                  <p style={{ font: "var(--type-caption)", color: "var(--text-on-dark-secondary)", marginTop: 4 }}>Pavers, borders and step transitions complete the surface.</p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4. Steps */}
      <Section tone="light" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.5fr)" : "minmax(0,1fr)", gap: "var(--space-6) clamp(28px,5vw,72px)", alignItems: "center" }}>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Steps</Eyebrow>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", maxWidth: "14ch" }}>Where the grade changes.</h2>
              <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "44ch" }}>Steps carry a walkway up to a door, a deck or a patio. Every step in a run should feel the same underfoot, so the rise and depth are planned before anything is built.</p>
              <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-3)" }}>[VERIFY STEP CONSTRUCTION — block, cap and base used.]</p>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: "var(--space-3)", alignItems: "end" }}>
                <WkPhoto f="steps-grey.jpg" alt="Wide grey paver steps up to a side entry, with black railings" ratio="4/3" pos="40% 55%" />
                <figure style={{ margin: 0 }}>
                  <img src={P + "rw/IMG_2719.jpg"} alt="Steps being set into a block wall at the edge of a grey paver patio" loading="lazy" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "60% 45%", borderRadius: "var(--radius-image)", display: "block" }} />
                </figure>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4b. Stepping-stone paths */}
      <Section tone="light" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.5fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "var(--space-6) clamp(28px,5vw,72px)", alignItems: "center" }}>
            <Reveal><img src={WK + "walk-stepping-stones.jpg"} alt="Stepping-stone path of dark square pavers set in white decorative stone, curving from the driveway to the front walk" loading="lazy" style={{ width: "100%", height: wide ? "clamp(320px,28vw,400px)" : 230, objectFit: "cover", objectPosition: "50% 60%", borderRadius: "var(--radius-image)", display: "block" }} /></Reveal>
            <Reveal delay={80}>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Stepping-stone paths</Eyebrow>
              <h2 style={{ font: "var(--type-h3)", letterSpacing: "var(--ls-heading)", maxWidth: "20ch" }}>Not every path needs to be paved solid.</h2>
              <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-3)", maxWidth: "42ch" }}>Large pavers set in decorative stone make a lighter path through a bed or along a driveway, held in by a steel or poly edge.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Borders & pattern */}
      <Section tone="sunken" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.4fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "var(--space-6) clamp(28px,5vw,72px)", alignItems: "center" }}>
            <Reveal><WkPhoto f="walk-after.jpg" alt="Paver walkway with a charcoal border leading to the front of a brick house" ratio="16/10" pos="50% 62%" /></Reveal>
            <Reveal delay={80}>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>Borders & pattern</Eyebrow>
              <h2 style={{ font: "var(--type-h3)", letterSpacing: "var(--ls-heading)", maxWidth: "20ch" }}>A border makes a walk look finished.</h2>
              <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", marginTop: "var(--space-3)", maxWidth: "42ch" }}>A contrasting border frames the field and can match a driveway or patio so the whole front reads as one plan. We install Techo-Bloc and Cambridge pavers.</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6. More hardscaping */}
      <Section tone="light" tight>
        <Container>
          <Reveal><Eyebrow tone="brand" style={{ marginBottom: "var(--space-4)" }}>More hardscaping</Eyebrow>
            <h2 style={{ font: "var(--type-h3)", letterSpacing: "var(--ls-heading)" }}>Building more than the walk?</h2></Reveal>
          <ul style={{ listStyle: "none", margin: "var(--space-6) 0 0", padding: 0, display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: "0 clamp(24px,4vw,56px)" }}>
            {[["Paver patios", "/hardscaping/paver-patios"], ["Paver driveways", "/hardscaping/paver-driveways"], ["Retaining walls", "/hardscaping/retaining-walls"], ["Fire features & seat walls", "/hardscaping/fire-features"], ["Grading & drainage", "/grading-drainage"]].map(([l, h]) => (
              <li key={l} style={{ borderTop: "1px solid var(--border-strong)" }}>
                <a href={h} onClick={(e) => { e.preventDefault(); go(h); }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 52, font: "var(--fw-medium) 1rem/1.3 var(--font-sans)", color: "var(--text-primary)", textDecoration: "none" }}>
                  {l}<span style={{ color: "var(--gold-text)" }}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 7. FAQ */}
      <Section tone="sunken">
        <Container>
          <Reveal><SectionHead eyebrow="Questions about walkways & steps" title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-8)" }}>
            <QuestionList items={[
              { question: "How much does a paver walkway cost?", answer: "[VERIFY WALKWAY PRICING.] Length and width set most of it. Removing an old walk, steps, a border and how far material has to be carried from the truck move it from there.", linkLabel: null, href: null },
              { question: "Can you replace an old concrete walk or broken steps?", answer: "Yes. The old surface comes out first so the new walk sits on a properly built base. [VERIFY WHETHER REMOVAL IS INCLUDED OR QUOTED SEPARATELY.]", linkLabel: null, href: null },
              { question: "Can the walkway match my driveway or patio?", answer: "Yes. Using the same paver and border across the walk, driveway and patio makes the front read as one plan. The New Cumberland walk above was built with its parking area.", linkLabel: "Paver driveways", href: "/hardscaping/paver-driveways" },
              { question: "How long does a walkway take?", answer: "[VERIFY TYPICAL DURATION.] Most of the time goes into removing the old walk and building the base. Unlike poured concrete, there's no cure time before you can walk on it.", linkLabel: null, href: null },
              { question: "What areas do you serve?", answer: "Towns within about twenty miles of New Cumberland, including Camp Hill, Mechanicsburg, Lemoyne, Harrisburg and Hershey.", linkLabel: "Service area", href: "/service-area" }
            ]} />
          </Reveal>
        </Container>
      </Section>

      <RelatedProjects go={go} service="walkways-steps" />

      <div id="estimate"><EstimateBand title="Send a photo of the walk." intro="A picture of what's there now and where it needs to go tells us more than a paragraph." /></div>
      <SiteFooter logo={LOGO} phone={PHONE} />
    </>
  );
}
window.WalkwaysSteps = WalkwaysSteps;

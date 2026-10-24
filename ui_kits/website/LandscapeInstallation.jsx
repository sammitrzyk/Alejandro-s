/* Landscape installation. Deliberately NOT the ServicePage skeleton — this buyer is not
   assessing construction competence, they are trying to picture a finished front yard.
   Narrative: see it → understand what makes it look finished → what we install → what
   decides plant choice → a walked-through process → questions. Visual-heavy, spec-light. */

const LOOK_FACTORS = [
  ["Bed lines", "The single biggest change, and the cheapest. A bed cut in a long shallow curve reads as designed. One that traces the foundation in a straight strip reads as an afterthought.", "wide"],
  ["Layering", "Tall at the back, mid in the middle, low at the front, and nothing planted in a single row. Depth is what separates a landscape from a hedge.", "tall"],
  ["Evergreen structure", "Something with green in February. A bed built entirely from things that die back looks finished in June and empty for five months.", "wide"],
  ["Mulch or stone", "Mulch is warmer and softer and needs redoing. Stone is permanent, reflects heat, and is unforgiving if you change your mind.", "std"],
  ["Room at the foundation", "Shrubs planted tight to the wall grow into the siding and block the windows within a decade. Space is planned for the mature size, not the pot size.", "std"],
  ["What is already there", "A mature specimen worth keeping changes the whole plan. Most renovations save more than the homeowner expects.", "wide"]
];

const INSTALL_ROWS = [
  ["New planting beds", "Cut, shaped, edged and prepared before anything goes in the ground.", "stone-edge-bed.jpg", "Stone-edged planting bed"],
  ["Shrubs & ornamental trees", "[VERIFY NURSERY SOURCES AND WHETHER PLANT STOCK IS WARRANTED.]", "commercial-property-beds.jpg", "Layered shrubs and ornamental plantings in a prepared bed"],
  ["Bed edging", "[VERIFY EDGING MATERIALS OFFERED — cut edge, stone, steel, paver.] Set into the ground rather than laid on top of it.", "residential-lawn-beds.jpg", "Cut bed edge against lawn"],
  ["Renovating existing beds", "[VERIFY RENOVATION SCOPE.] Taking out thirty-year-old foundation shrubs usually reveals grading nobody has looked at since the house was built.", null, null]
];

function LandscapeInstallation({ go }) {
  const [wide, setWide] = React.useState(true);
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width:700px)");
    const on = (e) => setWide(e.matches);
    setWide(mq.matches); mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay active="Landscaping" onNavigate={go} />

      <Hero height="min(74vh,660px)"
        image={P + "stone-edge-bed.jpg"}
        alt="Stone-edged planting bed with layered shrubs against a house"
        eyebrow="Landscaping · Installation"
        title="A yard that finally feels finished."
        lede="Planting beds, shrubs, edging and renovation across the west shore, Harrisburg and the towns within twenty miles of New Cumberland."
        primary={<Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
        secondary={<Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
        credit="Stone-edged beds and layered plantings" />

      {/* 1. SEE IT — landscape-specific work only, no mowing shots */}
      <Section tone="light" tight>
        <Container>
          <Reveal><SectionHead eyebrow="Recent installations" title="See what changes the yard." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "minmax(0,1.7fr) minmax(0,1fr)" : "minmax(0,1fr)", gap: "var(--gap-grid)", marginTop: "var(--space-12)", alignItems: "stretch" }}>
            <Reveal><ProjectTile size="lg" ratio={wide ? "3/2" : "4/3"} image={P + "stone-edge-bed.jpg"} alt="Stone-edged bed with layered sculpted shrubs against a house" town="Central PA" service="Beds, edging & plantings" detail="Stone edge set into the ground, bed cut wide enough that the shrubs sit inside the line." /></Reveal>
            <div style={{ display: "grid", gridTemplateRows: wide ? "1fr 1fr" : "auto auto", gap: "var(--gap-grid)", minWidth: 0 }}>
              <Reveal delay={80}><ProjectTile ratio={wide ? "16/9" : "4/3"} image={P + "river-rock-landscape-v3.jpg"} alt="Curved driveway edged with a block retaining wall, barrel planters and black mulch running beside a decorative stone slope in grey and red rock, hedge line and mature trees behind" town="Central PA" service="River rock & decorative stone" /></Reveal>
              <Reveal delay={160}><ProjectTile ratio={wide ? "16/9" : "4/3"} image={P + "commercial-property-beds.jpg"} alt="Planting beds and layered shrubs along a building entrance" town="Central PA" service="Bed renovation & plantings" /></Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Cinematic read — dark, one photograph, three short ideas */}
      <section style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={P + "landscape-island-bed-fieldstone.jpg"} alt="Curved island bed edged in fieldstone with layered shrubs and grasses" loading="lazy"
            style={{ width: "100%", aspectRatio: wide ? "21/9" : "4/3", objectFit: "cover", objectPosition: "50% 55%", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,36,22,0) 40%,rgba(10,36,22,.88) 100%)" }} />
          <Container style={{ position: "absolute", left: 0, right: 0, bottom: wide ? "var(--space-12)" : "var(--space-6)" }}>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-4)" }}>How a bed reads from the street</Eyebrow>
            <h2 style={{ font: wide ? "var(--type-h1)" : "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "#fff", maxWidth: "14ch" }}>What makes a yard look finished.</h2>
          </Container>
        </div>
        <Container style={{ padding: wide ? "var(--space-12) var(--gutter) var(--space-16)" : "var(--space-8) var(--gutter) var(--space-10)" }}>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)", gap: wide ? 0 : "var(--space-6)" }}>
            <Reveal delay={0} style={{ padding: wide ? "0 clamp(20px,3vw,44px)" : "0", paddingLeft: 0 }}>
              <p style={{ font: "italic var(--fw-regular) clamp(1.375rem,2.2vw,1.875rem)/1.2 var(--font-display)", color: "var(--text-on-dark)" }}>Shape before plants.</p>
              <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-3)", maxWidth: "34ch" }}>A bed cut in one long curve does more than any shrub you put in it.</p>
            </Reveal>
            <Reveal delay={80} style={{ borderLeft: wide ? "1px solid var(--gold-500)" : "none", borderTop: wide ? "none" : "1px solid var(--border-dark)", padding: wide ? "0 clamp(20px,3vw,44px)" : "var(--space-6) 0 0" }}>
              <p style={{ font: "italic var(--fw-regular) clamp(1.375rem,2.2vw,1.875rem)/1.2 var(--font-display)", color: "var(--text-on-dark)" }}>Height, then depth.</p>
              <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-3)", maxWidth: "34ch" }}>Tall at the back, low at the front, nothing standing in a single row.</p>
            </Reveal>
            <Reveal delay={160} style={{ borderLeft: wide ? "1px solid var(--gold-500)" : "none", borderTop: wide ? "none" : "1px solid var(--border-dark)", padding: wide ? "0 clamp(20px,3vw,44px)" : "var(--space-6) 0 0" }}>
              <p style={{ font: "italic var(--fw-regular) clamp(1.375rem,2.2vw,1.875rem)/1.2 var(--font-display)", color: "var(--text-on-dark)" }}>Green in February.</p>
              <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-3)", maxWidth: "34ch" }}>Evergreen structure keeps the bed reading after everything else dies back.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. WHAT CHANGES THE LOOK — staggered, deliberately unequal */}
      <Section tone="light">
        <Container>
          <Reveal><SectionHead eyebrow="What changes the look" title="Decisions that matter more than the plant list."
            intro="Homeowners tend to start by choosing plants. Every one of these does more for the finished result than the species does." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)", gap: "clamp(20px,3vw,44px)", marginTop: "var(--space-16)", alignItems: "start" }}>
            {LOOK_FACTORS.map(([h, t, size], i) => (
              <Reveal key={h} delay={i * 60} style={{
                gridColumn: "span 1",
                minWidth: 0,
                paddingTop: wide && i % 2 ? "var(--space-10)" : 0
              }}>
                <div style={{ borderTop: `${size === "wide" ? 2 : 1}px solid ${size === "wide" ? "var(--gold-500)" : "var(--border-strong)"}`, paddingTop: "var(--space-5)" }}>
                  <h3 style={{ font: size === "wide" ? "var(--type-h3)" : "var(--type-h4)", marginBottom: "var(--space-3)" }}>{h}</h3>
                  <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: size === "wide" ? "52ch" : "34ch", textWrap: "pretty" }}>{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. CONVERSION MOMENT */}
      <Section tone="dark" tight>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,5vw,80px)", alignItems: "center" }}>
            <Reveal>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "16ch", textWrap: "pretty" }}>Starting from scratch, or starting over?</h2>
              <p style={{ font: "var(--type-lead)", color: "var(--text-on-dark-secondary)", maxWidth: "46ch", marginTop: "var(--space-6)", textWrap: "pretty" }}>
                Send a photo of the front of the house. Most of what decides a planting plan is visible in one picture — which way it faces, what is already there, how much room there is to work with.
              </p>
            </Reveal>
            <Reveal delay={100} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
              <Button variant="accent" size="lg" href="#estimate">Request a landscape estimate</Button>
              <Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. WHAT WE INSTALL — image-led rows, not a matrix */}
      <Section tone="light">
        <Container>
          <Reveal><SectionHead eyebrow="What we install" title="The parts of a landscape." /></Reveal>
          <div style={{ marginTop: wide ? "var(--space-10)" : "var(--space-6)" }}>
            {INSTALL_ROWS.map(([h, t, img, alt], i) => (
              <Reveal key={h} delay={i * 60}>
                <div style={{ display: "grid", gridTemplateColumns: img ? (wide ? "minmax(0,1fr) minmax(0,.7fr)" : "112px minmax(0,1fr)") : "minmax(0,1fr)", gap: wide ? "clamp(24px,4vw,56px)" : "var(--space-4)", alignItems: "center", borderTop: "1px solid var(--border-hairline)", padding: wide ? "var(--space-6) 0" : "var(--space-4) 0" }}>
                  {img && !wide && <img src={P + img} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />}
                  <div>
                    <h3 style={{ font: wide ? "var(--type-h3)" : "var(--type-h4)", marginBottom: "var(--space-2)", maxWidth: "20ch" }}>{h}</h3>
                    <p style={{ font: wide ? "var(--type-body)" : "var(--type-small)", color: "var(--text-secondary)", maxWidth: "46ch" }}>{t}</p>
                  </div>
                  {img && wide && <img src={P + img} alt={alt} loading="lazy" style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", borderRadius: "var(--radius-image)", display: "block" }} />}
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "var(--space-8)", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-8)" }}>
                {[["Decorative rock", "/landscaping/mulch-bed-work"], ["Mulch", "/landscaping/mulch-bed-work"], ["Landscape lighting", "/landscaping/landscape-lighting"]].map(([l, h]) => (
                  <a key={l} href={h} onClick={(e) => { if (go) { e.preventDefault(); go(h); } }} style={{ font: "var(--type-h4)", color: "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid var(--border-strong)", paddingBottom: "var(--space-4)", display: "block" }}>{l} →</a>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>


      {/* 6. SITE FIT — expertise without the textbook */}
      <Section tone="dark">
        <Container>
          <Reveal><SectionHead tone="dark" eyebrow="Choosing what goes where" title="Six questions asked before a single plant is picked."
            intro="A plant that is wrong for the spot does not fail immediately. It fails in year four, which is long after anyone connects it back to the decision." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 0, marginTop: "var(--space-12)" }}>
            {[["How much sun does it actually get?", "Not at noon. At four in the afternoon in July, and whether the house shades it by six."],
              ["Where does the water go?", "A bed that stays wet kills anything that wants drainage, and no amount of amendment fixes a low spot."],
              ["How big does it get?", "The most common mistake on any property. What fits under the window now is above the roofline in fifteen years."],
              ["Who sees it, and from where?", "From the street, from the driveway, from the kitchen window. Not every side of a house earns the same investment."],
              ["How much upkeep do you want?", "Some plantings hold their shape on one cut a year. Others need four. Worth deciding before, not after."],
              ["How close to the foundation?", "Roots, moisture against the wall, and whether anyone can still get to the hose bib or the meter."]].map(([h, t], i) => (
                <Reveal key={h} delay={i * 60} style={{ borderTop: "1px solid var(--border-dark)", padding: "var(--space-8) var(--space-8) var(--space-8) 0" }}>
                  <h3 style={{ font: "var(--fw-semibold) 1.0625rem/1.35 var(--font-sans)", color: "var(--text-on-dark)", marginBottom: "var(--space-3)", maxWidth: "26ch" }}>{h}</h3>
                  <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", maxWidth: "34ch" }}>{t}</p>
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>

      {/* 7. PROCESS — narrative flow, not four boxes */}
      <Section tone="sunken">
        <Container width="var(--container-text)">
          <Reveal><SectionHead eyebrow="How it goes" title="Walkthrough, plan, install, establish." /></Reveal>
          <div style={{ marginTop: "var(--space-12)" }}>
            {[["Walkthrough", "We stand in the yard and look at exposure, drainage and what is already growing well. The things worth keeping usually get decided here, and they change the plan more than anything else does."],
              ["Plan and price", "[VERIFY WHETHER A DRAWN PLAN IS PROVIDED AND WHETHER THERE IS A DESIGN FEE.] Bed shapes, plant list, sizes, edging, mulch or stone, and what is being removed first."],
              ["Install", "Removal, soil preparation, edging, planting, mulch. Beds get cut before anything is planted so the lines are set while there is still room to stand in them."],
              ["Establishment", "[VERIFY WATERING GUIDANCE PROVIDED AND ANY PLANT WARRANTY.] The first season is watering, and that part is yours. Everything installed is chosen to survive a normal Central PA winter, not a perfect one."]].map(([h, t], i, arr) => (
                <Reveal key={h} delay={i * 70}>
                  <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-8)" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ width: 10, height: 10, background: "var(--gold-500)", flex: "0 0 auto", marginTop: 8 }} />
                      {i < arr.length - 1 && <span style={{ width: 1, flex: 1, background: "var(--border-strong)", minHeight: 40 }} />}
                    </div>
                    <div style={{ paddingBottom: "var(--space-10)" }}>
                      <h3 style={{ font: "var(--type-h3)", marginBottom: "var(--space-3)" }}>{h}</h3>
                      <p style={{ font: "var(--type-body)", color: "var(--text-secondary)", maxWidth: "56ch", textWrap: "pretty" }}>{t}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>

      {/* 8. FAQ — five */}
      <Section tone="light">
        <Container>
          <Reveal><SectionHead eyebrow="Questions about landscape installation" title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-12)" }}>
            <QuestionList items={[
              { question: "How much does landscape installation cost in Central PA?", answer: "[VERIFY LANDSCAPING PRICE RANGE — a typical front-of-house range and what it includes.] Bed size, how much has to come out first, plant sizes, soil condition and access all move the number. Larger plants cost more but look finished immediately; smaller stock costs less and catches up in two or three seasons.", linkLabel: null, href: null },
              { question: "Can you work with the plants that are already there?", answer: "Usually, and it is worth asking for. A mature specimen that has been in the ground twenty years cannot be bought back at any price. Most renovations keep more than the homeowner expected — the work is taking out what has outgrown the space and rebuilding the beds around what stays.", linkLabel: null, href: null },
              { question: "When is the best time to install landscaping in Pennsylvania?", answer: "Spring and fall both work, and fall is often better — the soil is still warm, the air is cooler, and roots establish before winter without the plant fighting summer heat. Summer installation is possible but needs far more watering.", linkLabel: null, href: null },
              { question: "Do you provide a plan, or do you just plant?", answer: "[VERIFY WHETHER A DRAWN PLAN IS PROVIDED, whether there is a design fee, and whether plants are selected on site or specified in advance.] Worth asking any contractor — a quote for plants is not the same thing as a plan for a yard.", linkLabel: null, href: null },
              { question: "Can landscaping be done as part of a patio project?", answer: "Yes, and it is the better sequence. Beds get cut after the hardscape is set, so the lines follow the finished patio rather than being worked around. The excavation is already open, the machine is already there, and the lawn only gets torn up once.", linkLabel: "Hardscaping", href: "/hardscaping/paver-patios" }
            ]} />
          </Reveal>
          <Reveal><a href="/resources/faqs" onClick={(e) => { if (go) { e.preventDefault(); go("/resources/faqs"); } }} style={{ display: "inline-block", marginTop: "var(--space-10)", font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", textDecoration: "none", borderBottom: "1px solid var(--border-strong)", paddingBottom: 5 }}>See all questions →</a></Reveal>
        </Container>
      </Section>

      <Section tone="darkAlt" tight>
        <Container width="var(--container-text)">
          <Reveal>
            <Eyebrow tone="inverse" rule style={{ marginBottom: "var(--space-6)" }}>Customer proof</Eyebrow>
            <p style={{ font: "var(--type-h3)", color: "var(--text-on-dark)", maxWidth: "34ch", textWrap: "pretty" }}>[ADD REAL LANDSCAPE INSTALLATION REVIEW]</p>
            <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", marginTop: "var(--space-5)", maxWidth: "52ch" }}>
              [ADD: A verbatim quote from a landscaping customer, with their name, town, the month and a link to the source. No invented quote goes in this slot.]
            </p>
          </Reveal>
        </Container>
      </Section>

      <div id="estimate"><EstimateBand title="Send a photo of the front of the house."
        intro="One picture tells us most of what a planting plan needs — which way it faces, what is there now, how much room there is to work with." /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.LandscapeInstallation = LandscapeInstallation;

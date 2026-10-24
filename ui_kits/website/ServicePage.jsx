/* Generic service page. Section order follows the Paver Patios pattern established with the owner:
   hero → proof → conversion moment → construction/detail → process → FAQ → review slot → close.
   Every page is driven by a record in service-data-*.js. Unverified strings stay bracketed. */

function PhotoOrSlot({ image, alt, ratio = "4/3", note }) {
  if (image) return <img src={P + image} alt={alt} style={{ width: "100%", aspectRatio: ratio, objectFit: "cover", borderRadius: "var(--radius-image)" }} />;
  return (
    <div style={{ width: "100%", maxWidth: 420, aspectRatio: ratio, background: "var(--surface-sunken)", border: "1px dashed var(--border-strong)", display: "grid", placeItems: "center", padding: "var(--space-8)" }}>
      <p style={{ font: "var(--type-caption)", color: "var(--text-muted)", textAlign: "center", maxWidth: "28ch" }}>{note || "[ADD PROJECT PHOTOGRAPHY]"}</p>
    </div>
  );
}

function ServicePage({ go, data }) {
  const autoRatio = useTileRatio();
  const d = data;
  const tileRatio = d.tileRatio || autoRatio;
  const urgent = d.ctaStyle === "phone";
  return (
    <>
      <SiteHeader logo={LOGO} phone={PHONE} overlay={!!d.hero} active={d.navGroup} onNavigate={go} />

      {d.hero ? (
        <Hero height="min(74vh,660px)" image={P + d.hero} alt={d.heroAlt}
          eyebrow={d.eyebrow} title={d.title} lede={d.lede}
          primary={urgent
            ? <Button variant="accent" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
            : <Button variant="solidLight" size="lg" href="#estimate">Request an estimate</Button>}
          secondary={urgent
            ? <Button variant="inverse" size="lg" href="#estimate">Request a quote</Button>
            : <Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>}
          credit={d.heroCredit} />
      ) : (
        <Section tone="light" tight style={{ paddingTop: "var(--space-16)" }}>
          <Container>
            <Reveal>
              <Eyebrow tone="brand" style={{ marginBottom: "var(--space-6)" }}>{d.eyebrow}</Eyebrow>
              <h1 style={{ font: "var(--type-h1)", letterSpacing: "var(--ls-heading)", maxWidth: "17ch", marginBottom: "var(--space-8)", textWrap: "balance" }}>{d.title}</h1>
              <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "var(--measure-lead)" }}>{d.lede}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", marginTop: "var(--space-10)" }}>
                {urgent ? (
                  <>
                    <Button variant="accent" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
                    <Button variant="outline" size="lg" href="#estimate">Request a quote</Button>
                  </>
                ) : (
                  <>
                    <Button variant="primary" size="lg" href="#estimate">Request an estimate</Button>
                    <Button variant="outline" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
                  </>
                )}
              </div>
            </Reveal>
            <Reveal delay={100} style={{ marginTop: "var(--space-16)" }}>
              <PhotoOrSlot image={null} ratio="21/9" note={d.photoNote || "[ADD PROJECT PHOTOGRAPHY FOR THIS SERVICE — no readable images exist in the current set.]"} />
            </Reveal>
          </Container>
        </Section>
      )}

      {d.notConfirmed && (
        <div style={{ background: "var(--status-emergency)", color: "#fff", padding: "var(--space-4) 0" }}>
          <Container><p style={{ font: "var(--type-small)", maxWidth: "80ch" }}>{d.notConfirmed}</p></Container>
        </div>
      )}

      {/* Proof. A record with no image entries gets an editorial empty band instead of the
          photo grid — auto-fit gives a lone slot the whole row and it renders as a huge dashed box. */}
      {d.projects && (
        <Section tone="light" tight>
          <Container>
            <Reveal><SectionHead eyebrow={d.projectsEyebrow || "Recent work"} title={d.projects.some(p => p.image) ? (d.projectsTitle || "See what changes the yard.") : "No photography yet."} intro={d.projectsIntro} /></Reveal>
            {d.projects.some(p => p.image) ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--gap-grid)", marginTop: "var(--space-12)", maxWidth: d.projects.length === 1 ? 640 : "none" }}>
                {d.projects.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    {p.image
                      ? <ProjectTile ratio={tileRatio} image={P + p.image} alt={p.alt} town={p.town} service={p.service} detail={p.detail} />
                      : <PhotoOrSlot image={null} ratio={tileRatio} note={p.note} />}
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal style={{ marginTop: "var(--space-10)" }}>
                <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "58ch", borderTop: "2px solid var(--gold-500)", paddingTop: "var(--space-6)", textWrap: "pretty" }}>
                  {d.projects.find(p => p.note)?.note || "[ADD PROJECT PHOTOGRAPHY]"}
                </p>
              </Reveal>
            )}
          </Container>
        </Section>
      )}

      {/* Conversion moment — optional photo background */}
      <Section tone="dark" tight style={d.convertImage ? { position: "relative", overflow: "hidden", padding: "clamp(72px,9vw,128px) 0" } : undefined}>
        {d.convertImage && <>
          <img src={P + d.convertImage} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: d.convertImagePos || "50% 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(10,36,22,.88) 0%,rgba(10,36,22,.68) 50%,rgba(10,36,22,.4) 100%)" }} />
        </>}
        <Container style={d.convertImage ? { position: "relative" } : undefined}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,5vw,80px)", alignItems: "center" }}>
            <Reveal>
              <h2 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-on-dark)", maxWidth: "16ch", textWrap: "pretty" }}>{d.convertTitle}</h2>
              <p style={{ font: "var(--type-lead)", color: "var(--text-on-dark-secondary)", maxWidth: "46ch", marginTop: "var(--space-6)", textWrap: "pretty" }}>{d.convertBody}</p>
            </Reveal>
            <Reveal delay={100} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
              {urgent ? (
                <>
                  <Button variant="accent" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
                  <Button variant="inverse" size="lg" href="#estimate">{d.convertCta || "Request a quote"}</Button>
                </>
              ) : (
                <>
                  <Button variant="accent" size="lg" href="#estimate">{d.convertCta || "Request an estimate"}</Button>
                  <Button variant="inverse" size="lg" href={`tel:${PHONE.replace(/\D/g, "")}`}><Icon name="phone" size={16} />{PHONE}</Button>
                </>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What the work involves */}
      {d.detail && (
        <Section tone="light">
          <Container>
            <Reveal><SectionHead eyebrow={d.detailEyebrow} title={d.detailTitle} intro={d.detailIntro} /></Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 0, marginTop: "var(--space-12)" }}>
              {d.detail.map(([h, t], i) => (
                <Reveal key={h} delay={i * 60} style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-8) var(--space-8) var(--space-8) 0" }}>
                  <h3 style={{ font: "var(--fw-semibold) 1.0625rem/1.3 var(--font-sans)", marginBottom: "var(--space-3)" }}>{h}</h3>
                  <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "34ch" }}>{t}</p>
                </Reveal>
              ))}
            </div>
            {d.detailNote && <Reveal><p style={{ font: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-10)", maxWidth: "62ch" }}>{d.detailNote}</p></Reveal>}
          </Container>
        </Section>
      )}

      {/* Process */}
      {d.pairWith && (
        <Section tone="sunken" tight>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "var(--space-8) clamp(28px,5vw,88px)", alignItems: "start" }}>
              <Reveal><SectionHead eyebrow={d.pairWith.eyebrow} title={d.pairWith.title} intro={d.pairWith.intro} /></Reveal>
              <div>
                {d.pairWith.links.map(([h, t, href], i) => (
                  <Reveal key={h} delay={i * 60}>
                    <a href={href} onClick={(e) => { e.preventDefault(); go(href); }}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-5)", borderTop: "1px solid var(--border-strong)", padding: "var(--space-5) 0", textDecoration: "none", color: "inherit" }}>
                      <span>
                        <span style={{ display: "block", font: "var(--fw-regular) 1.25rem/1.3 var(--font-display)", color: "var(--text-primary)", marginBottom: "var(--space-1)" }}>{h}</span>
                        <span style={{ font: "var(--type-small)", color: "var(--text-secondary)" }}>{t}</span>
                      </span>
                      <span style={{ font: "var(--type-button)", color: "var(--green-800)", flex: "0 0 auto" }}>→</span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {d.steps && d.stepsStyle !== "rows" && (
        <Section tone="sunken" tight>
          <Container>
            <Reveal><SectionHead eyebrow="How it goes" title={d.stepsTitle || "What hiring us looks like."} /></Reveal>
            <ol style={{ listStyle: "none", margin: "var(--space-12) 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "var(--space-8)" }}>
              {d.steps.map(([h, t], i) => (
                <Reveal key={h} delay={i * 70}>
                  <li>
                    <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 style={{ font: "var(--type-h4)", margin: "var(--space-4) 0 var(--space-3)" }}>{h}</h3>
                    <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "32ch" }}>{t}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Container>
        </Section>
      )}

      {/* FAQ — 5-6, curated. Reciprocal link back to the FAQ center. */}
      <Section tone="light">
        <Container>
          <Reveal><SectionHead eyebrow={`Questions about ${d.shortName}`} title="What people ask before they hire." /></Reveal>
          <Reveal style={{ marginTop: "var(--space-12)" }}><QuestionList items={d.faq} /></Reveal>
          <Reveal><a href="/resources/faqs" onClick={(e) => { if (go) { e.preventDefault(); go("/resources/faqs"); } }} style={{ display: "inline-block", marginTop: "var(--space-10)", font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--green-800)", textDecoration: "none", borderBottom: "1px solid var(--border-strong)", paddingBottom: 5 }}>See all questions →</a></Reveal>
        </Container>
      </Section>

      {/* Review slot — renders only with a real review; never fabricated */}
      {d.review && (
        <Section tone="darkAlt" tight>
          <Container width="var(--container-text)">
            <Reveal><ReviewQuote size="lg" tone="dark" quote={d.review.quote} name={d.review.name} town={d.review.town} service={d.review.service} /></Reveal>
          </Container>
        </Section>
      )}

      <div id="estimate"><EstimateBand title={d.closeTitle} intro={d.closeBody} /></div>
      <SiteFooter onNavigate={go} logo={LOGO} phone={PHONE} />
    </>
  );
}
window.ServicePage = ServicePage;

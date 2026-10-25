import { useState, useEffect } from "react";

const menus = {
  Commercial: [
    ["Commercial landscaping", "/commercial-landscaping/"],
    ["Commercial snow removal", "/commercial/snow-removal/"],
  ],
  Hardscaping: [
    ["Paver patios", "/hardscaping/paver-patios/"],
    ["Paver driveways", "/hardscaping/paver-driveways/"],
    ["Retaining walls", "/hardscaping/retaining-walls/"],
    ["Walkways & steps", "/hardscaping/walkways/"],
    ["Fire features & seat walls", "/hardscaping/fire-features/"],
    ["Grading & drainage", "/hardscaping/drainage/"],
  ],
  Landscaping: [
    ["Landscape installation", "/landscaping/installation/"],
    ["Mulch & bed work", "/landscaping/mulch-beds/"],
    ["Sod installation", "/landscaping/sod-installation/"],
    ["Shrub & hedge trimming", "/landscaping/trimming/"],
    ["Spring & fall cleanups", "/landscaping/yard-cleanups/"],
    ["Landscape lighting", "/landscaping/landscape-lighting/"],
    ["Christmas light installation", "/landscaping/christmas-light-installation/"],
  ],
};
const flat = [["Projects", "/projects/"], ["Areas", "/service-areas/"], ["Resources", "/resources/"], ["About", "/about/"]];

function useMedia(query) {
  const [hit, setHit] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = (e) => setHit(e.matches);
    setHit(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return hit;
}

export default function SiteHeader({ phone = "(717) 736-6538", overlay = false, active, logo = "/logo.png" }) {
  const [open, setOpen] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const compact = useMedia("(max-width:1180px)");
  const tiny = useMedia("(max-width:560px)");
  const light = overlay && !open && !drawer;

  useEffect(() => { if (!compact) setDrawer(false); }, [compact]);

  const linkStyle = (isActive) => ({
    font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase",
    color: light ? "rgba(255,255,255,.92)" : "var(--text-primary)",
    textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
    padding: "26px 0", borderBottom: `2px solid ${isActive ? "var(--gold-500)" : "transparent"}`,
    background: "none", border: "none", cursor: "pointer",
    transition: "color var(--dur-fast) var(--ease-out)",
  });

  return (
    <header onMouseLeave={() => setOpen(null)} style={{
      position: overlay ? "absolute" : "sticky", top: 0, left: 0, right: 0, zIndex: 40,
      background: light ? "transparent" : "var(--surface-raised)",
      borderBottom: `1px solid ${light ? "rgba(255,255,255,.16)" : "var(--border-hairline)"}`,
      transition: "background var(--dur-base) var(--ease-out)",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", padding: "14px 0", flex: "0 1 auto", minWidth: 0 }}>
          <img src={logo} alt="Alejandro's Landscaping" style={{ height: tiny ? 32 : 42, width: "auto", filter: light ? "brightness(0) invert(1)" : "none" }} />
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", marginLeft: "auto", minWidth: 0 }}>
          {!compact && (
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
              {Object.keys(menus).map((label) => (
                <button key={label} onMouseEnter={() => setOpen(label)} onClick={() => setOpen(open === label ? null : label)} style={linkStyle(active === label || open === label)}>
                  {label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                </button>
              ))}
              {flat.map(([l, h]) => <a key={l} href={h} style={linkStyle(active === l)}>{l}</a>)}
            </div>
          )}
          {!tiny && (
            <a href={`tel:${phone.replace(/\D/g, "")}`} style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", whiteSpace: "nowrap", font: "var(--type-button)", letterSpacing: "var(--ls-button)", color: light ? "#fff" : "var(--text-primary)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {phone}
            </a>
          )}
          {!compact && (
            <a href="/#estimate" className={light ? "btn btn-sm btn-solidLight" : "btn btn-sm btn-primary"}>Free estimate</a>
          )}
          {compact && (
            <button onClick={() => { setDrawer(!drawer); setOpen(null); }} aria-label={drawer ? "Close menu" : "Open menu"} aria-expanded={drawer} style={{
              display: "flex", alignItems: "center", gap: 8, background: "none", cursor: "pointer",
              border: `1px solid ${light ? "rgba(255,255,255,.42)" : "var(--border-strong)"}`,
              color: light ? "#fff" : "var(--text-primary)", padding: "12px 14px", minHeight: 44,
              font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase",
            }}>
              {drawer
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h16M4 6h16M4 18h16" /></svg>}
              {!tiny && (drawer ? "Close" : "Menu")}
            </button>
          )}
        </nav>
      </div>

      {open && !compact && (
        <div onMouseLeave={() => setOpen(null)} style={{ position: "absolute", left: 0, right: 0, top: "100%", background: "var(--surface-raised)", borderBottom: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-panel)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-10) var(--gutter)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "var(--space-16)" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, columns: 2, columnGap: "var(--space-10)" }}>
              {menus[open].map(([l, h]) => (
                <li key={l} style={{ breakInside: "avoid", marginBottom: "var(--space-4)" }}>
                  <a href={h} style={{ font: "var(--fw-medium) 1.0625rem/1.3 var(--font-sans)", color: "var(--text-primary)", textDecoration: "none" }}>{l}</a>
                </li>
              ))}
            </ul>
            <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "36ch", borderLeft: "1px solid var(--border-hairline)", paddingLeft: "var(--space-8)" }}>
              Every service has its own page with real projects from the towns we work in. Not sure which one you need? Send photos of the yard and we will tell you.
            </p>
          </div>
        </div>
      )}

      {drawer && compact && (
        <div style={{ position: "absolute", left: 0, right: 0, top: "100%", maxHeight: "78vh", overflowY: "auto", background: "var(--surface-raised)", boxShadow: "var(--shadow-panel)", borderBottom: "1px solid var(--border-hairline)" }}>
          <div style={{ padding: "var(--space-8) var(--gutter) var(--space-10)" }}>
            {Object.entries(menus).map(([group, links]) => (
              <div key={group} style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-6) 0" }}>
                <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-text)", marginBottom: "var(--space-4)" }}>{group}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                  {links.map(([l, h]) => (
                    <li key={l}><a href={h} style={{ display: "block", padding: "11px 0", minHeight: 44, font: "var(--fw-medium) 1.0625rem/1.3 var(--font-sans)", color: "var(--text-primary)", textDecoration: "none" }}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border-hairline)", padding: "var(--space-6) 0", display: "flex", flexWrap: "wrap", gap: "var(--space-5)" }}>
              {flat.map(([l, h]) => <a key={l} href={h} style={{ font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", color: "var(--text-primary)", textDecoration: "none", padding: "11px 0", minHeight: 44, display: "flex", alignItems: "center" }}>{l}</a>)}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
              <a href="/#estimate" className="btn btn-lg btn-primary">Free estimate</a>
              <a href={`tel:${phone.replace(/\D/g, "")}`} className="btn btn-lg btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React from "react";
import { Icon } from "../core/Icon.jsx";

const cols = [
  ["Hardscaping", [["Paver patios", "/hardscaping/paver-patios"],
    ["Paver driveways", "/hardscaping/paver-driveways"], ["Retaining walls", "/hardscaping/retaining-walls"], ["Walkways & steps", "/hardscaping/walkways"], ["Fire features", "/hardscaping/fire-features"], ["Grading & drainage", "/hardscaping/drainage"]]],
  ["Landscaping", [["Landscape installation", "/landscaping/installation"], ["Mulch & bed work", "/landscaping/mulch-beds"], ["Sod installation", "/landscaping/sod-installation"], ["Shrub & hedge trimming", "/landscaping/trimming"], ["Spring & fall cleanups", "/landscaping/yard-cleanups"], ["Landscape lighting", "/landscaping/landscape-lighting"], ["Christmas lights", "/landscaping/christmas-light-installation"]]],
  ["Commercial", [["Commercial landscaping", "/commercial-landscaping"], ["Commercial snow removal", "/commercial/snow-removal"]]],
  ["Company", [["Projects", "/projects"], ["About", "/about"], ["Service area", "/service-area"], ["Resources", "/resources"], ["FAQs", "/resources/faqs"], ["Contact", "#estimate"]]]
];

export function SiteFooter({ phone = "(717) 736-6538", email = "contact@alejandroslandscapes.com", towns = [], logo = "assets/logo.png", onNavigate, style, ...rest }) {
  const go = (e, href) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } };
  return (
    <footer style={{ background: "var(--surface-dark)", color: "var(--text-on-dark)", ...style }} {...rest}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y-tight) var(--gutter) var(--space-10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "var(--space-12)", paddingBottom: "var(--space-16)" }}>
          <div style={{ gridColumn: "span 1", minWidth: 200 }}>
            <img src={logo} alt="Alejandro's Landscaping" style={{ height: 44, width: "auto", filter: "brightness(0) invert(1)", marginBottom: "var(--space-6)" }} />
            <a href={`tel:${phone.replace(/\D/g, "")}`} style={{ display: "flex", alignItems: "center", gap: 8, font: "var(--fw-medium) 1.125rem/1 var(--font-sans)", color: "var(--text-on-dark)", textDecoration: "none", marginBottom: "var(--space-3)" }}>
              <Icon name="phone" size={16} />{phone}
            </a>
            <a href={`mailto:${email}`} style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", textDecoration: "none" }}>{email}</a>
          </div>
          {cols.map(([heading, links]) => (
            <nav key={heading}>
              <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-500)", marginBottom: "var(--space-5)" }}>{heading}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {links.map(([l, h]) => (
                  <li key={l}><a href={h} onClick={(e) => go(e, h)} style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {towns.length > 0 && (
          <div style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "var(--space-8)", marginBottom: "var(--space-8)" }}>
            <h3 style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-500)", marginBottom: "var(--space-5)" }}>Towns we work in</h3>
            <p style={{ font: "var(--type-small)", color: "var(--text-on-dark-secondary)", lineHeight: 2, maxWidth: "100%" }}>
              {towns.join(" · ")}
            </p>
          </div>
        )}

        <div style={{ borderTop: "1px solid var(--border-dark)", paddingTop: "var(--space-6)", display: "flex", flexWrap: "wrap", gap: "var(--space-6)", justifyContent: "space-between", font: "var(--type-caption)", color: "var(--text-on-dark-secondary)" }}>
          <span>© {new Date().getFullYear()} Alejandro's Landscaping</span>
          <span>New Cumberland, PA · Serving Cumberland, Dauphin, York, Perry, Lancaster and Lebanon counties</span>
        </div>
      </div>
    </footer>
  );
}

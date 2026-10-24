import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

export function SectionHead({ eyebrow, title, intro, align = "left", tone = "light", action, style, ...rest }) {
  const inverse = tone === "dark";
  return (
    <header style={{
      display: "flex", flexDirection: "column", gap: "var(--space-5)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left", ...style
    }} {...rest}>
      {eyebrow && <Eyebrow tone={inverse ? "inverse" : "brand"} rule={inverse}>{eyebrow}</Eyebrow>}
      <h2 style={{
        font: "var(--type-h2)", letterSpacing: "var(--ls-heading)",
        color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
        maxWidth: "18ch", textWrap: "pretty"
      }}>{title}</h2>
      {intro && <p style={{
        font: "var(--type-lead)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
        maxWidth: "var(--measure-lead)", textWrap: "pretty"
      }}>{intro}</p>}
      {action && <div style={{ marginTop: "var(--space-2)" }}>{action}</div>}
    </header>
  );
}

import React from "react";

export function ReviewQuote({ quote, name, town, service, tone = "light", size = "md", style, ...rest }) {
  const inverse = tone === "dark";
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-6)", ...style }} {...rest}>
      <blockquote style={{
        margin: 0, font: size === "lg" ? "var(--type-h2)" : "var(--fw-regular) 1.375rem/1.45 var(--font-display)",
        color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", maxWidth: "34ch", textWrap: "pretty"
      }}>{quote}</blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", font: "var(--type-caption)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)" }}>
        <span style={{ width: 20, height: 1, background: inverse ? "var(--border-dark)" : "var(--border-strong)" }} />
        <span style={{ color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", fontWeight: "var(--fw-medium)" }}>{name}</span>
        <span>{town}</span>
        {service && <span>· {service}</span>}
      </figcaption>
    </figure>
  );
}

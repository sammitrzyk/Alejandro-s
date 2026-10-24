import React from "react";

export function Eyebrow({ children, tone = "default", rule = false, style, ...rest }) {
  const colors = {
    default: "var(--text-muted)",
    brand: "var(--green-700)",
    accent: "var(--gold-text)",
    inverse: "rgba(244,241,235,.72)"
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", ...style }} {...rest}>
      {rule && <span style={{ width: 28, height: 1, background: tone === "inverse" ? "rgba(244,241,235,.42)" : "var(--border-strong)", flex: "0 0 auto" }} />}
      <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: colors[tone] }}>{children}</span>
    </div>
  );
}

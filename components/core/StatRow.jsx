import React from "react";

export function StatRow({ items, tone = "light", style, ...rest }) {
  const inverse = tone === "dark";
  return (
    <dl style={{
      display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(150px,1fr))`,
      gap: 0, margin: 0,
      borderTop: `1px solid ${inverse ? "var(--border-dark)" : "var(--border-hairline)"}`, ...style
    }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{
          padding: "var(--space-8) var(--space-6) var(--space-8) 0",
          borderBottom: `1px solid ${inverse ? "var(--border-dark)" : "var(--border-hairline)"}`
        }}>
          <dt style={{ font: "var(--type-stat)", color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", marginBottom: "var(--space-3)" }}>{it.value}</dt>
          <dd style={{ margin: 0, font: "var(--type-small)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)", maxWidth: "26ch" }}>{it.label}</dd>
        </div>
      ))}
    </dl>
  );
}

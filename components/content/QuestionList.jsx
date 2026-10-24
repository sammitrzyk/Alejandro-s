import React from "react";

export function QuestionList({ items, tone = "light", eyebrow, style, ...rest }) {
  const inverse = tone === "dark";
  const rule = inverse ? "var(--border-dark)" : "var(--border-hairline)";
  return (
    <div style={style} {...rest}>
      {items.map((q, i) => (
        <Row key={i} index={i + 1} rule={rule} inverse={inverse} {...q} />
      ))}
    </div>
  );
}

function Row({ index, question, answer, linkLabel, href, rule, inverse }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
      gap: "var(--space-3) clamp(20px,3.5vw,56px)", alignItems: "start",
      borderTop: `1px solid ${rule}`, padding: "clamp(20px,2.4vw,28px) 0"
    }}>
      <div style={{ display: "flex", gap: "var(--space-4)" }}>
        <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)", paddingTop: 5, flex: "0 0 auto", minWidth: 20 }}>
          {String(index).padStart(2, "0")}
        </span>
        <h3 style={{
          font: "var(--fw-regular) clamp(1.125rem,1.45vw,1.3125rem)/1.28 var(--font-display)",
          letterSpacing: "var(--ls-heading)",
          color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
          maxWidth: "26ch", textWrap: "pretty"
        }}>{question}</h3>
      </div>
      <div>
        <p style={{
          font: "var(--fw-regular) .9375rem/1.5 var(--font-sans)",
          color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
          maxWidth: "60ch", textWrap: "pretty"
        }}>{answer}</p>
        {href && (
          <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: "var(--space-2)", marginTop: "var(--space-3)",
              font: "var(--fw-semibold) .75rem/1 var(--font-sans)", letterSpacing: "var(--ls-button)", textTransform: "uppercase",
              color: inverse ? "var(--text-on-dark)" : "var(--green-800)", textDecoration: "none",
              borderBottom: `1px solid ${hover ? "var(--gold-500)" : inverse ? "var(--border-dark)" : "var(--border-strong)"}`,
              paddingBottom: 4, transition: "border-color var(--dur-fast) var(--ease-out)"
            }}>{linkLabel} →</a>
        )}
      </div>
    </div>
  );
}

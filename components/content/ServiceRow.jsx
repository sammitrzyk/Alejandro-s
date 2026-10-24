import React from "react";

export function ServiceRow({ index, title, summary, points = [], image, alt, href = "#", flip = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const text = (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "var(--space-5)", padding: "var(--space-10) 0" }}>
      {index && <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", color: "var(--gold-text)" }}>{index}</div>}
      <h3 style={{ font: "var(--type-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-primary)", maxWidth: "14ch" }}>{title}</h3>
      <p style={{ font: "var(--type-lead)", color: "var(--text-secondary)", maxWidth: "46ch", textWrap: "pretty" }}>{summary}</p>
      {points.length > 0 && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-5)" }}>
          {points.map((p, i) => (
            <li key={i} style={{ font: "var(--type-small)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <span style={{ width: 4, height: 4, background: "var(--gold-500)", flex: "0 0 auto" }} />{p}
            </li>
          ))}
        </ul>
      )}
      <a href={href} style={{
        font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase",
        color: "var(--green-800)", textDecoration: "none",
        borderBottom: `1px solid ${hover ? "var(--gold-500)" : "var(--border-strong)"}`,
        paddingBottom: 6, alignSelf: "flex-start", marginTop: "var(--space-2)",
        transition: "border-color var(--dur-fast) var(--ease-out)"
      }}>View {title.toLowerCase()}</a>
    </div>
  );
  const media = (
    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", background: "var(--stone-200)", borderRadius: "var(--radius-image)" }}>
      <img src={image} alt={alt} style={{
        width: "100%", height: "100%", objectFit: "cover",
        transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
        transition: "transform var(--dur-slow) var(--ease-out)"
      }} />
    </div>
  );
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "clamp(24px,4vw,72px)", alignItems: "center",
        borderTop: "1px solid var(--border-hairline)", ...style
      }} {...rest}>
      {flip ? <>{media}{text}</> : <>{text}{media}</>}
    </div>
  );
}

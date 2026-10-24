import React from "react";

export function ProjectTile({ image, alt, town, service, detail, href = "#", ratio = "4/3", size = "md", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "block", textDecoration: "none", color: "inherit", position: "relative", ...style }} {...rest}>
      <div style={{ position: "relative", aspectRatio: ratio, overflow: "hidden", background: "var(--stone-200)", borderRadius: "var(--radius-image)" }}>
        <img src={image} alt={alt} style={{
          width: "100%", height: "100%", objectFit: "cover",
          transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-out)"
        }} />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-tile)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: size === "lg" ? "var(--space-8)" : "var(--space-6)" }}>
          <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: "var(--space-2)" }}>{town}</div>
          <div style={{ font: size === "lg" ? "var(--type-h3)" : "var(--fw-medium) 1.1875rem/1.25 var(--font-display)", color: "#fff" }}>{service}</div>
          {detail && <div style={{ font: "var(--type-caption)", color: "rgba(255,255,255,.82)", marginTop: "var(--space-2)", maxWidth: "var(--measure-caption)" }}>{detail}</div>}
        </div>
      </div>
    </a>
  );
}

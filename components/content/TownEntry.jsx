import React from "react";

export function TownEntry({ town, county, distance, image, alt, notes, href = "#", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", textDecoration: "none", color: "inherit", ...style }} {...rest}>
      {image && (
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "2/1", background: "var(--stone-200)", borderRadius: "var(--radius-image)" }}>
          <img src={image} alt={alt} style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
            transition: "transform var(--dur-slow) var(--ease-out)"
          }} />
        </div>
      )}
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-3)" }}>
          <h3 style={{ font: "var(--type-h3)", color: "var(--text-primary)" }}>{town}</h3>
          <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{county}{distance ? ` · ${distance}` : ""}</span>
        </div>
        <p style={{ font: "var(--type-small)", color: "var(--text-secondary)", maxWidth: "44ch", textWrap: "pretty" }}>{notes}</p>
      </div>
    </a>
  );
}

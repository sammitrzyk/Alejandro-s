import React from "react";

/* Renders a Lucide glyph from the UMD build loaded on the page
   (https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js).
   Alejandro's has no icon set of its own — see readme.md → ICONOGRAPHY. */
function toPascal(name) {
  return name.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

export function Icon({ name, size = 18, strokeWidth = 1.5, color = "currentColor", style, ...rest }) {
  const lib = typeof window !== "undefined" && window.lucide && window.lucide.icons;
  const node = lib && (lib[toPascal(name)] || lib[name]);
  const children = node ? (Array.isArray(node) ? node[2] : node) : null;
  if (!children) return <span style={{ display: "inline-block", width: size, height: size, ...style }} aria-hidden="true" {...rest} />;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" style={{ display: "block", flex: "0 0 auto", ...style }} {...rest}>
      {children.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}

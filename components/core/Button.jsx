import React from "react";

const base = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
  font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase",
  border: "var(--border-width) solid transparent", borderRadius: "var(--radius-none)",
  cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap",
  transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
};

const sizes = {
  sm: { padding: "10px 18px", minHeight: 40, fontSize: ".8125rem" },
  md: { padding: "15px 28px", minHeight: 48, fontSize: "var(--fs-button)" },
  lg: { padding: "19px 38px", minHeight: 56, fontSize: ".9375rem" }
};

const variants = {
  primary: { background: "var(--cta-bg)", color: "var(--cta-text)", borderColor: "var(--cta-bg)" },
  accent: { background: "var(--cta-accent-bg)", color: "var(--cta-accent-text)", borderColor: "var(--cta-accent-bg)" },
  outline: { background: "transparent", color: "var(--green-800)", borderColor: "var(--border-strong)" },
  inverse: { background: "transparent", color: "var(--text-on-dark)", borderColor: "rgba(244,241,235,.42)" },
  solidLight: { background: "var(--stone-0)", color: "var(--green-950)", borderColor: "var(--stone-0)" }
};

const hovers = {
  primary: { background: "var(--cta-bg-hover)", borderColor: "var(--cta-bg-hover)" },
  accent: { background: "var(--cta-accent-bg-hover)", borderColor: "var(--cta-accent-bg-hover)" },
  outline: { borderColor: "var(--green-800)", background: "var(--green-50)" },
  inverse: { borderColor: "var(--gold-500)", color: "var(--gold-300)" },
  solidLight: { background: "var(--gold-500)", borderColor: "var(--gold-500)" }
};

export function Button({
  children, variant = "primary", size = "md", href, fullWidth = false,
  disabled = false, type = "button", onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const composed = {
    ...base, ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...(disabled ? { opacity: .42, cursor: "not-allowed" } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: composed
  };
  if (href && !disabled) return <a href={href} {...handlers} {...rest}>{children}</a>;
  return <button type={type} disabled={disabled} onClick={onClick} {...handlers} {...rest}>{children}</button>;
}

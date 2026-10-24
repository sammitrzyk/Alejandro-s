import React from "react";

export function Field({ label, name, type = "text", placeholder, hint, options, rows, required = false, tone = "light", value, onChange, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === "dark";
  const control = {
    width: "100%", font: "var(--type-body)", color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
    background: inverse ? "rgba(255,255,255,.05)" : "var(--surface-raised)",
    border: `1px solid ${focus ? "var(--gold-500)" : inverse ? "var(--border-dark)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-none)", padding: "14px 16px", minHeight: 50, outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-out)"
  };
  const shared = { id: name, name, required, value, onChange, onFocus: () => setFocus(true), onBlur: () => setFocus(false), style: control, ...rest };
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "var(--space-2)", ...style }}>
      <label htmlFor={name} style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)" }}>
        {label}{required && <span style={{ color: "var(--gold-text)" }}> *</span>}
      </label>
      {type === "textarea"
        ? <textarea rows={rows || 4} placeholder={placeholder} {...shared} style={{ ...control, minHeight: 108, resize: "vertical" }} />
        : type === "select"
          ? <div style={{ position: "relative" }}>
              <select {...shared} style={{ ...control, height: 50, appearance: "none", WebkitAppearance: "none", MozAppearance: "none", paddingRight: 44, cursor: "pointer" }}>{(options || []).map((o) => <option key={o} value={o} style={{ color: "var(--text-primary)", background: "var(--surface-raised)" }}>{o}</option>)}</select>
              <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke={inverse ? "var(--gold-300)" : "var(--gold-text)"} strokeWidth="1.5" /></svg>
            </div>
          : <input type={type} placeholder={placeholder} {...shared} />}
      {hint && <span style={{ font: "var(--type-caption)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}

import { useState } from "react";

const PROJECTS = ["Paver patio", "Retaining wall", "Walkway or steps", "Fire feature / seat wall", "Landscaping or beds", "Grading & drainage", "Commercial grounds", "Snow removal", "Not sure yet"];

/* The only genuinely interactive part of the estimate form is the post-submit state swap —
   everything else degrades to a normal HTML POST. Submits to Netlify Forms via fetch so the
   visitor sees the confirmation inline instead of a redirect. Netlify matches on form name
   + the hidden form-name field; notification recipient (contact@alejandroslandscapes.com) is
   configured in the Netlify dashboard under Forms > Notifications, not in code. */
export default function EstimateForm({ tone = "light", projects = PROJECTS }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const inverse = tone === "dark";

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch("/", { method: "POST", body: new URLSearchParams(data).toString(), headers: { "Content-Type": "application/x-www-form-urlencoded" } });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setError(true);
      form.submit();
    }
  }

  if (sent) {
    return (
      <div style={{ padding: "var(--space-12) 0" }}>
        <p style={{ font: "var(--type-h3)", color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", maxWidth: "24ch" }}>Thanks — we'll be in touch.</p>
        <p style={{ font: "var(--type-body)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "44ch" }}>
          We received your request and will follow up at the phone number or email you provided.
        </p>
      </div>
    );
  }

  return (
    <form name="estimate" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <input type="hidden" name="form-name" value="estimate" />
      <p style={{ display: "none" }}><label>Don't fill this out: <input name="bot-field" /></label></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "var(--space-5)" }}>
        <FieldEl label="Name" name="name" required tone={tone} />
        <FieldEl label="Phone" name="phone" type="tel" required tone={tone} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "var(--space-5)" }}>
        <FieldEl label="Town" name="town" required placeholder="Camp Hill" tone={tone} />
        <FieldEl label="What are you looking at?" name="project" type="select" options={projects} tone={tone} />
      </div>
      <FieldEl label="Tell us about the yard" name="detail" type="textarea" tone={tone} placeholder="Rough size, what is there now, anything that worries you about the slope or drainage." />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-5)", alignItems: "center", marginTop: "var(--space-2)" }}>
        <button type="submit" className={`btn btn-lg ${inverse ? "btn-accent" : "btn-primary"}`}>Request an estimate</button>
        {error && <p style={{ font: "var(--type-caption)", color: "var(--status-emergency)" }}>Submitting the regular way — one moment.</p>}
      </div>
    </form>
  );
}

function FieldEl({ label, name, type = "text", placeholder, options, rows, required = false, tone = "light" }) {
  const inverse = tone === "dark";
  const controlClass = `field-control${inverse ? " field-control-dark" : ""}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "var(--space-2)" }}>
      <label htmlFor={name} style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)" }}>
        {label}{required && <span style={{ color: "var(--gold-text)" }}> *</span>}
      </label>
      {type === "textarea" ? (
        <textarea id={name} name={name} rows={rows || 4} placeholder={placeholder} required={required} className={controlClass} />
      ) : type === "select" ? (
        <select id={name} name={name} required={required} className={controlClass} style={{ height: 50, appearance: "none", paddingRight: 44, cursor: "pointer" }}>
          {(options || []).map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} required={required} className={controlClass} />
      )}
    </div>
  );
}

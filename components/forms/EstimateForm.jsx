import React from "react";
import { Field } from "./Field.jsx";
import { Button } from "../core/Button.jsx";

const PROJECTS = ["Paver patio", "Retaining wall", "Walkway or steps", "Fire feature / seat wall", "Landscaping or beds", "Grading & drainage", "Commercial grounds", "Snow removal", "Not sure yet"];

export function EstimateForm({ tone = "light", projects = PROJECTS, expectation = "[VERIFY ESTIMATE PROCESS AND RESPONSE TIME — what Alejandro's will actually hold to, and what the homeowner receives in writing.]", onSubmit, style, ...rest }) {
  const [sent, setSent] = React.useState(false);
  const inverse = tone === "dark";
  const submit = (e) => { e.preventDefault(); setSent(true); onSubmit && onSubmit(Object.fromEntries(new FormData(e.target))); };

  if (sent) return (
    <div style={{ padding: "var(--space-12) 0", ...style }}>
      <p style={{ font: "var(--type-h3)", color: inverse ? "var(--text-on-dark)" : "var(--text-primary)", maxWidth: "24ch" }}>[VERIFY POST-SUBMIT CONFIRMATION COPY]</p>
      <p style={{ font: "var(--type-body)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)", marginTop: "var(--space-4)", maxWidth: "44ch" }}>{expectation}</p>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", ...style }} {...rest}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "var(--space-5)" }}>
        <Field label="Name" name="name" required tone={tone} />
        <Field label="Phone" name="phone" type="tel" required tone={tone} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "var(--space-5)" }}>
        <Field label="Town" name="town" required placeholder="Camp Hill" tone={tone} />
        <Field label="What are you looking at?" name="project" type="select" options={projects} tone={tone} />
      </div>
      <Field label="Tell us about the yard" name="detail" type="textarea" tone={tone}
        placeholder="Rough size, what is there now, anything that worries you about the slope or drainage." />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-5)", alignItems: "center", marginTop: "var(--space-2)" }}>
        <Button type="submit" variant={inverse ? "accent" : "primary"} size="lg">Request an estimate</Button>
        <p style={{ font: "var(--type-caption)", color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)", maxWidth: "32ch" }}>{expectation}</p>
      </div>
    </form>
  );
}

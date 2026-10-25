import { useState } from "react";

const ST_MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const ST_PLANTS = [
  ["Boxwood", [4, 5], [7], "Shear after the spring flush, with a light touch-up in late summer."],
  ["Yew", [5], [7], "Shape in early summer; a second light cut in August keeps it tight."],
  ["Privet", [4, 5, 6, 7], [], "Fast grower. Sheared two or three times through the summer."],
  ["Arborvitae", [4, 5], [], "Light shear in late spring. Don't cut back into bare brown wood; it won't regrow."],
  ["Holly", [1, 2], [6], "Main shaping in late winter, with a light tidy in early summer."],
  ["Azalea", [5], [], "Right after it flowers. Later than early July and you cut off next year's buds."],
  ["Forsythia & lilac", [4, 5], [], "Straight after bloom. Both flower on last year's growth."],
  ["Panicle hydrangea", [1, 2], [], "Late winter, before growth starts. It flowers on new wood."],
];

export default function TrimCalendar() {
  const [pick, setPick] = useState(0);
  const [name, main, light, note] = ST_PLANTS[pick];
  return (
    <div style={{ marginTop: "var(--space-8)" }}>
      <div role="tablist" aria-label="Choose a shrub" style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingBottom: 4 }}>
        {ST_PLANTS.map(([n], i) => (
          <button key={n} role="tab" aria-selected={pick === i} onClick={() => setPick(i)} style={{ flex: "0 0 auto", minHeight: 40, padding: "0 14px", border: `1px solid ${pick === i ? "var(--gold-500)" : "var(--border-dark)"}`, background: pick === i ? "var(--gold-500)" : "transparent", color: pick === i ? "var(--green-950)" : "var(--text-on-dark)", font: "var(--type-small)", cursor: "pointer" }}>{n}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12,minmax(0,1fr))", gap: 3, marginTop: "var(--space-6)" }} aria-label={`Trimming months for ${name}`}>
        {ST_MONTHS.map((m, i) => {
          const on = main.includes(i), lt = light.includes(i), avoid = i >= 8 && i <= 10;
          return (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ height: 44, background: on ? "var(--gold-500)" : lt ? "rgba(245,179,36,.38)" : "rgba(244,241,235,.08)", borderBottom: avoid ? "2px solid #A93916" : "2px solid transparent" }} />
              <div style={{ font: "var(--type-caption)", color: on ? "var(--gold-300)" : "var(--text-on-dark-secondary)", marginTop: 6 }}>{m}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-5)", marginTop: "var(--space-4)", font: "var(--type-caption)", color: "var(--text-on-dark-secondary)" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "var(--gold-500)", marginRight: 6 }} />Main cut</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "rgba(245,179,36,.38)", marginRight: 6 }} />Light touch-up</span>
        <span><span style={{ display: "inline-block", width: 10, height: 2, background: "#A93916", marginRight: 6, verticalAlign: "middle" }} />Avoid: new growth won't harden before frost</span>
      </div>
      <p style={{ font: "var(--type-lead)", color: "var(--text-on-dark)", marginTop: "var(--space-6)", maxWidth: "52ch" }}><strong style={{ fontWeight: 600 }}>{name}.</strong> {note}</p>
    </div>
  );
}

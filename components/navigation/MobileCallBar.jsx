import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Inlined rather than shared from SiteHeader: a lowercase non-component export
   across component files is not picked up by the bundler. */
function useMedia(query) {
  const [hit, setHit] = React.useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const on = (e) => setHit(e.matches);
    setHit(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return hit;
}

export function MobileCallBar({ phone = "(717) 736-6538", estimateHref = "/estimate", onNavigate, hideAbove = 900, revealAfter = 400, style, ...rest }) {
  const show = useMedia(`(max-width:${hideAbove - 1}px)`);
  const [past, setPast] = React.useState(false);
  React.useEffect(() => {
    const on = () => setPast(window.scrollY > revealAfter);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [revealAfter]);
  if (!show) return null;
  const cell = {
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 56,
    font: "var(--type-button)", letterSpacing: "var(--ls-button)", textTransform: "uppercase", textDecoration: "none"
  };
  return (
    <>
      <div aria-hidden="true" style={{ height: 56 }} />
      <div aria-hidden={past ? undefined : "true"} style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, display: "grid", gridTemplateColumns: "1fr 1fr",
        background: "var(--surface-raised)", boxShadow: "var(--shadow-sticky)",
        transform: past ? "translateY(0)" : "translateY(100%)",
        opacity: past ? 1 : 0,
        pointerEvents: past ? "auto" : "none",
        transition: "transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)",
        ...style
      }} {...rest}>
        <a href={`tel:${phone.replace(/\D/g, "")}`} style={{ ...cell, color: "var(--green-800)", borderRight: "1px solid var(--border-hairline)" }}>
          <Icon name="phone" size={16} />Call
        </a>
        <a href={estimateHref} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(estimateHref); } }}
          style={{ ...cell, background: "var(--cta-bg)", color: "var(--cta-text)" }}>
          Free estimate<Icon name="arrow-right" size={16} />
        </a>
      </div>
    </>
  );
}

/* @ds-bundle: {"format":4,"namespace":"AlejandroSLandscapingDesignSystem_a675b9","components":[{"name":"BeforeAfter","sourcePath":"components/content/BeforeAfter.jsx"},{"name":"ProjectTile","sourcePath":"components/content/ProjectTile.jsx"},{"name":"QuestionList","sourcePath":"components/content/QuestionList.jsx"},{"name":"ReviewQuote","sourcePath":"components/content/ReviewQuote.jsx"},{"name":"ServiceRow","sourcePath":"components/content/ServiceRow.jsx"},{"name":"TownEntry","sourcePath":"components/content/TownEntry.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"StatRow","sourcePath":"components/core/StatRow.jsx"},{"name":"EstimateForm","sourcePath":"components/forms/EstimateForm.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"MobileCallBar","sourcePath":"components/navigation/MobileCallBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/BeforeAfter.jsx":"f421eedf427d","components/content/ProjectTile.jsx":"7eba216d29e0","components/content/QuestionList.jsx":"eb43ff6e8ec9","components/content/ReviewQuote.jsx":"ebf58b3f0b8b","components/content/ServiceRow.jsx":"4b64df3b8a44","components/content/TownEntry.jsx":"dfc50800d9be","components/core/Button.jsx":"274f07f40251","components/core/Eyebrow.jsx":"ce062f8a2f69","components/core/Icon.jsx":"09f1515b0c29","components/core/SectionHead.jsx":"3ac3bbeb1977","components/core/StatRow.jsx":"19f33eff3e26","components/forms/EstimateForm.jsx":"8b9f177df1be","components/forms/Field.jsx":"9c577069da24","components/navigation/MobileCallBar.jsx":"d2ec27b48223","components/navigation/SiteFooter.jsx":"e2a10655e5cd","components/navigation/SiteHeader.jsx":"504687080d43","ui_kits/website/About.jsx":"aeedccf27d1c","ui_kits/website/CommercialLandscaping.jsx":"6c47fdd5344a","ui_kits/website/FaqCenter.jsx":"a99786b8f25c","ui_kits/website/Home.jsx":"91813302c718","ui_kits/website/LandscapeInstallation.jsx":"107d8c715554","ui_kits/website/MulchBedWork.jsx":"5055a9939672","ui_kits/website/PaverDriveways.jsx":"755c46348d49","ui_kits/website/PaverPatios.jsx":"b43e18f98472","ui_kits/website/ProjectPage.jsx":"9ed25951e0bf","ui_kits/website/Projects.jsx":"ccbc2f0c6fe7","ui_kits/website/Resources.jsx":"895aee69a7c9","ui_kits/website/RetainingWalls.jsx":"8d2397ecad97","ui_kits/website/ServiceArea.jsx":"170f0c884a56","ui_kits/website/ServicePage.jsx":"e1a99d20ae62","ui_kits/website/Shell.jsx":"f9e51c3d0916","ui_kits/website/ShrubTrimming.jsx":"d769c5107ec6","ui_kits/website/SnowRemoval.jsx":"a5fdd4166e10","ui_kits/website/TownPage.jsx":"b5870f353419","ui_kits/website/WalkwaysSteps.jsx":"7888bc77b6f1","ui_kits/website/YardCleanups.jsx":"a49684f1e3f4","ui_kits/website/projects-data.js":"7521e76038b0","ui_kits/website/seo.js":"5d69c58cd245","ui_kits/website/service-data-hardscape.js":"2a1a1ba3b44f","ui_kits/website/service-data-landscape.js":"e0ea99b7584b","ui_kits/website/service-data-other.js":"0b811eef311d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlejandroSLandscapingDesignSystem_a675b9 = window.AlejandroSLandscapingDesignSystem_a675b9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BeforeAfter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  caption,
  ratio = "4/3",
  style,
  ...rest
}) {
  const [pos, setPos] = React.useState(50);
  const [w, setW] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const move = clientX => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, (clientX - r.left) / r.width * 100)));
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onPointerDown: e => {
      e.currentTarget.setPointerCapture(e.pointerId);
      move(e.clientX);
    },
    onPointerMove: e => {
      if (e.buttons === 1) move(e.clientX);
    },
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      cursor: "ew-resize",
      userSelect: "none",
      touchAction: "none",
      background: "var(--stone-200)",
      borderRadius: "var(--radius-image)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: after,
    alt: afterAlt,
    draggable: false,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: `${pos}%`,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: before,
    alt: beforeAlt,
    draggable: false,
    style: {
      position: "absolute",
      inset: 0,
      width: w ? w + "px" : "100%",
      maxWidth: "none",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      background: "var(--gold-500)",
      transform: "translateX(-1px)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 44,
      height: 44,
      background: "var(--gold-500)",
      display: "grid",
      placeItems: "center",
      font: "var(--type-eyebrow)",
      letterSpacing: 0,
      color: "var(--green-950)"
    }
  }, "\u25C2 \u25B8")), ["Before", "After"].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      position: "absolute",
      bottom: "var(--space-4)",
      [i ? "right" : "left"]: "var(--space-4)",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "#fff",
      background: "rgba(10,36,22,.72)",
      padding: "6px 10px"
    }
  }, l))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-4)",
      maxWidth: "var(--measure-caption)"
    }
  }, caption));
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectTile({
  image,
  alt,
  town,
  service,
  detail,
  href = "#",
  ratio = "4/3",
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--stone-200)",
      borderRadius: "var(--radius-image)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-tile)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: size === "lg" ? "var(--space-8)" : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: "var(--space-2)"
    }
  }, town), /*#__PURE__*/React.createElement("div", {
    style: {
      font: size === "lg" ? "var(--type-h3)" : "var(--fw-medium) 1.1875rem/1.25 var(--font-display)",
      color: "#fff"
    }
  }, service), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "rgba(255,255,255,.82)",
      marginTop: "var(--space-2)",
      maxWidth: "var(--measure-caption)"
    }
  }, detail))));
}
Object.assign(__ds_scope, { ProjectTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectTile.jsx", error: String((e && e.message) || e) }); }

// components/content/QuestionList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuestionList({
  items,
  tone = "light",
  eyebrow,
  style,
  ...rest
}) {
  const inverse = tone === "dark";
  const rule = inverse ? "var(--border-dark)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), items.map((q, i) => /*#__PURE__*/React.createElement(Row, _extends({
    key: i,
    index: i + 1,
    rule: rule,
    inverse: inverse
  }, q))));
}
function Row({
  index,
  question,
  answer,
  linkLabel,
  href,
  rule,
  inverse
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
      gap: "var(--space-3) clamp(20px,3.5vw,56px)",
      alignItems: "start",
      borderTop: `1px solid ${rule}`,
      padding: "clamp(20px,2.4vw,28px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)",
      paddingTop: 5,
      flex: "0 0 auto",
      minWidth: 20
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-regular) clamp(1.125rem,1.45vw,1.3125rem)/1.28 var(--font-display)",
      letterSpacing: "var(--ls-heading)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      maxWidth: "26ch",
      textWrap: "pretty"
    }
  }, question)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) .9375rem/1.5 var(--font-sans)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      maxWidth: "60ch",
      textWrap: "pretty"
    }
  }, answer), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-3)",
      font: "var(--fw-semibold) .75rem/1 var(--font-sans)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-on-dark)" : "var(--green-800)",
      textDecoration: "none",
      borderBottom: `1px solid ${hover ? "var(--gold-500)" : inverse ? "var(--border-dark)" : "var(--border-strong)"}`,
      paddingBottom: 4,
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, linkLabel, " \u2192")));
}
Object.assign(__ds_scope, { QuestionList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuestionList.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ReviewQuote({
  quote,
  name,
  town,
  service,
  tone = "light",
  size = "md",
  style,
  ...rest
}) {
  const inverse = tone === "dark";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: size === "lg" ? "var(--type-h2)" : "var(--fw-regular) 1.375rem/1.45 var(--font-display)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      maxWidth: "34ch",
      textWrap: "pretty"
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      font: "var(--type-caption)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 1,
      background: inverse ? "var(--border-dark)" : "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      fontWeight: "var(--fw-medium)"
    }
  }, name), /*#__PURE__*/React.createElement("span", null, town), service && /*#__PURE__*/React.createElement("span", null, "\xB7 ", service)));
}
Object.assign(__ds_scope, { ReviewQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceRow({
  index,
  title,
  summary,
  points = [],
  image,
  alt,
  href = "#",
  flip = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "var(--space-5)",
      padding: "var(--space-10) 0"
    }
  }, index && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)"
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)",
      maxWidth: "14ch"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "46ch",
      textWrap: "pretty"
    }
  }, summary), points.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2) var(--space-5)"
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      font: "var(--type-small)",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: "var(--gold-500)",
      flex: "0 0 auto"
    }
  }), p))), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: `1px solid ${hover ? "var(--gold-500)" : "var(--border-strong)"}`,
      paddingBottom: 6,
      alignSelf: "flex-start",
      marginTop: "var(--space-2)",
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, "View ", title.toLowerCase()));
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: "4/3",
      background: "var(--stone-200)",
      borderRadius: "var(--radius-image)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "clamp(24px,4vw,72px)",
      alignItems: "center",
      borderTop: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), flip ? /*#__PURE__*/React.createElement(React.Fragment, null, media, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, media));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/content/TownEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TownEntry({
  town,
  county,
  distance,
  image,
  alt,
  notes,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: "2/1",
      background: "var(--stone-200)",
      borderRadius: "var(--radius-image)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(var(--hover-image-scale))" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-primary)"
    }
  }, town), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, county, distance ? ` · ${distance}` : "")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "44ch",
      textWrap: "pretty"
    }
  }, notes)));
}
Object.assign(__ds_scope, { TownEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TownEntry.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  font: "var(--type-button)",
  letterSpacing: "var(--ls-button)",
  textTransform: "uppercase",
  border: "var(--border-width) solid transparent",
  borderRadius: "var(--radius-none)",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
};
const sizes = {
  sm: {
    padding: "10px 18px",
    minHeight: 40,
    fontSize: ".8125rem"
  },
  md: {
    padding: "15px 28px",
    minHeight: 48,
    fontSize: "var(--fs-button)"
  },
  lg: {
    padding: "19px 38px",
    minHeight: 56,
    fontSize: ".9375rem"
  }
};
const variants = {
  primary: {
    background: "var(--cta-bg)",
    color: "var(--cta-text)",
    borderColor: "var(--cta-bg)"
  },
  accent: {
    background: "var(--cta-accent-bg)",
    color: "var(--cta-accent-text)",
    borderColor: "var(--cta-accent-bg)"
  },
  outline: {
    background: "transparent",
    color: "var(--green-800)",
    borderColor: "var(--border-strong)"
  },
  inverse: {
    background: "transparent",
    color: "var(--text-on-dark)",
    borderColor: "rgba(244,241,235,.42)"
  },
  solidLight: {
    background: "var(--stone-0)",
    color: "var(--green-950)",
    borderColor: "var(--stone-0)"
  }
};
const hovers = {
  primary: {
    background: "var(--cta-bg-hover)",
    borderColor: "var(--cta-bg-hover)"
  },
  accent: {
    background: "var(--cta-accent-bg-hover)",
    borderColor: "var(--cta-accent-bg-hover)"
  },
  outline: {
    borderColor: "var(--green-800)",
    background: "var(--green-50)"
  },
  inverse: {
    borderColor: "var(--gold-500)",
    color: "var(--gold-300)"
  },
  solidLight: {
    background: "var(--gold-500)",
    borderColor: "var(--gold-500)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: .42,
      cursor: "not-allowed"
    } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: composed
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = "default",
  rule = false,
  style,
  ...rest
}) {
  const colors = {
    default: "var(--text-muted)",
    brand: "var(--green-700)",
    accent: "var(--gold-text)",
    inverse: "rgba(244,241,235,.72)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: tone === "inverse" ? "rgba(244,241,235,.42)" : "var(--border-strong)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: colors[tone]
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Renders a Lucide glyph from the UMD build loaded on the page
   (https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js).
   Alejandro's has no icon set of its own — see readme.md → ICONOGRAPHY. */
function toPascal(name) {
  return name.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = "currentColor",
  style,
  ...rest
}) {
  const lib = typeof window !== "undefined" && window.lucide && window.lucide.icons;
  const node = lib && (lib[toPascal(name)] || lib[name]);
  const children = node ? Array.isArray(node) ? node[2] : node : null;
  if (!children) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: size,
      height: size,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest), children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  action,
  style,
  ...rest
}) {
  const inverse = tone === "dark";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? "inverse" : "brand",
    rule: inverse
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      maxWidth: "18ch",
      textWrap: "pretty"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      maxWidth: "var(--measure-lead)",
      textWrap: "pretty"
    }
  }, intro), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/StatRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatRow({
  items,
  tone = "light",
  style,
  ...rest
}) {
  const inverse = tone === "dark";
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit,minmax(150px,1fr))`,
      gap: 0,
      margin: 0,
      borderTop: `1px solid ${inverse ? "var(--border-dark)" : "var(--border-hairline)"}`,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "var(--space-8) var(--space-6) var(--space-8) 0",
      borderBottom: `1px solid ${inverse ? "var(--border-dark)" : "var(--border-hairline)"}`
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-stat)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      marginBottom: "var(--space-3)"
    }
  }, it.value), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      maxWidth: "26ch"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  name,
  type = "text",
  placeholder,
  hint,
  options,
  rows,
  required = false,
  tone = "light",
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === "dark";
  const control = {
    width: "100%",
    font: "var(--type-body)",
    color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
    background: inverse ? "rgba(255,255,255,.05)" : "var(--surface-raised)",
    border: `1px solid ${focus ? "var(--gold-500)" : inverse ? "var(--border-dark)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-none)",
    padding: "14px 16px",
    minHeight: 50,
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-out)"
  };
  const shared = {
    id: name,
    name,
    required,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      gap: "var(--space-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-text)"
    }
  }, " *")), type === "textarea" ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows || 4,
    placeholder: placeholder
  }, shared, {
    style: {
      ...control,
      minHeight: 108,
      resize: "vertical"
    }
  })) : type === "select" ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, shared, {
    style: {
      ...control,
      height: 50,
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      paddingRight: 44,
      cursor: "pointer"
    }
  }), (options || []).map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: "var(--text-primary)",
      background: "var(--surface-raised)"
    }
  }, o))), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5 6 6.5 11 1.5",
    fill: "none",
    stroke: inverse ? "var(--gold-300)" : "var(--gold-text)",
    strokeWidth: "1.5"
  }))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder
  }, shared)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/EstimateForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PROJECTS = ["Paver patio", "Retaining wall", "Walkway or steps", "Fire feature / seat wall", "Landscaping or beds", "Grading & drainage", "Commercial grounds", "Snow removal", "Not sure yet"];
function EstimateForm({
  tone = "light",
  projects = PROJECTS,
  expectation = "[VERIFY ESTIMATE PROCESS AND RESPONSE TIME — what Alejandro's will actually hold to, and what the homeowner receives in writing.]",
  onSubmit,
  style,
  ...rest
}) {
  const [sent, setSent] = React.useState(false);
  const inverse = tone === "dark";
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit(Object.fromEntries(new FormData(e.target)));
  };
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-12) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-h3)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      maxWidth: "24ch"
    }
  }, "[VERIFY POST-SUBMIT CONFIRMATION COPY]"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "44ch"
    }
  }, expectation));
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    name: "name",
    required: true,
    tone: tone
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Phone",
    name: "phone",
    type: "tel",
    required: true,
    tone: tone
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Town",
    name: "town",
    required: true,
    placeholder: "Camp Hill",
    tone: tone
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "What are you looking at?",
    name: "project",
    type: "select",
    options: projects,
    tone: tone
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Tell us about the yard",
    name: "detail",
    type: "textarea",
    tone: tone,
    placeholder: "Rough size, what is there now, anything that worries you about the slope or drainage."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)",
      alignItems: "center",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: inverse ? "accent" : "primary",
    size: "lg"
  }, "Request an estimate"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-muted)",
      maxWidth: "32ch"
    }
  }, expectation)));
}
Object.assign(__ds_scope, { EstimateForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EstimateForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileCallBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inlined rather than shared from SiteHeader: a lowercase non-component export
   across component files is not picked up by the bundler. */
function useMedia(query) {
  const [hit, setHit] = React.useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const on = e => setHit(e.matches);
    setHit(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return hit;
}
function MobileCallBar({
  phone = "(717) 736-6538",
  estimateHref = "/estimate",
  onNavigate,
  hideAbove = 900,
  revealAfter = 400,
  style,
  ...rest
}) {
  const show = useMedia(`(max-width:${hideAbove - 1}px)`);
  const [past, setPast] = React.useState(false);
  React.useEffect(() => {
    const on = () => setPast(window.scrollY > revealAfter);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, [revealAfter]);
  if (!show) return null;
  const cell = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: 56,
    font: "var(--type-button)",
    letterSpacing: "var(--ls-button)",
    textTransform: "uppercase",
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": past ? undefined : "true",
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 60,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--surface-raised)",
      boxShadow: "var(--shadow-sticky)",
      transform: past ? "translateY(0)" : "translateY(100%)",
      opacity: past ? 1 : 0,
      pointerEvents: past ? "auto" : "none",
      transition: "transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\D/g, "")}`,
    style: {
      ...cell,
      color: "var(--green-800)",
      borderRight: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  }), "Call"), /*#__PURE__*/React.createElement("a", {
    href: estimateHref,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(estimateHref);
      }
    },
    style: {
      ...cell,
      background: "var(--cta-bg)",
      color: "var(--cta-text)"
    }
  }, "Free estimate", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { MobileCallBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileCallBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cols = [["Hardscaping", [["Paver patios", "/hardscaping/paver-patios"], ["Paver driveways", "/hardscaping/paver-driveways"], ["Retaining walls", "/hardscaping/retaining-walls"], ["Walkways & steps", "/hardscaping/walkways"], ["Fire features", "/hardscaping/fire-features"], ["Grading & drainage", "/hardscaping/drainage"]]], ["Landscaping", [["Landscape installation", "/landscaping/installation"], ["Mulch & bed work", "/landscaping/mulch-beds"], ["Sod installation", "/landscaping/sod-installation"], ["Shrub & hedge trimming", "/landscaping/trimming"], ["Spring & fall cleanups", "/landscaping/yard-cleanups"], ["Landscape lighting", "/landscaping/landscape-lighting"], ["Christmas lights", "/landscaping/christmas-light-installation"]]], ["Commercial", [["Commercial landscaping", "/commercial-landscaping"], ["Commercial snow removal", "/commercial/snow-removal"]]], ["Company", [["Projects", "/projects"], ["About", "/about"], ["Service area", "/service-area"], ["Resources", "/resources"], ["FAQs", "/resources/faqs"], ["Contact", "#estimate"]]]];
function SiteFooter({
  phone = "(717) 736-6538",
  email = "contact@alejandroslandscapes.com",
  towns = [],
  logo = "assets/logo.png",
  onNavigate,
  style,
  ...rest
}) {
  const go = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y-tight) var(--gutter) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "var(--space-12)",
      paddingBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 1",
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Alejandro's Landscaping",
    style: {
      height: 44,
      width: "auto",
      filter: "brightness(0) invert(1)",
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\D/g, "")}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--fw-medium) 1.125rem/1 var(--font-sans)",
      color: "var(--text-on-dark)",
      textDecoration: "none",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  }), phone), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      textDecoration: "none"
    }
  }, email)), cols.map(([heading, links]) => /*#__PURE__*/React.createElement("nav", {
    key: heading
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-500)",
      marginBottom: "var(--space-5)"
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    onClick: e => go(e, h),
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      textDecoration: "none"
    }
  }, l))))))), towns.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-dark)",
      paddingTop: "var(--space-8)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-500)",
      marginBottom: "var(--space-5)"
    }
  }, "Towns we work in"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      lineHeight: 2,
      maxWidth: "100%"
    }
  }, towns.join(" · "))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-dark)",
      paddingTop: "var(--space-6)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      justifyContent: "space-between",
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Alejandro's Landscaping"), /*#__PURE__*/React.createElement("span", null, "New Cumberland, PA \xB7 Serving Cumberland, Dauphin, York, Perry, Lancaster and Lebanon counties"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const menus = {
  Commercial: [["Commercial landscaping", "/commercial-landscaping"], ["Commercial snow removal", "/commercial/snow-removal"]],
  Hardscaping: [["Paver patios", "/hardscaping/paver-patios"], ["Paver driveways", "/hardscaping/paver-driveways"], ["Retaining walls", "/hardscaping/retaining-walls"], ["Walkways & steps", "/hardscaping/walkways"], ["Fire features & seat walls", "/hardscaping/fire-features"], ["Grading & drainage", "/hardscaping/drainage"]],
  Landscaping: [["Landscape installation", "/landscaping/installation"], ["Mulch & bed work", "/landscaping/mulch-beds"], ["Sod installation", "/landscaping/sod-installation"], ["Shrub & hedge trimming", "/landscaping/trimming"], ["Spring & fall cleanups", "/landscaping/yard-cleanups"], ["Landscape lighting", "/landscaping/landscape-lighting"], ["Christmas light installation", "/landscaping/christmas-light-installation"]]
};
const flat = [["Projects", "/projects"], ["Areas", "/service-area"], ["Resources", "/resources"], ["About", "/about"]];
function useMedia(query) {
  const [hit, setHit] = React.useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const on = e => setHit(e.matches);
    setHit(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return hit;
}
function SiteHeader({
  phone = "(717) 736-6538",
  overlay = false,
  active,
  logo = "assets/logo.png",
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const compact = useMedia("(max-width:1180px)");
  const tiny = useMedia("(max-width:560px)");
  const go = (e, href) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    setOpen(null);
    setDrawer(false);
  };
  const light = overlay && !open && !drawer;
  React.useEffect(() => {
    if (!compact) setDrawer(false);
  }, [compact]);
  const linkStyle = isActive => ({
    font: "var(--type-button)",
    letterSpacing: "var(--ls-button)",
    textTransform: "uppercase",
    color: light ? "rgba(255,255,255,.92)" : "var(--text-primary)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "26px 0",
    borderBottom: `2px solid ${isActive ? "var(--gold-500)" : "transparent"}`,
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color var(--dur-fast) var(--ease-out)"
  });
  return /*#__PURE__*/React.createElement("header", _extends({
    onMouseLeave: () => setOpen(null),
    style: {
      position: overlay ? "absolute" : "sticky",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: light ? "transparent" : "var(--surface-raised)",
      borderBottom: `1px solid ${light ? "rgba(255,255,255,.16)" : "var(--border-hairline)"}`,
      transition: "background var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => go(e, "/"),
    style: {
      display: "flex",
      alignItems: "center",
      padding: "14px 0",
      flex: "0 1 auto",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Alejandro's Landscaping",
    style: {
      height: tiny ? 32 : 42,
      width: "auto",
      filter: light ? "brightness(0) invert(1)" : "none"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      marginLeft: "auto",
      minWidth: 0
    }
  }, !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, Object.keys(menus).map(label => /*#__PURE__*/React.createElement("button", {
    key: label,
    onMouseEnter: () => setOpen(label),
    onClick: () => setOpen(open === label ? null : label),
    style: linkStyle(active === label || open === label)
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  }))), flat.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    onClick: e => go(e, h),
    style: linkStyle(active === l)
  }, l))), !tiny && /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\D/g, "")}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
      whiteSpace: "nowrap",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      color: light ? "#fff" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15
  }), phone), !compact && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: light ? "solidLight" : "primary",
    size: "sm",
    href: "/estimate",
    onClick: e => go(e, "/estimate")
  }, "Free estimate"), compact && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setDrawer(!drawer);
      setOpen(null);
    },
    "aria-label": drawer ? "Close menu" : "Open menu",
    "aria-expanded": drawer,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "none",
      cursor: "pointer",
      border: `1px solid ${light ? "rgba(255,255,255,.42)" : "var(--border-strong)"}`,
      color: light ? "#fff" : "var(--text-primary)",
      padding: "12px 14px",
      minHeight: 44,
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: drawer ? "x" : "menu",
    size: 18
  }), !tiny && (drawer ? "Close" : "Menu")))), open && !compact && /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setOpen(null),
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "100%",
      background: "var(--surface-raised)",
      borderBottom: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-panel)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      columns: 2,
      columnGap: "var(--space-10)"
    }
  }, menus[open].map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      breakInside: "avoid",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    onClick: e => go(e, h),
    style: {
      font: "var(--fw-medium) 1.0625rem/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l)))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "36ch",
      borderLeft: "1px solid var(--border-hairline)",
      paddingLeft: "var(--space-8)"
    }
  }, "Every service has its own page with real projects from the towns we work in. Not sure which one you need? Send photos of the yard and we will tell you."))), drawer && compact && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "100%",
      maxHeight: "78vh",
      overflowY: "auto",
      background: "var(--surface-raised)",
      boxShadow: "var(--shadow-panel)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8) var(--gutter) var(--space-10)"
    }
  }, Object.entries(menus).map(([group, links]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)",
      marginBottom: "var(--space-4)"
    }
  }, group), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    onClick: e => go(e, h),
    style: {
      display: "block",
      padding: "11px 0",
      minHeight: 44,
      font: "var(--fw-medium) 1.0625rem/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-6) 0",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)"
    }
  }, flat.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    onClick: e => go(e, h),
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      textDecoration: "none",
      padding: "11px 0",
      minHeight: 44,
      display: "flex",
      alignItems: "center"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    href: "/estimate",
    onClick: e => go(e, "/estimate")
  }, "Free estimate"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "lg",
    href: `tel:${phone.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  }), phone)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* About — the people behind the work. Only confirmed facts are stated plainly;
   the company story is [VERIFY] until Dorian supplies it (hidden from visitors by the note filter). */

function useWideAB(q = "(min-width:860px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
const AB_WORK = [["Hardscaping", "Patios, driveways, walkways, retaining walls and fire features.", "/hardscaping/paver-patios"], ["Landscaping", "Installation, mulch and beds, sod, trimming, cleanups and lighting.", "/landscaping/installation"], ["Tree work", "[VERIFY TREE SERVICES OFFERED — trimming, removal.]", null], ["Commercial maintenance", "Grounds care for offices, medical practices and managed properties.", "/commercial/landscaping"], ["Snow removal", "Commercial snow and ice management through the winter.", "/commercial/snow-removal"]];
const AB_TOWNS = ["New Cumberland", "Camp Hill", "Lemoyne", "Mechanicsburg", "Enola", "Harrisburg", "Hershey", "Dillsburg"];
function About({
  go
}) {
  const wide = useWideAB();
  const link = href => e => {
    e.preventDefault();
    go(href);
  };
  const label = {
    font: "var(--type-eyebrow)",
    letterSpacing: "var(--ls-eyebrow)",
    textTransform: "uppercase"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    active: "About",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "About Alejandro's"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch"
    }
  }, "The people behind Alejandro's."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-5)",
      maxWidth: "52ch"
    }
  }, "Alejandro's Landscaping is a New Cumberland-based landscaping and hardscaping company serving properties across Central Pennsylvania.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.3fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,72px)",
      alignItems: "end",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "about-dorian-mower.jpg",
    alt: "Dorian of Alejandro's Landscaping on a Kubota zero-turn mower on a freshly striped lawn",
    fetchpriority: "high",
    style: {
      width: "100%",
      aspectRatio: wide ? "4/3" : "4/3",
      objectFit: "cover",
      objectPosition: "38% 55%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-1) var(--space-3)",
      alignItems: "baseline",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: "var(--gold-text)"
    }
  }, "Dorian"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "[VERIFY ROLE AND TITLE]")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: "var(--green-700)",
      marginBottom: "var(--space-4)"
    }
  }, "The company"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, "[VERIFY WITH DORIAN \u2014 who started Alejandro's, what year, and the first kind of work the company took on.]"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "46ch"
    }
  }, "[VERIFY \u2014 how the company grew, and how large the crew is today.] Today Alejandro's builds patios, driveways and walls, installs and maintains landscapes, and cares for commercial properties year round.")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "How it started"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-primary)",
      maxWidth: "34ch"
    }
  }, "[VERIFY ORIGIN STORY WITH DORIAN \u2014 and add an early photo of the company if one exists.]")))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "The company today"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "18ch"
    }
  }, "Crews, trucks and equipment on the job.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The work",
    title: "What we do."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(5,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: "0 clamp(16px,2.6vw,40px)",
      marginTop: "var(--space-8)"
    }
  }, AB_WORK.map(([h, d, href]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-4) 0"
    }
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: link(href),
    style: {
      ...label,
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, h, " \u2192") : /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: "var(--text-primary)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-2)"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "var(--space-6) clamp(28px,5vw,80px)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Where we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch"
    }
  }, "Based in New Cumberland."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "46ch"
    }
  }, "We work properties within about twenty miles: the west shore, Harrisburg, Hershey and the communities around them.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) 1.125rem/1.9 var(--font-display)",
      color: "var(--text-primary)"
    }
  }, AB_TOWNS.join(" · ")), /*#__PURE__*/React.createElement("a", {
    href: "/service-area",
    onClick: link("/service-area"),
    style: {
      display: "inline-block",
      marginTop: "var(--space-4)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: "1px solid var(--gold-500)",
      paddingBottom: 5
    }
  }, "View our service area \u2192"))))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Tell us what you're working with.",
    intro: "Send a photo of the property and what you'd like to change. We'll come out, walk it with you and give you a written estimate."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CommercialLandscaping.jsx
try { (() => {
/* Commercial landscaping. One job per section:
   hero → portfolio (credibility) → maintenance intro → scope → property types → how it works
   → snow cross-link → service area → FAQ → estimate. Add accounts by appending to CM_PORTFOLIO
   and CM_ORDER. Towns marked [VERIFY LOCATION] are not confirmed. */

const CM = "../../assets/photos/commercial/";
const CMF = s => CM + "commercial-landscaping-" + s + ".jpg";
function useCmWide(q = "(min-width:820px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}

/* Portfolio data. featured = larger slot. services stays [VERIFY] until confirmed per account. */
const CM_PORTFOLIO = {
  geigle: {
    name: "Geigle Funeral Home",
    town: "Colonial Park, PA",
    type: "Funeral home",
    scope: "Grounds maintenance",
    image: CMF("geigle-funeral-home-colonial-park-pa"),
    alt: "Manicured lawn, rounded shrubs and black-mulch beds across the front of Geigle Funeral Home in Colonial Park, Pennsylvania",
    note: "Formal frontage: shaped shrubs, clean black mulch and a full-width planting bed.",
    featured: true
  },
  advanced: {
    name: "Advanced Dental Partners",
    town: "[VERIFY LOCATION], PA",
    type: "Dental practice",
    scope: "Commercial grounds",
    image: CMF("advanced-dental-partners-pa"),
    alt: "Advanced Dental Partners sign in a freshly mulched bed with maintained lawn and trees",
    note: "Sign bed and tree rings freshly mulched, lawn cut and trimmed."
  },
  sauve: {
    name: "Sauvé Family Dentistry",
    town: "Camp Hill, PA",
    type: "Dental practice",
    scope: "Commercial grounds",
    image: CMF("sauve-family-dentistry-pa"),
    alt: "Sauvé Family Dentistry sign bed planted with roses, daylilies and shrubs",
    note: "Sign bed layered with roses, daylilies and shrubs."
  },
  eastmain: {
    name: "East Main Street Dental",
    town: "Harrisburg, PA",
    type: "Dental practice",
    scope: "Landscape maintenance",
    image: CMF("east-main-street-dental-harrisburg-pa"),
    alt: "Sheared foundation shrubs and beds along the front of East Main Street Dental in Harrisburg, Pennsylvania",
    note: "Foundation shrubs sheared to form along the walk."
  },
  meadowview: {
    name: "MeadowView Dental",
    town: "Dillsburg, PA",
    type: "Dental practice",
    scope: "Commercial landscaping",
    image: CMF("meadowview-dental-dillsburg-pa"),
    alt: "Striped lawn and a round black-mulch bed around the MeadowView Dental sign in Dillsburg, Pennsylvania",
    note: "Striped turf and a hand-cut ring of black mulch at the sign."
  },
  verizon: {
    name: "Verizon",
    town: "Harrisburg, PA",
    type: "Retail",
    scope: "Commercial landscape work",
    image: CMF("verizon-pa"),
    alt: "Alejandro's crew in branded safety vests working the landscape beds along a Verizon store in Pennsylvania",
    note: "Our crew on site, cutting back and clearing the beds along the building.",
    featured: true
  },
  linglestown: {
    name: "Linglestown Family Dental",
    town: "Linglestown, PA",
    type: "Dental practice",
    scope: "Commercial landscaping",
    images: [[CMF("linglestown-family-dental-mulch-colonial-park-pa"), "Black mulch", "Linglestown Family Dental sign bed finished in black mulch"], [CMF("linglestown-family-dental-river-rock-colonial-park-pa"), "River rock", "Linglestown Family Dental sign bed finished in tan river rock"]],
    note: "The same sign bed, shown in two finishes."
  },
  bridge: {
    name: "Bridge Street Dental Center",
    town: "New Cumberland, PA",
    type: "Dental practice",
    scope: "Commercial landscaping",
    image: CMF("bridge-street-dental-new-cumberland-pa"),
    alt: "Curved sign bed with hostas and up-lights at Bridge Street Dental Center in New Cumberland, Pennsylvania",
    note: "Hostas and sign lighting in a crisp-edged bed."
  },
  fpa: {
    name: "Family Physician Associates of New Cumberland",
    town: "New Cumberland, PA",
    type: "Medical practice",
    scope: "Commercial grounds",
    image: CMF("family-physician-associates-new-cumberland-pa"),
    alt: "Mulched corner sign bed and maintained lawn at Family Physician Associates of New Cumberland",
    note: "Corner sign bed, shrub care and a fresh edge."
  }
};
const CM_ORDER = [["verizon", "Verizon", "45% 50%"], ["geigle", "Geigle Funeral Home", "50% 60%"], ["advanced", "Advanced Dental Partners", "50% 55%"], ["meadowview", "MeadowView Dental", "50% 62%"], ["eastmain", "East Main Street Dental", "50% 50%"], ["linglestown", "Linglestown Family Dental", "50% 50%"], ["sauve", "Sauvé Family Dentistry", "50% 50%"], ["bridge", "Bridge Street Dental Center", "50% 50%"], ["fpa", "Family Physician Associates", "50% 50%"]];

/* Tree trimming / removal left out: those pages were removed and the service is unconfirmed. */
const CM_SCOPE = [["01", "Lawn & grounds", ["Commercial mowing", "Edging", "Sod & lawn work", "Routine grounds care"], CM + "commercial-mowing-striped-slope-central-pa.jpg", "Striped commercial lawn mowed across a slope", ["Sod installation", "/landscaping/sod-installation"]], ["02", "Beds & landscaping", ["Mulch & bed work", "Landscape installation", "Planting", "Seasonal landscape improvements"], CM + "commercial-landscaping-managed-property-beds-central-pa.jpg", "Mulched planting beds and shrubs at a managed commercial property", ["Mulch & bed work", "/landscaping/mulch-beds"]], ["03", "Shrubs & hedges", ["Shrub & hedge trimming", "Foundation shrub shaping", "Hedge maintenance"], CM + "east-main.jpg", "Sheared foundation shrubs along a commercial building", ["Shrub & hedge trimming", "/landscaping/trimming"]], ["04", "Seasonal & property work", ["Spring & fall cleanups", "Grading & drainage", "Landscape lighting", "Property improvements"], CM + "commercial-landscaping-office-entrance-central-pa.jpg", "Office entrance with maintained beds and walkway", ["Grading & drainage", "/grading-drainage"]]];
const CM_PROP_TYPES = [["Medical & dental offices", "Maintain entrances, lawns, beds and high-visibility areas around practices where the exterior is part of the patient experience."], ["Professional offices", "Routine grounds maintenance for offices that need a clean, consistent exterior throughout the growing season."], ["Retail & commercial properties", "Landscape maintenance for customer-facing commercial sites where curb appeal and clear access matter."], ["HOAs & managed properties", "Coordinated grounds care for shared spaces and managed properties with recurring landscape needs."]];
const CM_HOW = [["01", "Walk the property", "We review the grounds, existing landscaping and the areas that need recurring or seasonal attention."], ["02", "Build the scope", "The maintenance plan is based on the work the property actually needs rather than forcing every site into the same package."], ["03", "Maintain the grounds", "The crew handles the agreed landscaping and grounds work throughout the service period."]];
const CM_AREAS = ["New Cumberland", "Camp Hill", "Mechanicsburg", "Harrisburg", "Hershey"];
function CmFaq({
  q,
  children,
  first
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: first ? "1px solid var(--border-strong)" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-4)",
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: "var(--space-5) 0",
      minHeight: 56,
      textAlign: "left",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--gold-text)",
      font: "var(--fw-regular) 1.25rem/1 var(--font-sans)",
      flex: "0 0 auto",
      transform: open ? "rotate(45deg)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    hidden: !open,
    style: {
      paddingBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "64ch"
    }
  }, children)));
}
function CommercialLandscaping({
  go
}) {
  const wide = useCmWide();
  const P_ = CM_PORTFOLIO;
  const nav = h => e => {
    e.preventDefault();
    go(h);
  };
  const link = (label, href, inverse) => /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: nav(href),
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 44,
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-on-dark)" : "var(--green-800)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px solid var(--gold-500)",
      paddingBottom: 5
    }
  }, label, " \u2192"));
  const inlineLink = (label, href) => /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: nav(href)
  }, label);
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  const h2 = (text, inverse, max = "16ch") => /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      maxWidth: max,
      textWrap: "balance"
    }
  }, text);
  const lede = (text, inverse) => /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-body)" : "var(--type-small)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "54ch"
    }
  }, text);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Commercial",
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: wide ? "min(88vh,820px)" : "min(82vh,640px)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      background: "var(--green-950)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: CM + "commercial-lawn-striping-central-pa.jpg",
    alt: "Commercial lawn freshly mowed in crisp alternating stripes",
    fetchpriority: "high",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 55%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: wide ? "linear-gradient(90deg,rgba(10,36,22,.82) 0%,rgba(10,36,22,.5) 46%,rgba(10,36,22,.08) 82%)" : "linear-gradient(180deg,rgba(10,36,22,.25) 0%,rgba(10,36,22,.55) 45%,rgba(10,36,22,.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(10,36,22,.5) 0%,rgba(10,36,22,0) 26%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      width: "100%",
      paddingTop: 140,
      paddingBottom: wide ? "clamp(56px,7vw,104px)" : "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: wide ? "var(--space-8)" : "var(--space-5)"
    }
  }, "Commercial landscaping"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: wide ? "var(--type-display)" : "var(--fw-regular) clamp(2.75rem,12.5vw,3.375rem)/1.02 var(--font-display)",
      letterSpacing: "var(--ls-display)",
      color: "#fff",
      maxWidth: "14ch",
      textWrap: "balance"
    }
  }, "Commercial landscaping built around your property."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-lead)" : "var(--type-small)",
      color: "rgba(255,255,255,.9)",
      maxWidth: "50ch",
      marginTop: wide ? "var(--space-8)" : "var(--space-5)"
    }
  }, "Commercial landscaping and grounds maintenance for businesses, medical offices, managed properties and commercial sites throughout the Harrisburg area and surrounding Central Pennsylvania communities."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      marginTop: wide ? "var(--space-10)" : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solidLight",
    size: wide ? "lg" : "md",
    href: "#estimate"
  }, "Request a commercial estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: wide ? "lg" : "md",
    href: tel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginTop: wide ? "var(--space-8)" : "var(--space-5)"
    }
  }, "Offices \xB7 Medical \xB7 Retail \xB7 Managed properties"))), /*#__PURE__*/React.createElement(TrustedBy, {
    onView: () => {
      const el = document.getElementById("portfolio");
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: !wide,
    id: "portfolio"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Commercial experience"), h2("Properties we maintain across Central PA."), lede("Alejandro's provides commercial landscaping and grounds maintenance for businesses and managed properties throughout the Harrisburg area.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: wide ? "var(--space-12) 0 0" : "var(--space-8) 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "var(--space-10) clamp(16px,2.2vw,32px)" : "var(--space-6) 12px"
    }
  }, CM_ORDER.map(([k, label, pos], i) => {
    const it = P_[k];
    const src = it.image || it.images[0][0];
    const alt = it.alt || it.images[0][2];
    return /*#__PURE__*/React.createElement("li", {
      key: k,
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      delay: i % 3 * 60
    }, /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      loading: "lazy",
      width: "900",
      height: "675",
      style: {
        width: "100%",
        height: "auto",
        aspectRatio: wide ? "3/2" : "4/3",
        objectFit: "cover",
        objectPosition: pos,
        borderRadius: "var(--radius-image)",
        display: "block",
        background: "var(--stone-200)"
      }
    }), /*#__PURE__*/React.createElement("figcaption", {
      style: {
        marginTop: wide ? "var(--space-3)" : "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-primary)",
        lineHeight: 1.35
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, it.town)))));
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,.9fr) minmax(0,1.1fr) minmax(0,1.1fr)" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "clamp(20px,2.4vw,36px)" : 10,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      gridColumn: wide ? "auto" : "span 2",
      marginBottom: wide ? 0 : "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Commercial mowing"), h2("Lines you can see from the road.", false, "13ch")), [["commercial-mowing-striped-hillside-central-pa.jpg", "Wide commercial lawn mowed in curved stripes along a hillside", "50% 70%"], ["commercial-mowing-diamond-stripes-central-pa.jpg", "Commercial lawn mowed in a diamond stripe pattern", "50% 60%"]].map(([f, alt, pos], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("img", {
    src: CM + f,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      objectPosition: pos,
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Commercial landscaping services"), h2("One crew for the grounds around your property.", false, "18ch"), lede("Commercial maintenance can include routine grounds care, seasonal work and landscape improvements based on the needs of the property.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: wide ? "var(--space-12) clamp(28px,4vw,64px)" : "var(--space-6)",
      marginTop: wide ? "var(--space-12)" : "var(--space-8)"
    }
  }, CM_SCOPE.map(([n, h, list, img, alt, lk], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i % 2 * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "112px minmax(0,1fr)",
      gap: wide ? "var(--space-6)" : "var(--space-4)",
      alignItems: "start",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt,
    loading: "lazy",
    width: "900",
    height: "600",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "3/2",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)"
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      margin: "var(--space-2) 0 var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, list.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, l))), wide && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, link(lk[0], lk[1]))))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,.9fr) minmax(0,1.3fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-500)",
      marginBottom: "var(--space-5)"
    }
  }, "Commercial properties"), h2("Built for properties people see every day.", true, "14ch"), lede("Commercial landscaping needs vary by property, traffic, visibility and the amount of grounds surrounding the site.", true)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0
    }
  }, CM_PROP_TYPES.map(([h, d], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: i ? "1px solid var(--border-dark)" : "1px solid var(--gold-500)",
      padding: wide ? "var(--space-6) 0" : "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-on-dark)",
      marginBottom: "var(--space-2)"
    }
  }, h), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "56ch"
    }
  }, d)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.1fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Working with Alejandro's"), h2("A maintenance plan built around the property.", false, "15ch"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: wide ? "var(--space-10) 0 0" : "var(--space-6) 0 0",
      padding: 0
    }
  }, CM_HOW.map(([n, h, d]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "grid",
      gridTemplateColumns: "40px minmax(0,1fr)",
      gap: "var(--space-3)",
      borderTop: "1px solid var(--border-hairline)",
      padding: wide ? "var(--space-5) 0" : "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)",
      paddingTop: 2
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      marginBottom: "var(--space-2)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "48ch"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("img", {
    src: CM + "commercial-grounds-office-beds-truck-central-pa.jpg",
    alt: "Fresh black mulch beds, ornamental grasses and a new tree at a commercial office, with Alejandro's work truck in the lot",
    loading: "lazy",
    width: "414",
    height: "414",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: wide ? "1/1" : "16/9",
      maxHeight: wide ? 520 : 240,
      objectFit: "cover",
      objectPosition: "50% 62%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-950)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: CM + "commercial-snow-removal-office-lot-central-pa.jpg",
    alt: "",
    "aria-hidden": "true",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: wide ? "linear-gradient(90deg,rgba(10,36,22,.92) 0%,rgba(10,36,22,.72) 55%,rgba(10,36,22,.35) 100%)" : "rgba(10,36,22,.8)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      padding: wide ? "var(--space-20) var(--gutter)" : "var(--space-12) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: "var(--space-4)"
    }
  }, "Year-round property care"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "#fff",
      maxWidth: "18ch"
    }
  }, "Landscaping when it's green. Snow removal when it's white."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-body)" : "var(--type-small)",
      color: "rgba(255,255,255,.86)",
      marginTop: "var(--space-4)",
      maxWidth: "48ch"
    }
  }, "Alejandro's also provides commercial snow removal for businesses and managed properties throughout the service area."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, link("Explore commercial snow removal", "/commercial/snow-removal", true)))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.2fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-6)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Commercial landscaping service area"), h2("Commercial landscaping throughout the Harrisburg area.", false, "17ch"), lede("Alejandro's serves commercial properties in New Cumberland, Camp Hill, Mechanicsburg, Harrisburg, Hershey and surrounding communities within the company's Central Pennsylvania service area.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderTop: "1px solid var(--gold-500)"
    }
  }, CM_AREAS.map(a => /*#__PURE__*/React.createElement("li", {
    key: a,
    style: {
      font: "var(--fw-regular) 1.125rem/1.3 var(--font-display)",
      color: "var(--text-primary)",
      padding: "var(--space-3) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, link("View all service areas", "/service-area")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Commercial landscaping FAQ"), h2("Questions about commercial grounds maintenance.", false, "18ch")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: wide ? "var(--space-10)" : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(CmFaq, {
    first: true,
    q: "What types of commercial properties do you service?"
  }, "Medical and dental offices, professional offices, customer-facing businesses, managed properties and similar commercial sites. Most of our current commercial portfolio is medical and dental practices around the Harrisburg area."), /*#__PURE__*/React.createElement(CmFaq, {
    q: "Do you offer recurring commercial landscaping?"
  }, "Yes. Commercial work can be set up around the property's recurring grounds-maintenance needs, with seasonal work such as cleanups and mulch added to the same scope. [VERIFY HOW RECURRING SERVICE IS SCHEDULED AND BILLED.]"), /*#__PURE__*/React.createElement(CmFaq, {
    q: "What commercial landscaping services do you provide?"
  }, "Mowing and edging, ", inlineLink("mulch and bed work", "/landscaping/mulch-beds"), ", shrub and hedge trimming, spring and fall cleanups, ", inlineLink("landscape installation", "/landscaping/installation"), ", sod and lawn work, and ", inlineLink("grading and drainage", "/grading-drainage"), " where landscape areas need it."), /*#__PURE__*/React.createElement(CmFaq, {
    q: "Do you provide commercial snow removal?"
  }, "Yes. Alejandro's provides ", inlineLink("commercial snow removal", "/commercial/snow-removal"), " for businesses and managed properties throughout the service area."), /*#__PURE__*/React.createElement(CmFaq, {
    q: "What areas do you serve?"
  }, "New Cumberland, Camp Hill, Mechanicsburg, Harrisburg, Hershey and the surrounding communities within our Central Pennsylvania ", inlineLink("service area", "/service-area"), "."), /*#__PURE__*/React.createElement(CmFaq, {
    q: "How do I get an estimate for my commercial property?"
  }, "Request an estimate below or call ", PHONE, ". The first step is a look at the property, so the scope and price are based on the actual grounds rather than a standard package.")))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-500)",
      marginBottom: "var(--space-5)"
    }
  }, "Commercial landscaping"), h2("Let's walk the property.", true, "14ch"), lede("Tell us about your commercial property and the grounds work you need. We'll start by looking at the site and building the scope around it.", true), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: wide ? "lg" : "md",
    href: tel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "Call ", PHONE))), /*#__PURE__*/React.createElement(EstimateForm, {
    tone: "dark",
    projects: ["Commercial grounds maintenance", "Mulch & bed work", "Shrub & hedge trimming", "Seasonal cleanup", "Landscape installation", "Commercial snow removal", "Not sure yet"]
  }))))), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.CommercialLandscaping = CommercialLandscaping;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CommercialLandscaping.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqCenter.jsx
try { (() => {
/* FAQ Center. Concise answers only — service-specific questions get a short answer and a link
   to the service page that owns the full one. Rule 6: no full answer published twice. */

const FAQ_GROUPS = [["Hiring Alejandro's", [["Does Alejandro's Landscaping serve my town?", "We work a roughly twenty-mile radius from New Cumberland, which covers parts of Cumberland, Dauphin, York, Perry, Lancaster and Lebanon counties. Harrisburg, Camp Hill, Mechanicsburg, Lemoyne, Enola, Hershey, Hummelstown, Dillsburg, Elizabethtown and Carlisle are all inside it.", "Full service area", "/service-areas"], ["What services do you offer?", "Hardscaping — patios, retaining walls, walkways, fire features and drainage. Landscaping — installation, beds and mulch, trimming, cleanups, lawns and lighting. [VERIFY TREE AND COMMERCIAL SERVICES.]", "All services", "/hardscaping"], ["Are you licensed and insured?", "[VERIFY PA HIC REGISTRATION NUMBER AND INSURANCE STATUS.] Registration and insurance are different things and both are worth asking any contractor for before work starts.", null, null], ["Do you do both landscaping and hardscaping?", "Both, which is the point. Hardscape crews usually leave the beds to someone else and landscape crews subcontract the wall. One company means one number, one schedule and nobody blaming the other trade when the grade is wrong.", null, null]]], ["Estimates & scheduling", [["How do I request an estimate?", "Send a photo of the space and roughly what you are thinking, either through the form or by calling (717) 736-6538. Photos tell us more than a description does.", "Request an estimate", "#estimate"], ["Is the estimate free?", "[VERIFY WHETHER ESTIMATES ARE FREE, and whether any design work carries a fee.]", null, null], ["What do I get in writing?", "[VERIFY WHAT A WRITTEN ESTIMATE CONTAINS — scope, square footage, base spec, materials, drainage, exclusions.] Worth comparing line by line against any other quote, since what is left out is usually where two prices differ.", null, null], ["How far out are you scheduling?", "[VERIFY CURRENT LEAD TIMES BY SEASON.]", null, null], ["How does weather affect the schedule?", "Rain stops base work rather than paving. A base cannot be compacted properly when it is saturated, so a wet week moves a start date even when the forecast looks fine.", null, null]]], ["Hardscaping", [["How much does a paver patio cost?", "[VERIFY PATIO PRICE RANGE.] Size, material, excavation depth, access to the back yard, drainage correction, steps and walls all move the number.", "Paver patios", "/hardscaping/paver-patios"], ["Do paver patios hold up through Pennsylvania winters?", "Yes, when the base is built for it. Freeze-thaw lifts and drops the ground all winter — a patio with a deep compacted base and somewhere for water to go settles back flat.", "Paver patios", "/hardscaping/paver-patios"], ["Why do retaining walls lean?", "Water behind the wall, no reinforcement tying it into the hill, or a footing cut too shallow. A wall that has started to move does not settle back.", "Retaining walls", "/hardscaping/retaining-walls"], ["Can you replace an existing concrete patio or walkway?", "[VERIFY DEMOLITION CAPABILITY AND WHETHER IT IS INCLUDED.] Most jobs here start with a slab that has already cracked, so it is a normal first step.", "Paver patios", "/hardscaping/paver-patios"], ["Can a fire pit or seat wall be built in?", "Yes, and much cheaper during the patio build than after it. Footing, base and any gas or electrical run get set in the one excavation.", "Fire features", "/hardscaping/fire-features-seat-walls"]]], ["Grading & drainage", [["Why does water pool in my yard?", "Usually the ground falls the wrong way, there is a low spot with nowhere to drain, or roof water is being dumped beside the house and never carried off.", "Grading & drainage", "/grading-drainage"], ["Do I need grading or a French drain?", "Grading fixes water running the wrong way. A drain fixes water with nowhere to go once it arrives. Dries out a day after rain, usually grading. Soft for a week, something has to collect it.", "Grading & drainage", "/grading-drainage"]]], ["Landscaping", [["How much does landscaping cost?", "[VERIFY LANDSCAPING PRICE RANGE.] Bed size, how much comes out first, plant sizes, soil condition and access.", "Landscape installation", "/landscaping/landscape-installation"], ["When is the best time to plant in Pennsylvania?", "Spring and fall both work, and fall is often better — warm soil, cooler air, roots establish before winter without fighting summer heat.", "Landscape installation", "/landscaping/landscape-installation"], ["How much mulch do I need?", "Roughly one cubic yard per 100 square feet at three inches. Most residential properties land between three and ten yards.", "Mulch & bed work", "/landscaping/mulch-bed-work"], ["Can overgrown shrubs be saved?", "Often, over two or three seasons rather than one cut. Some species will not regrow from bare wood at all and are a replacement instead.", "Trimming", "/landscaping/shrub-hedge-trimming"], ["Sod or seed?", "Sod gives a lawn the day it is laid and holds a slope immediately. Seed costs far less and roots more deeply, but needs weeks of consistent watering.", "Sod installation", "/landscaping/sod-installation"]]], ["Project completion", [["Do you clean up and haul debris away?", "[VERIFY WHETHER HAULING IS INCLUDED OR QUOTED SEPARATELY.]", null, null], ["Will you repair the lawn afterward?", "[VERIFY WHETHER LAWN RESTORATION IS INCLUDED after excavation, and whether it is seed or sod.]", null, null], ["Is there a final walkthrough?", "[VERIFY WHETHER A DOCUMENTED FINAL WALKTHROUGH IS PART OF THE PROCESS.]", null, null], ["What warranty applies?", "[VERIFY WARRANTY TERMS, DURATION AND EXCLUSIONS — separately for workmanship and for plant material.]", null, null]]]];
function FaqCenter({
  go
}) {
  const [open, setOpen] = React.useState(FAQ_GROUPS[0][0]);
  const nav = (e, href) => {
    if (go && href && !href.startsWith("#")) {
      e.preventDefault();
      go(href);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true,
    style: {
      paddingTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => nav(e, "/"),
    style: {
      color: "inherit"
    }
  }, "Home"), " \u203A ", /*#__PURE__*/React.createElement("a", {
    href: "/resources",
    onClick: e => nav(e, "/resources"),
    style: {
      color: "inherit"
    }
  }, "Resources"), " \u203A FAQs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch",
      marginBottom: "var(--space-8)",
      textWrap: "balance"
    }
  }, "Questions, answered short."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)"
    }
  }, "Quick answers about services, estimates and working with us. Where a question needs the full explanation, the link goes to the page that owns it.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
      gap: "clamp(24px,5vw,80px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, FAQ_GROUPS.map(([g]) => /*#__PURE__*/React.createElement("li", {
    key: g
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(g);
    },
    style: {
      display: "block",
      width: "100%",
      textAlign: "left",
      background: "none",
      cursor: "pointer",
      border: 0,
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-4) 0",
      minHeight: 44,
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: open === g ? "var(--green-800)" : "var(--text-muted)"
    }
  }, g))))), /*#__PURE__*/React.createElement("div", null, FAQ_GROUPS.filter(([g]) => g === open).map(([g, items]) => /*#__PURE__*/React.createElement(Reveal, {
    key: g
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      marginBottom: "var(--space-8)"
    }
  }, g), items.map(([q, a, label, href], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-medium) 1.125rem/1.35 var(--font-display)",
      marginBottom: "var(--space-4)",
      maxWidth: "40ch"
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "58ch",
      textWrap: "pretty"
    }
  }, a), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => nav(e, href),
    style: {
      display: "inline-block",
      marginTop: "var(--space-4)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: "1px solid var(--border-strong)",
      paddingBottom: 4
    }
  }, label, " \u2192"))))))))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Question not here?",
    intro: "Call and ask. Most of what people want to know is faster answered in two minutes on the phone than read off a page."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.FaqCenter = FaqCenter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqCenter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Homepage. Section order follows the buyer's questions, not a template:
   who / what they build → proof of work → why it lasts → do they work here → someone else hired them → act. */

const BUILD_SPEC = [["01", "Excavate", "Dig out to sub-grade — deeper than the frost line, not just deep enough to hold stone."], ["02", "Base", "Compacted modified stone in lifts. Every lift gets run before the next one goes down."], ["03", "Drainage", "Water gets a route off the slab and away from the house before the first paver is set."], ["04", "Set & lock", "Screeded bedding, cut edges, polymeric joints, edge restraint on every open side."]];
const VIGNETTES = [["01", "Hardscaping", "Patios & Hardscapes.", "Patios, retaining walls, walkways, fire features and drainage.", "Explore hardscaping", "/hardscaping/paver-patios", "patio-pool-pavers.jpg", "Paver patio wrapping the curve of a backyard pool", "50% 55%"], ["02", "Landscaping", "Finished landscapes.", "Planting, mulch, sod, trimming and seasonal property work.", "Explore landscaping", "/landscaping/installation", "stone-edge-bed.jpg", "Stone-edged planting bed with sculpted shrubs against a house", "50% 55%"], ["03", "Commercial & snow", "Commercial landscaping.", "Grounds maintenance and winter service for commercial properties.", "Explore commercial", "/commercial/landscaping", "commercial-mowing-stripes.jpg", "Freshly striped lawn on a commercial property", "50% 50%"]];
function HomeVignettes({
  go
}) {
  const [wide, setWide] = React.useState(() => window.matchMedia("(min-width:900px)").matches);
  React.useEffect(() => {
    const m = window.matchMedia("(min-width:900px)");
    const on = e => setWide(e.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "What we build",
    style: {
      background: "var(--surface-page)",
      padding: wide ? "64px 0 clamp(72px,7vw,96px)" : "56px 0 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--gutter)",
      maxWidth: "var(--container-max)",
      margin: "0 auto var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: "var(--gold-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--green-700)"
    }
  }, "What we build")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) clamp(1.125rem,1.6vw,1.375rem)/1.35 var(--font-display)",
      color: "var(--text-primary)",
      maxWidth: "36ch"
    }
  }, "From the ground beneath it to the finished property.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: 10
    }
  }, VIGNETTES.map(([n, label, h, d, cta, href, img, alt, pos], i) => /*#__PURE__*/React.createElement(Vignette, {
    key: n,
    n: n,
    label: label,
    h: h,
    d: d,
    cta: cta,
    href: href,
    img: img,
    alt: alt,
    pos: pos,
    wide: wide,
    go: go,
    last: i === VIGNETTES.length - 1
  }))));
}
function Vignette({
  n,
  label,
  h,
  d,
  cta,
  href,
  img,
  alt,
  pos,
  wide,
  go,
  last
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => {
      e.preventDefault();
      go(href);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      textDecoration: "none",
      color: "#fff",
      minHeight: wide ? "min(86vh,760px)" : "min(54vh,440px)",
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + img,
    alt: alt,
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: pos,
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform 1.1s var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(10,36,22,.15) 0%,rgba(10,36,22,.05) 30%,rgba(10,36,22,.7) 66%,rgba(10,36,22,.94) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: wide ? "clamp(28px,3vw,48px)" : "var(--space-6) var(--gutter) var(--space-8)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: "var(--space-4)"
    }
  }, n, " \u2014 ", label), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: wide ? "var(--fw-regular) clamp(2rem,3vw,2.75rem)/1.05 var(--font-display)" : "var(--fw-regular) clamp(2.25rem,9vw,2.75rem)/1.05 var(--font-display)",
      letterSpacing: "var(--ls-heading)",
      color: "#fff",
      maxWidth: "12ch"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "rgba(244,241,235,.84)",
      marginTop: "var(--space-4)",
      maxWidth: "34ch"
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      marginTop: "var(--space-6)",
      font: "var(--type-button)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "#fff",
      borderBottom: `1px solid ${hover ? "var(--gold-500)" : "rgba(244,241,235,.5)"}`,
      paddingBottom: 6,
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, cta, " \u2192")));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    image: P + "patio-raised-wall-dusk.jpg",
    alt: "Raised paver patio on a block retaining wall with lit steps beside a house at dusk",
    eyebrow: "Alejandro's Landscaping \xB7 New Cumberland, PA",
    title: "Landscaping & hardscaping in the Harrisburg area.",
    lede: "Paver patios, retaining walls, walkways, planting and commercial landscaping for homes and businesses within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Raised patio, block wall and lit steps"
  }), /*#__PURE__*/React.createElement(HomeVignettes, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-8)",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Recent work",
    title: "Recent projects around Harrisburg.",
    style: {
      flex: "1 1 340px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#projects"
  }, "All projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--gap-grid)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      gridColumn: "span 2",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    size: "lg",
    ratio: "16/9",
    image: P + "firepit-seatwall-night.jpg",
    alt: "Lit seat wall and gas firepit at night",
    town: "Central PA",
    service: "Seat wall, firepit & lighting",
    detail: "Wall lighting set into the course below the cap, so the light washes the stone instead of glaring at the seat."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    image: P + "patio-pergola-mulch.jpg",
    alt: "Patio with pergola and fresh beds",
    town: "Central PA",
    service: "Patio, pergola pad & beds",
    detail: "Slab, beds and lawn regraded in one pass."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    image: P + "patio-pool-pavers.jpg",
    alt: "Paver patio around a pool",
    town: "Central PA",
    service: "Pool surround",
    detail: "Three-piece modular pattern, soldier-course border cut to the pool radius."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    image: P + "residential-lawn-beds.jpg",
    alt: "Striped lawn and planting beds beside a house",
    town: "Central PA",
    service: "Lawn & bed maintenance",
    detail: "Cut lines re-edged each visit."
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Where we work",
    title: "Landscaping across the Harrisburg area.",
    intro: "Camp Hill, Mechanicsburg, Harrisburg, Hershey, New Cumberland and surrounding communities.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      href: "#service-area"
    }, "Full service area")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "clamp(24px,3vw,48px)",
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(TownEntry, {
    town: "Camp Hill",
    county: "Cumberland County",
    distance: "3 mi",
    image: P + "landscape-azaleas-flagstone-edge.jpg",
    alt: "Azaleas in a mulched bed behind a flagstone edge",
    notes: "[VERIFY CAMP HILL CONDITIONS \u2014 soil, grade, borough permitting, what goes wrong on these lots.]",
    href: "#service-area"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(TownEntry, {
    town: "Mechanicsburg",
    county: "Cumberland County",
    distance: "7 mi",
    image: P + "walk/walk-after.jpg",
    alt: "Finished paver walkway leading to a front entry",
    notes: "[VERIFY MECHANICSBURG CONDITIONS \u2014 development review, township thresholds, ground encountered.]",
    href: "#service-area"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(TownEntry, {
    town: "New Cumberland",
    county: "Cumberland County",
    distance: "0 mi",
    image: P + "sod/sod-first-watering-dusk.jpg",
    alt: "New sod lawn after its first watering at dusk",
    notes: "[VERIFY NEW CUMBERLAND CONDITIONS \u2014 home ground, access, borough permitting.]",
    href: "#service-area"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "darkAlt",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "Customer proof"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-on-dark)",
      maxWidth: "34ch",
      textWrap: "pretty"
    }
  }, "[ADD REAL CUSTOMER REVIEW]"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-5)",
      maxWidth: "52ch"
    }
  }, "[ADD: One verbatim quote from a completed job, with the customer's name, town, the month and a link to the source. No invented quote goes in this slot.]")))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE,
    towns: ["New Cumberland", "Lemoyne", "Wormleysburg", "Camp Hill", "Shiremanstown", "Enola", "Mechanicsburg", "Harrisburg", "Steelton", "Highspire", "Lewisberry", "Marysville", "Middletown", "Dillsburg", "Hummelstown", "Hershey", "Boiling Springs", "Carlisle", "Elizabethtown", "Palmyra", "York"]
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandscapeInstallation.jsx
try { (() => {
/* Landscape installation. Deliberately NOT the ServicePage skeleton — this buyer is not
   assessing construction competence, they are trying to picture a finished front yard.
   Narrative: see it → understand what makes it look finished → what we install → what
   decides plant choice → a walked-through process → questions. Visual-heavy, spec-light. */

const LOOK_FACTORS = [["Bed lines", "The single biggest change, and the cheapest. A bed cut in a long shallow curve reads as designed. One that traces the foundation in a straight strip reads as an afterthought.", "wide"], ["Layering", "Tall at the back, mid in the middle, low at the front, and nothing planted in a single row. Depth is what separates a landscape from a hedge.", "tall"], ["Evergreen structure", "Something with green in February. A bed built entirely from things that die back looks finished in June and empty for five months.", "wide"], ["Mulch or stone", "Mulch is warmer and softer and needs redoing. Stone is permanent, reflects heat, and is unforgiving if you change your mind.", "std"], ["Room at the foundation", "Shrubs planted tight to the wall grow into the siding and block the windows within a decade. Space is planned for the mature size, not the pot size.", "std"], ["What is already there", "A mature specimen worth keeping changes the whole plan. Most renovations save more than the homeowner expects.", "wide"]];
const INSTALL_ROWS = [["New planting beds", "Cut, shaped, edged and prepared before anything goes in the ground.", "stone-edge-bed.jpg", "Stone-edged planting bed"], ["Shrubs & ornamental trees", "[VERIFY NURSERY SOURCES AND WHETHER PLANT STOCK IS WARRANTED.]", "commercial-property-beds.jpg", "Layered shrubs and ornamental plantings in a prepared bed"], ["Bed edging", "[VERIFY EDGING MATERIALS OFFERED — cut edge, stone, steel, paver.] Set into the ground rather than laid on top of it.", "residential-lawn-beds.jpg", "Cut bed edge against lawn"], ["Renovating existing beds", "[VERIFY RENOVATION SCOPE.] Taking out thirty-year-old foundation shrubs usually reveals grading nobody has looked at since the house was built.", null, null]];
function LandscapeInstallation({
  go
}) {
  const [wide, setWide] = React.useState(true);
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width:700px)");
    const on = e => setWide(e.matches);
    setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Landscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(74vh,660px)",
    image: P + "stone-edge-bed.jpg",
    alt: "Stone-edged planting bed with layered shrubs against a house",
    eyebrow: "Landscaping \xB7 Installation",
    title: "A yard that finally feels finished.",
    lede: "Planting beds, shrubs, edging and renovation across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Stone-edged beds and layered plantings"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Recent installations",
    title: "See what changes the yard."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.7fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-12)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ProjectTile, {
    size: "lg",
    ratio: wide ? "3/2" : "4/3",
    image: P + "stone-edge-bed.jpg",
    alt: "Stone-edged bed with layered sculpted shrubs against a house",
    town: "Central PA",
    service: "Beds, edging & plantings",
    detail: "Stone edge set into the ground, bed cut wide enough that the shrubs sit inside the line."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: wide ? "1fr 1fr" : "auto auto",
      gap: "var(--gap-grid)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    ratio: wide ? "16/9" : "4/3",
    image: P + "river-rock-landscape-v3.jpg",
    alt: "Curved driveway edged with a block retaining wall, barrel planters and black mulch running beside a decorative stone slope in grey and red rock, hedge line and mature trees behind",
    town: "Central PA",
    service: "River rock & decorative stone"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    ratio: wide ? "16/9" : "4/3",
    image: P + "commercial-property-beds.jpg",
    alt: "Planting beds and layered shrubs along a building entrance",
    town: "Central PA",
    service: "Bed renovation & plantings"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "landscape-island-bed-fieldstone.jpg",
    alt: "Curved island bed edged in fieldstone with layered shrubs and grasses",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: wide ? "21/9" : "4/3",
      objectFit: "cover",
      objectPosition: "50% 55%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(10,36,22,0) 40%,rgba(10,36,22,.88) 100%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: wide ? "var(--space-12)" : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "How a bed reads from the street"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: wide ? "var(--type-h1)" : "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "#fff",
      maxWidth: "14ch"
    }
  }, "What makes a yard look finished."))), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: wide ? "var(--space-12) var(--gutter) var(--space-16)" : "var(--space-8) var(--gutter) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: wide ? 0 : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 0,
    style: {
      padding: wide ? "0 clamp(20px,3vw,44px)" : "0",
      paddingLeft: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "italic var(--fw-regular) clamp(1.375rem,2.2vw,1.875rem)/1.2 var(--font-display)",
      color: "var(--text-on-dark)"
    }
  }, "Shape before plants."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "34ch"
    }
  }, "A bed cut in one long curve does more than any shrub you put in it.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    style: {
      borderLeft: wide ? "1px solid var(--gold-500)" : "none",
      borderTop: wide ? "none" : "1px solid var(--border-dark)",
      padding: wide ? "0 clamp(20px,3vw,44px)" : "var(--space-6) 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "italic var(--fw-regular) clamp(1.375rem,2.2vw,1.875rem)/1.2 var(--font-display)",
      color: "var(--text-on-dark)"
    }
  }, "Height, then depth."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "34ch"
    }
  }, "Tall at the back, low at the front, nothing standing in a single row.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    style: {
      borderLeft: wide ? "1px solid var(--gold-500)" : "none",
      borderTop: wide ? "none" : "1px solid var(--border-dark)",
      padding: wide ? "0 clamp(20px,3vw,44px)" : "var(--space-6) 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "italic var(--fw-regular) clamp(1.375rem,2.2vw,1.875rem)/1.2 var(--font-display)",
      color: "var(--text-on-dark)"
    }
  }, "Green in February."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "34ch"
    }
  }, "Evergreen structure keeps the bed reading after everything else dies back."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What changes the look",
    title: "Decisions that matter more than the plant list.",
    intro: "Homeowners tend to start by choosing plants. Every one of these does more for the finished result than the species does."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "clamp(20px,3vw,44px)",
      marginTop: "var(--space-16)",
      alignItems: "start"
    }
  }, LOOK_FACTORS.map(([h, t, size], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60,
    style: {
      gridColumn: "span 1",
      minWidth: 0,
      paddingTop: wide && i % 2 ? "var(--space-10)" : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `${size === "wide" ? 2 : 1}px solid ${size === "wide" ? "var(--gold-500)" : "var(--border-strong)"}`,
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: size === "wide" ? "var(--type-h3)" : "var(--type-h4)",
      marginBottom: "var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: size === "wide" ? "52ch" : "34ch",
      textWrap: "pretty"
    }
  }, t))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "clamp(28px,5vw,80px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "16ch",
      textWrap: "pretty"
    }
  }, "Starting from scratch, or starting over?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "46ch",
      marginTop: "var(--space-6)",
      textWrap: "pretty"
    }
  }, "Send a photo of the front of the house. Most of what decides a planting plan is visible in one picture \u2014 which way it faces, what is already there, how much room there is to work with.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: "#estimate"
  }, "Request a landscape estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    href: `tel:${PHONE.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What we install",
    title: "The parts of a landscape."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: wide ? "var(--space-10)" : "var(--space-6)"
    }
  }, INSTALL_ROWS.map(([h, t, img, alt], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: img ? wide ? "minmax(0,1fr) minmax(0,.7fr)" : "112px minmax(0,1fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(24px,4vw,56px)" : "var(--space-4)",
      alignItems: "center",
      borderTop: "1px solid var(--border-hairline)",
      padding: wide ? "var(--space-6) 0" : "var(--space-4) 0"
    }
  }, img && !wide && /*#__PURE__*/React.createElement("img", {
    src: P + img,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "1/1",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: wide ? "var(--type-h3)" : "var(--type-h4)",
      marginBottom: "var(--space-2)",
      maxWidth: "20ch"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-body)" : "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, t)), img && wide && /*#__PURE__*/React.createElement("img", {
    src: P + img,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "3/2",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "var(--space-8)",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--space-8)"
    }
  }, [["Decorative rock", "/landscaping/mulch-bed-work"], ["Mulch", "/landscaping/mulch-bed-work"], ["Landscape lighting", "/landscaping/landscape-lighting"]].map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    onClick: e => {
      if (go) {
        e.preventDefault();
        go(h);
      }
    },
    style: {
      font: "var(--type-h4)",
      color: "var(--text-primary)",
      textDecoration: "none",
      borderBottom: "1px solid var(--border-strong)",
      paddingBottom: "var(--space-4)",
      display: "block"
    }
  }, l, " \u2192"))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "dark",
    eyebrow: "Choosing what goes where",
    title: "Six questions asked before a single plant is picked.",
    intro: "A plant that is wrong for the spot does not fail immediately. It fails in year four, which is long after anyone connects it back to the decision."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 0,
      marginTop: "var(--space-12)"
    }
  }, [["How much sun does it actually get?", "Not at noon. At four in the afternoon in July, and whether the house shades it by six."], ["Where does the water go?", "A bed that stays wet kills anything that wants drainage, and no amount of amendment fixes a low spot."], ["How big does it get?", "The most common mistake on any property. What fits under the window now is above the roofline in fifteen years."], ["Who sees it, and from where?", "From the street, from the driveway, from the kitchen window. Not every side of a house earns the same investment."], ["How much upkeep do you want?", "Some plantings hold their shape on one cut a year. Others need four. Worth deciding before, not after."], ["How close to the foundation?", "Roots, moisture against the wall, and whether anyone can still get to the hose bib or the meter."]].map(([h, t], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60,
    style: {
      borderTop: "1px solid var(--border-dark)",
      padding: "var(--space-8) var(--space-8) var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-semibold) 1.0625rem/1.35 var(--font-sans)",
      color: "var(--text-on-dark)",
      marginBottom: "var(--space-3)",
      maxWidth: "26ch"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "34ch"
    }
  }, t)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it goes",
    title: "Walkthrough, plan, install, establish."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)"
    }
  }, [["Walkthrough", "We stand in the yard and look at exposure, drainage and what is already growing well. The things worth keeping usually get decided here, and they change the plan more than anything else does."], ["Plan and price", "[VERIFY WHETHER A DRAWN PLAN IS PROVIDED AND WHETHER THERE IS A DESIGN FEE.] Bed shapes, plant list, sizes, edging, mulch or stone, and what is being removed first."], ["Install", "Removal, soil preparation, edging, planting, mulch. Beds get cut before anything is planted so the lines are set while there is still room to stand in them."], ["Establishment", "[VERIFY WATERING GUIDANCE PROVIDED AND ANY PLANT WARRANTY.] The first season is watering, and that part is yours. Everything installed is chosen to survive a normal Central PA winter, not a perfect one."]].map(([h, t], i, arr) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: "var(--gold-500)",
      flex: "0 0 auto",
      marginTop: 8
    }
  }), i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      background: "var(--border-strong)",
      minHeight: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      marginBottom: "var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "56ch",
      textWrap: "pretty"
    }
  }, t)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about landscape installation",
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: [{
      question: "How much does landscape installation cost in Central PA?",
      answer: "[VERIFY LANDSCAPING PRICE RANGE — a typical front-of-house range and what it includes.] Bed size, how much has to come out first, plant sizes, soil condition and access all move the number. Larger plants cost more but look finished immediately; smaller stock costs less and catches up in two or three seasons.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you work with the plants that are already there?",
      answer: "Usually, and it is worth asking for. A mature specimen that has been in the ground twenty years cannot be bought back at any price. Most renovations keep more than the homeowner expected — the work is taking out what has outgrown the space and rebuilding the beds around what stays.",
      linkLabel: null,
      href: null
    }, {
      question: "When is the best time to install landscaping in Pennsylvania?",
      answer: "Spring and fall both work, and fall is often better — the soil is still warm, the air is cooler, and roots establish before winter without the plant fighting summer heat. Summer installation is possible but needs far more watering.",
      linkLabel: null,
      href: null
    }, {
      question: "Do you provide a plan, or do you just plant?",
      answer: "[VERIFY WHETHER A DRAWN PLAN IS PROVIDED, whether there is a design fee, and whether plants are selected on site or specified in advance.] Worth asking any contractor — a quote for plants is not the same thing as a plan for a yard.",
      linkLabel: null,
      href: null
    }, {
      question: "Can landscaping be done as part of a patio project?",
      answer: "Yes, and it is the better sequence. Beds get cut after the hardscape is set, so the lines follow the finished patio rather than being worked around. The excavation is already open, the machine is already there, and the lawn only gets torn up once.",
      linkLabel: "Hardscaping",
      href: "/hardscaping/paver-patios"
    }]
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: "/resources/faqs",
    onClick: e => {
      if (go) {
        e.preventDefault();
        go("/resources/faqs");
      }
    },
    style: {
      display: "inline-block",
      marginTop: "var(--space-10)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: "1px solid var(--border-strong)",
      paddingBottom: 5
    }
  }, "See all questions \u2192")))), /*#__PURE__*/React.createElement(Section, {
    tone: "darkAlt",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "Customer proof"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-on-dark)",
      maxWidth: "34ch",
      textWrap: "pretty"
    }
  }, "[ADD REAL LANDSCAPE INSTALLATION REVIEW]"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-5)",
      maxWidth: "52ch"
    }
  }, "[ADD: A verbatim quote from a landscaping customer, with their name, town, the month and a link to the source. No invented quote goes in this slot.]")))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Send a photo of the front of the house.",
    intro: "One picture tells us most of what a planting plan needs \u2014 which way it faces, what is there now, how much room there is to work with."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.LandscapeInstallation = LandscapeInstallation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandscapeInstallation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MulchBedWork.jsx
try { (() => {
/* Mulch & bed work. Deliberately NOT the Landscape Installation skeleton.
   Installation sells a transformation; this sells a quick, recurring job done properly.
   So the page is short and practical: the one-visit job → why depth matters (signature
   profile drawing) → a working mulch calculator → mulch or stone → a little proof → questions. */

const MB_INK = "#4A453F",
  MB_SOIL = "#6B5442",
  MB_MULCH = "#2E2420",
  MB_LAWN = "#6E9A5C",
  MB_LEAF = "#3E6B3A",
  MB_GOLD = "#F5B324",
  MB_ON = "#F4F1EB",
  MB_ON2 = "#B9B4A9";
const mbLabel = {
  fontFamily: "Archivo, sans-serif",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "1.4px",
  textTransform: "uppercase"
};
function useWideMB(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
const MB_GUIDE = [[50, "0.5", "0.5"], [100, "1", "1"], [200, "1.5", "2"], [400, "2.5", "4"], [800, "5", "7.5"]];
function MulchCalc({
  wide,
  go
}) {
  const th = {
    font: "var(--type-eyebrow)",
    letterSpacing: "var(--ls-eyebrow)",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    textAlign: "left",
    padding: "0 0 var(--space-3)",
    fontWeight: 600
  };
  const td = {
    font: "var(--fw-regular) 1.125rem/1.2 var(--font-display)",
    color: "var(--text-primary)",
    padding: "var(--space-3) 0",
    borderTop: "1px solid var(--border-hairline)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.2fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "var(--space-8) clamp(28px,5vw,80px)",
      alignItems: "start",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Bed area"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "At 2 in"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "At 3 in"))), /*#__PURE__*/React.createElement("tbody", null, MB_GUIDE.map(([a, two, three]) => /*#__PURE__*/React.createElement("tr", {
    key: a
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, a, " sq ft"), /*#__PURE__*/React.createElement("td", {
    style: td
  }, two, " yd"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: "var(--green-800)"
    }
  }, three, " yd"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "40ch"
    }
  }, "Not sure of the size? Send a photo of the beds and we'll measure them when we come out."), /*#__PURE__*/React.createElement("a", {
    href: "#estimate",
    onClick: e => {
      e.preventDefault();
      go("#estimate");
    },
    style: {
      display: "inline-block",
      marginTop: "var(--space-4)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      borderBottom: "1px solid var(--gold-500)",
      paddingBottom: 4,
      textDecoration: "none"
    }
  }, "Have us measure and install it \u2192")));
}
const MB_STEPS = [["Clear", "Weeds pulled to the root and spent growth cut back."], ["Edge", "A spade-cut trench along the lawn so the line holds."], ["Mulch", "Two to three inches, spread by hand."], ["Rake back", "Pulled off stems and trunks, beds left tidy."]];
const CMB = "../../assets/photos/commercial/";
const MB_WORK = [[P + "mb-res-azaleas.jpg", "Blooming azaleas in a fresh black mulch bed behind a dry-laid fieldstone edge", "Foundation bed & azaleas", "Camp Hill, PA", "50% 50%"], [P + "mb-res-island-bed.jpg", "Island bed of black mulch and shrubs edged in fieldstone beside a driveway", "Island bed refresh", "Mechanicsburg, PA", "50% 50%"], [P + "mulch-hero-black-beds.jpg", "Fresh black mulch with a sharp cut edge against the lawn", "Edging & mulch", "New Cumberland, PA", "50% 60%"], [CMB + "commercial-landscaping-linglestown-family-dental-mulch-colonial-park-pa.jpg", "Long bed of fresh black mulch along a lawn and walkway", "Long border bed", "Colonial Park, PA", "50% 62%"]];
function MulchBedWork({
  go
}) {
  const wide = useWideMB();
  const link = href => e => {
    e.preventDefault();
    go(href);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Landscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(70vh,620px)",
    image: P + "mulch-hero-black-beds.jpg",
    alt: "Fresh black mulch beds with clean curved edges against a lawn and walkway",
    eyebrow: "Landscaping \xB7 Mulch & bed work",
    title: "Clean beds, sharp edges, fresh mulch.",
    lede: "Mulch, edging, weeding and bed refreshes for homes and commercial properties across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Cut edges and fresh black mulch"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Recent bed work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "18ch"
    }
  }, "Beds we keep sharp."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "50ch"
    }
  }, "Front beds, island beds and borders around homes across the west shore.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "clamp(14px,2vw,24px)" : 12,
      marginTop: "var(--space-8)"
    }
  }, MB_WORK.map(([src, alt, cap, town, pos], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: src,
    delay: i % 4 * 60
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/5",
      objectFit: "cover",
      objectPosition: pos,
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, cap), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, town)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "What a bed refresh includes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "18ch"
    }
  }, "Usually done in one visit.")), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "var(--space-8) 0 0",
      display: "grid",
      gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "0 clamp(20px,3vw,40px)" : "0 16px"
    }
  }, MB_STEPS.map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-on-dark)",
      marginBottom: "var(--space-2)"
    }
  }, h), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "26ch"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "How much mulch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "18ch"
    }
  }, "How much mulch will your beds take?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "52ch"
    }
  }, "One cubic yard covers about 160 square feet at two inches, or about 108 at three. Rounded up to the half yard.")), /*#__PURE__*/React.createElement(MulchCalc, {
    wide: wide,
    go: go
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Mulch or stone"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "20ch"
    }
  }, "Pick the material for the spot.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: wide ? "clamp(24px,4vw,56px)" : 14,
      marginTop: "var(--space-8)"
    }
  }, [[CMB + "commercial-landscaping-family-physician-associates-new-cumberland-pa.jpg", "Rounded shrubs in a fresh black mulch bed", "Mulch", "Breaks down and feeds the soil. Cheaper up front, topped up every year or two. Best in planting beds you change around.", "50% 70%"], [CMB + "commercial-landscaping-linglestown-family-dental-river-rock-colonial-park-pa.jpg", "Tan river rock bed along a building", "Decorative stone", "Doesn't need replacing and stays put on a slope or along a drive. Reflects heat onto plants and is hard to remove later.", "50% 65%"]].map(([src, alt, h, d, pos]) => /*#__PURE__*/React.createElement(Reveal, {
    key: h
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: wide ? "3/2" : "1/1",
      objectFit: "cover",
      objectPosition: pos,
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      borderTop: "1px solid var(--gold-500)",
      marginTop: "var(--space-4)",
      paddingTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-2)",
      maxWidth: "44ch"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-8)"
    }
  }, "Starting from bare ground? ", /*#__PURE__*/React.createElement("a", {
    href: "/landscaping/installation",
    onClick: link("/landscaping/installation")
  }, "See landscape installation \u2192"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about mulch & bed work",
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: [{
      question: "When should mulch go down in Pennsylvania?",
      answer: "Mid to late spring, once the soil has warmed and the first weeds have shown. Mulching too early traps cold, wet soil and buries weeds that are about to come up anyway. Fall mulching helps insulate roots but does less for appearance.",
      linkLabel: null,
      href: null
    }, {
      question: "Do old mulch and weeds get removed first?",
      answer: "Weeds come out to the root first, because burying them only delays them. Old mulch usually stays unless it has built up past about three inches; then some comes off before the new layer goes down.",
      linkLabel: null,
      href: null
    }, {
      question: "How often should beds be mulched?",
      answer: "Most beds look right with a light top-up once a year. Many properties alternate: a full refresh one year and just edging and touch-ups the next, which also stops the layer building up too deep.",
      linkLabel: null,
      href: null
    }, {
      question: "Do you do mulch for commercial properties?",
      answer: "Yes. Bed work is a regular part of our commercial grounds maintenance for offices, practices and managed properties.",
      linkLabel: "Commercial landscaping",
      href: "/commercial/landscaping"
    }]
  })))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Send a photo of the beds.",
    intro: "One picture tells us most of what the price needs: how overgrown the beds are, how long the edges are, and whether anything has to come out first."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.MulchBedWork = MulchBedWork;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MulchBedWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PaverDriveways.jsx
try { (() => {
/* Paver driveways. Deliberately not the patio skeleton.
   Patio page asks: how do we create an outdoor space around your property?
   Driveway page asks: how do we build a paved surface that becomes part of the front of the
   property while carrying vehicle loads every day?
   Sequence: relevance → where it takes abuse → one real driveway examined → how load moves
   → three transitions → surface choice → front-elevation design → process → objections → action. */

const DW_INK = "#4A453F",
  DW_GOLD = "#F5B324",
  DW_GOLDTEXT = "#8A5D08",
  DW_LINE = "#A79E90",
  DW_ONDARK = "#F4F1EB",
  DW_ONDARK2 = "#B9B4A9";
const dwLabel = {
  fontFamily: "Archivo, sans-serif",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "1.4px",
  textTransform: "uppercase"
};
function useWide(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
function DrivewayLogo({
  file,
  name,
  h
}) {
  const [ok, setOk] = React.useState(true);
  if (ok) return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/" + file,
    alt: name,
    onError: () => setOk(false),
    style: {
      height: h,
      width: "auto",
      maxWidth: "100%",
      display: "block"
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 1.125rem/1 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, name);
}

/* 4 — load spreading through the pavement. Illustrative, not to scale. */
function LoadSection() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 640 340",
    role: "img",
    "aria-label": "Cross-section: a tyre load on the pavers spreads wider through the bedding and compacted base into the subgrade",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "58",
    r: "52",
    fill: "#2E2B27"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "58",
    r: "22",
    fill: "#6B655D"
  }), /*#__PURE__*/React.createElement("text", {
    x: "400",
    y: "40",
    style: {
      ...dwLabel,
      fill: DW_INK
    }
  }, "Vehicle load"), [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: 40 + i * 64,
    y: "112",
    width: "60",
    height: "26",
    fill: "#B8B0A2",
    stroke: "#6B655D"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "140",
    width: "572",
    height: "16",
    fill: "#6B655D"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 158 L612 158 L612 246 L40 246 Z",
    fill: "#4A453F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 248 L612 248 L612 330 L40 330 Z",
    fill: "#5A4632"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M296 112 L276 140 L200 246 L90 330 M344 112 L364 140 L440 246 L550 330",
    fill: "none",
    stroke: DW_GOLD,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M296 112 L344 112 L364 140 L440 246 L550 330 L90 330 L200 246 L276 140 Z",
    fill: DW_GOLD,
    opacity: ".14"
  }), [["Pavers", 131], ["Bedding", 152], ["Compacted base", 206], ["Subgrade", 294]].map(([t, y]) => /*#__PURE__*/React.createElement("text", {
    key: t,
    x: "600",
    y: y,
    textAnchor: "end",
    style: {
      ...dwLabel,
      fill: t === "Pavers" ? "#2E2B27" : DW_ONDARK
    }
  }, t)), /*#__PURE__*/React.createElement("path", {
    d: "M320 112 L320 330",
    stroke: DW_GOLD,
    strokeWidth: "1",
    strokeDasharray: "3 5"
  }));
}

/* 5 — one simplified profile: street → driveway → garage. Illustrative. */
function MeetProfile() {
  const t = (s, x, y, c = DW_ONDARK2, a = "middle") => /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y,
    textAnchor: a,
    style: {
      ...dwLabel,
      fill: c
    }
  }, s);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 640 220",
    role: "img",
    "aria-label": "Side profile from the street across the driveway to the garage slab, with the street, garage and edge conditions marked",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 150 L110 150",
    stroke: DW_ONDARK2,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M110 150 L520 112",
    stroke: DW_ONDARK,
    strokeWidth: "1.5"
  }), Array.from({
    length: 14
  }).map((_, i) => {
    const x = 110 + i * 29.3;
    const y = 150 - i * 2.72;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M${x} ${y} L${x} ${y + 10}`,
      stroke: DW_ONDARK2
    });
  }), /*#__PURE__*/React.createElement("path", {
    d: "M110 160 L520 122",
    stroke: DW_ONDARK2
  }), /*#__PURE__*/React.createElement("rect", {
    x: "520",
    y: "40",
    width: "120",
    height: "72",
    fill: "none",
    stroke: DW_ONDARK2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M520 112 L640 112",
    stroke: DW_ONDARK,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "152",
    r: "5",
    fill: "none",
    stroke: DW_GOLD,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "114",
    r: "5",
    fill: "none",
    stroke: DW_GOLD,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M300 178 L300 196 M290 196 L310 196",
    stroke: DW_GOLD,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M430 96 L360 103",
    stroke: DW_GOLD,
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M366 99 L358 103 L366 108",
    fill: "none",
    stroke: DW_GOLD,
    strokeWidth: "1.2"
  }), t("Street / sidewalk", 70, 182), t("Garage slab", 580, 132), t("Edge", 300, 212, DW_GOLD), t("Pitch away", 420, 88, DW_GOLD));
}
const MEETS = [["01", "The street / sidewalk", "Where the driveway meets the existing apron, sidewalk or road."], ["02", "The garage", "The finished elevation has to meet the existing garage slab while maintaining appropriate pitch away from the structure."], ["03", "The edges", "The perimeter needs to remain defined and supported where paving meets lawn, beds or adjacent surfaces."]];
function MiniPattern() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 96 72",
    "aria-hidden": "true",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "72",
    fill: "#D0C8BB"
  }), [[0, 0, 32, 24], [32, 0, 20, 24], [52, 0, 44, 24], [0, 24, 20, 24], [20, 24, 44, 24], [64, 24, 32, 24], [0, 48, 44, 24], [44, 48, 32, 24], [76, 48, 20, 24]].map(([x, y, w, h], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x,
    y: y,
    width: w,
    height: h,
    fill: i % 3 ? "#B8B0A2" : "#A79E90",
    stroke: "#6B655D"
  })));
}
function MiniBorder() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 96 72",
    "aria-hidden": "true",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "72",
    fill: "#4A453F"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "78",
    height: "54",
    fill: "#B8B0A2"
  }), [27, 45, 63].map(x => /*#__PURE__*/React.createElement("path", {
    key: x,
    d: `M${x} 9 L${x} 63`,
    stroke: "#8E877C"
  })), [27, 45].map(y => /*#__PURE__*/React.createElement("path", {
    key: y,
    d: `M9 ${y} L87 ${y}`,
    stroke: "#8E877C"
  })));
}
function MiniWalk() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 96 72",
    "aria-hidden": "true",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "72",
    fill: "#E4DED4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "18",
    width: "48",
    height: "50",
    fill: "#B8B0A2",
    stroke: "#4A453F",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54 34 L78 34 L78 4 M54 46 L90 46 L90 4",
    fill: "none",
    stroke: "#4A453F",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 40 L84 40 L84 6",
    fill: "none",
    stroke: "#B8B0A2",
    strokeWidth: "8"
  }));
}
function MiniSwatch() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 2,
      aspectRatio: "4/3"
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: P + "swatches/swatch-" + i + ".jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })));
}
const DESIGN = [["Color & texture", "How the paver field relates to brick, siding, stone and other materials on the house.", MiniSwatch], ["Pattern", "How paver scale and laying pattern change the appearance of a large paved surface.", MiniPattern], ["Borders", "How a contrasting border defines the driveway perimeter and connects visually with adjacent walkways.", MiniBorder], ["Connected walkways", "How the driveway and front walk can use related materials so they read as one composition.", MiniWalk]];
const SURFACES = [["Asphalt", "Lowest cost to install. Flexible, but it oxidises, cracks and needs periodic sealcoating. Repairs are patches that rarely match the surrounding surface."], ["Poured concrete", "A single rigid slab. Strong and clean-looking, but when the ground moves it cracks, and a crack in a slab cannot be undone — only cut out and patched."], ["Pavers", "Individual units that move slightly with the ground instead of cracking across it. A damaged or settled section can be lifted and reset with the same pavers. Higher cost up front."]];
const DW_STEPS = [["Walk the property", "Access, elevations, drainage, garage and street transitions, and how the driveway connects to the property."], ["Define the project", "Layout, paver direction, border and design choices, and a written scope."], ["Build", "Excavation, base preparation, paving and finishing according to the confirmed scope."], ["Final walkthrough", "Review the finished work with the homeowner."]];
function PaverDriveways({
  go
}) {
  const wide = useWide();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Hardscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(84vh,760px)",
    image: P + "driveway-hero-v4.jpg",
    alt: "Large-format modular paver driveway with a charcoal border leading up to a brick house in evening light",
    eyebrow: "Hardscaping \xB7 Paver driveways",
    title: "Custom Paver Driveways",
    lede: "Paver driveway design and installation in Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Driveway, border and walkway \u2014 Central PA"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.35fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Built in New Cumberland"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch"
    }
  }, "A driveway that connects all the way to the front door."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-5)",
      maxWidth: "46ch"
    }
  }, "This New Cumberland project uses Cambridge pavers with a charcoal border, extending from the parking area into a matching walkway toward the home's front entry."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-6) 0 0",
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2) var(--space-5)",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)"
    }
  }, "Cambridge pavers"), /*#__PURE__*/React.createElement("li", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)"
    }
  }, "Charcoal border"), /*#__PURE__*/React.createElement("li", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)"
    }
  }, "Connected walkway"), /*#__PURE__*/React.createElement("li", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)"
    }
  }, "New Cumberland, PA"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(BeforeAfter, {
    before: P + "dw-before2.jpg",
    after: P + "dw-after2.jpg",
    ratio: "4/3",
    beforeAlt: "Old concrete walk broken out and piled on the lawn in front of a brick house, with a jackhammer and shovel on site",
    afterAlt: "Finished paver parking area with a charcoal border and a matching walkway leading to the front of the brick house",
    caption: "Drag to compare. The old concrete walk was broken out and removed before the driveway and walkway went in."
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Driveway drainage"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "18ch"
    }
  }, "Water needs somewhere to go."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "52ch"
    }
  }, "A paver driveway is graded with the property around it in mind. Pitch, garage height and the surrounding grades decide where runoff can safely go."), /*#__PURE__*/React.createElement("a", {
    href: "/grading-drainage",
    onClick: e => {
      e.preventDefault();
      go("/grading-drainage");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)",
      textDecoration: "none",
      width: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "drainage-trench-sm.jpg",
    alt: "Drain pipe laid in a trench before grading",
    loading: "lazy",
    style: {
      width: 96,
      height: 72,
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--text-on-dark)",
      borderBottom: "1px solid var(--gold-500)",
      paddingBottom: 5
    }
  }, "Learn more about our drainage process \u2192"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      gap: "clamp(32px,5vw,88px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "What's under the surface"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch"
    }
  }, "The surface carries the car. The base carries the load."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)",
      marginTop: "var(--space-6)"
    }
  }, "A tire puts its weight on a small area of pavers. The pavement system distributes that load downward and outward through the layers beneath it. By the time it reaches the subgrade, the load is spread across a much larger area."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-6)",
      maxWidth: "52ch"
    }
  }, "[VERIFY DRIVEWAY BUILD WITH DORIAN \u2014 excavation depth, base material and thickness, compaction, bedding, paver thickness, edge treatment, and what changes because cars drive on it. Layers will be annotated once confirmed.]")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--gold-500)",
      borderBottom: "1px solid var(--gold-500)",
      padding: "var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement(LoadSection, null)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Designing the surface",
    title: "The driveway takes up a lot of the front of a property. It should belong there."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(28px,4vw,64px)",
      marginTop: "var(--space-10)",
      borderBottom: "1px solid var(--gold-500)"
    }
  }, DESIGN.map(([h, d, V], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60,
    style: {
      display: "grid",
      gridTemplateColumns: "112px 1fr",
      gap: "var(--space-5)",
      alignItems: "center",
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderRadius: "var(--radius-xs)"
    }
  }, /*#__PURE__*/React.createElement(V, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      marginBottom: "var(--space-2)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "42ch"
    }
  }, d))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Asphalt, concrete or pavers",
    title: "Why choose individual pavers for something this large?",
    intro: "All three can make a good driveway. They fail differently, repair differently and cost differently, and that's usually what decides it."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
      gap: "0 clamp(24px,4vw,56px)",
      marginTop: "var(--space-12)"
    }
  }, SURFACES.map(([h, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 70,
    style: {
      borderTop: i === 2 ? "2px solid var(--gold-500)" : "1px solid var(--border-strong)",
      padding: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      marginBottom: "var(--space-4)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "42ch"
    }
  }, d)))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-6)",
      maxWidth: "60ch"
    }
  }, "[VERIFY COMPARISON CLAIMS BEFORE PUBLISHING.]")))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
      gap: "var(--space-6) clamp(24px,4vw,64px)",
      alignItems: "center",
      borderTop: "1px solid var(--gold-500)",
      borderBottom: "1px solid var(--gold-500)",
      padding: "var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      marginBottom: "var(--space-3)"
    }
  }, "Paver manufacturers"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, "We install pavers from Techo-Bloc and Cambridge, including units made for vehicle traffic.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2) clamp(20px,3vw,40px) var(--space-2) 0"
    }
  }, /*#__PURE__*/React.createElement(DrivewayLogo, {
    file: "techo-bloc.png",
    name: "Techo-Bloc",
    h: "clamp(14px,1.6vw,19px)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2) 0 var(--space-2) clamp(20px,3vw,40px)",
      borderLeft: "1px solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement(DrivewayLogo, {
    file: "cambridge-pavers.png",
    name: "Cambridge Pavers",
    h: "clamp(44px,4.8vw,58px)"
  }))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-8)"
    }
  }, "Getting a driveway built")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,210px),1fr))",
      gap: "var(--space-6) var(--space-8)"
    }
  }, DW_STEPS.map(([h, d], i) => /*#__PURE__*/React.createElement("li", {
    key: h,
    style: {
      borderTop: "1px solid var(--border-strong)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "baseline",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, h)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about paver driveways",
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: [{
      question: "How are paver driveways different from paver patios?",
      answer: "The surface can look similar. What changes is the load: cars are heavier than foot traffic and tires turn on the surface, so a driveway is built with a deeper base and pavers made for vehicle traffic. [VERIFY DRIVEWAY BASE AND PAVER THICKNESS.]",
      linkLabel: "Paver patios",
      href: "/hardscaping/paver-patios"
    }, {
      question: "Can pavers handle vehicle traffic?",
      answer: "Yes, when the pavement system is built as a driveway. The pavers, bedding and compacted base spread each tire's load across a wider area, as shown above. [VERIFY PAVER THICKNESS AND BASE DEPTH USED for vehicle loads.]",
      linkLabel: null,
      href: null
    }, {
      question: "Can a paver driveway connect to an existing concrete garage slab?",
      answer: "Yes. The finished paver surface is set to meet the slab and pitched away from the garage so water doesn't run toward it.",
      linkLabel: null,
      href: null
    }, {
      question: "Can a matching paver walkway be built with the driveway?",
      answer: "Yes. Building both together lets them share the same pavers and border, so they read as one composition. The New Cumberland project above does exactly that.",
      linkLabel: "Walkways & steps",
      href: "/hardscaping/walkways"
    }, {
      question: "How do you choose paver colors and borders?",
      answer: "Start with what's already on the house: brick, siding, stone and trim. The field usually picks up the main exterior tone, and a darker border defines the edge. We install Techo-Bloc and Cambridge, which offer a wide range of both.",
      linkLabel: null,
      href: null
    }, {
      question: "Do paver driveways work on sloped properties?",
      answer: "Often, yes. Slope affects how water moves across the surface and how the edges are held. [VERIFY HOW ALEJANDRO'S HANDLES STEEP DRIVEWAYS.]",
      linkLabel: "Grading & drainage",
      href: "/grading-drainage"
    }, {
      question: "What areas do you serve?",
      answer: "Towns within about twenty miles of New Cumberland, including Camp Hill, Mechanicsburg, Lemoyne, Harrisburg and Hershey.",
      linkLabel: "Service area",
      href: "/service-area"
    }]
  })))), /*#__PURE__*/React.createElement(RelatedProjects, {
    go: go,
    service: "paver-driveways"
  }), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Send a photo of the driveway.",
    intro: "A picture of what's there now and a rough size tells us more than a paragraph. We'll look at how it meets the street and the house, and what has to come out."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.PaverDriveways = PaverDriveways;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PaverDriveways.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PaverPatios.jsx
try { (() => {
/* Paver patios. Sequence follows the buyer, not a template:
   relevance → desire → personalisation → technical trust → transformation → choice
   → process → company trust → adjacent needs → objections → local → action. */

const PLAN_FACTORS = [["How you'll use it", "Dining, seating, grilling, fire features and how many people the patio needs to accommodate."], ["How it connects", "Doors, walkways, pools and the natural routes people take through the yard."], ["How the property sits", "Slope, elevation, drainage and whether steps or retaining walls need to become part of the project."]];

/* Listed top-down as the homeowner sees it in section, numbered in build order. */
const ASSEMBLY = [["05", "Joints + edge restraint", "The finished field is secured at the perimeter and the joints are filled appropriately for the system.", {
  h: 14,
  bg: "repeating-linear-gradient(90deg,#8E877C 0 46px,#2E2B27 46px 49px)"
}], ["04", "Pavers", "Pavers are set to the planned elevations, pattern and pitch.", {
  h: 30,
  bg: "repeating-linear-gradient(90deg,#B8B0A2 0 58px,#6B655D 58px 61px)"
}], ["03", "1B stone-chip bedding", "Instead of a conventional sand setting bed, we level the pavers over clean stone chips. The open-graded material allows water to move through the bedding layer rather than relying on a fine sand layer directly beneath the pavers.", {
  h: 20,
  bg: "radial-gradient(circle,#9A9388 1.6px,transparent 2px) 0 0/7px 7px,#6B655D"
}], ["02", "Compacted stone base", "The structural aggregate base provides the patio's foundation.", {
  h: 56,
  bg: "radial-gradient(circle,#A79E90 2.2px,transparent 2.8px) 0 0/10px 9px,radial-gradient(circle,#6B655D 1.4px,transparent 2px) 4px 5px/9px 10px,#4A453F"
}], ["01", "Prepared subgrade", "The existing surface is excavated and prepared for the patio system.", {
  h: 40,
  bg: "linear-gradient(180deg,#5A4632,#3E3022)"
}]];
const OPTIONS = [["Colour & texture", "Smooth, tumbled or textured faces, in blends chosen to sit with the siding, brick or stone already on the house.", "swatch"], ["Pattern", "Pattern changes how big the patio reads and how busy it looks. Modular breaks up a large field; running bond and herringbone add direction.", "pattern"], ["Borders", "A contrasting border around the field is the simplest way to make a patio look finished. It also holds the cut edge on curves.", "border"], ["Curves or straight lines", "Straight lines suit a formal house and a square yard. Curves follow a pool, a planting bed or the way people walk through the space.", "plan"]];
const SPEC_INK = "#4A453F";
const SPEC_LABEL = {
  font: "var(--fw-semibold) 10px/1 var(--font-sans)",
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "var(--text-muted)"
};
function SwatchTile({
  file,
  base,
  grain
}) {
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      position: "relative",
      overflow: "hidden",
      background: grain + "," + base,
      boxShadow: "inset 0 -3px 0 rgba(0,0,0,.14), inset 0 1px 0 rgba(255,255,255,.18)"
    }
  }, ok && /*#__PURE__*/React.createElement("img", {
    src: P + "swatches/" + file,
    alt: "",
    onError: () => setOk(false),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
}

/* Drop product close-ups into assets/photos/swatches/ with these filenames. Until a file exists the
   drawn texture shows. Labels stay generic until the owner confirms which paver lines are installed. */
function Swatches() {
  const s = [["Warm", "swatch-1.jpg", "linear-gradient(135deg,#B9926B,#9C7650)", "radial-gradient(circle,rgba(255,240,220,.35) 1px,transparent 1.6px) 0 0/6px 6px"], ["Blend", "swatch-2.jpg", "linear-gradient(135deg,#A89C8C 0%,#8E8174 45%,#B7A48C 100%)", "radial-gradient(circle,rgba(40,30,20,.25) 1px,transparent 1.6px) 2px 3px/7px 7px"], ["Cool", "swatch-3.jpg", "linear-gradient(135deg,#8C9095,#6F747A)", "radial-gradient(circle,rgba(255,255,255,.22) .9px,transparent 1.5px) 0 0/5px 5px"], ["Textured", "swatch-4.jpg", "linear-gradient(135deg,#7A7066,#5B534B)", "radial-gradient(circle,rgba(0,0,0,.35) 1.6px,transparent 2.4px) 0 0/9px 8px, radial-gradient(circle,rgba(255,255,255,.18) 1.2px,transparent 2px) 4px 4px/8px 9px"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, s.map(([l, file, base, grain]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SwatchTile, {
    file: file,
    base: base,
    grain: grain
  }), /*#__PURE__*/React.createElement("span", {
    style: SPEC_LABEL
  }, l))));
}
function herringbone(u, w, h) {
  const out = [];
  for (let s = -12; s <= 12; s++) for (let t = -12; t <= 16; t++) {
    const ox = s * 4 + t,
      oy = t;
    out.push([ox * u, oy * u, 2 * u, u], [(ox + 2) * u, (oy - 1) * u, u, 2 * u]);
  }
  return out.filter(([x, y, rw, rh]) => x < w && y < h && x + rw > 0 && y + rh > 0);
}
function Patterns() {
  const W = 92,
    H = 68,
    f = "#E4DED4";
  const modular = [[0, 0, 34, 22], [34, 0, 22, 22], [56, 0, 36, 22], [0, 22, 22, 22], [22, 22, 34, 22], [56, 22, 22, 22], [78, 22, 14, 22], [0, 44, 34, 24], [34, 44, 22, 24], [56, 44, 36, 24]];
  const bond = [];
  for (let r = 0; r < 6; r++) for (let c = -1; c < 5; c++) bond.push([c * 24 + (r % 2 ? 12 : 0), r * 12, 24, 12]);
  const sets = [["Modular", modular], ["Running bond", bond], ["Herringbone", herringbone(8, W, H)]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, sets.map(([l, rects], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    "aria-hidden": "true",
    style: {
      display: "block",
      background: f,
      outline: "1px solid " + SPEC_INK
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "pc" + i
  }, /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#pc${i})`,
    fill: f,
    stroke: SPEC_INK,
    strokeWidth: "1"
  }, rects.map(([x, y, w, h], k) => /*#__PURE__*/React.createElement("rect", {
    key: k,
    x: x,
    y: y,
    width: w,
    height: h
  })))), /*#__PURE__*/React.createElement("span", {
    style: SPEC_LABEL
  }, l))));
}
function BorderDiagram() {
  const W = 200,
    H = 108,
    b = 12,
    f = "#E4DED4";
  const field = [];
  for (let r = 0; r < 8; r++) for (let c = -1; c < 10; c++) field.push([b + c * 22 + (r % 2 ? 11 : 0), b + r * 11, 22, 11]);
  const ring = [];
  for (let x = 0; x < W; x += b) ring.push([x, 0], [x, H - b]);
  for (let y = b; y < H - b; y += b) ring.push([0, y], [W - b, y]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "bf"
  }, /*#__PURE__*/React.createElement("rect", {
    x: b,
    y: b,
    width: W - 2 * b,
    height: H - 2 * b
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#bf)",
    fill: f,
    stroke: SPEC_INK,
    strokeWidth: "1"
  }, field.map(([x, y, w, h], k) => /*#__PURE__*/React.createElement("rect", {
    key: k,
    x: x,
    y: y,
    width: w,
    height: h
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "#5B534B",
    stroke: "#2E2B27",
    strokeWidth: "1"
  }, ring.map(([x, y], k) => /*#__PURE__*/React.createElement("rect", {
    key: k,
    x: x,
    y: y,
    width: b,
    height: b
  }))), /*#__PURE__*/React.createElement("rect", {
    x: ".75",
    y: ".75",
    width: W - 1.5,
    height: H - 1.5,
    fill: "none",
    stroke: "var(--gold-500)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...SPEC_LABEL,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: f,
      outline: "1px solid " + SPEC_INK
    }
  }), "Field"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...SPEC_LABEL,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: "#5B534B",
      outline: "1.5px solid var(--gold-500)"
    }
  }), "Border")));
}
function PlanViews() {
  const W = 120,
    H = 88,
    f = "#E4DED4";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "108",
    height: "14",
    fill: "#A79E90"
  }), /*#__PURE__*/React.createElement("text", {
    x: "60",
    y: "14",
    textAnchor: "middle",
    style: {
      font: "600 7px var(--font-sans)",
      letterSpacing: ".14em"
    },
    fill: "#FAF8F4"
  }, "HOUSE"), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "18",
    width: "84",
    height: "56",
    fill: f,
    stroke: SPEC_INK,
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "22",
    y: "22",
    width: "76",
    height: "48",
    fill: "none",
    stroke: SPEC_INK,
    strokeWidth: ".6",
    strokeDasharray: "2 2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "52",
    y: "74",
    width: "16",
    height: "8",
    fill: f,
    stroke: SPEC_INK,
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: SPEC_LABEL
  }, "Straight")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 44 C8 14 40 6 64 8 C94 10 114 26 112 50 C110 74 84 84 58 82 C30 80 8 70 8 44 Z",
    fill: f,
    stroke: SPEC_INK,
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "62",
    cy: "45",
    rx: "32",
    ry: "22",
    fill: "#B9CFD6",
    stroke: SPEC_INK,
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "62",
    cy: "45",
    rx: "36",
    ry: "26",
    fill: "none",
    stroke: SPEC_INK,
    strokeWidth: ".6",
    strokeDasharray: "2 2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "62",
    y: "48",
    textAnchor: "middle",
    style: {
      font: "600 7px var(--font-sans)",
      letterSpacing: ".14em"
    },
    fill: SPEC_INK
  }, "POOL")), /*#__PURE__*/React.createElement("span", {
    style: SPEC_LABEL
  }, "Curved")));
}
const SPEC_VISUALS = {
  swatch: Swatches,
  pattern: Patterns,
  border: BorderDiagram,
  plan: PlanViews
};
const PROCESS = [["Walk the property", "We look at the space, access for equipment, elevation, drainage, and what you want the patio to do."], ["Plan the project", "Footprint, features, materials and scope, written down with a price before anything starts."], ["Prepare the site", "Excavation, grading and base preparation. The part that decides whether the patio stays flat."], ["Build", "Pavers, borders, and any steps, walls or features that are part of the plan."], ["Finish the property", "Final grading, cleanup, and a walkthrough with you. [VERIFY LAWN RESTORATION AND WALKTHROUGH PRACTICE.]"]];
const RELATED = [["Retaining walls", "/hardscaping/retaining-walls", "When the patio needs level ground the yard does not have."], ["Walkways & steps", "/hardscaping/walkways", "Connecting the patio to the driveway, the gate or the front door."], ["Fire features & seat walls", "/hardscaping/fire-features", "Built into the patio on the same excavation."], ["Grading & drainage", "/hardscaping/drainage", "When water already stands where the patio is going."]];
const TOWNS = ["Camp Hill", "Mechanicsburg", "New Cumberland", "Lemoyne", "Harrisburg", "Enola", "Hershey", "Hummelstown", "Dillsburg", "Elizabethtown"];
function BrandLogo({
  file,
  name,
  h = 40
}) {
  const [ok, setOk] = React.useState(true);
  if (ok) return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/" + file,
    alt: name,
    onError: () => setOk(false),
    style: {
      height: h,
      width: "auto",
      maxWidth: "100%",
      display: "block"
    }
  });
  /* Fallback until the official file is supplied: the name in plain type, never a redrawn mark. */
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 1.125rem/1 var(--font-sans)",
      letterSpacing: ".04em",
      color: "var(--text-primary)"
    }
  }, name);
}
function PaverPatios({
  go
}) {
  const tileRatio = useTileRatio();
  const nav = href => e => {
    e.preventDefault();
    go && go(href);
  };
  const phoneHref = `tel:${PHONE.replace(/\D/g, "")}`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Hardscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(78vh,700px)",
    image: P + "patio-raised-wall-dusk.jpg",
    alt: "Raised paver patio on a block retaining wall with lit steps and a seat wall beside the house at dusk",
    eyebrow: "Paver patios",
    title: "Built around your property.",
    lede: "Custom paver patio design and installation in Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: phoneHref
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Raised patio, block wall base and lit steps"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Recent patios",
    title: "Built around the way you use the yard."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ProjectTile, {
    ratio: tileRatio,
    image: P + "patio-pool-pavers.jpg",
    alt: "Paver patio cut to the curve of an in-ground pool",
    town: "Central PA",
    service: "Pool pavers",
    detail: "Field cut to the pool radius with a contrasting border."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    ratio: tileRatio,
    image: P + "patio-firepit-seatwall-dusk.jpg",
    alt: "Paver patio at dusk with a round stone firepit, Adirondack chairs and an under-cap lit seat wall",
    town: "Central PA",
    service: "Patio, seat wall & fire pit",
    detail: "Round block fire pit, seat wall lit from under the cap."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement(ProjectTile, {
    ratio: tileRatio,
    image: P + "patio-pergola-web.png",
    alt: "Ground-level paver patio with a charcoal soldier-course border under a louvred pergola, framed by black mulch beds",
    town: "Central PA",
    service: "Patio & pergola pad",
    detail: "Two-tone field with a charcoal soldier-course border."
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "clamp(28px,4vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(BeforeAfter, {
    before: P + "pool-pavers-before.jpg",
    after: P + "pool-pavers-after.jpg",
    beforeAlt: "Old pool-side paver patio with weeds in every joint and pavers lifting at the pool edge",
    afterAlt: "Rebuilt pool patio in a multi-size blended paver, cut to the pool curve with a charcoal border and a channel drain across the field",
    caption: "Drag to compare."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Project breakdown",
    title: "Rebuilding a failing pool patio."
  }), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "var(--space-8) 0 0"
    }
  }, [["Before", "Weeds had taken over the joints, while pavers along the pool coping were lifting and separating."], ["What we did", "[VERIFY SCOPE — e.g. removed the existing pavers, rebuilt the base, reset or replaced the pavers, installed the border, added the channel drain.]"], ["The result", "A clean, continuous pool surround with properly aligned edges and a finished surface built to hold together."]].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(96px,120px) 1fr",
      gap: "var(--space-5)",
      padding: "var(--space-5) 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)",
      paddingTop: 3
    }
  }, h), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "48ch"
    }
  }, d)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "paver-walkway-chip-bed-install.jpg",
    alt: "Pavers being laid over a bed of clean 1B stone chips on a compacted base, with the next pavers stacked beside the run",
    style: {
      width: "100%",
      aspectRatio: "21/9",
      objectFit: "cover",
      objectPosition: "50% 80%",
      borderRadius: "var(--radius-image)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "40%",
      top: "56%",
      width: 44,
      height: 44,
      transform: "translate(-50%,-50%)",
      border: "1.5px solid var(--gold-500)",
      borderRadius: "50%",
      boxShadow: "0 0 0 4px rgba(10,36,22,.35)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-4)"
    }
  }, "Pavers going down over the stone-chip bed. [VERIFY TOWN AND PROJECT.]"))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "clamp(48px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "dark",
    eyebrow: "Built from the ground up",
    title: "What's underneath the pavers matters.",
    intro: "A patio is more than the pavers you see. The system underneath determines how the finished surface is supported, leveled and handles water. Alejandro's builds that foundation in layers\u2014including a clean, angular stone-chip bedding course instead of a conventional sand setting bed."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-12)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: 112,
      height: 72,
      borderRadius: "var(--radius-image)",
      outline: "1.5px solid var(--gold-500)",
      outlineOffset: 2,
      background: `url(${P + "paver-walkway-chip-bed-install.jpg"}) 38% 72% / 420% auto no-repeat`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "clamp(24px,6vw,80px)",
      height: 1,
      background: "var(--gold-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-on-dark)"
    }
  }, "A closer look underneath")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: "var(--space-12) 0 0",
      padding: 0,
      borderBottom: "1px solid var(--border-dark)"
    }
  }, ASSEMBLY.map(([n, h, d, band], i) => {
    const focus = n === "03";
    return /*#__PURE__*/React.createElement(Reveal, {
      key: n,
      delay: i * 60
    }, /*#__PURE__*/React.createElement("li", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "var(--space-4) clamp(24px,4vw,64px)",
        alignItems: "center",
        borderTop: "1px solid var(--border-dark)",
        padding: focus ? "var(--space-6) var(--space-5)" : "var(--space-5) 0",
        margin: focus ? "0 calc(var(--space-5) * -1)" : 0,
        background: focus ? "rgba(245,179,36,.06)" : "transparent",
        outline: focus ? "1px solid rgba(245,179,36,.55)" : "none",
        outlineOffset: -1
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        height: band.h,
        background: band.bg,
        borderRadius: "var(--radius-xs)",
        boxShadow: focus ? "0 0 0 1px var(--gold-500)" : "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "44px 1fr",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        color: "var(--gold-500)",
        paddingTop: 3
      }
    }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-3)",
        marginBottom: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: focus ? "var(--gold-300)" : "var(--text-on-dark)"
      }
    }, h), focus && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--fw-semibold) 10px/1 var(--font-sans)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: "var(--green-950)",
        background: "var(--gold-500)",
        padding: "4px 7px"
      }
    }, "Our method")), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-small)",
        color: focus ? "var(--text-on-dark)" : "var(--text-on-dark-secondary)",
        maxWidth: "52ch"
      }
    }, d)))));
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-12)",
      borderTop: "2px solid var(--gold-500)",
      paddingTop: "var(--space-6)",
      maxWidth: "62ch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-500)",
      marginBottom: "var(--space-4)"
    }
  }, "Why we build it this way"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) clamp(1.25rem,1.9vw,1.625rem)/1.4 var(--font-display)",
      color: "var(--text-on-dark)",
      textWrap: "pretty"
    }
  }, "Water gets beneath outdoor paving. Our bedding system is designed around that reality, using clean stone beneath the pavers as part of a stable, free-draining assembly.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Planning your patio",
    title: "A good patio starts with the space around it.",
    intro: "You don't need to know the dimensions, paver pattern or finished layout before you call. We look at how the patio connects to the house, how you'll use it, and what the property allows."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: "0 clamp(24px,3vw,48px)",
      marginTop: "clamp(40px,5vw,72px)"
    }
  }, PLAN_FACTORS.map(([h, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60,
    style: {
      borderTop: "1px solid var(--border-strong)",
      padding: "var(--space-5) 0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)",
      marginBottom: "var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "38ch"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Materials & design",
    title: "Make it fit the house, not just the yard."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      borderBottom: "1px solid var(--gold-500)"
    }
  }, OPTIONS.map(([h, d, kind], i) => {
    const Visual = SPEC_VISUALS[kind];
    return /*#__PURE__*/React.createElement(Reveal, {
      key: h,
      delay: i * 60
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
        gap: "var(--space-6) clamp(24px,4vw,64px)",
        alignItems: "center",
        borderTop: "1px solid var(--gold-500)",
        padding: "var(--space-8) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "44px 1fr",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        color: "var(--gold-text)",
        paddingTop: 3
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-primary)",
        marginBottom: "var(--space-3)"
      }
    }, h), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-small)",
        color: "var(--text-secondary)",
        maxWidth: "46ch"
      }
    }, d))), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Visual, null))));
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
      gap: "var(--space-6) clamp(24px,4vw,64px)",
      alignItems: "center",
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "44px 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      marginBottom: "var(--space-3)"
    }
  }, "Paver manufacturers"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, "We install pavers from Techo-Bloc and Cambridge, giving homeowners a wide range of colors, textures, sizes and patterns to work with."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-3)"
    }
  }, "Product availability varies by project, color and style."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2) clamp(20px,3vw,40px) var(--space-2) 0"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    file: "techo-bloc.png",
    name: "Techo-Bloc",
    h: "clamp(14px,1.6vw,19px)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2) 0 var(--space-2) clamp(20px,3vw,40px)",
      borderLeft: "1px solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    file: "cambridge-pavers.png",
    name: "Cambridge Pavers",
    h: "clamp(44px,4.8vw,58px)"
  })))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Related hardscaping",
    title: "Building more than the patio?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)"
    }
  }, RELATED.map(([label, href, note], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: href,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: nav(href),
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr) auto",
      gap: "var(--space-6)",
      alignItems: "baseline",
      padding: "var(--space-6) 0",
      borderTop: "1px solid var(--border-hairline)",
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, note), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--green-800)"
  }))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about paver patios",
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: [{
      question: "How much does a paver patio cost in Central Pennsylvania?",
      answer: "Most paver patio projects we build in Central Pennsylvania fall between $10,000 and $50,000. Size sets the base number. Excavation depth, equipment access to the back yard, drainage work, the paver chosen, and any steps, walls or fire features move it from there. Every estimate should state what preparation and materials are included.",
      linkLabel: null,
      href: null
    }, {
      question: "How long does paver patio installation take?",
      answer: "Most paver patios take 3–7 days once construction begins. Laying the pavers is rarely what takes longest. Excavation, hauling spoil out through a narrow gate, drainage work, and rain that delays base compaction are what extend a schedule.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you replace an existing concrete patio with pavers?",
      answer: "[VERIFY DEMOLITION CAPABILITY AND WHETHER REMOVAL IS INCLUDED OR QUOTED SEPARATELY.] A cracked slab can't be patched invisibly. Pavers are individual units, so a damaged section can be lifted and reset instead.",
      linkLabel: null,
      href: null
    }, {
      question: "Do paver patios require maintenance?",
      answer: "Some. Joint sand can wash out over time and should be topped up, and weeds or moss in the joints are easier to handle early. [VERIFY WHETHER SEALING IS RECOMMENDED OR OFFERED.] A patio on a sound base shouldn't need resetting.",
      linkLabel: null,
      href: null
    }, {
      question: "How do you prepare the base for a paver patio?",
      answer: "We excavate, build a compacted stone base, and level the pavers on a clean 1B stone-chip bedding course instead of sand. [VERIFY EXCAVATION DEPTH AND BASE THICKNESS.] The base decides whether a patio stays flat through Pennsylvania freeze-thaw.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you build a patio on a sloped yard?",
      answer: "Yes. The patio is cut into the grade, raised on a retaining-wall base, or split into levels with steps. Which one depends on how far the ground falls and where the door sits.",
      linkLabel: "Retaining walls",
      href: "/hardscaping/retaining-walls"
    }, {
      question: "Can you add steps, walls, lighting or a fire feature?",
      answer: "Yes, and it's simpler at the same time. Wall footings, the patio base and lighting wires all go in during one excavation, instead of cutting into a finished patio later.",
      linkLabel: "Fire features & seat walls",
      href: "/hardscaping/fire-features"
    }, {
      question: "What areas do you serve?",
      answer: "Towns within about twenty miles of New Cumberland, including Camp Hill, Mechanicsburg, Lemoyne, Harrisburg and Hershey, across Cumberland, Dauphin and York counties.",
      linkLabel: "Service area",
      href: "/service-area"
    }]
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "clamp(24px,4vw,72px)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Where we build",
    title: "Paver patio installation across the Harrisburg area."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      lineHeight: 1.9
    }
  }, TOWNS.join(" · ")), /*#__PURE__*/React.createElement("a", {
    href: "/service-area",
    onClick: nav("/service-area"),
    style: {
      display: "inline-block",
      marginTop: "var(--space-5)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: "1px solid var(--border-strong)",
      paddingBottom: 5
    }
  }, "Full service area \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "clamp(260px,42vw,520px)",
      overflow: "hidden",
      background: "var(--green-950)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "firepit-seatwall-night.jpg",
    alt: "Finished paver patio with a lit seat wall and firepit at night",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement(RelatedProjects, {
    go: go,
    service: "paver-patios"
  }), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Have a backyard you are ready to use differently?",
    intro: "Tell us what you are working with and what you would like the space to become. We will take a look at the property and talk through the project with you."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.PaverPatios = PaverPatios;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PaverPatios.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectPage.jsx
try { (() => {
/* Reusable project case-study template + RelatedProjects strip for service and area pages. */

const PJP = "../../assets/photos/";
function useWidePP(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
function setHead(title, desc, path, crumbs) {
  return window.__seoSetHead(title, desc, path, crumbs);
}
const ppLabel = {
  font: "var(--type-eyebrow)",
  letterSpacing: "var(--ls-eyebrow)",
  textTransform: "uppercase",
  color: "var(--gold-text)"
};
function ProjectPage({
  go,
  slug
}) {
  const wide = useWidePP();
  const d = (window.PROJECT_STUDIES || []).find(p => p.slug === slug);
  const link = href => e => {
    e.preventDefault();
    go(href);
  };
  React.useEffect(() => {
    if (d) setHead(d.title.replace(/\s*\[VERIFY[^\]]*\]/, "") + " | Alejandro's Landscaping", d.meta, "/projects/" + d.slug + "/", [["Home", "/"], ["Projects", "/projects/"], [d.short, "/projects/" + d.slug + "/"]]);
  }, [slug]);
  if (!d) return null;
  const [bl, al] = d.beforeAfterLabels || ["Before", "After"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    active: "Projects",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: link("/")
  }, "Home"), " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), " ", /*#__PURE__*/React.createElement("a", {
    href: "/projects/",
    onClick: link("/projects")
  }, "Projects"), " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), " ", /*#__PURE__*/React.createElement("span", null, d.short)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.25fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,64px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: ppLabel
  }, d.serviceLabel, " \xB7 ", d.town), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      marginTop: "var(--space-3)",
      maxWidth: "18ch"
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-5)",
      maxWidth: "48ch"
    }
  }, d.intro), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "var(--space-6) 0 0",
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "0 var(--space-5)"
    }
  }, d.facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: ppLabel
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "var(--space-1) 0 0",
      font: "var(--type-small)",
      color: "var(--text-primary)"
    }
  }, v))))), /*#__PURE__*/React.createElement("img", {
    src: PJP + d.hero,
    alt: d.heroAlt,
    fetchpriority: "high",
    style: {
      width: "100%",
      aspectRatio: wide ? "4/3" : "16/10",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block",
      order: wide ? 0 : -1
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.2fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,64px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeforeAfter, {
    before: PJP + d.beforeAfter[0],
    after: PJP + d.beforeAfter[1],
    beforeAlt: d.beforeAfter[2],
    afterAlt: d.beforeAfter[3],
    ratio: "4/3"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, "Drag to compare \xB7 ", bl, " / ", al)), /*#__PURE__*/React.createElement("div", null, !/^\s*\[(VERIFY|ADD)[^\]]*\]\s*$/.test(d.before) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ppLabel,
      marginBottom: "var(--space-2)"
    }
  }, "Before the work"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "46ch",
      marginBottom: "var(--space-6)"
    }
  }, d.before)), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ppLabel,
      marginBottom: "var(--space-2)"
    }
  }, "Work performed"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: "1.1em",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, d.work.map(w => /*#__PURE__*/React.createElement("li", {
    key: w,
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, w))), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ppLabel,
      margin: "var(--space-6) 0 var(--space-2)"
    }
  }, "The result"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "46ch"
    }
  }, d.result))), d.gallery.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: wide ? "var(--gap-grid)" : 12,
      marginTop: "var(--space-10)",
      maxWidth: wide ? 820 : "none"
    }
  }, d.gallery.map(([f, alt, cap]) => /*#__PURE__*/React.createElement("figure", {
    key: f,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PJP + f,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-2)"
    }
  }, cap)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4) var(--space-10)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...ppLabel,
      color: "var(--text-primary)"
    }
  }, "Related services"), d.related.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    onClick: link(h),
    style: {
      font: "var(--type-body)"
    }
  }, l, " \u2192")), /*#__PURE__*/React.createElement("a", {
    href: d.areaHref,
    onClick: link(d.areaHref),
    style: {
      font: "var(--type-body)"
    }
  }, d.townVerified ? `Our services in ${d.town.replace(", PA", "")}` : "Our service area", " \u2192")))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Planning something similar?",
    intro: `Send a photo of your property and tell us what you have in mind. We'll take a look and talk through the ${d.serviceLabel.toLowerCase()} work it needs.`
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}

/* Strip of related case studies for a service page or town page. Renders nothing if none match. */
function RelatedProjects({
  go,
  service,
  town,
  title
}) {
  const wide = useWidePP();
  const list = (window.PROJECT_STUDIES || []).filter(p => (service ? p.service === service : true) && (town ? p.townVerified && p.town.startsWith(town) : true));
  if (!list.length) return null;
  return /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-4)",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)"
    }
  }, title || "Related projects"), /*#__PURE__*/React.createElement("a", {
    href: "/projects/",
    onClick: e => {
      e.preventDefault();
      go("/projects");
    },
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "All projects \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "var(--gap-grid)" : 12,
      marginTop: "var(--space-6)"
    }
  }, list.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: "/projects/" + p.slug + "/",
    onClick: e => {
      e.preventDefault();
      go("/projects/" + p.slug);
    },
    style: {
      textDecoration: "none",
      color: "inherit",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PJP + p.hero,
    alt: p.heroAlt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ppLabel,
      marginTop: "var(--space-3)"
    }
  }, p.town), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 1rem/1.3 var(--font-display)",
      marginTop: 2
    }
  }, p.short)))), service && (() => {
    const towns = (window.TOWNS_DATA || []).filter(t => list.some(p => p.townVerified && p.town.startsWith(t.town)));
    if (!towns.length) return null;
    return /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-small)",
        color: "var(--text-secondary)",
        marginTop: "var(--space-6)",
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-2) var(--space-4)",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: ppLabel
    }, "Where we work"), towns.map(t => /*#__PURE__*/React.createElement("a", {
      key: t.slug,
      href: "/service-areas/" + t.slug + "/",
      onClick: e => {
        e.preventDefault();
        go("/service-areas/" + t.slug);
      }
    }, t.town, ", PA")), /*#__PURE__*/React.createElement("a", {
      href: "/service-areas/",
      onClick: e => {
        e.preventDefault();
        go("/service-area");
      }
    }, "All service areas \u2192"));
  })()));
}
Object.assign(window, {
  ProjectPage,
  RelatedProjects,
  setHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
/* Projects index. Case studies (own page) first, then single-photo cards that link to the service.
   Data lives in projects-data.js. Filters only show categories that have entries. */

const PJ = "../../assets/photos/";
function useWidePJ(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
function Projects({
  go
}) {
  const wide = useWidePJ();
  const [cat, setCat] = React.useState("All");
  React.useEffect(() => {
    window.setHead && window.setHead("Landscaping & Hardscaping Projects in Central PA | Alejandro's Landscaping", "Completed paver driveways, patios, walkways, retaining walls, landscaping and commercial grounds by Alejandro's Landscaping in New Cumberland and across Central Pennsylvania.", "/projects/", [["Home", "/"], ["Projects", "/projects/"]]);
  }, []);
  const studies = (window.PROJECT_STUDIES || []).map(p => ({
    cat: p.cat,
    img: p.hero,
    alt: p.heroAlt,
    title: p.short,
    town: p.town,
    scope: p.result,
    href: "/projects/" + p.slug,
    study: true
  }));
  const all = [...studies, ...(window.PROJECT_CARDS || [])];
  const cats = ["All", ...["Hardscaping", "Landscaping", "Commercial"].filter(c => all.some(p => p.cat === c))];
  const list = all.filter(p => cat === "All" || p.cat === cat);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    active: "Projects",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch"
    }
  }, "Landscaping & Hardscaping Projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "54ch"
    }
  }, "Driveways, patios, walkways, retaining walls, landscaping and commercial grounds completed by Alejandro's in New Cumberland and across Central Pennsylvania. Every photo here is our work.")), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": "Filter projects",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: "var(--space-8)",
      borderBottom: "1px solid var(--border-hairline)",
      paddingBottom: "var(--space-4)"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    role: "tab",
    "aria-selected": cat === c,
    onClick: () => setCat(c),
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      cursor: "pointer",
      minHeight: 44,
      padding: "0 16px",
      background: cat === c ? "var(--green-800)" : "transparent",
      color: cat === c ? "#fff" : "var(--text-primary)",
      border: `1px solid ${cat === c ? "var(--green-800)" : "var(--border-strong)"}`,
      borderRadius: 0
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "var(--space-8) clamp(16px,2vw,28px)" : "var(--space-5) 12px",
      marginTop: "var(--space-8)"
    }
  }, list.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.title,
    href: p.href + (p.study ? "/" : ""),
    onClick: e => {
      e.preventDefault();
      go(p.href);
    },
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PJ + p.img,
    alt: p.alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)",
      marginTop: "var(--space-3)"
    }
  }, p.town), /*#__PURE__*/React.createElement("div", {
    style: {
      font: wide ? "var(--fw-regular) 1.125rem/1.25 var(--font-display)" : "var(--fw-regular) .9375rem/1.25 var(--font-display)",
      color: "var(--text-primary)",
      marginTop: 2
    }
  }, p.title), wide && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)",
      marginTop: 4,
      maxWidth: "40ch"
    }
  }, p.scope), p.study && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      marginTop: "var(--space-2)",
      fontSize: ".75rem"
    }
  }, "View project \u2192")))))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Have a project like one of these?",
    intro: "Send a photo of the yard and tell us what you're thinking. We'll look at the property and talk through what it needs."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.Projects = Projects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Resources.jsx
try { (() => {
/* Resources hub. Lists only content that exists today: the FAQ center, completed projects,
   the service-area pages and the mulch quantity guide. Guides are added here when written. */

const RS_ITEMS = [["FAQ center", "Short answers about services, estimates and working with Alejandro's.", "/resources/faqs", "Browse questions"], ["Completed projects", "Patios, driveways, walkways, walls and landscaping we've finished, with where they are and what was done.", "/projects", "See projects"], ["Service areas", "The towns we work in around New Cumberland and Harrisburg.", "/service-areas", "Find your town"], ["How much mulch?", "A quick table of how much mulch common bed sizes take at two and three inches.", "/landscaping/mulch-beds", "Open the guide"]];
function Resources({
  go
}) {
  const nav = (e, href) => {
    if (go && href && !href.startsWith("#")) {
      e.preventDefault();
      go(href);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    active: "Resources",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true,
    style: {
      paddingTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "Resources"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch",
      marginBottom: "var(--space-6)",
      textWrap: "balance"
    }
  }, "Landscaping and hardscaping resources."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)"
    }
  }, "Answers to common questions, completed projects and the towns we serve.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))",
      gap: "0 clamp(20px,3vw,40px)"
    }
  }, RS_ITEMS.map(([h, d, href, cta], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60,
    style: {
      borderTop: "2px solid var(--gold-500)",
      padding: "var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h4)",
      marginBottom: "var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "34ch",
      marginBottom: "var(--space-5)"
    }
  }, d), /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => nav(e, href),
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: "1px solid var(--gold-500)",
      paddingBottom: 5
    }
  }, cta, " \u2192")))))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Have a question about your property?",
    intro: "Tell us what you're looking at and send a photo. We'll come out, walk it with you and give you a written estimate."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.Resources = Resources;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Resources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RetainingWalls.jsx
try { (() => {
/* Retaining walls. Story: the property → the grade problem → what the wall changes → what makes it work
   → a real transformation → how it fits the property → complexity → action. Composition is specific to walls. */

const RW = {
  ink: "#4A453F",
  line: "#A79E90",
  soil: "#8A6A4A",
  soilD: "#5A4632",
  stone: "#B8B0A2",
  gold: "#F5B324",
  goldT: "#8A5D08",
  cream: "#F2EEE7",
  on: "#F4F1EB",
  on2: "#B9B4A9",
  water: "#6E93A8"
};
const rwLab = {
  fontFamily: "Archivo, sans-serif",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "1.4px",
  textTransform: "uppercase"
};
function useRwWide(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
function Frame({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${dark ? "var(--border-dark)" : "var(--gold-500)"}`,
      borderBottom: `1px solid ${dark ? "var(--border-dark)" : "var(--gold-500)"}`,
      padding: "var(--space-8) 0"
    }
  }, children);
}
const RW_FAQ = [["How do I know if I need a retaining wall?", "Usually the yard tells you: ground that falls away too steeply to use, soil washing down a bank, or a patio or walkway that needs level ground the property doesn't have. A wall is one answer; sometimes regrading alone is enough."], ["Can you replace an existing failing retaining wall?", "Yes. A leaning or bulging wall usually failed because of what's behind or below it, typically drainage or base, so the cause gets looked at before the wall is rebuilt. [VERIFY REMOVAL AND REBUILD PRACTICE.]"], ["Why is drainage important behind a retaining wall?", "Water that collects in the soil behind a wall adds pressure against it. Drainage gives that water a path through the system and out, instead of pushing on the back of the wall."], ["Do retaining walls require permits or engineering?", "Some do. Height, slope above the wall, soil, nearby structures and loads such as driveways can all change what's required. [VERIFY WITH DORIAN how engineering and permits are handled.]"], ["What types of retaining-wall block do you install?", "[VERIFY BLOCK SYSTEMS INSTALLED — manufacturer and product lines.]"], ["Can a retaining wall be incorporated into a patio or walkway?", "Yes. Walls often hold up a raised patio, or create the level ground a patio or walkway sits on, with steps where people move between elevations."]];
function RwLabel({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: dark ? "var(--gold-300)" : "var(--gold-text)"
    }
  }, children);
}
function RwSlot({
  note,
  ratio
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      border: "1px dashed var(--border-strong)",
      background: "var(--stone-100)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-3)",
      textAlign: "center",
      font: "var(--type-caption)",
      fontSize: 11,
      lineHeight: 1.4,
      color: "var(--text-muted)",
      borderRadius: "var(--radius-image)"
    }
  }, note);
}
function RetainingWalls({
  go
}) {
  const wide = useRwWide();
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  const nav = (e, h) => {
    e.preventDefault();
    go(h);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Hardscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(84vh,760px)",
    image: P + "rw/IMG_2724.jpg",
    alt: "Curved block retaining wall with built-in lights holding a raised paver patio above a pool deck at night",
    eyebrow: "Hardscaping \xB7 Retaining walls",
    title: "Retaining walls that hold the grade.",
    lede: "Retaining wall design and installation in Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: tel
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Curved wall, raised patio and wall lighting"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Retaining wall project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "18ch"
    }
  }, "From open lawn to a walled patio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2716.jpg",
    alt: "Tan block wall and paver patio mid-build, with tools and gravel still on site",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      objectPosition: "30% 55%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(RwLabel, null, "During")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2717.jpg",
    alt: "The same tan block wall finished, with caps, pillars and built-in lights around the patio and fire pit",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      objectPosition: "40% 40%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(RwLabel, null, "Finished"))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "var(--space-6) 0 0",
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(24px,4vw,56px)"
    }
  }, [["Problem", "[VERIFY — what the yard was doing before: slope, grade, open edge.]"], ["Solution", "An L-shaped tan block wall with pillars, set around a new paver patio and fire pit beside the deck."], ["Result", "A defined patio with caps and lights built into the wall."]].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gridTemplateColumns: "84px 1fr",
      gap: "var(--space-3)",
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(RwLabel, null, h)), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, d))))))), /*#__PURE__*/React.createElement("style", null, ".rw-swipe::-webkit-scrollbar{display:none}"), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Why retaining walls"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "16ch"
    }
  }, "Make difficult ground usable."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "56ch"
    }
  }, "Retaining walls can hold back a slope, create level space, support a patio or walkway, or replace an existing wall that's beginning to fail.")), /*#__PURE__*/React.createElement("div", {
    className: "rw-swipe",
    style: {
      display: wide ? "grid" : "flex",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : undefined,
      gap: "var(--gap-grid)",
      overflowX: wide ? "visible" : "auto",
      scrollSnapType: "x mandatory",
      margin: wide ? "var(--space-8) 0 0" : "var(--space-6) calc(var(--gutter) * -1) 0",
      padding: wide ? 0 : "0 var(--gutter)",
      scrollbarWidth: "none"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      flex: wide ? "auto" : "0 0 78vw",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2721.jpg",
    alt: "Block wall with pillar caps holding the slope in front of a house",
    loading: "lazy",
    style: {
      width: "100%",
      height: wide ? "auto" : 300,
      aspectRatio: wide ? "3/2" : "auto",
      objectFit: "cover",
      objectPosition: "40% 60%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, "Holding a slope")), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      flex: wide ? "auto" : "0 0 78vw",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2714.jpg",
    alt: "Capped block wall along the edge of a driveway",
    loading: "lazy",
    style: {
      width: "100%",
      height: wide ? "auto" : 300,
      aspectRatio: wide ? "3/2" : "auto",
      objectFit: "cover",
      objectPosition: "40% 62%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, "Along a driveway")), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      flex: wide ? "auto" : "0 0 78vw",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2718.jpg",
    alt: "Block wall raising a planting bed along an alley",
    loading: "lazy",
    style: {
      width: "100%",
      height: wide ? "auto" : 300,
      aspectRatio: wide ? "3/2" : "auto",
      objectFit: "cover",
      objectPosition: "40% 65%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, "Creating a raised bed"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.3fr)" : "minmax(0,1fr)",
      gap: "var(--space-6) clamp(28px,5vw,80px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "How they're built"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "16ch"
    }
  }, "Built for what's behind the wall."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "44ch"
    }
  }, "A retaining wall isn't just the block you see. Base preparation and drainage behind the wall are critical parts of the installation.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2715.jpg",
    alt: "Curved capped wall with clean stone backfill behind it, before final grading",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "3/2",
      objectFit: "cover",
      objectPosition: "50% 72%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-2)"
    }
  }, "Clean stone behind the wall, before final grading. [VERIFY BASE AND DRAINAGE SPEC.]"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Materials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Designed to fit the property."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "56ch"
    }
  }, "Block, cap, color and texture can be selected to work with the house and surrounding hardscape.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.6fr) minmax(0,1fr)" : "repeat(2,minmax(0,1fr))",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-8)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      gridColumn: wide ? "auto" : "span 2"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2724.jpg",
    alt: "Curved block wall with built-in lights holding a raised patio above a pool deck at night",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "16/9",
      objectFit: "cover",
      objectPosition: "40% 45%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: wide ? "grid" : "contents",
      gridTemplateRows: "repeat(2,minmax(0,1fr))",
      gap: "var(--gap-grid)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2723.jpg",
    alt: "Grey block seat wall with a stone-look cap wrapping a square fire pit",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "3/2",
      objectFit: "cover",
      objectPosition: "45% 55%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2719.jpg",
    alt: "Grey block wall along a paver patio with steps set into the wall line",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "3/2",
      objectFit: "cover",
      objectPosition: "35% 45%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-6)",
      maxWidth: "70ch"
    }
  }, "Taller or more complex walls may require additional engineering or permitting depending on site conditions and local requirements.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "More hardscaping"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Building more than the wall?")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-6) 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(24px,4vw,56px)"
    }
  }, [["Paver patios", "/hardscaping/paver-patios"], ["Paver driveways", "/hardscaping/paver-driveways"], ["Walkways & steps", "/hardscaping/walkways"], ["Fire features & seat walls", "/hardscaping/fire-features"], ["Grading & drainage", "/grading-drainage"]].map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      borderTop: "1px solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    onClick: e => {
      e.preventDefault();
      go(h);
    },
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 52,
      font: "var(--fw-medium) 1rem/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-text)"
    }
  }, "\u2192"))))))), /*#__PURE__*/React.createElement("style", null, ".rw-sum::-webkit-details-marker{display:none}"), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Retaining wall questions")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, RW_FAQ.map(([q, a]) => /*#__PURE__*/React.createElement("details", {
    key: q,
    style: {
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("summary", {
    className: "rw-sum",
    style: {
      cursor: "pointer",
      listStyle: "none",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-5) 0",
      font: "var(--fw-regular) 1.1875rem/1.3 var(--font-display)"
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--gold-text)",
      font: "var(--fw-regular) 1.25rem/1 var(--font-sans)"
    }
  }, "+")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) .9375rem/1.55 var(--font-sans)",
      color: "var(--text-secondary)",
      padding: "0 0 var(--space-5)",
      maxWidth: "62ch"
    }
  }, a)))))), /*#__PURE__*/React.createElement(RelatedProjects, {
    go: go,
    service: "retaining-walls"
  }), /*#__PURE__*/React.createElement("section", {
    id: "estimate",
    style: {
      position: "relative",
      minHeight: "min(78vh,640px)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      background: "var(--green-950)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2721.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "45% 55%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      width: "100%",
      padding: "clamp(64px,8vw,120px) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "Planning a retaining wall?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      color: "#fff",
      maxWidth: "14ch"
    }
  }, "Let's look at the grade."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "rgba(255,255,255,.9)",
      maxWidth: "46ch",
      margin: "var(--space-6) 0 var(--space-8)"
    }
  }, "Show us what you're trying to change. We'll look at the property, elevation and surrounding conditions before recommending the next step."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.3fr)" : "minmax(0,1fr)",
      gap: "var(--space-8) clamp(28px,5vw,80px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    href: tel,
    style: {
      justifySelf: "start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE), /*#__PURE__*/React.createElement(EstimateForm, {
    tone: "dark"
  })))), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.RetainingWalls = RetainingWalls;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RetainingWalls.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceArea.jsx
try { (() => {
/* Service area page — modelled on Costa Custom Pools. Every town block carries operational
   fact, not the town name repeated. Towns without real notes belong on a county page instead. */

const TOWNS = [["Camp Hill", "Cumberland County", "3 mi", "stone-edge-bed.jpg", "[VERIFY CAMP HILL CONDITIONS WITH DORIAN — soil, typical grade, borough permit process, what actually goes wrong on these lots.] Two to four short declarative sentences of operational fact. Nothing plausible-sounding goes here until it is confirmed."], ["Mechanicsburg", "Cumberland County", "7 mi", "patio-pool-pavers.jpg", "[VERIFY MECHANICSBURG CONDITIONS — which developments run architectural review, township permit thresholds, ground conditions encountered.]"], ["New Cumberland", "Cumberland County", "0 mi", "patio-pergola-mulch.jpg", "[VERIFY NEW CUMBERLAND CONDITIONS — home ground, so this should be the most specific block on the page. Access constraints, borough permitting, ground near the river.]"], ["Harrisburg", "Dauphin County", "4 mi", "residential-lawn-beds.jpg", "[VERIFY HARRISBURG CONDITIONS — city permitting, street staging, access on rowhome lots, which neighbourhoods work is actually done in.]"], ["Hershey", "Dauphin County", "15 mi", "commercial-property-beds.jpg", "[VERIFY HERSHEY / DERRY TOWNSHIP CONDITIONS — approval process, HOA review, ground conditions.]"], ["Lemoyne", "Cumberland County", "2 mi", "firepit-seatwall-night.jpg", "[VERIFY LEMOYNE CONDITIONS — slope off the ridge, borough wall permit threshold, typical project type here.]"], ["Enola", "Cumberland County", "6 mi", "patio-pool-pavers.jpg", "[VERIFY ENOLA / EAST PENNSBORO CONDITIONS — lot character, mature tree roots, permitting.]"], ["Mechanicsburg — commercial", "Cumberland County", "7 mi", "commercial-mowing-stripes.jpg", "[VERIFY COMMERCIAL WORK IN THIS CORRIDOR — confirm commercial is real revenue before this block publishes at all.]"]];
const RINGS = [["0–8 miles", ["New Cumberland", "Lemoyne", "Wormleysburg", "Camp Hill", "Highspire", "Steelton", "Harrisburg", "Shiremanstown", "Lewisberry", "Goldsboro", "Etters", "Enola", "Summerdale", "Marysville", "Mechanicsburg"]], ["8–15 miles", ["Paxtang", "Penbrook", "Newberrytown", "Middletown", "Colonial Park", "Lisburn", "Dillsburg", "Grantham", "Linglestown", "Dauphin", "Hummelstown", "Boiling Springs", "Wellsville", "New Kingstown", "Shermans Dale", "Hershey"]], ["15–20 miles", ["Rossville", "Emigsville", "Franklintown", "Manchester", "Mount Wolf", "New Bloomfield", "Carlisle", "Grantville", "Dover", "Bainbridge", "Elizabethtown", "Mount Holly Springs", "Campbelltown", "York", "Palmyra", "Maytown"]]];
const townSlug = n => n.toLowerCase().replace(/ /g, "-") + "-pa";
function ServiceArea({
  go
}) {
  const toTown = n => e => {
    e.preventDefault();
    go("/service-areas/" + townSlug(n));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    active: "Areas",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "Where we work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "17ch",
      marginBottom: "var(--space-8)",
      textWrap: "balance"
    }
  }, "Landscaping & Hardscaping Service Areas"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)"
    }
  }, "The radius crosses six counties and the ground changes across all of them. [VERIFY REGIONAL SOIL AND GRADE CHARACTERISTICS with Dorian before this line publishes.]")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "hero-firepit-wall-night.jpg",
    alt: "Retaining wall and firepit lit at night",
    style: {
      width: "100%",
      aspectRatio: "21/9",
      objectFit: "cover",
      borderRadius: "var(--radius-image)"
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    style: {
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(StatRow, {
    items: [{
      value: "6",
      label: "Counties inside the radius — Cumberland, Dauphin, York, Perry, Lancaster, Lebanon"
    }, {
      value: "20 mi",
      label: "Working radius, measured from New Cumberland"
    }, {
      value: String((window.TOWNS_DATA || []).length || 47),
      label: "Towns, each with a page of its own"
    }]
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "clamp(28px,3.5vw,56px)"
    }
  }, TOWNS.filter(([town]) => !town.includes("—")).map(([town, county, dist, img, notes], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: town,
    delay: i % 3 * 70
  }, /*#__PURE__*/React.createElement(TownEntry, {
    town: town,
    county: county,
    distance: dist,
    image: P + img,
    alt: `${town} project`,
    notes: notes,
    href: "/service-areas/" + townSlug(town) + "/",
    onClick: toTown(town)
  })))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-12)",
      maxWidth: "68ch"
    }
  }, "Town notes above are [VERIFY] markers, not content. Each needs what Alejandro's actually encounters in that town \u2014 permit office, soil, slope, HOA review, access. That specificity is what a competitor cannot copy, and it is the only thing that earns a town its own page.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The rest of the radius",
    title: "Towns we reach, grouped by drive.",
    intro: "Covered from the same shop on the same schedule. Tap a town to see the services and recent work for it."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)"
    }
  }, RINGS.map(([label, towns], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: label,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(120px,180px) 1fr",
      gap: "clamp(20px,4vw,64px)",
      padding: "var(--space-8) 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      lineHeight: 1.9,
      display: "flex",
      flexWrap: "wrap",
      gap: "2px 14px"
    }
  }, towns.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "/service-areas/" + townSlug(n) + "/",
    onClick: toTown(n),
    style: {
      color: "var(--green-800)"
    }
  }, n))))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-5)"
    }
  }, "Towns with completed projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3) var(--space-8)",
      marginTop: "var(--space-4)"
    }
  }, (window.TOWNS_DATA || []).map(t => /*#__PURE__*/React.createElement("a", {
    key: t.slug,
    href: "/service-areas/" + t.slug + "/",
    onClick: e => {
      e.preventDefault();
      go("/service-areas/" + t.slug);
    },
    style: {
      font: "var(--type-h4)",
      color: "var(--green-800)",
      textDecoration: "none"
    }
  }, t.town, ", PA \u2192"))))), /*#__PURE__*/React.createElement(RelatedProjects, {
    go: go,
    title: "Completed projects in the area"
  }), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Not sure if you are in range?",
    intro: "Tell us the town. If we do not cover it we will say so, and usually point you at somebody who does."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.ServiceArea = ServiceArea;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceArea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicePage.jsx
try { (() => {
/* Generic service page. Section order follows the Paver Patios pattern established with the owner:
   hero → proof → conversion moment → construction/detail → process → FAQ → review slot → close.
   Every page is driven by a record in service-data-*.js. Unverified strings stay bracketed. */

function PhotoOrSlot({
  image,
  alt,
  ratio = "4/3",
  note
}) {
  if (image) return /*#__PURE__*/React.createElement("img", {
    src: P + image,
    alt: alt,
    style: {
      width: "100%",
      aspectRatio: ratio,
      objectFit: "cover",
      borderRadius: "var(--radius-image)"
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420,
      aspectRatio: ratio,
      background: "var(--surface-sunken)",
      border: "1px dashed var(--border-strong)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      textAlign: "center",
      maxWidth: "28ch"
    }
  }, note || "[ADD PROJECT PHOTOGRAPHY]"));
}
function ServicePage({
  go,
  data
}) {
  const autoRatio = useTileRatio();
  const d = data;
  const tileRatio = d.tileRatio || autoRatio;
  const urgent = d.ctaStyle === "phone";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: !!d.hero,
    active: d.navGroup,
    onNavigate: go
  }), d.hero ? /*#__PURE__*/React.createElement(Hero, {
    height: "min(74vh,660px)",
    image: P + d.hero,
    alt: d.heroAlt,
    eyebrow: d.eyebrow,
    title: d.title,
    lede: d.lede,
    primary: urgent ? /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE) : /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: urgent ? /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: "#estimate"
    }, "Request a quote") : /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: d.heroCredit
  }) : /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true,
    style: {
      paddingTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-6)"
    }
  }, d.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "17ch",
      marginBottom: "var(--space-8)",
      textWrap: "balance"
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)"
    }
  }, d.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      marginTop: "var(--space-10)"
    }
  }, urgent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: `tel:${PHONE.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "#estimate"
  }, "Request a quote")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#estimate"
  }, "Request an estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: `tel:${PHONE.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(PhotoOrSlot, {
    image: null,
    ratio: "21/9",
    note: d.photoNote || "[ADD PROJECT PHOTOGRAPHY FOR THIS SERVICE — no readable images exist in the current set.]"
  })))), d.notConfirmed && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--status-emergency)",
      color: "#fff",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      maxWidth: "80ch"
    }
  }, d.notConfirmed))), d.projects && /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: d.projectsEyebrow || "Recent work",
    title: d.projects.some(p => p.image) ? d.projectsTitle || "See what changes the yard." : "No photography yet.",
    intro: d.projectsIntro
  })), d.projects.some(p => p.image) ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-12)",
      maxWidth: d.projects.length === 1 ? 640 : "none"
    }
  }, d.projects.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 80
  }, p.image ? /*#__PURE__*/React.createElement(ProjectTile, {
    ratio: tileRatio,
    image: P + p.image,
    alt: p.alt,
    town: p.town,
    service: p.service,
    detail: p.detail
  }) : /*#__PURE__*/React.createElement(PhotoOrSlot, {
    image: null,
    ratio: tileRatio,
    note: p.note
  })))) : /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      maxWidth: "58ch",
      borderTop: "2px solid var(--gold-500)",
      paddingTop: "var(--space-6)",
      textWrap: "pretty"
    }
  }, d.projects.find(p => p.note)?.note || "[ADD PROJECT PHOTOGRAPHY]")))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true,
    style: d.convertImage ? {
      position: "relative",
      overflow: "hidden",
      padding: "clamp(72px,9vw,128px) 0"
    } : undefined
  }, d.convertImage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: P + d.convertImage,
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: d.convertImagePos || "50% 50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(10,36,22,.88) 0%,rgba(10,36,22,.68) 50%,rgba(10,36,22,.4) 100%)"
    }
  })), /*#__PURE__*/React.createElement(Container, {
    style: d.convertImage ? {
      position: "relative"
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "clamp(28px,5vw,80px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "16ch",
      textWrap: "pretty"
    }
  }, d.convertTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "46ch",
      marginTop: "var(--space-6)",
      textWrap: "pretty"
    }
  }, d.convertBody)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, urgent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: `tel:${PHONE.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    href: "#estimate"
  }, d.convertCta || "Request a quote")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: "#estimate"
  }, d.convertCta || "Request an estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    href: `tel:${PHONE.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE)))))), d.detail && /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: d.detailEyebrow,
    title: d.detailTitle,
    intro: d.detailIntro
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 0,
      marginTop: "var(--space-12)"
    }
  }, d.detail.map(([h, t], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60,
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-8) var(--space-8) var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--fw-semibold) 1.0625rem/1.3 var(--font-sans)",
      marginBottom: "var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "34ch"
    }
  }, t)))), d.detailNote && /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-10)",
      maxWidth: "62ch"
    }
  }, d.detailNote)))), d.pairWith && /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
      gap: "var(--space-8) clamp(28px,5vw,88px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: d.pairWith.eyebrow,
    title: d.pairWith.title,
    intro: d.pairWith.intro
  })), /*#__PURE__*/React.createElement("div", null, d.pairWith.links.map(([h, t, href], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => {
      e.preventDefault();
      go(href);
    },
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-5)",
      borderTop: "1px solid var(--border-strong)",
      padding: "var(--space-5) 0",
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--fw-regular) 1.25rem/1.3 var(--font-display)",
      color: "var(--text-primary)",
      marginBottom: "var(--space-1)"
    }
  }, h), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-button)",
      color: "var(--green-800)",
      flex: "0 0 auto"
    }
  }, "\u2192")))))))), d.steps && d.stepsStyle !== "rows" && /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it goes",
    title: d.stepsTitle || "What hiring us looks like."
  })), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: "var(--space-12) 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "var(--space-8)"
    }
  }, d.steps.map(([h, t], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      margin: "var(--space-4) 0 var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "32ch"
    }
  }, t))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: `Questions about ${d.shortName}`,
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: d.faq
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", {
    href: "/resources/faqs",
    onClick: e => {
      if (go) {
        e.preventDefault();
        go("/resources/faqs");
      }
    },
    style: {
      display: "inline-block",
      marginTop: "var(--space-10)",
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      color: "var(--green-800)",
      textDecoration: "none",
      borderBottom: "1px solid var(--border-strong)",
      paddingBottom: 5
    }
  }, "See all questions \u2192")))), d.review && /*#__PURE__*/React.createElement(Section, {
    tone: "darkAlt",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-text)"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ReviewQuote, {
    size: "lg",
    tone: "dark",
    quote: d.review.quote,
    name: d.review.name,
    town: d.review.town,
    service: d.review.service
  })))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: d.closeTitle,
    intro: d.closeBody
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.ServicePage = ServicePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.AlejandroSLandscapingDesignSystem_a675b9 || {};
const {
  Button,
  Eyebrow,
  SectionHead,
  StatRow,
  Icon,
  ProjectTile,
  ServiceRow,
  TownEntry,
  ReviewQuote,
  BeforeAfter,
  QuestionList,
  SiteHeader,
  SiteFooter,
  MobileCallBar,
  Field,
  EstimateForm
} = NS;
const P = "../../assets/photos/";
const LOGO = "../../assets/logo.png";
const PHONE = "(717) 736-6538";
function Container({
  children,
  width = "var(--container-max)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: "0 auto",
      padding: "0 var(--gutter)",
      ...style
    }
  }, children);
}
function Section({
  children,
  tone = "light",
  tight = false,
  style,
  ...rest
}) {
  const bg = {
    light: "var(--surface-page)",
    raised: "var(--surface-raised)",
    sunken: "var(--surface-sunken)",
    dark: "var(--surface-dark)",
    darkAlt: "var(--surface-dark-alt)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: bg,
      padding: `${tight ? "var(--section-y-tight)" : "var(--section-y)"} 0`,
      ...style
    }
  }, rest), children);
}

/* Scroll reveal — fade + 18px rise, once. Honours prefers-reduced-motion via tokens. */
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: .12
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? "none" : "translateY(var(--reveal-distance))",
      transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms, transform var(--dur-reveal) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}

/* Full-bleed photographic hero. Text left, project credit bottom-right. */
function Hero({
  image,
  alt,
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  credit,
  height = "min(92vh,860px)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: height,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      background: "var(--green-950)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(10,36,22,.55) 0%,rgba(10,36,22,0) 32%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      width: "100%",
      paddingBottom: "clamp(56px,7vw,104px)",
      paddingTop: "180px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-8)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      letterSpacing: "var(--ls-display)",
      color: "#fff",
      maxWidth: "15ch",
      textWrap: "balance",
      marginBottom: "var(--space-8)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "rgba(255,255,255,.9)",
      maxWidth: "48ch",
      marginBottom: "var(--space-10)",
      textWrap: "pretty"
    }
  }, lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, primary, secondary)), credit && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "var(--gutter)",
      bottom: "var(--space-6)",
      font: "var(--type-caption)",
      color: "rgba(255,255,255,.6)",
      textAlign: "right",
      maxWidth: "30ch"
    }
  }, credit));
}

/* Dark CTA band with the estimate form. Used once per page, at the end. */
function EstimateBand({
  title = "Tell us what you are looking at.",
  intro = "Photos of the yard help more than a paragraph. Send what you have and we will tell you what is possible on that ground."
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "clamp(32px,5vw,96px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "dark",
    eyebrow: "Free estimate",
    title: title,
    intro: intro
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("a", {
    href: `tel:${PHONE.replace(/\D/g, "")}`,
    style: {
      font: "var(--fw-light) 1.75rem/1 var(--font-display)",
      color: "#fff",
      textDecoration: "none"
    }
  }, PHONE))), /*#__PURE__*/React.createElement(EstimateForm, {
    tone: "dark"
  }))));
}

/* Portrait on desktop, 4:3 on mobile so a stacked gallery does not become three screen-height cards. */
function useTileRatio(desktop = "3/4", mobile = "4/3") {
  const q = "(min-width:700px)";
  const [wide, setWide] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const on = e => setWide(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return wide ? desktop : mobile;
}

/* "Trusted by" logo cards — white rounded tiles on light grey; hover lifts with a gold
   "Click to view our work" band. Remote logos fall back to the name in type if they fail. */
const TRUSTED = [["Progressive Dental Concepts", "https://www.progressivedentalconcepts.com/wp-content/uploads/logo-300x148.jpg", 56], ["MeadowView Dentistry", "../../assets/logos/meadowview-dentistry.png", 96], ["Panera Bread", "https://logos-world.net/wp-content/uploads/2022/01/Panera-Bread-Logo.png", 86], ["Sauvé Family Dentistry", "../../assets/logos/sauve.jpg", 64], ["Verizon", "../../assets/logos/verizon.png", 40], ["Bridge Street Dental Center", "../../assets/logos/bridge-street-dental.png", 72], ["PMI Property Management, Inc.", "../../assets/logos/pmi-property-management.png", 76], ["East Main Street Dental", "../../assets/logos/east-main-street-dental.png", 84], ["Advanced Dental Partners", "../../assets/logos/advanced-dental-partners.png", 64], ["Linglestown Family Dental", "../../assets/logos/linglestown-family-dental.png", 84]];
function TrustedLogo({
  name,
  src,
  h
}) {
  const [ok, setOk] = React.useState(!!src);
  if (!ok) return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 1rem/1.25 var(--font-sans)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--stone-700)",
      textAlign: "center",
      maxWidth: "14ch"
    }
  }, name);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    onError: () => setOk(false),
    referrerPolicy: "no-referrer",
    style: {
      height: (Math.min(1.15, Math.max(0.6, h / 72)) * 100).toFixed(0) + "%",
      maxHeight: "100%",
      maxWidth: "80%",
      width: "auto",
      display: "block",
      objectFit: "contain"
    }
  });
}
function TrustedCard({
  name,
  src,
  h,
  onView
}) {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onView,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    onFocus: () => setHov(true),
    onBlur: () => setHov(false),
    "aria-label": name + " — view our work",
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: 0,
      border: `1px solid ${hov ? "#F7CB6B" : "transparent"}`,
      borderRadius: 16,
      background: "#fff",
      overflow: "hidden",
      cursor: "pointer",
      aspectRatio: "10/4.25",
      boxShadow: hov ? "0 18px 40px rgba(28,27,25,.12)" : "0 4px 18px rgba(28,27,25,.05)",
      transform: hov ? "translateY(-8px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "16%",
      height: "68%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(TrustedLogo, {
    name: name,
    src: src,
    h: h
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "#FFD166",
      color: "#1C1B19",
      font: "var(--fw-semibold) clamp(.6875rem,1.1vw,.9375rem)/1 var(--font-sans)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      padding: "clamp(11px,1.4vw,16px) 8px",
      textAlign: "center",
      transform: hov ? "translateY(0)" : "translateY(100%)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, "Click to view our work"));
}
function TrustedBy({
  onView
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#F4F5F6",
      padding: "clamp(56px,8vw,112px) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-medium) clamp(1.125rem,2vw,1.625rem)/1 var(--font-sans)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--stone-600)",
      textAlign: "center",
      marginBottom: "clamp(32px,5vw,64px)"
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))",
      gap: "clamp(11px,2.3vw,38px)",
      maxWidth: 1480,
      margin: "0 auto"
    }
  }, TRUSTED.map(([n, src, h]) => /*#__PURE__*/React.createElement(TrustedCard, {
    key: n,
    name: n,
    src: src,
    h: h,
    onView: onView
  })))));
}
Object.assign(window, {
  TrustedBy,
  useTileRatio,
  Container,
  Section,
  Reveal,
  Hero,
  EstimateBand,
  P,
  LOGO,
  PHONE,
  NS,
  Button,
  Eyebrow,
  SectionHead,
  StatRow,
  Icon,
  ProjectTile,
  ServiceRow,
  TownEntry,
  ReviewQuote,
  BeforeAfter,
  QuestionList,
  SiteHeader,
  SiteFooter,
  MobileCallBar,
  Field,
  EstimateForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShrubTrimming.jsx
try { (() => {
/* Shrub & hedge trimming. Recurring, plant-led work. Distinct from bed work and installation:
   three kinds of trimming → when YOUR plant gets cut (interactive calendar, signature) →
   cut for the light (hedge profile) → overgrown: shape, renovate or replace → homes & commercial → questions. */

const ST_INK = "#4A453F",
  ST_LEAF = "#3E6B3A",
  ST_LEAF2 = "#6E9A5C",
  ST_BARE = "#8A7A62",
  ST_GOLD = "#F5B324",
  ST_GOLDTEXT = "#8A5D08";
const stLabel = {
  fontFamily: "Archivo, sans-serif",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "1.4px",
  textTransform: "uppercase"
};
function useWideST(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}

/* Signature drawing: why a hedge is cut wider at the base. General horticultural principle, not a company spec. */
function HedgeProfiles() {
  const L = {
    ...stLabel,
    fontSize: 15,
    letterSpacing: "1.6px"
  };
  const sun = x => [0, 1, 2].map(i => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M${x + i * 14} 6 L${x + 10 + i * 14} 26`,
    stroke: ST_GOLD,
    strokeWidth: "1.6"
  }));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 440 280",
    role: "img",
    "aria-label": "Two hedge profiles: one cut wider at the base so light reaches the lower branches, one cut wider at the top so the base is shaded and goes bare",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 196 L440 196",
    stroke: ST_INK,
    strokeWidth: "1.5"
  }), sun(70), sun(290), /*#__PURE__*/React.createElement("path", {
    d: "M48 196 L72 54 Q110 40 148 54 L172 196 Z",
    fill: ST_LEAF
  }), /*#__PURE__*/React.createElement("path", {
    d: "M48 196 L72 54 M172 196 L148 54",
    stroke: ST_LEAF2,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "222",
    textAnchor: "middle",
    style: {
      ...L,
      fill: ST_INK
    }
  }, "Wider at base"), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "246",
    textAnchor: "middle",
    style: {
      ...L,
      fill: ST_GOLDTEXT
    }
  }, "Light reaches"), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "266",
    textAnchor: "middle",
    style: {
      ...L,
      fill: ST_GOLDTEXT
    }
  }, "lower branches"), /*#__PURE__*/React.createElement("path", {
    d: "M290 196 L280 120 L258 60 Q330 40 402 60 L380 120 L370 196 Z",
    fill: ST_BARE,
    opacity: ".5"
  }), [300, 316, 332, 348].map(x => /*#__PURE__*/React.createElement("path", {
    key: x,
    d: `M${x} 196 L${x + 2} 128`,
    stroke: ST_BARE,
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M258 60 Q330 40 402 60 L380 120 L280 120 Z",
    fill: ST_LEAF
  }), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "222",
    textAnchor: "middle",
    style: {
      ...L,
      fill: ST_INK
    }
  }, "Wider at top"), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "246",
    textAnchor: "middle",
    style: {
      ...L,
      fill: ST_INK
    }
  }, "Base shaded,"), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "266",
    textAnchor: "middle",
    style: {
      ...L,
      fill: ST_INK
    }
  }, "goes bare"));
}
const ST_MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
/* General Pennsylvania timing by plant type. Months are 0-indexed; "light" = touch-up only. */
const ST_PLANTS = [["Boxwood", [4, 5], [7], "Shear after the spring flush, with a light touch-up in late summer."], ["Yew", [5], [7], "Shape in early summer; a second light cut in August keeps it tight."], ["Privet", [4, 5, 6, 7], [], "Fast grower. Sheared two or three times through the summer."], ["Arborvitae", [4, 5], [], "Light shear in late spring. Don't cut back into bare brown wood; it won't regrow."], ["Holly", [1, 2], [6], "Main shaping in late winter, with a light tidy in early summer."], ["Azalea", [5], [], "Right after it flowers. Later than early July and you cut off next year's buds."], ["Forsythia & lilac", [4, 5], [], "Straight after bloom. Both flower on last year's growth."], ["Panicle hydrangea", [1, 2], [], "Late winter, before growth starts. It flowers on new wood."]];
const ST_KINDS = [["Maintenance shearing", "Hedges and foundation shrubs brought back to their line, on a schedule."], ["Shaping & detail", "Hand-pruning flowering shrubs and specimens so they keep a natural form."], ["Overgrown reduction", "Shrubs that have taken over a window or walk, cut back in stages."]];
const ST_OPTIONS = [["Shape it back", "If there's still green growth where the cut lands, most overgrown shrubs come back to a clean outline in one visit."], ["Renovate it", "Many can be cut back hard over two or three seasons, taking some old growth each year. It depends on the plant."], ["Replace it", "Some won't recover from a hard cut, or were planted in the wrong spot. Replanting is then the cheaper long-term answer."]];
function TrimCalendar({
  wide
}) {
  const [pick, setPick] = React.useState(0);
  const [name, main, light, note] = ST_PLANTS[pick];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": "Choose a shrub",
    style: {
      display: "flex",
      flexWrap: wide ? "wrap" : "nowrap",
      overflowX: wide ? "visible" : "auto",
      gap: 8,
      paddingBottom: 4
    }
  }, ST_PLANTS.map(([n], i) => /*#__PURE__*/React.createElement("button", {
    key: n,
    role: "tab",
    "aria-selected": pick === i,
    onClick: () => setPick(i),
    style: {
      flex: "0 0 auto",
      minHeight: 40,
      padding: "0 14px",
      border: `1px solid ${pick === i ? "var(--gold-500)" : "var(--border-dark)"}`,
      background: pick === i ? "var(--gold-500)" : "transparent",
      color: pick === i ? "var(--green-950)" : "var(--text-on-dark)",
      font: "var(--type-small)",
      cursor: "pointer"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12,minmax(0,1fr))",
      gap: 3,
      marginTop: "var(--space-6)"
    },
    "aria-label": `Trimming months for ${name}`
  }, ST_MONTHS.map((m, i) => {
    const on = main.includes(i),
      lt = light.includes(i),
      avoid = i >= 8 && i <= 10;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: wide ? 44 : 34,
        background: on ? "var(--gold-500)" : lt ? "rgba(245,179,36,.38)" : "rgba(244,241,235,.08)",
        borderBottom: avoid ? "2px solid #A93916" : "2px solid transparent"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-caption)",
        color: on ? "var(--gold-300)" : "var(--text-on-dark-secondary)",
        marginTop: 6
      }
    }, m));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2) var(--space-5)",
      marginTop: "var(--space-4)",
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 10,
      background: "var(--gold-500)",
      marginRight: 6
    }
  }), "Main cut"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 10,
      background: "rgba(245,179,36,.38)",
      marginRight: 6
    }
  }), "Light touch-up"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 2,
      background: "#A93916",
      marginRight: 6,
      verticalAlign: "middle"
    }
  }), "Avoid: new growth won't harden before frost")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-on-dark)",
      marginTop: "var(--space-6)",
      maxWidth: "52ch"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, name, "."), " ", note));
}
function ShrubTrimming({
  go
}) {
  const wide = useWideST();
  const data = (window.SERVICES_LANDSCAPE || {})["shrub-hedge-trimming"] || {};
  const faq = (data.faq || []).filter((q, i) => [0, 3, 4, 5].includes(i)).map(q => ({
    ...q,
    answer: String(q.answer).replace(/\s*\[VERIFY[^\]]*\]/g, "")
  }));
  const link = href => e => {
    e.preventDefault();
    go(href);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Landscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(76vh,680px)",
    image: P + "commercial/east-main.jpg",
    alt: "Sheared boxwood hedge along the front of a brick office building",
    eyebrow: "Landscaping \xB7 Shrub & hedge trimming",
    title: "Shrub & hedge trimming in Harrisburg, PA.",
    lede: "Shrub and hedge trimming for homes and commercial properties across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Sheared foundation shrubs \xB7 Colonial Park, PA"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "What we trim"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "18ch"
    }
  }, "Not every shrub gets the same cut.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: wide ? "clamp(20px,3vw,40px)" : "var(--space-5)",
      marginTop: "var(--space-8)"
    }
  }, [["commercial/east-main.jpg", "Sheared boxwood hedge along the front of a brick dental office in Harrisburg", "Hedges & foundation shrubs", "Sheared back to a clean, straight line on a schedule.", "50% 60%"], ["stone-edge-bed.jpg", "Rounded shrubs shaped inside a stone-edged bed beside a house", "Shaping & detail", "Rounded and specimen shrubs hand-shaped so each keeps its form.", "50% 55%"], ["landscape-azaleas-flagstone-edge.jpg", "Azaleas in bloom behind a flagstone bed edge", "Flowering shrubs", "Azaleas, hydrangeas and other bloomers cut at the right time so they flower again.", "50% 50%"]].map(([f, alt, h, d, pos], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: wide ? "block" : "grid",
      gridTemplateColumns: "128px 1fr",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + f,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: wide ? "4/3" : "1/1",
      objectFit: "cover",
      objectPosition: pos,
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: wide ? "var(--space-4)" : 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: 4,
      maxWidth: "34ch"
    }
  }, d)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.5fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Before & after"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "14ch"
    }
  }, "Same boxwoods, back in shape."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "40ch"
    }
  }, "A row of boxwoods sheared back to rounded forms, with the bed re-edged and fresh black mulch underneath. Drag to compare.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(BeforeAfter, {
    before: P + "shrub-before.jpg",
    after: P + "shrub-after.jpg",
    ratio: "4/3",
    beforeAlt: "Overgrown boxwood row with loose new growth above a gravel bed",
    afterAlt: "The same boxwood row sheared into rounded forms over fresh black mulch"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Recent trimming"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "18ch"
    }
  }, "Homes and businesses we keep trimmed.")), /*#__PURE__*/React.createElement("a", {
    href: "/commercial/landscaping",
    onClick: link("/commercial/landscaping"),
    style: {
      font: "var(--type-button)",
      letterSpacing: "var(--ls-button)",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, "Commercial landscaping \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "var(--gap-grid)" : 12,
      marginTop: "var(--space-8)"
    }
  }, [["landscape-island-bed-fieldstone.jpg", "Island bed of layered shrubs and grasses edged in fieldstone beside a driveway", "Island bed shrubs", "Camp Hill, PA", true, "50% 55%"], ["commercial/sauve.jpg", "Shrub bed and flowering plants around the Sauvé Family Dentistry sign", "Sauvé Family Dentistry", "Camp Hill, PA", false, "50% 60%"], ["commercial/family-physician.jpg", "Rounded shrub bed at Family Physician Associates", "Family Physician Associates", "New Cumberland, PA", false, "50% 62%"]].map(([f, alt, h, town, big, pos], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f,
    delay: i % 2 * 60,
    style: {
      gridColumn: big ? "span 2" : "auto",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + f,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      ...(wide ? {
        height: "clamp(200px,24vw,300px)"
      } : {
        aspectRatio: big ? "16/9" : "1/1"
      }),
      objectFit: "cover",
      objectPosition: pos,
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-text)"
    }
  }, town), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) .9375rem/1.3 var(--font-display)",
      marginTop: 2
    }
  }, h)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Overgrown shrubs",
    title: "Shrubs over the windows?",
    intro: "A shrub sheared into a ball for years is green outside and bare inside. What happens next depends on the plant."
  })), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: "var(--space-8) 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(24px,4vw,56px)"
    }
  }, ST_OPTIONS.map(([h, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 70,
    style: {
      borderTop: "1px solid var(--border-strong)",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "baseline",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--gold-text)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, h)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "38ch"
    }
  }, d))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)"
    }
  }, "Time to replant? ", /*#__PURE__*/React.createElement("a", {
    href: "/landscaping/installation",
    onClick: link("/landscaping/installation")
  }, "See landscape installation \u2192"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about trimming",
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: faq
  })))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Send a photo of the shrubs.",
    intro: "We'll tell you whether they can be shaped back, renovated over a couple of seasons, or whether it's time to replant."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    onNavigate: go,
    logo: LOGO,
    phone: PHONE
  }));
}
window.ShrubTrimming = ShrubTrimming;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShrubTrimming.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SnowRemoval.jsx
try { (() => {
/* Commercial snow & ice. Operational, property-by-property.
   hero → the real deadline → real work → property planning (signature) → services
   → property types → seasonal quote. Nothing here states triggers, response times,
   equipment counts or treatment products — none are verified. */

const SN_CM = "../../assets/photos/commercial/";
function useSnWide(q = "(min-width:820px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
const SN_JOB = [["Parking & access", "Keep primary driving and parking areas accessible as conditions develop."], ["Entrances & walkways", "Address pedestrian routes and high-traffic areas around the property."], ["Ice management", "Treat appropriate surfaces when conditions create slipping hazards."]];
const SN_PLAN = [["01", "Access", "Which entrances and driving lanes need to remain usable."], ["02", "Parking", "How parked vehicles and traffic affect clearing."], ["03", "Pedestrian areas", "Which sidewalks, entrances and walking routes require attention."], ["04", "Snow placement", "Where cleared snow can be placed without creating problems elsewhere on the property."]];
const SN_SERVICES = [["Snow plowing", "Commercial lots and vehicle access areas."], ["Sidewalks & entrances", "Pedestrian areas around buildings and primary access points."], ["Ice management", "Treatment of appropriate paved surfaces based on site conditions. [VERIFY MATERIALS AND METHOD.]"], ["Storm cleanup", "Additional clearing and cleanup as conditions require."]];
const SN_PROPS = [["Condominium & HOA communities", "Snow management around shared roads, parking and pedestrian areas."], ["Professional & medical offices", "Access around parking areas, entrances and frequently used pedestrian routes."], ["Retail & customer-facing properties", "Clearing focused around the areas customers and employees use."], ["Managed commercial properties", "Property-specific winter service for commercial and managed sites."]];
function SnowRemoval({
  go
}) {
  const wide = useSnWide();
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  const lbl = (t, c = "var(--text-primary)") => /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: c,
      marginBottom: "var(--space-2)"
    }
  }, t);
  const eyebrowGold = t => /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: "var(--space-5)"
    }
  }, t);
  const h2 = (t, inverse, max = "16ch") => /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-primary)",
      maxWidth: max,
      textWrap: "balance"
    }
  }, t);
  const body = (t, inverse) => /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-body)" : "var(--type-small)",
      color: inverse ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "54ch"
    }
  }, t);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Commercial",
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: wide ? "min(86vh,780px)" : "min(78vh,600px)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      background: "#07150D"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SN_CM + (wide ? "snow-hero3-wide.jpg" : "snow-hero3-tall.jpg"),
    alt: "Alejandro's plow truck with a red blade on a snowy commercial lot at night, fresh tire tracks in the snow",
    fetchpriority: "high",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: wide ? "50% 50%" : "50% 40%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: wide ? "linear-gradient(90deg,rgba(6,18,11,.9) 0%,rgba(6,18,11,.62) 48%,rgba(6,18,11,.2) 85%)" : "linear-gradient(180deg,rgba(6,18,11,.35) 0%,rgba(6,18,11,.65) 45%,rgba(6,18,11,.94) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(6,18,11,.55) 0%,rgba(6,18,11,0) 26%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      width: "100%",
      paddingTop: 140,
      paddingBottom: wide ? "clamp(56px,7vw,104px)" : "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: wide ? "var(--space-8)" : "var(--space-5)"
    }
  }, "Commercial \xB7 Snow & ice"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: wide ? "var(--type-display)" : "var(--fw-regular) clamp(2.5rem,11vw,3rem)/1.04 var(--font-display)",
      letterSpacing: "var(--ls-display)",
      color: "#fff",
      maxWidth: "13ch",
      textWrap: "balance"
    }
  }, "Snow management built around your property."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-lead)" : "var(--type-small)",
      color: "rgba(255,255,255,.88)",
      maxWidth: "50ch",
      marginTop: wide ? "var(--space-8)" : "var(--space-5)"
    }
  }, "Commercial snow removal and ice management for condominium associations, office properties and commercial sites throughout the Harrisburg area and surrounding Central Pennsylvania communities."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      marginTop: wide ? "var(--space-10)" : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solidLight",
    size: wide ? "lg" : "md",
    href: "#estimate"
  }, "Request a seasonal quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: wide ? "lg" : "md",
    href: tel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginTop: wide ? "var(--space-8)" : "var(--space-5)",
      lineHeight: 1.6
    }
  }, "Commercial lots \xB7 Condominiums \xB7 Offices \xB7 Managed properties"))), /*#__PURE__*/React.createElement(TrustedBy, {
    onView: () => go("/commercial/commercial-landscaping")
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.15fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Before the first car arrives"), h2("The storm isn't the deadline. Opening time is.", false, "14ch"), body("Commercial snow management is about more than clearing accumulation. Parking areas, entrances and pedestrian routes need to be addressed around how the property is actually used.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      borderTop: "1px solid var(--gold-500)"
    }
  }, SN_JOB.map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      padding: wide ? "var(--space-6) 0" : "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("dt", null, lbl(h)), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "48ch"
    }
  }, d)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, eyebrowGold("Commercial snow work"), h2("Working while the weather is still happening.", true, "17ch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.7fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(24px,3vw,48px)" : "var(--space-6)",
      alignItems: "end",
      marginTop: wide ? "var(--space-10)" : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "plow-truck-night.jpg",
    alt: "Plow truck working a snow-covered commercial lot at night",
    loading: "lazy",
    width: "1600",
    height: "900",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: wide ? "16/9" : "3/2",
      objectFit: "cover",
      objectPosition: "50% 55%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-3)"
    }
  }, "Commercial snow removal \xB7 Central Pennsylvania"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, wide && /*#__PURE__*/React.createElement("img", {
    src: SN_CM + "commercial-snow-removal-office-lot-central-pa.jpg",
    alt: "Snow-covered office parking lot after clearing",
    loading: "lazy",
    width: "1200",
    height: "675",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block",
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: wide ? "var(--type-body)" : "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "44ch",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-4)"
    }
  }, "Snow operations happen on the property's schedule and the storm's schedule. The goal is to keep critical areas moving while conditions change."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Before winter"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: wide ? "var(--type-h1)" : "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "14ch"
    }
  }, "Every property has a snow plan."), body("Where snow can be placed, which entrances matter most and how vehicles move through the site all affect how a property should be serviced.")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: wide ? "var(--space-16) 0 0" : "var(--space-8) 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: wide ? "repeat(4,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "0 clamp(20px,3vw,48px)" : "var(--space-6) var(--space-5)"
    }
  }, SN_PLAN.map(([n, h, d], i) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: wide ? "var(--fw-light) 3rem/1 var(--font-display)" : "var(--fw-light) 2rem/1 var(--font-display)",
      color: "var(--gold-text)",
      marginBottom: wide ? "var(--space-6)" : "var(--space-3)"
    }
  }, n), lbl(h), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "30ch"
    }
  }, d))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,.85fr) minmax(0,1.4fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, eyebrowGold("Snow & ice services"), h2("Winter coverage for the property.", true, "12ch")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid",
      gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(24px,3vw,48px)"
    }
  }, SN_SERVICES.map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: "1px solid var(--border-dark)",
      padding: wide ? "var(--space-6) 0" : "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", null, lbl(h, "var(--text-on-dark)")), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "40ch"
    }
  }, d)))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: !wide
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Commercial properties"), h2("Built for properties that can't simply close when it snows.", false, "18ch")), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: wide ? "var(--space-10) 0 0" : "var(--space-6) 0 0",
      borderTop: "1px solid var(--gold-500)"
    }
  }, SN_PROPS.map(([h, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.4fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(24px,4vw,64px)" : "var(--space-2)",
      alignItems: "baseline",
      padding: wide ? "var(--space-6) 0" : "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: wide ? "var(--fw-regular) 1.375rem/1.25 var(--font-display)" : "var(--fw-regular) 1.125rem/1.25 var(--font-display)",
      color: "var(--text-primary)"
    }
  }, h), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      maxWidth: "52ch"
    }
  }, d))))))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-950)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SN_CM + "commercial-snow-removal-office-lot-central-pa.jpg",
    alt: "",
    "aria-hidden": "true",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(10,36,22,.96) 0%,rgba(10,36,22,.86) 60%,rgba(10,36,22,.7) 100%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      padding: wide ? "var(--section-y) var(--gutter)" : "var(--space-12) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,96px)" : "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrowGold("Plan before the first storm"), h2("Talk through your property before winter.", true, "14ch"), body("Tell us about the property, the areas that need service and how the site is used. We'll discuss the scope and seasonal snow-management options for the property.", true), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: wide ? "lg" : "md",
    href: tel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE))), /*#__PURE__*/React.createElement(EstimateForm, {
    tone: "dark",
    projects: ["Commercial lot plowing", "Sidewalks & entrances", "Ice management", "Full seasonal coverage", "Not sure yet"]
  }))))), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.SnowRemoval = SnowRemoval;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SnowRemoval.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TownPage.jsx
try { (() => {
/* Town pages. Only towns with documented local projects get a page; the rest stay listed on
   /service-areas/. Distinctness comes from real local work, not invented town facts. */

const TOWNS_DATA = [{
  slug: "new-cumberland-pa",
  town: "New Cumberland",
  county: "Cumberland County",
  intro: "Alejandro's Landscaping is based in New Cumberland and does landscaping, hardscaping and commercial grounds work across the borough and the neighbouring west shore towns.",
  note: "This is home ground for the crew, so New Cumberland jobs are the shortest drive on the schedule.",
  hero: "dw-proof2.jpg",
  heroAlt: "Paver parking area and walkway in front of a brick home in New Cumberland, PA"
}, {
  slug: "mechanicsburg-pa",
  town: "Mechanicsburg",
  county: "Cumberland County",
  intro: "Alejandro's Landscaping builds patios, retaining walls, fire features and landscape beds in Mechanicsburg, about seven miles from our base in New Cumberland.",
  note: "Most of our Mechanicsburg work so far has been backyard hardscaping: patios, walls and fire features.",
  hero: "pool-pavers-after.jpg",
  heroAlt: "Rebuilt paver pool patio at a home in Mechanicsburg, PA"
}, {
  slug: "camp-hill-pa",
  town: "Camp Hill",
  county: "Cumberland County",
  intro: "Alejandro's Landscaping does landscape installation, bed work and hardscaping in Camp Hill, a few minutes from our base in New Cumberland.",
  note: "Our documented Camp Hill work so far is planting and bed work: new beds, stone edging and layered shrubs.",
  hero: "landscape-island-bed-fieldstone.jpg",
  heroAlt: "Curved island bed with fieldstone edging and layered shrubs at a home in Camp Hill, PA"
}];
/* Every other town in the 20-mile radius gets a page too. Without a documented local project,
   the page shows recent work from nearby towns, labelled with the town it was actually done in. */
const TOWN_COUNTY = {
  "Cumberland County": ["Lemoyne", "Wormleysburg", "Shiremanstown", "Enola", "Summerdale", "Lisburn", "Grantham", "Boiling Springs", "New Kingstown", "Carlisle", "Mount Holly Springs"],
  "Dauphin County": ["Highspire", "Steelton", "Harrisburg", "Paxtang", "Penbrook", "Middletown", "Colonial Park", "Linglestown", "Dauphin", "Hummelstown", "Hershey", "Grantville"],
  "York County": ["Lewisberry", "Goldsboro", "Etters", "Newberrytown", "Dillsburg", "Wellsville", "Rossville", "Emigsville", "Franklintown", "Manchester", "Mount Wolf", "Dover", "York"],
  "Perry County": ["Marysville", "Shermans Dale", "New Bloomfield"],
  "Lancaster County": ["Bainbridge", "Elizabethtown", "Maytown"],
  "Lebanon County": ["Campbelltown", "Palmyra"]
};
const TOWN_RING = {
  "0–8 miles": ["Lemoyne", "Wormleysburg", "Highspire", "Steelton", "Harrisburg", "Shiremanstown", "Lewisberry", "Goldsboro", "Etters", "Enola", "Summerdale", "Marysville"],
  "8–15 miles": ["Paxtang", "Penbrook", "Newberrytown", "Middletown", "Colonial Park", "Lisburn", "Dillsburg", "Grantham", "Linglestown", "Dauphin", "Hummelstown", "Boiling Springs", "Wellsville", "New Kingstown", "Shermans Dale", "Hershey"]
};
const TOWN_HEROES = [["patio-raised-wall-dusk.jpg", "Raised paver patio with lit steps at dusk, built by Alejandro's Landscaping"], ["firepit-seatwall-night.jpg", "Seat wall and fire pit lit at night, built by Alejandro's Landscaping"], ["patio-pool-pavers.jpg", "Paver pool patio built by Alejandro's Landscaping"], ["stone-edge-bed.jpg", "Stone-edged planting bed installed by Alejandro's Landscaping"], ["hero-firepit-wall-night.jpg", "Retaining wall and fire pit lit at night, built by Alejandro's Landscaping"]];
Object.entries(TOWN_COUNTY).forEach(([county, towns]) => towns.forEach(town => {
  const slug = town.toLowerCase().replace(/ /g, "-") + "-pa";
  if (TOWNS_DATA.some(x => x.slug === slug)) return;
  const ring = Object.keys(TOWN_RING).find(r => TOWN_RING[r].includes(town));
  const where = ring === "0–8 miles" ? "within about eight miles of" : ring === "8–15 miles" ? "about eight to fifteen miles from" : "about fifteen to twenty miles from";
  const [hero, heroAlt] = TOWN_HEROES[TOWNS_DATA.length % TOWN_HEROES.length];
  TOWNS_DATA.push({
    slug,
    town,
    county,
    hero,
    heroAlt,
    generic: true,
    intro: `Alejandro's Landscaping does landscaping, hardscaping and commercial grounds work in ${town}, ${where} our base in New Cumberland.`,
    note: `We haven't published a completed project in ${town} yet. Here's recent work from nearby towns, labelled with where it was done.`
  });
}));
const TOWN_SERVICES = [["Paver patios", "/hardscaping/paver-patios", "New patios, rebuilds and patios with steps, seat walls or fire features."], ["Retaining walls", "/hardscaping/retaining-walls", "Walls that hold a slope or support a patio or walkway."], ["Walkways & steps", "/hardscaping/walkways", "Front walks and entry steps built on a compacted stone base."], ["Paver driveways", "/hardscaping/paver-driveways", "Paver driveways and parking areas with matching walks."], ["Landscape installation", "/landscaping/installation", "New beds, shrubs, decorative stone and edging."], ["Mulch & bed work", "/landscaping/mulch-beds", "Re-cutting bed edges and refreshing mulch."], ["Shrub & hedge trimming", "/landscaping/trimming", "Shaping shrubs and hedges, and dealing with overgrown ones."], ["Commercial landscaping", "/commercial/landscaping", "Grounds maintenance for offices, practices and managed properties."]];
function useWideTP(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
const tpLabel = {
  font: "var(--type-eyebrow)",
  letterSpacing: "var(--ls-eyebrow)",
  textTransform: "uppercase",
  color: "var(--gold-text)"
};
function townProjects(town) {
  const s = (window.PROJECT_STUDIES || []).filter(p => p.townVerified && p.town.startsWith(town)).map(p => ({
    img: p.hero,
    alt: p.heroAlt,
    title: p.short,
    scope: p.result,
    href: "/projects/" + p.slug,
    study: true
  }));
  const c = (window.PROJECT_CARDS || []).filter(p => p.town.startsWith(town)).map(p => ({
    img: p.img,
    alt: p.alt,
    title: p.title,
    scope: p.scope,
    href: p.href
  }));
  return [...s, ...c];
}
function nearbyProjects() {
  return (window.PROJECT_STUDIES || []).filter(p => p.townVerified).map(p => ({
    img: p.hero,
    alt: p.heroAlt,
    title: p.short,
    place: p.town,
    scope: p.result,
    href: "/projects/" + p.slug,
    study: true
  }));
}
function TownPage({
  go,
  slug
}) {
  const wide = useWideTP();
  const t = TOWNS_DATA.find(x => x.slug === slug);
  const link = href => e => {
    e.preventDefault();
    go(href);
  };
  React.useEffect(() => {
    if (t && window.setHead) window.setHead(`Landscaping & Hardscaping in ${t.town}, PA | Alejandro's`, `Patios, walls, walkways, landscape installation and commercial grounds work in ${t.town}, PA by Alejandro's Landscaping, with completed local projects.`, "/service-areas/" + t.slug + "/", [["Home", "/"], ["Service areas", "/service-areas/"], [t.town, "/service-areas/" + t.slug + "/"]]);
  }, [slug]);
  if (!t) return null;
  const own = townProjects(t.town);
  const work = own.length ? own : nearbyProjects();
  const faq = [{
    question: `Does Alejandro's Landscaping serve ${t.town}?`,
    answer: `Yes. ${t.town} is inside our regular service area, which covers towns within about twenty miles of New Cumberland.`
  }, {
    question: `What services are available in ${t.town}?`,
    answer: `The same landscaping, hardscaping and commercial services we offer across the area: patios, walls, walkways, driveways, landscape installation, bed work and trimming. Each is linked above.`
  }, {
    question: "Can landscaping and hardscaping be done as one project?",
    answer: "Yes. We build the patio or wall and do the beds and planting around it, so one crew handles the whole job."
  }, {
    question: "How do I request an estimate?",
    answer: "Use the form below or call (717) 736-6538. Photos of the area and a rough size help us understand the job before we visit."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    active: "Areas",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: link("/")
  }, "Home"), " / ", /*#__PURE__*/React.createElement("a", {
    href: "/service-areas/",
    onClick: link("/service-area")
  }, "Service areas"), " / ", /*#__PURE__*/React.createElement("span", null, t.town)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.2fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: tpLabel
  }, t.county), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--ls-heading)",
      marginTop: "var(--space-3)",
      maxWidth: "14ch"
    }
  }, "Landscaping & Hardscaping in ", t.town, ", PA"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-5)",
      maxWidth: "46ch"
    }
  }, t.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#estimate",
    onClick: link("#estimate")
  }, "Request an estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: `tel:${PHONE.replace(/\D/g, "")}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), PHONE))), /*#__PURE__*/React.createElement("img", {
    src: P + t.hero,
    alt: t.heroAlt,
    fetchpriority: "high",
    style: {
      width: "100%",
      aspectRatio: wide ? "4/3" : "16/10",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block",
      order: wide ? 0 : -1
    }
  })))), work.length > 0 && /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)"
    }
  }, own.length ? `Completed projects in ${t.town}` : "Recent work nearby"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "52ch"
    }
  }, t.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))",
      gap: wide ? "var(--space-8) var(--gap-grid)" : "var(--space-5) 12px",
      marginTop: "var(--space-8)"
    }
  }, work.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.title,
    href: p.href,
    onClick: link(p.href),
    style: {
      textDecoration: "none",
      color: "inherit",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + p.img,
    alt: p.alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), p.place && /*#__PURE__*/React.createElement("div", {
    style: {
      ...tpLabel,
      marginTop: "var(--space-3)"
    }
  }, p.place), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) 1rem/1.3 var(--font-display)",
      marginTop: p.place ? 2 : "var(--space-3)"
    }
  }, p.title), wide && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, p.scope), p.study && /*#__PURE__*/React.createElement("div", {
    style: {
      ...tpLabel,
      color: "var(--green-800)",
      marginTop: "var(--space-2)"
    }
  }, "View project \u2192")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Services in ", t.town), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(24px,4vw,56px)",
      marginTop: "var(--space-6)"
    }
  }, TOWN_SERVICES.map(([h, href, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: link(href),
    style: {
      font: "var(--type-h4)",
      textDecoration: "none",
      color: "var(--green-800)"
    }
  }, h, " \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      marginBottom: "var(--space-6)"
    }
  }, "Questions about working in ", t.town), /*#__PURE__*/React.createElement(QuestionList, {
    items: faq
  }))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: `Planning a project in ${t.town}?`,
    intro: "Send a photo of the area and a rough size. We'll come out, walk it with you and give you a written estimate."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
Object.assign(window, {
  TownPage,
  TOWNS_DATA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TownPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WalkwaysSteps.jsx
try { (() => {
/* Walkways & steps. Built around real before/after pairs.
   Sequence: arrival → one transformation → built from the base up → steps → borders & pattern → more → FAQ → estimate. */

function useWkWide(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}
const WK = P + "walk/";
function WkLabel({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: dark ? "var(--gold-300)" : "var(--gold-text)"
    }
  }, children);
}
function WkPhoto({
  f,
  alt,
  ratio = "4/3",
  pos = "50% 50%",
  label,
  dark
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: WK + f,
    alt: alt,
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: ratio,
      objectFit: "cover",
      objectPosition: pos,
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), label && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(WkLabel, {
    dark: dark
  }, label)));
}
function WalkwaysSteps({
  go
}) {
  const wide = useWkWide();
  const tel = `tel:${PHONE.replace(/\D/g, "")}`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Hardscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(82vh,740px)",
    image: WK + "steps-grey.jpg",
    alt: "Grey paver steps with black railings leading up to the side entry of a house",
    eyebrow: "Hardscaping \xB7 Walkways & steps",
    title: "The way to the front door.",
    lede: "Paver walkway and step installation in New Cumberland, Camp Hill, Mechanicsburg, Harrisburg, Hershey and communities within twenty miles.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request an estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: tel
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Paver steps and landing"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.6fr)" : "minmax(0,1fr)",
      gap: "var(--space-6) clamp(28px,5vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Before & after"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "15ch"
    }
  }, "A front walk, rebuilt."), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "var(--space-6) 0 0"
    }
  }, [["Before", "The old concrete walk broken out, with the lawn cut back where the new path would run."], ["Built", "A new paver walkway with a darker border, turning the corner along the front bed. [VERIFY TOWN AND PAVER PRODUCT.]"], ["After", "One continuous path from the street steps toward the house."]].map(([h, d]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gridTemplateColumns: "72px 1fr",
      gap: "var(--space-3)",
      borderTop: "1px solid var(--gold-500)",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(WkLabel, null, h)), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, d))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80,
    style: {
      order: wide ? 0 : -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(WkPhoto, {
    f: "walk2-dig.jpg",
    alt: "Before: old concrete walk broken out and the ground dug out along the lawn for the new walkway",
    ratio: "3/4",
    pos: "50% 60%",
    label: "Before"
  }), /*#__PURE__*/React.createElement(WkPhoto, {
    f: "walk2-done.jpg",
    alt: "After: the same walkway finished in pavers with a darker border along the lawn",
    ratio: "3/4",
    pos: "50% 60%",
    label: "After"
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Built from the base up"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "16ch"
    }
  }, "What's under the walk keeps it flat."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-on-dark-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "48ch"
    }
  }, "A walkway is excavated and built on a compacted stone base before the first paver is set, so it stays level and meets adjoining steps and surfaces cleanly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,3fr) minmax(0,2fr)" : "minmax(0,1fr)",
      gap: wide ? "clamp(20px,2.4vw,32px)" : "28px",
      alignItems: "start",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: WK + "walk-base-wide2.jpg",
    alt: "Crew member working the compacted stone base for a walkway beside a raised garden bed, before the pavers are installed",
    loading: "lazy",
    style: {
      width: "100%",
      height: wide ? "clamp(360px,30vw,420px)" : 240,
      objectFit: "cover",
      objectPosition: "50% 55%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(WkLabel, {
    dark: true
  }, "The base"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)",
      marginTop: 4
    }
  }, "Compacted stone prepared before the pavers are installed.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: WK + "walk-steps-after.jpg",
    alt: "The finished walkway: paver landing and steps along the brick house beside the raised garden bed",
    loading: "lazy",
    style: {
      width: "100%",
      height: wide ? "clamp(360px,30vw,420px)" : 240,
      objectFit: "cover",
      objectPosition: "50% 62%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(WkLabel, {
    dark: true
  }, "The finished walk"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-on-dark-secondary)",
      marginTop: 4
    }
  }, "Pavers, borders and step transitions complete the surface."))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr) minmax(0,1.5fr)" : "minmax(0,1fr)",
      gap: "var(--space-6) clamp(28px,5vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Steps"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "14ch"
    }
  }, "Where the grade changes."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "44ch"
    }
  }, "Steps carry a walkway up to a door, a deck or a patio. Every step in a run should feel the same underfoot, so the rise and depth are planned before anything is built."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "var(--space-3)"
    }
  }, "[VERIFY STEP CONSTRUCTION \u2014 block, cap and base used.]")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
      gap: "var(--space-3)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(WkPhoto, {
    f: "steps-grey.jpg",
    alt: "Wide grey paver steps up to a side entry, with black railings",
    ratio: "4/3",
    pos: "40% 55%"
  }), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + "rw/IMG_2719.jpg",
    alt: "Steps being set into a block wall at the edge of a grey paver patio",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "3/4",
      objectFit: "cover",
      objectPosition: "60% 45%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.5fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "var(--space-6) clamp(28px,5vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("img", {
    src: WK + "walk-stepping-stones.jpg",
    alt: "Stepping-stone path of dark square pavers set in white decorative stone, curving from the driveway to the front walk",
    loading: "lazy",
    style: {
      width: "100%",
      height: wide ? "clamp(320px,28vw,400px)" : 230,
      objectFit: "cover",
      objectPosition: "50% 60%",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Stepping-stone paths"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "20ch"
    }
  }, "Not every path needs to be paved solid."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "42ch"
    }
  }, "Large pavers set in decorative stone make a lighter path through a bed or along a driveway, held in by a steel or poly edge."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.4fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "var(--space-6) clamp(28px,5vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(WkPhoto, {
    f: "walk-after.jpg",
    alt: "Paver walkway with a charcoal border leading to the front of a brick house",
    ratio: "16/10",
    pos: "50% 62%"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "Borders & pattern"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "20ch"
    }
  }, "A border makes a walk look finished."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-3)",
      maxWidth: "42ch"
    }
  }, "A contrasting border frames the field and can match a driveway or patio so the whole front reads as one plan. We install Techo-Bloc and Cambridge pavers."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, "More hardscaping"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Building more than the walk?")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-6) 0 0",
      padding: 0,
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: "0 clamp(24px,4vw,56px)"
    }
  }, [["Paver patios", "/hardscaping/paver-patios"], ["Paver driveways", "/hardscaping/paver-driveways"], ["Retaining walls", "/hardscaping/retaining-walls"], ["Fire features & seat walls", "/hardscaping/fire-features"], ["Grading & drainage", "/grading-drainage"]].map(([l, h]) => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      borderTop: "1px solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    onClick: e => {
      e.preventDefault();
      go(h);
    },
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: 52,
      font: "var(--fw-medium) 1rem/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, l, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-text)"
    }
  }, "\u2192"))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about walkways & steps",
    title: "What people ask before they hire."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: [{
      question: "How much does a paver walkway cost?",
      answer: "[VERIFY WALKWAY PRICING.] Length and width set most of it. Removing an old walk, steps, a border and how far material has to be carried from the truck move it from there.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you replace an old concrete walk or broken steps?",
      answer: "Yes. The old surface comes out first so the new walk sits on a properly built base. [VERIFY WHETHER REMOVAL IS INCLUDED OR QUOTED SEPARATELY.]",
      linkLabel: null,
      href: null
    }, {
      question: "Can the walkway match my driveway or patio?",
      answer: "Yes. Using the same paver and border across the walk, driveway and patio makes the front read as one plan. The New Cumberland walk above was built with its parking area.",
      linkLabel: "Paver driveways",
      href: "/hardscaping/paver-driveways"
    }, {
      question: "How long does a walkway take?",
      answer: "[VERIFY TYPICAL DURATION.] Most of the time goes into removing the old walk and building the base. Unlike poured concrete, there's no cure time before you can walk on it.",
      linkLabel: null,
      href: null
    }, {
      question: "What areas do you serve?",
      answer: "Towns within about twenty miles of New Cumberland, including Camp Hill, Mechanicsburg, Lemoyne, Harrisburg and Hershey.",
      linkLabel: "Service area",
      href: "/service-area"
    }]
  })))), /*#__PURE__*/React.createElement(RelatedProjects, {
    go: go,
    service: "walkways-steps"
  }), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Send a photo of the walk.",
    intro: "A picture of what's there now and where it needs to go tells us more than a paragraph."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.WalkwaysSteps = WalkwaysSteps;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WalkwaysSteps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/YardCleanups.jsx
try { (() => {
/* Spring & fall cleanups. Seasonal, problem-led work — distinct from bed work and trimming:
   one real before/after → the two seasons and when they happen → what a cleanup covers on the ground
   → what usually follows a cleanup → questions → photos. No numbered steps. */

const YC_GOLD = "#F5B324",
  YC_INK = "#4A453F";
const CL = "../../assets/photos/cleanup/";
function useWideYC(q = "(min-width:760px)") {
  const [w, setW] = React.useState(true);
  React.useEffect(() => {
    const m = window.matchMedia(q);
    const on = e => setW(e.matches);
    setW(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [q]);
  return w;
}

/* Drag/tap comparison. Both images share one box; "before" is clipped, so they always align. */
function CleanupCompare({
  ratio,
  before = CL + "cleanup-before-overgrown-bed.jpg",
  after = CL + "cleanup-after-cleared-bed.jpg",
  beforeAlt = "Planting bed before the cleanup, overgrown with tall grasses and weeds over thin, faded mulch",
  afterAlt = "The same bed after the cleanup: grasses cut back, weeds out, fresh black mulch and a clean edge against the lawn"
}) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const move = x => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos(Math.min(100, Math.max(0, (x - r.left) / r.width * 100)));
  };
  const tag = (t, side) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      [side]: 12,
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "#fff",
      background: "rgba(10,36,22,.72)",
      padding: "6px 10px"
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onPointerDown: e => {
      e.currentTarget.setPointerCapture(e.pointerId);
      move(e.clientX);
    },
    onPointerMove: e => {
      if (e.buttons === 1) move(e.clientX);
    },
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: "var(--radius-image)",
      cursor: "ew-resize",
      touchAction: "pan-y",
      userSelect: "none",
      background: "var(--stone-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: after,
    alt: afterAlt,
    draggable: false,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: before,
    alt: beforeAlt,
    draggable: false,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      marginLeft: -1,
      background: YC_GOLD,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: YC_GOLD,
      display: "grid",
      placeItems: "center",
      color: "var(--green-950)",
      font: "var(--fw-semibold) 13px/1 var(--font-sans)"
    }
  }, "\u21C6")), tag("Before", "left"), tag("After", "right"));
}
const YC_LEAF = [["Lawn cleared", "Leaves raked and blown off the lawn so the grass isn't smothered going into winter."], ["Beds and edges", "Leaves pulled out from under shrubs, along fences, foundations and bed edges."], ["Hard surfaces", "Patios, walks and driveways cleared of leaves and debris."]];
const YC_SPRING = [["Winter debris out", "Leaves, sticks and matted growth cleared out of the beds."], ["Cut back", "Last year's perennial and ornamental-grass growth cut down before new growth comes in."], ["Weeds and edges", "Early weeds pulled and bed edges re-cut sharp."]];
const YC_NEXT = [["Mulch & bed work", "Beds are already cleared and edged, so fresh mulch goes straight down.", "/landscaping/mulch-beds", "landscape-azaleas-flagstone-edge.jpg"], ["Shrub & hedge trimming", "Shrubs get shaped while the crew is already on the property.", "/landscaping/trimming", "commercial/east-main.jpg"], ["Sod installation", "Bare or worn lawn areas that show up after cleanup can be replaced.", "/landscaping/sod-installation", "sod/sod-hero-pool-new-lawn.jpg"]];
function YardCleanups({
  go
}) {
  const wide = useWideYC();
  const d = (window.SERVICES_LANDSCAPE || {})["yard-cleanups"] || {};
  const link = href => e => {
    e.preventDefault();
    go(href);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logo: LOGO,
    phone: PHONE,
    overlay: true,
    active: "Landscaping",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Hero, {
    height: "min(72vh,640px)",
    image: CL + "cleanup-hero-cleared-beds.jpg",
    alt: "Cleared planting beds with fresh black mulch and clean edges beside a lawn at a brick building",
    eyebrow: "Landscaping \xB7 Spring & fall cleanups",
    title: "Leaf cleanups and spring cleanups in the Harrisburg area.",
    lede: "Fall leaf removal and spring yard cleanups across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    primary: /*#__PURE__*/React.createElement(Button, {
      variant: "solidLight",
      size: "lg",
      href: "#estimate"
    }, "Request a cleanup estimate"),
    secondary: /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      href: `tel:${PHONE.replace(/\D/g, "")}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    }), PHONE),
    credit: "Beds cleared, cut back and mulched"
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1.5fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "clamp(24px,4vw,64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(CleanupCompare, {
    ratio: "4/3"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "One bed, one visit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "14ch"
    }
  }, "Same bed. One cleanup."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginTop: "var(--space-4)",
      maxWidth: "42ch"
    }
  }, "Grasses cut back, weeds pulled, debris cleared, the edge re-cut and fresh mulch laid. Drag the line to compare."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(2,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: wide ? "clamp(32px,5vw,88px)" : "var(--space-12)"
    }
  }, [["Fall", "Leaf cleanup", "Leaves off before they sit all winter.", YC_LEAF], ["Spring", "Spring cleanup", "Clear the winter out of the yard.", YC_SPRING]].map(([e, h, t, rows], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 80
  }, i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(CleanupCompare, {
    ratio: "4/3",
    before: CL + "leaf-before.jpg",
    after: CL + "leaf-after.jpg",
    beforeAlt: "Front lawn under an oak tree covered in fallen oak leaves before a fall cleanup",
    afterAlt: "The same lawn after the leaf cleanup, cleared to green grass under the oak tree"
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: "var(--space-4)"
    }
  }, e, " \xB7 ", h), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-on-dark)",
      maxWidth: "14ch"
    }
  }, t), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "var(--space-6) 0 0"
    }
  }, rows.map(([dt, dd]) => /*#__PURE__*/React.createElement("div", {
    key: dt,
    style: {
      padding: "var(--space-4) 0",
      borderTop: "1px solid var(--border-dark)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 4
    }
  }, dt), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-small)",
      color: "var(--text-on-dark-secondary)",
      maxWidth: "44ch"
    }
  }, dd))))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    tight: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "brand",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "While the beds are clear"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--ls-heading)",
      maxWidth: "18ch"
    }
  }, "What usually comes after a cleanup.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "repeat(3,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: wide ? "clamp(20px,2.4vw,36px)" : "var(--space-5)",
      marginTop: "var(--space-8)"
    }
  }, YC_NEXT.map(([h, t, href, img], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: h,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: link(href),
    style: {
      display: "grid",
      gridTemplateColumns: wide ? "minmax(0,1fr)" : "112px minmax(0,1fr)",
      gap: "var(--space-4)",
      alignItems: "start",
      textDecoration: "none",
      color: "inherit",
      borderTop: "1px solid var(--gold-500)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + img,
    alt: "",
    loading: "lazy",
    style: {
      width: "100%",
      aspectRatio: "3/2",
      objectFit: "cover",
      borderRadius: "var(--radius-image)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      marginBottom: "var(--space-2)"
    }
  }, h, " \u2192"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-small)",
      color: "var(--text-secondary)"
    }
  }, t)))))))), d.faq && /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions about cleanups",
    title: "What people ask first."
  })), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(QuestionList, {
    items: d.faq
  })))), /*#__PURE__*/React.createElement("div", {
    id: "estimate"
  }, /*#__PURE__*/React.createElement(EstimateBand, {
    title: "Book a leaf or spring cleanup.",
    intro: "Send a few photos of the yard. Cleanups are quoted off what's actually there."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    logo: LOGO,
    phone: PHONE
  }));
}
window.YardCleanups = YardCleanups;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/YardCleanups.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/projects-data.js
try { (() => {
/* Project library. STUDIES get their own page at /projects/<slug>; CARDS appear on /projects only.
   Rules: town only when verified (else "Central PA" + a hidden [VERIFY] note); no invented scope,
   sizes, dates or materials; photos must all be from the same job. Add a job by appending here. */

window.PROJECT_STUDIES = [{
  slug: "paver-driveway-walkway-new-cumberland",
  service: "paver-driveways",
  serviceLabel: "Paver driveways",
  serviceHref: "/hardscaping/paver-driveways",
  cat: "Hardscaping",
  title: "Paver Driveway and Walkway in New Cumberland, PA",
  short: "Paver driveway & walkway",
  town: "New Cumberland, PA",
  townVerified: true,
  areaHref: "/service-areas/new-cumberland-pa",
  meta: "A paver parking area and matching front walkway built by Alejandro's in New Cumberland, PA, using Cambridge pavers with a charcoal border.",
  intro: "Alejandro's replaced an old concrete walk in front of a brick home in New Cumberland with a paver parking area and a matching walkway to the front step, using Cambridge pavers with a charcoal border.",
  facts: [["Location", "New Cumberland, PA"], ["Service", "Paver driveway & walkway"], ["Pavers", "Cambridge"], ["Border", "Charcoal soldier course"], ["Completed", "[VERIFY YEAR]"]],
  before: "The front of the property had an old concrete walk. It was broken out and removed before any new work started.",
  work: ["Broke out and removed the existing concrete walk.", "Built the parking area and the walkway as one connected paver surface.", "Finished both with a charcoal border along the lawn edge.", "[VERIFY BASE PREPARATION, EXCAVATION DEPTH AND BEDDING FOR THIS JOB]"],
  result: "A paver parking area off the sidewalk with a walkway running to the front step, both in the same field paver and border so they read as one surface from the street.",
  hero: "dw-proof2.jpg",
  heroAlt: "Paver parking area with a charcoal border and a matching walkway leading to the front of a brick house in New Cumberland, PA",
  beforeAfter: ["dw-before2.jpg", "dw-after2.jpg", "Old concrete walk broken out and piled on the lawn in front of the brick house", "Finished paver parking area and walkway in front of the same brick house"],
  gallery: [["dw-x-apron2.jpg", "Pavers brought flush to the existing concrete sidewalk", "Where the paver field meets the sidewalk"], ["dw-x-border.jpg", "Charcoal border pavers against the lighter grey field", "The charcoal border"]],
  related: [["Paver driveways", "/hardscaping/paver-driveways"], ["Walkways & steps", "/hardscaping/walkways"]]
}, {
  slug: "pool-patio-rebuild",
  service: "paver-patios",
  serviceLabel: "Paver patios",
  serviceHref: "/hardscaping/paver-patios",
  cat: "Hardscaping",
  title: "Pool Patio Rebuild in Mechanicsburg, PA",
  short: "Pool patio rebuild",
  town: "Mechanicsburg, PA",
  townVerified: true,
  areaHref: "/service-areas/mechanicsburg-pa",
  meta: "Alejandro's rebuilt a failing paver pool surround in Mechanicsburg, PA: weeds in every joint and pavers lifting at the coping, replaced with a blended paver cut to the pool curve.",
  intro: "Alejandro's rebuilt an existing paver patio around a pool in Mechanicsburg where weeds had filled the joints and pavers along the coping were lifting and separating.",
  facts: [["Location", "Mechanicsburg, PA"], ["Service", "Paver patio rebuild"], ["Pavers", "Multi-size blend, charcoal border"], ["Drainage", "Channel drain across the field"], ["Completed", "[VERIFY YEAR]"]],
  before: "Weeds had taken over the joints across the patio, and pavers along the pool coping were lifting and pulling apart from each other.",
  work: ["Took up the existing pool-side patio.", "Laid a new multi-size blended paver, cut to follow the pool curve.", "Added a charcoal border and a channel drain across the field.", "[VERIFY WHETHER THE BASE WAS REBUILT AND WHAT WAS USED]"],
  result: "A continuous pool surround with tight, aligned edges at the coping and a defined route for water off the patio.",
  hero: "pool-pavers-after.jpg",
  heroAlt: "Rebuilt pool patio in a blended paver cut to the pool curve, with a charcoal border and a channel drain",
  beforeAfter: ["pool-pavers-before.jpg", "pool-pavers-after.jpg", "Old pool-side paver patio with weeds in every joint and pavers lifting at the pool edge", "The same pool patio rebuilt in a blended paver with a charcoal border"],
  gallery: [["patio-rebuild-in-progress.jpg", "Pool patio during the rebuild", "During the rebuild"]],
  related: [["Paver patios", "/hardscaping/paver-patios"], ["Grading & drainage", "/hardscaping/drainage"]]
}, {
  slug: "paver-walkway-and-steps",
  service: "walkways-steps",
  serviceLabel: "Walkways & steps",
  serviceHref: "/hardscaping/walkways",
  cat: "Hardscaping",
  title: "Paver Walkway and Entry Steps in New Cumberland, PA",
  short: "Walkway & entry steps",
  town: "New Cumberland, PA",
  townVerified: true,
  areaHref: "/service-areas/new-cumberland-pa",
  meta: "A front walkway and entry steps rebuilt in pavers by Alejandro's in New Cumberland, PA, from excavation and compacted stone base to finished border.",
  intro: "Alejandro's rebuilt a front walkway and entry steps in pavers at a home in New Cumberland, starting from excavation and a compacted stone base.",
  facts: [["Location", "New Cumberland, PA"], ["Service", "Walkway & steps"], ["Base", "Compacted stone, stone-chip bedding"], ["Completed", "[VERIFY YEAR]"]],
  before: "The original walk to the front door was removed so the route could be rebuilt from the ground up.",
  work: ["Excavated the walkway route.", "Built and compacted a stone base before any pavers were set.", "Set the pavers and border, and tied the walk into the entry steps.", "[VERIFY STEP CONSTRUCTION — block, cap and base used]"],
  result: "A level paver walk with a defined border, meeting the entry steps cleanly.",
  hero: "walk/walk-after.jpg",
  heroAlt: "Finished paver walkway and steps leading to a front door",
  beforeAfter: ["walk/walk-before.jpg", "walk/walk-after.jpg", "The front walk before the rebuild", "The same front walk finished in pavers with a border"],
  gallery: [["walk/walk-base-worker.jpg", "Crew member working the compacted stone base for the walkway", "The base, before pavers"], ["walk/walk-steps-after.jpg", "Finished paver steps at the entry", "Finished steps"]],
  related: [["Walkways & steps", "/hardscaping/walkways"], ["Paver patios", "/hardscaping/paver-patios"]]
}, {
  slug: "patio-retaining-wall-fire-pit",
  service: "retaining-walls",
  serviceLabel: "Retaining walls",
  serviceHref: "/hardscaping/retaining-walls",
  cat: "Hardscaping",
  title: "Patio, Retaining Wall and Fire Pit in Mechanicsburg, PA",
  short: "Patio, wall & fire pit",
  town: "Mechanicsburg, PA",
  townVerified: true,
  areaHref: "/service-areas/mechanicsburg-pa",
  meta: "A tan block retaining wall with caps, pillars and built-in lights around a paver patio and fire pit, built by Alejandro's in Mechanicsburg, PA.",
  intro: "Alejandro's built a tan block retaining wall with caps, pillars and built-in lights around a new paver patio and fire pit in Mechanicsburg.",
  facts: [["Location", "Mechanicsburg, PA"], ["Service", "Retaining wall, patio & fire pit"], ["Wall", "Tan block with caps and pillars"], ["Lighting", "Built into the wall"], ["Completed", "[VERIFY YEAR]"]],
  before: "[VERIFY STARTING CONDITION — what the yard was before the wall and patio went in.]",
  work: ["Built the block wall around the patio area.", "Laid the paver patio and set the fire pit.", "Capped the wall, added pillars and installed lights in the wall.", "[VERIFY WALL BASE, DRAINAGE AND REINFORCEMENT FOR THIS JOB]"],
  result: "A finished patio framed by a capped block wall with pillars, lit from within the wall, around a fire pit.",
  hero: "rw/IMG_2717.jpg",
  heroAlt: "Tan block retaining wall with caps, pillars and built-in lights around a paver patio and fire pit",
  beforeAfter: ["rw/IMG_2716.jpg", "rw/IMG_2717.jpg", "Tan block wall and paver patio mid-build, with tools and gravel on site", "The same wall finished with caps, pillars and built-in lights"],
  beforeAfterLabels: ["During", "Finished"],
  gallery: [],
  related: [["Retaining walls", "/hardscaping/retaining-walls"], ["Fire features", "/hardscaping/fire-features"], ["Paver patios", "/hardscaping/paver-patios"]]
}];

/* Card-only entries: one photo, not enough for a full page. Link to the service. */
window.PROJECT_CARDS = [{
  cat: "Hardscaping",
  img: "patio-raised-wall-dusk.jpg",
  alt: "Raised paver patio on a block wall with lit steps at dusk",
  title: "Raised patio & lit steps",
  town: "Enola, PA",
  scope: "Patio on a block-wall base with steps to the door.",
  href: "/hardscaping/paver-patios"
}, {
  cat: "Hardscaping",
  img: "firepit-seatwall-night.jpg",
  alt: "Seat wall and firepit lit at night",
  title: "Seat wall & fire pit",
  town: "Mechanicsburg, PA",
  scope: "Seat wall with lighting set below the cap.",
  href: "/hardscaping/fire-features"
}, {
  cat: "Landscaping",
  img: "stone-edge-bed.jpg",
  alt: "Stone-edged planting bed with rounded shrubs against a house",
  title: "Beds, edging & plantings",
  town: "New Cumberland, PA",
  scope: "Stone edge set into the ground around foundation shrubs.",
  href: "/landscaping/installation"
}, {
  cat: "Landscaping",
  img: "landscape-azaleas-flagstone-edge.jpg",
  alt: "Blooming azaleas in black mulch behind a dry-laid flagstone bed edge",
  title: "Foundation bed & flagstone edge",
  town: "Camp Hill, PA",
  scope: "Azaleas set well inside a flagstone edge laid against the lawn.",
  href: "/landscaping/installation"
}, {
  cat: "Landscaping",
  img: "landscape-island-bed-fieldstone.jpg",
  alt: "Curved island bed edged in fieldstone with layered shrubs and grasses around a lamp post",
  title: "Island bed & fieldstone edging",
  town: "Camp Hill, PA",
  scope: "Curved bed with layered shrubs and grasses, edged in fieldstone.",
  href: "/landscaping/installation"
}, {
  cat: "Landscaping",
  img: "landscape-layered-perennials.jpg",
  alt: "Layered perennial and shrub planting in a freshly mulched bed",
  title: "Layered perennial planting",
  town: "New Cumberland, PA",
  scope: "Shrubs and perennials planted in layers by height.",
  href: "/landscaping/installation"
}, {
  cat: "Landscaping",
  img: "residential-lawn-beds.jpg",
  alt: "Striped lawn with cut bed lines and foundation plantings beside a house",
  title: "Bed edging & mulch",
  town: "Mechanicsburg, PA",
  scope: "Bed lines re-cut and mulched against a striped lawn.",
  href: "/landscaping/mulch-beds"
}, {
  cat: "Landscaping",
  img: "river-rock-landscape-v3.jpg",
  alt: "River rock slope above a block-edged mulch bed",
  title: "River rock & decorative stone",
  town: "Mechanicsburg, PA",
  scope: "Decorative rock on a slope above a block-edged bed.",
  href: "/landscaping/installation"
}, {
  cat: "Commercial",
  img: "commercial/commercial-landscaping-geigle-funeral-home-colonial-park-pa.jpg",
  alt: "Manicured lawn, shaped shrubs and mulch beds at Geigle Funeral Home",
  title: "Geigle Funeral Home",
  town: "Colonial Park, PA",
  scope: "Grounds maintenance.",
  href: "/commercial/landscaping"
}, {
  cat: "Commercial",
  img: "commercial/commercial-landscaping-meadowview-dental-dillsburg-pa.jpg",
  alt: "MeadowView Dental sign with fresh mulch bed and striped lawn",
  title: "MeadowView Dental",
  town: "Dillsburg, PA",
  scope: "Mowing and bed maintenance.",
  href: "/commercial/landscaping"
}, {
  cat: "Commercial",
  img: "commercial/commercial-landscaping-bridge-street-dental-new-cumberland-pa.jpg",
  alt: "Bridge Street Dental Center sign in a mulched bed",
  title: "Bridge Street Dental Center",
  town: "New Cumberland, PA",
  scope: "Bed maintenance.",
  href: "/commercial/landscaping"
}, {
  cat: "Commercial",
  img: "commercial/commercial-landscaping-family-physician-associates-new-cumberland-pa.jpg",
  alt: "Family Physician Associates sign with maintained lawn and mulched bed",
  title: "Family Physician Associates",
  town: "New Cumberland, PA",
  scope: "Lawn and bed maintenance.",
  href: "/commercial/landscaping"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/projects-data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/seo.js
try { (() => {
/* Site-wide head management. Data source of truth: seo-pages.json (also imported by the
   Astro build). Writes title, description, canonical, robots, Open Graph, Twitter and breadcrumb
   JSON-LD on every route, and removes duplicates. Project and town pages pass their own values.
   Production domain confirmed by owner: alejandroslandscapes.com. */
(function () {
  var DATA = {
    "site": "https://alejandroslandscapes.com",
    "siteVerified": true,
    "ogBase": "/og/",
    "brand": "Alejandro's Landscaping",
    "pages": {
      "home": {
        "path": "/",
        "title": "Landscaping & Hardscaping in Harrisburg, PA | Alejandro's",
        "description": "Paver patios, driveways, retaining walls, landscape installation and commercial grounds care from New Cumberland across the Harrisburg area. Request an estimate.",
        "crumbs": [["Home", "/"]],
        "ogImage": "og-home.jpg"
      },
      "paver-patios": {
        "path": "/hardscaping/paver-patios/",
        "title": "Paver Patio Installation in Harrisburg, PA | Alejandro's",
        "description": "Paver patio design and installation for homes in Harrisburg and surrounding communities. Explore completed projects and request an estimate.",
        "crumbs": [["Home", "/"], ["Paver patios", "/hardscaping/paver-patios/"]],
        "ogImage": "og-paver-patios.jpg"
      },
      "paver-driveways": {
        "path": "/hardscaping/paver-driveways/",
        "title": "Paver Driveways in Harrisburg, PA | Alejandro's",
        "description": "Paver driveway design and installation in the Harrisburg area. Explore material options, site preparation and completed work. Request an estimate.",
        "crumbs": [["Home", "/"], ["Paver driveways", "/hardscaping/paver-driveways/"]],
        "ogImage": "og-paver-driveways.jpg"
      },
      "retaining-walls": {
        "path": "/hardscaping/retaining-walls/",
        "title": "Retaining Walls in Harrisburg, PA | Alejandro's",
        "description": "Retaining wall installation and replacement for slopes, patios and grade changes in the Harrisburg area. See completed walls and request an estimate.",
        "crumbs": [["Home", "/"], ["Retaining walls", "/hardscaping/retaining-walls/"]],
        "ogImage": "og-home.jpg"
      },
      "walkways-steps": {
        "path": "/hardscaping/walkways/",
        "title": "Paver Walkways & Steps in Harrisburg, PA | Alejandro's",
        "description": "Paver walkway and entry step installation in the Harrisburg area. Explore options for connecting entrances, patios and outdoor spaces.",
        "crumbs": [["Home", "/"], ["Walkways & steps", "/hardscaping/walkways/"]],
        "ogImage": "og-paver-patios.jpg"
      },
      "fire-features-seat-walls": {
        "path": "/hardscaping/fire-features/",
        "title": "Fire Pits & Seat Walls in Harrisburg, PA | Alejandro's",
        "description": "Built-in fire pits, seat walls and integrated lighting planned with the patio around them, across the west shore and Harrisburg area.",
        "crumbs": [["Home", "/"], ["Fire features & seat walls", "/hardscaping/fire-features/"]],
        "ogImage": "og-home.jpg"
      },
      "grading-drainage": {
        "path": "/hardscaping/drainage/",
        "title": "Grading & Drainage in Harrisburg, PA | Alejandro's",
        "description": "Grading and drainage work that moves water away from houses, patios and other outdoor spaces in the Harrisburg area. Request an estimate.",
        "crumbs": [["Home", "/"], ["Grading & drainage", "/hardscaping/drainage/"]],
        "ogImage": "og-home.jpg"
      },
      "landscape-installation": {
        "path": "/landscaping/installation/",
        "title": "Landscape Installation in Harrisburg, PA | Alejandro's",
        "description": "New planting beds, shrubs, edging, decorative stone and bed renovation for homes across the west shore and Harrisburg area. Request an estimate.",
        "crumbs": [["Home", "/"], ["Landscape installation", "/landscaping/installation/"]],
        "ogImage": "og-home.jpg"
      },
      "mulch-bed-work": {
        "path": "/landscaping/mulch-beds/",
        "title": "Mulch & Bed Work in Harrisburg, PA | Alejandro's",
        "description": "Mulch installation, bed edging and landscape bed refreshes for homes and commercial properties in the Harrisburg area. Request an estimate.",
        "crumbs": [["Home", "/"], ["Mulch & bed work", "/landscaping/mulch-beds/"]],
        "ogImage": "og-home.jpg"
      },
      "sod-installation": {
        "path": "/landscaping/sod-installation/",
        "title": "Sod Installation in Harrisburg, PA | Alejandro's",
        "description": "Sod installation and lawn preparation for properties in the Harrisburg area. Learn about site preparation, installation and aftercare.",
        "crumbs": [["Home", "/"], ["Sod installation", "/landscaping/sod-installation/"]],
        "ogImage": "og-home.jpg"
      },
      "shrub-hedge-trimming": {
        "path": "/landscaping/trimming/",
        "title": "Shrub & Hedge Trimming in Harrisburg, PA | Alejandro's",
        "description": "Shrub and hedge trimming for homes and commercial properties in the Harrisburg area, including shaping and clearing overgrown walks and entrances.",
        "crumbs": [["Home", "/"], ["Shrub & hedge trimming", "/landscaping/trimming/"]],
        "ogImage": "og-home.jpg"
      },
      "yard-cleanups": {
        "path": "/landscaping/yard-cleanups/",
        "title": "Spring & Fall Yard Cleanups in Harrisburg, PA | Alejandro's",
        "description": "Spring and fall yard cleanups, leaf removal and landscape bed cleanup for properties in the Harrisburg area. Request an estimate.",
        "crumbs": [["Home", "/"], ["Spring & fall cleanups", "/landscaping/yard-cleanups/"]],
        "ogImage": "og-home.jpg"
      },
      "landscape-lighting": {
        "path": "/landscaping/landscape-lighting/",
        "title": "Landscape Lighting in Harrisburg, PA | Alejandro's",
        "description": "Landscape and hardscape lighting for steps, walls, patios and paths, installed across the west shore and Harrisburg area. Request an estimate.",
        "crumbs": [["Home", "/"], ["Landscape lighting", "/landscaping/landscape-lighting/"]],
        "ogImage": "og-paver-patios.jpg"
      },
      "christmas-light-installation": {
        "path": "/landscaping/christmas-light-installation/",
        "title": "Christmas Light Installation in Harrisburg, PA | Alejandro's",
        "description": "Christmas light installation for properties in the Harrisburg area. Contact Alejandro's Landscaping to discuss your display and seasonal availability.",
        "crumbs": [["Home", "/"], ["Christmas light installation", "/landscaping/christmas-light-installation/"]],
        "ogImage": "og-home.jpg"
      },
      "commercial-landscaping": {
        "path": "/commercial-landscaping/",
        "title": "Commercial Landscaping Harrisburg PA | Alejandro's",
        "description": "Commercial landscaping and grounds maintenance for businesses, offices and managed properties in Harrisburg, New Cumberland, Camp Hill, Mechanicsburg and surrounding Central PA communities.",
        "crumbs": [["Home", "/"], ["Commercial landscaping", "/commercial-landscaping/"]],
        "ogImage": "og-commercial.jpg"
      },
      "snow-removal": {
        "path": "/commercial/snow-removal/",
        "title": "Commercial Snow Removal Harrisburg PA | Alejandro's",
        "description": "Commercial snow removal and ice management for offices, businesses and managed properties in Harrisburg and surrounding Central PA communities.",
        "crumbs": [["Home", "/"], ["Commercial snow removal", "/commercial/snow-removal/"]],
        "ogImage": "og-snow.jpg"
      },
      "service-area": {
        "path": "/service-areas/",
        "title": "Service Areas Around New Cumberland & Harrisburg | Alejandro's",
        "description": "Alejandro's Landscaping works within about 20 miles of New Cumberland, including Harrisburg, Camp Hill, Mechanicsburg and Hershey. Find your town.",
        "crumbs": [["Home", "/"], ["Service areas", "/service-areas/"]],
        "ogImage": "og-home.jpg"
      },
      "projects": {
        "path": "/projects/",
        "title": "Landscaping & Hardscaping Projects in Central PA | Alejandro's Landscaping",
        "description": "Completed paver driveways, patios, walkways, retaining walls, landscaping and commercial grounds by Alejandro's Landscaping in New Cumberland and across Central Pennsylvania.",
        "crumbs": [["Home", "/"], ["Projects", "/projects/"]],
        "ogImage": "og-paver-patios.jpg"
      },
      "resources": {
        "path": "/resources/",
        "title": "Landscaping & Hardscaping Resources | Alejandro's",
        "description": "Answers to common landscaping and hardscaping questions, completed projects and service-area information from Alejandro's Landscaping in Central Pennsylvania.",
        "crumbs": [["Home", "/"], ["Resources", "/resources/"]],
        "ogImage": "og-home.jpg"
      },
      "faqs": {
        "path": "/resources/faqs/",
        "title": "Landscaping & Hardscaping FAQs | Alejandro's Landscaping",
        "description": "Answers to common questions about estimates, patios, walls, drainage and landscaping from Alejandro's Landscaping in New Cumberland, PA.",
        "crumbs": [["Home", "/"], ["Resources", "/resources/"], ["FAQs", "/resources/faqs/"]],
        "ogImage": "og-home.jpg"
      },
      "about": {
        "path": "/about/",
        "title": "About Alejandro's Landscaping | New Cumberland, PA",
        "description": "Alejandro's Landscaping is a New Cumberland-based landscaping and hardscaping company serving properties across Central Pennsylvania. Meet the people and see the work.",
        "crumbs": [["Home", "/"], ["About", "/about/"]],
        "ogImage": "og-home.jpg"
      }
    }
  };
  var SITE = DATA.site,
    BRAND = DATA.brand;
  function one(sel, make) {
    var all = document.head.querySelectorAll(sel);
    for (var i = 1; i < all.length; i++) all[i].remove();
    var el = all[0];
    if (!el) {
      el = make();
      document.head.appendChild(el);
    }
    return el;
  }
  function meta(attr, key, val) {
    one("meta[" + attr + '="' + key + '"]', function () {
      var m = document.createElement("meta");
      m.setAttribute(attr, key);
      return m;
    }).setAttribute("content", val);
  }
  function drop(sel) {
    var a = document.head.querySelectorAll(sel);
    for (var i = 0; i < a.length; i++) a[i].remove();
  }
  function setHead(title, desc, path, crumbs, opts) {
    opts = opts || {};
    var url = SITE + (path || "/");
    document.title = title;
    one("title", function () {
      return document.createElement("title");
    }).textContent = title;
    meta("name", "description", desc);
    one('link[rel="canonical"]', function () {
      var l = document.createElement("link");
      l.rel = "canonical";
      return l;
    }).href = url;
    if (opts.noindex) meta("name", "robots", "noindex, follow");else drop('meta[name="robots"]');
    meta("property", "og:type", "website");
    meta("property", "og:site_name", BRAND);
    meta("property", "og:title", title);
    meta("property", "og:description", desc);
    meta("property", "og:url", url);
    var img = SITE + DATA.ogBase + (opts.ogImage || "og-home.jpg");
    meta("property", "og:image", img);
    meta("property", "og:image:width", "1200");
    meta("property", "og:image:height", "630");
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", desc);
    meta("name", "twitter:image", img);
    drop('script[data-ld="crumbs"]');
    if (crumbs && crumbs.length > 1) {
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.ld = "crumbs";
      s.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map(function (c, i) {
          return {
            "@type": "ListItem",
            position: i + 1,
            name: c[0],
            item: SITE + c[1]
          };
        })
      });
      document.head.appendChild(s);
    }
  }
  function applySeo(key) {
    var p = DATA.pages[key] || DATA.pages.home;
    setHead(p.title, p.description, p.path, p.crumbs, {
      ogImage: p.ogImage,
      noindex: p.noindex
    });
  }
  window.SEO_DATA = DATA;
  window.__seoSetHead = setHead;
  window.setHead = setHead;
  window.applySeo = applySeo;
  applySeo("home");
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/seo.js", error: String((e && e.message) || e) }); }

// ui_kits/website/service-data-hardscape.js
try { (() => {
/* Hardscape service records. FAQ sets are the owner's curated priority list, verbatim in intent.
   Answers 50-100 words. Anything unverified is bracketed. */
window.SERVICES_HARDSCAPE = {
  "paver-driveways": {
    navGroup: "Hardscaping",
    shortName: "paver driveways",
    eyebrow: "Hardscaping · Paver driveways",
    title: "Paver driveways built to carry the weight.",
    lede: "In Camp Hill, Mechanicsburg, Harrisburg, Hershey and the towns within twenty miles of New Cumberland.",
    photoNote: "[ADD PAVER DRIVEWAY PHOTOGRAPHY — no readable driveway installs exist in the current photo set. This page cannot publish without at least one finished driveway.]",
    convertTitle: "Driveway cracked, heaved or sinking?",
    convertBody: "Send a photo of what is there now and roughly how many cars park on it. We will tell you what has to come out and how deep the new base needs to go.",
    convertCta: "Request a driveway estimate",
    detailEyebrow: "Construction",
    detailTitle: "A driveway is a patio that has to hold a truck.",
    detailIntro: "The pavers look the same as a patio. Everything underneath is different — deeper base, thicker units, and edges that cannot move when a tyre turns on them.",
    detail: [["Excavation depth", "[VERIFY DRIVEWAY EXCAVATION DEPTH.] Vehicle loads need considerably more base than foot traffic."], ["Base & compaction", "[VERIFY BASE MATERIAL, TOTAL DEPTH AND LIFT THICKNESS for driveways.]"], ["Paver thickness", "[VERIFY PAVER THICKNESS USED — vehicular-rated units are thicker than patio pavers.]"], ["Laying pattern", "[VERIFY STANDARD PATTERN.] Herringbone interlocks under turning tyres; running bond can creep."], ["Edge restraint", "[VERIFY EDGE DETAIL.] The edges take the most abuse where cars turn in off the street."], ["Drainage", "Water has to run off the surface and away from the garage and the house. [VERIFY HOW DRAINAGE IS HANDLED at the apron and the garage slab.]"]],
    detailNote: "[VERIFY ENTIRE DRIVEWAY CONSTRUCTION SPEC WITH DORIAN] — none of the above is confirmed as Alejandro's method. Do not present industry practice as this company's practice.",
    stepsTitle: "Four steps, and you know the price before step three.",
    steps: [["Walkthrough", "We look at what is there, where the water goes, how it meets the street and the garage, and what parks on it."], ["Written scope and price", "Square footage, removal of the old surface, base depth, paver, pattern, edge and apron detail. On paper before anything starts."], ["Build", "[VERIFY TYPICAL DURATION.] Removal, excavation, base, setting, jointing. You get told which days the driveway is out of use."], ["Walk it again", "[VERIFY FOLLOW-UP AND WARRANTY PRACTICE.]"]],
    faq: [{
      question: "How much does a paver driveway cost in Central Pennsylvania?",
      answer: "[VERIFY DRIVEWAY PRICE RANGE — per square foot and a typical total.] Size drives most of it. Removing the old asphalt or concrete, excavation depth, the paver chosen, the pattern, and how the driveway meets the street apron all move the number. A driveway costs more per square foot than a patio because the base is deeper.",
      linkLabel: null,
      href: null
    }, {
      question: "Is a paver driveway worth it over asphalt or concrete?",
      answer: "It costs more up front. What it buys is a surface that does not crack in one piece — pavers move as individual units through freeze-thaw, and a damaged section can be lifted and reset rather than patched. Asphalt needs resealing and eventually resurfacing; concrete cracks and cannot be invisibly repaired.",
      linkLabel: null,
      href: null
    }, {
      question: "Will pavers hold up to cars and trucks?",
      answer: "Yes, when they are built as a driveway and not as a patio. That means a much deeper compacted base, thicker vehicular-rated pavers, a pattern that interlocks under turning tyres, and edge restraint that cannot shift. A patio build under a car is what fails.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you take out my existing driveway first?",
      answer: "[VERIFY REMOVAL CAPABILITY AND WHETHER IT IS INCLUDED OR QUOTED SEPARATELY.] Most driveway jobs start with an asphalt or concrete surface that has already failed, so removal and haul-away is normally the first step.",
      linkLabel: null,
      href: null
    }, {
      question: "How long before I can drive on it?",
      answer: "[VERIFY DURATION AND WHEN THE DRIVEWAY CAN TAKE TRAFFIC.] Unlike poured concrete there is no cure time — once the joints are set it can take a car. Plan for the driveway being out of use for the length of the build.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the driveway.",
    closeBody: "A picture and a rough size tells us more than a paragraph. We will tell you what has to come out and what goes back in."
  },
  "retaining-walls": {
    navGroup: "Hardscaping",
    shortName: "retaining walls",
    eyebrow: "Hardscaping · Retaining walls",
    title: "Retaining walls that hold the grade.",
    lede: "In Camp Hill, Lemoyne, Mechanicsburg, Harrisburg and the towns within twenty miles of New Cumberland.",
    hero: "hero-firepit-wall-night.jpg",
    heroAlt: "Retaining wall with integrated lighting at night behind a Central Pennsylvania home",
    heroCredit: "Seat wall and firepit with integrated lighting",
    projectsEyebrow: "Recent walls",
    projectsTitle: "See what changes the yard.",
    projects: [{
      image: "firepit-seatwall-night.jpg",
      alt: "Lit seat wall and firepit",
      town: "Central PA",
      service: "Seat wall & firepit"
    }, {
      image: "hero-firepit-wall-night.jpg",
      alt: "Retaining wall lit at night",
      town: "Central PA",
      service: "Retaining wall & lighting"
    }, {
      note: "[ADD A STRUCTURAL WALL PROJECT — the current photo set has decorative seat walls only. A tall grade-holding wall is the strongest proof this page can carry.]"
    }],
    convertTitle: "Losing a slope?",
    convertBody: "Send a photo of the bank and roughly how much fall you are dealing with. We will walk it and tell you whether it needs a structural wall or a regrade.",
    convertCta: "Request a wall estimate",
    detailEyebrow: "Construction",
    detailTitle: "What decides whether a wall stays straight.",
    detailIntro: "A wall does not lean because the block failed. It leans because water built up behind it or because there was nothing tying it back into the hill.",
    detail: [["Base & footing", "[VERIFY FOOTING SPEC — depth, material, and whether it changes on shale.]"], ["Drainage behind the wall", "[VERIFY DRAINAGE DETAIL — stone backfill depth, drain pipe, outlet.] Water pressure behind a wall is the most common cause of failure."], ["Geogrid", "[VERIFY GEOGRID THRESHOLD — at what height and soil condition it is used, and the layer spacing.]"], ["Engineering", "[VERIFY ENGINEERING THRESHOLD — many PA townships require stamped drawings above four feet. Confirm the local rule and how it is handled.]"], ["Backfill & compaction", "[VERIFY BACKFILL METHOD.]"], ["Caps & finish", "[VERIFY CAP ADHESIVE AND FINISH DETAIL.]"]],
    detailNote: "[VERIFY ENTIRE WALL CONSTRUCTION SPEC WITH DORIAN] — none of the above is confirmed as Alejandro's method. Do not present industry practice as this company's practice.",
    stepsTitle: "Four steps, and you know the price before step three.",
    steps: [["Walkthrough", "We stand on the slope with you. How much fall, where the water comes from, what the wall has to hold back."], ["Written scope and price", "Wall length and height, block system, drainage detail, reinforcement, restoration. On paper before anything starts."], ["Build", "Excavation, footing, drainage, courses, backfill. You get told which days we are there."], ["Walk it again", "[VERIFY FOLLOW-UP AND WARRANTY PRACTICE.]"]],
    faq: [{
      question: "How much does a retaining wall cost in Central Pennsylvania?",
      answer: "[VERIFY WALL PRICE RANGE — needs the per-face-foot basis and a typical total.] Wall length and height drive most of it, but excavation depth, the block system, drainage behind the wall, whether geogrid is required and access for a machine all move the number.",
      linkLabel: null,
      href: null
    }, {
      question: "Does a retaining wall need drainage?",
      answer: "Almost always. Soil behind a wall holds water, and saturated soil is far heavier than dry soil. Without stone backfill and a way for that water to escape, pressure builds against the back of the wall through every freeze-thaw cycle until it bulges or leans. Drainage is not an upgrade on a wall — it is part of the wall.",
      linkLabel: null,
      href: null
    }, {
      question: "When does a retaining wall need geogrid or engineering?",
      answer: "Height and soil decide it. Geogrid is layered back into the hill so the wall and the soil behind it act as one mass rather than a facade holding back a bank. [VERIFY THE HEIGHT AND SOIL THRESHOLDS ALEJANDRO'S USES, and the township height at which stamped engineering drawings are required locally.]",
      linkLabel: null,
      href: null
    }, {
      question: "What causes a retaining wall to lean, bulge or fail?",
      answer: "Water behind it, no reinforcement tying it into the hill, or a footing that was not cut deep enough. All three show up the same way — the middle of the wall pushes out first, courses separate, and caps go out of line. A wall that has started to move does not settle back.",
      linkLabel: null,
      href: null
    }, {
      question: "Can a retaining wall make a sloped backyard usable?",
      answer: "That is the most common reason to build one here. A bank that is too steep to mow or sit on becomes a flat terrace with a wall holding the grade behind it. On the short steep lots off the ridge it is often the only way to get usable flat ground out of a back yard.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you remove and replace a failing wall?",
      answer: "[VERIFY DEMOLITION AND REPLACEMENT CAPABILITY, and whether the old wall's removal is included or quoted separately.] Worth knowing: a wall that is leaning usually failed for a drainage reason, so rebuilding on the same detail tends to fail the same way.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the slope.",
    closeBody: "A picture and a rough idea of the drop tells us more than a paragraph. We will tell you what the ground needs."
  },
  "walkways-steps": {
    navGroup: "Hardscaping",
    shortName: "walkways & steps",
    eyebrow: "Hardscaping · Walkways & steps",
    title: "Walkways and steps that stay level.",
    lede: "In Camp Hill, Mechanicsburg, Harrisburg, Hershey and the towns within twenty miles of New Cumberland.",
    photoNote: "[ADD WALKWAY AND STEP PHOTOGRAPHY — no readable images of this service exist in the current set. This page cannot publish without it.]",
    convertTitle: "Front walk past its life?",
    convertBody: "Send a photo of what is there now. We will tell you whether it can be relaid or whether the base underneath has to come out.",
    convertCta: "Request a walkway estimate",
    detailEyebrow: "Construction",
    detailTitle: "Why a walk moves when a patio does not.",
    detailIntro: "A walkway is narrow, which means the edges carry proportionally more of the load and there is far less field to spread movement across. Steps add a second problem — every riser has to stay equal or the walk becomes a trip hazard.",
    detail: [["Base depth", "[VERIFY BASE SPEC FOR WALKWAYS — whether it differs from patio spec.]"], ["Edge restraint", "Narrow runs spread at the edges first. [VERIFY RESTRAINT PRODUCT AND METHOD.]"], ["Riser consistency", "[VERIFY HOW RISER HEIGHT IS SET AND HELD across a run of steps.]"], ["Slope & runoff", "A walk that holds water ices over. [VERIFY CROSS-SLOPE STANDARD.]"], ["Matching existing work", "[VERIFY WHETHER MATCHING AN EXISTING PATIO OR STOOP IS ROUTINE.]"], ["Frost", "[VERIFY FROST DEPTH APPROACH FOR STEPS AND STOOPS.]"]],
    detailNote: "[VERIFY ENTIRE WALKWAY CONSTRUCTION SPEC WITH DORIAN.] Nothing above is confirmed as this company's method.",
    faq: [{
      question: "How much does a paver walkway cost in Central PA?",
      answer: "[VERIFY WALKWAY PRICE RANGE — per square foot and a typical front-walk total.] Length and width set the base number. Steps, removing an existing concrete walk, tying into an existing stoop and the paver line chosen all move it from there.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you replace an existing concrete walkway or steps with pavers?",
      answer: "[VERIFY DEMOLITION CAPABILITY AND WHETHER IT IS INCLUDED OR QUOTED SEPARATELY.] Most front-walk jobs here start with concrete that has heaved or cracked at the joints, so removal is a normal first step rather than an exception.",
      linkLabel: null,
      href: null
    }, {
      question: "Can walkways and steps be built on a sloped property?",
      answer: "Yes, and slope is usually the reason someone calls. The question is whether the grade can be taken up in the walk itself or whether it needs steps, and if steps, how the risers get divided so they are all equal. On the short steep lots off the ridge that decision is the whole design.",
      linkLabel: null,
      href: null
    }, {
      question: "How do you keep a walkway from sinking or shifting?",
      answer: "Same as a patio, but the edges matter more. A walk is narrow, so any spread at the sides opens joints across the whole run quickly. That means a properly compacted base and edge restraint pinned along both open sides. [VERIFY ALEJANDRO'S BASE AND RESTRAINT SPEC.]",
      linkLabel: null,
      href: null
    }, {
      question: "Can the walkway match an existing patio or other hardscaping?",
      answer: "[VERIFY WHETHER MATCHING EXISTING WORK IS ROUTINE, and what happens when the original paver line has been discontinued.] Worth raising early — if a patio is planned for later, running both off the same material decided now avoids a mismatch.",
      linkLabel: "Paver patios",
      href: "/hardscaping/paver-patios"
    }, {
      question: "How long does walkway or step installation take?",
      answer: "[VERIFY TYPICAL DURATION.] What extends it is rarely the paving — it is removing an old concrete walk, working around the front door being the only way into the house, and rain that keeps the base from compacting.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the front walk.",
    closeBody: "What is there now and roughly how long a run. We will tell you what it needs."
  },
  "fire-features-seat-walls": {
    navGroup: "Hardscaping",
    shortName: "fire features",
    eyebrow: "Hardscaping · Fire features & seat walls",
    title: "The reason people sit outside after dark.",
    lede: "Built-in fire pits, seat walls and integrated lighting, across the west shore and the Harrisburg area.",
    hero: "firepit-seatwall-night.jpg",
    heroAlt: "Lit seat wall curving around a gas firepit at night",
    heroCredit: "Seat wall, firepit and integrated wall lighting",
    projectsEyebrow: "Recent fire features",
    projectsTitle: "See what changes the yard.",
    projects: [{
      image: "firepit-seatwall-night.jpg",
      alt: "Seat wall and firepit at night",
      town: "Central PA",
      service: "Firepit & curved seat wall",
      detail: "Wall lighting set into the course below the cap, so the light washes the stone instead of glaring at the seat."
    }, {
      image: "hero-firepit-wall-night.jpg",
      alt: "Lit wall and firepit",
      town: "Central PA",
      service: "Fire feature & wall lighting"
    }, {
      image: "firepit-gas-ring-night.jpg",
      alt: "Gas fire pit with a stone cap and glass media burning at night on a paver patio, with stone pillars behind",
      town: "Central PA",
      service: "Gas fire pit & pillars"
    }],
    convertTitle: "Adding it to a patio?",
    convertBody: "Cheapest done at the same time as the patio. Send a photo of the space and we will tell you what fits and what it changes about the base.",
    convertCta: "Request an estimate",
    detailEyebrow: "What it involves",
    detailTitle: "Decisions that get made before the base goes in.",
    detailIntro: "A fire feature and a seat wall are structural elements sitting on a patio, not furniture placed on top of it. Both need to be planned before the excavation, because both need footing and one needs a gas or electrical run.",
    detail: [["Footing", "A seat wall and a fire pit both need base under them. [VERIFY FOOTING SPEC.]"], ["Gas or wood", "[VERIFY WHETHER GAS LINES ARE RUN IN-HOUSE OR SUBCONTRACTED, and any permit requirement.]"], ["Wall lighting", "Lighting set into the course below the cap washes the stone rather than glaring at seated people. [VERIFY FIXTURE AND TRANSFORMER SPEC.]"], ["Clearance", "[VERIFY THE CLEARANCE ALEJANDRO'S PLANS AROUND A FIRE PIT for seating and traffic.]"], ["Retrofitting", "[VERIFY WHETHER ADDING TO AN EXISTING PATIO IS ROUTINE and what has to be cut back.]"], ["Local rules", "[VERIFY ANY TOWNSHIP OR BOROUGH RESTRICTION ON OPEN FIRE FEATURES in the towns worked.]"]],
    faq: [{
      question: "Can a fire pit be built into a new paver patio?",
      answer: "Yes, and it is much cheaper done at the same time. The footing, the base and any gas or electrical run get set during the one excavation. Adding it later means cutting back into a finished patio, lifting pavers that may no longer be available, and paying for a second mobilisation.",
      linkLabel: "Paver patios",
      href: "/hardscaping/paver-patios"
    }, {
      question: "Can a fire feature or seat wall be added to an existing patio?",
      answer: "[VERIFY RETROFIT CAPABILITY.] The practical constraints are whether there is base under the spot where the wall needs footing, and whether the original paver line is still made — a repair around new work is very visible when the colours are a batch apart.",
      linkLabel: null,
      href: null
    }, {
      question: "How much does a built-in fire pit or seat wall add to a patio project?",
      answer: "[VERIFY THE ADDED COST OF A FIRE PIT AND OF A SEAT WALL, priced separately.] The variables are the size of the feature, whether it is gas or wood, whether wall lighting is included, and whether it is going into a new patio or an existing one.",
      linkLabel: null,
      href: null
    }, {
      question: "Wood-burning or gas: which should I choose?",
      answer: "Gas lights instantly, produces no smoke or ash, and can be shut off when you go in. Wood costs less to build, needs no gas line, and is what most people picture. The deciding factor is usually how often it will actually get used — a gas feature gets lit on a Tuesday, a wood one tends to wait for the weekend.",
      linkLabel: null,
      href: null
    }, {
      question: "How much space should I plan around a fire pit?",
      answer: "[VERIFY THE CLEARANCE ALEJANDRO'S PLANS AROUND A FIRE PIT.] Two things get underestimated: seating needs room to push a chair back, and a walking route behind the seats keeps people from stepping between the fire and someone's knees.",
      linkLabel: null,
      href: null
    }, {
      question: "Can lighting be integrated into a seat wall?",
      answer: "Yes. Fixtures set into the course below the cap throw light down across the face of the stone rather than out at eye level. It lights the seating area and the wall texture at the same time, and it is the single detail that makes a patio usable after dark. [VERIFY FIXTURE SPEC AND WHETHER ELECTRICAL IS IN-HOUSE.]",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the space.",
    closeBody: "Where you are picturing it and whether there is a patio there already. We will tell you what fits."
  },
  "grading-drainage": {
    navGroup: "Hardscaping",
    shortName: "grading & drainage",
    eyebrow: "Grading & drainage",
    title: "Grading & drainage in the Harrisburg area.",
    lede: "Regrading, French drains and surface correction across the west shore and the Harrisburg area.",
    hero: "drainage-hero-full.jpg",
    tileRatio: "4/3",
    heroAlt: "Drainage trenches dug along the back of a new house with black corrugated pipe laid in them before a patio is built",
    heroCredit: "Drain pipe going in before the patio",
    projectsEyebrow: "Drainage before hardscaping",
    projectsTitle: "The water gets handled before the patio goes in.",
    projectsIntro: "Most patios, walkways and other outdoor improvements change where rain runs off. If the drainage isn't planned and installed first, that water ends up against the house or under the new hardscape. On a lot of our patio jobs the drain pipe goes in before the base does.",
    projects: [{
      image: "drainage-pipe-laying-crew.jpg",
      alt: "Alejandro's crew member laying black corrugated drain pipe in a trench beside a house, with a coil of pipe and the work truck nearby",
      town: "Central PA",
      service: "Laying the drain line"
    }],
    convertTitle: "Water sitting in the yard?",
    convertBody: "Send a photo taken during or just after rain — that is when the problem is visible. We will tell you whether it is a grading problem or a drainage problem, because they have different fixes and different prices.",
    convertCta: "Request a drainage estimate",
    detailEyebrow: "Two different problems",
    detailTitle: "Grading moves water. Drainage collects it.",
    detailIntro: "Most homeowners describe the symptom and assume the fix. They are not the same job, and the wrong one solves nothing.",
    detail: [["Surface grading", "Reshaping the ground so water runs where you want it. Fixes broad shallow pooling and negative slope toward a house."], ["French drain", "A stone trench with perforated pipe that collects water below grade and carries it somewhere. Fixes a persistent wet area that grading alone cannot reach."], ["Downspout extension", "[VERIFY WHETHER DOWNSPOUT WORK IS INCLUDED.] Often the cheapest fix on the list and the first thing to check."], ["Outlet", "Every drainage system has to discharge somewhere legal and lower. [VERIFY HOW OUTLETS ARE HANDLED when there is no daylight to run to.]"], ["Slope away from the house", "[VERIFY THE FALL ALEJANDRO'S GRADES TO over the first several feet from a foundation.]"], ["Lawn restoration", "[VERIFY WHETHER SEED OR SOD RESTORATION IS INCLUDED after excavation.]"]],
    faq: [{
      question: "Why does water keep pooling in my yard?",
      answer: "Usually one of three things — the ground falls the wrong way, there is a low spot with nowhere to drain, or roof water is being dumped next to the house and never carried away. Compacted clay makes all three worse, because water that cannot soak in has to run somewhere and sits wherever it stops.",
      linkLabel: null,
      href: null
    }, {
      question: "How do I know whether I need grading or a drainage system?",
      answer: "Grading fixes water that is running the wrong way or spreading across a broad shallow area. A drain fixes water that has nowhere to go once it arrives. If the yard dries out a day after rain, it is usually grading. If it stays soft for a week, something needs to collect and carry it.",
      linkLabel: null,
      href: null
    }, {
      question: "Can regrading move water away from my house?",
      answer: "Yes, and it is the first thing to look at when a basement is damp. Ground that has settled toward the foundation delivers roof and surface water straight against the wall. Re-establishing fall over the first several feet out from the house is usually cheaper than any interior fix. [VERIFY THE FALL SPEC USED.]",
      linkLabel: null,
      href: null
    }, {
      question: "French drain or yard grading: which solves my problem?",
      answer: "They solve different problems and are often done together. Grading is the cheaper fix and always the first question. A French drain is what you add when there is a genuinely low area, a spring, or water arriving from a neighbouring property that reshaping the surface cannot redirect.",
      linkLabel: null,
      href: null
    }, {
      question: "How much does grading and drainage work cost in Central PA?",
      answer: "[VERIFY DRAINAGE AND GRADING PRICE RANGES — grading and French drain should be priced separately, since homeowners are usually choosing between them.] Length of run, depth, whether there is a usable outlet and machine access drive the number.",
      linkLabel: null,
      href: null
    }, {
      question: "Will you restore the lawn afterward?",
      answer: "[VERIFY WHETHER LAWN RESTORATION IS INCLUDED OR QUOTED SEPARATELY, and whether it is seed or sod.] Worth asking any contractor before work starts — drainage work is trenching, and a yard that is fixed but torn up is only half done.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo taken during rain.",
    closeBody: "That is when the problem shows. Where the water sits and how long it stays tells us which fix it is."
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/service-data-hardscape.js", error: String((e && e.message) || e) }); }

// ui_kits/website/service-data-landscape.js
try { (() => {
/* Landscape service records. Owner's curated FAQ sets. Unverified strings bracketed. */
window.SERVICES_LANDSCAPE = {
  /* SUPERSEDED — landscape installation now has a bespoke page (LandscapeInstallation.jsx),
     routed via the BESPOKE map in index.html. This record is dead and kept only as reference
     for its FAQ copy. Do not edit expecting it to render. */
  "landscape-installation": {
    navGroup: "Landscaping",
    shortName: "landscape installation",
    eyebrow: "Landscaping · Installation",
    title: "Beds, plantings and the lines that hold them.",
    lede: "Landscape installation across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    hero: "stone-edge-bed.jpg",
    heroAlt: "Stone-edged planting bed with sculpted shrubs against a house",
    heroCredit: "Stone-edged beds and plantings",
    projectsEyebrow: "Recent installations",
    projectsTitle: "See what changes the yard.",
    projects: [{
      image: "stone-edge-bed.jpg",
      alt: "Stone-edged planting bed",
      town: "Central PA",
      service: "Beds & plantings",
      detail: "Stone edging set into the ground rather than laid on top of it."
    }, {
      image: "patio-pergola-mulch.jpg",
      alt: "Fresh beds around a patio and pergola",
      town: "Central PA",
      service: "Beds around new hardscape"
    }, {
      image: "residential-lawn-beds.jpg",
      alt: "Lawn and planting beds beside a house",
      town: "Central PA",
      service: "Full front landscape"
    }],
    convertTitle: "Starting from scratch, or starting over?",
    convertBody: "Send a photo of the front of the house. Most of what decides a planting plan is visible in one picture — orientation, what is already there, how much room there is to work with.",
    convertCta: "Request a landscape estimate",
    detailEyebrow: "What is included",
    detailTitle: "What a landscape installation actually covers.",
    detailIntro: "The plants are the visible part. Most of the cost and nearly all of the longevity is in what happens before they go in.",
    detail: [["Removing what is there", "[VERIFY WHETHER REMOVAL OF EXISTING PLANTINGS IS INCLUDED OR QUOTED SEPARATELY.]"], ["Soil preparation", "[VERIFY SOIL AMENDMENT PRACTICE — what gets added and when.]"], ["Bed shaping & edging", "Cut lines that hold their shape through a season. [VERIFY EDGING MATERIALS OFFERED.]"], ["Plant selection", "[VERIFY WHETHER PLANS ARE DRAWN, and how plants are chosen for a given exposure.]"], ["Installation", "[VERIFY PLANTING METHOD AND WHETHER PLANT STOCK IS WARRANTED.]"], ["Mulch & finish", "[VERIFY WHETHER MULCH IS INCLUDED in an installation price.]"]],
    detailNote: "[VERIFY LANDSCAPE INSTALLATION SCOPE WITH DORIAN — what is included as standard and what is a separate line.]",
    stepsTitle: "How a landscape project runs.",
    steps: [["Walkthrough", "We look at the exposure, the drainage and what is already growing well. Sun at six in the evening matters more than sun at noon."], ["Plan and price", "[VERIFY WHETHER A DRAWN PLAN IS PROVIDED, and whether there is a design fee.]"], ["Install", "Removal, soil work, edging, planting, mulch."], ["Establishment", "[VERIFY WATERING GUIDANCE GIVEN and any plant warranty.]"]],
    faq: [{
      question: "How much does landscape installation cost in Central PA?",
      answer: "[VERIFY LANDSCAPING PRICE RANGE — a typical front-of-house range and what it includes.] Bed size, how much has to come out first, plant sizes, soil condition and access all move the number. Larger plants cost more but look finished immediately; smaller stock costs less and catches up in two or three seasons.",
      linkLabel: null,
      href: null
    }, {
      question: "What is included in a landscape installation?",
      answer: "[VERIFY STANDARD SCOPE.] Generally: removing existing plantings, preparing the soil, shaping and edging the beds, installing plants, and mulching. What varies between contractors is whether removal, soil amendment and mulch are in the price or added afterward — worth confirming on any quote you compare.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you remove old or overgrown landscaping first?",
      answer: "[VERIFY REMOVAL CAPABILITY AND WHETHER IT IS INCLUDED.] Most renovations here start with foundation shrubs planted thirty years ago that are now above the windows. Taking them out often reveals grading and drainage problems that were hidden behind them, so it is worth looking before the plan is finalised.",
      linkLabel: "Property cleanups",
      href: "/landscaping/property-cleanups"
    }, {
      question: "When is the best time to install landscaping in Pennsylvania?",
      answer: "Spring and fall both work, and fall is often better — the soil is still warm, the air is cooler, and roots establish before winter without the plant fighting summer heat. Summer installation is possible but needs far more watering. [VERIFY ALEJANDRO'S SCHEDULING WINDOWS AND SEASONAL AVAILABILITY.]",
      linkLabel: null,
      href: null
    }, {
      question: "How do you choose plants that will work on my property?",
      answer: "Exposure first — how much direct sun the bed actually gets, and from which side. Then drainage, since a plant that wants dry feet will not survive in a bed that stays wet. Then mature size, which is what people most often get wrong. [VERIFY WHETHER ALEJANDRO'S DRAWS A PLAN OR SELECTS ON SITE.]",
      linkLabel: null,
      href: null
    }, {
      question: "Can landscaping be done as part of a patio project?",
      answer: "Yes, and it is the better sequence. Beds get cut after the hardscape is set, so the lines follow the finished patio rather than being worked around. The excavation is already open, the machine is already there, and the lawn only gets torn up once.",
      linkLabel: "Hardscaping",
      href: "/hardscaping"
    }],
    closeTitle: "Send a photo of the front of the house.",
    closeBody: "One picture tells us most of what a planting plan needs — orientation, what is there, how much room there is."
  },
  /* SUPERSEDED — mulch & bed work now has a bespoke page (MulchBedWork.jsx), routed via the
     BESPOKE map in index.html. This record is dead; kept only as reference. */
  "mulch-bed-work": {
    navGroup: "Landscaping",
    shortName: "mulch & bed work",
    eyebrow: "Landscaping · Mulch & beds",
    title: "Cut lines that still look cut in August.",
    lede: "Mulch installation, bed edging and reshaping across the west shore and the Harrisburg area.",
    hero: "stone-edge-bed.jpg",
    heroAlt: "Freshly mulched bed with a cut edge against lawn",
    heroCredit: "Bed edging and mulch",
    convertTitle: "Beds gone shapeless?",
    convertBody: "Send a photo and a rough idea of how many beds. Edging and mulch is usually a one-day job and the cheapest thing that makes a property look maintained.",
    convertCta: "Request a mulch estimate",
    detailEyebrow: "What is included",
    detailTitle: "What gets done before the mulch goes down.",
    detailIntro: "Mulch spread over a bed that has not been edged or weeded looks good for about three weeks. The preparation is what makes it last the season.",
    detail: [["Edging", "A cut edge, not a trench scraped with a shovel. [VERIFY EDGING METHOD AND DEPTH.]"], ["Weeding", "[VERIFY WHETHER WEEDING IS INCLUDED and whether pre-emergent is applied.]"], ["Bed reshaping", "[VERIFY WHETHER RESHAPING OR ENLARGING BEDS IS OFFERED as part of a mulch job.]"], ["Mulch depth", "[VERIFY INSTALLED DEPTH.] Too thin does not suppress weeds; too thick suffocates roots and holds water against stems."], ["Material", "[VERIFY MULCH TYPES OFFERED — hardwood, dyed, bark, and whether stone is an option.]"], ["Cleanup", "[VERIFY WHETHER WALKS AND DRIVES ARE BLOWN CLEAN afterward.]"]],
    faq: [{
      question: "How much does mulch installation cost in Central PA?",
      answer: "[VERIFY MULCH PRICING BASIS — per yard installed, or per bed.] Bed square footage and how much edging and weeding is needed first drive the number. A property that has been maintained costs less to mulch than one that has been left for two seasons.",
      linkLabel: null,
      href: null
    }, {
      question: "How much mulch does my property need?",
      answer: "One cubic yard covers roughly 100 square feet at three inches deep. Measure the beds, multiply length by width, divide by 100 and that is your rough yardage. Most residential properties fall somewhere between three and ten yards. [VERIFY ALEJANDRO'S STANDARD DEPTH.]",
      linkLabel: null,
      href: null
    }, {
      question: "How deep should mulch be?",
      answer: "Two to three inches over most beds. Less than that and weeds come through and the soil dries out. More than three and water struggles to reach the roots, and mulch piled against trunks and stems holds moisture where it causes rot. Existing mulch gets turned or topped rather than buried under another full layer.",
      linkLabel: null,
      href: null
    }, {
      question: "When is the best time to mulch in Pennsylvania?",
      answer: "Spring, once the soil has warmed — mulching too early over cold ground keeps it cold. Late April into May is the usual window here. A lighter fall application is worth doing where beds are exposed, mainly to insulate roots through the freeze-thaw rather than for appearance.",
      linkLabel: null,
      href: null
    }, {
      question: "Do you edge and clean the beds before mulching?",
      answer: "[VERIFY WHETHER EDGING AND WEEDING ARE INCLUDED IN A MULCH PRICE OR QUOTED SEPARATELY.] This is the question worth asking any quote you compare — the difference between a mulch price that includes bed preparation and one that does not is most of the cost, and all of the result.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you reshape or enlarge existing beds?",
      answer: "[VERIFY WHETHER RESHAPING IS OFFERED.] Beds that were cut for shrubs installed twenty years ago are usually too narrow for what is now growing in them. Widening a bed so the plants sit inside the line rather than hanging over it changes how the whole front of a house reads.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the beds.",
    closeBody: "Roughly how many and how they look now. We will tell you what it takes."
  },
  "shrub-hedge-trimming": {
    navGroup: "Landscaping",
    shortName: "trimming",
    eyebrow: "Landscaping · Shrub & hedge trimming",
    title: "Cut back to a shape that holds.",
    lede: "Shrub and hedge trimming across the west shore, Harrisburg and the surrounding towns.",
    photoNote: "[ADD TRIMMING PHOTOGRAPHY — before and after of an overgrown foundation planting would carry this page.]",
    convertTitle: "Shrubs above the windows?",
    convertBody: "Send a photo. Most overgrown foundation plantings can be brought back over two seasons rather than replaced, and that is a much cheaper conversation.",
    convertCta: "Request a trimming estimate",
    detailEyebrow: "What is included",
    detailTitle: "Trimming, and what it cannot fix.",
    detailIntro: "A shrub that has been sheared into a ball for fifteen years is green on the outside and bare inside. Cutting it back hard exposes that. Whether it recovers depends entirely on the species.",
    detail: [["Shaping vs shearing", "[VERIFY METHOD — hand pruning, shearing, or both depending on species.]"], ["Hard renovation", "[VERIFY WHETHER HARD CUTBACKS ARE OFFERED and over how many seasons.]"], ["Timing by species", "[VERIFY SEASONAL PRACTICE — spring bloomers cut after flowering, others in late winter.]"], ["Frequency", "[VERIFY RECOMMENDED FREQUENCY and whether recurring visits are offered.]"], ["Debris", "[VERIFY WHETHER CLIPPINGS ARE HAULED AWAY.]"], ["When to replace instead", "Some species do not come back from a hard cut. [VERIFY WHICH ARE TREATED AS REPLACE-ONLY.]"]],
    faq: [{
      question: "How much does shrub and hedge trimming cost?",
      answer: "[VERIFY TRIMMING PRICING BASIS — per visit, per hour, or per shrub.] Count and size drive it, plus whether it is routine maintenance or a first cut on something that has not been touched in years. The first visit on a neglected property always costs more than the ones after it.",
      linkLabel: null,
      href: null
    }, {
      question: "When is the best time to trim shrubs in Pennsylvania?",
      answer: "Depends on the plant. Anything that flowers in spring sets its buds the previous year, so cutting it in March removes the flowers — those get trimmed right after they bloom. Most everything else is best in late winter while dormant. Light shaping can happen through the season.",
      linkLabel: null,
      href: null
    }, {
      question: "Can badly overgrown shrubs be cut back and reshaped?",
      answer: "Often, but not always in one go. Many shrubs recover from a hard cut if it is done over two or three seasons, taking a third at a time so the plant keeps enough foliage to feed itself. Some species will not regrow from bare wood at all, and those are a replacement rather than a rescue.",
      linkLabel: null,
      href: null
    }, {
      question: "What is the difference between trimming and pruning?",
      answer: "Trimming is shaping the outside — keeping a hedge to a line. Pruning is selective, cutting specific branches back to a joint to improve the plant's structure or open it up. A sheared shrub looks tidy from outside and goes hollow within; a pruned one keeps growth through the whole plant.",
      linkLabel: null,
      href: null
    }, {
      question: "How often should hedges be trimmed?",
      answer: "Most formal hedges need two cuts a season here — once in early summer after the first flush, once in late summer. Slower-growing evergreens often hold their shape on one. [VERIFY WHETHER RECURRING VISITS ARE OFFERED AND ON WHAT SCHEDULE.]",
      linkLabel: null,
      href: null
    }, {
      question: "Do you remove the branches and debris?",
      answer: "[VERIFY WHETHER DEBRIS REMOVAL IS INCLUDED OR QUOTED SEPARATELY.] Worth confirming on any quote — a trimming price that leaves the clippings on the drive is not the same price as one that does not.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the shrubs.",
    closeBody: "We will tell you whether they can be brought back or whether it is time to replace them."
  },
  "yard-cleanups": {
    navGroup: "Landscaping",
    shortName: "spring & fall cleanups",
    eyebrow: "Landscaping · Spring & fall cleanups",
    title: "Get the property back under control.",
    lede: "Spring and fall cleanups across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    hero: "residential-lawn-beds.jpg",
    heroAlt: "Cleaned-up front beds with sharp cut edges against a freshly mowed lawn",
    heroCredit: "Beds cut back, edged and cleared",
    projectsEyebrow: "Finished cleanups",
    projectsTitle: "What it looks like when it's done.",
    projects: [{
      image: "stone-edge-bed.jpg",
      alt: "Cleared bed with shaped shrubs behind a stone edge",
      town: "Central PA",
      service: "Bed cleanup & edging"
    }, {
      image: "residential-lawn-beds.jpg",
      alt: "Front beds cut back with clean lines against the lawn",
      town: "Central PA",
      service: "Front beds"
    }, {
      image: "commercial-property-beds.jpg",
      alt: "Cleared planting beds along a building entrance",
      town: "Central PA",
      service: "Entrance beds"
    }],
    convertTitle: "Property got away from you?",
    convertBody: "Send a few photos. Cleanups are quoted off what is actually there, and there is no version of this we have not seen.",
    convertCta: "Request a cleanup estimate",
    detailEyebrow: "Spring or fall",
    detailTitle: "Two cleanups, two different jobs.",
    detailIntro: "Spring is about clearing out winter and getting beds ready to grow. Fall is about getting leaves and spent growth off the property before it sits all winter. Every cleanup is quoted to the property, and the estimate lists exactly what's included.",
    detail: [["Spring · Beds", "Clearing out leaves and debris that collected over winter, pulling early weeds, and cutting back last year's dead perennial growth."], ["Spring · Edges", "Re-cutting bed edges that softened over winter so the lines are clean before the season starts."], ["Spring · Ready for mulch", "A cleaned, edged bed is the right starting point for fresh mulch."], ["Fall · Leaves", "Getting leaves off lawns and out of beds, where a wet layer left over winter can smother what's underneath."], ["Fall · Cut back", "Cutting back spent perennials and clearing debris once the growing season is over."], ["Fall · Before winter", "Leaving beds and lawn clear going into winter makes the spring cleanup smaller."]],
    faq: [{
      question: "What's the difference between a spring and a fall cleanup?",
      answer: "A spring cleanup clears out what collected over winter, re-cuts the bed edges and gets beds ready for mulch and new growth. A fall cleanup gets leaves and spent growth off the property before winter. Many properties get both.",
      linkLabel: null,
      href: null
    }, {
      question: "How much does a yard cleanup cost?",
      answer: "Cleanups are priced by the condition of the property, not by square footage. How long it has been since the last cleanup is usually the biggest factor, followed by how much material has to come out. Send photos and we'll quote what is actually there.",
      linkLabel: null,
      href: null
    }, {
      question: "What's included in a cleanup?",
      answer: "It depends on the property and the season. Your estimate lists exactly what's included, so you can compare it line by line against any other quote.",
      linkLabel: null,
      href: null
    }, {
      question: "Can mulch or shrub trimming be added?",
      answer: "Yes, they're often done right after a cleanup, since the beds are already cleared and edged. Ask for them on the same estimate.",
      linkLabel: "Mulch & bed work",
      href: "/landscaping/mulch-beds"
    }, {
      question: "My yard is badly overgrown. Is that a cleanup?",
      answer: "Send photos first. Some overgrown properties are a large cleanup; others are closer to a bed renovation. We'll tell you which once we see it.",
      linkLabel: "Landscape installation",
      href: "/landscaping/installation"
    }],
    closeTitle: "Send a few photos.",
    closeBody: "Cleanups get quoted off what is actually there. Photos are faster than describing it."
  },
  "landscape-lighting": {
    navGroup: "Landscaping",
    shortName: "landscape lighting",
    eyebrow: "Landscaping · Lighting",
    title: "Landscape lighting in the Harrisburg area.",
    lede: "Landscape and hardscape lighting across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    hero: "lighting-hero-porch-steps.jpg",
    heroAlt: "Stone steps up to a front porch with warm lights set under each tread, between mulched beds and a paver walk",
    heroCredit: "Under-tread step lights on porch stairs",
    notConfirmed: "[VERIFY LANDSCAPE LIGHTING IS OFFERED AS A STANDALONE SERVICE — the night photography shows integrated wall lighting on hardscape projects. Confirm whether lighting is sold on its own, and whether electrical work is in-house or subcontracted, before this page publishes.]",
    projectsEyebrow: "Recent lighting",
    projectsTitle: "See what changes the yard.",
    projects: [{
      image: "hero-firepit-wall-night.jpg",
      alt: "Wall lighting washing the face of a retaining wall",
      town: "Central PA",
      service: "Wall & fire feature lighting",
      detail: "Fixtures set into the course below the cap, so the light washes the stone instead of glaring at seated people."
    }, {
      image: "firepit-seatwall-night.jpg",
      alt: "Lit seat wall curving around a firepit",
      town: "Central PA",
      service: "Seat wall lighting"
    }, {
      note: "[ADD PATH AND UPLIGHTING PHOTOGRAPHY — the current set shows integrated hardscape lighting only. Path lights, uplit trees and a facade shot would show the full range.]"
    }],
    convertImage: "lighting-hero-steps.jpg",
    convertImagePos: "55% 60%",
    convertTitle: "Patio you never sit on after eight?",
    convertBody: "Send a photo taken at dusk. Lighting is the cheapest thing that changes how much a finished yard actually gets used, and it is far cheaper run during a hardscape build than added later.",
    convertCta: "Request a lighting estimate",
    detailEyebrow: "What it involves",
    detailTitle: "Where the light comes from matters more than how much.",
    detailIntro: "The difference between a yard that looks lit and one that looks floodlit is fixture placement and beam direction. Light aimed at a surface reads as atmosphere; light aimed at eye level reads as a parking lot.",
    detail: [["Integrated hardscape lighting", "Fixtures set into a wall course or under a cap or step tread. Invisible during the day, and they light the stone rather than the person."], ["Path lighting", "[VERIFY FIXTURE TYPES AND SPACING STANDARD.] Spaced too closely it reads as a runway."], ["Uplighting", "[VERIFY WHETHER TREE AND FACADE UPLIGHTING IS OFFERED.]"], ["Step & safety lighting", "[VERIFY WHETHER STEP LIGHTING IS ROUTINE on hardscape projects with grade change.]"], ["Transformer & wiring", "[VERIFY LOW-VOLTAGE SYSTEM SPEC, transformer sizing and whether wiring is buried during construction.]"], ["Controls", "[VERIFY WHETHER TIMERS, PHOTOCELLS OR APP CONTROL ARE OFFERED.]"]],
    detailNote: "[VERIFY ALL LIGHTING CAPABILITY, FIXTURE BRANDS AND ELECTRICAL SCOPE WITH DORIAN. Confirm whether any line-voltage work is performed and by whom — do not imply electrical licensing that has not been verified.]",
    stepsStyle: "rows",
    pairWith: {
      eyebrow: "Pair it with",
      title: "Want to add landscape lighting to your outdoor space?",
      intro: "Lighting works best built in alongside the project it lights. Explore the outdoor spaces we build.",
      links: [["Paver patios", "Step and seat-wall lighting set in during construction.", "/hardscaping/paver-patios"], ["Retaining walls", "Lights set into the wall course below the cap.", "/hardscaping/retaining-walls"], ["Walkways & steps", "Under-tread lights on steps and entries.", "/hardscaping/walkways"], ["Fire features & seat walls", "Lighting around where people sit at night.", "/hardscaping/fire-features"], ["Landscape installation", "Planting beds worth lighting after dark.", "/landscaping/installation"]]
    },
    steps: [["Walk it at dusk", "Lighting gets designed after dark. Where you sit, what is worth lighting, and what should stay unlit."], ["Layout and price", "[VERIFY WHETHER A LIGHTING PLAN IS DRAWN, and how fixture counts are quoted.]"], ["Install", "Transformer, buried runs, fixtures. [VERIFY WHETHER LAWN AND BED RESTORATION IS INCLUDED after trenching.]"], ["Aim it at night", "[VERIFY WHETHER A NIGHT-TIME AIMING VISIT IS INCLUDED.] Fixtures aimed in daylight are almost always wrong."]],
    faq: [{
      question: "How much does landscape lighting cost in Central PA?",
      answer: "[VERIFY LIGHTING PRICING BASIS — per fixture installed, or per system including transformer.] Fixture count drives most of it, plus transformer size, how far the runs have to be trenched, and whether wiring can be buried during an existing excavation or has to cut through finished lawn.",
      linkLabel: null,
      href: null
    }, {
      question: "Can lighting be added to an existing patio or wall?",
      answer: "Yes, though it costs more than doing it during construction. Integrated wall lighting means pulling a course of block to set fixtures and run wire behind the face. Path and uplighting are simpler — those only need the runs trenched through lawn and beds. [VERIFY RETROFIT CAPABILITY.]",
      linkLabel: "Fire features & seat walls",
      href: "/hardscaping/fire-features-seat-walls"
    }, {
      question: "What is the difference between path lighting, uplighting and hardscape lighting?",
      answer: "Path lights sit low and light the ground you walk on. Uplighting is aimed up into a tree or across a facade for depth beyond the patio. Hardscape lighting is built into a wall, cap or step and lights the stone itself. Most yards need two of the three, rarely all at once.",
      linkLabel: null,
      href: null
    }, {
      question: "Is landscape lighting low-voltage, and does it need an electrician?",
      answer: "Landscape lighting is almost always 12-volt low voltage, fed from a transformer plugged into an existing exterior outlet. That is what makes it safe to bury shallow and to work on later. [VERIFY WHETHER A NEW EXTERIOR OUTLET OR CIRCUIT IS EVER REQUIRED and who performs that work.]",
      linkLabel: null,
      href: null
    }, {
      question: "Will lighting hold up through Pennsylvania winters?",
      answer: "Quality fixtures are rated for it, but two things cause most failures here — water sitting in a fixture housing that was not set to drain, and connections that were twisted rather than sealed. Freeze-thaw finds both. [VERIFY FIXTURE BRANDS AND CONNECTION METHOD USED, and any warranty offered.]",
      linkLabel: null,
      href: null
    }, {
      question: "Can lighting be run during a patio or wall build?",
      answer: "That is the right time to do it. The excavation is already open, the wall courses are being set anyway, and wire can be buried under work that has not been finished yet. Adding it afterward means lifting pavers or pulling block that has already been capped.",
      linkLabel: "Paver patios",
      href: "/hardscaping/paver-patios"
    }],
    closeTitle: "Send a photo taken at dusk.",
    closeBody: "Where you sit and what is worth lighting. That is enough to lay out a system."
  },
  "christmas-light-installation": {
    navGroup: "Landscaping",
    shortName: "Christmas light installation",
    ctaStyle: "phone",
    eyebrow: "Landscaping · Seasonal lighting",
    title: "Christmas light installation in the Harrisburg area.",
    lede: "Christmas light installation across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    hero: "xmas/xmas-hero-stone-estate-hd.jpg",
    heroAlt: "Stone house at night with warm white lights along every roofline, wrapped trees and shrubs, and a lit tree in the centre of a snowy driveway circle",
    heroCredit: "Rooflines, trees and shrubs",
    projectsEyebrow: "Recent displays",
    projectsTitle: "Rooflines, gables and the front yard.",
    projects: [{
      image: "xmas/xmas-roofline-uhd.jpg",
      alt: "Warm white lights traced along the gables, eaves and bay window roof of a two-story house",
      town: "Central PA",
      service: "Full roofline"
    }, {
      image: "xmas/xmas-reindeer-gable-hd.jpg",
      alt: "Three lit reindeer on the front lawn beside a lamp post, with roofline lights on the gable behind",
      town: "Central PA",
      service: "Lawn display & gable"
    }],
    convertTitle: "Booking for this season?",
    convertBody: "The calendar fills before the weather turns. Call with your address and we will tell you what is still open.",
    convertCta: "Request a quote",
    detailEyebrow: "What is included",
    detailTitle: "What's included in an installation.",
    detailIntro: "Most homeowners hire this out for one reason: the roofline. Ground-level lights and wreaths are a Saturday. A two-storey gutter line in November is a ladder in the cold, and it is where people get hurt.",
    detail: [["Design walk", "[VERIFY WHETHER A PRE-SEASON WALKTHROUGH IS INCLUDED.] Rooflines, columns, trees and beds all light differently and the estimate depends on which you want."], ["Lights supplied", "[VERIFY WHETHER LIGHTS ARE PROVIDED BY ALEJANDRO'S OR THE HOMEOWNER, and if provided, whether they are leased for the season or bought outright.] This is the single biggest question on any holiday lighting quote."], ["Roofline & gutter work", "[VERIFY HEIGHT CAPABILITY, EQUIPMENT AND FALL PROTECTION.] Confirm clips are used rather than staples or nails — fasteners driven into fascia cause damage that shows up as a leak years later."], ["Trees, columns & beds", "[VERIFY WHICH GROUND-LEVEL ELEMENTS ARE OFFERED — wrapped trunks, shrub washes, wreaths, garland, walkway markers.]"], ["Power & timers", "[VERIFY WHETHER TIMERS ARE SET UP and how circuits are managed so the whole display is not on one outlet.]"], ["In-season service", "[VERIFY WHETHER MID-SEASON REPAIRS ARE INCLUDED.] Bulbs fail and wind moves things. Whether someone comes back out is worth confirming."], ["Takedown", "[VERIFY WHETHER TAKEDOWN IS INCLUDED IN THE PRICE, the window it happens in, and whether lights are stored over the year.]"]],
    detailNote: "[VERIFY ALL HOLIDAY LIGHTING CAPABILITY, EQUIPMENT, INSURANCE AND CONTRACT STRUCTURE WITH DORIAN. Nothing on this page is confirmed. Work at height on a customer's roof carries real liability — do not publish until insurance coverage is verified.]",
    faq: [{
      question: "How much does Christmas light installation cost around Harrisburg?",
      answer: "[VERIFY HOLIDAY LIGHTING PRICING BASIS — per linear foot of roofline, per element, or a flat seasonal package.] What moves the number most is linear footage, house height, and whether the price includes the lights themselves or just labour. A two-storey roofline costs considerably more than a ranch of the same frontage.",
      linkLabel: null,
      href: null
    }, {
      question: "Do you supply the lights, or do I?",
      answer: "[VERIFY WHICH MODEL ALEJANDRO'S USES.] Both exist in this trade. A lease model means commercial-grade lights sized to your house, swapped out when they fail, and stored over the year — higher first season, lower after. Using your own lights costs less up front but the installer cannot warranty strands they did not buy.",
      linkLabel: null,
      href: null
    }, {
      question: "Is takedown included?",
      answer: "[VERIFY WHETHER TAKEDOWN IS INCLUDED OR PRICED SEPARATELY, and the window it happens in.] Worth pinning down on any quote — a price that leaves you on a ladder in January is not the same price as one that does not.",
      linkLabel: null,
      href: null
    }, {
      question: "Will the clips damage my roof or gutters?",
      answer: "Proper installation uses plastic clips that hook over the shingle edge or gutter lip and come off without a trace. What causes damage is staples and nails driven through fascia or trim — those leave holes that let water in and show up as a problem years later. [VERIFY FASTENING METHOD USED.]",
      linkLabel: null,
      href: null
    }, {
      question: "When should I book?",
      answer: "[VERIFY BOOKING WINDOW.] Earlier than most people expect. Holiday lighting crews here are typically booked out by late October, and the last two weeks before Thanksgiving are the hardest to get. Calling in December usually means waiting until next season.",
      linkLabel: null,
      href: null
    }, {
      question: "What happens if lights go out mid-season?",
      answer: "[VERIFY WHETHER IN-SEASON SERVICE CALLS ARE INCLUDED and the response time.] Strands fail and wind shifts things. Whether someone comes back out, and whether it costs extra, is one of the real differences between installers.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo of the front of the house.",
    closeBody: "Daylight is fine. The roofline, the trees out front, and where the nearest outdoor outlet is."
  },
  "sod-installation": {
    navGroup: "Landscaping",
    shortName: "sod installation",
    eyebrow: "Landscaping · Sod installation",
    title: "Sod installation in Harrisburg, PA.",
    lede: "Sod installation across the west shore, Harrisburg and the towns within twenty miles of New Cumberland.",
    hero: "sod/sod-hero-pool-new-lawn.jpg",
    heroAlt: "Freshly laid sod running beside a river rock border along a pool deck at dusk",
    heroCredit: "New sod and river rock along a pool deck",
    projectsEyebrow: "Recent lawns",
    projectsTitle: "See what changes the yard.",
    projects: [{
      image: "sod/sod-rolls-being-laid.jpg",
      alt: "Rolls of sod staged on prepared soil while new sod is laid beside a pool",
      town: "Central PA",
      service: "Sod going down",
      detail: "Rolls staged on prepared soil and laid in rows."
    }, {
      image: "sod/sod-first-watering-dusk.jpg",
      alt: "Sprinkler watering freshly laid sod beside a river rock border at dusk",
      town: "Central PA",
      service: "First watering"
    }, {
      image: "sod/sod-edge-river-rock-pool.jpg",
      alt: "New sod laid around a pool corner with a river rock border against the deck",
      town: "Central PA",
      service: "Sod around the pool"
    }],
    convertTitle: "Starting a lawn over?",
    convertBody: "Send a photo and rough square footage. The first question is always whether the ground needs grading or topsoil before anything gets laid.",
    convertCta: "Request a sod estimate",
    detailEyebrow: "What is included",
    detailTitle: "What happens before the sod goes down.",
    detailIntro: "Sod knits into what is underneath it. Laid over compacted subsoil it roots shallow and browns in the first dry spell, so grade and soil get settled first.",
    detail: [["Grading", "[VERIFY WHETHER GRADING IS INCLUDED OR QUOTED SEPARATELY.] Water has to run away from the house before sod goes down over it."], ["Topsoil", "[VERIFY WHETHER TOPSOIL IS SUPPLIED and at what depth.]"], ["Sod variety", "[VERIFY SOD TYPE AND SUPPLIER — bluegrass blend, fescue, or a mix, and where it is cut.]"], ["Freshness", "Sod is a living product and starts declining the day it is cut. [VERIFY DELIVERY-TO-INSTALL WINDOW.]"], ["Seams & slopes", "[VERIFY SEAM STAGGERING AND WHETHER SOD IS PEGGED on slopes.]"], ["Aftercare", "[VERIFY WATERING GUIDANCE PROVIDED and whether follow-up visits are offered.]"]],
    faq: [{
      question: "How much does sod installation cost in Central PA?",
      answer: "[VERIFY SOD PRICING PER SQUARE FOOT INSTALLED.] Square footage sets the base number. Whether the old lawn has to come out first, whether grading or topsoil is needed, and how far the pallets have to be barrowed from the truck all move it. Prep is often the larger half of the price.",
      linkLabel: null,
      href: null
    }, {
      question: "Sod or seed: which is right for my yard?",
      answer: "Sod gives a finished lawn the day it is laid, holds a slope immediately, and goes down across a wider season. Seed costs a fraction as much and roots more deeply over time, but it needs weeks of consistent watering and a good establishment window. Slope, erosion and how soon you need to use the yard usually decide it.",
      linkLabel: null,
      href: null
    }, {
      question: "When can sod be installed in Pennsylvania?",
      answer: "Most of the growing season, which is one of its advantages over seed. Spring and early fall are easiest because the sod needs less water to establish. Mid-summer installation works but the watering demand is heavy and unforgiving — sod that dries out on the pallet or in the first week does not recover.",
      linkLabel: null,
      href: null
    }, {
      question: "Does my yard need grading or topsoil first?",
      answer: "Often. Sod laid over compacted subsoil left behind after construction roots shallow and browns in the first dry spell. Ground that falls toward the house sends water where you least want it. [VERIFY HOW ALEJANDRO'S ASSESSES THIS and whether grading is included or a separate line.]",
      linkLabel: "Grading & drainage",
      href: "/grading-drainage"
    }, {
      question: "How soon can we walk on the new sod?",
      answer: "Light foot traffic after about two to three weeks, once it has knitted into the soil underneath — test it by lifting a corner, and if it resists it has rooted. Keep pets and furniture off until then. First mow comes after it has rooted and reached about three inches.",
      linkLabel: null,
      href: null
    }, {
      question: "What watering does new sod need?",
      answer: "A heavy soak the day it goes down, then daily water for the first two weeks so the soil under the sod stays damp, not just the blades. After it roots, less often and more deeply. Watering is what decides whether sod takes, and it is the homeowner's job — a hot dry week without it will lose the lawn.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send a photo and rough square footage.",
    closeBody: "We will tell you whether the ground needs work before anything gets laid."
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/service-data-landscape.js", error: String((e && e.message) || e) }); }

// ui_kits/website/service-data-other.js
try { (() => {
/* Commercial service records. EVERY page in this file is for a service that has never
   been confirmed as offered — each carries a page-level notConfirmed banner. */
const UNCONFIRMED_COMM = "[VERIFY COMMERCIAL WORK IS REAL REVENUE] — this branch was inferred from photographs of a condominium property, never confirmed. Confirm before it publishes.";
window.SERVICES_OTHER = {
  "commercial-landscaping": {
    navGroup: "Commercial",
    shortName: "commercial landscaping",
    eyebrow: "Commercial · Landscaping",
    title: "Improvements, not just upkeep.",
    lede: "Landscape installation, renovation and hardscaping for commercial and managed properties across the Harrisburg area.",
    notConfirmed: UNCONFIRMED_COMM,
    hero: "commercial-property-beds.jpg",
    heroAlt: "Planting beds and walkway at a commercial building entrance",
    heroCredit: "Entry beds and walks",
    convertTitle: "Property looking tired?",
    convertBody: "Entrances and signage beds are what tenants and visitors actually see. Send photos and we will scope what a renovation would take.",
    convertCta: "Request a proposal",
    detailEyebrow: "Scope",
    detailTitle: "What commercial project work covers.",
    detail: [["Renovation", "[VERIFY WHETHER PHASED RENOVATION OF EXISTING LANDSCAPING IS OFFERED.]"], ["Entrances & signage beds", "[VERIFY CAPABILITY.] Highest-visibility area on most commercial properties."], ["Hardscape", "[VERIFY WHETHER COMMERCIAL WALKWAYS, WALLS AND PADS ARE UNDERTAKEN.]"], ["Grading & drainage", "[VERIFY COMMERCIAL DRAINAGE CAPABILITY.]"], ["Phasing", "[VERIFY WHETHER WORK CAN BE PHASED across budget years.]"], ["Working around operations", "[VERIFY SCHEDULING FLEXIBILITY — after hours, weekends, around tenant access.]"]],
    detailNote: "[VERIFY ALL COMMERCIAL PROJECT CAPABILITY WITH DORIAN.]",
    faq: [{
      question: "What commercial landscaping projects do you handle?",
      answer: "[VERIFY PROJECT TYPES AND SCALE ACTUALLY UNDERTAKEN.] Be specific and honest here — a property manager will ask for a comparable reference, and a list that overstates capability costs more than a short one.",
      linkLabel: null,
      href: null
    }, {
      question: "Can you renovate existing landscaping instead of replacing it?",
      answer: "[VERIFY RENOVATION CAPABILITY AND PHASING.] Most commercial properties do not need a full replacement — they need the entrances and signage beds brought back, which is a fraction of the cost and most of the visible improvement.",
      linkLabel: null,
      href: null
    }, {
      question: "Do you provide installation and ongoing maintenance?",
      answer: "[VERIFY WHETHER BOTH ARE OFFERED UNDER ONE RELATIONSHIP.] The practical benefit is that whoever installed the plantings is the one keeping them alive, which removes the argument about why something died.",
      linkLabel: "Grounds maintenance",
      href: "/commercial/maintenance"
    }, {
      question: "Can you handle grading, drainage and hardscaping too?",
      answer: "[VERIFY COMMERCIAL HARDSCAPE AND DRAINAGE CAPABILITY.] On commercial sites drainage is usually the underlying problem — standing water in a lot or against a walkway is a liability question as much as an appearance one.",
      linkLabel: "Grading & drainage",
      href: "/grading-drainage"
    }, {
      question: "How is a commercial project estimated?",
      answer: "[VERIFY THE COMMERCIAL ESTIMATE PROCESS — site walk, written scope, whether drawings are provided, and typical turnaround.] Property managers usually need something they can put in front of a board, so what the proposal contains matters.",
      linkLabel: null,
      href: null
    }, {
      question: "Can work be phased around budget or operations?",
      answer: "[VERIFY PHASING AND SCHEDULING FLEXIBILITY.] Most associations approve capital work a year at a time, so being able to split a project across two budget years is often what makes it happen at all.",
      linkLabel: null,
      href: null
    }],
    closeTitle: "Send photos of the property.",
    closeBody: "Entrances, beds and anything that is failing. We will scope it."
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/service-data-other.js", error: String((e && e.message) || e) }); }

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.ProjectTile = __ds_scope.ProjectTile;

__ds_ns.QuestionList = __ds_scope.QuestionList;

__ds_ns.ReviewQuote = __ds_scope.ReviewQuote;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.TownEntry = __ds_scope.TownEntry;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.EstimateForm = __ds_scope.EstimateForm;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.MobileCallBar = __ds_scope.MobileCallBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();

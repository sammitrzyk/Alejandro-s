/* Converts a React-style camelCase style object into an inline CSS string, the same way
   React serializes the `style` prop. Lets the prototype's inline style objects be ported
   into .astro templates almost unchanged, without depending on any framework at runtime. */

const UNITLESS = new Set([
  "animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice",
  "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns",
  "flex", "flexGrow", "flexOrder", "flexShrink", "fontWeight", "gridArea", "gridColumn",
  "gridColumnEnd", "gridColumnSpan", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowSpan",
  "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows",
  "zIndex", "zoom", "WebkitLineClamp",
]);

function kebab(key: string): string {
  if (key.startsWith("--")) return key;
  return key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

export type StyleObject = Record<string, string | number | undefined | null | false>;

export function sx(obj?: StyleObject | null): string {
  if (!obj) return "";
  let out = "";
  for (const key in obj) {
    const val = obj[key];
    if (val === undefined || val === null || val === false || val === "") continue;
    const prop = kebab(key);
    const value = typeof val === "number" && !UNITLESS.has(key) ? `${val}px` : val;
    out += `${prop}:${value};`;
  }
  return out;
}

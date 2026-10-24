/** Thin wrapper over Lucide. Requires the Lucide UMD script on the page. */
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "phone", "arrow-right", "chevron-down". */
  name: string;
  size?: number;
  /** 1.5 is the house weight. Do not use 2 — it reads heavy against the hairline system. */
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;

/** Small uppercase label that sits above a heading and states a fact, not a slogan. */
export interface EyebrowProps {
  children: React.ReactNode;
  tone?: "default" | "brand" | "accent" | "inverse";
  /** Prefix with a 28px hairline. Use in dark sections and hero units. */
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;

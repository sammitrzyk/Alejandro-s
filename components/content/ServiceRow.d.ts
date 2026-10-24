/** Full-width editorial service row: copy one side, photograph the other. Replaces the three-card grid. */
export interface ServiceRowProps {
  /** Numeric marker, e.g. "01". */
  index?: string;
  title: string;
  summary: string;
  /** Short factual sub-services, 3-5 max. Rendered as a gold-dotted inline list. */
  points?: string[];
  image: string;
  alt: string;
  href?: string;
  /** Alternate true/false down a stack so the rhythm reverses. */
  flip?: boolean;
  style?: React.CSSProperties;
}
export declare function ServiceRow(props: ServiceRowProps): JSX.Element;

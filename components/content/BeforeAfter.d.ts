/** Draggable before/after comparison. Only for genuine pairs shot from the same position. */
export interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  /** State what changed and where, e.g. "Cracked slab replaced with a 480 sq ft paver patio. Mechanicsburg." */
  caption?: string;
  ratio?: string;
  style?: React.CSSProperties;
}
export declare function BeforeAfter(props: BeforeAfterProps): JSX.Element;

/** Fixed two-up call/estimate bar. Renders only below `hideAbove` (900px by default). */
export interface MobileCallBarProps {
  phone?: string;
  estimateHref?: string;
  onNavigate?: (href: string) => void;
  /** Viewport width at and above which the bar is not rendered. */
  hideAbove?: number;
  /** Scroll distance in px before the bar slides up. Keeps it off the hero. Default 400. */
  revealAfter?: number;
  style?: React.CSSProperties;
}
export declare function MobileCallBar(props: MobileCallBarProps): JSX.Element;

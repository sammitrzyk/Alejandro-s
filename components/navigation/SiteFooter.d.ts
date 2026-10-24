/** Dark footer: contact block, four link columns, optional town list, legal line. */
export interface SiteFooterProps {
  phone?: string;
  email?: string;
  /** Town names rendered as one middot-separated run of text — a readable line, not a
   *  four-column grid of bare links (that pattern was rejected as a doorway page). */
  towns?: string[];
  logo?: string;
  /** Intercepts navigation for click-through prototypes. Mirrors SiteHeader. */
  onNavigate?: (href: string) => void;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;

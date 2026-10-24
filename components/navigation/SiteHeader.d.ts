/**
 * Site header with a three-branch mega-nav, persistent phone number and estimate CTA.
 * @startingPoint section="Navigation" subtitle="Header with mega-nav, footer, sticky mobile call bar" viewport="700x300"
 */
export interface SiteHeaderProps {
  /** Displayed and used for the tel: link. Must be the real number. */
  phone?: string;
  /** True on pages whose hero is a full-bleed photograph — header sits over it, transparent. */
  overlay?: boolean;
  /** Label of the current section, e.g. "Hardscaping". */
  active?: string;
  logo?: string;
  /** Intercepts navigation for click-through prototypes. */
  onNavigate?: (href: string) => void;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;

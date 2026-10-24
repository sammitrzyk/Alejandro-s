/** Eyebrow + serif H2 + optional lead paragraph. The standard opener for any section. */
export interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Left is the default and the house style. Centre only for full-width CTA bands. */
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** Optional trailing element, usually a Button. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;

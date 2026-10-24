/**
 * Primary action control. Square corners, uppercase Archivo, five variants.
 * @startingPoint section="Core" subtitle="Buttons, eyebrows, section heads and stat rows" viewport="700x260"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = green fill (default action). accent = gold fill, max ONE per screen.
   *  outline = hairline on light grounds. inverse = hairline on dark/photo grounds.
   *  solidLight = white fill on dark grounds. */
  variant?: "primary" | "accent" | "outline" | "inverse" | "solidLight";
  size?: "sm" | "md" | "lg";
  /** Renders an <a> instead of a <button>. */
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;

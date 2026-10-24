/** A single customer quote set in the display serif. No stars, no cards, no carousel. */
export interface ReviewQuoteProps {
  /** Verbatim customer words. Trim to one strong sentence rather than paraphrasing. */
  quote: string;
  name: string;
  /** Town — this is what makes the review local proof rather than generic praise. */
  town: string;
  /** What was built, e.g. "Retaining wall". */
  service?: string;
  tone?: "light" | "dark";
  size?: "md" | "lg";
  style?: React.CSSProperties;
}
export declare function ReviewQuote(props: ReviewQuoteProps): JSX.Element;

/** One town on the service-area page. The `notes` prop is what makes it not a doorway page. */
export interface TownEntryProps {
  town: string;
  county: string;
  /** e.g. "7 mi". */
  distance?: string;
  image?: string;
  alt?: string;
  /** Operational specifics for THIS town: permit office, soil, slope, HOA review, frost depth.
   *  Two to four short declarative sentences. Never generic marketing copy. */
  notes: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function TownEntry(props: TownEntryProps): JSX.Element;

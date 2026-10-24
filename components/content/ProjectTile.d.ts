/**
 * A completed project: photograph, town, what was built, and one concrete detail.
 * @startingPoint section="Content" subtitle="Project tiles, service rows, town entries, reviews, before/after" viewport="700x380"
 */
export interface ProjectTileProps {
  image: string;
  alt: string;
  /** Town and state, e.g. "Camp Hill, PA". Always a real location. */
  town: string;
  /** What was built, e.g. "Paver patio & lit seat wall". */
  service: string;
  /** One specific fact — size, material, condition solved. Optional but strongly encouraged. */
  detail?: string;
  href?: string;
  ratio?: string;
  size?: "md" | "lg";
  style?: React.CSSProperties;
}
export declare function ProjectTile(props: ProjectTileProps): JSX.Element;

/** Row of verifiable figures separated by hairlines. Never use for invented numbers. */
export interface StatRowItem { value: string; label: string }
export interface StatRowProps {
  items: StatRowItem[];
  tone?: "light" | "dark";
  style?: React.CSSProperties;
}
export declare function StatRow(props: StatRowProps): JSX.Element;

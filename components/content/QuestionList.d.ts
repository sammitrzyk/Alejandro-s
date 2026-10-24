/** Editorial FAQ: numbered question left, answer and a link to the deeper resource right. */
export interface QuestionItem {
  question: string;
  /** Direct answer, 40-100 words. Must stand alone if extracted by an answer engine —
   *  no "it depends, see below". Never publish an unverified figure here. */
  answer: string;
  linkLabel?: string;
  href?: string;
}
export interface QuestionListProps {
  /** Five to seven on a service page. More than that belongs in Resources. */
  items: QuestionItem[];
  tone?: "light" | "dark";
  eyebrow?: string;
  style?: React.CSSProperties;
}
export declare function QuestionList(props: QuestionListProps): JSX.Element;

/**
 * Labelled form control: text, tel, email, textarea or select.
 * @startingPoint section="Forms" subtitle="Field and the estimate request form" viewport="700x420"
 */
export interface FieldProps {
  label: string;
  name: string;
  type?: "text" | "tel" | "email" | "textarea" | "select";
  placeholder?: string;
  /** Sets expectations, e.g. "We reply the same day, most days." */
  hint?: string;
  /** Required when type is "select". */
  options?: string[];
  rows?: number;
  required?: boolean;
  tone?: "light" | "dark";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;

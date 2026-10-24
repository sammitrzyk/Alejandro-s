/** Five-field estimate request. Qualifies by project type and town, and states what happens next. */
export interface EstimateFormProps {
  tone?: "light" | "dark";
  /** Project-type options. Keep "Not sure yet" — a large share of homeowners genuinely are not. */
  projects?: string[];
  /** Expectation-setting line shown beside the submit button and again after sending.
   *  Defaults to a [VERIFY] marker on purpose — this slot is a customer-facing promise and
   *  must never ship invented copy. Replace only with the real, confirmed process. */
  expectation?: string;
  onSubmit?: (values: Record<string, string>) => void;
  style?: React.CSSProperties;
}
export declare function EstimateForm(props: EstimateFormProps): JSX.Element;

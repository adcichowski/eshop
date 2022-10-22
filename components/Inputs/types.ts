export type InputProps = JSX.IntrinsicElements["input"] & {
  readonly id: string;
  readonly hideLabel?: boolean;
  readonly error?: string;
  readonly text: string | JSX.Element;
};

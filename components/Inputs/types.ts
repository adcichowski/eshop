import type {
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form/dist/types";

export type InputProps =
  | JSX.IntrinsicElements["input"] & {
      readonly id: string;
      readonly hideLabel?: boolean;
      readonly error?: FieldError | string | Merge<FieldError, FieldErrorsImpl>;
      readonly text: string | JSX.Element;
    };

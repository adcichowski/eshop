import type {
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form/dist/types";

export const ErrorInInput = ({
  error,
  ...props
}: {
  readonly error?: FieldError | string | Merge<FieldError, FieldErrorsImpl>;
} & JSX.IntrinsicElements["p"]) => (
  <p role="alert" {...props} className="w-full text-xs text-left text-red-200">
    {error ? String(error) : ""}
  </p>
);

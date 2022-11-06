import type {
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form/dist/types";

export const ErrorInInput = ({
  error,
  id,
}: {
  readonly error?: FieldError | string | Merge<FieldError, FieldErrorsImpl>;
  readonly id: string;
}) => (
  <p
    role="alert"
    aria-describedby={id}
    className="w-full text-xs text-left text-red-200"
  >
    {error ? String(error) : ""}
  </p>
);

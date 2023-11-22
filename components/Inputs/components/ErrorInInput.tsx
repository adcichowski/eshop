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
    className="w-full text-left text-xs text-red-200 first-letter:uppercase"
  >
    {error ? String(error) : ""}
  </p>
);

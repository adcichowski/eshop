export const ErrorInInput = ({
  error,
  ...props
}: { readonly error: string | undefined } & JSX.IntrinsicElements["p"]) => (
  <p role="alert" {...props} className="w-full text-xs text-left text-red-200">
    {error}
  </p>
);

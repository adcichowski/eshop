export const ErrorInInput = ({ error }: { error: string | undefined }) => (
  <p role="alert" className="w-full text-xs text-left text-red-200">
    {error}
  </p>
);

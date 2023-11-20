export type AlertLabel = {
  readonly isOpen: boolean;
  readonly errorIn: undefined | "login" | "register";
};
export const AlertInfo = ({
  errorInForm,
}: {
  readonly errorInForm: AlertLabel["errorIn"];
}) => {
  return !!errorInForm ? (
    <div
      role="alert"
      className="col-span-2 mt-9 w-full rounded-[4px] border-2 border-red-200 py-3 text-center text-red-200"
    >
      The {errorInForm} form contains errors
    </div>
  ) : (
    <></>
  );
};

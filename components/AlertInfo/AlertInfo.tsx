export type AlertLabel = {
  readonly isOpen: boolean;
  readonly errorIn: undefined | "login" | "register";
};
export const AlertInfo = ({
  errorInForm,
}: {
  readonly errorInForm: AlertLabel["errorIn"];
}) => {
  const infoErrors = {
    login: "logowania",
    register: "rejestracji",
  };

  return !!errorInForm ? (
    <div
      role="alert"
      className="w-full border-2 border-red-200 col-span-2 mt-9 text-center text-red-200 py-3 rounded-[4px]"
    >
      Formularz {infoErrors[errorInForm]} zawiera błędy !!!
    </div>
  ) : (
    <></>
  );
};

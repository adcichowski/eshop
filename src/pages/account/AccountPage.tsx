import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import React, { useState } from "react";

export function AccountPage() {
  const [alertLabel, setAlertLabel] = useState<AlertLabel>({
    isOpen: false,
    errorIn: undefined,
  });
  const handleSetAlert =
    (errorIn: "login" | "register") => (isOpen: boolean) => {
      if (alertLabel.errorIn !== errorIn) {
        setAlertLabel({ errorIn, isOpen });
      }
    };
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <AlertInfo errorInForm={alertLabel.errorIn} />
        <div className="grid md:grid-cols-2 sm:mt-16 mt-4 gap-2 grow">
          <LoginForm setAlertInfo={handleSetAlert("login")} />
          <RegisterForm setAlertInfo={handleSetAlert("register")} />
        </div>
      </div>
    </div>
  );
}

type AlertLabel = {
  isOpen: boolean;
  errorIn: undefined | "login" | "register";
};
const AlertInfo = ({ errorInForm }: { errorInForm: AlertLabel["errorIn"] }) => {
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

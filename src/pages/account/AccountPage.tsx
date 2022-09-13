import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import React, { useState } from "react";

export function AccountPage() {
  const [errorInForm, setErrorInForm] = useState<ErrorInForm>(undefined);
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <AlertInfo errorInForm={errorInForm} />
        <div className="grid md:grid-cols-2 sm:mt-16 mt-4 gap-2 grow">
          <LoginForm setFormError={() => setErrorInForm("login")} />
          <RegisterForm setFormError={() => setErrorInForm("register")} />
        </div>
      </div>
    </div>
  );
}

type ErrorInForm = "login" | "register" | undefined;
const AlertInfo = ({ errorInForm }: { errorInForm: ErrorInForm }) => {
  const infoErrors = {
    login: "logowania",
    register: "rejestracji",
  };

  return !!errorInForm ? (
    <div
      role="alert"
      className="w-full border-2 border-red-200 col-span-2 mt-9 text-center text-red-200 py-3 rounded-[4px]"
    >
      Formularz {!!errorInForm && infoErrors[errorInForm]} zawiera błędy !!!
    </div>
  ) : (
    <></>
  );
};

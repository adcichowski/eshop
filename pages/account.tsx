import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import React, { useState } from "react";

export default function AccountPage() {
  const [formError, setFormError] = useState({ isError: false, errorFrom: "" });
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <div
          role="alert"
          className="w-full border-2 border-red col-span-2 mt-9 text-center text-red py-3 rounded-[4px]"
        >
          Formularz logowania zawiera błędy
        </div>
        <div className="grid md:grid-cols-2 sm:mt-16 mt-4 gap-2 grow">
          <LoginForm setFormError={setFormError} />
          <RegisterForm setFormError={setFormError} />
        </div>
      </div>
    </div>
  );
}

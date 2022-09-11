import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import React from "react";

export default function AccountPage() {
  return (
    <div className="grid md:grid-cols-2 justify-items-center sm:mt-16 mt-4 gap-2 mx-2 grow">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

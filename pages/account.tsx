import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import React from "react";

export default function AccountPage() {
  return (
    <div className="grid md:grid-cols-2 justify-items-center mt-16 grow">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

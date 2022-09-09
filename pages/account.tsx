import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import React from "react";

export default function AccountPage() {
  return (
    <div className="grid md:grid-cols-2 justify-items-center mt-16 grow">
      <LoginForm />
    </div>
  );
}

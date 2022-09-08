import { AccountForms } from "components/Forms/AccountForm/AccountForms";
import { LoginForm } from "components/Forms/components/LoginForm";
import { RegisterForm } from "components/Forms/components/RegisterForm";
import React from "react";

export default function AccountPage() {
  return (
    <div className="grid md:grid-cols-2 justify-items-center mt-16 grow">
      <AccountForms />
    </div>
  );
}

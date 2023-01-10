import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import { useState } from "react";
import Dynamic from "next/dynamic";
import type { NewsletterProps } from "../../Forms/Newsletter/Newsletter";
import { AlertInfo } from "components/AlertInfo/AlertInfo";
import { useAlertInfo } from "components/AlertInfo/useAlertInfo";

const NewsletterComp = Dynamic<NewsletterProps>(
  () =>
    import(
      /* webpackChunkName: "newsletter" */
      "../../Forms/Newsletter/Newsletter"
    ).then((module) => module.Newsletter),
  {
    ssr: false,
  }
);

export function AccountPage() {
  const { alertLabel, handleSetAlert } = useAlertInfo();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-3/4 mb-12">
          <AlertInfo errorInForm={alertLabel.errorIn} />
          <div className="grid md:grid-cols-2 sm:mt-16 mt-4 gap-2 grow">
            <LoginForm setAlertInfo={handleSetAlert("login")} />
            <RegisterForm setAlertInfo={handleSetAlert("register")} />
          </div>
        </div>
        <NewsletterComp HeaderTag="h3" />
      </div>
    </>
  );
}

import { Button } from "components/Button/Button";
import { StaticLink } from "components/StaticLink/StaticLink";
import React from "react";
import { useAccountForm } from "./useAccountForm";

export function AccountForms() {
  const useLoginForm = useAccountForm("login");
  const useRegisterForm = useAccountForm("register");
  return (
    <section className="max-w-[435px] w-full" aria-labelledby="sectionLogin">
      <form noValidate>
        <fieldset className="flex flex-col items-center text-left gap-5">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zaloguj się
          </h2>
          {useLoginForm.fields.map(({ name, type }) => (
            <label className="flex w-full flex-col">
              <span className="text-[18px] mb-[6px]">{name}:</span>
              <input
                className="border text-sm border-gray rounded-sm py-3 px-2"
                type={type}
              />
            </label>
          ))}
        </fieldset>
        <Button
          variant="primary"
          className="px-12 py-4 rounded-[10px] mt-6 text-lg"
        >
          Zaloguj się
        </Button>
        <p className="mt-3">
          Nie pamiętasz?{" "}
          <StaticLink aria-label="to remind account" href="/remaind">
            <span className="font-semibold cursor-pointer">Kliknij Tutaj.</span>
          </StaticLink>
        </p>
      </form>
      <form noValidate>
        <fieldset className="flex flex-col items-center text-left gap-5">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zaloguj się
          </h2>
          {useLoginForm.fields.map(({ name, type }) => (
            <label className="flex w-full flex-col">
              <span className="text-[18px] mb-[6px]">{name}:</span>
              <input
                className="border text-sm border-gray rounded-sm py-3 px-2"
                type={type}
              />
            </label>
          ))}
        </fieldset>
        <Button
          variant="primary"
          className="px-12 py-4 rounded-[10px] mt-6 text-lg"
        >
          Zaloguj się
        </Button>
        <p className="mt-3">
          Nie pamiętasz?{" "}
          <StaticLink aria-label="to remind account" href="/remaind">
            <span className="font-semibold cursor-pointer">Kliknij Tutaj.</span>
          </StaticLink>
        </p>
      </form>
    </section>
  );
}

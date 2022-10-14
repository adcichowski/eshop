import { Button } from "components/Button/Button";
import { Input } from "components/Inputs/Inputs";
import { StaticLink } from "components/StaticLink/StaticLink";
import React, { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports -- Problem with vercel deploy
import { GenerateFields } from "types/types";

import { loginAccountSchema } from "../schemas/loginAccountSchema";
import { useForm } from "../useForm";

const fields = {
  email: { text: "E-mail:", type: "email" },
  password: { text: "Hasło:", type: "password" },
};

export function LoginForm({
  setAlertInfo,
}: {
  readonly setAlertInfo: (isOpen: boolean) => void;
}) {
  const { errors, register, formState } = useForm(loginAccountSchema);

  const isErrorInForm = !!Object.values(errors).length;

  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors, setAlertInfo, isErrorInForm]);

  return (
    <section className="max-w-[435px] w-full " aria-labelledby="sectionLogin">
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zaloguj się
          </h2>
          {Object.entries(fields).map(([name, { text, type }]) => (
            <Input
              error={String(errors?.[name]?.message ?? "")}
              key={`${name}Login`}
              id={`${name}Login`}
              {...register(name)}
              aria-describedby={`${name}HintLogin`}
              text={text}
              type={type}
              data-testid={`${name}Login`}
            />
          ))}
        </fieldset>
        <Button
          data-testid="buttonLogin"
          className="md:px-16 px-8 py-2 md:py-4 mt-6"
          disabled={isErrorInForm}
        >
          Zaloguj się
        </Button>
        <p className="mt-3">
          Nie pamiętasz hasła?{" "}
          <StaticLink aria-label="to remind account" href="/remaind">
            <span className="font-semibold cursor-pointer">Kliknij Tutaj.</span>
          </StaticLink>
        </p>
      </form>
    </section>
  );
}

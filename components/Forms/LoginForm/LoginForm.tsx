import { Button } from "components/Button/Button";
import { Input } from "components/Inputs/Inputs";
import { StaticLink } from "components/StaticLink/StaticLink";
import React, { useEffect } from "react";
import type { GenerateFields } from "types/utils";

import { loginAccountSchema } from "../schemas/loginAccountSchema";
import { useForm } from "../useForm";

export function LoginForm({
  setAlertInfo,
}: {
  setAlertInfo: (isOpen: boolean) => void;
}) {
  const { errors, handleSubmit, register, formState } =
    useForm(loginAccountSchema);

  const fields: GenerateFields<typeof loginAccountSchema> = {
    email: { text: "E-mail:", type: "email" },
    password: { text: "Hasło:", type: "password" },
  };
  const isErrorInForm = !!Object.values(errors).length;

  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors]);

  return (
    <section className="max-w-[435px] w-full " aria-labelledby="sectionLogin">
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit((data) => console.log(data))();
        }}
      >
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zaloguj się
          </h2>
          {Object.entries(fields).map(([name, props]) => (
            <Input
              error={String(errors?.[name]?.message ?? "")}
              key={`${name}Login`}
              id={`${name}Login`}
              {...props}
              {...register(name)}
              aria-describedby={`${name}HintLogin`}
              data-testid={`${name}Login`}
            />
          ))}
        </fieldset>
        <Button data-testid="buttonLogin" disabled={isErrorInForm}>
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

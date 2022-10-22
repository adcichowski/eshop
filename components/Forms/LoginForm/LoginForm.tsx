import { Button } from "components/Button/Button";
import { Input } from "components/Inputs/components/Input";
import { StaticLink } from "components/StaticLink/StaticLink";
import React, { useEffect } from "react";

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
  const { errors, register, formState, handleSubmit } =
    useForm(loginAccountSchema);

  const isErrorInForm = !!Object.values(errors).length;

  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors, setAlertInfo, isErrorInForm]);

  return (
    <section className="max-w-[435px] w-full " aria-labelledby="sectionLogin">
      <form noValidate>
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zaloguj się
          </h2>
          {Object.entries(fields).map(([name, { text, type }]) => (
            <div className="flex w-full flex-col" key={`${name}Login`}>
              <Input
                error={String(errors?.[name]?.message ?? "")}
                id={`${name}Login`}
                {...register(name)}
                aria-describedby={`${name}HintLogin`}
                text={text}
                type={type}
              />
            </div>
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

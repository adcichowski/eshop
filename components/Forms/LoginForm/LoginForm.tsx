import { Button } from "components/Button/Button";
import { Input } from "components/Inputs/Inputs";
import { StaticLink } from "components/StaticLink/StaticLink";
import React from "react";
import type { GenerateFields } from "types/utils";

import { loginAccountSchema } from "../schemas/loginAccountSchema";
import { useForm } from "../useForm";

export function LoginForm() {
  const { errors, handleSubmit, register } = useForm(loginAccountSchema);

  const fields: GenerateFields<typeof loginAccountSchema> = {
    email: { text: "E-mail", type: "email" },
    password: { text: "Hasło", type: "password" },
  };

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
            <Input key={name} {...props} {...register(name)} />
          ))}
        </fieldset>
        <Button variant="primary">Zaloguj się</Button>
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

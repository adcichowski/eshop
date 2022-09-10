import { Button } from "components/Button/Button";
import { Input, InputsRender } from "components/Inputs/Inputs";
import { StaticLink } from "components/StaticLink/StaticLink";
import React from "react";
import { GenerateFields } from "types/utils";
import { loginAccountSchema } from "../schemas/loginAccountSchema";
import { registerAccountSchema } from "../schemas/registerAccountSchema";
import { useForm } from "../useForm";

export function RegisterForm() {
  const { errors, handleSubmit, register } = useForm(registerAccountSchema);

  const fields: GenerateFields<typeof registerAccountSchema> = {
    email: { text: "E-mail", type: "email" },
    password: { text: "Hasło", type: "password" },
    statueCheck: {
      text: "*Akceptuję regulamin serwisu i zapoznałem się z informacjami dotyczącymi moich danych osobowych poniżej.",
      type: "checkbox",
      labelProps: { className: "flex flex-row-reverse gap-1 text-xs" },
    },
    newsletter: { text: "newsletter", type: "checkbox" },
  };
  return (
    <section className="max-w-[435px] w-full" aria-labelledby="sectionLogin">
      <form noValidate>
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zarejestruj się
          </h2>
          {Object.entries(fields).map(([name, props]) => (
            <InputsRender key={name} {...props} {...register(name)} />
          ))}
        </fieldset>
        <Button
          variant="primary"
          className="px-12 py-4 rounded-[10px] mt-6 text-lg"
        >
          Zaloguj się
        </Button>
      </form>
    </section>
  );
}

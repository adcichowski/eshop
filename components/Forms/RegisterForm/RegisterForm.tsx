import { Button } from "components/Button/Button";
import { Checkbox, Input, InputsRender } from "components/Inputs/Inputs";
import { GenerateFields } from "types/utils";

import { registerAccountSchema } from "../schemas/registerAccountSchema";
import { useForm } from "../useForm";

export function RegisterForm() {
  const { errors, handleSubmit, register } = useForm(registerAccountSchema);
  const fields: GenerateFields<typeof registerAccountSchema> = {
    email: { text: "E-mail", type: "email" },
    password: { text: "Hasło", type: "password" },
    passwordConfirmation: { text: "Powtórz hasło:", type: "password" },
    statueCheck: {
      text: "*Akceptuję regulamin serwisu i zapoznałem się z informacjami dotyczącymi moich danych osobowych poniżej.",
      type: "checkbox",
    },
    newsletter: {
      text: (
        <span>
          Chcę zapisać się do Newsletter, aby otrzymywać informacje o nowościach
          i promocjach oraz otrzymać kupon rabatowy w wysokości
          <span className="text-primary"> 10%</span> na pierwsze zakupy.
        </span>
      ),
      type: "checkbox",
    },
  };
  return (
    <section className="max-w-[435px] w-full" aria-labelledby="sectionRegister">
      <form noValidate>
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionRegister" className="text-2xl self-stretch">
            Zarejestruj się
          </h2>
          {Object.entries(fields).map(([name, props]) => (
            <InputsRender key={name} {...props} {...register(name)} />
          ))}
        </fieldset>
        <Button
          variant="secondary"
          className="px-12 py-4 rounded-[10px] mt-6 text-lg"
        >
          Zarejestruj się
        </Button>
      </form>
    </section>
  );
}

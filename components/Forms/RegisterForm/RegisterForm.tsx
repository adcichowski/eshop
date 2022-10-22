import { Button } from "components/Button/Button";
import { InputsRender } from "components/Inputs/Inputs";
import { useEffect } from "react";

import { registerAccountSchema } from "../schemas/registerAccountSchema";
import { useForm } from "../useForm";

const fields = {
  email: {
    text: "E-mail:",
    type: "email",
  },
  password: { text: "Hasło:", type: "password" },
  passwordConfirmation: { text: "Powtórz hasło:", type: "password" },
  statueCheck: {
    text: "*Akceptuję regulamin serwisu i zapoznałem się z informacjami dotyczącymi moich danych osobowych poniżej.",
    type: "checkbox",
  },
  newsletter: {
    text: (
      <span>
        Chcę zapisać się do Newsletter, aby otrzymywać informacje o nowościach i
        promocjach oraz otrzymać kupon rabatowy w wysokości
        <span className="text-primary"> 10%</span> na pierwsze zakupy.
      </span>
    ),
    type: "checkbox",
  },
};

export function RegisterForm({
  setAlertInfo,
}: {
  readonly setAlertInfo: (isOpen: boolean) => void;
}) {
  const { errors, register, formState, handleSubmit } = useForm(
    registerAccountSchema
  );
  const isErrorInForm = !!Object.values(errors).length;
  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors, isErrorInForm, setAlertInfo]);
  return (
    <section
      className="max-w-[435px] w-full mt-10 md:mt-0 md:justify-self-end"
      aria-labelledby="sectionRegister"
    >
      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit;
        }}
      >
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionRegister" className="text-2xl self-stretch">
            Zarejestruj się
          </h2>
          {Object.entries(fields).map(([name, { text, type }]) => {
            return (
              <div className="flex w-full flex-col" key={`${name}Register`}>
                <InputsRender
                  error={String(errors?.[name]?.message ?? "")}
                  id={`${name}Register`}
                  aria-describedby={`${name}HintRegister`}
                  {...register(name)}
                  text={text}
                  type={type}
                />
              </div>
            );
          })}
        </fieldset>
        <Button
          className="md:px-16 px-8 py-2 md:py-4 mt-6"
          data-testid="buttonRegister"
          disabled={!!Object.values(errors).length}
        >
          Zarejestruj się
        </Button>
      </form>
    </section>
  );
}

import { Button } from "components/Button/Button";
import { Input } from "components/Inputs/components/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { objectKeys } from "utils/utils";
import { loginAccountSchema } from "../schemas/loginAccountSchema";
import { useForm } from "../useForm";

const fields = {
  email: { text: "Email:", type: "email" },
  password: { text: "Hasło:", type: "password" },
};

export function LoginForm({
  setAlertInfo,
}: {
  readonly setAlertInfo: (isOpen: boolean) => void;
}) {
  const { errors, register, formState, handleSubmit } = useForm<{
    readonly email: string;
    readonly password: string;
  }>(loginAccountSchema);
  const isErrorInForm = !!Object.values(errors).length;
  const onSubmit = async (
    data: { readonly email: string; readonly password: string },
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    await signIn("credentials", data);
  };
  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors, setAlertInfo, isErrorInForm]);
  return (
    <section
      className="max-w-[435px] w-full shrink-0"
      aria-labelledby="sectionLogin"
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col items-center text-left gap-2">
          <h2 id="sectionLogin" className="text-2xl self-stretch">
            Zaloguj się
          </h2>
          {objectKeys(fields).map((name) => (
            <div className="flex w-full flex-col" key={`${name}Login`}>
              <Input
                error={errors[name]?.message}
                id={`${name}Login`}
                {...register(name)}
                aria-describedby={`${name}HintLogin`}
                text={fields[name].text}
                type={fields[name].type}
              />
            </div>
          ))}
        </fieldset>
        <Button
          type="submit"
          data-testid="buttonLogin"
          className="md:px-16 px-8 py-2 md:py-4 mt-6"
        >
          Zaloguj się
        </Button>
        <p className="mt-3">
          Nie pamiętasz hasła?{" "}
          <Link aria-label="to remind account" href="/remaind">
            <span className="font-semibold cursor-pointer">Kliknij Tutaj.</span>
          </Link>
        </p>
      </form>
    </section>
  );
}

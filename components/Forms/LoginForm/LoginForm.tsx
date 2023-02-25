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
      className="w-full max-w-[435px] shrink-0"
      aria-labelledby="sectionLogin"
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col items-center gap-2 text-left">
          <h2 id="sectionLogin" className="self-stretch text-2xl">
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
          className="mt-6 px-8 py-2 md:px-16 md:py-4"
        >
          Zaloguj się
        </Button>
        <p className="mt-3">
          Nie pamiętasz hasła?{" "}
          <Link aria-label="to remind account" href="/remaind">
            <span className="cursor-pointer font-semibold">Kliknij Tutaj.</span>
          </Link>
        </p>
      </form>
    </section>
  );
}

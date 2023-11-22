import { Input } from "components/Inputs/components/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { objectKeys } from "utils/utils";
import { loginAccountSchema } from "../schemas/loginAccountSchema";
import { useForm } from "../useForm";
import { Action } from "components/Action/Action";
import { generateUrlForToast } from "context/ToastContext/utilsToast";

const fields = {
  email: { text: "Email:", type: "email" },
  password: { text: "Password:", type: "password" },
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
    e?: React.BaseSyntheticEvent,
  ) => {
    e?.preventDefault();
    await signIn("credentials", {
      ...data,
      callbackUrl: generateUrlForToast("/", "LOG_IN_SUCCESS"),
    });
  };
  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors]);
  return (
    <section
      className="w-full max-w-[435px] shrink-0"
      aria-labelledby="sectionLogin"
    >
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col items-center gap-2 text-left">
          <h2 id="sectionLogin" className="self-stretch text-2xl">
            Sign in
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
        <div className="mt-3">
          <Action
            as="button"
            disabled={Boolean(Object.values(errors).length)}
            type="submit"
            data-testid="buttonLogin"
          >
            <div className="py-1 px-8 text-lg">Log in</div>
          </Action>
        </div>
        <p className="mt-3">
          Forgot password?{" "}
          <Link aria-label="to remind account" href="/remaind">
            <span className="py-2 px-8 text-lg">Click here.</span>
          </Link>
        </p>
      </form>
    </section>
  );
}

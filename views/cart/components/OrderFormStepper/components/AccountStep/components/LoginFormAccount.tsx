"use client";

import { Action } from "components/Action/Action";
import { loginAccountSchema } from "components/Forms/schemas/loginAccountSchema";
import React from "react";
import { FormAccountWrapper } from "./FormAccountWrapper";
import { useForm } from "components/Forms/useForm";
import { Input } from "components/Inputs/components/Input";
import { generateUrlForToast } from "context/ToastContext/utilsToast";
import { signIn } from "next-auth/react";

export function LoginFormAccount() {
  const { errors, register, handleSubmit } = useForm<{
    readonly email: string;
    readonly password: string;
  }>(loginAccountSchema);
  const onSubmit = async (
    data: { readonly email: string; readonly password: string },
    e?: React.BaseSyntheticEvent,
  ) => {
    e?.preventDefault();
    await signIn("credentials", {
      ...data,
      callbackUrl: generateUrlForToast("/cart/account", "LOG_IN_SUCCESS"),
    });
  };
  return (
    <div className="w-full md:w-80">
      <FormAccountWrapper title="Have an account">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.email?.message}
            {...register("email")}
            className="flex w-full"
            id="email"
            text="Email:"
          />
          <Input
            error={errors.password?.message}
            {...register("password")}
            className="flex"
            id="password"
            type="password"
            text="Password:"
          />
          <div className="mt-4">
            <Action as="button" fullWidth type="submit">
              <div className="py-1 text-base"> Sign up</div>
            </Action>
          </div>
        </form>
      </FormAccountWrapper>
    </div>
  );
}

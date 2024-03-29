import { InputsRender } from "components/Inputs/Inputs";
import { useEffect } from "react";
import { registerAccountSchema } from "../schemas/registerAccountSchema";
import { useForm } from "../useForm";
import { objectKeys } from "utils/utils";
import { Action } from "components/Action/Action";
import { generateUrlForToast } from "context/ToastContext/utilsToast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const fields = {
  email: {
    text: "E-mail:",
    type: "email",
  },
  password: { text: "Password:", type: "password" },
  passwordConfirmation: { text: "Repeat password:", type: "password" },
  statueCheck: {
    text: "*I accept the terms and conditions of the service and have read the information regarding my personal data below.",
    type: "checkbox",
  },
  newsletter: {
    text: (
      <span>
        I want to sign up for the newsletter to receive updates and promotions,
        as well as receive a discount coupon worth
        <span className="text-primary"> 10%</span> on first purchase.
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
  const { push } = useRouter();
  const { errors, register, formState, handleSubmit } = useForm(
    registerAccountSchema,
  );
  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    const account = { email: data.email, password: data.password };
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return push(generateUrlForToast("/account", "REGISTER_ERROR"));
    }
    if (res.ok) {
      await signIn("credentials", {
        ...account,
        callbackUrl: generateUrlForToast("/", "LOG_IN_SUCCESS"),
      });
    }
  });

  const isErrorInForm = !!Object.values(errors).length;

  useEffect(() => {
    if (isErrorInForm) {
      setAlertInfo(isErrorInForm);
    }
  }, [formState.errors]);

  return (
    <section
      className="mt-10 w-full max-w-[435px] md:mt-0 md:justify-self-end"
      aria-labelledby="sectionRegister"
    >
      <form autoComplete="off" noValidate onSubmit={onSubmit}>
        <fieldset className="flex shrink-0 flex-col items-center gap-2 text-left">
          <h2 id="sectionRegister" className="self-stretch text-2xl">
            Register in
          </h2>
          {objectKeys(fields).map((name) => (
            <div className="flex w-full flex-col" key={`${name}Register`}>
              <InputsRender
                error={errors[name]?.message}
                id={`${name}Login`}
                {...register(name)}
                aria-describedby={`${name}HintRegister`}
                text={fields[name].text}
                type={fields[name].type}
              />
            </div>
          ))}
        </fieldset>
        <div className="mt-3">
          <Action
            as="button"
            type="submit"
            data-testid="buttonRegister"
            disabled={!!Object.values(errors).length}
          >
            <div className="py-1 px-8 text-lg">Sign up</div>
          </Action>
        </div>
      </form>
    </section>
  );
}

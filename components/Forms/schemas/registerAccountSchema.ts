import * as yup from "yup";
export const registerAccountSchema = yup.object({
  email: yup
    .string()
    .required("Email jest wymagany.")
    .matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, {
      message: "Nieprawidłowy adres e-mail.",
    }),

  password: yup
    .string()
    .required("Hasło jest wymagane.")
    .max(60, "Hasło nie może mieć więcej niż 60 znaków.")
    .min(8, "Hasło musi mieć więcej niż 8 znaków."),
  passwordConfirmation: yup
    .string()
    .required("Powtórz hasło jest wymagane.")
    .oneOf([yup.ref("password"), null], "Hasła muszą być takie same."),

  statueCheck: yup
    .boolean()
    .isTrue("Pole musi być zaznaczone.")
    .required("Pole musi być zaznaczone."),
  newsletter: yup.boolean(),
});

export type RegisterAccountSchema = yup.InferType<typeof registerAccountSchema>;

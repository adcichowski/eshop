import * as yup from "yup";
export const loginAccountSchema = yup.object({
  email: yup
    .string()
    .required("Email jest wymagany.")
    .matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, {
      message: "Nieprawidłowy adres e-mail.",
    }),
  password: yup
    .string()
    .required("Hasło jest wymagane.")
    .max(60, "Hasło musi mieć mniej niż 60 znaków.")
    .min(8, "Hasło musi mieć więcej niż 8 znaków."),
});

export type LoginAccountSchema = yup.InferType<typeof loginAccountSchema>;

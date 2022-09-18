import * as yup from "yup";
export const defaultSchema = yup.object({
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
});

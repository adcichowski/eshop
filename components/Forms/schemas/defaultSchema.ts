import * as Yup from "yup";
export const defaultSchema = {
  email: Yup.string()
    .required("Email jest wymagany.")
    .matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, {
      message: "Nieprawidłowy adres e-mail.",
    }),
  password: Yup.string()
    .required("Hasło jest wymagane.")
    .max(60, "Hasło nie może mieć więcej niż 60 znaków.")
    .min(8, "Hasło musi mieć więcej niż 8 znaków."),
};

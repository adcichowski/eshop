import * as yup from "yup";
import { defaultSchema } from "./defaultSchema";
export const registerAccountSchema = yup
  .object({
    passwordConfirmation: yup
      .string()
      .required("Powtórz hasło jest wymagane.")
      .oneOf([yup.ref("password"), null], "Hasła muszą być takie same."),

    statueCheck: yup
      .boolean()
      .isTrue("Pole musi być zaznaczone.")
      .required("Pole musi być zaznaczone."),
    newsletter: yup.boolean(),
  })
  .concat(defaultSchema);

export type RegisterAccountSchema = yup.InferType<typeof registerAccountSchema>;

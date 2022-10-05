import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "Yup";
export const registerAccountSchema = Yup.object({
  passwordConfirmation: Yup.string()
    .required("Powtórz hasło jest wymagane.")
    .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same."),

  statueCheck: Yup.boolean()
    .isTrue("Pole musi być zaznaczone.")
    .required("Pole musi być zaznaczone."),
  newsletter: Yup.boolean(),
}).concat(defaultSchema);

export type RegisterAccountSchema = Yup.InferType<typeof registerAccountSchema>;

import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "yup";
export const registerAccountSchema = Yup.object({
  passwordConfirmation: Yup.string()
    .required("Powtórz hasło jest wymagane.")
    .oneOf([Yup.ref("password")], "Hasła muszą być takie same."),

  statueCheck: Yup.boolean()
    .isTrue("Pole musi być zaznaczone.")
    .required("Pole musi być zaznaczone."),
  newsletter: Yup.boolean(),
  ...defaultSchema,
});

export type RegisterAccountSchema = Yup.InferType<typeof registerAccountSchema>;

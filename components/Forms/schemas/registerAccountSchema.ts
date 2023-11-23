import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "yup";
export const registerAccountSchema = Yup.object({
  passwordConfirmation: Yup.string()
    .required()
    .label("Repeat password")
    .oneOf([Yup.ref("password")], "Passwords must be same."),

  statueCheck: Yup.boolean()
    .isTrue("Field is required.")
    .required()
    .label("Field"),
  newsletter: Yup.boolean(),
  ...defaultSchema,
});

export type RegisterAccountSchema = Yup.InferType<typeof registerAccountSchema>;

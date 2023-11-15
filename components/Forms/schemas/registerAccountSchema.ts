import { defaultSchema } from "components/Forms/schemas/defaultSchema";
import * as Yup from "yup";
export const registerAccountSchema = Yup.object({
  passwordConfirmation: Yup.string()
    .required("Repeat password is required.")
    .oneOf([Yup.ref("password")], "Passwords must be same."),

  statueCheck: Yup.boolean()
    .isTrue("Field is required.")
    .required("Field is required."),
  newsletter: Yup.boolean(),
  ...defaultSchema,
});

export type RegisterAccountSchema = Yup.InferType<typeof registerAccountSchema>;

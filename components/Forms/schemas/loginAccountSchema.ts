import * as yup from "yup";
export const loginAccountSchema = yup
  .object({
    email: yup
      .string()
      .required("Email jest wymagany!")
      .matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, {
        message: "Email jest niepoprawny!",
      }),
    password: yup
      .string()
      .required()
      .max(255)
      .min(8, "Hasło musi mieć więcej ni 8 znaków"),
  })
  .required();

export type LoginAccountSchema = yup.InferType<typeof loginAccountSchema>;

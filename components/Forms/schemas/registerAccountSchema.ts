import * as yup from "yup";
export const registerAccountSchema = yup
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
      .min(8, "Hasło musi mieć więcej niż 8 znaków!"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Hasła muszą być takie same!"),

    statueCheck: yup
      .boolean()
      .isTrue("Pole musi być zaznaczone")
      .required("Pole musi być zaznaczone"),
    newsletter: yup.boolean(),
  })
  .required();

export type RegisterAccountSchema = yup.InferType<typeof registerAccountSchema>;

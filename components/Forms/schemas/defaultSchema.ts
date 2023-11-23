import * as Yup from "yup";
export const defaultSchema = {
  email: Yup.string()
    .required("Email is required.")
    .email("Invalid email.")
    .label("Email"),
  password: Yup.string()
    .required()
    .max(60, "The password cannot be longer than 60 characters.")
    .min(8, "The password must be longer than 8 characters.")
    .label("Password"),
};

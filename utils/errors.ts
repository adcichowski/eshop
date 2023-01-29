import type { ValidationError } from "yup";

export const convertYupError = (err: ValidationError) => {
  console.log(typeof err.message);
  if (err.path) {
    return { error: { [err.path]: err.message } };
  }
  return { error: { message: err.message } };
};

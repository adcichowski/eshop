import type { ValidationError } from "yup";

export const convertYupError = (err: ValidationError) => {
  if (err.path) {
    return { error: { [err.path]: err.message } };
  }
  return { error: { message: err.message } };
};

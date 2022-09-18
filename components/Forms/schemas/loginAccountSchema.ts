import * as yup from "yup";
import { defaultSchema } from "./defaultSchema";
export const loginAccountSchema = defaultSchema;

export type LoginAccountSchema = yup.InferType<typeof loginAccountSchema>;

import type * as Yup from "yup";
import { defaultSchema } from "./defaultSchema";
export const loginAccountSchema = defaultSchema;

export type LoginAccountSchema = Yup.InferType<typeof loginAccountSchema>;

import type * as Yup from "Yup";
import { defaultSchema } from "./defaultSchema";
export const loginAccountSchema = defaultSchema;

export type LoginAccountSchema = Yup.InferType<typeof loginAccountSchema>;

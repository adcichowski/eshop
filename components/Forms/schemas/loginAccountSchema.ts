import * as Yup from "yup";
import { defaultSchema } from "./defaultSchema";
export const loginAccountSchema = Yup.object(defaultSchema);

export type LoginAccountSchema = Yup.InferType<typeof loginAccountSchema>;

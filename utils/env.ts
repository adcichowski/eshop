import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NEXT_PUBLIC_API: str(),
  NEXT_PUBLIC_MAILERLITE: str(),
});

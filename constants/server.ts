import { getEnv } from "utils/utils";

export const ADMIN_AUTH_TOKEN = getEnv(
  process.env.HYGRAPH_TOKEN,
  "HYGRAPH_TOKEN",
);

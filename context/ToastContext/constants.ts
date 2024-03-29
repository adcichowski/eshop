import { ToastStateType } from "./ToastContext";
export const toastsTypes = ["success", "warning", "error", "info"] as const;
export type ToastTypes = (typeof toastsTypes)[number];

export const PARAM_GET_TOAST = "cG9wcGVy";
export type TYPES_TOASTS_IN_PARAM =
  | "LOG_IN_SUCCESS"
  | "LOG_IN_ERROR"
  | "SIGN_OUT"
  | "REGISTER_ERROR";

export const TOAST_FROM_PARAM = {
  LOG_IN_SUCCESS: {
    id: "log_in_success",
    text: "Success login to account",
    type: "success",
  },
  SIGN_OUT: {
    id: "sign_out_success",
    text: "Success log out from account",
    type: "success",
  },
  REGISTER_ERROR: {
    id: "register_error",
    text: "Error while register account",
    type: "error",
  },
  LOG_IN_ERROR: {
    id: "log_in_error",
    text: "Error while login account",
    type: "error",
  },
} satisfies Record<TYPES_TOASTS_IN_PARAM, ToastStateType>;

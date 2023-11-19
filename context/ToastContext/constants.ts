import { ToastStateType } from "./ToastContext";
export const toastsTypes = ["success", "warning", "error", "info"] as const;
export type ToastTypes = (typeof toastsTypes)[number];

export const PARAM_GET_TOAST = "cG9wcGVy";
export type TYPES_TOASTS_IN_PARAM = "LOG_IN_SUCCESS" | "SIGN_OUT";

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
} satisfies Record<TYPES_TOASTS_IN_PARAM, ToastStateType>;

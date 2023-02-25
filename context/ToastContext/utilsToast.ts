import { uniqId } from "utils/utils";
import { ToastStateType } from "./ToastContext";

export const MAX_RENDER_TOASTS = 4;

export const addToastToList = (
  toasts: ToastStateType[] | [],
  toast: Omit<ToastStateType, "id">
) => {
  const newToasts = [{ ...toast, id: uniqId() }, ...toasts];
  if (newToasts.length === MAX_RENDER_TOASTS) {
    return newToasts.slice(0, -1);
  }
  return newToasts;
};

export const removeToastFromList = (id: string, toasts: ToastStateType[]) => {
  return toasts.filter((toast) => toast.id !== id);
};

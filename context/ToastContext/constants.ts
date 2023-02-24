export const toastsTypes = ["success", "warning", "error", "info"] as const;
export type ToastTypes = typeof toastsTypes[number];

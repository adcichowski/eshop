export const toastsTypes = ["success", "warning", "error"] as const;
export type ToastTypes = typeof toastsTypes[number];

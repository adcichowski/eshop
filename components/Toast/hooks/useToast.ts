import { useToastContext } from "context/ToastContext/ToastContext";
import { useCallback, useEffect } from "react";

export function useToast(toast: { id: string }) {
  const { removeToast, toasts } = useToastContext();
  const handleClose = useCallback(
    () => removeToast(toast.id),
    [removeToast, toast.id],
  );
  useEffect(() => {
    if (toasts) {
      const hideToast = setInterval(() => {
        removeToast(toast.id);
      }, 3000);
      return () => clearInterval(hideToast);
    }
  }, []);
  return { handleClose };
}

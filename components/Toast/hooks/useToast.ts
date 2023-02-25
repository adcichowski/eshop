import { useToastContext } from "context/ToastContext/ToastContext";
import React, { useCallback, useEffect } from "react";

export function useToast(toast: { id: string; autoClose: number }) {
  const { removeToast, toasts, setToasts } = useToastContext();
  const handleClose = useCallback(
    () => removeToast(toast.id),
    [removeToast, toast.id]
  );
  useEffect(() => {
    if (toasts) {
      const hideToast = setInterval(() => {
        setToasts((prev) => prev.slice(0, -1));
      }, 5000);
      return () => clearInterval(hideToast);
    }
  }, []);
  return { handleClose };
}

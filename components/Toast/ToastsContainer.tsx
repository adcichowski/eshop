import { useToastContext } from "context/ToastContext/ToastContext";
import { ToastChild } from "./Toast";

export const ToastsContainer = () => {
  const { toasts } = useToastContext();
  return (
    <div className="my-2 flex flex-col items-center justify-center gap-2 text-white">
      {toasts.map((toast) => (
        <ToastChild key={toast.id} {...toast} />
      ))}
    </div>
  );
};

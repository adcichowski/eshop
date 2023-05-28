import { useToastContext } from "context/ToastContext/ToastContext";
import { ToastChild } from "./Toast";

export const ToastsContainer = () => {
  const { toasts } = useToastContext();
  return (
    <div
      className={`absolute left-0 z-20 my-2 flex w-full flex-col items-center justify-center gap-2 text-white`}
    >
      {toasts.map((toast) => (
        <ToastChild key={toast.id} {...toast} />
      ))}
    </div>
  );
};

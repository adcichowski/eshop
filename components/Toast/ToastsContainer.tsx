import { useToastContext } from "context/ToastContext/ToastContext";
import { ToastChild } from "./Toast";

export const ToastsContainer = () => {
  const { toasts } = useToastContext();
  return (
    <div className="relative my-2 flex justify-center">
      <ul className="absolute flex flex-col gap-2 w-1/2 self-stretch mx-auto">
        {toasts.map((toast) => (
          <ToastChild key={toast.id} {...toast} />
        ))}
      </ul>
    </div>
  );
};

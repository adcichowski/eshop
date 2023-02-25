import { useToastContext } from "context/ToastContext/ToastContext";
import { memo } from "react";
import { useToastPosition } from "./hooks/useToastPosition";
import { ToastChild } from "./Toast";

export const ToastsContainer = memo(() => {
  const { toasts } = useToastContext();
  const { ref, isContainerVisible } = useToastPosition();
  return (
    <div ref={ref} className="relative my-1 w-full text-white">
      <div
        className={`left-0 z-20 my-2 flex w-full flex-col items-center justify-center gap-2 ${
          !isContainerVisible ? "fixed top-3" : "absolute top-0"
        } `}
      >
        {toasts.map((toast) => (
          <ToastChild key={toast.id} {...toast} />
        ))}
      </div>
    </div>
  );
});

ToastsContainer.displayName = "ToastsContainer";

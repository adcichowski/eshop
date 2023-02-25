import { useToastContext } from "context/ToastContext/ToastContext";
import { useToastPosition } from "./hooks/useToastPosition";
import { ToastChild } from "./Toast";
import React from "react";
export const ToastsContainer = React.memo(() => {
  const { toasts } = useToastContext();
  const { ref, isContainerVisible } = useToastPosition();
  return (
    <div ref={ref} className="my-1 relative text-white w-full">
      <div
        className={`flex flex-col gap-2 items-center justify-center w-full left-0 my-2 z-20 ${
          !isContainerVisible ? "fixed top-3" : "absolute top-0"
        } `}
      >
        {toasts.map((toast, i) => (
          <ToastChild
            key={toast.id}
            {...toast}
            autoClose={toast.addedTime - toasts[i].addedTime ?? 3000}
          />
        ))}
      </div>
    </div>
  );
});

ToastsContainer.displayName = "ToastsContainer";

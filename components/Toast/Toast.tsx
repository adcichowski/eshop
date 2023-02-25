import React, { useEffect } from "react";
import SuccessIcon from "./assets/success-icon.svg";
import CloseIcon from "./assets/close-icon.svg";
import InfoIcon from "./assets/info-icon.svg";
import { useToastContext } from "context/ToastContext/ToastContext";
import { useToastPosition } from "./hooks/useToastPosition";
import clsx from "clsx";
import { ToastTypes } from "context/ToastContext/constants";
import { useToast } from "./hooks/useToast";

function ToastContainer() {
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
}

export const Toast = React.memo(ToastContainer);

export const ToastChild = ({
  text,
  type,
  id,
  autoClose,
}: {
  autoClose: number;
  text: string;
  type: ToastTypes;
  id: string;
}) => {
  const { handleClose } = useToast({ id, autoClose });
  return (
    <div
      id="toast"
      className={`flex items-center w-5/6 p-2 ${clsx(
        type === "success" && "bg-primary",
        type === "info" && "bg-blue-200"
      )} rounded-lg shadow`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 relative text-green-500 bg-green-100 rounded-lg">
        {type === "success" && <SuccessIcon />}
        {type === "info" && <InfoIcon />}
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{text}</div>
      <button
        type="button"
        className="ml-auto"
        onClick={handleClose}
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <div className="w-5 h-5">
          <CloseIcon />
        </div>
      </button>
    </div>
  );
};

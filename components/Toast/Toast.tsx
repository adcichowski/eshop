import React from "react";
import SuccessIcon from "./success-icon.svg";
import CloseIcon from "./close-icon.svg";
import { useToastContext } from "context/ToastContext/ToastContext";
import { useToastPosition } from "./hooks/useToastPosition";

function ToastContainer() {
  const { isHidden, handleClose } = useToastContext();
  const { ref, isContainerVisible } = useToastPosition();
  return (
    <div ref={ref} className="my-4 relative text-white w-full">
      <div
        className={`flex items-center justify-center w-full left-0 my-2 z-20 ${
          !isContainerVisible ? "fixed top-3" : "absolute top-0"
        } `}
      >
        {!isHidden && (
          <div
            id="toast-success"
            className="absolute flex items-center w-5/6 p-2 text-gray-500 bg-primary rounded-lg shadow"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 relative text-green-500 bg-green-100 rounded-lg">
              <SuccessIcon />
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">
              Item moved successfully.
            </div>
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
        )}
      </div>
    </div>
  );
}

export const Toast = React.memo(ToastContainer);

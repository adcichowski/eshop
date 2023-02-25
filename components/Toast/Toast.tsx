import SuccessIcon from "./assets/success-icon.svg";
import CloseIcon from "./assets/close-icon.svg";
import InfoIcon from "./assets/info-icon.svg";
import clsx from "clsx";
import { ToastTypes } from "context/ToastContext/constants";
import { useToast } from "./hooks/useToast";

export const ToastChild = ({
  text,
  type,
  id,
}: {
  text: string;
  type: ToastTypes;
  id: string;
}) => {
  const { handleClose } = useToast({ id });
  return (
    <div
      id="toast"
      className={`flex w-5/6 items-center p-2 ${clsx(
        type === "success" && "bg-primary",
        type === "info" && "bg-blue-200"
      )} rounded-lg shadow`}
      role="alert"
    >
      <div className="text-green-500 bg-green-100 relative inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-lg">
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
        <div className="h-5 w-5">
          <CloseIcon />
        </div>
      </button>
    </div>
  );
};

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { uniqId } from "utils/utils";
import type { ToastTypes } from "./constants";

type ToastContextType = {
  readonly removeToast: (id: string) => void;
  readonly addToast: (type: ToastTypes, text: string) => void;
  toasts: ToastStateType[];
  setToasts: Dispatch<SetStateAction<ToastStateType[]>>;
};
type ToastStateType = {
  readonly addedTime: number;
  readonly id: string;
  readonly text: string;
  readonly type: ToastTypes;
};
const MAX_RENDER_TOASTS = 4;
const ToastContext = createContext<ToastContextType | null>(null);
export const ToastProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [toasts, setToasts] = useState<ToastStateType[]>([]);

  return (
    <ToastContext.Provider
      value={{
        removeToast: (id: string) => {
          setToasts((prev) => prev.filter((toast) => toast.id !== id));
        },
        setToasts,
        toasts,
        addToast: (type: ToastTypes, text: string) => {
          if (toasts.length === MAX_RENDER_TOASTS)
            setToasts((prev) => prev.slice(0, -1));
          setToasts((prev) => [
            ...prev,
            { text, type, id: uniqId(), addedTime: new Date().getTime() },
          ]);
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Wrap components using Toast Context Provider");
  }
  return context;
};

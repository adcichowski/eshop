import { createContext, useContext, useEffect, useState } from "react";
import type { ToastTypes } from "./constants";

type ToastContextType = {
  readonly handleClose: () => void;
  readonly isHidden: boolean;
  readonly handleToast: (type: ToastTypes, text: string) => void;
};
type ToastStateType = {
  readonly text: string;
  readonly type: ToastTypes;
};
const ToastContext = createContext<ToastContextType | null>(null);
export const ToastProvider = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastStateType | undefined>(undefined);
  useEffect(() => {
    if (toast) {
      const hideToast = setInterval(() => {
        setToast(undefined);
      }, 5000);
      return () => clearInterval(hideToast);
    }
  }, [toast]);
  return (
    <ToastContext.Provider
      value={{
        handleToast: (type: ToastTypes, text: string) => {
          setToast({ type, text });
        },
        handleClose: () => {
          setToast(undefined);
        },
        isHidden: Boolean(!toast),
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

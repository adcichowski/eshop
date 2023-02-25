import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import type { ToastTypes } from "./constants";
import { addToastToList, removeToastFromList } from "./utilsToast";

type ToastContextType = {
  readonly removeToast: (id: string) => void;
  readonly addToast: (type: ToastTypes, text: string) => void;
  toasts: ToastStateType[];
  setToasts: Dispatch<SetStateAction<ToastStateType[]>>;
};
export type ToastStateType = {
  readonly id: string;
  readonly text: string;
  readonly type: ToastTypes;
};
export const MAX_RENDER_TOASTS = 4;
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
          setToasts((prev) => removeToastFromList(id, prev));
        },
        setToasts,
        toasts,
        addToast: (type, text) =>
          setToasts((prev) => addToastToList(prev, { type, text })),
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

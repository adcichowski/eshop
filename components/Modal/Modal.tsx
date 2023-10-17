import { createPortal } from "react-dom";
import { usePortal } from "./useModal";

export function Modal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element;
}) {
  // const { ref } = usePortal({ isOpen });
  const ref = null;
  if (!ref || !isOpen) return <></>;
  return createPortal(
    <dialog className="top relative z-40 flex h-full w-full">
      {children}
    </dialog>,
    ref,
  );
}

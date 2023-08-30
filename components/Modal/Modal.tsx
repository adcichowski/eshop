import React from "react";
import { createPortal } from "react-dom";
import { usePortal } from "./useModal";

export default function Portal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element;
}) {
  const { ref } = usePortal({ isOpen });
  if (!ref || !isOpen) return <></>;
  return createPortal(
    <dialog className="top relative z-40 flex h-full w-full">
      {children}
    </dialog>,
    ref
  );
}

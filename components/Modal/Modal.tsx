"use client";
import { createPortal } from "react-dom";
import { useModal } from "./useModal";

export function Modal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element;
}) {
  const { ref } = useModal({ isOpen });

  if (!ref || !isOpen) return <></>;
  return createPortal(
    <dialog className="top-0 fixed z-50 bg-white/80 flex h-full w-full">
      {children}
    </dialog>,
    ref,
  );
}

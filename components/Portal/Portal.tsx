import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "./usePortal";

export default function Portal({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: JSX.Element;
}) {
  const { ref } = usePortal({ isOpen });
  if (!ref.current || !isOpen) return <></>;
  return createPortal(
    <dialog className="top relative z-40 flex h-full w-full">
      {children}
    </dialog>,
    ref.current
  );
}

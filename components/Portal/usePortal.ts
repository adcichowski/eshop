import { useCallback, useEffect, useRef } from "react";

export function usePortal({ isOpen }: { isOpen: boolean }) {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    const modal = document.getElementById("__next");
    ref.current = modal;
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);
  return { ref };
}

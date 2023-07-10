import { useLayoutEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
export function usePortal({ isOpen }: { isOpen: boolean }) {
  const ref = useRef<Element | null>(null);
  useLayoutEffect(() => {
    const modal = document.getElementById("__next");
    ref.current = modal;
    if (modal) {
      isOpen ? disableBodyScroll(modal) : enableBodyScroll(modal);
    }
    return () => clearAllBodyScrollLocks();
  }, [isOpen]);
  return { ref };
}

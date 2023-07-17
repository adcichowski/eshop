import { useEffect, useState } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
export function usePortal({ isOpen }: { isOpen: boolean }) {
  const [ref, setRef] = useState<Element | null>(null);
  useEffect(() => {
    setRef(document.getElementById("__next"));

    if (ref) {
      if (isOpen) {
        ref.classList.add("w-screen");
        disableBodyScroll(ref);
      }
      if (!isOpen) {
        enableBodyScroll(ref);
        ref.classList.remove("w-screen");
      }
    }
    return () => clearAllBodyScrollLocks();
  }, [isOpen, ref]);
  return { ref };
}

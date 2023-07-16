import { useEffect, useRef, useState } from "react";
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
      isOpen ? disableBodyScroll(ref) : enableBodyScroll(ref);
    }
    return () => clearAllBodyScrollLocks();
  }, [isOpen, ref]);
  return { ref };
}

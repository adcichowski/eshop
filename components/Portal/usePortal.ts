import { useEffect, useState } from "react";

export function usePortal({ isOpen }: { isOpen: boolean }) {
  const [ref, setRef] = useState<Element | null>(null);
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (!ref) {
      setRef(document.getElementById("__next"));
    }
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, ref]);
  return { ref };
}

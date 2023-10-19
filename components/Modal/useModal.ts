import { useEffect, useState } from "react";

const scrollBarWidth = () =>
  document.body.offsetWidth - document.body.clientWidth;
export function useModal({ isOpen }: { isOpen: boolean }) {
  const [ref, setRef] = useState<Element | null>(null);
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (!ref) {
      setRef(document.getElementById("__next"));
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen, ref]);
  return { ref };
}

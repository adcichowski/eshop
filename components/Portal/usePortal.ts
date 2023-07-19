import { useEffect, useState } from "react";

export function usePortal() {
  const [ref, setRef] = useState<Element | null>(null);
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (!ref) {
      setRef(document.getElementById("__next"));
    }
    if (ref) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [ref]);
  return { ref };
}

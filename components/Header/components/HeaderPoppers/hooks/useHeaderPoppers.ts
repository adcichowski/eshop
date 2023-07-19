import { useEffect, useState } from "react";

const checkIsMobileDevice = (width: number) => width <= 775;

export function useHeaderPoppers() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const bodyWidth = entries[0].contentRect.width;
      if (checkIsMobileDevice(bodyWidth)) setIsMobile(true);
      if (!checkIsMobileDevice(bodyWidth)) setIsMobile(false);
    });
    resizeObserver.observe(window.document.body);
    return () => {
      resizeObserver.unobserve(window.document.body);
    };
  }, [isMobile]);
  return { isMobile };
}

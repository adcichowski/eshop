import { useEffect, useRef, useState } from "react";

export function useToastPosition() {
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        const isVisible = entry.intersectionRatio;
        setIsContainerVisible(Boolean(isVisible));
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [isContainerVisible, ref]);
  return { ref, isContainerVisible };
}

import { useCallback, useLayoutEffect, useRef } from "react";

export function usePortal({ isOpen }: { isOpen: boolean }) {
  const scrollOffset = useRef<number | null>(null);
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = "var(--scrollbar-compensation)";

    scrollOffset.current = window.pageYOffset;
    document.body.style.position = "fixed";
    // document.body.style.top = `-${scrollOffset.current}px`;
    document.body.style.width = "100%";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.style.position = "";
    document.body.style.top = ``;
    document.body.style.width = "";
    if (scrollOffset.current) {
      document.body.style.top = `-${scrollOffset.current}px`;
      window.scrollTo(0, scrollOffset.current);
    }
  }, []);
  const ref = useRef<Element | null>(null);
  useLayoutEffect(() => {
    const modal = document.getElementById("__next");
    ref.current = modal;
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen]);
  return { ref };
}

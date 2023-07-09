import { useEffect, useRef } from "react";

export function usePortal({ isOpen }: { isOpen: boolean }) {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    const modal = document.getElementById("__next");
    ref.current = modal;
    inertRootElement(isOpen);
    setPaddingAfterLoseScroll();
  }, [isOpen]);
  return { ref };
}

const setPaddingAfterLoseScroll = () => {
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;
  document.body.style.paddingRight = `${Number(scrollBarWidth)} px`;
};

const inertRootElement = (isOpen: boolean) => {
  const root = document.getElementById("root");
  document.body.style.overflow = isOpen ? "hidden" : "visible";
  isOpen ? root?.setAttribute("inert", "true") : root?.removeAttribute("inert");
};

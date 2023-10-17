import { useEffect, useState } from "react";

const scrollBarWidth = () =>
  document.body.offsetWidth - document.body.clientWidth;
export function usePortal({ isOpen }: { isOpen: boolean }) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);
}

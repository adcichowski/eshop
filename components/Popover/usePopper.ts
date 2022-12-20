import type { MouseEvent } from "react";
import React, { useEffect, useState } from "react";

export function usePopper() {
  const popperRef = React.useRef<HTMLDivElement>(null);
  const [parentPopper, setParentPopper] = useState<Element | null>(null);
  const saveParentPopper = (e: MouseEvent<HTMLLIElement>) => {
    setParentPopper(e.currentTarget);
  };
  useEffect(() => {
    console.log(parentPopper);
  });
  return {
    popperRef,
    parentPopper,
    saveParentPopper,
  };
}

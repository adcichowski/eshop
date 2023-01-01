import { useClickOutside } from "hooks/useClickOutside";
import type { MouseEvent } from "react";
import React, { useState } from "react";

export function usePopper() {
  const popperRef = React.useRef<HTMLDivElement>(null);
  const [parentPopper, setParentPopper] = useState<Element | null>(null);
  const [typePopper, setTypePopper] = useState<string | undefined>(undefined);
  const saveParentPopper = (
    e: MouseEvent<HTMLLIElement>,
    type: string | undefined
  ) => {
    setParentPopper(e.currentTarget);
    setTypePopper(type);
  };
  useClickOutside(popperRef, () => {
    setParentPopper(null);
    setTypePopper(undefined);
  });
  return {
    popperRef,
    parentPopper,
    saveParentPopper,
    typePopper,
  };
}

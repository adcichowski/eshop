import { useClickOutside } from "hooks/useClickOutside";
import type { MouseEvent } from "react";
import React, { useState } from "react";

export function usePopper() {
  const popperRef = React.useRef<HTMLDivElement>(null);
  const [typePopper, setTypePopper] = useState<string | undefined>(undefined);
  const saveParentPopper = (
    _: MouseEvent<HTMLLIElement>,
    type: string | undefined
  ) => {
    setTypePopper(type);
  };
  useClickOutside(popperRef, () => {
    setTypePopper(undefined);
  });
  return {
    popperRef,
    saveParentPopper,
    typePopper,
  };
}

import type { MouseEvent } from "react";
import React, { useState } from "react";

export function usePopper() {
  const popperRef = React.useRef<HTMLDivElement>(null);
  const [typePopper, setTypePopper] = useState<string | undefined>(undefined);
  const saveParentPopper = (
    _: MouseEvent<HTMLButtonElement>,
    type: string | undefined
  ) => {
    setTypePopper(type);
  };

  const resetPopper = () => {
    console.log("resecik");
    setTypePopper(undefined);
  };
  return {
    popperRef,
    saveParentPopper,
    typePopper,
    resetPopper,
  };
}

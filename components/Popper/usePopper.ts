import type { MouseEvent } from "react";
import { useState } from "react";

export function usePopper() {
  const [typePopper, setTypePopper] = useState<string | undefined>(undefined);
  const saveParentPopper = (
    _: MouseEvent<HTMLButtonElement>,
    type: string | undefined
  ) => {
    setTypePopper(type);
  };

  const resetPopper = () => {
    setTypePopper(undefined);
  };

  return {
    saveParentPopper,
    typePopper,
    resetPopper,
  };
}

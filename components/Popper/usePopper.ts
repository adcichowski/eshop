import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function usePopper() {
  const pathname = usePathname();
  const [typePopper, setTypePopper] = useState<string | undefined>(undefined);
  const saveParentPopper = (type: string | undefined) => {
    setTypePopper(type);
  };

  const resetPopper = () => {
    setTypePopper(undefined);
  };

  useEffect(() => {
    resetPopper();
  }, [pathname]);

  return {
    saveParentPopper,
    typePopper,
    resetPopper,
  };
}

import { useState } from "react";
import type { AlertLabel } from "./AlertInfo";

export function useAlertInfo() {
  const [alertLabel, setAlertLabel] = useState<AlertLabel>({
    isOpen: false,
    errorIn: undefined,
  });

  const handleSetAlert =
    (errorIn: "login" | "register") => (isOpen: boolean) => {
      if (alertLabel.errorIn !== errorIn) {
        setAlertLabel({ errorIn, isOpen });
      }
    };
  return { handleSetAlert, alertLabel };
}

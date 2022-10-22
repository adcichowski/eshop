import React from "react";
import Clsx from "clsx";
import { ErrorInInput } from "./components/ErrorInInput";
import type { InputProps } from "./types";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
export const InputsRender = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    switch (props.type) {
      case "checkbox":
        return <Checkbox {...props} ref={ref} />;
      default:
        return <Input {...props} ref={ref} />;
    }
  }
);
InputsRender.displayName = "InputsRender";

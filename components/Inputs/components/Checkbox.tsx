import React from "react";
import type { InputProps } from "../types";
import { ErrorInInput } from "./ErrorInInput";

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, ...props }: InputProps, ref) => (
    <>
      <div className="flex items-start justify-center gap-2 text-xs">
        <label className="flex items-start justify-center">
          <input
            {...props}
            type="checkbox"
            className="text-white accent-primary"
            ref={ref}
          />
          <span className="ml-[5px]">{text}</span>
        </label>
      </div>
      {!!error && (
        <ErrorInInput
          id={props.id}
          data-testid={props["aria-describedby"]}
          error={error}
        />
      )}
    </>
  )
);

Checkbox.displayName = "Checkbox";

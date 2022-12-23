import React from "react";
import type { InputProps } from "../types";
import { ErrorInInput } from "./ErrorInInput";

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, ...props }: InputProps, ref) => (
    <>
      <div className="flex gap-2 text-xs justify-center items-start">
        <label className="flex justify-center items-start">
          <input
            {...props}
            type="checkbox"
            className="accent-primary text-white"
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

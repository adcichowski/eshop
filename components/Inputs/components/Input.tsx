import React from "react";
import Clsx from "clsx";
import { ErrorInInput } from "./ErrorInInput";
import type { InputProps } from "../types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, hideLabel, ...props }, ref) => {
    return (
      <>
        <label htmlFor={props.id}>
          <span
            className={`text-[18px] mb-[6px] ${Clsx(hideLabel && "sr-only")}`}
          >
            {text}
          </span>
        </label>
        <input
          {...props}
          ref={ref}
          className={`border text-sm border-gray rounded-sm py-3 px-2 ${Clsx(
            error && "bg-red-100 border-red-200"
          )}`}
        />
        {!!error && (
          <ErrorInInput
            id={props["aria-describedby"]}
            data-testid={`${props.id}Error`}
            error={error}
          />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

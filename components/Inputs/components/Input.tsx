import React from "react";
import Clsx from "clsx";
import { ErrorInInput } from "./ErrorInInput";
import type { InputProps } from "../types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, hideLabel, size = "normal", ...props }, ref) => {
    const variants = {
      small: { input: "text-sm py-2 px-2", label: "text-sm" },
      normal: {
        input: "text-sm rounded-sm py-3 px-2",
        label: "text-[1.12rem] mb-[6px]",
      },
    };
    return (
      <>
        <label htmlFor={props.id}>
          <span
            className={`${Clsx(hideLabel && "sr-only")} ${
              variants[size].label
            }`}
          >
            {text}
          </span>
        </label>
        <input
          {...props}
          ref={ref}
          className={`border border-gray ${Clsx(
            error && "bg-red-100 border-red-200"
          )} ${variants[size].input}`}
        />
        {Boolean(error) && (
          <ErrorInInput id={`${props.id}Error`} error={error} />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

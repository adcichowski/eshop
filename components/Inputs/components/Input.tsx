"use client";
import Clsx from "clsx";
import React from "react";
import { ErrorInInput } from "./ErrorInInput";
import type { InputProps } from "../types";

type TextInputProps = { readonly size?: "small" | "normal" };
const variants = {
  small: { input: "text-sm px-2", label: "text-sm" },
  normal: {
    input: "text-sm rounded-sm py-3 px-2",
    label: "text-sm mb-[6px]",
  },
};
export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & TextInputProps
>(({ text, error, hideLabel, size = "normal", ...props }, ref) => {
  return (
    <div className="flex w-full flex-col">
      <label htmlFor={props.id}>
        <span
          className={`${Clsx(hideLabel && "sr-only")} ${variants[size].label}`}
        >
          {text}
        </span>
      </label>
      <input
        {...props}
        ref={ref}
        className={`border-gray border border-gray-400 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ${Clsx(
          error && "border-red-200 bg-red-100",
        )} ${variants[size].input} ${props.className}`}
      />
      <ErrorInInput id={`${props.id}Error`} error={error} />
    </div>
  );
});
Input.displayName = "Input";

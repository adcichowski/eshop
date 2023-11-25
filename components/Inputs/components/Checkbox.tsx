import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import type { InputProps } from "../types";
import { ErrorInInput } from "./ErrorInInput";
import clsx from "clsx";

export type CheckboxProps = {
  readonly id: string;
  readonly hideLabel?: boolean;
  readonly error?: FieldError | string | Merge<FieldError, FieldErrorsImpl>;
  readonly text: string | JSX.Element;
} & JSX.IntrinsicElements["input"];

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, ...props }: CheckboxProps, ref) => (
    <>
      <div className="flex items-start justify-center gap-2 self-start text-xs">
        <label className="flex items-start justify-center">
          <input
            {...props}
            type="checkbox"
            className={clsx(
              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 text-primary",
              error && "border-red-200 bg-red-100",
            )}
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
  ),
);

Checkbox.displayName = "Checkbox";

import React from "react";
import clsx from "clsx";
import { ErrorInInput } from "./components/ErrorInInput";
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

export type InputProps = JSX.IntrinsicElements["input"] & {
  error?: string;
  text: string | JSX.Element;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, ...props }, ref) => {
    return (
      <>
        <label className="flex w-full flex-col">
          <span className="text-[18px] mb-[6px]">{text}</span>
          <input
            {...props}
            ref={ref}
            className={`border text-sm border-gray rounded-sm py-3 px-2 ${clsx(
              error && "bg-red-100 border-red-200"
            )}`}
          />
        </label>
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

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, ...props }: InputProps, ref) => (
    <>
      <div className="flex gap-2 text-xs justify-center items-start">
        <label className="flex justify-center items-start">
          <input
            {...props}
            type="checkbox"
            className=" accent-primary text-white "
            ref={ref}
          />
          <span className="ml-[5px]">{text}</span>
        </label>
      </div>
      {!!error && (
        <ErrorInInput data-testid={props["aria-describedby"]} error={error} />
      )}
    </>
  )
);

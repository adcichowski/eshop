import React from "react";

export type InputProps = JSX.IntrinsicElements["input"] & {
  labelProps?: JSX.IntrinsicElements["label"];
  error?: string;
  text: string;
};

export const InputsRender = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    switch (type) {
      case "checkbox":
        return <Checkbox {...props} ref={ref} />;
      default:
        return <Input {...props} ref={ref} />;
    }
  }
);

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, error, labelProps, ...props }, ref) => (
    <>
      <label className="flex w-full flex-col" {...labelProps}>
        <span className="text-[18px] mb-[6px]">{text}:</span>
        <input
          ref={ref}
          {...props}
          className={`border text-sm border-gray rounded-sm py-3 px-2 ${props.className}`}
        />
      </label>
      <p className="text-xs">{error ?? ""}</p>
    </>
  )
);

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ labelProps, ...props }: InputProps, ref) => (
    <>
      <div className="flex gap-1">
        <input {...props} type="checkbox" ref={ref} />
        <label {...labelProps}>{props.text}</label>
      </div>
      <p className="text-xs">{props.error}</p>
    </>
  )
);

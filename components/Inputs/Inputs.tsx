import React from "react";

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
    console.log(props);
    return (
      <>
        <label className="flex w-full flex-col">
          <span className="text-[18px] mb-[6px]">{text}</span>
          <input
            {...props}
            ref={ref}
            className="border text-sm border-gray rounded-sm py-3 px-2"
          />
        </label>
        <p role="alert" className="text-xs text-red">
          {error ?? ""}
        </p>
      </>
    );
  }
);

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({ text, ...props }: InputProps, ref) => (
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
      <p role="alert" className="text-xs text-red">
        {props.error}
      </p>
    </>
  )
);

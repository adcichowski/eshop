import React from "react";

export default function Input({
  children,
  labelProps,
  error,
  ...props
}: JSX.IntrinsicElements["input"] & {
  labelProps?: JSX.IntrinsicElements["label"];
  error?: string;
}) {
  return (
    <>
      <label className="flex w-full flex-col" {...labelProps}>
        <span className="text-[18px] mb-[6px]">{children}:</span>
        <input
          {...props}
          className={`border text-sm border-gray rounded-sm py-3 px-2 ${props.className}`}
        />
      </label>
      <p className="text-xs">{error ?? ""}</p>
    </>
  );
}

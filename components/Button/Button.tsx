import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  readonly children: ReactNode;
} & Omit<JSX.IntrinsicElements["button"], "children">;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        `w-full rounded-[10px] text-base font-semibold uppercase transition-colors md:text-lg ${
          props.className
        } ${
          props.disabled
            ? "cursor-not-allowed border-2 border-primary bg-white text-primary"
            : "bg-primary text-white"
        }`
      )}
    >
      {children}
    </button>
  );
}

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
        `transition-colors font-semibold uppercase rounded-[10px] text-base md:text-lg w-full ${
          props.className
        } ${
          props.disabled
            ? "bg-white text-primary border-2 border-primary cursor-not-allowed"
            : "text-white bg-primary"
        }`
      )}
    >
      {children}
    </button>
  );
}

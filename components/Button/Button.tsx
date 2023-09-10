"use client";
import clsx from "clsx";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  readonly children: ReactNode;
} & Omit<JSX.IntrinsicElements["button"], "children">;

export function Button({ children, ...props }: ButtonProps) {
  const className = twMerge(
    `rounded-[10px] text-base bg-primary text-white font-semibold uppercase transition-colors ${
      props.className
    } ${clsx(
      props.disabled &&
        "cursor-not-allowed border-gray-100 bg-white fill-gray-100 text-gray-100",
    )}`,
  );
  return (
    <button
      {...props}
      className={className}
      onClick={props.disabled ? undefined : props.onClick}
    >
      {children}
    </button>
  );
}

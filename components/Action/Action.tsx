"use client";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ActionProps =
  | {
      readonly as: "button";
      readonly type?: "submit" | "button";
      readonly onClick?: () => void;
      readonly disabled?: boolean;
      readonly children: ReactNode;
      readonly fullWidth?: boolean;
    }
  | {
      readonly fullWidth?: boolean;
      readonly disabled?: boolean;
      readonly as: "link";
      readonly href: LinkProps["href"];
      readonly children: ReactNode;
    };

export function Action({
  children,
  disabled,
  fullWidth = false,
  ...props
}: ActionProps) {
  const className = twMerge(
    `text-xs p-1 px-2 bg-primary text-white font-semibold uppercase transition-colors ${clsx(
      disabled &&
        "cursor-not-allowed border-gray-100 bg-white fill-gray-100 text-gray-100 pointer-events-none",
      fullWidth && "w-full",
    )}`,
  );

  if (props.as === "link") {
    return (
      <Link className={className} aria-disabled={disabled} href={props.href}>
        {children}
      </Link>
    );
  }
  return (
    <button
      aria-disabled={disabled}
      {...props}
      className={className}
      onClick={disabled ? undefined : props.onClick}
    >
      {children}
    </button>
  );
}

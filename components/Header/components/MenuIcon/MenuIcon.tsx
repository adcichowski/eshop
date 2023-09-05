"use client";
import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenu = () => setIsOpen((prev) => !prev);
  return (
    <button
      onClick={handleClickMenu}
      className="flex w-8 flex-col gap-y-1 overflow-hidden sm:hidden"
    >
      <LineMenuIcon className={clsx(isOpen && "translate-y-[6px] rotate-45")} />
      <LineMenuIcon
        className={clsx(
          isOpen && "-translate-x-1 opacity-0 transition-opacity duration-100"
        )}
      />
      <LineMenuIcon
        className={clsx(isOpen && "-translate-y-[6px] -rotate-45")}
      />{" "}
    </button>
  );
}

const LineMenuIcon = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        `h-[2px] w-full  bg-black transition-transform`,
        className
      )}
    ></div>
  );
};

"use client";
import clsx from "clsx";
import { headerCategories } from "../../constants";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export function MenuIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenu = () => setIsOpen((prev) => !prev);
  return (
    <>
      <button
        onClick={handleClickMenu}
        className="flex w-8 flex-col gap-y-1 overflow-hidden sm:hidden"
      >
        <LineMenuIcon
          className={clsx(isOpen && "translate-y-[6px] rotate-45")}
        />
        <LineMenuIcon
          className={clsx(
            isOpen &&
              "-translate-x-1 opacity-0 transition-opacity duration-100",
          )}
        />
        <LineMenuIcon
          className={clsx(isOpen && "-translate-y-[6px] -rotate-45")}
        />
      </button>
      <Menu isOpen={isOpen} handleClickMenu={handleClickMenu} />
    </>
  );
}

const LineMenuIcon = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        `h-[2px] w-full bg-black transition-transform`,
        className,
      )}
    ></div>
  );
};

const Menu = ({
  handleClickMenu,
  isOpen,
}: {
  isOpen: boolean;
  handleClickMenu: () => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, handleClickMenu);
  if (!isOpen) return <></>;
  return (
    <div
      ref={wrapperRef}
      className="absolute top-12 z-50 bg-white sm:hidden flex animate-fade-down"
    >
      <ul className="p-3 flex flex-col gap-y-2">
        {headerCategories.map((category) => (
          <li key={category.title} className="hover:underline capitalize">
            <Link
              className="cursor-pointer"
              aria-label={`Go to category ${category.title}`}
              href={`/${category.slug || category.title}`}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

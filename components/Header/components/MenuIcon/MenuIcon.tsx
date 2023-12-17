"use client";
import clsx from "clsx";
import { Modal } from "components/Modal/Modal";
import { useModal } from "components/Modal/useModal";
import { useClickOutside } from "hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

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
  useEffect(() => {}, []);
  const { ref } = useModal({ isOpen });
  if (!isOpen || !ref) return <></>;
  return createPortal(
    <dialog className="top-0 fixed z-50 flex h-full w-1/2 max-w-lg">
      <div ref={wrapperRef}>
        <h2>Text</h2>
      </div>
    </dialog>,
    ref,
  );
};

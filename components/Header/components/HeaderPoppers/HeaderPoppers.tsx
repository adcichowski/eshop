import Portal from "components/Modal/Modal";
import { Poppers } from "./components/Poppers";
import { useHeaderPoppers } from "./hooks/useHeaderPoppers";
import { useClickOutside } from "hooks/useClickOutside";
import { forwardRef, useRef } from "react";

export const HeaderPoppers = ({
  isOpen,
  resetPopper,
  children,
}: {
  readonly isOpen: boolean;
  resetPopper: () => void;
  children: JSX.Element;
}) => {
  const { isMobile } = useHeaderPoppers();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, resetPopper);
  if (!isOpen) return <></>;
  if (isMobile) {
    return (
      <WrapperMobile ref={ref}>
        <Portal isOpen={Boolean(isOpen)}>{children}</Portal>
      </WrapperMobile>
    );
  }

  return <WrapperDesktop ref={ref}>{children}</WrapperDesktop>;
};

const WrapperMobile = forwardRef<HTMLDivElement, { children: JSX.Element }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="animate-fade-down fixed top-0 flex h-full w-full flex-col items-center justify-center bg-white/75 duration-100"
      >
        <div className="mx-1 w-full max-w-md bg-white px-3 py-6">
          {children}
        </div>
      </div>
    );
  },
);
WrapperMobile.displayName = "WrapperMobile";

const WrapperDesktop = forwardRef<HTMLDivElement, { children: JSX.Element }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="border-gray md:-left-38 absolute -left-72 top-7 z-10 flex w-[400px] max-w-[400px] justify-center border-[0.5px] bg-white px-3 py-[19px] sm:-left-44 sm:top-9"
      >
        {children}
      </div>
    );
  },
);

WrapperDesktop.displayName = "WrapperDesktop";

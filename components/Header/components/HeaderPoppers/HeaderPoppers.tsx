"use client";
import { useHeaderPoppers } from "./hooks/useHeaderPoppers";
import { forwardRef, useRef } from "react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useClickOutside } from "hooks/useClickOutside";
import { usePortal } from "components/Modal/useModal";
export const HeaderPoppers = ({
  isOpen,
  children,
}: {
  readonly isOpen: boolean;
  children: JSX.Element;
}) => {
  const router = useRouter();
  const { isMobile } = useHeaderPoppers();
  const ref = useRef<HTMLDivElement>(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router, isMobile]);

  useClickOutside(ref, onDismiss);

  if (!isOpen) return <></>;

  if (isMobile) {
    return (
      <WrapperMobile isOpen={isOpen} ref={ref}>
        {children}
      </WrapperMobile>
    );
  }

  return <WrapperDesktop ref={ref}>{children}</WrapperDesktop>;
};

const WrapperMobile = forwardRef<
  HTMLDivElement,
  { children: JSX.Element; isOpen: boolean }
>(({ children, isOpen }, ref) => {
  usePortal({ isOpen });
  return (
    <div className="animate-fade-down fixed top-0 z-30 flex h-full w-full flex-col items-center justify-center bg-white/75 duration-100">
      <div ref={ref} className="mx-1 w-full max-w-md bg-white px-3 py-6">
        {children}
      </div>
    </div>
  );
});
WrapperMobile.displayName = "WrapperMobile";

const WrapperDesktop = forwardRef<HTMLDivElement, { children: JSX.Element }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="border-gray fixed right-5 top-20 xl:top-[71.3px] z-40  flex w-[400px] max-w-[400px] justify-center border-[0.5px] bg-white px-3 py-[19px] "
      >
        {children}
      </div>
    );
  },
);

WrapperDesktop.displayName = "WrapperDesktop";

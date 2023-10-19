import { useClickOutside } from "hooks/useClickOutside";
import { useHeaderPoppers } from "./hooks/useHeaderPoppers";
import { forwardRef, useRef } from "react";
import { Modal } from "components/Modal/Modal";

export function HeaderPoppers({
  type,
  resetPopper,
  children,
}: {
  readonly type: string | undefined;
  resetPopper: () => void;
  children: JSX.Element;
}) {
  const { isMobile } = useHeaderPoppers();

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, resetPopper);
  if (type === undefined) return <></>;

  if (isMobile) {
    return (
      <WrapperMobile isOpen={Boolean(type)} ref={ref}>
        {children}
      </WrapperMobile>
    );
  }

  return <WrapperDesktop ref={ref}>{children}</WrapperDesktop>;
}

const WrapperMobile = forwardRef<
  HTMLDivElement,
  { children: JSX.Element; isOpen: boolean }
>(({ children, isOpen }, ref) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="animate-fade-down flex h-full w-full flex-col items-center justify-center duration-100">
        <div ref={ref} className="mx-1 w-full max-w-md bg-white px-3 py-6">
          {children}
        </div>
      </div>
    </Modal>
  );
});
WrapperMobile.displayName = "WrapperMobile";

const WrapperDesktop = forwardRef<HTMLDivElement, { children: JSX.Element }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="border-gray md:-left-38 absolute -left-72 top-7 z-10 flex w-[400px] max-w-[400px] border-[0.5px] bg-white sm:-left-44 sm:top-[31px]"
      >
        {children}
      </div>
    );
  },
);

WrapperDesktop.displayName = "WrapperDesktop";

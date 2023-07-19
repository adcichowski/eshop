import { AccountPopper } from "components/Header/components/HeaderPoppers/components/AccountPopper";
import { CartPopper } from "components/Header/components/HeaderPoppers/components/CartPopper/CartPopper";
import { FavoritePopper } from "components/Header/components/HeaderPoppers/components/FavoritePopper";
import Portal from "components/Portal/Portal";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef } from "react";
import { useHeaderPoppers } from "./hooks/useHeaderPoppers";

export function HeaderPoppers({
  type,
  resetPopper,
}: {
  readonly type: string | undefined;
  resetPopper: () => void;
}) {
  const { isMobile } = useHeaderPoppers();

  if (type === undefined || isMobile === undefined) return <></>;

  if (isMobile) {
    return (
      <WrapperMobile isOpen={Boolean(type)}>
        <Poppers popper={type} resetPopper={resetPopper} />
      </WrapperMobile>
    );
  }

  return (
    <WrapperDesktop>
      <Poppers popper={type} resetPopper={resetPopper} />
    </WrapperDesktop>
  );
}

const WrapperMobile = ({
  children,
  isOpen,
}: {
  children: JSX.Element;
  isOpen: boolean;
}) => {
  return (
    <Portal isOpen={isOpen}>
      <div className="fixed top-0 flex h-full w-full animate-fade-down flex-col items-center justify-center bg-white/75 duration-100">
        <div className="mx-1 w-full max-w-md bg-white py-6 px-3">
          {children}
        </div>
      </div>
    </Portal>
  );
};

const WrapperDesktop = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="border-gray md:-left-38 absolute -left-72 top-7 z-10 flex w-[400px] max-w-[400px] justify-center border-[0.5px] bg-white px-3 py-[19px] sm:top-9 sm:-left-44">
      {children}
    </div>
  );
};

const Poppers = ({
  popper,
  resetPopper,
}: {
  readonly popper: string;
  resetPopper: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, resetPopper);
  return <div ref={ref}>{popperByType(popper)}</div>;
};

const popperByType = (popper: string) => {
  switch (popper) {
    case "cart":
      return <CartPopper />;
    case "account":
      return <AccountPopper />;
    case "favorite":
      return <FavoritePopper />;
    default:
      return <></>;
  }
};

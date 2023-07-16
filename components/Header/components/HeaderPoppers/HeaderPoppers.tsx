import { AccountPopper } from "components/Header/components/HeaderPoppers/components/AccountPopper";
import { CartPopper } from "components/Header/components/HeaderPoppers/components/CartPopper/CartPopper";
import { FavoritePopper } from "components/Header/components/HeaderPoppers/components/FavoritePopper";
import Portal from "components/Portal/Portal";
import { useEffect, useState } from "react";

const checkIsMobileDevice = (width: number) => width <= 775;

export function HeaderPoppers({ type }: { readonly type: string | undefined }) {
  const [isMobile, setIsMobile] = useState(
    checkIsMobileDevice(window.screen.availWidth)
  );
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const bodyWidth = entries[0].contentRect.width;
      if (checkIsMobileDevice(bodyWidth)) setIsMobile(true);
      if (!checkIsMobileDevice(bodyWidth)) setIsMobile(false);
    });
    resizeObserver.observe(window.document.body);
    return () => {
      resizeObserver.unobserve(window.document.body);
    };
  }, [isMobile]);
  if (type === undefined) return <></>;
  if (isMobile) {
    return (
      <WrapperMobile isOpen={Boolean(type)}>
        <Poppers popper={type} />
      </WrapperMobile>
    );
  }
  return (
    <WrapperDesktop>
      <Poppers popper={type} />
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
        <div className="mx-1 w-full max-w-md bg-white py-6">{children}</div>
      </div>
    </Portal>
  );
};

const WrapperDesktop = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="border-gray md:-left-38 absolute -left-72 top-7 z-10 flex w-[400px] max-w-[400px] justify-center border-[0.5px] bg-white py-[19px] sm:top-9 sm:-left-44">
      {children}
    </div>
  );
};

const Poppers = ({ popper }: { readonly popper: string }) => {
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

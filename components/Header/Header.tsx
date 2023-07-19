import Clsx from "clsx";
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { HeaderPoppers } from "components/Header/components/HeaderPoppers/HeaderPoppers";
import { usePopper } from "components/Popper/usePopper";
import { ToastsContainer } from "components/Toast/ToastsContainer";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";

import { headerCategories, navigationIcons } from "./constants";
export const Header = () => {
  const { saveParentPopper, typePopper, resetPopper } = usePopper();

  return (
    <div className="sticky top-0 z-30">
      <header role="banner" className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-3 place-items-center bg-white p-3 sm:p-4">
          <div className="flex w-full items-center gap-x-10 pl-5">
            <MenuIcon />
            <Autocomplete />
          </div>
          <div className="flex flex-col gap-3 text-center uppercase">
            <Link
              href="/"
              passHref
              className="text-2xl font-medium md:text-3xl xl:text-4xl"
            >
              <h1 className="text-lg md:text-3xl">PosterWall</h1>
            </Link>
            <p className="hidden text-xs opacity-70 md:inline-block">
              Shipping in 2-4 business days
              <span className="mx-1 inline-block before:relative before:-bottom-1 before:block before:h-4 before:w-[1px] before:bg-black"></span>
              free delivery from 199 PLN
            </p>
          </div>
          <div className="relative z-10">
            <ul
              aria-label="navigation icons"
              className="mr-5 flex w-full items-center justify-end gap-2 md:justify-start md:gap-4"
            >
              {navigationIcons.map(({ Icon, popper, ...propsArchon }) => (
                <li key={popper ?? propsArchon.href}>
                  <button
                    data-outside="false"
                    className={twMerge(
                      `relative cursor-pointer ${Clsx(
                        typePopper === popper &&
                          popper &&
                          "before:absolute before:-bottom-[9px] before:left-0 before:h-[1.5px] before:w-full before:translate-x-0.5 before:bg-black",
                        propsArchon.className,
                        propsArchon.href && "hidden sm:block"
                      )}`
                    )}
                    onClick={(e) => {
                      saveParentPopper(e, popper);
                    }}
                  >
                    {Icon}
                  </button>
                </li>
              ))}
            </ul>
            <HeaderPoppers resetPopper={resetPopper} type={typePopper} />
          </div>
        </div>
        <ul
          className="hidden justify-center gap-4 bg-black p-2 text-sm font-medium uppercase
          text-white sm:flex md:text-base"
          aria-label="poster categories"
        >
          {headerCategories.map((category) => (
            <li key={category}>
              <Link
                aria-label={`Go to category ${category}`}
                href={`poster-print/${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <ToastsContainer />
      </header>
    </div>
  );
};

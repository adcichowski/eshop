import Clsx from "clsx";
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { HeaderPoppers } from "components/Header/components/HeaderPoppers/HeaderPoppers";
import { usePopper } from "components/Popper/usePopper";
import { ToastsContainer } from "components/Toast/ToastsContainer";
import Link from "next/link";

import { headerCategories, navigationIcons } from "./constants";
export const Header = () => {
  const { saveParentPopper, typePopper, popperRef } = usePopper();
  return (
    <div className="relative h-14 sm:h-[100px] md:h-40">
      <div className="fixed left-0 z-30 w-full">
        <header className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-3 place-items-center bg-white p-3 sm:p-4">
            <Autocomplete />
            <div className="flex flex-col gap-3 text-center uppercase">
              <Link
                href="/"
                passHref
                className="text-2xl font-medium md:text-3xl xl:text-4xl"
              >
                <h1>PosterWall</h1>
              </Link>
              <p className="hidden text-sm opacity-70 md:inline-block">
                Shipping in 2-4 business days
                <span className="mx-1 inline-block before:relative  before:-bottom-1 before:block before:h-4 before:w-[1px] before:bg-black"></span>
                free delivery from 199 PLN
              </p>
            </div>
            <div ref={popperRef} className="relative z-10">
              <ul aria-label="navigation icons" className="mr-5 flex gap-4">
                {navigationIcons.map(({ Icon, popper, ...propsArchon }) => (
                  <li
                    key={popper ?? propsArchon.href}
                    onClick={(e) => saveParentPopper(e, popper)}
                    className={`relative cursor-pointer ${Clsx(
                      typePopper === popper &&
                        popper &&
                        "before:absolute before:-bottom-[9px] before:h-[1.5px] before:w-full before:translate-x-0.5 before:bg-black"
                    )}`}
                  >
                    {Icon}
                  </li>
                ))}
              </ul>
              {typePopper && <HeaderPoppers type={typePopper} />}
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
    </div>
  );
};

import Clsx from "clsx";
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { HeaderPoppers } from "components/Header/components/HeaderPoppers/HeaderPoppers";
import { usePopper } from "components/Popper/usePopper";
import Link from "next/link";
import React from "react";

import { headerCategories, navigationIcons } from "./constants";
export const Header = () => {
  const { saveParentPopper, typePopper, popperRef } = usePopper();
  return (
    <>
      <header className="grid place-items-center grid-cols-3 items-center min-w-md w-full flex-column z-20 relative justify-around p-3 sm:p-4">
        <Autocomplete className="ml-14" />
        <div className="flex flex-col uppercase text-center gap-3">
          <Link
            href="/"
            passHref
            className="font-medium xl:text-4xl md:text-3xl text-2xl"
          >
            <h1>PosterWall</h1>
          </Link>
          <p className="text-sm hidden md:inline-block opacity-70">
            Shipping in 2-4 business days
            <span className="inline-block before:block before:relative  before:w-[1px] before:h-4 before:bg-black mx-1 before:-bottom-1"></span>
            free delivery from 199 PLN
          </p>
        </div>
        <div ref={popperRef} className="relative z-20">
          <ul aria-label="navigation icons" className="flex gap-4 mr-5">
            {navigationIcons.map(({ Icon, popper, ...propsArchon }) => (
              <li
                key={popper ?? propsArchon.href}
                onClick={(e) => saveParentPopper(e, popper)}
                className={`relative cursor-pointer ${Clsx(
                  typePopper === popper &&
                    popper &&
                    "before:w-full before:h-[1.5px] before:translate-x-0.5 before:absolute before:bg-black before:-bottom-[9px]"
                )} hover:text-gray-600 text-gray-400`}
              >
                {Icon}
              </li>
            ))}
          </ul>
          {typePopper && <HeaderPoppers type={typePopper} />}
        </div>
      </header>
      <ul
        className="hidden sm:flex uppercase bg-black text-white font-medium gap-4 justify-center
p-2 text-sm md:text-base"
        aria-label="poster categories"
      >
        {headerCategories.map((category) => (
          <li key={category}>
            <Link
              aria-label={`Go to category ${category}`}
              href={`/${category}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

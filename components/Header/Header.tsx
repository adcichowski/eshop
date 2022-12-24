import Clsx from "clsx";
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { HeaderPoppers } from "components/Popper/HeaderPoppers/HeaderPoppers";
import { usePopper } from "components/Popper/usePopper";
import { StaticLink } from "components/StaticLink/StaticLink";
import Link from "next/link";
import React from "react";

import { headerCategories, navigationIcons } from "./constants";
export const Header = () => {
  const { saveParentPopper, parentPopper, typePopper, popperRef } = usePopper();
  return (
    <>
      <header className="grid place-items-center grid-cols-3 items-center min-w-md w-full flex-column z-10 relative justify-around p-3 sm:p-4">
        <Autocomplete className="ml-14" />
        <div className="flex flex-col uppercase text-center gap-3">
          <Link href="/" passHref>
            <a className="font-medium xl:text-4xl md:text-3xl text-2xl">
              <h1>PosterWall</h1>
            </a>
          </Link>
          <p className="text-sm hidden md:inline-block opacity-70">
            Wysyłka w 2-4 dni robocze
            <span className="inline-block before:block before:relative  before:w-[1px] before:h-4 before:bg-black mx-1 before:-bottom-1"></span>
            darmowa dostawa od 199zł
          </p>
        </div>
        <div ref={popperRef} className="relative z-20">
          <ul aria-label="navigation icons" className="flex gap-4 mr-5">
            {navigationIcons.map(({ Icon, popper, ...propsArchon }) => (
              <>
                <li
                  onClick={(e) => saveParentPopper(e, popper)}
                  className={`relative ${Clsx(
                    typePopper === popper &&
                      popper &&
                      "before:w-full before:h-[1.5px] before:absolute before:bg-black before:-bottom-[9px]"
                  )} hover:text-gray-600 text-gray-400`}
                  key={propsArchon?.href ?? popper}
                >
                  <Icon />
                </li>
              </>
            ))}
          </ul>
          {parentPopper && typePopper && (
            <div>
              <div className="absolute flex justify-center py-[19px] bg-white border-gray border-[0.5px] top-9 -left-28 max-w-[400px] w-[400px] z-10">
                <HeaderPoppers type={typePopper} />
              </div>
            </div>
          )}
        </div>
      </header>
      <ul
        className="hidden sm:flex uppercase bg-black text-white font-medium gap-4 justify-center
p-2 text-sm md:text-base"
        aria-label="poster categories"
      >
        {headerCategories.map((category) => (
          <li key={category}>
            <StaticLink
              aria-label={`Go to category ${category}`}
              href={`/${category}`}
            >
              {category}
            </StaticLink>
          </li>
        ))}
      </ul>
    </>
  );
};

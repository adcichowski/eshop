import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { Button } from "components/Button/Button";
import { Popover } from "components/Popover/Popover";
import { usePopper } from "components/Popover/usePopper";
import { StaticLink } from "components/StaticLink/StaticLink";
import Link from "next/link";
import React, { useEffect } from "react";

import { headerCategories, navigationIcons } from "./constants";
export const Header = () => {
  const { popperRef, saveParentPopper, parentPopper } = usePopper();

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
        <div className="relative">
          <ul aria-label="navigation icons" className="flex gap-4 mr-5">
            {navigationIcons.map(({ Icon, ...propsArchon }) => (
              <li
                onClick={saveParentPopper}
                className="hover:text-gray-600 text-gray-400"
                key={propsArchon.href}
              >
                <Icon />
              </li>
            ))}
          </ul>
          {parentPopper && (
            <Popover ref={popperRef}>
              <div className="flex flex-col text-center top-4 left-4 px-10">
                <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm">
                  <span className="w-full whitespace-nowrap">Zaloguj się</span>
                </Button>
                <div className="text-sm line leading-6">
                  Jesteś tu pierwszy raz?
                </div>
                <Link href="/register">
                  <span className="underline text-sm">Zarejestruj się</span>
                </Link>
              </div>
            </Popover>
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

import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { ToastsContainer } from "components/Toast/ToastsContainer";
import Link from "next/link";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";

import { NavigationIcons } from "./components/NavigationIcons";
import { HeaderCategories } from "./components/HeaderCategories";

export const Header = () => {
  return (
    <div className="sticky top-0 z-30 self-stretch">
      <header role="banner">
        <div className="grid grid-cols-3 place-items-center bg-white p-3 max-w-[1440px] mx-auto">
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
            <p className="hidden text-xs opacity-70 xl:inline-block mb-1">
              Shipping in 2-4 business days
              <span className="mx-1 inline-block before:relative before:-bottom-1 before:block before:h-4 before:w-[1px] before:bg-black"></span>
              free delivery from 199 PLN
            </p>
          </div>
          <NavigationIcons />
        </div>
        <HeaderCategories />
        <ToastsContainer />
      </header>
    </div>
  );
};

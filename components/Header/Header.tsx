import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { StaticLink } from "components/StaticLink/StaticLink";

import Link from "next/link";
import { headerCategories, navigationIcons } from "./constants";
export const Header = () => (
  <>
    <header className="grid place-items-center grid-cols-3 items-center min-w-md w-full flex-column justify-around p-3 sm:p-4">
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
      <ul aria-label="navigation icons" className="flex gap-4 mr-5">
        {navigationIcons.map(({ Icon, ...propsArchon }) => (
          <li
            className="hover:text-gray-600 text-gray-400"
            key={propsArchon.href}
          >
            <StaticLink {...propsArchon} className="flex justify-center">
              <Icon aria-hidden="true" />
            </StaticLink>
          </li>
        ))}
      </ul>
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

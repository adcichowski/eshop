import { Autocomplete } from "components/Autocomplete/Autocomplete";
import { StaticLink } from "components/StaticLink/StaticLink";

import Link from "next/link";
import { navigationIcons } from "./constants";
export const Header = () => (
  <>
    <header className="flex items-center min-w-md w-full flex-column justify-around py-2">
      <Autocomplete className="pl-4" />
      <div className="flex flex-col uppercase text-center gap-3 -ml-2 pt-4">
        <Link href="/" passHref>
          <a className="font-medium xl:text-4xl md:text-3xl text-2xl">
            <h1>PosterWall</h1>
          </a>
        </Link>
        <p className="text-sm hidden sm:inline-block">
          Wysyłka w 2-4 dni robocze | darmowa dostawa od 199zł
        </p>
      </div>
      <ul aria-label="navigation icons" className="ml-4 md:flex gap-4">
        {navigationIcons.map(({ Icon, ...propsArchon }) => (
          <li
            className="hover:text-gray-600 text-gray-400"
            key={propsArchon.href}
          >
            <StaticLink {...propsArchon}>
              <div className="w-6 h-6 md:w-7 md:h-7">
                <Icon />
              </div>
            </StaticLink>
          </li>
        ))}
      </ul>
    </header>
  </>
);

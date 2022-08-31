/* eslint-disable jsx-a11y/alt-text */
import { Autocomplete } from "components/Autocomplete/Autocomplete";

import Link from "next/link";
import { navigationIcons } from "./constants";
export const Header = () => {
  return (
    <>
      <header className="flex items-center min-w-md w-full flex-column justify-around">
        <Autocomplete className="pt-[22px] pb-12 pl-[60px]" />
        <div className="flex flex-col uppercase text-center gap-[10px] -ml-32 pt-4">
          <Link href="/" passHref>
            <a className="font-medium xl:text-4xl md:text-3xl sm:text-2xl text-base">
              <h1>PosterWall</h1>
            </a>
          </Link>
          <p>Wysyłka w 2-4 dni robocze | darmowa dostawa od 199zł</p>
        </div>
        <ul aria-label="navigation icons" className="flex gap-4 pr-[71.5px]">
          {navigationIcons.map(({ Icon, ...propsArchon }) => (
            <li
              className="hover:text-gray-600 text-gray-400"
              key={propsArchon.href}
            >
              <Archon {...propsArchon}>
                <div className="w-[27.5px] h-[27.5px]">
                  <Icon />
                </div>
              </Archon>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

function Archon({
  children,
  ...props
}: {
  "aria-label": string;
  href: string;
  children: React.ReactNode;
}) {
  const isFirstCharSlash = props.href.charAt(0) === "/";
  if (isFirstCharSlash) {
    return (
      <Link {...props} passHref>
        <a>{children}</a>
      </Link>
    );
  }
  return <a {...props}>{children}</a>;
}

/* eslint-disable jsx-a11y/alt-text */
import { Autocomplete } from "components/Autocomplete/Autocomplete";

import Link from "next/link";
import { headerCategories, navigationIcons } from "./constants";
export const Header = () => {
  return (
    <>
      <header className="grid items-center max-w-7xl min-w-md w-full mx-auto py-4 px-3 md:px-1 my-2 grid-cols-3 ">
        <Autocomplete />
        <Link href="/" passHref>
          <a className="justify-self-center uppercase">
            <h1 className="font-medium md:text-3xl text-2xl ">PosterWall</h1>
          </a>
        </Link>
        <ul
          aria-label="navigation icons"
          className="flex justify-self-end gap-3"
        >
          {navigationIcons.map(({ Icon, ...propsArchon }) => (
            <li
              className="text-gray-600 hover:text-gray-400"
              key={propsArchon.href}
            >
              <Archon {...propsArchon}>
                <div className="md:w-7 md:h-7 w-5 h-5">
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

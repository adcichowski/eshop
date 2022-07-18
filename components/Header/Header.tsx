/* eslint-disable jsx-a11y/alt-text */
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import UserIcon from "./icons/user.svg";
import CartIcon from "./icons/cart.svg";
import FavoriteIcon from "./icons/favorite.svg";
import Link from "next/link";
export const Header = () => {
  const icons = [
    {
      href: "/me",
      "aria-label": "Check your profile.",
      Icon: UserIcon,
    },

    {
      href: "/cart",
      "aria-label": "Check out your cart.",
      Icon: CartIcon,
    },
    {
      href: "/favorites",
      "aria-label": "Check your favorites products",
      Icon: FavoriteIcon,
    },
  ];
  return (
    <header className="grid items-center max-w-7xl min-w-md w-full mx-auto pt-6 grid-cols-3 grid-rows-2">
      <Autocomplete className="-ml-2" />
      <h1 className="font-medium md:text-3xl text-2xl justify-self-center uppercase">
        PosterWall
      </h1>
      <ul aria-label="navigation icons" className="flex justify-self-end gap-3">
        {icons.map(({ Icon, ...propsArchon }) => (
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
      <ul aria-label="categories in shop">{}</ul>
    </header>
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

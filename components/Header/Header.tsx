/* eslint-disable jsx-a11y/alt-text */
import { Autocomplete } from "components/Autocomplete/Autocomplete";
import Image from "next/image";
import Cart from "./icons/cart.svg";
import FacebookIcon from "./icons/facebook.svg";
import InstagramIcon from "./icons/instagram.svg";
import FavoriteIcon from "./icons/favorite.svg";
import Link from "next/link";
export const Header = () => {
  const icons = [
    {
      href: "https://www.facebook.com/",
      "aria-label": "Go to our facebook.",
      img: {
        src: "/icons/facebook.svg",
        alt: "Facebook icon",
      },
    },
    {
      href: "https://www.instagram.com/",
      "aria-label": "Go to our instagram.",
      img: {
        src: "/icons/instagram.svg",
        alt: "Instagram icon",
      },
    },
    {
      href: "/cart",
      "aria-label": "Check out your cart.",
      img: {
        src: "/icons/cart.svg",
        alt: "User icon",
      },
    },
    {
      href: "/favorites",
      "aria-label": "Check your favorites products",
      img: {
        src: "/icons/favorite.svg",
        alt: "Heart icon",
      },
    },
  ];
  return (
    <header className="grid max-w-7xl min-w-md w-full mx-auto p-8 grid-cols-3">
      <Autocomplete className="-ml-2" />
      <h1 className="font-medium text-3xl justify-self-center uppercase">
        PosterWall
      </h1>
      <ul className="flex justify-self-end">
        {icons.map(({ img, ...propsArchon }) => (
          <li className="mx-1" key={propsArchon.href}>
            <Archon {...propsArchon}>
              <Image {...img} width={28} height={28} />
            </Archon>
          </li>
        ))}
      </ul>
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

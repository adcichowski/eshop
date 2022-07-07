import { Autocomplete } from "components/Autocomplete/Autocomplete";
import Cart from "./icons/cart.svg";
import FacebookIcon from "./icons/facebook.svg";
import InstagramIcon from "./icons/instagram.svg";
export const Header = () => {
  const icons = [
    {
      href: "facebook.com",
      label: "Go to our facebook.",
      icon: <FacebookIcon />,
    },
    {
      href: "instagram.com",
      label: "Go to our instagram.",
      icon: <InstagramIcon />,
    },
    { href: "/me", label: "Check your profile.", icon: <Cart /> },
    { href: "facebook", label: "Go to our facebook.", icon: <Cart /> },
  ];
  return (
    <header className="flex min-w-md w-full mx-auto p-8 justify-between">
      <Autocomplete />
      <h1 className="-ml-12 font-medium text-center text-3xl uppercase">
        PosterWall
      </h1>
      <ul>
        <li>
          <a aria-label="Go to our facebook." href="facebook.com">
            <Cart />
          </a>
        </li>
        <li>
          <a aria-label="Go to our instagram." href="instagram.com"></a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </header>
  );
};

import UserIcon from "./icons/user.svg";
import CartIcon from "./icons/cart.svg";
import FacebookIcon from "./icons/facebook.svg";
import FavoriteIcon from "./icons/favorite.svg";
import InstagramIcon from "./icons/instagram.svg";

export const navigationIcons = [
  {
    href: "facebook.com",
    "aria-label": "Go to our facebook.",
    Icon: FacebookIcon,
  },
  {
    href: "instagram.com",
    "aria-label": "Go to our instagram.",
    Icon: InstagramIcon,
  },
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

export const headerCategories = [
  "animals",
  "black&white",
  "landscape",
  "architecture",
  "botanics",
  "others",
];

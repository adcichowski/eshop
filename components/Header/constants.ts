import UserIcon from "./icons/user.svg";
import CartIcon from "./icons/cart.svg";
import FacebookIcon from "./icons/facebook.svg";
import FavoriteIcon from "./icons/favorite.svg";
import InstagramIcon from "./icons/instagram.svg";

export const navigationIcons = [
  {
    href: "facebook.com",
    "aria-label": "facebook",
    Icon: FacebookIcon,
  },
  {
    href: "instagram.com",
    "aria-label": "instagram",
    Icon: InstagramIcon,
  },
  {
    popper: "account",
    "aria-label": "your profile",
    Icon: UserIcon,
  },

  {
    popper: "cart",
    "aria-label": "Check your cart",
    Icon: CartIcon,
  },
  {
    popper: "favorite",
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

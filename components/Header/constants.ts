import UserIcon from "./icons/user.svg";
import CartIcon from "./icons/cart.svg";
import FavoriteIcon from "./icons/favorite.svg";
export const navigationIcons = [
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

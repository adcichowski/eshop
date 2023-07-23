import UserIcon from "./icons/user.svg";
import CartIcon from "./icons/cart.svg";
import FacebookIcon from "./icons/facebook.svg";
import FavoriteIcon from "./icons/favorite.svg";
import InstagramIcon from "./icons/instagram.svg";
import { IconAbsolute } from "components/IconAbsolute/IconAbsolute";

export const navigationIcons = [
  {
    href: "facebook.com",
    Icon: <FacebookIcon />,
    className: "w-3 h-6 md:w-4 md:h-7",
  },
  {
    href: "instagram.com",
    Icon: <InstagramIcon />,
    className: "w-5 h-5 md:w-7 md:h-7",
  },
  {
    popper: "account",
    Icon: <UserIcon />,
    className: "w-5 h-5 md:w-7 md:h-7",
  },

  {
    popper: "cart",
    className: "w-6 h-6 md:w-8 md:h-7",
    Icon: (
      <IconAbsolute>
        <CartIcon />
      </IconAbsolute>
    ),
  },
  {
    popper: "favorite",
    className: "w-[24px] h-5 md:w-[32px] md:h-7",
    Icon: <FavoriteIcon />,
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

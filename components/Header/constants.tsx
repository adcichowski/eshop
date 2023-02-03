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
  },
  {
    href: "instagram.com",
    Icon: <InstagramIcon />,
  },
  {
    popper: "account",
    Icon: <UserIcon />,
  },

  {
    popper: "cart",
    Icon: (
      <IconAbsolute>
        <CartIcon />
      </IconAbsolute>
    ),
  },
  {
    popper: "favorite",
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

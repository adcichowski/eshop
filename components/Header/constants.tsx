import { FacebookIcon } from "lucide-react";
import { User2Icon } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { IconAbsolute } from "components/IconAbsolute/IconAbsolute";

const ICONS_SETTINGS = {
  size: 30,
  strokeWidth: 1.5,
};
export const navigationIcons = [
  {
    href: "facebook.com",
    Icon: <FacebookIcon {...ICONS_SETTINGS} />,
  },
  {
    href: "instagramIcon.com",
    Icon: <InstagramIcon {...ICONS_SETTINGS} />,
  },
  {
    popper: "account",
    Icon: <User2Icon {...ICONS_SETTINGS} />,
  },
  {
    popper: "cart",
    Icon: (
      <IconAbsolute>
        <ShoppingCartIcon {...ICONS_SETTINGS} />
      </IconAbsolute>
    ),
  },
  {
    popper: "favorite",
    Icon: <HeartIcon {...ICONS_SETTINGS} />,
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

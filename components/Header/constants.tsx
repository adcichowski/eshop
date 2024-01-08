import { FacebookIcon } from "lucide-react";
import { User2Icon } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { IconAbsolute } from "components/IconAbsolute/IconAbsolute";
import { useClientContext } from "context/ClientContext/ClientContext";
import { useMemo } from "react";

const ICONS_SETTINGS = {
  className: "md:h-7 h-5 w-auto stroke-[1.5]",
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
    Icon: () => {
      const { cart } = useClientContext();
      const amountItems = useMemo(
        () => cart?.reduce((init, item) => init + item.amount, 0),
        [cart],
      );
      return (
        <IconAbsolute amountItems={amountItems}>
          <ShoppingCartIcon {...ICONS_SETTINGS} />
        </IconAbsolute>
      );
    },
  },
  {
    popper: "favorite",
    Icon: <HeartIcon {...ICONS_SETTINGS} />,
  },
];

export const headerCategories = [
  { title: "animals" },
  { title: "black&white", slug: "black-and-white" },
  { title: "landscape" },
  { title: "architecture" },
  { title: "botanic" },
  { title: "others" },
];

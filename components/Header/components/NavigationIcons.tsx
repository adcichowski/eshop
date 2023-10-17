import React from "react";
import { navigationIcons } from "../constants";
import Clsx from "clsx";
import { HeaderPoppers } from "components/Header/components/HeaderPoppers/HeaderPoppers";
import { usePopper } from "components/Popper/usePopper";
import { twMerge } from "tailwind-merge";
import { Poppers } from "./HeaderPoppers/components/Poppers";
import Link from "next/link";
import router from "next/navigation";
import { headers } from "next/headers";
export function NavigationIcons() {
  return (
    <div className="relative z-10">
      <ul
        aria-label="navigation icons"
        className="mr-5 flex w-full items-center justify-end gap-2 md:justify-start md:gap-4"
      >
        {navigationIcons.map(({ Icon, popper, ...propsArchon }) => (
          <li className="inline-flex" key={popper ?? propsArchon.href}>
            <Link
              key={popper}
              href={propsArchon.href ? propsArchon.href : `/view/${popper}`}
              data-outside="false"
              className={twMerge(
                `relative cursor-pointer ${Clsx(
                  popper &&
                    "before:absolute before:-bottom-[9px] before:left-0 before:h-[1.5px] before:w-full before:translate-x-0.5 before:bg-black",
                  propsArchon.href && "hidden sm:block",
                )}`,
              )}
              scroll={false}
            >
              {Icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

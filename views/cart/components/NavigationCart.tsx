import React, { HTMLProps } from "react";
import HumanIcon from "../assets/human.svg";
import BagIcon from "../assets/bag.svg";
import CheckIcon from "../assets/check.svg";
import CarIcon from "../assets/car.svg";
import { IconNavigationCart } from "./IconNavigationCart";
import { twMerge } from "tailwind-merge";
const navigationStepsIcons = [
  {
    Icon: BagIcon,
    className: "w-5 md:w-7",
  },
  {
    Icon: HumanIcon,
    className: "w-5 md:w-7",
  },
  {
    Icon: CarIcon,
    className: "w-6 md:w-8",
  },
  {
    Icon: CheckIcon,
    className: "w-5 md:w-7",
  },
] satisfies { Icon: Element; className: string }[];

export function NavigationCart() {
  return (
    <header className="mt-8">
      <ul className="flex flex-wrap items-center">
        {navigationStepsIcons.map(({ Icon, className }) => (
          <React.Fragment key={Icon.name}>
            <IconNavigationCart key={Icon.name}>
              <div className={twMerge(className)}>
                <Icon />
              </div>
            </IconNavigationCart>
            <hr className="h-[.5px] grow bg-black" />
          </React.Fragment>
        ))}
      </ul>
    </header>
  );
}

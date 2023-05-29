import React from "react";
import HumanIcon from "../assets/human.svg";
import BagIcon from "../assets/bag.svg";
import CheckIcon from "../assets/check.svg";
import CarIcon from "../assets/car.svg";
import { IconNavigationCart } from "./IconNavigationCart";
const navigationStepsIcons = [BagIcon, HumanIcon, CarIcon, CheckIcon];

export function NavigationCart() {
  return (
    <header className="mt-8">
      <ul className="flex items-center">
        {navigationStepsIcons.map((Icon) => (
          <React.Fragment key={Icon.name}>
            <IconNavigationCart key={Icon.name}>
              <Icon />
            </IconNavigationCart>
            <hr className="h-[.5px] grow bg-black" />
          </React.Fragment>
        ))}
      </ul>
    </header>
  );
}

import React from "react";
import HumanIcon from "../assets/human.svg";
import BagIcon from "../assets/bag.svg";
import CheckIcon from "../assets/check.svg";
import CarIcon from "../assets/car.svg";
import { twMerge } from "tailwind-merge";
import {
  StepsFormOrder,
  useOrderFormContext,
} from "./OrderFormStepper/context/OrderFormContext";
import clsx from "clsx";
const navigationStepsIcons = [
  {
    stepName: "cart",
    Icon: BagIcon,
    className: "w-5 md:w-7",
  },
  {
    stepName: "account",
    Icon: HumanIcon,
    className: "w-5 md:w-7",
  },
  {
    stepName: "shipping",
    Icon: CarIcon,
    className: "w-6 md:w-8",
  },
  {
    stepName: "summary",
    Icon: CheckIcon,
    className: "w-5 md:w-7",
  },
] satisfies { Icon: Element; className: string; stepName: StepsFormOrder }[];

export function NavigationCart() {
  const { step } = useOrderFormContext();
  return (
    <header className="mt-8">
      <ul className="flex flex-wrap items-center">
        {navigationStepsIcons.map(({ Icon, className, stepName }) => (
          <React.Fragment key={Icon.name}>
            <div
              aria-hidden="true"
              className={twMerge(
                `rounded-full border p-[15px] text-primary ${clsx(
                  stepName === step && "border-none bg-primary text-white"
                )}`
              )}
            >
              <div className={twMerge(className)}>
                <Icon />
              </div>
            </div>
            <hr className="h-[.5px] grow bg-black" />
          </React.Fragment>
        ))}
      </ul>
    </header>
  );
}

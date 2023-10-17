import { ShoppingBag, User2, Truck, Wallet, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import React from "react";
import {
  StepsFormOrder,
  useOrderFormContext,
} from "./OrderFormStepper/context/OrderFormContext";
import clsx from "clsx";
const navigationStepsIcons = [
  {
    stepName: "cart",
    Icon: ShoppingBag,
  },
  {
    stepName: "account",
    Icon: User2,
  },
  {
    stepName: "shipping",
    Icon: Truck,
  },
  { stepName: "payment", Icon: Wallet },
  {
    stepName: "summary",
    Icon: Check,
  },
] satisfies { Icon: LucideIcon; stepName: StepsFormOrder }[];

export function NavigationCart() {
  const step = "cart";
  return (
    <header className="mt-8">
      <ul className="flex flex-wrap items-center">
        {navigationStepsIcons.map(({ Icon, stepName }) => (
          <React.Fragment key={Icon.name}>
            <div
              aria-hidden="true"
              className={twMerge(
                `text-primary rounded-full border p-4 ${clsx(
                  stepName === step && "bg-primary border-none text-white",
                )}`,
              )}
            >
              <Icon size={30} />
            </div>
            <hr className="h-[.5px] grow bg-black" />
          </React.Fragment>
        ))}
      </ul>
    </header>
  );
}

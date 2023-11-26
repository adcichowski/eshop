import { ShoppingBag, User2, Truck, Wallet, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import React from "react";
import clsx from "clsx";

export type StepsInForm = "details" | "account" | "payment" | "summary";
const navigationStepsIcons = [
  {
    stepName: "details",
    Icon: ShoppingBag,
  },
  {
    stepName: "account",
    Icon: User2,
  },
  { stepName: "payment", Icon: Wallet },
  {
    stepName: "summary",
    Icon: Check,
  },
] satisfies { Icon: LucideIcon; stepName: string }[];

export function NavigationCart({ step }: { step: StepsInForm }) {
  return (
    <header className="mt-8">
      <ul className="flex flex-wrap items-center">
        {navigationStepsIcons.map(({ Icon, stepName }) => (
          <React.Fragment key={stepName}>
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

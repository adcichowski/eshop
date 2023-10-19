"use client";
import React from "react";
import { navigationIcons } from "../constants";
import Clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Action } from "components/Action/Action";
import { usePopper } from "components/Popper/usePopper";
import { HeaderPoppers } from "./HeaderPoppers/HeaderPoppers";
import { Poppers } from "./HeaderPoppers/components/Poppers";

export function NavigationIcons() {
  const { saveParentPopper, typePopper, resetPopper } = usePopper();

  return (
    <div className="relative">
      <ul aria-label="navigation icons" className="mr-5 flex gap-2 md:gap-4">
        {navigationIcons.map(({ Icon, popper, ...propsArchon }) => (
          <li key={popper ?? propsArchon.href}>
            <Action
              className={twMerge(
                `relative cursor-pointer ${Clsx(
                  popper &&
                    typePopper === popper &&
                    "before:absolute before:-bottom-[4px] before:left-0 before:h-[1.5px] before:w-full before:translate-x-0.5 before:bg-black",
                  propsArchon.href && "hidden sm:block",
                )}`,
              )}
              as={propsArchon.href ? "link" : "button"}
              key={popper}
              onClick={() => {
                saveParentPopper(popper);
              }}
              href={propsArchon.href ? propsArchon.href : ""}
              data-outside="false"
            >
              {Icon}
            </Action>
          </li>
        ))}
        <HeaderPoppers resetPopper={resetPopper} type={typePopper}>
          <Poppers popper={typePopper} />
        </HeaderPoppers>
      </ul>
    </div>
  );
}

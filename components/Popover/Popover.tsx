import React from "react";
import ReactDOM from "react-dom";

export const Popover = React.forwardRef<
  HTMLDivElement,
  { readonly children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute flex justify-center py-[19px] bg-white border-gray border-[0.5px]"
    >
      {children}
    </div>
  );
});

Popover.displayName = "Popover";

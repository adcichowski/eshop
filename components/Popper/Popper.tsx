import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Popper = React.forwardRef<
  HTMLDivElement,
  { readonly children: React.ReactNode }
>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

Popper.displayName = "Popper";

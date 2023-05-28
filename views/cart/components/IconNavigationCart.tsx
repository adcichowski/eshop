import React from "react";

export function IconNavigationCart({ children }: { children: JSX.Element }) {
  return (
    <div aria-hidden="true" className="rounded-full border p-[15px]">
      {children}
    </div>
  );
}

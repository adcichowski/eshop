import React from "react";

export function IconAbsolute({
  children,
  amountItems,
}: {
  readonly children: JSX.Element;
  amountItems: number | undefined;
}) {
  if (!amountItems) return children;
  return (
    <div>
      {children}
      <div className="absolute -top-1 right-0 flex h-[18px] w-[18px] items-center justify-center rounded-[9px] bg-black text-xs text-white">
        {amountItems}
      </div>
    </div>
  );
}

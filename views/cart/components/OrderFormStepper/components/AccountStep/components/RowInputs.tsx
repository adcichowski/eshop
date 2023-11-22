import React from "react";

export const RowInputs = ({ children }: { children: JSX.Element[] }) => (
  <div className="flex gap-x-2 gap-y-2 max-[600px]:flex-wrap ">{children}</div>
);

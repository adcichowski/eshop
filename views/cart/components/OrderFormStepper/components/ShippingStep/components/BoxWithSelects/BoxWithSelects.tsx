import React from "react";

export function BoxWithSelects({
  header,
  id,
  children,
}: {
  header: string;
  id: string;
  children: JSX.Element;
}) {
  return (
    <section id={id} className="flex flex-col">
      <h4
        className="my-4 w-full bg-green-100 py-4 text-center text-lg"
        aria-labelledby={id}
      >
        {header}
      </h4>
      <div className="mb-3">{children}</div>
    </section>
  );
}

import React from "react";

export default function ContentInStep({
  children,
  header,
}: {
  children: JSX.Element;
  header: string;
}) {
  return (
    <article id="content-section" className="mx-2 sm:mx-0">
      <h2
        className="my-4 text-xl font-medium"
        aria-labelledby="content-section"
      >
        {header}
      </h2>
      {children}
    </article>
  );
}

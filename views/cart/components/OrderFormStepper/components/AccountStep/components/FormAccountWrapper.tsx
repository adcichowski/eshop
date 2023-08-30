import React from "react";

export default function FormAccountWrapper({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <form className="w-full border border-gray-200 pb-4">
      <header className="bg-green-100 py-4 text-center">
        <h3>{title}</h3>
      </header>
      <section className="mt-4 flex w-full flex-col gap-y-2 px-4">
        {children}
      </section>
    </form>
  );
}

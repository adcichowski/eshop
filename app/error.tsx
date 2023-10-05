"use client";
import React from "react";
import ShoppingError from "public/shopping-error.svg";
import { Action } from "components/Action/Action";
export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <section className="flex flex-col items-center gap-4 grow mt-8">
      <div className="max-w-[200px] w-full opacity-80">
        <ShoppingError />
      </div>
      <h2 className="text-2xl font-semibold">Oh no!</h2>
      <p className="text-center">{error.message}</p>
      <Action as="link" href={"/"}>
        Back to home
      </Action>
    </section>
  );
}

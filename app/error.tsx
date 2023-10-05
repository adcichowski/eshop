"use client";
import React from "react";
import ShoppingError from "public/shopping-error.svg";
import { Button } from "components/Button/Button";
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
      <h2 className="text-xl text-center">{error.message}</h2>
      <Button className="p-3 text-sm">Back to home</Button>
    </section>
  );
}

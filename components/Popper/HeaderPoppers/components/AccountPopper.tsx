import { Button } from "components/Button/Button";
import Link from "next/link";
import React from "react";

export function AccountPopper() {
  return (
    <div className="flex flex-col text-center w-full px-14">
      <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm">
        <span className="whitespace-nowrap">Log in</span>
      </Button>
      <div className="text-sm line leading-6">
        Are you here for the first time?
      </div>
      <Link href="/register">
        <span className="underline text-sm cursor-pointer">Sign up</span>
      </Link>
    </div>
  );
}

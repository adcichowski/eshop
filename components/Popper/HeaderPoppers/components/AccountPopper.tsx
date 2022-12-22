import { Button } from "components/Button/Button";
import Link from "next/link";
import React from "react";

export function AccountPopper() {
  return (
    <div className="flex flex-col text-center px-10">
      <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm">
        <span className="w-full whitespace-nowrap">Zaloguj się</span>
      </Button>
      <div className="text-sm line leading-6">Jesteś tu pierwszy raz?</div>
      <Link href="/register">
        <span className="underline text-sm">Zarejestruj się</span>
      </Link>
    </div>
  );
}

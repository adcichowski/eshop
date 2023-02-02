import { Button } from "components/Button/Button";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Spinner } from "components/Spinner/Spinner";

export function AccountPopper() {
  const { status, data } = useSession();

  return (
    <div className="flex flex-col text-center w-full px-14">
      {status === "loading" && <Spinner />}
      {status === "authenticated" && <Authenticated />}
      {status === "unauthenticated" && <Unauthenticated />}
    </div>
  );
}

const Unauthenticated = () => (
  <>
    <Button className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm">
      <span className="whitespace-nowrap">Log in</span>
    </Button>
    <div className="text-sm line leading-6">
      Are you here for the first time?
    </div>
    <Link href="/account">
      <span className="underline text-sm cursor-pointer">Sign up</span>
    </Link>
  </>
);

const Authenticated = () => (
  <>
    <Button
      onClick={() => signOut()}
      className="md:text-sm px-16 py-[5px] rounded-[10px] text-sm"
    >
      <span className="whitespace-nowrap">Log out</span>
    </Button>
    <div className="text-sm line leading-6">
      Do you wanna see your profile?{" "}
      <div>
        <Link href="/account">
          <span className="underline text-sm cursor-pointer">Check it.</span>
        </Link>
      </div>
    </div>
  </>
);

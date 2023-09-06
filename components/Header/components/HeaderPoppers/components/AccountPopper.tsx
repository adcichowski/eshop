import { Button } from "components/Button/Button";
import { SpinIcon } from "components/Skeleton/SpinIcon";
import { useSession, signOut } from "next-auth/react";

export function AccountPopper() {
  const { status } = useSession();

  return (
    <div className="flex w-full flex-col px-14 text-center">
      {status === "loading" && <SpinIcon size="normal" />}
      {status === "authenticated" && <Authenticated />}
      {status === "unauthenticated" && <Unauthenticated />}
    </div>
  );
}

const Unauthenticated = () => (
  <>
    <Button className="rounded-[10px] px-16 py-[5px] text-sm md:text-sm">
      <span className="whitespace-nowrap">Log in</span>
    </Button>
    <div className="line text-sm leading-6">
      Are you here for the first time?
    </div>
    {/* <Link href="/account">
      <span className="cursor-pointer text-sm underline">Sign up</span>
    </Link> */}
  </>
);

const Authenticated = () => (
  <>
    <Button
      onClick={() => signOut()}
      className="rounded-[10px] px-16 py-[5px] text-sm md:text-sm"
    >
      <span className="whitespace-nowrap">Log out</span>
    </Button>
    <div className="line text-sm leading-6">
      Do you wanna see your profile?{" "}
      <div>
        {/* <Link href="/account">
          <span className="cursor-pointer text-sm underline">Check it.</span>
        </Link> */}
      </div>
    </div>
  </>
);

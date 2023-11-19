import { Action } from "components/Action/Action";
import { SpinIcon } from "components/Skeleton/SpinIcon";
import { generateUrlForToast } from "context/ToastContext/utilsToast";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function AccountPopper() {
  const { status } = useSession();
  return (
    <div className="flex w-full flex-col px-14 text-center py-4">
      {status === "loading" && <SpinIcon size="normal" />}
      {status === "authenticated" && <Authenticated />}
      {status === "unauthenticated" && <Unauthenticated />}
    </div>
  );
}

const Unauthenticated = () => (
  <>
    <Action as="link" href={"/account"}>
      <span className="whitespace-nowrap">Log in</span>
    </Action>
    <div className="line text-sm mt-2 leading-6">
      Are you here for the first time?
    </div>
    <Link href="/account">
      <span className="cursor-pointer text-sm underline">Sign up</span>
    </Link>
  </>
);

const Authenticated = () => (
  <>
    <Action
      as="button"
      onClick={() =>
        signOut({
          callbackUrl: generateUrlForToast("SIGN_OUT"),
        })
      }
    >
      <span className="whitespace-nowrap">Log out</span>
    </Action>
    <div className="line text-sm leading-6">
      Do you wanna see your profile?{" "}
      <div>
        <Link href="/account">
          <span className="cursor-pointer text-sm underline">Check it.</span>
        </Link>
      </div>
    </div>
  </>
);

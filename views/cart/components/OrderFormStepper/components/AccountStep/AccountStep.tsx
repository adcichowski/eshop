import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { LoginFormAccount } from "./components/LoginFormAccount";
import { FormDetailsDelivery } from "./components/FormDetailsDelivery/FormDetailsDelivery";
import clsx from "clsx";

export async function AccountStep() {
  const session = await getServerSession(authOptions);

  return (
    <div
      className={clsx(
        `flex justify-center gap-4 flex-wrap`,
        !session && "justify-between",
      )}
    >
      {!session && <LoginFormAccount />}
      <FormDetailsDelivery session={session} />
    </div>
  );
}

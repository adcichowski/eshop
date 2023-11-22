import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { LoginFormAccount } from "./components/LoginFormAccount";
import { FormDetailsDelivery } from "./components/FormDetailsDelivery/FormDetailsDelivery";

export async function AccountStep() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {!session && <LoginFormAccount />}
      <FormDetailsDelivery session={session} />
    </div>
  );
}

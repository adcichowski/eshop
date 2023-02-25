import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import { AlertInfo } from "components/AlertInfo/AlertInfo";
import { useAlertInfo } from "components/AlertInfo/useAlertInfo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function AccountPage() {
  const { status } = useSession();
  const router = useRouter();
  const { alertLabel, handleSetAlert } = useAlertInfo();
  if (status === "authenticated") {
    router.push("/");
    return null;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <AlertInfo errorInForm={alertLabel.errorIn} />
        <div className="mt-5 mb-16 flex flex-wrap justify-center gap-4 xl:justify-between">
          <LoginForm setAlertInfo={handleSetAlert("login")} />
          <RegisterForm setAlertInfo={handleSetAlert("register")} />
        </div>
      </div>
    </div>
  );
}

import { LoginForm } from "components/Forms/LoginForm/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm/RegisterForm";
import { AlertInfo } from "components/AlertInfo/AlertInfo";
import { useAlertInfo } from "components/AlertInfo/useAlertInfo";

export function AccountPage() {
  const { alertLabel, handleSetAlert } = useAlertInfo();
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4">
        <AlertInfo errorInForm={alertLabel.errorIn} />
        <div className="flex xl:justify-between my-12 gap-4 flex-wrap justify-center">
          <LoginForm setAlertInfo={handleSetAlert("login")} />
          <RegisterForm setAlertInfo={handleSetAlert("register")} />
        </div>
      </div>
    </div>
  );
}

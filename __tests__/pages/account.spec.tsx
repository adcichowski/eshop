export {};
import { act, fireEvent, render, screen } from "@testing-library/react";
import { errorsAlertsInputs } from "__tests__/fixtures/account";
import { AccountPage } from "../../src/pages/account/AccountPage";
describe("Check render and functionality of account page.", () => {
  it("check required fields in login form", async () => {
    render(<AccountPage />);
    const isRenderErrors = await checkErrorsInForm("Login");
    expect(isRenderErrors).toBe(true);
  });
  it("check required fields in register form", async () => {
    render(<AccountPage />);
    const isRenderErrors = await checkErrorsInForm("Register");
    expect(isRenderErrors).toBe(true);
  });
});

const checkErrorsInForm = async (form: "Login" | "Register") => {
  const buttonLogin = screen.getByTestId(`button${form}`);
  await act(() => {
    fireEvent.click(buttonLogin);
  });
  const loginErrors = (await screen.getAllByTestId(
    /\w+Error/
  )) as HTMLParagraphElement[];
  console.log(loginErrors);

  const isShowDeclaratedErrors = loginErrors.every((element) => {
    const key = element.id.replace(
      `Hint${form}`,
      ""
    ) as keyof typeof errorsAlertsInputs;
    return errorsAlertsInputs?.[key].required === element.innerHTML;
  });
  return isShowDeclaratedErrors;
};

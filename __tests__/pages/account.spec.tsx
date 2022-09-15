export {};
import { faker } from "@faker-js/faker";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { errorsAlertsInputs } from "__tests__/fixtures/account";
import { AccountPage } from "../../src/pages/account/AccountPage";
describe("Check validation in login form", () => {
  it("should show error about required fields", async () => {
    render(<AccountPage />);
    const isRenderErrors = await checkErrorsInForm("Login");
    expect(isRenderErrors).toBe(true);
  });

  it("should show error about invalid email", async () => {
    render(<AccountPage />);
    const buttonLogin = screen.getByTestId(`buttonLogin`);
    const inputEmail = await screen.getByTestId("emailLogin");

    act(() => {
      fireEvent.change(inputEmail, {
        target: { value: faker.internet.email().slice(0, 2) },
      });
      fireEvent.click(buttonLogin);
    });
    const loginError = await screen.findByTestId("emailLoginError");
    expect(loginError).toBeInTheDocument;
  });

  it("should show error about too low chars in password", async () => {
    render(<AccountPage />);
    const buttonLogin = screen.getByTestId(`buttonLogin`);
    const inputPassword = await screen.getByTestId("passwordLogin");

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: faker.internet.password().slice(0, 2) },
      });
      fireEvent.click(buttonLogin);
    });
    const loginError = await screen.findByTestId("emailLoginError");
    expect(loginError).toBeInTheDocument;
  });

  it("should show error about too much chars in password", async () => {
    render(<AccountPage />);
    const buttonLogin = screen.getByTestId(`buttonLogin`);
    const inputPassword = await screen.getByTestId("passwordLogin");

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: faker.internet.password(61) },
      });
      fireEvent.click(buttonLogin);
    });
    const loginError = await screen.findByTestId("passwordLoginError");
    expect(loginError).toBeInTheDocument;
  });
});

describe("Check validation in register form", () => {
  it("should show error about required fields", async () => {
    render(<AccountPage />);
    const isRenderErrors = await checkErrorsInForm("Register");
    expect(isRenderErrors).toBe(true);
  });

  it("should show error about too low chars in password", async () => {
    render(<AccountPage />);
    const buttonLogin = screen.getByTestId(`buttonRegister`);
    const inputPassword = await screen.getByTestId("passwordRegister");

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: faker.internet.password().slice(0, 2) },
      });
      fireEvent.click(buttonLogin);
    });
    const loginError = await screen.findByTestId("emailRegisterError");
    expect(loginError).toBeInTheDocument;
  });

  it("should show error about too much chars in password", async () => {
    render(<AccountPage />);
    const buttonLogin = screen.getByTestId(`buttonRegister`);
    const inputPassword = await screen.getByTestId("passwordRegister");

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: faker.internet.password(61) },
      });
      fireEvent.click(buttonLogin);
    });
    const loginError = await screen.findByTestId("passwordRegisterError");
    expect(loginError).toBeInTheDocument;
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

  const isShowDeclaratedErrors = loginErrors.every((element) => {
    const key = element.id.replace(
      `Hint${form}`,
      ""
    ) as keyof typeof errorsAlertsInputs;
    return errorsAlertsInputs?.[key].required === element.innerHTML;
  });
  return isShowDeclaratedErrors;
};

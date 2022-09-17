export {};
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { AccountPage } from "../../src/pages/account/AccountPage";
import { faker } from "@faker-js/faker";
import { userAccount } from "__tests__/fixtures/account";
describe("Check validation in login form", () => {
  beforeEach(async () => {
    render(<AccountPage />);
    const button = screen.getByRole("button", { name: /Zaloguj się/i });
    await userEvent.click(button);
  });

  it("required fields", async () => {
    const errorAlerts = await screen.findAllByRole("alert");
    const errorsText = errorAlerts.map((el) => el.textContent);
    expect(errorsText).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Email jest wymagany.",
      "Hasło jest wymagane.",
    ]);
  });

  it("invalid email", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[0];
    await userEvent.type(emailInput, faker.internet.email().slice(0, 3));
    const errorAlerts = (await screen.findAllByRole("alert")).map(
      (error) => error.textContent
    );
    expect(errorAlerts).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Nieprawidłowy adres e-mail.",
      "Hasło jest wymagane.",
    ]);
  });

  it("too low chars in password", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[0];
    const passwordInput = screen.getAllByLabelText("Hasło:")[0];
    await userEvent.type(emailInput, faker.internet.email());
    await userEvent.type(passwordInput, faker.internet.password(4));
    const errorAlerts = (await screen.findAllByRole("alert")).map(
      (err) => err.textContent
    );

    expect(errorAlerts).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Hasło musi mieć więcej niż 8 znaków.",
    ]);
  });

  it("too much chars in password", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[0];
    const passwordInput = screen.getAllByLabelText("Hasło:")[0];
    await userEvent.type(emailInput, faker.internet.email());
    await userEvent.type(passwordInput, faker.internet.password(62));
    const errorAlerts = (await screen.findAllByRole("alert")).map(
      (err) => err.textContent
    );
    expect(errorAlerts).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Hasło musi mieć mniej niż 60 znaków.",
    ]);
  });

  it("should render 3 errors information", async () => {
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });
});

describe("Check validation in register form", () => {
  beforeEach(async () => {
    render(<AccountPage />);
    const button = screen.getByRole("button", { name: /Zarejestruj się/i });
    await userEvent.click(button);
  });

  it("required fields", async () => {
    const errorAlerts = await screen.findAllByRole("alert");
    const errorsText = errorAlerts.map((el) => el.textContent);
    expect(errorsText).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Email jest wymagany.",
      "Hasło jest wymagane.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("invalid email", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[1];
    await userEvent.type(emailInput, faker.internet.email().slice(0, 3));
    const errorAlerts = (await screen.findAllByRole("alert")).map(
      (error) => error.textContent
    );
    expect(errorAlerts).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Nieprawidłowy adres e-mail.",
      "Hasło jest wymagane.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("too low chars in password", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[1];
    const passwordInput = screen.getAllByLabelText("Hasło:")[1];
    await userEvent.type(emailInput, faker.internet.email());
    await userEvent.type(passwordInput, faker.internet.password(4));
    const errorAlerts = (await screen.findAllByRole("alert")).map(
      (err) => err.textContent
    );

    expect(errorAlerts).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Hasło musi mieć więcej niż 8 znaków.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("too much chars in password", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[1];
    const passwordInput = screen.getAllByLabelText("Hasło:")[1];
    await userEvent.type(emailInput, faker.internet.email());
    await userEvent.type(passwordInput, faker.internet.password(62));
    const errorAlerts = (await screen.findAllByRole("alert")).map(
      (err) => err.textContent
    );
    expect(errorAlerts).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Hasło nie może mieć więcej niż 60 znaków.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("password and repeated password must be same", async () => {
    const emailInput = screen.getAllByLabelText("E-mail:")[1];
    const passwordInput = screen.getAllByLabelText("Hasło:")[1];
    const statueConfirmInput = screen.getAllByRole("checkbox")[0];
    const repeatedPasswordInput = screen.getByLabelText("Powtórz hasło:");
    await userEvent.type(emailInput, userAccount.email);
    await userEvent.type(passwordInput, userAccount.password);
    await userEvent.type(repeatedPasswordInput, userAccount.repeatedPassword);
    await userEvent.click(statueConfirmInput);
    const errorsText = (await screen.findAllByRole("alert")).map(
      (err) => err.textContent
    );
    expect(errorsText).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Hasła muszą być takie same.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("should render 5 errors information", async () => {
    expect(await screen.findAllByRole("alert")).toHaveLength(5);
  });
});

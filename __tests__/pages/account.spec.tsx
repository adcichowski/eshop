export {};
import React from "react";
import User from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { AccountPage } from "views/account/AccountPage";
import { faker } from "@faker-js/faker";
import { userAccount } from "__tests__/fixtures/account";
import { alertsTexts } from "__tests__/utils/utils";

describe("Check validation in login form", () => {
  const getInputsForm = {
    button: () => screen.getByRole("button", { name: /Zaloguj się/i }),
    email: () => screen.getAllByLabelText("E-mail:")[0],
    password: () => screen.getAllByLabelText("Hasło:")[0],
  };

  beforeEach(async () => {
    render(<AccountPage />);
    await User.click(getInputsForm.button());
  });

  it("button log in should be disable", () => {
    expect(getInputsForm.button()).toBeDisabled;
  });
  it("required fields", async () => {
    expect(await alertsTexts()).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Email jest wymagany.",
      "Hasło jest wymagane.",
    ]);
  });

  it("invalid email", async () => {
    await User.type(getInputsForm.email(), faker.internet.email().slice(0, 3));
    expect(await alertsTexts()).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Nieprawidłowy adres e-mail.",
      "Hasło jest wymagane.",
    ]);
  });

  it("too low chars in password", async () => {
    await User.type(getInputsForm.email(), faker.internet.email());
    await User.type(getInputsForm.password(), faker.internet.password(4));

    expect(await alertsTexts()).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Hasło musi mieć więcej niż 8 znaków.",
    ]);
  });

  it("too much chars in password", async () => {
    await User.type(getInputsForm.email(), faker.internet.email());
    await User.type(getInputsForm.password(), faker.internet.password(62));

    expect(await alertsTexts()).toStrictEqual([
      "Formularz logowania zawiera błędy !!!",
      "Hasło nie może mieć więcej niż 60 znaków.",
    ]);
  });

  it("should render 3 errors information", async () => {
    expect(await alertsTexts()).toHaveLength(3);
  });
});

describe("Check validation in register form", () => {
  const getInputsForm = {
    button: () => screen.getByRole("button", { name: /Zarejestruj się/i }),
    email: () => screen.getAllByLabelText("E-mail:")[1],
    password: () => screen.getAllByLabelText("Hasło:")[1],
    statueConfirm: () => screen.getAllByRole("checkbox")[0],
    repeatedPassword: () => screen.getByLabelText("Powtórz hasło:"),
  };

  beforeEach(async () => {
    render(<AccountPage />);
    await User.click(getInputsForm.button());
  });

  it("button log in should be disable", () => {
    const button = screen.getByRole("button", { name: /Zarejestruj się/i });
    expect(button).toBeDisabled;
  });

  it("required fields", async () => {
    expect(await alertsTexts()).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Email jest wymagany.",
      "Hasło jest wymagane.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("invalid email", async () => {
    await User.type(getInputsForm.email(), faker.internet.email().slice(0, 3));

    expect(await alertsTexts()).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Nieprawidłowy adres e-mail.",
      "Hasło jest wymagane.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("too low chars in password", async () => {
    await User.type(getInputsForm.email(), faker.internet.email());
    await User.type(getInputsForm.password(), faker.internet.password(4));

    expect(await alertsTexts()).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Hasło musi mieć więcej niż 8 znaków.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("too much chars in password", async () => {
    await User.type(getInputsForm.email(), faker.internet.email());
    await User.type(getInputsForm.password(), faker.internet.password(62));

    expect(await alertsTexts()).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Hasło nie może mieć więcej niż 60 znaków.",
      "Powtórz hasło jest wymagane.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("password and repeated password must be same", async () => {
    await User.type(getInputsForm.email(), userAccount.email);
    await User.type(getInputsForm.password(), userAccount.password);
    await User.type(
      getInputsForm.repeatedPassword(),
      userAccount.repeatedPassword
    );
    await User.click(getInputsForm.statueConfirm());

    expect(await alertsTexts()).toStrictEqual([
      "Formularz rejestracji zawiera błędy !!!",
      "Hasła muszą być takie same.",
      "Pole musi być zaznaczone.",
    ]);
  });

  it("should render 5 errors information", async () => {
    expect(await alertsTexts()).toHaveLength(5);
  });
});

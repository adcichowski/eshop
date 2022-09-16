import { faker } from "@faker-js/faker";
export const userAccount = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  statueCheck: true,
};

export const errorsAlertsInputs = {
  email: {
    required: "Email jest wymagany.",
    matches: "Nieprawidłowy adres e-mail.",
  },
  password: {
    required: "Hasło jest wymagane.",
    min: "Hasło musi mieć mniej niż 8 znaków.",
    max: "Hasło musi mieć więcej niż 8 znaków.",
  },
  statueCheck: {
    required: "Pole musi być zaznaczone.",
  },
  passwordConfirmation: {
    required: "Powtórz hasło jest wymagane.",
  },
};

export const testsLoginForm = [
  {
    test: "required fields",
    errors: [
      { value: "Email jest wymagany." },
      { value: "Hasło jest wymagane." },
    ],
  },

  {
    test: "invalid email",
    fixtures: [
      { testId: "emailLogin", value: faker.internet.email().slice(0, 2) },
    ],
    errors: { testId: "emailLoginError", value: "Nieprawidłowy adres e-mail." },
  },

  {
    test: "too low chars in password",
    fixtures: [{ testId: "passwordLogin", value: faker.internet.password(5) }],
    errors: {
      testId: "passwordLoginError",
      value: "Hasło musi mieć więcej niż 8 znaków.",
    },
  },
  {
    test: "too much chars in password",
    fixtures: [{ testId: "passwordLogin", value: faker.internet.password(61) }],
    errors: {
      testId: "passwordLoginError",
      value: "Hasło musi mieć mniej niż 60 znaków.",
    },
  },
];

export const errorAlertLabel = (form: "login" | "register") => {
  const errors = {
    login: "logowania",
    register: "rejestracji",
  };
  return errors[form];
};

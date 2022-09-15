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

export const errorAlertLabel = (form: "login" | "register") => {
  const errors = {
    login: "logowania",
    register: "rejestracji",
  };
  return errors[form];
};

import { faker } from "@faker-js/faker";
export const userAccount = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  repeatedPassword: faker.internet.password(),
  statueConfirm: true,
};

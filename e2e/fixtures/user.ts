import { faker } from "@faker-js/faker";

export const user = {
  email: faker.internet.email(),
  street: faker.location.streetAddress({ useFullAddress: true }),
  city: faker.location.city(),
  phone: faker.phone.number(),
  postalCode: faker.location.zipCode(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
};

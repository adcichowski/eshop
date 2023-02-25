import { randomInt } from "crypto";
import { toastsTypes } from "../constants";
import { addToastToList } from "../utilsToast";
import { faker } from "@faker-js/faker";
const setup = () => ({
  toast: {
    type: toastsTypes[randomInt(toastsTypes.length)],
    text: faker.random.words(),
    id: faker.datatype.uuid(),
  },
  initialToasts: (length: number) =>
    Array.from({ length }, () => setup().toast),
});
describe("<ToastContext>", () => {
  it("should add one notification", () => {
    const notifications = addToastToList([], setup().toast);

    expect(notifications.length).toBe(1);
  });

  it("should have max 3 notifications and overwrite last", () => {
    const newToast = setup().toast;
    const notifications = addToastToList(setup().initialToasts(3), newToast);
    expect(notifications[0].text).toBe(newToast.text);
    expect(notifications.length).toBe(3);
  });

  it("should add next notification", () => {
    const randomNumberToasts = randomInt(1, 3);
    const notifications = addToastToList(
      setup().initialToasts(randomNumberToasts),
      setup().toast
    );

    expect(notifications.length).toBe(randomNumberToasts + 1);
  });
});

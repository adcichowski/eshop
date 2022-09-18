import { screen } from "@testing-library/react";

export const alertsTexts = async () =>
  (await screen.findAllByRole("alert")).map((el) => el.textContent);

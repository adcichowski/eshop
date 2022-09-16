export {};
import { act, fireEvent, render, screen } from "@testing-library/react";
import { testsLoginForm } from "__tests__/fixtures/account";
import { AccountPage } from "../../src/pages/account/AccountPage";
describe("Check validation in login form", () => {
  testsLoginForm.map(({ test, fixtures, errors }) => {
    it(test, async () => {
      render(<AccountPage />);
      const button = screen.getByTestId(`buttonLogin`);
      const catchedElements = fixtures?.map(({ testId }) =>
        screen.getByTestId(testId)
      );
      act(() => {
        if (fixtures) {
          catchedElements?.forEach((element, i) => {
            const valueToInput = fixtures[i].value;
            fireEvent.change(element, {
              target: { value: valueToInput },
            });
          });
        }

        fireEvent.click(button);
      });
      if (Array.isArray(errors)) {
        const catchedErrors = (
          await screen.findAllByTestId(/\w+LoginError/)
        ).map((element) => element.innerHTML);

        const errorsInfo = errors.map(({ value }) => value);

        return expect(catchedErrors).toStrictEqual(errorsInfo);
      }
      const catchedError = await screen.findByTestId(errors.testId);
      expect(catchedError.innerHTML).toBe(errors.value);
    });
  });
});

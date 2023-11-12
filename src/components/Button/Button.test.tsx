import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const expectedButtonText = "Friend";
  const actionOnclick = vi.fn();

  describe("When it recives the text 'Friend'", () => {
    test("Then it should show the text 'Friend' within the button", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button type="button" text={expectedButtonText} className={""} />
        </ThemeProvider>,
      );

      const buttonElememt = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonElememt).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user makes click", () => {
    test("Then it should call the received action", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button
            type="button"
            text={expectedButtonText}
            actionOnclick={actionOnclick}
            className={""}
          />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);
      expect(actionOnclick).toHaveBeenCalled();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show the text 'Hub Adversary' in a heading", () => {
      const expectedText = "Hub Adversary";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const headerText = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(headerText).toBeInTheDocument();
    });
  });
});

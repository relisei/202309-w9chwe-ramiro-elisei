import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("It should show 'Users' inside a Link", () => {
      const expextedLinkText = "Users";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const linkTag = screen.getByRole("link", {
        name: expextedLinkText,
      });

      expect(linkTag).toBeInTheDocument();
    });
  });
});

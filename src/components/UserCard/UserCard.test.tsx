import { render, screen } from "@testing-library/react";
import mockUsers from "../../mocks/mockData";
import UserCard from "./UserCard";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a UserCard component", () => {
  describe("When it recieve the user 'AdventureAlex'", () => {
    test("It should create a '@AdventureAlex' heading", () => {
      const givenHeading = mockUsers[0];
      const expectedHeading = "@AdventureAlex";

      render(
        <ThemeProvider theme={mainTheme}>
          <UserCard user={givenHeading} />
        </ThemeProvider>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import mockUsers from "../../mocks/mockData";
import { ThemeProvider } from "styled-components";
import UserList from "./UserList";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a UserList component", () => {
  describe("When it receives a list of users", () => {
    test("Then it should show 'GracefulGrace' ", () => {
      const expectedHeadingTitle = "@GracefulGrace";

      render(
        <ThemeProvider theme={mainTheme}>
          <UserList users={mockUsers} />
        </ThemeProvider>,
      );

      const userHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(userHeadingElement).toBeInTheDocument();
    });
  });
});

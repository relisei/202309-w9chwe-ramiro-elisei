import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyle";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation__list">
        <li>
          <NavLink className="navigation__element" to="/home">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__element" to="/create">
            Add User
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};
export default Navigation;

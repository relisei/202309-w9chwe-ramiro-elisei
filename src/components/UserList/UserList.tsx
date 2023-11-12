import { UserStructure } from "../../store/features/users/types";
import UserCard from "../UserCard/UserCard";

interface UsersListProps {
  users: UserStructure[];
}

const UserList = ({ users }: UsersListProps): React.ReactElement => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;

import { UserStructure } from "../../store/features/users/types";
import Button from "../Button/Button";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: UserStructure;
}

const UserCard = ({
  user: { nickname, firstName, lastName, picture, age, aboutMe },
}: UserCardProps): React.ReactElement => {
  return (
    <UserCardStyled className="user-card">
      <h2 className="user-card__nickname">@{nickname}</h2>
      <img
        className="user-card__picture"
        src={picture}
        alt={nickname}
        width="300"
        height="300"
      />
      <div className="user-card__information">
        <div className="user-card__header-information">
          <span className="user-card__fullname">
            {firstName} {lastName}
          </span>
          <Button
            className="card__button"
            text="Friend"
            type="button"
            actionOnclick={() => onclick}
          />
        </div>
        <span className="user-card__age">
          <span className="user-card__property">Age: </span>
          {age}
        </span>
        <span className="user-card__aboutme">
          <span className="user-card__property">About Me: </span>
          {aboutMe}
        </span>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;

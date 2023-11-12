import React from "react";
import PageStyled from "./UsersPageStyled";
import UserList from "../../components/UserList/UserList";
import mockUsers from "../../mocks/mockData";

const UsersPage = (): React.ReactElement => {
  return (
    <PageStyled className="user-page">
      <h2 className="user-page__title">Friend or Foe?</h2>
      <UserList users={mockUsers} />
    </PageStyled>
  );
};

export default UsersPage;

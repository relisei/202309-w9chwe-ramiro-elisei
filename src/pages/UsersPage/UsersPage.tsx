import { useEffect } from "react";
import PageStyled from "./UsersPageStyled";
import UserList from "../../components/UserList/UserList";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/features/users/usersSlice";
import { AppDispatch, StateStructure } from "../../store";

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: StateStructure) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("list", list);
  return (
    <PageStyled className="user-page">
      <h2 className="user-page__title">Friend or Foe?</h2>
      <UserList users={list} />
    </PageStyled>
  );
};

export default UsersPage;

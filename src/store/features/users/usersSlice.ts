import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UsersStateStructure } from "./types";
import axios from "axios";

const initialUserState: UsersStateStructure = {
  list: [],
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_data, { dispatch }) => {
    const { loadUsers } = usersSlice.actions;
    const response = await axios(
      "https://api-hub-adversary.onrender.com/users",
    );
    dispatch(loadUsers(response.data));
  },
);

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    loadUsers: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

export default usersSlice.reducer;

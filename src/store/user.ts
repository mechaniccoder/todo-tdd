import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { users: { name: string; age: number }[] } = {
  users: [
    {
      name: "seung",
      age: 28,
    },
    {
      name: "tae",
      age: 31,
    },
    {
      name: "jong",
      age: 35,
    },
    {
      name: "no",
      age: 25,
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string; age: number }>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

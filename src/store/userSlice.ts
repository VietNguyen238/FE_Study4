import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userID: null,
  userName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isUserActive: (state, action) => {
      console.log(action.payload);
      const { email, userID, userName } = action.payload;
      (state.isLoggedIn = true),
        (state.email = email),
        (state.userID = userID),
        (state.userName = userName);
    },
    removeActiveUser: (state, action) => {
      (state.isLoggedIn = false),
        (state.email = null),
        (state.userID = null),
        (state.userName = null);
      console.log(state.isLoggedIn);
    },
  },
});

export const { isUserActive, removeActiveUser } = authSlice.actions;
export const selectIsLoogedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectUserID = (state) => state.auth.userID;
export default authSlice.reducer;

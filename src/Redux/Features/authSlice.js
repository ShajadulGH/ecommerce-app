import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userID: null,
  userName: null,
};

const authSlice = createSlice({
  name: "userAuth",
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
export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;
export const selectUserID = (state) => state.userAuth.userID;
export default authSlice.reducer;

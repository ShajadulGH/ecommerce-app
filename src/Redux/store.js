import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
const rootReducer = combineReducers({
  userAuth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

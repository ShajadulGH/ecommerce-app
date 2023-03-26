import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
const rootReducer = combineReducers({
  authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

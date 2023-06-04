import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import prouctsSlice from "./Features/prouctsSlice";
const rootReducer = combineReducers({
  userAuth: authSlice,
  product: prouctsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;

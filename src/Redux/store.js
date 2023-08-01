import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";
import prouctsSlice from "./Features/prouctsSlice";
import filterSlice from "./Features/filterSlice";
import cartslice from "./Features/cartslice";
const rootReducer = combineReducers({
  userAuth: authSlice,
  product: prouctsSlice,
  filter: filterSlice,
  cart: cartslice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

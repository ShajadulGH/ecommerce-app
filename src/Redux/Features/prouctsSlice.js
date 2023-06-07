import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const prouctsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      state.products = action.payload;
    },
  },
});

export const { STORE_PRODUCTS } = prouctsSlice.actions;
export const selectProducts = (state) => state.product.products;

export default prouctsSlice.reducer;

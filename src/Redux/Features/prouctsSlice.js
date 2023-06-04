import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const prouctsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    GET_PRODUCTS(state, action) {
      state.products = action.payload;
    },
  },
});

export const { GET_PRODUCTS } = prouctsSlice.actions;
export const selectProducts = (state) => state.product.products.products;

export default prouctsSlice.reducer;

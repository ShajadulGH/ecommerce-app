import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const prouctsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GET_PRODUCTS(state, action) {
      console.log(action.payload);
      state.products = action.payload;
      console.log(state.products);
    },
  },
});

export const { GET_PRODUCTS } = prouctsSlice.actions;
export const selectProducts = (state) => state.products.products;

export default prouctsSlice.reducer;

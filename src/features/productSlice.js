import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { fetched: false, products: [] },
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
      state.fetched = true;
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice;

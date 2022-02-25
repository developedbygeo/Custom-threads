import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { fetched: false, products: null },
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
      state.fetched = true;
    },
  },
});
export const uiActions = productSlice.actions;
export default productSlice;

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { fetched: false, products: [], filtered: [] },
  reducers: {
    addProducts(state, action) {
      state.products = action.payload;
      state.filtered = action.payload;
      state.fetched = true;
    },
    filterByCategory(state, action) {
      state.filtered = state.products.filter((item) => {
        return action.payload.filters.some((activeFilter) => {
          return item.category === activeFilter && item.price <= action.payload.price;
        });
      });
    },
    sortByPrice(state, action) {
      if (action.payload.sort === 'asc') {
        state[action.payload.slice] = state[action.payload.slice].sort((productA, productB) =>
          productA.price > productB.price ? 1 : -1
        );
      } else {
        state[action.payload.slice] = state[action.payload.slice].sort((productA, productB) =>
          productA.price < productB.price ? 1 : -1
        );
      }
    },
    resetFilters(state) {
      state.filtered = state.products;
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice;

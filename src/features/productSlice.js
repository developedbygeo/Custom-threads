import { createSlice } from '@reduxjs/toolkit';

const initial = {
  fetched: false,
  products: [],
  filtered: [],
  activeFilters: ["men's clothing", "women's clothing", 'jewelery', 'electronics'],
  activePrice: 1000,
};

const productSlice = createSlice({
  name: 'products',
  initialState: initial,
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
    addFilter(state, action) {
      state.activeFilters = [...state.activeFilters, action.payload];
    },
    removeFilter(state, action) {
      state.activeFilters = state.activeFilters.filter((el) => el !== action.payload);
    },
    setFilterPrice(state, action) {
      state.activePrice = action.payload;
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

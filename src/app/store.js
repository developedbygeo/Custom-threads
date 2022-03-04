import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';
import uiSlice from '../features/uiSlice';

export const store = configureStore({
  reducer: { cart: cartSlice.reducer, data: productSlice.reducer, ui: uiSlice.reducer },
});

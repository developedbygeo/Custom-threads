import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../features/cartSlice';
import productSlice from '../features/productSlice';
import uiSlice from '../features/uiSlice';
import authSlice from '../features/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    data: productSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';

const cartInit = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInit,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      if (!existing) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existing.quantity += 1;
        existing.total += newItem.price;
      }
    },
    removeItem(state, action) {
      const identifierToRemove = action.payload;
      const existing = state.find((item) => item.id === identifierToRemove);
      state.totalQuantity -= 1;
      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== identifierToRemove);
      } else {
        existing.quantity -= 1;
        existing.total = existing.total - existing.price;
      }
    },
    resetCart(state) {
      state = cartInit;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

import { createSlice } from '@reduxjs/toolkit';

const cartInit = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
  isCheckedOut: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInit,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      state.totalCost += newItem.price;
      state.totalQuantity += 1;
      if (!existing) {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existing.quantity += 1;
        existing.totalPrice = existing.price * existing.quantity;
      }
    },
    removeItem(state, action) {
      const identifierToRemove = action.payload;
      const existing = state.items.find((item) => item.id === identifierToRemove);
      state.totalQuantity -= 1;
      state.totalCost -= existing.price;
      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== identifierToRemove);
      } else {
        existing.quantity -= 1;
        existing.totalPrice = existing.price * existing.quantity;
      }
    },
    setCheckout(state, action) {
      state.isCheckedOut = action.payload;
    },
    resetCart(state) {
      state.totalCost = 0;
      state.totalQuantity = 0;
      state.items.length = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

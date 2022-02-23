import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    reduce() {
      return 1;
    },
  },
});

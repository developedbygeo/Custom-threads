import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuth: false },
  reducers: {
    approveAuth(state, action) {
      if (action.payload === true) {
        state.isAuth = true;
      }
    },
    resetAuth(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;

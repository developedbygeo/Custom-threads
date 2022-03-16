import { createSlice } from '@reduxjs/toolkit';

const initial = {
  isAuth: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    approveAuth(state, action) {
      if (action.payload === true) {
        state.isAuth = true;
      }
    },
    resetAuth(state) {
      state.isAuth = false;
    },
    login(state, action) {
      if (action.payload === true) {
        state.isLoggedIn = true;
      }
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;

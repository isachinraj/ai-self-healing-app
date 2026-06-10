import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthState, User } from './authTypes';

const initialState: AuthState = {
  // Provide a safe default user so UI can render immediately in dev/demo
  user: {
    id: '0',
    name: 'Guest',
    email: 'guest@example.com',
    role: 'viewer',
  },
  isAuthenticated: true,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

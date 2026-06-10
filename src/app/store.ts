import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@components/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: (typeof process !== 'undefined' ? process.env.NODE_ENV : '') !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// prefer named exports for clarity; do not export default to avoid import/no-named-as-default

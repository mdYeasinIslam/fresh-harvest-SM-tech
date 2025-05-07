import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '@/services/productApi';
import modalSlice from '@/features/modal/modalSlice';
import { authApi } from '@/services/auth/authApi';
import authSlice from '@/services/auth/authSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    modal: modalSlice.reducer,
    auth:authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './slices/fileSlice';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    file: fileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

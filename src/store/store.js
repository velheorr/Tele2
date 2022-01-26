import { configureStore } from '@reduxjs/toolkit';
import app from './AppSlice'

export const store = configureStore({
  reducer: {app},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',

});

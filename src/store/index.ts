import { configureStore } from '@reduxjs/toolkit';

import middlewares from './middleware';
import userReducers from './slices/user';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    user: userReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export default store;

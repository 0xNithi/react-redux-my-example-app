import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import { useDispatch } from 'react-redux';
import userReducer from './user';
import articlesReducer from './articles';

const PERSISTED_KEYS = {
  states: ['user'],
  namespace: 'app',
};

const store = configureStore({
  reducer: {
    user: userReducer,
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }).concat(save(PERSISTED_KEYS)),
  preloadedState: load(PERSISTED_KEYS),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = (): AppDispatch => useDispatch();

export default store;

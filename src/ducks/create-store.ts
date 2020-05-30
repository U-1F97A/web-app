import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';

import bookSlice, { initialState as bookState } from './book/slice';

const rootReducer = combineReducers({
  book: bookSlice.reducer,
});

const preloadedState = () => {
  return { book: bookState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export default createStore;

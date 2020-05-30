import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';

import { initialState, rootReducer } from './reducer';

export type StoreState = ReturnType<typeof initialState>;
export type ReduxStore = Store<StoreState>;

const makeStore: MakeStore<StoreState> = (context: Context) =>
  createStore(rootReducer);
export const wrapper = createWrapper<StoreState>(makeStore, { debug: true });

import { combineReducers } from 'redux';

import { initialState as BookInitState, reducer } from './book';

export function initialState() {
  return {
    book: BookInitState(),
  };
}

export const rootReducer = combineReducers({
  book: reducer,
});

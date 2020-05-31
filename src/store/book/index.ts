import { Actions } from '../actions';

import types, { BookState } from './types';

export function initialState(injects?: BookState): BookState {
  return {
    title: '',
    pages: 0,
    ...injects,
  };
}

export function reducer(state = initialState(), action: Actions): BookState {
  switch (action.type) {
    case types.update:
      return { ...state, ...action.payload.book };
    default:
      return state;
  }
}

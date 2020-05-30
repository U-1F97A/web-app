import types, { BookState } from './types';

export function updateBook(book: BookState) {
  return {
    type: types.update,
    payload: {
      book,
    },
  };
}

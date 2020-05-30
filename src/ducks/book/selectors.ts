import { useSelector } from 'react-redux';

import { BookState } from './slice';

export const useBookState = () => {
  return useSelector((state: { book: BookState }) => {
    console.log(state.book);
    return state.book;
  });
};

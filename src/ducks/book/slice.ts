import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BookState = {
  title: string;
  isbn?: string;
  author: string;
  image?: string;
  pages: number;
};

export const initialState: BookState = {
  title: '',
  author: '',
  pages: 0,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    updateBook: (state, action: PayloadAction<BookState>) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    },
  },
});

export default bookSlice;

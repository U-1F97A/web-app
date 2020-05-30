import * as React from 'react';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from '~/store';
import { BookState } from '~/store/book/types';

const InterviewForm: FC = () => {
  const bookState = useSelector<StoreState, BookState>((s) => s.book);

  useEffect(() => {
    console.log(bookState);
  }, [bookState]);

  return (
    <>
      <h2>カルテ</h2>
      <p>{bookState.title}</p>
    </>
  );
};

export default InterviewForm;

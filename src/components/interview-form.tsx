import * as React from 'react';
import { FC, useEffect } from 'react';

import { useBookState } from '~/ducks/book/selectors';

const InterviewForm: FC = () => {
  const bookState = useBookState();

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

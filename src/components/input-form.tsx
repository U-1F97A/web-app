import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TextInput from '~/components/text-input';
import { useBookState } from '~/ducks/book/selectors';
import bookSlice from '~/ducks/book/slice';

const InputForm: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const bookState = useBookState();
  const [bookTitle, setBookTitle] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(bookSlice.actions.updateBook({ ...bookState, title: 'hoge' }));
  };

  useEffect(() => {
    if (bookState.title !== '') {
      console.log(bookState);
      router.push('/karte');
    }
  }, [bookState]);

  return (
    <>
      <h2>本のタイトルを入力してね</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          text="bookTitle"
          value={bookTitle}
          onChange={handleInputChange}
        />
        <p>{bookTitle}</p>
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default InputForm;

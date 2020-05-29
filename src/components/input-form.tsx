import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';

import TextInput from './text-input';

const InputForm: FC = () => {
  const router = useRouter();
  const [state, setState] = useState({
    book_title: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setState((previousState) => {
      return { ...previousState, book_title: event.target.value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state.book_title);
    router.push('/karte');
  };

  return (
    <>
      <h2>本のタイトルを入力してね</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          text="book_title"
          value={state.book_title}
          onChange={handleInputChange}
        />
        <p>{state.book_title}</p>
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default InputForm;

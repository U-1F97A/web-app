import * as React from 'react';
import { FC, useState } from 'react';

import TextInput from './text-input';

const InputForm: FC = () => {
  const [state, setState] = useState({
    book_title: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setState((previousState) => {
      return { ...previousState, book_title: event.target.value };
    });
  };

  const submitAlert = (event: React.MouseEvent) => {
    event.persist();
    event.preventDefault();
    const error = Object.values(state).some((value) => {
      return value.length === 0;
    });

    if (error) {
      alert('未入力項目があります');
    } else {
      alert('送信します');
    }
  };

  return (
    <>
      <h2>本のタイトルを入力してね</h2>
      <TextInput
        text="book_title"
        value={state.book_title}
        onChange={handleInputChange}
      />
      <p>{state.book_title}</p>
      <button onClick={submitAlert}>送信</button>
    </>
  );
};

export default InputForm;

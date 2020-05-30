import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';

import TextInput from '~/components/text-input';

const InputForm: FC = () => {
  const router = useRouter();
  const [bookTitle, setBookTitle] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bookTitle);
    router.push('/karte');
  };

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

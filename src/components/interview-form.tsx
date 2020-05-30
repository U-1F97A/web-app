import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';

import Radio from '~/components/radio';
import TextInput from '~/components/text-input';

const InterviewForm: FC = () => {
  const router = useRouter();
  const questionListDrink = ['ポカリ', 'カルピス', 'オレンジジュース'];
  const questionListNintendo = [
    'スプラトゥーン2',
    'あつまれどうぶつの森',
    '大乱闘スマッシュブラザーズ',
  ];
  const [questionListApple, setQuestionListApple] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setQuestionListApple(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(questionListDrink);
    console.log(questionListNintendo);
    console.log(questionListApple);
    router.push('/result');
  };

  return (
    <>
      <h2>カルテ</h2>
      <form onSubmit={handleSubmit}>
        <p>質問1</p>
        <Radio name="drink" value={questionListDrink} />
        <p>質問2</p>
        <Radio name="nintendo" value={questionListNintendo} />
        <p>質問3</p>
        <TextInput
          name="question3"
          value={questionListApple}
          onChange={handleInputChange}
        />
        <p>質問4</p>
        <br />
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default InterviewForm;

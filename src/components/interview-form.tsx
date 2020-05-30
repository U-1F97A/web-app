import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';

import Radio, { RadioItem } from '~/components/radio';
import TextInput from '~/components/text-input';

const InterviewForm: FC = () => {
  const router = useRouter();
  const [bookTitle, setBookTitle] = useState('');
  const [purpose, setPurpose] = useState('');
  const [baseValue, setBaseValue] = useState(-1);
  const [levelValue, setLevelValue] = useState(-1);
  const [habitValue, setHabitValue] = useState(-1);
  const [goodAtValue, setGoodAtValue] = useState(-1);

  const baseItem: RadioItem[] = [
    { key: 0, value: 'ない' },
    { key: 1, value: '多少ある' },
    { key: 2, value: 'ある' },
  ];
  const levelItem: RadioItem[] = [
    { key: 0, value: '0からの入門レベル(例: Python入門)' },
    {
      key: 1,
      value: '基礎知識を前提とする入門レベル(例: ゼロから作るDeep Learning)',
    },
    { key: 2, value: '応用レベル(例: 自然言語処理)' },
  ];
  const habitItem: RadioItem[] = [
    { key: 0, value: '読まない' },
    { key: 1, value: 'たまに読む' },
    { key: 2, value: '読む' },
  ];
  const goodAtItem: RadioItem[] = [
    { key: 0, value: '苦手' },
    { key: 1, value: '苦手ではない' },
    { key: 2, value: '得意' },
  ];

  const handleBookTitleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    setBookTitle(event.target.value);
  };
  const handlePurposeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    setPurpose(event.target.value);
  };

  const handleBaseRadioButton = (key: number) => {
    setBaseValue(key);
  };
  const handleLevelRadioButton = (key: number) => {
    setLevelValue(key);
  };
  const handleHabitRadioButton = (key: number) => {
    setHabitValue(key);
  };
  const handleGoodAtRadioButton = (key: number) => {
    setGoodAtValue(key);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/result');
  };

  return (
    <>
      <h2>カルテ</h2>
      <form onSubmit={handleSubmit}>
        <p>本のタイトルを入力してね</p>
        <TextInput
          name="bookTitle"
          value={bookTitle}
          onChange={handleBookTitleInputChange}
        />
        <p>{bookTitle}</p>
        <p>本を読む目的はなんですか？</p>
        <TextInput
          name="purpose"
          value={purpose}
          onChange={handlePurposeInputChange}
        />
        <p>{bookTitle}</p>
        <p>本の分野に基礎知識はどのくらいありますか？</p>
        <Radio name="base" items={baseItem} onChange={handleBaseRadioButton} />
        <p>{baseValue}</p>
        <p>本のレベルはどのくらいですか？</p>
        <Radio
          name="level"
          items={levelItem}
          onChange={handleLevelRadioButton}
        />
        <p>{levelValue}</p>
        <p>普段から本は読みますか？</p>
        <Radio
          name="habit"
          items={habitItem}
          onChange={handleHabitRadioButton}
        />
        <p>{habitValue}</p>
        <p>活字を読むことは得意ですか？</p>
        <Radio
          name="goodAt"
          items={goodAtItem}
          onChange={handleGoodAtRadioButton}
        />
        <p>{goodAtValue}</p>
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default InterviewForm;

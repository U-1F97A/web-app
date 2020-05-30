import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';

import NumberInput from '~/components/number';
import Radio from '~/components/radio';
import TextInput from '~/components/text-input';
import {
  knowledgeBaseItem,
  levelItem,
  habitItem,
  goodAtItem,
} from '~/constants/karte-items';

const InterviewForm: FC = () => {
  const router = useRouter();

  const [bookTitle, setBookTitle] = useState('');
  const [purpose, setPurpose] = useState('');
  const [knowledgeBaseValue, setKnowledgeBaseValue] = useState(-1);
  const [levelValue, setLevelValue] = useState(-1);
  const [habitValue, setHabitValue] = useState(-1);
  const [goodAtValue, setGoodAtValue] = useState(-1);
  const [timeString, setTimeString] = useState('');
  const [minuteString, setMinuteString] = useState(1);

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
    setKnowledgeBaseValue(key);
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
  const handleTimeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    setTimeString(event.target.value);
  };
  const handleMinuteInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    setMinuteString(event.target.valueAsNumber);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/result');
  };

  return (
    <>
      <h2>カルテ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>本のタイトルを入力してね</h3>
          <TextInput
            name="bookTitle"
            value={bookTitle}
            onChange={handleBookTitleInputChange}
          />
        </div>
        <div>
          <h3>本のタイトルを入力してね</h3>
          <TextInput
            name="bookTitle"
            value={bookTitle}
            onChange={handleBookTitleInputChange}
          />
          <p>{bookTitle}</p>
        </div>
        <div>
          <h3>本を読む目的はなんですか？</h3>
          <TextInput
            name="purpose"
            value={purpose}
            onChange={handlePurposeInputChange}
          />
          <p>{purpose}</p>
        </div>
        <div>
          <h3>本の分野に基礎知識はどのくらいありますか？</h3>
          <Radio
            name="base"
            items={knowledgeBaseItem}
            onChange={handleBaseRadioButton}
          />
          <p>{knowledgeBaseValue}</p>
        </div>
        <div>
          <h3>本のレベルはどのくらいですか？</h3>
          <Radio
            name="level"
            items={levelItem}
            onChange={handleLevelRadioButton}
          />
          <p>{levelValue}</p>
        </div>
        <div>
          <h3>普段から本は読みますか？</h3>
          <Radio
            name="habit"
            items={habitItem}
            onChange={handleHabitRadioButton}
          />
          <p>{habitValue}</p>
        </div>
        <div>
          <h3>活字を読むことは得意ですか？</h3>
          <Radio
            name="goodAt"
            items={goodAtItem}
            onChange={handleGoodAtRadioButton}
          />
          <p>{goodAtValue}</p>
        </div>
        <div>
          <h3>毎日何時から何分の時間が確保できそうですか?</h3>
          <TextInput
            name="time"
            value={timeString}
            onChange={handleTimeInputChange}
          />
          <NumberInput
            name="minute"
            value={minuteString}
            onChange={handleMinuteInputChange}
          />
          <p>
            {timeString}から{minuteString}分間
          </p>
        </div>
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default InterviewForm;

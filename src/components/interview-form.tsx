import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';

import NumberInput from '~/components/number';
import RadioInput from '~/components/radio-input';
import TextInput from '~/components/text-input';
import {
  knowledgeBaseItem,
  levelItem,
  habitItem,
  goodAtItem,
} from '~/constants/karte-question-items';

type KarteItem = {
  bookTitle: string;
  purpose: string;
  knowledgeBaseValue: number;
  levelValue: number;
  habitValue: number;
  goodAtValue: number;
  timeString: string;
  minuteString: string;
};

const InitialKarteItem: KarteItem = {
  bookTitle: '',
  purpose: '',
  knowledgeBaseValue: -1,
  levelValue: -1,
  habitValue: -1,
  goodAtValue: -1,
  timeString: '19:30',
  minuteString: '10',
};

const InterviewForm: FC = () => {
  const router = useRouter();
  const [karteItem, setKarteItem] = useState(InitialKarteItem);

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
            value={karteItem.bookTitle}
            onChange={(event) => {
              setKarteItem({ ...karteItem, bookTitle: event.target.value });
            }}
          />
          <p>{karteItem.bookTitle}</p>
        </div>
        <div>
          <h3>本を読む目的はなんですか？</h3>
          <TextInput
            name="purpose"
            value={karteItem.purpose}
            onChange={(event) => {
              setKarteItem({ ...karteItem, purpose: event.target.value });
            }}
          />
          <p>{karteItem.purpose}</p>
        </div>
        <div>
          <h3>本の分野に基礎知識はどのくらいありますか？</h3>
          <RadioInput
            name="base"
            items={knowledgeBaseItem}
            onChange={(key) => {
              setKarteItem({ ...karteItem, knowledgeBaseValue: key });
            }}
          />
          <p>{karteItem.knowledgeBaseValue}</p>
        </div>
        <div>
          <h3>本のレベルはどのくらいですか？</h3>
          <RadioInput
            name="level"
            items={levelItem}
            onChange={(key) => {
              setKarteItem({ ...karteItem, levelValue: key });
            }}
          />
          <p>{karteItem.levelValue}</p>
        </div>
        <div>
          <h3>普段から本は読みますか？</h3>
          <RadioInput
            name="habit"
            items={habitItem}
            onChange={(key) => {
              setKarteItem({ ...karteItem, habitValue: key });
            }}
          />
          <p>{karteItem.habitValue}</p>
        </div>
        <div>
          <h3>活字を読むことは得意ですか？</h3>
          <RadioInput
            name="goodAt"
            items={goodAtItem}
            onChange={(key) => {
              setKarteItem({ ...karteItem, goodAtValue: key });
            }}
          />
          <p>{karteItem.goodAtValue}</p>
        </div>
        <div>
          <h3>毎日何時から何分の時間が確保できそうですか?</h3>
          <TextInput
            name="time"
            value={karteItem.timeString}
            onChange={(event) => {
              setKarteItem({ ...karteItem, timeString: event.target.value });
            }}
          />
          <NumberInput
            name="minute"
            value={karteItem.minuteString}
            onChange={(event) => {
              setKarteItem({ ...karteItem, minuteString: event.target.value });
            }}
          />
          <p>
            {karteItem.timeString}から{karteItem.minuteString}分間
          </p>
        </div>
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default InterviewForm;

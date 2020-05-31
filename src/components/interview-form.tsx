import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import ConfirmButton from '~/components/confirm-button';
import KarteQuestionBox from '~/components/karte-question-box';
import NumberInput from '~/components/number-input';
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
      <CustomForm onSubmit={handleSubmit}>
        <KarteQuestionBox no={1} text={'本のタイトルを入力してね'}>
          <TextInput
            name="bookTitle"
            value={karteItem.bookTitle}
            onChange={(event) => {
              setKarteItem({ ...karteItem, bookTitle: event.target.value });
            }}
          />
          <p>{karteItem.bookTitle}</p>
        </KarteQuestionBox>
        <KarteQuestionBox no={1} text={'本を読む目的はなんですか？'}>
          <TextInput
            name="purpose"
            value={karteItem.purpose}
            onChange={(event) => {
              setKarteItem({ ...karteItem, purpose: event.target.value });
            }}
          />
        </KarteQuestionBox>
        <KarteQuestionBox
          no={2}
          text={'本の分野に基礎知識はどのくらいありますか？'}
        >
          <RadioInput
            name="base"
            items={knowledgeBaseItem}
            selectedKey={karteItem.knowledgeBaseValue}
            onChange={(key) => {
              setKarteItem({ ...karteItem, knowledgeBaseValue: key });
            }}
          />
        </KarteQuestionBox>
        <KarteQuestionBox no={3} text={'本のレベルはどのくらいですか？'}>
          <RadioInput
            name="level"
            items={levelItem}
            selectedKey={karteItem.levelValue}
            onChange={(key) => {
              setKarteItem({ ...karteItem, levelValue: key });
            }}
          />
        </KarteQuestionBox>
        <KarteQuestionBox no={4} text={'普段から本は読みますか？'}>
          <RadioInput
            name="habit"
            items={habitItem}
            selectedKey={karteItem.habitValue}
            onChange={(key) => {
              setKarteItem({ ...karteItem, habitValue: key });
            }}
          />
        </KarteQuestionBox>
        <KarteQuestionBox no={4} text={'活字を読むことは得意ですか'}>
          <RadioInput
            name="goodAt"
            items={goodAtItem}
            selectedKey={karteItem.goodAtValue}
            onChange={(key) => {
              setKarteItem({ ...karteItem, goodAtValue: key });
            }}
          />
        </KarteQuestionBox>
        <KarteQuestionBox
          no={5}
          text={'毎日何時から何分の時間が確保できそうですか?'}
        >
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
        </KarteQuestionBox>
        <ConfirmButton title="送信" />
      </CustomForm>
    </>
  );
};

const CustomForm = styled.form`
  text-align: center;
  & > * {
    margin-bottom: 48px;
  }
`;

export default InterviewForm;

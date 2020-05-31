import { useRouter } from 'next/router';
import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { StoreState } from '~/store';
import { BookState } from '~/store/book/types';
import types, { ScheduleState } from '~/store/schedule/types';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

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
  const dispatch = useDispatch();
  const bookState = useSelector<StoreState, BookState>((s) => s.book);
  const scheduleState = useSelector<StoreState, ScheduleState>(
    (s) => s.schedule
  );
  const [karteItem, setKarteItem] = useState(InitialKarteItem);

  const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    PostGenerateSchedule(
      bookState.title,
      karteItem.purpose,
      karteItem.knowledgeBaseValue,
      karteItem.levelValue,
      karteItem.habitValue,
      karteItem.goodAtValue,
      karteItem.timeString,
      karteItem.minuteString
    );
  };

  const PostGenerateSchedule = async (
    booktitle: string,
    purpose: string,
    base: number,
    level: number,
    habit: number,
    goodAt: number,
    timeFrom: string,
    maxPerDay: string
  ) => {
    const response = await fetch(
      'http://localhost:3000/api/generate-schedule',
      {
        method: 'POST',
        body: JSON.stringify({
          booktitle,
          purpose,
          base,
          level,
          habit,
          goodAt,
          timeFrom,
          maxPerDay,
        }),
      }
    );
    const json = await response.json();
    if (json.s3URL) {
      dispatch({
        type: types.update,
        payload: {
          book: {
            ...scheduleState,
            s3URL: json.s3URL,
            comment: json.comment,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (scheduleState.s3URL) {
      router.push('/result');
    }
  }, [scheduleState]);

  return (
    <>
      <CustomForm>
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
          <TimeWrapper>
            <TimeInputWrapper>
              <TextInput
                name="time"
                value={karteItem.timeString}
                onChange={(event) => {
                  setKarteItem({
                    ...karteItem,
                    timeString: event.target.value,
                  });
                }}
              />
              <TimeText>時から</TimeText>
            </TimeInputWrapper>
            <TimeInputWrapper>
              <NumberInput
                name="minute"
                value={karteItem.minuteString}
                onChange={(event) => {
                  setKarteItem({
                    ...karteItem,
                    minuteString: event.target.value,
                  });
                }}
              />
              <TimeText>分間</TimeText>
            </TimeInputWrapper>
          </TimeWrapper>
        </KarteQuestionBox>
        <ConfirmButton title="送信" onClick={onClickSubmit} />
      </CustomForm>
    </>
  );
};

const CustomForm = styled.form`
  text-align: center;
  & > * {
    margin-bottom: 48px;
  }

  & > *:nth-last-child() {
    margin-bottom: 48px;
  }
`;

const TimeInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:nth-child(1) {
    width: 80%;
  }
`;

const TimeWrapper = styled.div`
  & > * {
    margin: 20px;
  }
`;

const TimeText = styled.div`
  ${Fonts.h4}
  color: ${Colors.black};
  display: inline-block;
`;

export default InterviewForm;

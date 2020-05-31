import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import ConfirmButton from '~/components/confirm-button';
import Layout from '~/components/layout';
import RejectButton from '~/components/reject-button';
import TextInput from '~/components/text-input';
import { StoreState } from '~/store';
import types, { BookState } from '~/store/book/types';
import { ButtlerText, Emphasized } from '~/styles/common-styles';
import { Fonts } from '~/styles/mixins';
import { Colors, BreakPoints } from '~/styles/variables';

const Karte: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const bookState = useSelector<StoreState, BookState>((s) => s.book);
  const [bookName, setBookName] = useState('');
  const [inputText, setInputText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const PostBookTitleSearch = async (booktitle: string) => {
    const response = await fetch('http://localhost:3000/api/book-title', {
      method: 'POST',
      body: JSON.stringify({ booktitle }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (json.title) {
      dispatch({
        type: types.update,
        payload: {
          book: {
            ...bookState,
            title: json.title,
            image: json.picture,
            pages: json.pageCount,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (bookState.title !== '') {
      setIsSuccess(true);
    }
  }, [bookState]);

  useEffect(() => {
    PostBookTitleSearch(bookName);
  }, [bookName]);

  return (
    <>
      <Layout title="書籍検索 | read, read, read!">
        <ButlerWrapper>
          <ButlerTalk>
            <ButtlerTextWrapper>
              <CustomButtlerText isDisplay={!isSuccess}>
                <Emphasized>本の名前</Emphasized>を入力してください
              </CustomButtlerText>
              <CustomButtlerText isDisplay={isSuccess}>
                <Emphasized>この本であっていますか？</Emphasized>
              </CustomButtlerText>
            </ButtlerTextWrapper>
          </ButlerTalk>
        </ButlerWrapper>
        <ButtonWrapper>
          <InputContent isDisplay={!isSuccess}>
            <InputWrapper>
              <TextInput
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                isError={false}
                errorText={''}
              />
            </InputWrapper>
            <ConfirmButton
              title={'送信'}
              onClick={() => setBookName(inputText)}
            />
          </InputContent>
          <InputContent isDisplay={isSuccess}>
            <BookWrapper>
              <BookImg src={bookState.image ?? ''} />
              <BookTitle>{bookState.title}</BookTitle>
            </BookWrapper>
            <BookButtonWrapper>
              <ConfirmButton
                title={'あってる！'}
                onClick={() => router.push('/karte/detail')}
              />
              <RejectButton
                title={'ちがう'}
                onClick={() => setIsSuccess(false)}
              />
            </BookButtonWrapper>
          </InputContent>
        </ButtonWrapper>
      </Layout>
    </>
  );
};

const ButlerWrapper = styled.section`
  position: relative;
  margin-bottom: 64px;
`;

const ButtlerTextWrapper = styled.div`
  position: relative;
  height: 48px;
`;

const CustomButtlerText = styled(ButtlerText)<{ isDisplay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
  display: none;

  ${({ isDisplay }) =>
    isDisplay &&
    css`
      opacity: 1;
      display: inline;
    `}
`;

const InputWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 64px;
`;

const BookWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 64px;
`;

const InputContent = styled.div<{ isDisplay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
  display: none;

  ${({ isDisplay }) =>
    isDisplay &&
    css`
      opacity: 1;
      display: block;
    `}
`;

const BookImg = styled.img`
  height: 180px;
  width: 100px;
  background-color: ${Colors.lightGray};
`;

const BookTitle = styled.p`
  ${Fonts.h4}
  color: ${Colors.gray};
`;

const ButtonWrapper = styled.section`
  position: relative;
  text-align: center;
`;

const BookButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${BreakPoints.md}) {
    flex-direction: column;

    & > * {
      margin: 16px 0;
    }
  }
`;

export default Karte;

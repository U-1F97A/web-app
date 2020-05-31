import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import ConfirmButton from '~/components/confirm-button';
import Layout from '~/components/layout';
import RejectButton from '~/components/reject-button';
import TextInput from '~/components/text-input';
import { ButtlerText, Emphasized } from '~/styles/common-styles';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

const Karte: NextPage = () => {
  const router = useRouter();
  const [bookName, setBookName] = useState('');
  const [inputText, setInputText] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('Error');
  const [isSuccess, setIsSuccess] = useState(false);

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
                isError={isError}
                errorText={errorText}
              />
            </InputWrapper>
            <ConfirmButton
              title={'送信'}
              onClick={() => setBookName(inputText)}
            />
          </InputContent>
          <InputContent isDisplay={isSuccess}>
            <BookWrapper>
              <BookImg />
              <BookTitle>{'hoge'}</BookTitle>
            </BookWrapper>
            <ConfirmButton
              title={'送信'}
              onClick={() => setBookName(inputText)}
            />
            <RejectButton
              title={'ちがう'}
              onClick={() => setIsSuccess(false)}
            />
          </InputContent>
        </ButtonWrapper>
      </Layout>
    </>
  );
};
const ButlerWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
`;

const ButtlerTextWrapper = styled.div`
  position: relative;
`;

const CustomButtlerText = styled(ButtlerText)<{ isDisplay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;

  ${({ isDisplay }) =>
    isDisplay &&
    css`
      opacity: 1;
    `}
`;

const InputWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 24px;
`;

const BookWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 24px;
`;

const InputContent = styled.div<{ isDisplay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;

  ${({ isDisplay }) =>
    isDisplay &&
    css`
      opacity: 1;
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
  margin-bottom: 48px;
  text-align: center;
`;

export default Karte;

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import ConfirmButton from '~/components/confirm-button';
import Layout from '~/components/layout';
import TextInput from '~/components/text-input';
import { ButtlerText, Emphasized } from '~/styles/common-styles';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

const Karte: NextPage = () => {
  const router = useRouter();
  const [bookName, setBookName] = useState('');
  const [inputText, setInputText] = useState('');
  const [isError, setIsError] = useState(true);
  const [errorText, setErrorText] = useState('Error');

  return (
    <>
      <Layout title="書籍検索 | read, read, read!">
        <ButlerWrapper>
          <ButlerTalk>
            <ButtlerText>
              <Emphasized>本の名前</Emphasized>を入力してください
            </ButtlerText>
          </ButlerTalk>
        </ButlerWrapper>
        <ButtonWrapper>
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
        </ButtonWrapper>
      </Layout>
    </>
  );
};
const ButlerWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
`;

const InputWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
  text-align: center;
`;

export default Karte;

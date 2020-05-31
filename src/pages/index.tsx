import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import ConfirmButton from '~/components/confirm-button';
import Layout from '~/components/layout';
import { Fonts } from '~/styles/mixins';
import { Colors, BreakPoints } from '~/styles/variables';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Layout title="read, read, read!">
        <ButlerWrapper>
          <ButlerTalk>
            <Title>read, read, read!</Title>
            <SubTitle>ríːd rέd rέd</SubTitle>
          </ButlerTalk>
        </ButlerWrapper>
        <TextWrapper>
          <WelcomeText>ようこそ！</WelcomeText>
          <Description>
            読書ができないなんて悩んでいませんか？
            そんなあなたに、簡単な診断をするだけで、
            おすすめの読書のスタイルを提案したします。
          </Description>
        </TextWrapper>
        <ButtonWrapper>
          <ConfirmButton
            title={'さっそく、診断してみる'}
            onClick={() => router.push('/karte')}
          />
        </ButtonWrapper>
      </Layout>
    </>
  );
};
const ButlerWrapper = styled.section`
  position: relative;
  padding-bottom: 24px;
  margin-bottom: 48px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${Colors.black};
  }
`;

const TextWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
  text-align: center;
`;

const ButtonWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
  text-align: center;
`;

const Title = styled.h1`
  ${Fonts.h1}
  color: ${Colors.black};
  position: relative;
  margin-bottom: 24px;
  display: inline-block;
  z-index: 1;

  &::after{
    content: '';
    position: absolute;
    bottom: -4px;
    right: 0;
    left: 0;
    height: 12px;
    width: 100%;
    background-color: ${Colors.yellow};
    z-index: -1;
  }
`;

const SubTitle = styled.p`
  ${Fonts.h4}
  color: ${Colors.black};
`;

const WelcomeText = styled.h2`
  ${Fonts.h2}
  color: ${Colors.black};
  margin-bottom: 24px;
`;

const Description = styled.p`
  ${Fonts.text}
  color: ${Colors.black};
  max-width: 60%;
  margin: auto;
`;

export default Home;

import { NextPage } from 'next';
import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import InterviewForm from '~/components/interview-form';
import Layout from '~/components/layout';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

const Home: NextPage = () => {
  const [bookName, setBookName] = useState('');

  return (
    <>
      <Layout
        title="読書問診票 | read, read, read!"
        backgroundColor={Colors.beige}
      >
        <Wrapper>
          <BinderWrapper>
            <Binder></Binder>
            <TitleWrapper>
              <Title>読書問診票</Title>
              <SubTitle>{`(${bookName}を読んでみよう)`}</SubTitle>
            </TitleWrapper>
          </BinderWrapper>
          <InterviewForm />
        </Wrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BinderWrapper = styled.div`
  position: relative;
  margin-bottom: 48px;
  text-align: center;
`;

const Binder = styled.div`
  position: absolute;
  width: 400px;
  height: 30px;
  background-color: ${Colors.darkGray};
  top: -180px;
  left: 0;
  right: 0;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    top: -200px;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    height: 300px;
    width: 100%;
    border: 10px solid ${Colors.darkGray};
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgba(66, 75, 84, 0.25);
  }
`;

const TitleWrapper = styled.div`
  margin-top: 128px;
`;

const Title = styled.div`
  ${Fonts.h2}
  color: ${Colors.black};
  position: relative;
  margin-bottom: 24px;
  display: inline-block;

  &::after{
    content: '';
    position: absolute;
    bottom: -16px;
    right: 0;
    left: 0;
    height: 12px;
    width: 100%;
    background-color: ${Colors.green};
  }
`;

const SubTitle = styled.p`
  ${Fonts.h3}
  color: ${Colors.gray};
`;

export default Home;

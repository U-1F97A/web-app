import { NextPage } from 'next';
import * as React from 'react';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import InterviewForm from '~/components/interview-form';
import Layout from '~/components/layout';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <ButlerTalk>
          <Title>read, read, read!</Title>
        </ButlerTalk>
        <InterviewForm />
      </Layout>
    </>
  );
};

const Title = styled.h1`
  ${Fonts.h1}
  color: ${Colors.black};
  position: relative;

  &::after{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: ${Colors.yellow};
    z-index: 0;
  }
`;

export default Home;

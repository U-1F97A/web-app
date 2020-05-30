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

  &::after{
    
  }
`;

export default Home;

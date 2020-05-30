import { NextPage } from 'next';
import * as React from 'react';

import ButlerTalk from '~/components/butler-talk';
import InterviewForm from '~/components/interview-form';
import Layout from '~/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <ButlerTalk>read, read, read!</ButlerTalk>
        <InterviewForm />
      </Layout>
    </>
  );
};

export default Home;

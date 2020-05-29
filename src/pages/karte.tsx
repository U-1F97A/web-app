import { NextPage } from 'next';
import * as React from 'react';

import InterviewForm from '~/components/interview-form';
import Layout from '~/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <InterviewForm></InterviewForm>
      </Layout>
    </>
  );
};

export default Home;

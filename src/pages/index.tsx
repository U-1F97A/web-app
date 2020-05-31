import { NextPage } from 'next';
import * as React from 'react';

import GoogleLoginButton from '~/components/google-login-button';
import InterviewForm from '~/components/interview-form';
import Layout from '~/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <InterviewForm />
        <GoogleLoginButton />
      </Layout>
    </>
  );
};

export default Home;

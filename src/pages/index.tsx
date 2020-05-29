import { NextPage } from 'next';
import * as React from 'react';

import InputForm from '../components/input-form';

import Layout from '~/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <InputForm></InputForm>
      </Layout>
    </>
  );
};

export default Home;

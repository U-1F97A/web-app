import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';

import Button from '~/components/button';
import Layout from '~/components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout title="🥺">
        <Main>
          <Button text="submit" />
        </Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;

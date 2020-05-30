import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';

import { BreakPoints, Colors } from '~/styles/variables';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Main>{children}</Main>
    <Footer />
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 48px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${BreakPoints.sm}) {
    padding: 16px;
  }
`;

const Footer = styled.footer`
  height: 48px;
  background-color: ${Colors.green};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Layout;

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
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Main>{children}</Main>
    <Footer />
  </div>
);

const Main = styled.main`
  padding: 48px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${BreakPoints.sm}) {
    padding: 16px;
  }
`;

const Footer = styled.footer`
  height: 32px;
  background-color: ${Colors.green};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Layout;

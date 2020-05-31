import Head from 'next/head';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { BreakPoints, Colors } from '~/styles/variables';

type Props = {
  title?: string;
  backgroundColor?: string;
};

const Layout: React.FC<Props> = ({
  backgroundColor,
  children,
  title = 'This is the default title',
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Main backgroundColor={backgroundColor ?? Colors.white}>{children}</Main>
    <Footer />
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const Main = styled.main<{ backgroundColor: string }>`
  min-height: 100vh;
  padding: 48px;
  max-width: 1024px;
  margin: 0 auto;
 

  ${({ backgroundColor }) =>
    css`
      background-color: ${backgroundColor};
    `}

  @media (max-width: ${BreakPoints.sm}) {
    padding: 16px;
  }
`;

const Footer = styled.footer`
  height: 48px;
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${Colors.green};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Layout;

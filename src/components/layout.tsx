import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';

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
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  height: 32px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Layout;

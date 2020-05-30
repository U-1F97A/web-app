import App from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '~/store/index';
import GlobalStyle from '~/styles/global-style';

import 'minireset.css';

const theme = {
  body: {
    padding: 0,
    margin: 0,
    fontFamily: `'M PLUS Rounded 1c', sans-serif`,
    boxSizing: 'border-box',
  },
};
class WrappedApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(WrappedApp);

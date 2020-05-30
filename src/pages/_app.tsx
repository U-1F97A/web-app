import App from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '~/store';

import 'minireset.css';

const theme = {
  body: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    boxSizing: 'border-box',
  },
};

class WrappedApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(WrappedApp);

import App from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '~/store/index';

import 'minireset.css';

const theme = {};
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

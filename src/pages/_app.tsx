import App, { AppProps } from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import 'minireset.css';

const theme = {};

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;

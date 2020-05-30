import App, { AppProps } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'minireset.css';

import createStore from '~/ducks/create-store';

const theme = {
  body: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    boxSizing: 'border-box',
  },
};

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <Provider store={createStore()}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;

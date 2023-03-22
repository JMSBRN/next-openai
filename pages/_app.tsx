import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '../components/layout/layout';
import store from '../store/index';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;

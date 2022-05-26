import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { store } from '@/store';
import { siteData } from '@/data';

const App = ({ Component, pageProps, }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0' />

          <link rel='shortcut icon' type='image/x-icon' href={`${siteData.siteUrl}/favicon.ico`} />
          <link rel='icon' type='image/x-icon' href={`${siteData.siteUrl}/favicon.ico`} />

          <meta name='robots' content='All' />
          <meta name='robots' content='index, follow' />
          <meta name='NaverBot' content='All' />
          <meta name='NaverBot' content='index, follow' />
          <meta name='Yeti' content='All' />
          <meta name='Yeti' content='index, follow' />

          <meta name='google-site-verification' content='iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI' />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;

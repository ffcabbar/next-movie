import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  const isLayoutNeeded = ['/_error'].includes(router.pathname);
  const LayoutComponent = isLayoutNeeded ? React.Fragment : Layout;
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;

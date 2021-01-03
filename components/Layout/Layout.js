import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from '../Header/Header.js';   

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;

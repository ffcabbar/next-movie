import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "../Header/Header.js";
import Image from "../Image/Image.js";
import FloatingFilterBox from "../FloatingFilterBox/FloatingFilterBox.js";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Image />
      <FloatingFilterBox />
      
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;

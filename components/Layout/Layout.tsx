import Header from '../Header/header';
import Footer from '../Footer/Footer';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        {/* <section style={{ width: '1024px' }}>{children}</section> */}
        {/* <SideBar /> */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

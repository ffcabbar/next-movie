import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import React from 'react';
import type { ReactElement } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './Layout.module.css';

type LayoutType = {
  children: ReactElement;
};

const layout = ({ children }: LayoutType) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;

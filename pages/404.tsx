import React from 'react';
import styles from '../styles/NotFound.module.css';
import  Link  from 'next/link';

const NotFound = () => {
  const { container, mainTitle, title } = styles;
  return (
    <div className={container} >
      <h1 className={mainTitle}>404</h1>
      <div className={title}>The page you are looking for could not be found.</div>
      <Link href={'/'}>Home page</Link>
    </div>
  );
};

export default NotFound;
import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
    const {preloader, spinner} = styles;
  return (
    <div className={preloader}>
      <div className={spinner}></div>
    </div>
  );
};

export default Preloader;
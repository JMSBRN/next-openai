import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
    const {spinner} = styles;
  return (
    <div className={spinner}></div>
  );
};

export default Preloader;
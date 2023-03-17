import React from 'react';
import styles from '../styles/Aboute.module.css';

const about = () => {
  return (
    <div className={styles.container}>
    <h2 className="title">
    This project was created as a training for the main features in Next.js
    </h2>
      <div className={styles.content}>
        With features such as automatic code splitting, server-side rendering,
        and intelligent bundling, Next.js is a great choice for building
        performant, production-ready React applications. Some of the other
        features that are mentioned include:
        <p>
          - Zero configuration <br />
          - Hot code reloading <br />
          - Babel and TypeScript support <br />
          - Optimized production builds <br />
          - Static file serving <br />
          - Support for React Hooks <br />
        </p>
      </div>
    </div>
  );
};

export default about;

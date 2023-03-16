import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link className={styles.navLink} href={'/'}>Home</Link>
          <Link className={styles.navLink} href={'/about'}>About</Link>
          <Link className={styles.navLink} href={'/price'}>Price</Link>
          <Link className={styles.navLink} href={'/shop/shop'}>Shop</Link>
        </nav>
    </header>
  );
};

export default Header;
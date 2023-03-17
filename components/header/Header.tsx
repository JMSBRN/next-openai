import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link
          className={router.pathname == '/' ? `${styles.active} ` : ''}
          href={'/'}
        >
          Home
        </Link>
        <Link
          className={router.pathname == '/about' ? `${styles.active} ` : ''}
          href={'/about'}
        >
          About
        </Link>
        <Link
          className={router.pathname == '/price' ? `${styles.active} ` : ''}
          href={'/price'}
        >
          Price
        </Link>
        <Link
          className={router.pathname == '/shop/shop' ? `${styles.active} ` : ''}
          href={'/shop/shop'}
        >
          Shop
        </Link>
      </nav>
    </header>
  );
};

export default Header;

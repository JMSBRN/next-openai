import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const {header, navbar, active } = styles;
  return (
    <header className={header}>
      <nav className={navbar}>
        <Link
          className={router.pathname == '/' ? `${active} ` : ''}
          href={'/'}
        >
          Home
        </Link>
        <Link
          className={router.pathname == '/about' ? `${active} ` : ''}
          href={'/about'}
        >
          About
        </Link>
        <Link
          className={router.pathname == '/movies/movies' ? `${active} ` : ''}
          href={'/movies/movies'}
        >
          Movies
        </Link>
        <Link
          className={router.pathname == '/shop/shop' ? `${active} ` : ''}
          href={'/shop/shop'}
        >
          Shop
        </Link>
      </nav>
    </header>
  );
};

export default Header;

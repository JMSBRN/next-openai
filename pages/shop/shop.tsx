import React from 'react';
import Card from '@/components/card/Card';
import { IGood } from '@/interfaces/shopInterfaces';
import goods from '../../data/db.json';
import styles from './Shop.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  return {
    props: {
      goods: goods,
    },
  };
};

const Shop = ({ goods }: { goods: IGood[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>Goods in store</div>
      <div className={styles.cards}>
        {goods.map((el) => (
          <Link href={`/shop/${el.id}`} key={el.id} >
            <Card good={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

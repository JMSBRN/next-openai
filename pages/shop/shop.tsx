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
  const { container, mainTitle, cards } = styles;
  return (
    <div className={container}>
      <div className={mainTitle}>Goods in store</div>
      <div className={cards}>
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

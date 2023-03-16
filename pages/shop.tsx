import React from 'react';
import Card from '@/components/card/Card';
import { IGood } from '@/interfaces/shopInterfaces';
import goods from '../data/db.json';
import styles from '../styles/Shop.module.css';

export const getStaticProps = async () => {
  return {
    props: {
      goods: goods,
    },
  };
};

const Shop = ({ goods }: { goods: IGood[] }) => {
  return (
    <div>
      <div>Goods in shop</div>
      <div className={styles.cards}>
        {goods.map((el) => (
          <div key={el.id}>
            <Card good={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

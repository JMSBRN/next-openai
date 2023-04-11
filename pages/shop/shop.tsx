import React from 'react';
import Card from '@/components/card/Card';
import { IGood } from '@/interfaces/shopInterfaces';
import styles from './Shop.module.css';
import Link from 'next/link';
import { getGoodsFromGoogle } from '../api/apiGoodsUtils';

export const getStaticProps = async () => {
 const data = await getGoodsFromGoogle();
  return {
    props: {
      goods: data,
    },
  };
};

const Shop = ({ goods}: { goods: IGood[] }) => {
  const { container, mainTitle, cards } = styles;
  const newArr = goods.slice(1);
  return (
    <div className={container}>
      <div className={mainTitle}>Goods in store db from google Sheets</div>
      <div className={cards}>
        {newArr.map((el) => (
          <Link href={`/shop/${el.id}`} key={el.id} >
            <Card good={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

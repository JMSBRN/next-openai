import { IGood } from '@/interfaces/shopInterfaces';
import Image from 'next/image';
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    good: IGood
}
const Card = (props: CardProps) => {
    const { title, price, decription, img } = props.good;
  return (
    <div className={styles.card}>
      <Image src={img} alt={title} width={127} height={130} />
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>price: {price} eur</div>
      <div className={styles.decription}>{decription}</div>
    </div>
  );
};

export default Card;
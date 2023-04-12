/* eslint-disable @next/next/no-img-element */
import { IGood } from '@/interfaces/shopInterfaces';
import Image from 'next/image';
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    good: IGood
}
const Card = (props: CardProps) => {
    const { title, price, description, img } = props.good;
    const {card, cardTitle, cardPrice, cardDescription, imageContainer, cardImage, priceCents } = styles;
  return (
    <div className={card}>
      <div className={imageContainer}>
       <Image className={cardImage} src={img} alt={title} width={127} height={130} />
      </div>
      <div className={cardTitle}>{title}</div>
      <div className={cardPrice}><span>£</span> {price}<span className={priceCents}>. 00</span></div>
      <div className={cardDescription}>{description}</div>
    </div>
  );
};

export default Card;
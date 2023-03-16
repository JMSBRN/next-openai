import { IGood } from '@/interfaces/shopInterfaces';
import { GetStaticProps } from 'next';
import data from '../../data/db.json';
import Image from 'next/image';
import styles from './Good.module.css';
import Link from 'next/link';

export const getStaticPaths = async () => {
  const arrId = data.map((el) => {
    return {
      params: { id: el.id },
    };
  });
  return {
    paths: arrId,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const good = context.params;
  return {
    props: {
      good: good,
    },
  };
};

const Good = ({ good }: { good: IGood }) => {
  const el = data
    .filter((el) => el.id === good.id)
    .map((el) => {
      return el;
    });
  const { title, price, img, decription } = el[0];
  return (
      <Link href={'/shop/shop'} className={styles.main}>
        <div className="title">{title}</div>
        <Image src={img} width={400} height={600} alt={title} />
        <div className="price"> Price {price}</div>
        <div className="description">{decription}</div>
      </Link>
  );
};

export default Good;

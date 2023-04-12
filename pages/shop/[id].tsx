import { IGood } from '@/interfaces/shopInterfaces';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import styles from './Good.module.css';
import Link from 'next/link';
import { getGoodsFromGoogle } from '../api/apiGoodsUtils';

export const getStaticPaths = async () => {
  const data = await getGoodsFromGoogle();
  const arrId = data?.map((el) => {
    return {
      params: { 
        id: el.id },
    };
  });
  return {
    paths: arrId,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getGoodsFromGoogle();
  const good = context.params;
  return {
    props: {
      good: good,
      data: data
    },
  };
};

const Good = ({ good, data }: { good: IGood, data: IGood[]}) => {
  const { container, main } = styles;
  const el = data
    .filter((el) => el.id === good.id)
    .map((el) => {
      return el;
    });
  const { title, price, img, description } = el[0];
  return (
    <div className={container}>
      <Link href={'/shop/shop'} className={main}>
        <div className="title">{title}</div>
        <Image  src={img} width={200} height={400} alt={title} />
        <div className="price"> Price {price}</div>
        <div className="description">{description}</div>
      </Link>
    </div>
  );
};

export default Good;

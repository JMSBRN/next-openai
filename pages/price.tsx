import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';
import { IPhoto } from '../interfaces/shopInterfaces';
const url = 'https://jsonplaceholder.typicode.com/photos';

// export const getServerSideProps = async () => {
//   const res = await fetch(url);
//   const json = await res.json();
//   return {
//     props: {
//       json: json,
//     },
//   };
// };

const Price = () => {
  const fetcher = (...args:  Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());
  const { data, isLoading  } = useSWR(url, fetcher);
  return (
    <>
    {isLoading && 
    <div className="">Loading...</div>
    }
    <div>
      {data?.slice(0, 5).map((el: IPhoto) => (
        <div key={el.id} className="">
          <div className="">{el.id}</div>
          <div className="">{el.title}</div>
          <Image width={20} height={20} src={el.url} alt={el.title}/>
          <br />
          <Image width={20} height={20} src={el.url} alt={el.thumbnailUrl}/>
        </div>
      ))}
    </div>
    </>
  );
};

export default Price;

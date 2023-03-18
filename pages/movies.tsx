import { IMovie } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';
import styles from '../styles/Movies.module.css';

const url = 'https://www.omdbapi.com/?s=war&y=1990&type=movie&page=1&apikey=1f3b8f46&';

const Movies = () => {
  const { container, title, poster, loading, year } = styles;
  const fetcher = (...args:  Parameters<typeof fetch
    >) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR(url, fetcher);
  const newArr: IMovie[] = data?.Search.map((el: IMovie) => {    
    const newObj = objectKeysToLowerCase(el);
    console.log(newObj);
    
    return (newObj);
  });

  return (
    <>
    {isLoading && 
    <div className={loading}>Loading...</div>
    }
    <div className="" style={{ color: 'red', position: 'absolute', right: '0'}}>develop in .....</div>
      {newArr?.map(el => (
        <div key={el.imdbID} className={container}>
          <div className={title}>{el.title}</div>
          <div className={year}>{el.year}</div>
            <Image className={poster} src={(el.poster !== 'N/A' && el.poster) as string} width={70} height={80} alt={el.title} />
        </div>
      ))}
    </>
  );
};

export default Movies;

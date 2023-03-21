import { useGetMoviesSWR } from '@/hooks/apiHooks';
import { IMovie } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Movies.module.css';

const Movies = () => {
  const { container, title, poster, loading, year } = styles;
  const {data, isLoading } = useGetMoviesSWR();
  const newArr: IMovie[] = data?.Search.map((el: IMovie) => {    
    const newObj = objectKeysToLowerCase(el);
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
          <Link href={`/movies/${el.imdbID}`}>
            <div className={title}>{el.title}</div>
            <div className={year}>{el.year}</div>
              <Image 
              className={poster}
              priority={true}
              src={el.poster === 'N/A' ? '/images/no-poster-img.png' : el.poster as string}
              width={70}
              height={80}
              alt={el.title}
              />
          </Link>
        </div>
      ))}
    </>
  );
};

export default Movies;

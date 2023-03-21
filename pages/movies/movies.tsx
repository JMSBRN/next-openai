import { useGetMoviesSWR } from '@/hooks/apiHooks';
import { IMovie } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Movies.module.css';

const Movies = () => {
  const { mainContainer, container, poster, loading } = styles;
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
     <div className={mainContainer}>
      {newArr?.map(el => (
        <div key={el.imdbID} className={container}>
          <Link href={`/movies/${el.imdbID}`}>
              <Image 
              className={poster}
              priority={true}
              src={el.poster === 'N/A' ? '/images/no-poster-img.png' : el.poster as string}
              width={300}
              height={200}
              alt={el.title}
              />
          </Link>
        </div>
      ))}
      </div>
    </>
  );
};

export default Movies;

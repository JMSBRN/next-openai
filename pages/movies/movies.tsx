import Preloader from '@/components/preloader/Preloader';
import SearchModal from '@/components/search-modal/SearchModal';
import { getMoviesThunk } from '@/features/movies/getMoviesThunk';
import { selectMovies } from '@/features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './Movies.module.css';

const Movies = () => {
  const { mainContainer, container, poster } = styles;
  const { formData, movies, isLoading } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMoviesThunk());    
  },[dispatch, formData]);

  return (
    <>
    <SearchModal />
    {isLoading && 
      <Preloader />
    }
     <div className={mainContainer}>
      {movies.map(el => (
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

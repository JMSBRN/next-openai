import ErrorModal from '@/components/error-modal/ErrorModal';
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
  const { mainContainer, container, poster, welcome } = styles;
  const { formData, movies, isLoading, isApiError, errorApi } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const isSearching = formData.search !== ' ';
  useEffect(() => {
   isSearching && dispatch(getMoviesThunk());    
  },[dispatch, formData, isSearching]);

  return (
    <>
    <SearchModal />
    {isLoading && 
      <Preloader />
    }
    {
      !isSearching && 
      <div className={welcome}>
        <h2>Discover your next favorite movie.</h2>
        <div>Try searching in the modal at the top.</div>
      </div>
    }
    {
      isApiError && <ErrorModal message={errorApi} />
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

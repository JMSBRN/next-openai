import ErrorModal from '@/components/error-modal/ErrorModal';
import Preloader from '@/components/preloader/Preloader';
import SearchModal from '@/components/search-modal/SearchModal';
import { getMoviesThunk } from '@/features/movies/getMoviesThunk';
import { selectMovies, setMovies, setTotalResults } from '@/features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './Movies.module.css';
import Pagination from '@/components/pagination/Pagination';

const Movies = () => {
  const { mainContainer, container, poster, welcome, offLine, selectedValues } =
    styles;
  const { formData, movies, isLoading, isApiError, errorApi, isOffline, page, totalResults } =
    useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const isSearching = formData.search !== ' ';
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies') || '[]');
    if (storedMovies.length) {
      dispatch(setMovies(storedMovies));
    }
    const storedTotlaResults = JSON.parse(localStorage.getItem('totalResults') || '""');
    if (storedTotlaResults) {
      dispatch(setTotalResults(storedTotlaResults));
    }
  }, [dispatch]);
  useEffect(() => {
    isSearching && dispatch(getMoviesThunk());
    
  }, [dispatch, page, formData, isSearching, movies]);

  return (
    <>
      {isOffline && (
        <div className={offLine}>
          Your internet connection is currently offline. Please check your
          internet connection and ensure that all cables are properly connected.
          If the problem persists, please try resetting your modem or router. If
          these steps do not resolve the issue, please contact your internet
          service provider for further assistance.
        </div>
      )}
      <SearchModal />
      {!!movies.length && (
        <>
          <>
            <Pagination />
            <div className={selectedValues}>
              <div>{formData.search }</div>
              <div>{formData.year || 'year not selected'}</div>
              <div >{formData.type }</div>
              <div> total results : {totalResults}</div>
            </div>
          </>
        </>
      )}
      {isLoading && <Preloader />}
      {!movies.length && (
        <div className={welcome}>
          <h2>Discover your next favorite movie.</h2>
          <div>Try searching in the modal at the top.</div>
        </div>
      )}
      {isApiError && <ErrorModal message={errorApi} />}
      <div className={mainContainer}>
        {movies.map((el) => (
          <div key={el.imdbID} className={container}>
            <Link href={`/movies/${el.imdbID}`}>
              <Image
                className={poster}
                priority={true}
                src={
                  el.poster === 'N/A'
                    ? '/images/no-poster-img.png'
                    : (el.poster as string)
                }
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

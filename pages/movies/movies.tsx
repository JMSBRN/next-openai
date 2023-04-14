import ErrorModal from '@/components/error-modal/ErrorModal';
import Preloader from '@/components/preloader/Preloader';
import SearchModal from '@/components/search-modal/SearchModal';
import { getMoviesThunk } from '@/features/movies/getMoviesThunk';
import { selectMovies, setMovies, setTotalResults } from '@/features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import React, { useEffect } from 'react';
import styles from './Movies.module.css';
import Pagination from '@/components/pagination/Pagination';
import Poster from '@/components/poster/Poster';

const Movies = () => {
  const { mainContainer, welcome, offLine, selectedValues } =
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
 const {search, type, year } = formData;
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
              <div>{search }</div>
              <div>{year}</div>
              <div >{type}</div>
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
         <Poster key={el.imdbID} movie={el} />
        ))}
      </div>
    </>
  );
};

export default Movies;

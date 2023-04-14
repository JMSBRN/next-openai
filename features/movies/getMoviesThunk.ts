import { getMovies } from '@/pages/api/apiMoviesUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setErrorApi, setIsApiError, setMovies, setTotalResults } from './moviesSlice';
import { IMovie } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';

export const getMoviesThunk =  createAsyncThunk(
    'movies/getMovies',
    async (_, { dispatch }) => {
      const data = await getMovies();
      if(data.totalResults) {
        dispatch(setTotalResults(data.totalResults));
        localStorage.setItem('totalResults', JSON.stringify(data.totalResults) || '[]');
      }
      if (data.Response === 'True') {
        const movies: IMovie[] = data?.Search.map((el: IMovie) => {
          const newObj = objectKeysToLowerCase(el);
          return newObj;
        });
        if(Array.isArray(movies)) {
          dispatch(setMovies(movies));
          localStorage.setItem('movies', JSON.stringify(movies) || '[]');
        }
      }
      dispatch(setErrorApi(data.Error));
     data.Error && dispatch(setIsApiError(true));
    }
);
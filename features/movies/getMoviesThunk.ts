import { getMovies } from '@/pages/api/apiMoviesUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setErrorApi, setIsApiError, setMovies } from './moviesSlice';

export const getMoviesThunk =  createAsyncThunk(
    'movies/getMovies',
    async (_, { dispatch }) => {
      const data = await getMovies();
      if(Array.isArray(data)) {
        dispatch(setMovies(data));
      }
      dispatch(setErrorApi(data.Error));
      dispatch(setIsApiError(true));
    }
);
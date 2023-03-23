import { getMovies } from '@/pages/api/apiMoviesUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMovies } from './moviesSlice';

export const getMoviesThunk =  createAsyncThunk(
    'movies/getMovies',
    async (_, { dispatch }) => {
      const movies = await getMovies();
      dispatch(setMovies(movies));
    }
);
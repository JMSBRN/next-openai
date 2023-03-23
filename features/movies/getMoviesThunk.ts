import { IFormData } from '@/interfaces/apiInterfaces';
import { getMovies } from '@/pages/api/apiMoviesUtils';
import { RootState } from '@/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMovies } from './moviesSlice';

export const getMoviesThunk =  createAsyncThunk(
    'movies/getMovies',
    async (_, { dispatch, getState }) => {
      const formData = (getState() as RootState).movies.formData;
      const movies = await getMovies(formData);
      dispatch(setMovies(movies));
    }
);
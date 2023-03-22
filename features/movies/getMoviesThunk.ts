import { IFormData } from '@/interfaces/apiInterfaces';
import { getMovies } from '@/pages/api/apiMoviesUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMovies } from './moviesSlice';

export const getMoviesThunk =  createAsyncThunk(
    'movies/getMovies',
    async (formData: IFormData, { dispatch }) => {
      const movies = await getMovies(formData);
      dispatch(setMovies(movies));
    }
);
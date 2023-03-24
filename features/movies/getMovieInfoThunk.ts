import { getMovieInfoById } from '@/pages/api/apiMoviesUtils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMovieInfo } from './moviesSlice';

export const getMovieInfoThunk = createAsyncThunk(
   'movies/getInfo',
   async (id: string, { dispatch }) => {
    const data = await getMovieInfoById(id);
    dispatch(setMovieInfo(data));
   }
);


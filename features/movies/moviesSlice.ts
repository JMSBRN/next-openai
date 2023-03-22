import { IMovie } from '@/interfaces/apiInterfaces';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';
import { getMoviesThunk } from './getMoviesThunk';

interface IInitialState {
  movies: IMovie[];
  isLoading: boolean;
  formData:{
    search: string;
    year: string;
    sort: string;
    type: string;
  };
}

const initialState: IInitialState = {
  movies: [],
  isLoading: false,
  formData: {
    search: 'war',
    year: '1990',
    sort: 'title',
    type: 'movie'
  },
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers:
  {
   setMovies: (state, action) => {
    state.movies = action.payload;
   },
    setFormData: (state, action) => {
      state.formData = action.payload;      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunk.pending, (state) => {
       state.isLoading = true;
    }).addCase(getMoviesThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
  }
});

export const { setFormData, setMovies } = moviesSlice.actions;
export const selectFormData = (state: RootState) => state.movies;
export default moviesSlice.reducer;
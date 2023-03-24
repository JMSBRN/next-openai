import { IMovie, IMovieInfo } from '@/interfaces/apiInterfaces';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';
import { getMovieInfoThunk } from './getMovieInfoThunk';
import { getMoviesThunk } from './getMoviesThunk';

interface IInitialState {
  movies: IMovie[];
  movieInfo: Partial<IMovieInfo>;
  errorApi: string;
  isLoading: boolean;
  isApiError: boolean;
  isOffline: boolean;
  formData:{
    search: string;
    year: string;
    sort: string;
    type: string;
  };
}

const initialState: IInitialState = {
  movies: [],
  movieInfo: {},
  errorApi: '',
  isLoading: false,
  isApiError: false,
  isOffline: false,
  formData: {
    search: ' ',
    year: ' ',
    sort: ' ',
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
    setErrorApi: (state, acton) => {
      state.errorApi = acton.payload;
    },
    setIsApiError: (state, acton) => {
      state.isApiError = acton.payload;
    },
    setMovieInfo: (state, acton) => {
      state.movieInfo = acton.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunk.pending, (state) => {
       state.isLoading = true;
    }).addCase(getMoviesThunk.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(getMoviesThunk.rejected, (state) => {
      state.isLoading = false;
      state.isOffline = true;
    }).addCase(getMovieInfoThunk.pending, (state) => {
      state.isLoading = true;
    }).addCase(getMovieInfoThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
  }
});

export const { setFormData, setMovies, setErrorApi, setIsApiError, setMovieInfo } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies;
export default moviesSlice.reducer;
import { IMovie } from '@/interfaces/apiInterfaces';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';
import { getMoviesThunk } from './getMoviesThunk';

interface IInitialState {
  movies: IMovie[];
  errorApi: string;
  isLoading: boolean;
  isApiError: boolean;
  formData:{
    search: string;
    year: string;
    sort: string;
    type: string;
  };
}

const initialState: IInitialState = {
  movies: [],
  errorApi: '',
  isLoading: false,
  isApiError: false,
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunk.pending, (state) => {
       state.isLoading = true;
    }).addCase(getMoviesThunk.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(getMoviesThunk.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
      
    });
  }
});

export const { setFormData, setMovies, setErrorApi, setIsApiError } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies;
export default moviesSlice.reducer;
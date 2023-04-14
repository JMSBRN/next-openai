import { IMovie, IMovieInfo } from '@/interfaces/apiInterfaces';
import { sortArrByConditions } from '@/utils/apiUtils';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';
import { getMovieInfoThunk } from './getMovieInfoThunk';
import { getMoviesThunk } from './getMoviesThunk';

interface IInitialState {
  movies: IMovie[];
  movieInfo: Partial<IMovieInfo>;
  selectedSort: string;
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
  page: string;
  totalResults: string;
}

const initialState: IInitialState = {
  movies: [],
  movieInfo: {},
  selectedSort: '',
  errorApi: '',
  isLoading: false,
  isApiError: false,
  isOffline: false,
  formData: {
    search: ' ',
    year: '',
    sort: '',
    type: 'movie',
  },
  page: '1',
  totalResults: ''
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers:
  {
   setMovies: (state, action) => {
    state.movies = action.payload;
   },
   setTotalResults: (state, action) => {
    state.totalResults = action.payload;
   },
    setFormData: (state, action) => {
      state.formData = action.payload;      
    },
    setPage: (state, action) => {
      state.page = action.payload;            
    },
    setErrorApi: (state, acton) => {
      state.errorApi = acton.payload;
    },
    setIsApiError: (state, acton) => {
      state.isApiError = acton.payload;
    },
    setMovieInfo: (state, acton) => {
      state.movieInfo = acton.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
      switch (action.payload) {
        case 'a':
          state.movies = sortArrByConditions(state.movies, (a, b) => a.title > b.title);
          return;
        case 'b':
          state.movies = sortArrByConditions(state.movies, (a, b) => b.title > a.title);
          return;
        case 'c':
          state.movies = sortArrByConditions(state.movies, (a, b) => a.year > b.year);
          return;
        case 'd':
          state.movies = sortArrByConditions(state.movies, (a, b) => b.year > a.year);
          return;
        default:
          state.movies;
          return;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunk.pending, (state) => {
       state.isLoading = true;
       state.isOffline = false;
      }).addCase(getMoviesThunk.fulfilled, (state) => {
        state.isLoading = false;
      }).addCase(getMoviesThunk.rejected, (state) => {
      state.isLoading = false;
      state.isOffline = true;
    }).addCase(getMovieInfoThunk.pending, (state) => {
      state.isLoading = true;
      state.isOffline = false;
    }).addCase(getMovieInfoThunk.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(getMovieInfoThunk.rejected, (state) => {
      state.isOffline = true;
    });
  }
});

export const { setFormData, setPage, setTotalResults, setMovies, setErrorApi, setIsApiError, setMovieInfo, setSelectedSort } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies;
export default moviesSlice.reducer;
import { IMovie } from '@/interfaces/apiInterfaces';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';

interface IInitialState {
  movies: IMovie[];
  formData:{
    search: string;
    year: string;
    sort: string;
    type: string;
  };
}

const initialState: IInitialState = {
  movies: [],
  formData: {
    search: 'war',
    year: '1990',
    sort: 'title',
    type: 'movie'
  },
};

const userSlice = createSlice({
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
  }
});

export const { setFormData, setMovies } = userSlice.actions;
export const selectFormData = (state: RootState) => state.movies;
export default userSlice.reducer;
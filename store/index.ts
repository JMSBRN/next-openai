import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../features/movies/moviesSlice';
const store = configureStore({
  reducer: {
    movies: formDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import goodsReducer from '../features/shop/goodsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    goods:  goodsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
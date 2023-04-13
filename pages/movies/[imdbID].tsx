import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MovieInfo from '@/components/movie-info/MovieInfo';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { selectMovies } from '@/features/movies/moviesSlice';
import { getMovieInfoThunk } from '@/features/movies/getMovieInfoThunk';
import Preloader from '@/components/preloader/Preloader';

const Movie = () => {
  const { movieInfo, isLoading } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const id = useRouter().query.imdbID;

  useEffect(() => {
    dispatch(getMovieInfoThunk(id as string));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MovieInfo movieInfo={movieInfo} />
        </>
      )}
    </div>
  );
};

export default Movie;

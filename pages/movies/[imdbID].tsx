import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import Link from 'next/link';
import { getMovieInfoById } from '../api/apiMoviesUtils';
import { IMovieInfo } from '@/interfaces/apiInterfaces';
import MovieInfo from '@/components/movie-info/MovieInfo';
import styles from './Movie.module.css';

const Movie = () => {
const [movieInfo, setMovieInfo] = useState<IMovieInfo>({});
const id = useRouter().query.imdbID;

  useEffect(() => {
   const getdata = async () => {
      const data = await getMovieInfoById(id as string);
      setMovieInfo(data);
    };
    getdata();
  }, [id]);
  
  return (
    <div>
      <Link className={styles.homeLink} href={'/movies/movies'}>Back to Movies</Link>
      <MovieInfo movieInfo={movieInfo} />
    </div>
  );
};

export default Movie;
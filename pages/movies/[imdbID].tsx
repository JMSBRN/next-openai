import MovieInfo from '@/components/movie-info/MovieInfo';
import { IMovie, IMovieInfo } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Movie.module.css';

const key = process.env.NEXT_PUBLIC_MOVIES_API_KEY;
export const getStaticPaths =  async () => {
   const res = await fetch(`https://www.omdbapi.com/?s=war&y=1990&type=movie&page=1&apikey=${key}`);
   const data: { Search: IMovie[]} = await res.json();
   const id = data.Search.map((el) => {    
      return {
        params: {
          imdbID: el.imdbID
         }
        };
   });

   return {
     paths: id,
     fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async (content) => {
    const movie = content.params;
    return {
      props: {
        movie: movie
      }
    };
};

const Movie = ({ movie }: { movie: IMovie }) => {
  const [result, setResult] = useState<IMovieInfo>({});
  useEffect( () => {
    const getMovieInfoById = async () => {
      const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${key}`);
      const data: IMovieInfo = await res.json();
      setResult(objectKeysToLowerCase(data));
    };
   getMovieInfoById();
  }, [movie.imdbID]);
  
  return (
    <div>
      <Link className={styles.homeLink} href={'/movies/movies'}>Back to Movies</Link>
      <MovieInfo movieInfo={result} />
    </div>
  );
};

export default Movie;
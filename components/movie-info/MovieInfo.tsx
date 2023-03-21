import { IMovieInfo } from '@/interfaces/apiInterfaces';
import Image from 'next/image';
import React from 'react';
import styles from './MovieInfo.module.css';

interface IMovieInfoProps {
  movieInfo: IMovieInfo;
}
const MovieInfo: React.FC<IMovieInfoProps> = ({ movieInfo }) => {
    const { container, info, posterImg } = styles;
  const {
    title,
    year,
    rated,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    metascore,
    imdbrating,
    imdbvotes,
    imdbid,
    type,
    dvd,
    oxoffice,
    production,
    website,
    response,
  } = movieInfo;
  return (
  <div className={container}>
    {!!poster &&
      <Image 
      className={posterImg}
      src={poster ==='N/A' ? '/images/no-poster-img.png' : poster}
      priority={true}
      alt={'title'} 
      width={400} 
      height={600}
    />
    }
      <div className={info}>
          <h1>{title}</h1>
          <p>{year}</p>
          <p>{rated}</p>
          <p>{released}</p>
          <p>{runtime}</p>
          <p>{genre}</p>
          <p>{director}</p>
          <p>{writer}</p>
          <p>{actors}</p>
          <p>{plot}</p>
          <p>{language}</p>
          <p>{country}</p>
          <p>{awards}</p>
          <p>{metascore}</p>
          <p>{imdbrating}</p>
          <p>{imdbvotes}</p>
          <p>{imdbid}</p>
          <p>{type}</p>
          <p>{dvd}</p>
          <p>{oxoffice}</p>
          <p>{production}</p>
          <p>{website}</p>
          <p>{response}</p>
      </div>
    </div>
  );
};

export default MovieInfo;

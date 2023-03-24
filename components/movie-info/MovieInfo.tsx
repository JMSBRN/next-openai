import React from 'react';
import { IMovieInfo } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';
import Image from 'next/image';
import styles from './MovieInfo.module.css';

interface IMovieInfoProps {
  movieInfo: Partial<IMovieInfo>;
}
const MovieInfo: React.FC<IMovieInfoProps> = ({ movieInfo }) => {
    const { container, info, posterImg, posterWrapper, plotText, ratingsContiner } = styles;
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
    imdbRating,
    imdbVotes,
    imdbID,
    type,
    dVD,
    boxOffice,
    production,
    website,
    ratings
  } = movieInfo;
  const ratingsArr = Object.values(ratings || []).map( el => {
    return objectKeysToLowerCase(el);
 });
 const srcImagesForRatings = ['/images/IMDB.png', '/images/Rotten_Tomatoes.png', '/images/Metacritic.png',];
  return (
  <div className={container}>
    <div className={posterWrapper}>
    { 
      !!poster &&
        <Image 
        className={posterImg}
        src={poster ==='N/A' ? '/images/no-poster-img.png' : poster}
        priority={true}
        alt={'title'} 
        width={400} 
        height={600}
        />
      }
    </div>
      <div className={info}>
      <h1>{title}</h1>
      <p>Year: {year}</p>
      <p>Rated: {rated}</p>
      <p>Released: {released}</p>
      <p>Runtime: {runtime}</p>
      <p>Genre: {genre}</p>
      <p>Director: {director}</p>
      <p>Writer: {writer}</p>
      <p>Actors: {actors}</p>
      <div>Plot: <div className={plotText}>{plot}</div></div>
      <p>Language: {language}</p>
      <p>Country: {country}</p>
      <p>Awards: {awards}</p>
      <p>Metascore: {metascore}</p>
      <p>IMDb Rating: {imdbRating}</p>
      <p>IMDb Votes: {imdbVotes}</p>
      <p>IMDb ID: {imdbID}</p>
      {
    ratingsArr.map((el, idx) => {
     return ( <div className={ratingsContiner}key={el.source}>
         <div className=""><Image src={`${srcImagesForRatings[idx]}`} width={20} height={20} alt={el.source}/>{el.source} : </div>
         <div className="">{el.value}</div>
      </div>
     );
    })
    }
      <p>Type: {type}</p>
      <p>DVD: {dVD}</p>
      <p>Box Office: {boxOffice}</p>
      <p>Production: {production}</p>
      <p>Website: {website}</p>
     </div>
  </div>
  );
};

export default MovieInfo;

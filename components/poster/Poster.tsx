import React from 'react';
import { IMovie } from '@/interfaces/apiInterfaces';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Poster.module.css';

interface  PosterProps {
    movie: IMovie;
}
const Poster = ({ movie }: PosterProps) => {
    const {container, posterImage} = styles;
    const {imdbID, poster, title} = movie;

  return (
    <div key={imdbID} className={container}>
    <Link href={`/movies/${imdbID}`}>
      <Image
        className={posterImage}
        priority={true}
        src={
          poster === 'N/A'
            ? '/images/no-poster-img.png'
            : (poster as string)
        }
        width={200}
        height={300}
        alt={title}
      />
    </Link>
  </div>
  );
};

export default Poster;
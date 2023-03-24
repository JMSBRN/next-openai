import { IMovie, IMovieInfo } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';
import store from '../../store/index';

const key = process.env.NEXT_PUBLIC_MOVIES_API_KEY;

export const getMovies = async () => {
    const { search, year, type } = store.getState().movies.formData;
    const url = `https://www.omdbapi.com/?s=${search}&y=${year}&type=${type}&page=1&apikey=${key}`;
    const res = await fetch(url);
    const data = await res.json();    
     if(data.Response === 'True') {
       const movies: IMovie[] = data?.Search.map((el: IMovie) => {    
           const newObj = objectKeysToLowerCase(el);
           return (newObj);
         });
       return movies;
      }
      return data;
};

export const getMovieInfoById = async (id: string) => {
   const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${key}`);
   const data: IMovieInfo = objectKeysToLowerCase(await res.json());   
   return data;
};

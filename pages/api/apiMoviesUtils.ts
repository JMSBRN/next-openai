import { IFormData, IMovie } from '@/interfaces/apiInterfaces';
import { objectKeysToLowerCase } from '@/utils/apiUtils';

export const getMovies = async (formData: IFormData) => {
    const { search, year, type } = formData;
    const url = `https://www.omdbapi.com/?s=${search}&y=${year}&type=${type}&page=1&apikey=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const movies: IMovie[] = data?.Search.map((el: IMovie) => {    
        const newObj = objectKeysToLowerCase(el);
        return (newObj);
      });
    return movies;
};
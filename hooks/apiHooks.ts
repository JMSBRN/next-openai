import { selectMovies } from '@/features/movies/moviesSlice';
import useSWR  from 'swr';
import { useAppSelector } from './reduxHooks';

export const useGetMoviesSWR = () => {
  const { formData, page } = useAppSelector(selectMovies);
  const { search, year, type } = formData;  
    const url = `https://www.omdbapi.com/?s=${search}&y=${year}&type=${type}&page=${page}&apikey=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}`;
    const fetcher = (...args:  Parameters<typeof fetch
        >) => fetch(...args).then((res) => res.json());
      const { data, isLoading, error } = useSWR(url, fetcher);
      return {
        data,
        isLoading,
        error
      };
};


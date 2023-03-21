import useSWR  from 'swr';

export const useGetMoviesSWR = () => {
    const url = `https://www.omdbapi.com/?s=war&y=1990&type=movie&page=1&apikey=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}`;
    const fetcher = (...args:  Parameters<typeof fetch
        >) => fetch(...args).then((res) => res.json());
      const { data, isLoading, error } = useSWR(url, fetcher);
      return {
        data,
        isLoading,
        error
      };
};


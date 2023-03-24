import { IResponse, IMovie, IMovieInfo } from '@/interfaces/apiInterfaces';

export const objectKeysToLowerCase = (obj: IResponse | IMovie | IMovieInfo) => {
  const entries = Object.entries(obj);
  const newObj = Object.fromEntries(
    entries.map(([key, value]) => {
        const keyToLowerFirstChar = key.charAt(0).toLowerCase() + key.slice(1);
      return [keyToLowerFirstChar, value];
    })
  );
  return newObj;
};
export const sortArrByConditions = (arr: IMovie[], func: (a: IMovie, b: IMovie) => boolean) => {
  arr.sort((a, b) => (func(a, b) ? 1 : func(b, a) ? -1 : 0));
  return arr;
};
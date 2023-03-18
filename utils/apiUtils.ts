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
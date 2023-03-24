export interface IMovie {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}
export interface IMovieProps {
  movie: {
    poster: string;
    title: string;
    type: string;
    year: string;
    imdbid: string;
  };
}
export interface IResponse {
  search: IMovie[];
  response: string;
  totalresults: string;
}
export interface IMovieInfo {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: IRating[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dVD: string;
  boxOffice: string;
  production: string;
  website: string;
}
export interface IRating {
  source: string;
  value: string;
}
export interface IFormData {
  search: string;
  year: string;
  type: string;
}
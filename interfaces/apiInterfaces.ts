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
    title?: string;
    year?: string;
    rated?: string;
    released?: string;
    runtime?: string;
    genre?: string;
    director?: string;
    writer?: string;
    actors?: string;
    plot?: string;
    language?: string;
    country?: string;
    awards?: string;
    poster?: string;
    ratings?: IRatings[];
    metascore?: string;
    imdbrating?: string;
    imdbvotes?: string;
    imdbid?: string;
    type?: string;
    dvd?: string;
    oxoffice?: string;
    production?: string;
    website?: string;
    response?: string;
  }
  
  export interface IRatings {
    source: string;
    value: string;
  }
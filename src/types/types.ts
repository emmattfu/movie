export interface IStore {
  app: {
    search: null | IResponce;
    width: number;
  };
  movies: { movies: IMoviesResults[]; status: string; error: null | string };
  shows: {
    shows: IShowsResult[];
    totalPages: number;
    status: string;
    error: null | string;
  };
  people: { people: IPeopleResult[]; status: string; error: string | null };
  person: {
    person: null | IPersonInfo;
    social: IPersonSocial;
    movies: ICastCombinedCredits;
    status: string;
    error: string | null;
  };
  showDetails: {
    show: IShowDetails | null;
    accounts: IShowDetailsSocial | null;
    actors: {
      cast: ICast[];
      crew: ICrew[];
      id: number;
    } | null;
  };
}

export interface IResponce {
  page: number;
  results: IMoviesResults[] | IShowsResult[];
  total_pages: number;
  total_results: number;
}

export interface IMoviesResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object | null;
  budget: number;
  genres: IGenre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ICompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: ISpokenLang[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ISpokenLang {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface IKnownForMovie extends IMoviesResults {
  media_type: string;
}

export interface IKnownForShow extends IShowsResult {
  media_type: string;
}

export interface IKnownForPeople extends IPeopleResult {
  media_type: string;
}

export interface IShowsResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IShowDetails {
  backdrop_path: string | null;
  created_by: IShowDetailsCreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IShowDetailsLastEpisodeToAir;
  name: string;
  networks: IShowDetailsNetworks;
  next_episode_to_air: ISHowDetailsNextEpisodeToAir | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ICompany[];
  production_countries: IProductionCountry;
  seasons: ISeasons[];
  spoken_languages: ISpokenLang[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ISeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface IShowDetailsCreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

export interface IShowDetailsLastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface ISHowDetailsNextEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface IShowDetailsNetworks {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface IPeopleResult {
  adult: boolean;
  gender: number;
  id: number;
  known_for: (IKnownForMovie | IKnownForShow)[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IPersonInfo {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string | null;
}

export interface IPersonSocial {
  facebook_id: string | null;
  freebase_id: string | null;
  freebase_mid: string | null;
  id: number | null;
  imdb_id: string | null;
  instagram_id: string | null;
  tvrage_id: number | null;
  twitter_id: string | null;
}

export interface IShowDetailsSocial extends IPersonSocial {
  tvdb_id: number;
}

export interface ICastCombinedCredits {
  cast: ICast[];
  crew: ICrew[];
  id: number;
}

export interface ICast {
  adult: boolean;
  backdrop_path: string | null;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ICrew {
  adult: boolean;
  backdrop_path: string | null;
  credit_id: string;
  department: string;
  genre_ids: number[];
  id: number;
  job: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ICredits {
  adult: boolean;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface ICreditsDetails {
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  profile_path: string | null;
}

export interface ICompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

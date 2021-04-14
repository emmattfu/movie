import PropTypes from "prop-types";

export const movieShape = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

export const showShape = {
  backdrop_path: PropTypes.string,
  first_air_date: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  name: PropTypes.string,
  origin_country: PropTypes.arrayOf(PropTypes.string),
  original_language: PropTypes.string,
  original_name: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

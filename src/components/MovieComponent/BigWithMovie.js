import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { movieShape } from "../../shapes/shapes";
import { pages } from "../../constants";

function BigWithMovie({ movies }) {
  return movies.map((movie) => {
    return (
      <div className='movie-card' key={movie.id}>
        <div className='movie-poster'>
          <NavLink to={`${pages.MOVIES.DEFAULT_PATH}/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt='poster'
            />
          </NavLink>
        </div>
        <div className='movie-info'>
          <p className='title'>{movie.title}</p>
          <p className='release-date'>
            {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p className='overview'>
            {movie.overview.length < 350
              ? movie.overview
              : movie.overview.slice(0, 350) + "..."}
          </p>
        </div>
      </div>
    );
  });
}

export default BigWithMovie;

BigWithMovie.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieShape)),
};

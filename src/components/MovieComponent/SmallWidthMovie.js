import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { movieShape } from "../../shapes/shapes";
import { pages } from "../../constants";

function SmallWidthMovie({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return (
          <div className='movie-card' key={movie.id}>
            <div className='movie-poster'>
              <NavLink to={`${pages.MOVIES.DEFAULT_PATH}/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt='poster'
                />
              </NavLink>
            </div>
            <div className='movie-info'>
              <p className='title'>{movie.title}</p>
              <p className='release-date'>
                {new Date(movie.release_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SmallWidthMovie;

SmallWidthMovie.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieShape)),
};

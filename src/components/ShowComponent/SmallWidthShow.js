import React from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../constants";
import PropTypes from "prop-types";
import { showShape } from "../../shapes/shapes";

function SmallWidthShow({ show }) {
  return (
    <>
      <div className='movie-card' key={show.id}>
        <div className='movie-poster'>
          <NavLink to={`${pages.SHOWS.DEFAULT_PATH}/${show.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`}
              alt='poster'
            />
          </NavLink>
        </div>
        <div className='movie-info'>
          <p className='title'>{show.original_name}</p>
          <p className='release-date'>{show.first_air_date}</p>
        </div>
      </div>
    </>
  );
}

export default SmallWidthShow;

SmallWidthShow.propTypes = {
  show: PropTypes.shape(showShape),
};

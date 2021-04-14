import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { showShape } from "../../shapes/shapes";
import { pages } from "../../constants";

const HomeTV = ({ shows }) => {
  return (
    <div className='home-tv'>
      <div className='home-content-header'>
        <p>On TV</p>
      </div>
      <div className='home-tv-posters'>
        {shows.map((el, i) => {
          return (
            <div className='home-poster' key={el.id} id={`id_${i}`}>
              <Link to={`${pages.SHOWS.DEFAULT_PATH}/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt='home-tv-poster'
                />
                <div className='home-poster-text'> {el.original_name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTV;

HomeTV.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape(showShape)),
};

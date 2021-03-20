import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { movieShape } from "../../shapes/shapes";
import { pages } from "../../constants";

const HomeMovies = ({ movies }) => {
  return (
    <div className='home-movies'>
      <div className='home-content-header'>
        <p>In Theatres</p>
      </div>
      <div className='home-movies-posters'>
        {movies.map((el, i) => {
          return (
            <div className='home-poster' id={`id_${i + 3}`} key={el.id}>
              <Link to={`${pages.MOVIES.DEFAULT_PATH}/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt='home-movie-poster'
                />
                <div className='home-poster-text'> {el.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMovies;

HomeMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieShape)),
};

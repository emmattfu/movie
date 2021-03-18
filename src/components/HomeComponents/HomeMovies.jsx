import React from "react";
import { Link } from "react-router-dom";

const HomeMovies = ({ movies }) => {
  console.log(movies);
  return (
    <div className='home-movies'>
      <div className='home-content-header'>
        <p>In Theatres</p>
      </div>
      <div className='home-movies-posters'>
        {movies.map((el, i) => {
          return (
            <div className='home-poster' id={`id_${i + 3}`} key={el.id}>
              <Link to={`/movies/details/${el.id}`}>
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

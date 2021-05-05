import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../constants";
import { IMoviesResults } from "../../types/types";

interface BigWithMovieProps {
  movies: IMoviesResults[];
}

const BigWithMovie: FC<BigWithMovieProps> = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
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
      })}
    </>
  );
};

export default BigWithMovie;

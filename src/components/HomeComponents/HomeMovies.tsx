import React, { FC } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../constants";
import { IMoviesResults } from "../../types/types";

interface HemoMoviesProps {
  movies: IMoviesResults[];
}

const HomeMovies: FC<HemoMoviesProps> = ({ movies }) => {
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

import React from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent";
import { MOVIE, TOPRATED_MOVIES } from "../../redux/types";
import useMovies from "../../hooks/useMovies";

const TopRatedMovies = () => {
  const { pages, selectPage } = useMovies(TOPRATED_MOVIES, MOVIE);

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Top Movies</h1>
          <div>
            Page:
            <select name='page-number' onChange={selectPage}>
              {pages.map((el) => (
                <option key={el}>{el}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='content-wrapper'>
          <MovieComponent />
        </div>
      </div>
    </>
  );
};

export default TopRatedMovies;

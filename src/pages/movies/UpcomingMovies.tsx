import React from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent";
import { MOVIE, UPCOMING_MOVIES } from "../../redux/types";
import useMovies from "../../hooks/useMovies";

const UpcomingMovies = () => {
  const { pages, selectPage } = useMovies(UPCOMING_MOVIES, MOVIE);

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Upcoming Movies</h1>
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

export default UpcomingMovies;

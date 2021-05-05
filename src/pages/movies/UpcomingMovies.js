import React from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent";
import { UPCOMING_MOVIES } from "../../redux/types.js";
import useMovies from "../../hooks/useMovies.js";

function UpcomingMovies() {
  const { pages, selectPage } = useMovies({ type: UPCOMING_MOVIES });

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
}

export default UpcomingMovies;

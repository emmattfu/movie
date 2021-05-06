import React from "react";
import ShowComponent from "../../components/ShowComponent/ShowComponent";
import { TOPRATED_SHOWS, TV } from "../../redux/types";
import useMovies from "../../hooks/useMovies";

function TopRatedShows() {
  const { pages, selectPage } = useMovies(TOPRATED_SHOWS, TV);

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Top Rated Tv Shows</h1>
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
          <ShowComponent />
        </div>
      </div>
    </>
  );
}

export default TopRatedShows;

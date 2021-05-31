import React from "react";
import ShowComponent from "../../components/ShowComponent/ShowComponent";
import { AIRING_TODAY_SHOWS, TV } from "../../redux/types";
import useMovies from "../../hooks/useMovies";

function AiringTodayShows() {
  const { pages, selectPage } = useMovies(AIRING_TODAY_SHOWS, TV);

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Currently Airing TV Shows</h1>
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
          <ShowComponent />)
        </div>
      </div>
    </>
  );
}

export default AiringTodayShows;

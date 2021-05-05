import React from "react";
import ShowComponent from "../../components/ShowComponent/ShowComponent";
import { AIRING_TODAY_SHOWS } from "../../redux/types.js";
import useShows from "../../hooks/useShows";

function AiringTodayShows() {
  const { pages, selectPage } = useShows({ type: AIRING_TODAY_SHOWS });

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

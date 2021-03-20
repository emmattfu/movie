import React from "react";
import ShowComponent from "../../components/ShowComponent/ShowComponent.js";
import { TOPRATED_SHOWS } from "../../redux/types";
import useShows from "../../hooks/useShows";

function TopRatedShows() {
  const { pages, selectPage } = useShows({ type: TOPRATED_SHOWS });

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

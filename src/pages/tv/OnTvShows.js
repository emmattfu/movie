import React from "react";
import ShowComponent from "../../components/ShowComponent/ShowComponent.js";
import { ON_TV_SHOWS } from "../../redux/types.js";
import useShows from "../../hooks/useShows";

function OnTVShows() {
  const { pages, selectPage } = useShows({ type: ON_TV_SHOWS });

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

export default OnTVShows;

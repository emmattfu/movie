import React from "react";
import ShowComponent from "../../components/ShowComponent/ShowComponent";
import { POPULAR_SHOWS } from "../../redux/types";
import useShows from "../../hooks/useShows";

function Shows() {
  const { pages, selectPage } = useShows({
    type: POPULAR_SHOWS,
  });

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Shows</h1>
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

export default Shows;

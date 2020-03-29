import React, { useState } from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent.js";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions.js";
import { UPCOMING_MOVIES } from "../../redux/types.js";

function UpcomingMovies() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const pages = [];
 
  dispatch(getMovies({page, type: UPCOMING_MOVIES}))

  for (let i = 1; i <= 100; i++) {
    pages.push(i)
  }

  function selectPage(event) {
    setPage(event.target.value)
    dispatch(getMovies({page, type: UPCOMING_MOVIES}))

  }

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Upcoming Movies</h1>
          <div>Page:  
            <select name="page-number" onChange={selectPage}>
              {pages.map(el => <option key={el}>{el}</option>)}
            </select></div>
        </div>
        <div className="content-wrapper">
          <MovieComponent />
        </div>
      </div>
    </>
  );
}

export default UpcomingMovies;

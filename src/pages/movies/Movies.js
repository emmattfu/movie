import React from "react";
import { useState } from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent.js";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions.js";
import { POPULAR_MOVIES } from "../../redux/types.js";

function Movies() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  
  const pages = [];

  dispatch(getMovies({page, type: POPULAR_MOVIES}))

  for (let i = 1; i <= 100; i++) {
    pages.push(i)
  }

  function selectPage(event) {
    setPage(event.target.value)
    dispatch(getMovies({page, type: POPULAR_MOVIES}))
  }

  return (
    <>
      <div className="container">
        
        <div className="page-header">
          <h1>Movies</h1>
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

export default Movies;

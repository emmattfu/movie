import React from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent";
import { POPULAR_MOVIES } from "../../redux/types.js";
import PageSelect from "../../components/PageSelect";
import useMovies from "../../hooks/useMovies.js";

function Movies() {
  const { pages, selectPage } = useMovies({ type: POPULAR_MOVIES });

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Movies</h1>
          <div>
            Page:
            <PageSelect pages={pages} selectPage={selectPage} />
          </div>
        </div>
        <div className='content-wrapper'>
          <MovieComponent />
        </div>
      </div>
    </>
  );
}

export default Movies;

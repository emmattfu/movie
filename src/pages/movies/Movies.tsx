import React, { FC } from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent";
import { MOVIE, POPULAR_MOVIES } from "../../redux/types";
import PageSelect from "../../components/PageSelect";
import useMovies from "../../hooks/useMovies";

const Movies: FC = () => {
  const { pages, selectPage } = useMovies(POPULAR_MOVIES, MOVIE);

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
};

export default Movies;

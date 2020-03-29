import React from "react";
import "./MovieComponent.css";
import BigWidthMovie from "./BigWithMovie";
import SmallWidthMovie from "./SmallWidthMovie";
import { useSelector } from "react-redux";

function MovieComponent() {
  const movies = useSelector(state => state.dataReducer.movies)
  const winWidth = useSelector(state => state.appReducer.width)

  if (!movies.length) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <>
      {winWidth > 1000 ? (
        <BigWidthMovie movies={movies} />
      ) : (
        <SmallWidthMovie movies={movies} />
      )}
    </>
  );
}

export default MovieComponent;

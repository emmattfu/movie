import React from "react";
import "./MovieComponent.css";
import BigWidthMovie from "./BigWithMovie";
import SmallWidthMovie from "./SmallWidthMovie";
import { useSelector } from "react-redux";
import { moviesSelector, widthSelector } from "../../redux/selectors/selectors";

function MovieComponent() {
  const movies = useSelector(moviesSelector);
  const winWidth = useSelector(widthSelector);

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

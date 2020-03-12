import React from "react";
import "./MovieComponent.css";
import BigWidthMovie from "./BigWithMovie";
import SmallWidthMovie from "./SmallWidthMovie";

function MovieComponent({ movies, loading, winWidth }) {
  const moviesArr = Array.from(movies);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <>
      {winWidth > 1000 ? (
        <BigWidthMovie moviesArr={moviesArr} />
      ) : (
        <SmallWidthMovie movies={moviesArr} />
      )}
    </>
  );
}

export default MovieComponent;

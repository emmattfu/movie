import React from "react";
import "./MovieComponent.css";

function MovieComponent({ movies, loading, api }) {
  const moviesArr = Array.from(movies);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {moviesArr.map(movie => {
        return (
          <div className="movie-card" key={movie.id}>
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="movie-info">
              <p className="title">{movie.title}</p>
              <p className="release-date">{movie.release_date}</p>
              <p className="overview">{movie.overview.length < 350 ? movie.overview: movie.overview.slice(0,350) + '...'}</p>
              
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MovieComponent;

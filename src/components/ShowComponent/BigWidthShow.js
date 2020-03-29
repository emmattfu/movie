import React from "react";
import {NavLink} from 'react-router-dom';

function BigWidthShow({ show }) {
  
  return (
    <>
      <div className="movie-card" key={show.id}>
        <div className="movie-poster">
          <NavLink to={`/shows/details/${show.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
              alt="poster"
            />
          </NavLink>
        </div>
        <div className="movie-info">
          <p className="title">{show.original_name}</p>
          <p className="release-date">{show.first_air_date}</p>
          <p className="overview">
            {show.overview.length < 150
              ? show.overview
              : show.overview.slice(0, 150) + "..."}
          </p>
        </div>
      </div>
    </>
  );
}

export default BigWidthShow;

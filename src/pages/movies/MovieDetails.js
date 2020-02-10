import React, { useState, useEffect } from "react";
import api from "../../Api.js";

const API = api();
let director, screenplay;

function MovieDetails({ match }) {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState("");
  const id = match.params.id;
  useEffect(() => {
    fetch(`${API.name}/movie/${id}?api_key=${API.key}&language=en-US`)
      .then(resp => resp.json())
      .then(resp => setMovie(resp));
  }, [id]);

  const [credits, setCredits] = useState(null);
  useEffect(() => {
    fetch(`${API.name}/movie/${id}/credits?api_key=${API.key}&language=en-US`)
      .then(resp => resp.json())
      .then(resp => {
        setLoading(true);
        setCredits(resp);
        setCast(resp.cast.slice(0, 5));
        setLoading(false);
      });
  }, []);

  const [accounts, setAccounts] = useState(null);
  useEffect(() => {
      fetch(`${API.name}/movie/${id}/external_ids?api_key=${API.key}`)
      .then(resp => resp.json())
      .then(resp => console.log(resp))
  }, [])

  if (credits) {
    credits.crew.forEach(el => {
      if (el.job === "Director") director = el.name;
      if (el.job === "Screenplay") screenplay = el.name;
    });
  }

  return (
    <>
      <div className="details-bg">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="background"
        ></img>
      </div>

      <div className="details">
        <div className="container">
          <div className="details-wrapper">
            <div className="details-poster">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
              ></img>
            </div>
            <div className="details-content">
              <h1 className="details-name">{movie.original_title}</h1>
              <div className="overview">
                <p className="details-header">Overview</p>
                <p className="details-text">{movie.overview}</p>
              </div>

              <p className="details-header featured">Featured Crew</p>
              <div className="credits">
                <div className="credits-director">
                  <p className="details-text big">Director</p>
                  <p className="details-text">{director}</p>
                </div>
                <div className="credits-screenplay">
                  <p className="details-text big">Screenplay</p>
                  <p className="details-text">{screenplay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cast">
        <div className="container">
          <p className="details-header">Top Billed Cast</p>
          <div className="cast-wrapper">
            {Array.from(cast).map(el => {
              return (
                <div className="cast-card" key={el.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                  ></img>
                  <p className="cast-name">{el.name}</p>
                  <p>{el.character}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

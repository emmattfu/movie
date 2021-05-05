import React, { useState, useEffect } from "react";
import api from "../../Api.js";
import CastComponent from "../../components/CastComponent";
import MovieDetailsComponent from "../../components/MovieDetailsComponent";
import BackgroundComponent from "../../components/BackgroundComponent";

const API = api();
let director, screenplay;

function MovieDetails({ match }) {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState("");
  const id = match.params.id;
  useEffect(() => {
    fetch(`${API.name}/movie/${id}?api_key=${API.key}&language=en-US`)
      .then((resp) => resp.json())
      .then((resp) => {
        setMovie(resp);
      });
  }, [id]);

  const [credits, setCredits] = useState(null);
  useEffect(() => {
    fetch(`${API.name}/movie/${id}/credits?api_key=${API.key}&language=en-US`)
      .then((resp) => resp.json())
      .then((resp) => {
        setCredits(resp);
        setCast(resp.cast.slice(0, 5));
      });
  }, [id]);

  const [accounts, setAccounts] = useState("");
  useEffect(() => {
    fetch(`${API.name}/movie/${id}/external_ids?api_key=${API.key}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setAccounts(resp);
      });
  }, [id]);

  if (credits) {
    credits.crew.forEach((el) => {
      if (el.job === "Director") director = el.name;
      if (el.job === "Screenplay") screenplay = el.name;
    });
  }

  if (!movie || !credits) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <BackgroundComponent backdrop={movie.backdrop_path} />
      <MovieDetailsComponent
        movie={movie}
        accounts={accounts}
        director={director}
        screenplay={screenplay}
      />
      <CastComponent cast={cast} type='movie' />
    </>
  );
}

export default MovieDetails;

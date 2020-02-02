import React from "react";
import './Movies.css';
import api from "../Api.js";
import { useState, useEffect } from "react";
import MovieComponent from "../components/MovieComponent/MovieComponent.js";

const API = api();

function Movies() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${API.name}/movie/popular?api_key=${API.key}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(resp => {
        setMovies(resp.results);
        setLoading(false);
      });
  }, []);
  console.log(movies);

  return (
    <>
      <div className="container">
        <h1>Movies</h1>
        <div className="content-wrapper">
          <MovieComponent movies={movies} loading={loading} api={api} />
        </div>
      </div>
    </>
  );
}

export default Movies;

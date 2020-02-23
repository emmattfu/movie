import React from "react";
import api from "../../Api.js";
import { useState, useEffect } from "react";
import MovieComponent from "../../components/MovieComponent/MovieComponent.js";

const API = api();

function Movies() {
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const pages = [];
  useEffect(() => {
    setLoading(true);
    fetch(`${API.name}/movie/popular?api_key=${API.key}&language=en-US&page=${page}`)
      .then(resp => resp.json())
      .then(resp => {
        setMovies(resp.results);
        setLoading(false);
      });
  }, [page]);

  for (let i = 1; i <= 100; i++) {
    pages.push(i)
  }

  function selectPage(event) {
    setPage(event.target.value)
  }


  return (
    <>
      <div className="container">
        
        <div className="page-header">
          <h1>Movies</h1>
          <div>Page:  
            <select name="page-number" onChange={selectPage}>
              {pages.map(el => <option key={el}>{el}</option>)}
            </select></div>
        </div>
        <div className="content-wrapper">
          <MovieComponent movies={movies} loading={loading} api={api} />
        </div>
      </div>
    </>
  );
}

export default Movies;

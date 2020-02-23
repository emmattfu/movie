import React, { useState, useEffect } from "react";
import api from "../../Api.js";
import MovieComponent from "../../components/MovieComponent/MovieComponent.js";

const API = api();

function TopRatedMovies() {
  const [topMovies, setTopMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const pages = [];
  useEffect(() => {
    setLoading(true);
    fetch(`${API.name}/movie/top_rated?api_key=${API.key}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(resp => {
        setTopMovies(resp.results);
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
          <h1>Top Movies</h1>
          <div>Page:  
            <select name="page-number" onChange={selectPage}>
              {pages.map(el => <option key={el}>{el}</option>)}
            </select></div>
        </div>
        <div className="content-wrapper">
          <MovieComponent movies={topMovies} loading={loading} api={api} />
        </div>
      </div>
    </>
  );
}

export default TopRatedMovies;

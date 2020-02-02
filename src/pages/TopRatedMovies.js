import React, {useState, useEffect} from 'react';
import api from '../Api.js';
import MovieComponent from "../components/MovieComponent/MovieComponent.js";


const API = api();

function TopRatedMovies() {
  const [topMovies, setTopMovies] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`${API.name}/movie/top_rated?api_key=${API.key}&language=en-US&page=1`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      setTopMovies(resp.results)
      setLoading(false) 
    })
  }, [])

    return (
        <>
          <div className="container">
            <h1>Top Movies</h1>
            <div className="content-wrapper">
              
          <MovieComponent movies={topMovies} loading={loading} api={api} />
            </div>
          </div>
        </>
      );
}

export default TopRatedMovies
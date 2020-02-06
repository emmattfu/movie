import React, {useState, useEffect} from 'react';
import api from '../../Api.js';
import MovieComponent from "../../components/MovieComponent/MovieComponent.js";


const API = api();

function NowPlayingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`${API.name}/movie/now_playing?api_key=${API.key}&language=en-US&page=1`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      setUpcomingMovies(resp.results)
      setLoading(false) 
    })
  }, [])

    return (
        <>
          <div className="container">
            <h1>Now Playing</h1>
            <div className="content-wrapper">
              
          <MovieComponent movies={upcomingMovies} loading={loading} api={api} />
            </div>
          </div>
        </>
      );
}

export default NowPlayingMovies
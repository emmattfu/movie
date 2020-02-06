import React, {useState, useEffect} from 'react';
import api from '../../Api.js';
import ShowComponent from "../../components/ShowComponent.js";


const API = api();

function TopRatedShows() {
  const [shows, setshows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`${API.name}/tv/top_rated?api_key=${API.key}&language=en-US&page=1`)
    .then(resp => resp.json())
    .then(resp => {
      setshows(Array.from(resp.results))
      setLoading(false) 
    })
  }, [])

    return (
        <>
          <div className="container">
            <h1>Currently Airing TV Shows</h1>
            <div className="content-wrapper">
              {shows.map(show => <ShowComponent key={show.id} show={show} loading={loading}/>)}
            </div>
          </div>
        </>
      );
}

export default TopRatedShows
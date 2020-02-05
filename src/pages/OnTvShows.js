import React, {useState, useEffect} from 'react';
import api from '../Api.js';
import ShowComponent from "../components/ShowComponent.js";


const API = api();

function OnTVShows() {
  const [onTVshows, setonTVshows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`${API.name}/tv/on_the_air?api_key=${API.key}&language=en-US&page=1`)
    .then(resp => resp.json())
    .then(resp => {
      setLoading(true)
      setonTVshows(Array.from(resp.results))
      setLoading(false) 
    })
  }, [])

    return (
        <>
          <div className="container">
            <h1>Currently Airing TV Shows</h1>
            <div className="content-wrapper">
              {onTVshows.map(show => <ShowComponent key={show.id} show={show} loading={loading}/>)}
            </div>
          </div>
        </>
      );
}

export default OnTVShows
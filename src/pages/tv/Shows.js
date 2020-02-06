import React, {useState, useEffect} from 'react';
import api from '../../Api.js';
import ShowComponent from "../../components/ShowComponent.js";


const API = api();

function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(`${API.name}/tv/popular?api_key=${API.key}&language=en-US&page=1`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      setLoading(true)
      setShows(Array.from(resp.results))
      setLoading(false) 
    })
  }, [])

    return (
        <>
          <div className="container">
            <h1>Shows</h1>
            <div className="content-wrapper">
              {shows.map(show => <ShowComponent key={show.id} show={show} loading={loading}/>)}
            </div>
          </div>
        </>
      );
}

export default Shows
import React, { useState, useEffect } from "react";
import api from "../../Api.js";
import ShowComponent from "../../components/ShowComponent.js";

const API = api();

function Shows() {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState(0);
  const pages = [];
  useEffect(() => {
    fetch(`${API.name}/tv/popular?api_key=${API.key}&language=en-US&page=${page}`)
      .then(resp => resp.json())
      .then(resp => {
        setPagesNumber(resp.total_pages)
        setShows(Array.from(resp.results));
      });
  }, [page]);

  for (let i = 1; i <= pagesNumber; i++) {
    pages.push(i);
  }

  function selectPage(event) {
    setPage(event.target.value);
  }

  if (!shows) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shows</h1>
            <div>Page:  
              <select name="page-number" onChange={selectPage}>
                {pages.map(el => <option key={el}>{el}</option>)}
              </select></div>
        </div>
        <div className="content-wrapper">
          {shows.map(show => (
            <ShowComponent key={show.id} show={show}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shows;

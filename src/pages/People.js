import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../Api";

const API = api();

function People() {
  const [people, setPeople] = useState("");
  const [page, setPage] = useState(1)
  const pages = [];
  useEffect(() => {
    fetch(`${API.name}/person/popular?api_key=${API.key}&language=en-US&page=${page}`)
      .then(resp => resp.json())
      .then(resp => {
        setPeople(resp.results)
      });
  }, [page]);

  for (let i = 1; i <= 100; i++) {
    pages.push(i)
  }

  function selectPage(event) {
    setPage(event.target.value)
  }

  if (!people) {
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
          <h1>Popular People</h1>
          <div>Page:  
            <select name="page-number" onChange={selectPage}>
              {pages.map(el => <option key={el}>{el}</option>)}
            </select></div>
        </div>
        
        <div className="content-wrapper">
          {people.map(elem => {
            return (
              <div className="people-card" key={elem.id}>
                <div className="people-poster">
                  <NavLink to={`/people/details/${elem.id}`}>
                    <img
                      className="people-img"
                      src={`https://image.tmdb.org/t/p/original/${elem.profile_path}`}
                      alt="popular-people"
                    ></img>
                  </NavLink>
                </div>
                <div className="people-info">
                  <p className="people-name">{elem.name}</p>
                  {elem.known_for.map((film, i) => {
                    return (
                      <div key={i}>
                        {!film.title || film.title.length < 28 ? (
                          <p className="people-known-for">
                            {film.title || film.original_name}
                          </p>
                        ) : (
                          <p className="people-known-for">
                            {film.title.slice(0, 28) + "..." ||
                              film.original_name}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default People;

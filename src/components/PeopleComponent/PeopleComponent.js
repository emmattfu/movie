import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function PeopleComponent() {
  const people = useSelector(state => state.dataReducer.people);

  if (!people.length) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="content-wrapper people">
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
                        {film.title.slice(0, 28) + "..." || film.original_name}
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
  );
}

export default PeopleComponent;

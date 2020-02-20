import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import api from "../../Api.js";
import SocialComponent from "../../components/SocialComponent";

const API = api();

function PeopleDetails({ match }) {
  const id = match.params.id;
  const [actor, setActor] = useState("");
  useEffect(() => {
    fetch(`${API.name}/person/${id}?api_key=${API.key}&language=en-US`)
      .then(resp => resp.json())
      .then(resp => {
        setActor(resp);
      });
  }, [id]);

  const [social, setSocial] = useState("");
  useEffect(() => {
    fetch(
      `${API.name}/person/${id}/external_ids?api_key=${API.key}&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => {
        setSocial(resp);
      });
  }, [id]);

  const [movies, setMovies] = useState("");
  useEffect(() => {
    fetch(
      `${API.name}/person/${id}/movie_credits?api_key=${API.key}&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        setMovies(resp);
      });
  }, [id]);

  if (!actor || !movies) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  const filteredMovies = movies.cast
    .sort((prev, next) => prev.vote_count - next.vote_count)
    .reverse();

  return (
    <>
      <div className="container">
        <div className="people-details">
          <div className="people-details-aside">
            <img
              src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
              alt="actor"
            />
            <div className="people-details-personal-info">
              <div>
                <h2>Personal Info </h2>
              </div>

              <p className="sub-info">
                Known For
                <span className="sub-info-text">
                  {actor.known_for_department}
                </span>
              </p>
              <p className="sub-info">
                Gender
                <span className="sub-info-text">
                  {actor.gender === 1 ? "Female" : "Male"}
                </span>
              </p>
              <p className="sub-info">
                Birthday
                <span className="sub-info-text">{actor.birthday ? actor.birthday : '-'}</span>
              </p>
              <p className="sub-info">
                Place of Birth
                <span className="sub-info-text">{actor.place_of_birth ? actor.place_of_birth : '-'}</span>
              </p>
              <p className="sub-info">
                Official Site
                <span className="sub-info-text">
                  {actor.homepage ? <a target="_blank" rel="noopener noreferrer" href={actor.homepage}>{actor.homepage}</a> : "-"}
                </span>
              </p>
              <p className="sub-info">Also Known As</p>
              <ul className="also-known-as">
                {actor.also_known_as.map((name, i) => {
                  return (
                    <li className="sub-info-text" key={i}>
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="people-details-content">
            <div className="people-details-content-header">
              <p className="people-details-content-title">{actor.name}</p>
              <div className="people-details-social">
                <SocialComponent accounts={social} homepage={actor.homepage} />
              </div>
            </div>
            <p className="biography-title">Bigraphy</p>
            <p className="people-details-content-biography">
              {actor.biography ? actor.biography : `We don't have a biography for ${actor.name}`}
            </p>

            <p className="filmed-in-title">Known For</p>
            <div className="filmed-in">
              {filteredMovies.slice(0, 8).map(el => {
                return (
                  <div className="filmed-in-card" key={el.id}>
                    <Link to={`/movies/details/${el.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                      alt="filmed-in-movie"
                    />
                    </Link>
                    <div className="filmed-in-card-text">{el.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleDetails;

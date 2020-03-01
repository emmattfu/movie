import React, { useState, useEffect } from "react";
import './Home.css';
import api from "../Api.js";
import { Link } from "react-router-dom";

const API = api();

function Home() {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    fetch(
      `${API.name}/movie/now_playing?api_key=${API.key}&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(resp => {
        setMovies(resp.results.slice(0, 3));
      });
  }, []);

  const [shows, setShows] = useState("");
  useEffect(() => {
    fetch(`${API.name}/tv/on_the_air?api_key=${API.key}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(resp => {
        setShows(resp.results.slice(0, 3));
      });
  }, []);

  if (!shows || !movies) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="home-top">
        <div className="left">
          <div className="home-top-text">
            <h2>Discussion</h2>
            <p>CATCH UP NOW</p>
          </div>
        </div>
        <div className="right">
          <div className="home-top-text">
            <h2>That's a Wrap!</h2>
            <p>READ THE 2019 RECAP</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="home-content">
          <div className="home-tv">
            <div className="home-content-header">
              <p>On TV</p>
            </div>
            <div className="home-tv-posters">
              {shows.map((el, i) => {
                return (
                  <div className="home-poster" key={el.id} id={`id_${i}`}>
                    <Link to={`/shows/details/${el.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                        alt="home-tv-poster"
                      />
                      <div className="home-poster-text">
                        {" "}
                        {el.original_name}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="home-movies">
            <div className="home-content-header">
              <p>In Theatres</p>
            </div>
            <div className="home-movies-posters">
              {movies.map((el, i) => {
                return (
                  <div className="home-poster" id={`id_${i + 3}`} key={el.id}>
                    <Link to={`/movies/details/${el.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                        alt="home-movie-poster"
                      />
                      <div className="home-poster-text"> {el.title}</div>
                    </Link>
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

export default Home;

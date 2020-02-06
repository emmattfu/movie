import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Movies from "./pages/movies/Movies.js";
import TopRatedMovies from "./pages/movies/TopRatedMovies.js";
import UpcomingMovies from "./pages/movies/UpcomingMovies.js";
import NowPlayingMovies from "./pages/movies/NowPlayingMovies.js";
import MovieDetails from "./pages/movies/MovieDetails.js";
import Shows from "./pages/tv/Shows.js";
import OnTVShows from "./pages/tv/OnTvShows.js";
import AiringTodayShows from "./pages/tv/AiringTodayShows.js";
import TopRatedShows from "./pages/tv/TopRatedShows.js";
import People from "./pages/People.js";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />

        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/people" component={People} />
        <Route exact path="/movies/popular" component={Movies} />
        <Route exact path="/movies/top-rated" component={TopRatedMovies} />
        <Route exact path="/movies/upcoming" component={UpcomingMovies} />
        <Route exact path="/movies/now-playing" component={NowPlayingMovies} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/shows/popular" component={Shows} />
        <Route exact path="/shows/on-tv" component={OnTVShows} />
        <Route exact path="/shows/airing-today" component={AiringTodayShows} />
        <Route exact path="/shows/top-rated" component={TopRatedShows} />
      </div>
    </BrowserRouter>
  );
}

export default App;

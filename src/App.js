import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Movies from "./pages/Movies.js";
import Shows from "./pages/Shows.js";
import People from "./pages/People.js";
import Home from "./pages/Home.js";
import TopRatedMovies from './pages/TopRatedMovies.js';
import UpcomingMovies from './pages/UpcomingMovies';
import NowPlayingMovies from './pages/NowPlayingMovies';
import OnTVShows from './pages/OnTvShows';
import AiringTodayShows from './pages/AiringTodayShows';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="header-container">
        <h2><NavLink to="/">The Movie App</NavLink></h2>
        <ul className="nav">
          <li className="nav-item-main"><NavLink to="/movies">MOVIES</NavLink>
            <ul className="nav movie-nav">
              <li className="nav-item"><NavLink to="/movies/popular">Popular</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/top-rated">Top Rated</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/upcoming">Upcoming</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/now-playing">Now Playing</NavLink></li> 
            </ul>
          </li>
          <li className="nav-item-main"><NavLink to="/shows">TV SHOWS</NavLink>
            <ul className="nav movie-nav">
              <li className="nav-item"><NavLink to="/shows/popular">Popular</NavLink></li>
              <li className="nav-item"><NavLink to="/shows/top-rated">Top Rated</NavLink></li>
              <li className="nav-item"><NavLink to="/shows/on-tv">On TV</NavLink></li>
              <li className="nav-item"><NavLink to="/shows/airing-today">Airing Today</NavLink></li> 
            </ul>
          </li>
          <li className="nav-item-main"><NavLink to="/people">People</NavLink></li>
        </ul>
        </div>
        
        
      </header>
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/movies" component={Movies}/>
      <Route exact path="/shows" component={Shows}/>
      <Route exact path="/people" component={People}/>
      <Route exact path="/movies/popular" component={Movies}/>
      <Route exact path="/movies/top-rated" component={TopRatedMovies}/>
      <Route exact path="/movies/upcoming" component={UpcomingMovies}/>
      <Route exact path="/movies/now-playing" component={NowPlayingMovies}/>
      <Route exact path="/shows/popular" component={Shows}/>
      <Route exact path="/shows/on-tv" component={OnTVShows}/>
      <Route exact path="/shows/airing-today" component={AiringTodayShows}/>

    </div>
    </BrowserRouter>
  );
}

export default App;

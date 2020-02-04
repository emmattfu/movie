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


function App() {
  const [movieMenu, setMovieMenu] = useState('none')

  function mouseOverHandle() {
    setMovieMenu('flex')
  }

  function mouseOutHandle() {
    setMovieMenu('none')
  }

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="header-container">
        <h2><NavLink to="/">The Movie App</NavLink></h2>
        <ul className="nav">
          <li onMouseOver={mouseOverHandle} onMouseOut={mouseOutHandle} className="nav-item"><NavLink to="/movies">MOVIES</NavLink>
            <ul className="nav movie-nav" >
              <li className="nav-item"><NavLink to="/movies/popular">Popular</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/top-rated">Top Rated</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/upcoming">Upcoming</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/now-playing">Now Playing</NavLink></li> 
            </ul>
          </li>
          <li className="nav-item"><NavLink to="/shows">TV SHOWS</NavLink>
            <ul className="nav movie-nav" >
              <li className="nav-item"><NavLink to="/movies/popular">Popular</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/top-rated">Top Rated</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/upcoming">Upcoming</NavLink></li>
              <li className="nav-item"><NavLink to="/movies/now-playing">Now Playing</NavLink></li> 
            </ul>
          </li>
          <li className="nav-item"><NavLink to="/people">People</NavLink></li>
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

    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Movies from "./pages/Movies.js";
import Shows from "./pages/Shows.js";
import People from "./pages/People.js";
import Home from "./pages/Home.js";

function App() {

  function mouseOverHandle() {
    console.log('work')
  }

  function mouseOutHandle() {
    console.log('out')
  }

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h2><NavLink to="/">The Movie App</NavLink></h2>
        <ul className="nav">
          <li onMouseOver={mouseOverHandle} onMouseOut={mouseOutHandle} className="nav-item"><NavLink to="/movies">MOVIES</NavLink></li>
          <li className="nav-item"><NavLink to="/shows">TV SHOWS</NavLink></li>
          <li className="nav-item"><NavLink to="/people">People</NavLink></li>
        </ul>
        <ul className="nav movie-nav">
          <li className="nav-item"><NavLink to="/movies/top-rated">Popular</NavLink></li>
          <li className="nav-item"><NavLink to="/movies/top-rated">Top Rated</NavLink></li>
          <li className="nav-item"><NavLink to="/movies/top-rated">Upcoming</NavLink></li>
          <li className="nav-item"><NavLink to="/movies/top-rated">Now Playing</NavLink></li>
        </ul>
      </header>

      <Route exact path="/" component={Home}/>
      <Route exact path="/movies" component={Movies}/>
      <Route exact path="/shows" component={Shows}/>
      <Route exact path="/people" component={People}/>

    </div>
    </BrowserRouter>
  );
}

export default App;

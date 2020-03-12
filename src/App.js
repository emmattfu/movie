import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch  } from "react-router-dom";


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
import ShowDetails from "./pages/tv/ShowDetails.js";
import People from "./pages/People.js";
import PeopleDetails from "./pages/people/PeopleDetails.js"
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from './components/FooterComponent/FooterComponent.js';
import SearchComponent from "./components/SearchComponent/SearchComponent.js";
import Search from './pages/Search';
import Other from "./components/Other";
import SearchContext from './contexts/searchContext';
import WidthContext from './contexts/WidthContext';


function App() {
  const [search, setSearch] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function onResizeHandle() {
      setWidth(window.innerWidth)
      console.log(width)
    }

    window.addEventListener('resize', onResizeHandle)

    return () => {
      window.removeEventListener('resize', onResizeHandle)
    }
  }, [width])

  return (
    <WidthContext.Provider value={[width, setWidth]}>
      <SearchContext.Provider value={[search, setSearch]}>
      <BrowserRouter>
        <div className="App">
          <HeaderComponent />
          <SearchComponent />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/shows" component={Shows} />
              <Route exact path="/people" component={People} />
              <Route exact path="/movies/popular" component={Movies} />
              <Route exact path="/movies/top-rated" component={TopRatedMovies} />
              <Route exact path="/movies/upcoming" component={UpcomingMovies} />
              <Route exact path="/movies/now-playing" component={NowPlayingMovies} />
              <Route exact path="/movies/details/:id" component={MovieDetails} />
              <Route exact path="/shows/popular" component={Shows} />
              <Route exact path="/shows/on-tv" component={OnTVShows} />
              <Route exact path="/shows/airing-today" component={AiringTodayShows} />
              <Route exact path="/shows/top-rated" component={TopRatedShows} />
              <Route exact path="/shows/details/:id" component={ShowDetails} />
              <Route exact path="/people/details/:id" component={PeopleDetails} />
              <Route exact path="/search" component={Search} />
              <Route component={Other} /> 
            </Switch>
          </div>

          <FooterComponent />
          
        </div>
      </BrowserRouter>
      </SearchContext.Provider>
    </WidthContext.Provider>
  );
}

export default App;

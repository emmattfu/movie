import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getWidth } from "./redux/slices/appSlice";

import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import TopRatedMovies from "./pages/movies/TopRatedMovies";
import UpcomingMovies from "./pages/movies/UpcomingMovies";
import NowPlayingMovies from "./pages/movies/NowPlayingMovies";
import MovieDetails from "./pages/movies/MovieDetails";

import Shows from "./pages/tv/Shows";
import OnTVShows from "./pages/tv/OnTvShows";
import AiringTodayShows from "./pages/tv/AiringTodayShows";
import TopRatedShows from "./pages/tv/TopRatedShows";
import ShowDetails from "./pages/tv/ShowDetails";
import People from "./pages/People";
import PeopleDetails from "./pages/people/PeopleDetails";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import Search from "./pages/Search";
import Other from "./components/Other";
import { pages } from "./constants";

function App() {
  const dispatch = useDispatch();

  function onResizeHandle() {
    dispatch(getWidth(window.innerWidth));
  }

  window.addEventListener("resize", onResizeHandle);

  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderComponent />
        <SearchComponent />
        <div className='content'>
          <Switch>
            <Route exact path={pages.HOME.DEFAULT_PATH} component={Home} />
            <Route exact path={pages.MOVIES.DEFAULT_PATH} component={Movies} />
            <Route exact path={pages.SHOWS.DEFAULT_PATH} component={Shows} />
            <Route exact path={pages.PEOPLE.DEFAULT_PATH} component={People} />
            <Route exact path={pages.MOVIES.POPULAR} component={Movies} />
            <Route
              exact
              path={pages.MOVIES.TOP_RATED}
              component={TopRatedMovies}
            />
            <Route
              exact
              path={pages.MOVIES.UPCOMING}
              component={UpcomingMovies}
            />
            <Route
              exact
              path={pages.MOVIES.NOW_PLAYING}
              component={NowPlayingMovies}
            />
            <Route exact path={pages.MOVIES.DETAILS} component={MovieDetails} />
            <Route exact path={pages.SHOWS.POPULAR} component={Shows} />
            <Route exact path={pages.SHOWS.OnTV} component={OnTVShows} />
            <Route
              exact
              path={pages.SHOWS.AIRING_TODAY}
              component={AiringTodayShows}
            />
            <Route
              exact
              path={pages.SHOWS.TOP_RATED}
              component={TopRatedShows}
            />
            <Route exact path={pages.SHOWS.DETAILS} component={ShowDetails} />
            <Route
              exact
              path={pages.PEOPLE.DETAILS}
              component={PeopleDetails}
            />
            <Route exact path={pages.SEARCH.DEFAULT_PATH} component={Search} />
            <Route component={Other} />
          </Switch>
        </div>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

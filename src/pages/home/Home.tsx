import React, { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesLoading } from "../../redux/slices/moviesSlice";
import { getShowsLoading } from "../../redux/slices/showsSlice";
import { moviesSelector, showsSelector } from "../../redux/selectors/selectors";
import HomeTV from "../../components/HomeComponents/HomeTV";
import HomeMovies from "../../components/HomeComponents/HomeMovies";

import "./Home.css";
import { NOW_PLAYING_MOVIES, ON_TV_SHOWS } from "../../redux/types";

const Home: FC = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const shows = useSelector(showsSelector);

  useEffect(() => {
    dispatch(getMoviesLoading({ page: 1, type: NOW_PLAYING_MOVIES }));
    dispatch(getShowsLoading({ type: ON_TV_SHOWS, page: 1 }));
  }, [dispatch]);

  if (!shows || !movies) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className='home-top'>
        <div className='left'>
          <div className='home-top-text'>
            <h2>Discussion</h2>
            <p>CATCH UP NOW</p>
          </div>
        </div>
        <div className='right'>
          <div className='home-top-text'>
            <h2>That's a Wrap!</h2>
            <p>READ THE 2020 RECAP</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='home-content'>
          <HomeTV shows={shows.slice(0, 3)} />

          <HomeMovies movies={movies.slice(0, 3)} />
        </div>
      </div>
    </>
  );
};

export default Home;

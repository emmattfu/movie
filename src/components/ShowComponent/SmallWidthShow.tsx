import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../constants";
import { IShowsResult } from "../../types/types";

interface SmallWidthShowProps {
  show: IShowsResult;
}

export const SmallWidthShow: FC<SmallWidthShowProps> = ({ show }) => {
  return (
    <>
      <div className='movie-card' key={show.id}>
        <div className='movie-poster'>
          <NavLink to={`${pages.SHOWS.DEFAULT_PATH}/${show.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`}
              alt='poster'
            />
          </NavLink>
        </div>
        <div className='movie-info'>
          <p className='title'>{show.original_name}</p>
          <p className='release-date'>{show.first_air_date}</p>
        </div>
      </div>
    </>
  );
};

export default SmallWidthShow;

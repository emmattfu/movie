import React, { FC } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../constants";
import { IShowsResult } from "../../types/types";

interface HomeTVProps {
  shows: IShowsResult[];
}

const HomeTV: FC<HomeTVProps> = ({ shows }) => {
  return (
    <div className='home-tv'>
      <div className='home-content-header'>
        <p>On TV</p>
      </div>
      <div className='home-tv-posters'>
        {shows.map((el, i) => {
          return (
            <div className='home-poster' key={el.id} id={`id_${i}`}>
              <Link to={`${pages.SHOWS.DEFAULT_PATH}/${el.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt='home-tv-poster'
                />
                <div className='home-poster-text'> {el.original_name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTV;

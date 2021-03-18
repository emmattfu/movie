import React from "react";
import { Link } from "react-router-dom";

const HomeTV = ({ shows }) => {
  return (
    <div className='home-tv'>
      <div className='home-content-header'>
        <p>On TV</p>
      </div>
      <div className='home-tv-posters'>
        {shows.map((el, i) => {
          return (
            <div className='home-poster' key={el.id} id={`id_${i}`}>
              <Link to={`/shows/details/${el.id}`}>
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

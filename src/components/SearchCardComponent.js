import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../constants";

function SearchCardComponent({ item }) {
  if (item.media_type === "movie") {
    return (
      <div className='search-card'>
        {item.poster_path ? (
          <Link to={`${pages.MOVIES.DEFAULT_PATH}/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt='123'
            />
          </Link>
        ) : (
          <img
            src='https://via.placeholder.com/500?text=Poster not found'
            alt='123'
          />
        )}
        <p className='search-card-name'>{item.title}</p>
        <p>Media type: {item.media_type}</p>
      </div>
    );
  }

  if (item.media_type === "tv") {
    return (
      <div className='search-card'>
        {item.poster_path ? (
          <Link to={`${pages.SHOWS.DEFAULT_PATH}/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt='123'
            />
          </Link>
        ) : (
          <img
            src='https://via.placeholder.com/500?text=Poster not found'
            alt='123'
          />
        )}
        <p className='search-card-name'>{item.original_name}</p>
        <p>Media type: {item.media_type} show</p>
      </div>
    );
  }

  return (
    <div className='search-card'>
      {item.profile_path ? (
        <Link to={`people/details/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
            alt='123'
          />
        </Link>
      ) : (
        <img
          src='https://via.placeholder.com/500?text=Poster not found'
          alt='123'
        />
      )}
      <p className='search-card-name'>{item.name}</p>
      <p>Media type: {item.media_type}</p>
    </div>
  );
}

export default SearchCardComponent;

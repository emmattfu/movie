import React, { FC } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../constants";
import { IKnownForMovie } from "../../types/types";

interface SearchCardMovieProps {
  item: IKnownForMovie;
}

const SearchCardMovie: FC<SearchCardMovieProps> = ({ item }) => {
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
};

export default SearchCardMovie;

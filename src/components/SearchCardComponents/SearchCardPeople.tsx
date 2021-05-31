import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IKnownForPeople } from "../../types/types";

interface SearchCardPeopleProps {
  item: IKnownForPeople;
}

const SearchCardPeople: FC<SearchCardPeopleProps> = ({ item }) => {
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
};

export default SearchCardPeople;

import React, { useState, useEffect } from "react";
import api from "../Api";
import { useSelector } from "react-redux";
import { searchSelector } from "../redux/selectors/selectors";
import SearchCardMovie from "../components/SearchCardComponents/SearchCardMovie";
import SearchCardShows from "../components/SearchCardComponents/SearchCardShows";
import SearchCardPeople from "../components/SearchCardComponents/SearchCardPeople";

const API = api();

function Search() {
  const [result, setResult] = useState(null);
  const value = useSelector(searchSelector);

  useEffect(() => {
    fetch(
      `${API.name}/search/multi?api_key=${API.key}&query=${value}&language=en-US&page=1&include_adult=false`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setResult(resp.results);
      });
  }, [value]);

  if (!result) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='page-header'>
        <h1>Search results</h1>
      </div>
      <div className='search-result'>
        {result.map((el) => {
          if (el.media_type === "movie") {
            return <SearchCardMovie item={el} key={el.id} />;
          } else if (el.media_type === "tv") {
            return <SearchCardShows item={el} key={el.id} />;
          } else {
            return <SearchCardPeople item={el} key={el.id} />;
          }
        })}
      </div>
    </div>
  );
}

export default Search;

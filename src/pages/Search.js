import React, { useState, useEffect } from "react";
import api from "../Api";
import SearchCardComponent from "../components/SearchCardComponent";
import { useSelector } from "react-redux";
import { searchSelector } from "../redux/selectors/selectors";

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
        {result.map((el) => (
          <SearchCardComponent key={el.id} item={el}></SearchCardComponent>
        ))}
      </div>
    </div>
  );
}

export default Search;

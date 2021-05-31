import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "../redux/selectors/selectors";
import SearchCardMovie from "../components/SearchCardComponents/SearchCardMovie";
import SearchCardShows from "../components/SearchCardComponents/SearchCardShows";
import SearchCardPeople from "../components/SearchCardComponents/SearchCardPeople";
import { IKnownForMovie, IKnownForPeople, IKnownForShow } from "../types/types";
import { useLocation } from "react-router";
import queryString from "query-string";
import { getSearchResultLoading } from "../redux/slices/searchSlice";

function Search() {
  const searchResult = useSelector(searchSelector);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const searchRequest = Object.keys(qs)[0];

  useEffect(() => {
    if (!searchResult) {
      dispatch(getSearchResultLoading(searchRequest));
    }
  }, [dispatch, searchRequest, searchResult]);

  if (!searchResult) {
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
        {searchResult.map((el) => {
          if (el.media_type === "movie") {
            return <SearchCardMovie item={el as IKnownForMovie} key={el.id} />;
          } else if (el.media_type === "tv") {
            return <SearchCardShows item={el as IKnownForShow} key={el.id} />;
          } else {
            return (
              <SearchCardPeople item={el as IKnownForPeople} key={el.id} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Search;

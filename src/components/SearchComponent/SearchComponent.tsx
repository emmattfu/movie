import React, { useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./SearchComponent.css";
import { useDispatch } from "react-redux";
import { getSearchResultLoading } from "../../redux/slices/searchSlice";

function SearchComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const memoizedSubmitHandle = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(getSearchResultLoading(inputRef?.current?.value));
      history.push(`/search?${inputRef?.current?.value}`);
      inputRef!.current!.value = "";
    },

    [dispatch, history]
  );

  return (
    <div className='search'>
      <div className='container'>
        <form className='search-form' onSubmit={memoizedSubmitHandle}>
          <input
            type='text'
            placeholder='Search for a movie, tv show, person...'
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchComponent;

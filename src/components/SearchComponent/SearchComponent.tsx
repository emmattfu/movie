import React, { useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./SearchComponent.css";
import { useDispatch } from "react-redux";
import { search } from "../../redux/slices/appSlice";

function SearchComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const memoizedSubmitHandle = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(search(inputRef?.current?.value));
      history.push("/search");
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

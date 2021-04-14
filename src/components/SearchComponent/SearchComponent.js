import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./SearchComponent.css";
import { useDispatch } from "react-redux";
import { search } from "../../redux/slices/appSlice";

function SearchComponent() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  function submitHandle(e) {
    e.preventDefault();
    dispatch(search(inputRef.current.value));
    history.push("/search");
  }

  return (
    <div className='search'>
      <div className='container'>
        <form className='search-form' onSubmit={submitHandle}>
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

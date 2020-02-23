import React, {useState, useRef, useContext} from "react";
import {Redirect} from 'react-router-dom';
import searchContext from '../contexts/searchContext.js';


function SearchComponent() {
  const inputRef = useRef();
  const [count, setCount] = useState(0)
  const [redirect, setRedirect] = useState(false);
  const setSearch = useContext(searchContext)[1]

  function submitHandle(e) {
    e.preventDefault();
    setSearch(inputRef.current.value)
    setRedirect(true)
    setCount(count + 1)
  }

  return (
    <div className="search" key={count}>
      <div className="container">
        <form className="search-form" onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            ref={inputRef}
          />
        </form>
      </div>
      {redirect ? <Redirect to="/search"/> : ''}
    </div>
  );
}

export default SearchComponent;

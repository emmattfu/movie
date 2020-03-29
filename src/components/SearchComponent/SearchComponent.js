import React, {useState, useRef} from "react";
import {Redirect} from 'react-router-dom';
import './SearchComponent.css';
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";


function SearchComponent() {
  const inputRef = useRef();
  const [count, setCount] = useState(0)
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  function submitHandle(e) {
    e.preventDefault();
    dispatch(search(inputRef.current.value))
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

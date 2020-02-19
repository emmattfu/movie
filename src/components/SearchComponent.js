import React, {useState, useEffect, useRef} from "react";
import api from '../Api.js'

const API = api();

function SearchComponent() {
  const inputRef = useRef();
  
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch(`${API.name}/search/person?api_key=${API.key}?query=${value}&language=en-US`)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  }, [value])

  function submitHandle(e) {
    e.preventDefault();
    setValue(inputRef.current.value);
  }

  return (
    <div className="search">
      <div className="container">
        <form className="search-form" onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchComponent;

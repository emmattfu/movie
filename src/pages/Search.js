import React, {useState, useEffect, useContext} from 'react';
import api from '../Api';
import searchContext from '../contexts/searchContext';
import SearchCardComponent from '../components/SearchCardComponent'


const API = api();

function Search() {
    const value = useContext(searchContext)[0]
    const [result, setResult] = useState(null)
   
    useEffect(() => {
        fetch(`${API.name}/search/multi?api_key=${API.key}&query=${value}&language=en-US&page=1&include_adult=false`)
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          setResult(resp.results)
        })
      }, [value])
    
    
    if (!result) {
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      )
    }

    return (
      <div className="container">
        <h2>Search results</h2>
        <div className="search-result">
        {result.map(el => <SearchCardComponent item={el}></SearchCardComponent>)}
        </div>
       
      </div>
    )
}

export default Search
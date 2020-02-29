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
        <div className="page-header">
          <h1>Search results</h1>
        </div>
        <div className="search-result">
        {result.map(el => <SearchCardComponent key={el.id} item={el}></SearchCardComponent>)}
        </div>
       
      </div>
    )
}

export default Search
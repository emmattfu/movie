import React, {useState, useEffect} from 'react';
import api from '../Api';

const API = api();

function People() {
    const [people, setPeople] = useState('');
    
    useEffect(() => {
      fetch(`${API.name}/person/popular?api_key=${API.key}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(resp => setPeople(resp.results))
    },[])

    console.log(people)
    return (
        <>
          <div className="container">
            <h1>Popular People</h1>
            <div className="people-wrapper">
              {Array.from(people).map(elem => {
                return (
                  <div className="people-card" key={elem.id}>
                    <div className="people-poster">
                     <img src={`https://image.tmdb.org/t/p/original/${elem.profile_path}`}  alt='popular-people'></img>
                    </div>
                    <p className="people-name">{elem.name}</p>
                {/* <p>{elem.known_for[0]}</p> */}
                  </div>
                )
              })}
            </div>
          </div>
        </>
      );
}

export default People
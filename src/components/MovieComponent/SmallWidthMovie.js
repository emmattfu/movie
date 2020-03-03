import React from 'react'
import {NavLink} from 'react-router-dom'

function SmallWidthMovie({movies}) {
    return(
        <>
       { movies.map(movie => {
            return (
              <div className="movie-card" key={movie.id}>
                 <div className="movie-poster">
                  <NavLink to={`/movies/details/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="poster"
                  />
                  </NavLink>
                </div>
                <div className="movie-info">
                  <p className="title">{movie.title}</p>
                  <p className="release-date">{new Date(movie.release_date).toLocaleDateString()}</p>
                
                </div>
              </div>
            )
          })}
          </>
    )
}

export default SmallWidthMovie
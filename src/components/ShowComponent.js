import React from 'react';

function ShowComponent({show, loading}) {
  
    if (loading) {
      return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="movie-card" key={show.id}>
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="movie-info">
              <p className="title">{show.original_name}</p>
              <p className="release-date">{show.first_air_date}</p>
              <p className="overview">{show.overview.length < 350 ? show.overview: show.overview.slice(0,350) + '...'}</p>
            </div>
          </div>
        </>
    )
}

export default ShowComponent
import React, {useState, useEffect} from 'react';
import api from '../../Api.js';

const API = api();

function MovieDetails({match}) {
    const [movie, setMovie] = useState('')
    const id = match.params.id;
    useEffect(() => {
        fetch(`${API.name}/movie/${id}?api_key=${API.key}&language=en-US`)
        .then(resp => resp.json())
        .then(resp => setMovie(resp))
    },[id])

    console.log(movie)
    return (
        <>
            <div className="details-bg">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='background'></img>
            </div>
           
            <div className="container">
                <div className="details-wrapper">
                    <div className="details-poster">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='poster'></img>   
                    </div> 
                    <div className="details-content">
                            <h1 className="details-name">{movie.original_title}</h1>
                            <p className="details-overview">Overview</p>
                            <p className="details-overview-text">{movie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails
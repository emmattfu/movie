import React from 'react';

function MovieDetails({match}) {
    console.log(match.params)
    return <h1>Movie Details</h1>
}

export default MovieDetails
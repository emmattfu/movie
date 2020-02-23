import React from 'react';

function SearchCardComponent({item}) {

    if (item.media_type === 'movie') {
        return (
            <div className="search-card">
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="123"/>
            </div>
        )
    }

    if (item.media_type === 'tv') {
        return (
            <div className="search-card">
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="123"/>
            </div>
        )
    }


    return (
            <div className="search-card">
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="123"/>
            </div>
        )
}

export default SearchCardComponent
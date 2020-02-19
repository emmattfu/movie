import React from "react";

function CastComponent({ cast, type }) {
  
  return (
    <>
      <div className="cast">
        <div className="container">
  <p className="details-header">{type === 'movie' ? 'Top Billed Cast' : 'Series Cast'}</p>
          <div className="cast-wrapper">
            {Array.from(cast).map(el => {
             
              return (
                <div className="cast-card" key={el.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                    alt="actor-img"
                  ></img>
                  <div className="cast-info">
                  <p className="cast-name">{el.name}</p>
                  <p>{el.character}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CastComponent;

import React from "react";
import SocialComponent from "./SocialComponent.js";
import CreditsComponent from "./CreditsComponent";

function ShowDetailsComponent({ show, accounts }) {
  return (
    <div className='details'>
      <div className='container'>
        <div className='details-wrapper'>
          <div className='details-poster'>
            <img
              src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
              alt='poster'
            ></img>
          </div>
          <div className='details-content'>
            <h1 className='details-name'>
              {show.name}
              <span className='details-release-date'>
                ({new Date(show.first_air_date).getFullYear() || ""})
              </span>
            </h1>
            <div className='overview'>
              <p className='details-header'>Overview</p>
              <p className='details-text'>{show.overview}</p>
            </div>

            <CreditsComponent credits={show.created_by} />

            <div className='social'>
              <p className='details-header'>Social media</p>
              <SocialComponent accounts={accounts} homepage={show.homepage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetailsComponent;

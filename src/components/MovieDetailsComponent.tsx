import React, { FC } from "react";
import { IMovieDetails, IMovieDetailsSocial } from "../types/types.js";
import SocialComponent from "./SocialComponent";

interface MovieDetailsComponentProps {
  movie: IMovieDetails;
  accounts: IMovieDetailsSocial;
  director: string;
  screenplay: string;
}

const MovieDetailsComponent: FC<MovieDetailsComponentProps> = ({
  movie,
  accounts,
  director,
  screenplay,
}) => {
  return (
    <div className='details'>
      <div className='container'>
        <div className='details-wrapper'>
          <div className='details-poster'>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt='poster'
            ></img>
          </div>
          <div className='details-content'>
            <h1 className='details-name'>
              {movie.original_title}
              <span className='details-release-date'>
                ({new Date(movie.release_date).getFullYear() || ""})
              </span>
            </h1>
            <div className='overview'>
              <p className='details-header'>Overview</p>
              <p className='details-text'>{movie.overview}</p>
            </div>

            <p className='details-header featured'>Featured Crew</p>
            <div className='credits'>
              <div className='credits-director'>
                <p className='details-text big'>Director</p>
                <p className='details-text'>{director}</p>
              </div>
              <div className='credits-screenplay'>
                <p className='details-text big'>Screenplay</p>
                <p className='details-text'>{screenplay}</p>
              </div>
            </div>

            <div className='social'>
              <p className='details-header'>Social media</p>
              <SocialComponent accounts={accounts} homepage={movie.homepage!} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;

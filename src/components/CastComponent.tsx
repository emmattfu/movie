import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICast, ICredits, ICreditsDetails } from "../types/types";

interface CastComponentProps {
  cast: ICredits[] | ICast[];
  type: string;
}

export const CastComponent: FC<CastComponentProps> = ({ cast, type }) => {
  return (
    <>
      <div className='cast'>
        <div className='container'>
          <p className='details-header'>
            {type === "movie" ? "Top Billed Cast" : "Series Cast"}
          </p>
          <div className='cast-wrapper'>
            {cast.length ? (
              cast.slice(0, 5).map((el: ICreditsDetails | ICast) => {
                return (
                  <div className='cast-card' key={el.id}>
                    <Link to={`/people/details/${el.id}`}>
                      <img
                        src={
                          el.profile_path
                            ? `https://image.tmdb.org/t/p/original/${el.profile_path}`
                            : "https://via.placeholder.com/150x225/F0F0F0/?Text=Photo"
                        }
                        alt='actor-img'
                      />
                    </Link>
                    <div className='cast-info'>
                      <p className='cast-name'>{el.name}</p>
                      <p>{el.character}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className='no-cast-text'>
                "We don't have any info about actors"
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CastComponent;

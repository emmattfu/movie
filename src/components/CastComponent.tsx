import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICredits } from "../types/types";

interface CastComponentProps {
  cast: ICredits[];
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
              cast.slice(0, 5).map((el) => {
                return (
                  <div className='cast-card' key={el.id}>
                    <Link to={`/people/details/${el.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                        alt='actor-img'
                      ></img>
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

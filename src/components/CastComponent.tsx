import React, { FC } from "react";
import { Link } from "react-router-dom";
import { pages } from "../constants";
import { ICast, ICredits, ICrew } from "../types/types";

type CastComponentProps = { type: string } & {
  cast: ICredits[] | ICast[] | ICrew[];
};

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
              cast.slice(0, 5).map((el: any) => {
                return (
                  <div className='cast-card' key={el.id}>
                    <Link to={`${pages.PEOPLE.DEFAULT_PATH}/${el.id}`}>
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

import React, { FC } from "react";
import { IKnownForMovie } from "../../types/types";

interface PeopleKnownForMovieComponentProps {
  film: IKnownForMovie;
}

const PeopleKnownForMovieComponent: FC<PeopleKnownForMovieComponentProps> = ({
  film,
}) => {
  return (
    <>
      {!film.title || film.title.length < 28 ? (
        <p className='people-known-for'>{film.title}</p>
      ) : (
        <p className='people-known-for'>{film.title.slice(0, 28) + "..."}</p>
      )}
    </>
  );
};

export default PeopleKnownForMovieComponent;

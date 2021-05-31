import React, { FC } from "react";
import { IKnownForShow } from "../../types/types";

interface PeopleKnownForShowComponentProps {
  film: IKnownForShow;
}

const PeopleKnownForShowComponent: FC<PeopleKnownForShowComponentProps> = ({
  film,
}) => {
  return (
    <>
      {!film.original_name || film.original_name.length < 28 ? (
        <p className='people-known-for'>{film.original_name}</p>
      ) : (
        <p className='people-known-for'>
          {film.original_name.slice(0, 28) + "..."}
        </p>
      )}
    </>
  );
};

export default PeopleKnownForShowComponent;

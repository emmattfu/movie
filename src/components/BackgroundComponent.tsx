import React, { FC } from "react";

interface BackgroundComponentProps {
  backdrop: string;
}

export const BackgroundComponent: FC<BackgroundComponentProps> = ({
  backdrop,
}) => {
  return (
    <div className='details-bg'>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop}`}
        alt='background'
      ></img>
    </div>
  );
};

export default BackgroundComponent;

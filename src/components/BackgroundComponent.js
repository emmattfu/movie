import React from "react";

function BackgroundComponent(props) {
  return (
    <div className="details-bg">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.backdrop}`}
        alt="background"
      ></img>
    </div>
  );
}

export default BackgroundComponent;

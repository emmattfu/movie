import React from "react";
import BigWidthShow from "./BigWidthShow";
import SmallWidthShow from "./SmallWidthShow";
import { useSelector } from "react-redux";

function ShowComponent() {
  const shows = useSelector(state => state.dataReducer.shows);
  const winWidth = useSelector(state => state.appReducer.width);

  if (!shows.length) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {shows.map(show => {
        return winWidth > 1000 ? (
          <BigWidthShow show={show} key={show.id} />
        ) : (
          <SmallWidthShow show={show}  key={show.id}/>
        );
      })}
    </>
  );
}

export default ShowComponent;

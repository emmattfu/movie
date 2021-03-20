import React from "react";
import BigWidthShow from "./BigWidthShow";
import SmallWidthShow from "./SmallWidthShow";
import { useSelector } from "react-redux";
import { showsSelector, widthSelector } from "../../redux/selectors/selectors";

function ShowComponent() {
  const shows = useSelector(showsSelector);
  const winWidth = useSelector(widthSelector);

  if (!shows.length) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {shows.map((show) => {
        return winWidth > 1000 ? (
          <BigWidthShow show={show} key={show.id} />
        ) : (
          <SmallWidthShow show={show} key={show.id} />
        );
      })}
    </>
  );
}

export default ShowComponent;

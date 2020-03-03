import React from "react";
import BigWidthShow from "./BigWidthShow";
import SmallWidthShow from "./SmallWidthShow";


function ShowComponent({ show, loading, winWidth }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {winWidth > 1000 ? <BigWidthShow show={show} /> : <SmallWidthShow show={show}/>}
    </>
  );
}

export default ShowComponent;

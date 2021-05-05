import React from "react";
import BackgroundComponent from "../../components/BackgroundComponent";
import ShowDetailsComponent from "../../components/ShowDetailsComponent.js";
import CastComponent from "../../components/CastComponent";
import { useParams } from "react-router";
import useShowDetails from "../../hooks/useShowDetails.js";

function ShowDetails() {
  const { id } = useParams();

  const { show, accounts, actors } = useShowDetails(id);

  if (!show || !actors) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <BackgroundComponent backdrop={show.backdrop_path} />
      <ShowDetailsComponent show={show} accounts={accounts} />
      <CastComponent cast={actors.cast} type='show' />
    </>
  );
}

export default ShowDetails;

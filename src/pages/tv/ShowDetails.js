import React, { useState, useEffect } from "react";
import api from "../../Api.js";
import BackgroundComponent from "../../components/BackgroundComponent.js";
import ShowDetailsComponent from "../../components/ShowDetailsComponent.js";
import CastComponent from "../../components/CastComponent.js"

const API = api();

function ShowDetails({ match }) {
  const id = match.params.id;

  const [show, setShow] = useState("");
  useEffect(() => {
    fetch(`${API.name}/tv/${id}?api_key=${API.key}&language=en-US`)
      .then(resp => resp.json())
      .then(resp => setShow(resp))
  }, [id]);

  const [accounts, setAccounts] = useState("");
  useEffect(() => {
    fetch(`${API.name}/tv/${id}/external_ids?api_key=${API.key}&language=en-US`)
      .then(resp => resp.json())
      .then(resp => setAccounts(resp));
  }, [id]);

  const [actors, setActors] = useState("");
  useEffect(() => {
    fetch(`${API.name}/tv/${id}/credits?api_key=${API.key}&language=en-US`)
    .then(resp => resp.json())
    .then(resp => setActors(resp.cast.slice(0,5)))
  }, [id])

  if (!show || !actors) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <BackgroundComponent backdrop={show.backdrop_path} />
      <ShowDetailsComponent show={show} accounts={accounts} />
      <CastComponent cast={actors}  type="show"/>
    </>
  );
}

export default ShowDetails;

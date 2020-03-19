import React, { useState, useEffect, useContext } from "react";
import api from "../../Api.js";
import PeopleDetailsBigWidth from "./PeopleDetailsBigWidth";
import PeopleDetailsSmallWidth from "./PeopleDetailsSmallWidth";
import WidthContext from "../../contexts/WidthContext";

const API = api();

function PeopleDetails({ match }) {
  const id = match.params.id;
  const [actor, setActor] = useState("");
  useEffect(() => {
    fetch(`${API.name}/person/${id}?api_key=${API.key}&language=en-US`)
      .then(resp => resp.json())
      .then(resp => {
        setActor(resp);
      });
  }, [id]);

  const [social, setSocial] = useState("");
  useEffect(() => {
    fetch(
      `${API.name}/person/${id}/external_ids?api_key=${API.key}&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => {
        setSocial(resp);
      });
  }, [id]);

  const [movies, setMovies] = useState("");
  useEffect(() => {
    fetch(
      `${API.name}/person/${id}/movie_credits?api_key=${API.key}&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => {
        setMovies(resp);
      });
  }, [id]);

  const [pageWidth] = useContext(WidthContext);

  if (!actor || !movies) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {pageWidth < 1000 ? (
        <PeopleDetailsSmallWidth
          actor={actor}
          social={social}
          movies={movies}
        />
      ) : (
        <PeopleDetailsBigWidth actor={actor} social={social} movies={movies} />
      )}
    </>
  );
}

export default PeopleDetails;

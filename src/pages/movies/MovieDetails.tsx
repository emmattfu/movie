import React from "react";
import CastComponent from "../../components/CastComponent";
import MovieDetailsComponent from "../../components/MovieDetailsComponent";
import BackgroundComponent from "../../components/BackgroundComponent";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { movieDetailsSelector } from "../../redux/selectors/selectors";
import useMovieDetails from "../../hooks/useMovieDetails";

let director: string, screenplay: string;

function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  useMovieDetails(id);

  const { movie, credits, accounts } = useSelector(movieDetailsSelector);

  console.log(credits);

  if (credits) {
    credits.crew.forEach((el) => {
      if (el.job === "Director") director = el.name;
      if (el.job === "Screenplay") screenplay = el.name;
    });
  }

  if (!movie || !credits) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <BackgroundComponent backdrop={movie.backdrop_path} />
      <MovieDetailsComponent
        movie={movie}
        accounts={accounts}
        director={director}
        screenplay={screenplay}
      />
      <CastComponent cast={credits.cast} type='movie' />
    </>
  );
}

export default MovieDetails;

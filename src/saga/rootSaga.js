import { all } from "redux-saga/effects";
import getMovieDetails from "./sagas/movieDetailsSaga";
import getMovies from "./sagas/moviesSaga";
import getPeople from "./sagas/peopleSaga";
import getPersonInfo from "./sagas/personSaga";
import getShowDetails from "./sagas/showDetailsSaga";
import getShows from "./sagas/showsSaga";

export default function* rootSaga() {
  yield all([
    getMovies(),
    getShows(),
    getPeople(),
    getPersonInfo(),
    getShowDetails(),
    getMovieDetails(),
  ]);
}

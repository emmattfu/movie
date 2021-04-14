import { all } from "redux-saga/effects";
import getMovies from "./sagas/moviesSaga";
import getPeople from "./sagas/peopleSaga";
import getPersonInfo from "./sagas/personSaga";
import getShows from "./sagas/showsSaga";

export default function* rootSaga() {
  yield all([getMovies(), getShows(), getPeople(), getPersonInfo()]);
}
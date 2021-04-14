import { takeEvery, put } from "redux-saga/effects";
import {
  getMoviesError,
  getMoviesLoading,
  getMoviesSuccessed,
} from "../../redux/slices/moviesSlice";
import api from "../../Api";
import { NOW_PLAYING_MOVIES } from "../../redux/types";

function* onGetMovies({ payload = { page: 1, type: NOW_PLAYING_MOVIES } }) {
  const { type, page } = payload;

  try {
    const resp = yield fetch(
      `${api().name}/movie/${type}?api_key=${api().key}&region=US&page=${page}`
    );
    const movies = yield resp.json();

    yield put(getMoviesSuccessed(movies.results));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

export default function* getMovies() {
  yield takeEvery(getMoviesLoading, onGetMovies);
}

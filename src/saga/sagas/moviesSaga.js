import { takeEvery, put } from "redux-saga/effects";
import {
  getMoviesError,
  getMoviesLoading,
  getMoviesSuccessed,
} from "../../redux/slices/moviesSlice";
import api from "../../Api";

function* onGetMovies() {
  try {
    const resp = yield fetch(
      `${api().name}/movie/now_playing?api_key=${api().key}&region=US&page=1`
    );
    const movies = yield resp.json();

    yield put(getMoviesSuccessed(movies));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

export default function* getMovies() {
  yield takeEvery(getMoviesLoading, onGetMovies);
}

import { takeEvery, put, call } from "redux-saga/effects";
import {
  getMoviesError,
  getMoviesLoading,
  getMoviesSuccessed,
} from "../../redux/slices/moviesSlice";
import { NOW_PLAYING_MOVIES } from "../../redux/types";
import { IResponce } from "../../types/types";
import { fetchData } from "../../helpers/fetch";

function* onGetMovies({
  payload = { page: 1, type: NOW_PLAYING_MOVIES },
}): Generator {
  const { type, page } = payload;

  try {
    const movies = yield call(fetchData, type, page, "movie");

    yield put(getMoviesSuccessed((movies as IResponce).results));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

export default function* getMovies() {
  yield takeEvery(getMoviesLoading, onGetMovies);
}

import { takeEvery, put } from "redux-saga/effects";
import {
  getMoviesError,
  getMoviesLoading,
  getMoviesSuccessed,
} from "../../redux/slices/moviesSlice";
import api from "../../Api";
import { NOW_PLAYING_MOVIES } from "../../redux/types";
import { IResponce } from "../../types/types";
import axios, { AxiosResponse } from "axios";

function* onGetMovies({
  payload = { page: 1, type: NOW_PLAYING_MOVIES },
}): Generator {
  const { type, page } = payload;

  try {
    const resp = yield axios.get(
      `${api().name}/movie/${type}?api_key=${api().key}&region=US&page=${page}`
    );
    const movies = yield (resp as AxiosResponse).data;

    yield put(getMoviesSuccessed((movies as IResponce).results));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

export default function* getMovies() {
  yield takeEvery(getMoviesLoading, onGetMovies);
}

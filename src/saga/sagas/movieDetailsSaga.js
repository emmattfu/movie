import { put, all, call, debounce } from "@redux-saga/core/effects";
import api from "../../Api";
import {
  getMovieDetailsError,
  getMovieDetailsLoading,
  getMovieDetailsSuccessed,
} from "../../redux/slices/movieDetailsSlice";

const API = api();

function* onGetMovieDetails(payload) {
  const id = payload.payload;

  try {
    const [movie, accounts, credits] = yield all([
      call(onGetMovie, id),
      call(onGetAccounts, id),
      call(onGetCredits, id),
    ]);
    yield put(getMovieDetailsSuccessed({ movie, accounts, credits }));
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

export default function* getMovieDetails() {
  yield debounce(500, getMovieDetailsLoading, onGetMovieDetails);
}

function* onGetMovie(id) {
  try {
    const data = yield fetch(
      `${API.name}/movie/${id}?api_key=${API.key}&language=en-US`
    );

    const movie = yield data.json();

    return movie;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* onGetAccounts(id) {
  try {
    const data = yield fetch(
      `${API.name}/movie/${id}/external_ids?api_key=${API.key}`
    );

    const accounts = yield data.json();
    return accounts;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* onGetCredits(id) {
  try {
    const data = yield fetch(
      `${API.name}/movie/${id}/credits?api_key=${API.key}&language=en-US`
    );
    const credits = yield data.json();
    return credits;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

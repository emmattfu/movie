import { put, call, debounce } from "@redux-saga/core/effects";
import {
  getMovieDetailsError,
  getMovieDetailsLoading,
  getMovieDetailsSuccessed,
} from "../../redux/slices/movieDetailsSlice";
import { fetchDataDetails } from "../../helpers/fetch";

function* onGetMovieDetails(payload: {
  type: string;
  payload: string;
}): Generator {
  const id = payload.payload;
  try {
    const movie = yield call(onGetMovie, id);
    const accounts = yield call(onGetAccounts, id);
    const credits = yield call(onGetCredits, id);

    yield put(getMovieDetailsSuccessed({ movie, accounts, credits }));
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

export default function* getMovieDetails() {
  yield debounce(500, getMovieDetailsLoading, onGetMovieDetails);
}

function* onGetMovie(id: string): Generator {
  try {
    const movie = yield call(fetchDataDetails, "movie", id);

    return movie;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* onGetAccounts(id: string): Generator {
  try {
    const accounts = yield call(fetchDataDetails, "movie", id, "external_ids");

    return accounts;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* onGetCredits(id: string): Generator {
  try {
    const credits = yield call(fetchDataDetails, "movie", id, "credits");
    return credits;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

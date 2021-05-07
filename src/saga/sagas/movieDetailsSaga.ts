import { put, call, debounce } from "@redux-saga/core/effects";
import api from "../../Api";
import {
  getMovieDetailsError,
  getMovieDetailsLoading,
  getMovieDetailsSuccessed,
} from "../../redux/slices/movieDetailsSlice";
import axios, { AxiosResponse } from "axios";

const API = api();

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
    const resp = yield axios.get(
      `${API.name}/movie/${id}?api_key=${API.key}&language=en-US`
    );

    const movie = yield (resp as AxiosResponse).data;

    return movie;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* onGetAccounts(id: string): Generator {
  try {
    const resp = yield axios.get(
      `${API.name}/movie/${id}/external_ids?api_key=${API.key}`
    );

    const accounts = yield (resp as AxiosResponse).data;
    return accounts;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* onGetCredits(id: string): Generator {
  try {
    const resp = yield axios.get(
      `${API.name}/movie/${id}/credits?api_key=${API.key}&language=en-US`
    );

    const credits = yield (resp as AxiosResponse).data;
    return credits;
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

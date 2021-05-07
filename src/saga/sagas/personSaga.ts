import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  getPersonError,
  getPersonLoading,
  getPersonSuccessed,
} from "../../redux/slices/personSlice";
import { clearPersonInfo } from "../../redux/slices/personSlice";
import api from "../../Api";
import axios, { AxiosResponse } from "axios";

function* onGetPersonInfo(payload: {
  type: string;
  payload: string;
}): Generator {
  const id = payload.payload;
  yield put(clearPersonInfo());

  try {
    const person = yield call(onGetPerson, id);
    const social = yield call(onGetPersonSocial, id);
    const movies = yield call(onGetPersonMovies, id);

    yield put(getPersonSuccessed({ person, social, movies }));
  } catch (error) {
    yield put(getPersonError(error));
  }
}

function* onGetPerson(id: string): Generator {
  const resp = yield axios.get(
    `${api().name}/person/${id}?api_key=${api().key}&language=en-US`
  );
  const person = yield (resp as AxiosResponse).data;
  return person;
}

function* onGetPersonSocial(id: string): Generator {
  const resp = yield axios.get(
    `${api().name}/person/${id}/external_ids?api_key=${
      api().key
    }&language=en-US`
  );
  const social = yield (resp as AxiosResponse).data;
  return social;
}

function* onGetPersonMovies(id: string): Generator {
  const resp = yield axios.get(
    `${api().name}/person/${id}/movie_credits?api_key=${
      api().key
    }&language=en-US`
  );
  const movies = yield (resp as AxiosResponse).data;
  return movies;
}

export default function* getPersonInfo() {
  yield takeEvery(getPersonLoading, onGetPersonInfo);
}

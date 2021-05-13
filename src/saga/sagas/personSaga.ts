import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  getPersonError,
  getPersonLoading,
  getPersonSuccessed,
} from "../../redux/slices/personSlice";
import { clearPersonInfo } from "../../redux/slices/personSlice";
import { fetchDataDetails } from "../../helpers/fetch";

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
  const person = yield call(fetchDataDetails, "person", id);

  return person;
}

function* onGetPersonSocial(id: string): Generator {
  const social = yield call(fetchDataDetails, "person", id, "external_ids");
  return social;
}

function* onGetPersonMovies(id: string): Generator {
  const movies = yield call(fetchDataDetails, "person", id, "movie_credits");
  return movies;
}

export default function* getPersonInfo() {
  yield takeEvery(getPersonLoading, onGetPersonInfo);
}

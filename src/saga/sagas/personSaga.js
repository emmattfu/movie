import { put, takeEvery, all, call } from "@redux-saga/core/effects";
import {
  getPersonError,
  getPersonLoading,
  getPersonSuccessed,
} from "../../redux/slices/personSlice";
import { clearPersonInfo } from "../../redux/slices/personSlice";
import api from "../../Api";

function* onGetPersonInfo(payload) {
  const id = payload.payload;

  yield put(clearPersonInfo());

  try {
    const [person, social, movies] = yield all([
      call(onGetPerson, id),
      call(onGetPersonSocial, id),
      call(onGetPersonMovies, id),
    ]);

    yield put(getPersonSuccessed({ person, social, movies }));
  } catch (error) {
    yield put(getPersonError(error));
  }
}

export default function* getPersonInfo() {
  yield takeEvery(getPersonLoading, onGetPersonInfo);
}

function* onGetPerson(id) {
  const data = yield fetch(
    `${api().name}/person/${id}?api_key=${api().key}&language=en-US`
  );
  const person = yield data.json();
  return person;
}

function* onGetPersonSocial(id) {
  const data2 = yield fetch(
    `${api().name}/person/${id}/external_ids?api_key=${
      api().key
    }&language=en-US`
  );
  const social = yield data2.json();
  return social;
}

function* onGetPersonMovies(id) {
  const data3 = yield fetch(
    `${api().name}/person/${id}/movie_credits?api_key=${
      api().key
    }&language=en-US`
  );
  const movies = yield data3.json();
  return movies;
}

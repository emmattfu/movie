import { takeEvery, put } from "redux-saga/effects";
import {
  getPeopleError,
  getPeopleLoading,
  getPeopleSuccessed,
} from "../../redux/slices/peopleSlice";
import api from "../../Api";

function* onGetPeople(payload) {
  const { type, page } = payload.payload;

  try {
    const resp = yield fetch(
      `${api().name}/person/${type}?api_key=${api().key}&region=US&page=${page}`
    );
    const people = yield resp.json();

    yield put(getPeopleSuccessed(people.results));
  } catch (error) {
    console.log(error);
    yield put(getPeopleError(error));
  }
}

export default function* getPeople() {
  yield takeEvery(getPeopleLoading, onGetPeople);
}

import { takeEvery, put } from "redux-saga/effects";
import {
  getPeopleError,
  getPeopleLoading,
  getPeopleSuccessed,
} from "../../redux/slices/peopleSlice";
import api from "../../Api";
import axios, { AxiosResponse } from "axios";
import { POPULAR_PEOPLE } from "../../redux/types";
import { IResponce } from "../../types/types";

function* onGetPeople({
  payload = { page: 1, type: POPULAR_PEOPLE },
}): Generator {
  const { type, page } = payload;

  try {
    const resp = yield axios.get(
      `${api().name}/person/${type}?api_key=${api().key}&region=US&page=${page}`
    );
    const people = yield (resp as AxiosResponse).data;

    yield put(getPeopleSuccessed((people as IResponce).results));
  } catch (error) {
    yield put(getPeopleError(error));
  }
}

export default function* getPeople() {
  yield takeEvery(getPeopleLoading, onGetPeople);
}

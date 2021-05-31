import { takeEvery, put, call } from "redux-saga/effects";
import {
  getPeopleError,
  getPeopleLoading,
  getPeopleSuccessed,
} from "../../redux/slices/peopleSlice";
import { POPULAR_PEOPLE } from "../../redux/types";
import { IResponce } from "../../types/types";
import { fetchData } from "../../helpers/fetch";

function* onGetPeople({
  payload = { page: 1, type: POPULAR_PEOPLE },
}): Generator {
  const { type, page } = payload;

  try {
    const people = yield call(fetchData, type, page, "person");

    yield put(getPeopleSuccessed((people as IResponce).results));
  } catch (error) {
    yield put(getPeopleError(error));
  }
}

export default function* getPeople() {
  yield takeEvery(getPeopleLoading, onGetPeople);
}

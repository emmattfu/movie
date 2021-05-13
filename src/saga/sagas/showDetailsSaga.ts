import { put, call, debounce } from "@redux-saga/core/effects";
import {
  getShowDetailsError,
  getShowDetailsLoading,
  getShowDetailsSuccessed,
} from "../../redux/slices/showDetailsSlice";
import { fetchDataDetails } from "../../helpers/fetch";

function* onGetShowDetails(payload: {
  type: string;
  payload: string;
}): Generator {
  const id = payload.payload;

  try {
    const show = yield call(onGetShow, id);
    const accounts = yield call(onGetAccounts, id);
    const actors = yield call(onGetActors, id);

    yield put(getShowDetailsSuccessed({ show, accounts, actors }));
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

export default function* getShowDetails() {
  yield debounce(500, getShowDetailsLoading, onGetShowDetails);
}

function* onGetShow(id: string): Generator {
  try {
    const show = yield call(fetchDataDetails, "tv", id);
    return show;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

function* onGetAccounts(id: string): Generator {
  try {
    const accounts = yield call(fetchDataDetails, "tv", id, "external_ids");
    return accounts;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

function* onGetActors(id: string): Generator {
  try {
    const actors = yield call(fetchDataDetails, "tv", id, "credits");
    return actors;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}
